// WP32 F5-02 — Add-on lifecycle API service layer.
//
// Typed methods consumed by the AI Coach activation page (`/[lang]/coach/addon`)
// and the dashboard cancel/swap flow:
//   - activate(addonCode, successUrl, cancelUrl) -> POST /api/v1/coach/addon/activate
//   - swapTier(toAddonCode)                       -> POST /api/v1/coach/addon/swap-tier
//   - deactivate(redirectToPortal)                -> DELETE /api/v1/coach/addon
//   - listStatus(limit?, offset?)                 -> GET /api/v1/coach/addon/status
//
// Reuses the same auth + base-URL infrastructure as `coach-api.ts`. Errors are
// modelled with the same hierarchy so the UI can branch uniformly.

import { getJwt } from '../auth/store';
import {
  CoachApiError,
  CoachConflictError,
  CoachNetworkError,
  CoachSchemaMismatchError,
  CoachUnauthenticatedError,
  resolveBackendApiUrl,
} from './coach-api';
import type {
  AddonCode,
  AddonListResponse,
  CheckoutRequest,
  CheckoutResponse,
  DeactivateRequest,
  DeactivateResponse,
  SwapTierRequest,
  SwapTierResponse,
} from '../types/wp32';

const DEFAULT_TIMEOUT_MS = 15_000;

interface AuthedFetchInit extends Omit<RequestInit, 'body' | 'headers'> {
  body?: BodyInit | Record<string, unknown>;
  headers?: HeadersInit;
  timeoutMs?: number;
  jwt?: string | null;
}

interface BackendErrorBody {
  detail?: string;
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
    case 409:
      throw new CoachConflictError(
        readDetail(errorBody, 'addon_conflict'),
        errorBody.current_addon_code ?? null,
      );
    default:
      throw new CoachApiError(
        response.status,
        readDetail(errorBody, `http_${response.status}`),
      );
  }
}

// ---------------------------------------------------------------------------
// Schema guards
// ---------------------------------------------------------------------------

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isCheckoutResponse(value: unknown): value is CheckoutResponse {
  return isObject(value) && typeof value.checkout_url === 'string';
}

function isSwapTierResponse(value: unknown): value is SwapTierResponse {
  if (!isObject(value)) return false;
  return (
    typeof value.from_addon_code === 'string' &&
    typeof value.to_addon_code === 'string' &&
    typeof value.swap_at === 'string'
  );
}

function isDeactivateResponse(value: unknown): value is DeactivateResponse {
  if (!isObject(value)) return false;
  // Discriminated union: portal-redirect branch has `portal_url`, direct-cancel
  // branch has `addon_code` + `status`.
  if (typeof value.portal_url === 'string') return true;
  return typeof value.addon_code === 'string' && typeof value.status === 'string';
}

function isAddonListResponse(value: unknown): value is AddonListResponse {
  if (!isObject(value)) return false;
  if (!Array.isArray(value.addons)) return false;
  if (!isObject(value.pagination)) return false;
  return (
    typeof value.pagination.limit === 'number' &&
    typeof value.pagination.offset === 'number' &&
    typeof value.pagination.total === 'number'
  );
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export interface AddonRequestOptions {
  jwt?: string | null;
}

/**
 * POST /api/v1/coach/addon/activate — create a Stripe Checkout session for
 * the given add-on. Returns the redirect URL the FE must navigate to.
 *
 * Throws:
 *   - {@link CoachConflictError} on 409 when the user already has the same
 *     add-on active (mutual-exclusion mutex, ADR-024).
 */
export async function activate(
  request: CheckoutRequest,
  options: AddonRequestOptions = {},
): Promise<CheckoutResponse> {
  const path = '/api/v1/coach/addon/activate';
  const data = await authedFetch(path, {
    method: 'POST',
    body: request as unknown as Record<string, unknown>,
    jwt: options.jwt,
  });
  if (!isCheckoutResponse(data)) {
    throw new CoachSchemaMismatchError(path);
  }
  return data;
}

/**
 * POST /api/v1/coach/addon/swap-tier — atomic swap between Light <-> Full.
 * Stripe applies a proration — the BE surfaces it best-effort in
 * `stripe_proration_amount_eur` (may be 0 placeholder, see F4-OI-5).
 */
export async function swapTier(
  request: SwapTierRequest,
  options: AddonRequestOptions = {},
): Promise<SwapTierResponse> {
  const path = '/api/v1/coach/addon/swap-tier';
  const data = await authedFetch(path, {
    method: 'POST',
    body: request as unknown as Record<string, unknown>,
    jwt: options.jwt,
  });
  if (!isSwapTierResponse(data)) {
    throw new CoachSchemaMismatchError(path);
  }
  return data;
}

/**
 * DELETE /api/v1/coach/addon — cancel the active add-on.
 *
 * Default behaviour (UX-OP-309): `redirect_to_portal: true` returns a
 * `portal_url` the FE must redirect to so the user confirms cancellation
 * inside Stripe's hosted Customer Portal.
 *
 * `redirect_to_portal: false` triggers the direct-cancel branch: the BE
 * marks the add-on with `cancel_at_period_end=true` and returns the new
 * status without a portal hop.
 */
export async function deactivate(
  request: DeactivateRequest = {},
  options: AddonRequestOptions = {},
): Promise<DeactivateResponse> {
  const path = '/api/v1/coach/addon';
  const data = await authedFetch(path, {
    method: 'DELETE',
    body: request as unknown as Record<string, unknown>,
    jwt: options.jwt,
  });
  if (!isDeactivateResponse(data)) {
    throw new CoachSchemaMismatchError(path);
  }
  return data;
}

export interface ListStatusOptions extends AddonRequestOptions {
  limit?: number;
  offset?: number;
}

/**
 * GET /api/v1/coach/addon/status — paginated list of the user's add-on
 * subscriptions (active + history). User-scoped (anti-IDOR enforced server
 * side — the FE simply rendering the list).
 */
export async function listStatus(
  options: ListStatusOptions = {},
): Promise<AddonListResponse> {
  const params = new URLSearchParams();
  if (options.limit !== undefined) params.set('limit', String(options.limit));
  if (options.offset !== undefined) params.set('offset', String(options.offset));
  const qs = params.toString();
  const path = `/api/v1/coach/addon/status${qs ? `?${qs}` : ''}`;
  const data = await authedFetch(path, { jwt: options.jwt });
  if (!isAddonListResponse(data)) {
    throw new CoachSchemaMismatchError(path);
  }
  return data;
}

// ---------------------------------------------------------------------------
// Test seam — exposed only for unit tests.
// ---------------------------------------------------------------------------

/** @internal */
export const __testing = { authedFetch };
