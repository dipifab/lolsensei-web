// WP31 F4-01 — Match-API service layer.
//
// Five typed methods consumed by the Premium dashboard (match-history list,
// match detail, review generation/read, quota badge) plus the manual
// event-driven ingest enqueue. Implements the contract documented in
// dev-repository/wp-31/design/api-contracts.md sezione 6.
//
// Auth: Bearer JWT pulled from localStorage via `getJwt()` (WP21 store).
// Backend base URL: `BACKEND_API_URL` precedence — runtime env > Vite env >
// production fallback `https://api.lolsensei.com`. The runtime env path lets
// SSR (SolidStart Cloudflare worker) inject a different base for staging or
// preview deployments without rebuilding.
//
// Error mapping: backend status codes are mapped to dedicated error classes so
// callers (route handlers, components) can branch with `instanceof` instead of
// inspecting opaque numeric codes:
//   - 401 / missing-jwt -> `UnauthenticatedError`
//   - 403 premium_required -> `PremiumRequiredError` (drives <PaywallGate>)
//   - 404 -> `NotFoundError`
//   - 429 rate_limited -> `RateLimitedError` (carries Retry-After seconds)
//   - 502 ai_provider_error -> `AiProviderError`
//   - other 4xx/5xx -> `ApiError`
//
// Network failures (timeout, DNS, abort) surface as `NetworkError`.

import { getJwt } from '../auth/store';
import type {
  IngestResponse,
  MatchDetail,
  MatchHistoryResponse,
  MatchId,
  QuotaResponse,
  Region,
  ReviewResponse,
} from '../types/wp31';
import {
  isIngestResponse,
  isMatchDetail,
  isMatchHistoryResponse,
  isQuotaResponse,
  isReviewResponse,
} from '../types/wp31';

// ---------------------------------------------------------------------------
// Backend base URL resolution
// ---------------------------------------------------------------------------

/**
 * Resolve the backend base URL.
 *
 * Precedence:
 *   1. `globalThis.__BACKEND_API_URL__` if defined (allows SSR injection from
 *      the Cloudflare worker at request time without rebuild).
 *   2. `import.meta.env.VITE_BACKEND_API_URL` (build-time Vite env).
 *   3. `import.meta.env.VITE_API_BASE_URL` (legacy, kept for parity with
 *      `lib/dsr.ts` and `lib/consent.ts`).
 *   4. Production fallback `https://api.lolsensei.com`.
 *
 * Trailing slashes are stripped so callers can append `/api/...` safely.
 */
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

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly detail: string,
    message?: string,
  ) {
    super(message ?? `API error ${status}: ${detail}`);
    this.name = 'ApiError';
  }
}

export class UnauthenticatedError extends ApiError {
  constructor(detail = 'unauthenticated') {
    super(401, detail);
    this.name = 'UnauthenticatedError';
  }
}

export class PremiumRequiredError extends ApiError {
  constructor(detail = 'premium_required') {
    super(403, detail);
    this.name = 'PremiumRequiredError';
  }
}

export class NotFoundError extends ApiError {
  constructor(detail = 'not_found') {
    super(404, detail);
    this.name = 'NotFoundError';
  }
}

export class RateLimitedError extends ApiError {
  /** Seconds until retry as advertised by `Retry-After`. `null` if absent. */
  public readonly retryAfterSeconds: number | null;

  constructor(detail = 'rate_limited', retryAfterSeconds: number | null = null) {
    super(429, detail);
    this.name = 'RateLimitedError';
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

export class AiProviderError extends ApiError {
  constructor(detail = 'ai_provider_error') {
    super(502, detail);
    this.name = 'AiProviderError';
  }
}

export class NetworkError extends Error {
  constructor(public readonly cause?: unknown) {
    super('Network error contacting the backend');
    this.name = 'NetworkError';
  }
}

export class SchemaMismatchError extends Error {
  constructor(public readonly endpoint: string) {
    super(`Backend response did not match the expected schema (${endpoint})`);
    this.name = 'SchemaMismatchError';
  }
}

// ---------------------------------------------------------------------------
// Internal: authed fetch with default timeout + JSON envelope parsing
// ---------------------------------------------------------------------------

const DEFAULT_TIMEOUT_MS = 15_000;

interface AuthedFetchInit extends Omit<RequestInit, 'body' | 'headers'> {
  body?: BodyInit | Record<string, unknown>;
  headers?: HeadersInit;
  /** Override the default 15s timeout. */
  timeoutMs?: number;
  /** Optional pre-resolved JWT (skips the localStorage read). */
  jwt?: string | null;
}

interface BackendErrorBody {
  detail?: string | { error?: { code?: string; message?: string } };
  retry_after?: number;
}

function readRetryAfter(res: Response, body: BackendErrorBody): number | null {
  const header = res.headers.get('Retry-After');
  if (header != null) {
    const n = Number(header);
    if (Number.isFinite(n) && n >= 0) return Math.floor(n);
  }
  if (typeof body.retry_after === 'number' && Number.isFinite(body.retry_after)) {
    return Math.floor(body.retry_after);
  }
  return null;
}

function readDetail(body: BackendErrorBody, fallback: string): string {
  const d = body.detail;
  if (typeof d === 'string') return d;
  if (d && typeof d === 'object' && 'error' in d && d.error?.message) {
    return d.error.message;
  }
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
    throw new UnauthenticatedError();
  }

  const headers = new Headers(init.headers);
  headers.set('Authorization', `Bearer ${jwt}`);
  if (!headers.has('Accept')) {
    headers.set('Accept', 'application/json');
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
    throw new NetworkError(err);
  } finally {
    clearTimeout(timer);
  }

  if (response.ok) {
    if (response.status === 204) return null;
    try {
      return await response.json();
    } catch {
      throw new SchemaMismatchError(path);
    }
  }

  const errorBody = await parseErrorBody(response);
  switch (response.status) {
    case 401:
      throw new UnauthenticatedError(readDetail(errorBody, 'unauthenticated'));
    case 403:
      throw new PremiumRequiredError(readDetail(errorBody, 'premium_required'));
    case 404:
      throw new NotFoundError(readDetail(errorBody, 'not_found'));
    case 429:
      throw new RateLimitedError(
        readDetail(errorBody, 'rate_limited'),
        readRetryAfter(response, errorBody),
      );
    case 502:
      throw new AiProviderError(readDetail(errorBody, 'ai_provider_error'));
    default:
      throw new ApiError(response.status, readDetail(errorBody, `http_${response.status}`));
  }
}

// ---------------------------------------------------------------------------
// Public API — 5 methods (REQ-F-031-005/006/007/008/022)
// ---------------------------------------------------------------------------

export interface GetMatchHistoryOptions {
  cursor?: string;
  limit?: number;
  /** Optional pre-resolved JWT (used by SSR loaders). */
  jwt?: string | null;
}

/**
 * GET /api/v1/premium/match-history — paginated list of the user's last 30
 * competitive matches. `cursor=null` in the response means the list is
 * exhausted.
 */
export async function getMatchHistory(
  options: GetMatchHistoryOptions = {},
): Promise<MatchHistoryResponse> {
  const params = new URLSearchParams();
  if (options.limit !== undefined) {
    params.set('limit', String(options.limit));
  }
  if (options.cursor) {
    params.set('cursor', options.cursor);
  }
  const qs = params.toString();
  const path = `/api/v1/premium/match-history${qs ? `?${qs}` : ''}`;
  const data = await authedFetch(path, { jwt: options.jwt });
  if (!isMatchHistoryResponse(data)) {
    throw new SchemaMismatchError(path);
  }
  return data;
}

/**
 * GET /api/v1/premium/match/{matchId} — full timeline + summary + cached
 * review when present. Backend transparently hydrates from R2 cold storage
 * when the match is older than 90 days (`storage_tier === 'cold'`).
 */
export async function getMatchDetail(
  matchId: MatchId,
  options: { jwt?: string | null } = {},
): Promise<MatchDetail> {
  const path = `/api/v1/premium/match/${encodeURIComponent(matchId)}`;
  const data = await authedFetch(path, { jwt: options.jwt });
  if (!isMatchDetail(data)) {
    throw new SchemaMismatchError(path);
  }
  return data;
}

/**
 * Backwards-compatible alias of {@link getMatchDetail}, named after the
 * design doc (api-contracts.md §6) — the route handler in
 * `routes/[lang]/match/[id].tsx` calls `getMatch(...)`.
 */
export const getMatch = getMatchDetail;

/**
 * POST /api/match/ingest — manually enqueue a match-V5 ingest job. Used when
 * the desktop client detects the user just finished a game. Idempotent: a
 * second call for the same match_id returns `enqueued: false` without error.
 */
export async function triggerIngest(
  matchId: MatchId,
  region: Region,
  options: { jwt?: string | null } = {},
): Promise<IngestResponse> {
  const path = '/api/match/ingest';
  const data = await authedFetch(path, {
    method: 'POST',
    body: { match_id: matchId, region },
    jwt: options.jwt,
  });
  if (!isIngestResponse(data)) {
    throw new SchemaMismatchError(path);
  }
  return data;
}

/**
 * POST /api/v1/premium/match/{matchId}/review — generate (or re-fetch
 * cached) AI review for a match. Quota-gated: 10 successful generations per
 * rolling 24h. Idempotent: a second call for the same match returns the
 * cached row without consuming quota.
 *
 * Throws:
 *   - {@link RateLimitedError} on 429 (cap reached, `retryAfterSeconds`).
 *   - {@link AiProviderError} on 502 (Anthropic 5xx — quota NOT consumed).
 *   - {@link NotFoundError} on 404 (timeline missing or anti-IDOR).
 */
export async function generateReview(
  matchId: MatchId,
  options: { jwt?: string | null } = {},
): Promise<ReviewResponse> {
  const path = `/api/v1/premium/match/${encodeURIComponent(matchId)}/review`;
  const data = await authedFetch(path, {
    method: 'POST',
    body: {},
    jwt: options.jwt,
    // Reviews can take up to 8s (REQ-NF-031-001) so we allow more headroom.
    timeoutMs: 30_000,
  });
  if (!isReviewResponse(data)) {
    throw new SchemaMismatchError(path);
  }
  return data;
}

/**
 * GET /api/v1/premium/match/{matchId}/review — read the cached review
 * (idempotent, never consumes quota). 404 means "no review yet" — caller
 * should fall back to {@link generateReview}.
 */
export async function getReview(
  matchId: MatchId,
  options: { jwt?: string | null } = {},
): Promise<ReviewResponse> {
  const path = `/api/v1/premium/match/${encodeURIComponent(matchId)}/review`;
  const data = await authedFetch(path, { jwt: options.jwt });
  if (!isReviewResponse(data)) {
    throw new SchemaMismatchError(path);
  }
  return data;
}

/**
 * GET /api/v1/premium/quota/post-game-review — daily quota usage counter for
 * the badge UI (OP-033). Backend computes the rolling 24h window
 * server-side; FE only renders the values.
 */
export async function getQuota(
  options: { jwt?: string | null } = {},
): Promise<QuotaResponse> {
  const path = '/api/v1/premium/quota/post-game-review';
  const data = await authedFetch(path, { jwt: options.jwt });
  if (!isQuotaResponse(data)) {
    throw new SchemaMismatchError(path);
  }
  return data;
}

// ---------------------------------------------------------------------------
// Test seam — exposed only for unit tests (vitest), tree-shaken otherwise.
// ---------------------------------------------------------------------------

/**
 * Internal `authedFetch` exported only for tests. Production callers MUST use
 * the typed methods above so schema validation and error mapping stay
 * consistent across the codebase.
 *
 * @internal
 */
export const __testing = { authedFetch };
