// WP32 F5-01 — Coach API service layer.
//
// Typed methods consumed by the AI Coach dashboard (`/[lang]/coach`):
//   - chat(message, lang)     -> POST /api/v1/coach/chat
//   - drill(weaknessFocus?, lang?) -> POST /api/v1/coach/drill
//   - weeklyRecap(week, lang) -> GET  /api/v1/coach/recap/{week_year}
//   - quota()                 -> GET  /api/v1/coach/quota
//
// Auth: Bearer JWT pulled from localStorage via `getJwt()` (WP21 store).
// Backend base URL: `BACKEND_API_URL` precedence — runtime env > Vite env >
// production fallback `https://api.lolsensei.com` (mirror match-api).
//
// Error mapping (api-contracts §2.5/3.5/...):
//   - 401                          -> CoachUnauthenticatedError
//   - 403 addon_required           -> CoachAddonRequiredError (drives <AddonRequiredGate>)
//   - 404                          -> CoachNotFoundError
//   - 409 addon_conflict           -> CoachConflictError
//   - 422                          -> CoachApiError (validation)
//   - 503 ai_provider_unavailable  -> CoachAiProviderError
//   - other 4xx/5xx                -> CoachApiError
//
// Quota-exceeded is NOT an HTTP error: api-contracts §2.4 documents that the
// backend returns HTTP 200 with `{ quota_exceeded: true, ... }`. Callers must
// branch on the `quota_exceeded` flag of the parsed response. This service
// surfaces those bodies as a discriminated union via the response types.
//
// Network failures (timeout, DNS, abort) surface as `CoachNetworkError`.

import { getJwt } from '../auth/store';
import type {
  AddonCode,
  ChatRequest,
  ChatResponse,
  CoachLanguage,
  DrillRequest,
  DrillResponse,
  QuotaExceededResponse,
  QuotaResponse,
  RecapResponse,
  WeekYear,
} from '../types/wp32';

// ---------------------------------------------------------------------------
// Backend base URL resolution (mirror match-api precedence chain)
// ---------------------------------------------------------------------------

function pickEnv(value: unknown): string | undefined {
  return typeof value === 'string' && value.length > 0 ? value : undefined;
}

export function resolveBackendApiUrl(): string {
  const runtime =
    typeof globalThis !== 'undefined'
      ? pickEnv((globalThis as { __BACKEND_API_URL__?: string }).__BACKEND_API_URL__)
      : undefined;
  const buildTime =
    pickEnv(import.meta.env.VITE_BACKEND_API_URL) ??
    pickEnv(import.meta.env.VITE_API_BASE_URL);
  const raw = runtime ?? buildTime ?? 'https://api.lolsensei.com';
  return raw.replace(/\/+$/, '');
}

// ---------------------------------------------------------------------------
// Error hierarchy
// ---------------------------------------------------------------------------

export class CoachApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly detail: string,
    message?: string,
  ) {
    super(message ?? `Coach API error ${status}: ${detail}`);
    this.name = 'CoachApiError';
  }
}

export class CoachUnauthenticatedError extends CoachApiError {
  constructor(detail = 'unauthenticated') {
    super(401, detail);
    this.name = 'CoachUnauthenticatedError';
  }
}

export class CoachAddonRequiredError extends CoachApiError {
  /** UI hint emitted by BE: which add-on the caller should activate. */
  public readonly addonRequired: AddonCode | null;

  constructor(detail = 'addon_required', addonRequired: AddonCode | null = null) {
    super(403, detail);
    this.name = 'CoachAddonRequiredError';
    this.addonRequired = addonRequired;
  }
}

export class CoachNotFoundError extends CoachApiError {
  constructor(detail = 'not_found') {
    super(404, detail);
    this.name = 'CoachNotFoundError';
  }
}

export class CoachConflictError extends CoachApiError {
  /** Currently active add-on code when the BE rejects a conflicting checkout. */
  public readonly currentAddonCode: AddonCode | null;

  constructor(detail = 'addon_conflict', currentAddonCode: AddonCode | null = null) {
    super(409, detail);
    this.name = 'CoachConflictError';
    this.currentAddonCode = currentAddonCode;
  }
}

/**
 * Quota-exceeded payload surfaced as a class so callers can `instanceof`
 * branch in the chat/drill flow. The backend signals quota exhaustion via
 * HTTP 200 + `quota_exceeded: true` (api-contracts §2.4) — the service maps
 * that branch to this error so the UI can render the upgrade upsell uniformly
 * with the other typed error paths.
 */
export class CoachQuotaExceededError extends CoachApiError {
  public readonly payload: QuotaExceededResponse;

  constructor(payload: QuotaExceededResponse) {
    super(200, 'quota_exceeded');
    this.name = 'CoachQuotaExceededError';
    this.payload = payload;
  }
}

export class CoachAiProviderError extends CoachApiError {
  constructor(detail = 'ai_provider_unavailable') {
    super(503, detail);
    this.name = 'CoachAiProviderError';
  }
}

export class CoachNetworkError extends Error {
  constructor(public readonly cause?: unknown) {
    super('Network error contacting the Coach backend');
    this.name = 'CoachNetworkError';
  }
}

export class CoachSchemaMismatchError extends Error {
  constructor(public readonly endpoint: string) {
    super(`Coach backend response did not match the expected schema (${endpoint})`);
    this.name = 'CoachSchemaMismatchError';
  }
}

// ---------------------------------------------------------------------------
// Internal: authed fetch with timeout + error mapping
// ---------------------------------------------------------------------------

const DEFAULT_TIMEOUT_MS = 20_000;

interface AuthedFetchInit extends Omit<RequestInit, 'body' | 'headers'> {
  body?: BodyInit | Record<string, unknown>;
  headers?: HeadersInit;
  /** Override the default 20s timeout (chat can take a while on Sonnet). */
  timeoutMs?: number;
  /** Optional pre-resolved JWT (skips the localStorage read on SSR). */
  jwt?: string | null;
  /** Accept-Language header (defaults to "en"). */
  language?: CoachLanguage;
}

interface BackendErrorBody {
  detail?: string;
  addon_code_required?: AddonCode;
  current_addon_code?: AddonCode;
}

function readDetail(body: BackendErrorBody, fallback: string): string {
  if (typeof body.detail === 'string' && body.detail.length > 0) return body.detail;
  return fallback;
}

async function parseErrorBody(res: Response): Promise<BackendErrorBody> {
  try {
    const j = (await res.json()) as BackendErrorBody;
    return j ?? {};
  } catch {
    return {};
  }
}

async function authedFetch(path: string, init: AuthedFetchInit = {}): Promise<unknown> {
  const baseUrl = resolveBackendApiUrl();
  const url = `${baseUrl}${path}`;
  const jwt = init.jwt !== undefined ? init.jwt : getJwt();
  if (!jwt) {
    throw new CoachUnauthenticatedError('missing_jwt');
  }

  const headers = new Headers(init.headers);
  headers.set('Authorization', `Bearer ${jwt}`);
  if (!headers.has('Accept')) {
    headers.set('Accept', 'application/json');
  }
  if (init.language && !headers.has('Accept-Language')) {
    headers.set('Accept-Language', init.language);
  }

  let body: BodyInit | undefined;
  if (init.body !== undefined && init.body !== null) {
    if (
      typeof init.body === 'string' ||
      init.body instanceof FormData ||
      init.body instanceof URLSearchParams ||
      init.body instanceof Blob ||
      init.body instanceof ArrayBuffer
    ) {
      body = init.body as BodyInit;
    } else {
      body = JSON.stringify(init.body);
      if (!headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/json');
      }
    }
  }

  const controller = new AbortController();
  const timeoutMs = init.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  let response: Response;
  try {
    response = await fetch(url, {
      ...init,
      method: init.method ?? 'GET',
      headers,
      body,
      signal: init.signal ?? controller.signal,
      credentials: 'omit',
    });
  } catch (err) {
    clearTimeout(timer);
    throw new CoachNetworkError(err);
  } finally {
    clearTimeout(timer);
  }

  if (response.ok) {
    if (response.status === 204) return null;
    try {
      return await response.json();
    } catch {
      throw new CoachSchemaMismatchError(path);
    }
  }

  const errorBody = await parseErrorBody(response);
  switch (response.status) {
    case 401:
      throw new CoachUnauthenticatedError(readDetail(errorBody, 'unauthenticated'));
    case 403:
      throw new CoachAddonRequiredError(
        readDetail(errorBody, 'addon_required'),
        errorBody.addon_code_required ?? null,
      );
    case 404:
      throw new CoachNotFoundError(readDetail(errorBody, 'not_found'));
    case 409:
      throw new CoachConflictError(
        readDetail(errorBody, 'addon_conflict'),
        errorBody.current_addon_code ?? null,
      );
    case 503:
      throw new CoachAiProviderError(readDetail(errorBody, 'ai_provider_unavailable'));
    default:
      throw new CoachApiError(
        response.status,
        readDetail(errorBody, `http_${response.status}`),
      );
  }
}

// ---------------------------------------------------------------------------
// Schema guards (lightweight runtime sniffing)
// ---------------------------------------------------------------------------

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isQuotaExceeded(value: unknown): value is QuotaExceededResponse {
  return isObject(value) && value.quota_exceeded === true;
}

function isChatResponse(value: unknown): value is ChatResponse {
  if (!isObject(value)) return false;
  return (
    typeof value.response === 'string' &&
    typeof value.model_used === 'string' &&
    typeof value.language === 'string'
  );
}

function isDrillResponse(value: unknown): value is DrillResponse {
  if (!isObject(value)) return false;
  return Array.isArray(value.drills) && (value.tier === 'light' || value.tier === 'full');
}

function isRecapResponse(value: unknown): value is RecapResponse {
  if (!isObject(value)) return false;
  // `recap` may be null when the recap has not been generated yet.
  if (value.tier !== 'light' && value.tier !== 'full') return false;
  return value.recap === null || isObject(value.recap);
}

function isQuotaResponse(value: unknown): value is QuotaResponse {
  if (!isObject(value)) return false;
  if (typeof value.addon_code !== 'string') return false;
  if (!isObject(value.current_quota)) return false;
  return typeof value.reset_at === 'string';
}

// ---------------------------------------------------------------------------
// Public API — coach surfaces
// ---------------------------------------------------------------------------

export interface CoachRequestOptions {
  /** Optional pre-resolved JWT (used by SSR loaders). */
  jwt?: string | null;
  /** Accept-Language header (defaults to "en"). */
  language?: CoachLanguage;
}

/**
 * POST /api/v1/coach/chat — single-turn chat with the AI coach.
 *
 * Throws:
 *   - {@link CoachAddonRequiredError} on 403 (no active add-on).
 *   - {@link CoachQuotaExceededError} when the BE returns 200 with
 *     `quota_exceeded: true` (REQ-F-032-013, api-contracts §2.4).
 *   - {@link CoachAiProviderError} on 503 (Anthropic 5xx — quota NOT consumed).
 */
export async function chat(
  request: ChatRequest,
  options: CoachRequestOptions = {},
): Promise<ChatResponse> {
  const path = '/api/v1/coach/chat';
  const data = await authedFetch(path, {
    method: 'POST',
    body: request as unknown as Record<string, unknown>,
    jwt: options.jwt,
    language: options.language,
    timeoutMs: 30_000,
  });
  if (isQuotaExceeded(data)) {
    throw new CoachQuotaExceededError(data);
  }
  if (!isChatResponse(data)) {
    throw new CoachSchemaMismatchError(path);
  }
  return data;
}

/**
 * POST /api/v1/coach/drill — generate a drill batch (3 light / 5 full).
 *
 * Tier-aware: full tier responses include `steps[]`, light tier returns
 * `steps: null` (defense-in-depth on the backend service layer too).
 */
export async function drill(
  request: DrillRequest = {},
  options: CoachRequestOptions = {},
): Promise<DrillResponse> {
  const path = '/api/v1/coach/drill';
  const data = await authedFetch(path, {
    method: 'POST',
    body: request as unknown as Record<string, unknown>,
    jwt: options.jwt,
    language: options.language,
    timeoutMs: 30_000,
  });
  if (isQuotaExceeded(data)) {
    throw new CoachQuotaExceededError(data);
  }
  if (!isDrillResponse(data)) {
    throw new CoachSchemaMismatchError(path);
  }
  return data;
}

/**
 * GET /api/v1/coach/recap/{week_year} — read the weekly recap (idempotent,
 * never consumes quota). When the recap row does not exist yet the BE returns
 * HTTP 200 with `recap: null` and `next_recap_at` populated (api-contracts
 * §4.5) — callers must NOT treat this as 404.
 */
export async function weeklyRecap(
  weekYear: WeekYear,
  options: CoachRequestOptions = {},
): Promise<RecapResponse> {
  const path = `/api/v1/coach/recap/${encodeURIComponent(weekYear)}`;
  const data = await authedFetch(path, {
    jwt: options.jwt,
    language: options.language,
  });
  if (!isRecapResponse(data)) {
    throw new CoachSchemaMismatchError(path);
  }
  return data;
}

/**
 * GET /api/v1/coach/recap — alias for the latest current-ISO-week recap.
 */
export async function latestRecap(options: CoachRequestOptions = {}): Promise<RecapResponse> {
  const path = '/api/v1/coach/recap';
  const data = await authedFetch(path, {
    jwt: options.jwt,
    language: options.language,
  });
  if (!isRecapResponse(data)) {
    throw new CoachSchemaMismatchError(path);
  }
  return data;
}

/**
 * GET /api/v1/coach/quota — snapshot of the 4 quota surfaces (chat, drill,
 * recap, consolidation). For light tier `consolidation_remaining` is `null`
 * (api-contracts §9.3).
 */
export async function quota(options: CoachRequestOptions = {}): Promise<QuotaResponse> {
  const path = '/api/v1/coach/quota';
  const data = await authedFetch(path, { jwt: options.jwt });
  if (!isQuotaResponse(data)) {
    throw new CoachSchemaMismatchError(path);
  }
  return data;
}

// ---------------------------------------------------------------------------
// Test seam — exposed only for unit tests, tree-shaken otherwise.
// ---------------------------------------------------------------------------

/** @internal */
export const __testing = { authedFetch };
