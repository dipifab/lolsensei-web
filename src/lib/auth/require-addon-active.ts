// WP32 F5 — SSR add-on gate (Layer 1) for the `/[lang]/coach` dashboard.
//
// Mirrors `require-premium.ts` but enforces a different invariant: the route
// is reserved to users with at least one ACTIVE Coach add-on (`ai_coach_light`
// or `ai_coach_full`).
//
// Design choice (best-effort SSR gate):
//   The current backend JWT does NOT carry an `addon_codes` claim — that
//   information lives only in the `subscription_addon` table. Replicating the
//   query at the edge would require a DB roundtrip from the SolidStart worker,
//   which is undesirable both for latency and for keeping the gate idempotent
//   with the WP31 pattern.
//
//   Therefore Layer 1 here only checks JWT presence + freshness — the
//   authoritative check happens server-side via `Depends(require_addon_active)`
//   on every coach endpoint (Layer 3) and is reflected client-side by
//   `<AddonRequiredGate>` (Layer 2) which renders the upsell when the API
//   returns `403 addon_required`.
//
//   A user without JWT is bounced to `/[lang]/coach/addon` (the activation
//   page) which itself doubles as the sign-in surface for free users.
//
// Defense-in-depth: the backend remains the single authority. This helper's
// only job is UX (avoid flashing the dashboard before the BE rejects it).

import { isValidLocale, DEFAULT_LOCALE, type Locale } from '../../types/locale';

// ---------------------------------------------------------------------------
// Internal redirect helper (no @solidjs/router import — see require-premium)
// ---------------------------------------------------------------------------

function redirect(url: string, status = 302): Response {
  return new Response(null, {
    status,
    headers: { Location: url },
  });
}

// ---------------------------------------------------------------------------
// JWT decode (no signature verification — backend is the authority)
// ---------------------------------------------------------------------------

/**
 * Subset of JWT claims this layer cares about. The backend
 * `auth_service.create_access_token` emits `sub`, `email`, `tier`,
 * `google_id`, `exp`, `iat`, `type` — only `exp` and `sub` are required here.
 */
export interface AddonJwtClaims {
  sub?: string;
  exp?: number;
  /**
   * Reserved for a future enhancement: when the backend adds an
   * `addon_codes` claim to the JWT we can short-circuit the BE roundtrip.
   * Today the field is always `undefined`.
   */
  addon_codes?: string[];
}

export function decodeJwtPayload(token: string): AddonJwtClaims | null {
  if (typeof token !== 'string' || token.length === 0) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const segment = parts[1];
  if (!segment) return null;
  try {
    const padded = segment.replace(/-/g, '+').replace(/_/g, '/');
    const padding = padded.length % 4 === 0 ? '' : '='.repeat(4 - (padded.length % 4));
    const decoded =
      typeof atob === 'function'
        ? atob(padded + padding)
        : Buffer.from(padded + padding, 'base64').toString('binary');
    const json = decodeURIComponent(
      Array.from(decoded)
        .map((c) => `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`)
        .join(''),
    );
    const parsed = JSON.parse(json) as unknown;
    if (parsed && typeof parsed === 'object') {
      return parsed as AddonJwtClaims;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Returns `true` when the JWT looks usable for an addon-gated request:
 *   - claims object is present;
 *   - `exp` is either missing (no expiry) or still in the future.
 */
export function isUsableSession(claims: AddonJwtClaims | null): boolean {
  if (!claims) return false;
  if (typeof claims.exp === 'number' && claims.exp * 1000 < Date.now()) return false;
  return true;
}

/**
 * Best-effort early reject: returns `true` only when the JWT explicitly
 * advertises an `addon_codes` array NOT containing any of the required
 * codes. With today's JWT shape this never short-circuits (the field is
 * absent), so the function returns `false` and the page flow falls back
 * on the BE 403 reflected by `<AddonRequiredGate>`.
 */
export function jwtKnowsNoAddon(
  claims: AddonJwtClaims | null,
  required: readonly string[],
): boolean {
  if (!claims || !Array.isArray(claims.addon_codes)) return false;
  return required.every((code) => !claims.addon_codes!.includes(code));
}

// ---------------------------------------------------------------------------
// JWT extraction (mirror require-premium)
// ---------------------------------------------------------------------------

export interface RequireEventLike {
  request: { headers: Headers; url: string };
}

const COOKIE_KEYS: readonly string[] = ['jwt', 'lolsensei_jwt', 'access_token'];

export function extractJwt(event: RequireEventLike): string | null {
  const auth = event.request.headers.get('authorization');
  if (auth) {
    const match = auth.match(/^Bearer\s+(.+)$/i);
    if (match) {
      const value = match[1].trim();
      if (value.length > 0) return value;
    }
  }
  const cookieHeader = event.request.headers.get('cookie');
  if (!cookieHeader) return null;
  for (const cookie of cookieHeader.split(';')) {
    const eq = cookie.indexOf('=');
    if (eq <= 0) continue;
    const name = cookie.slice(0, eq).trim();
    if (!COOKIE_KEYS.includes(name)) continue;
    const value = cookie.slice(eq + 1).trim();
    if (value.length === 0) continue;
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

function resolveLocale(event: RequireEventLike): Locale {
  try {
    const url = new URL(event.request.url);
    const segments = url.pathname.split('/').filter(Boolean);
    const first = segments[0];
    if (first && isValidLocale(first)) return first;
  } catch {
    // fall through
  }
  return DEFAULT_LOCALE;
}

function buildFromQuery(event: RequireEventLike, requireSignin = false): string {
  try {
    const url = new URL(event.request.url);
    const path = `${url.pathname}${url.search}`;
    const params = new URLSearchParams({ from: path });
    if (requireSignin) params.set('signin', '1');
    return `?${params.toString()}`;
  } catch {
    return '';
  }
}

/** Default add-on codes accepted by the coach dashboard. */
export const DEFAULT_REQUIRED_ADDONS: readonly string[] = ['ai_coach_light', 'ai_coach_full'];

export interface RequireAddonActiveOptions {
  /**
   * Subset of add-on codes accepted by the route. Defaults to
   * `['ai_coach_light', 'ai_coach_full']` (any active add-on grants access).
   */
  requiredAddons?: readonly string[];
  /**
   * Where to redirect when the user lacks a usable session. Defaults to
   * `/[lang]/coach/addon` (the activation page) which doubles as a sign-in
   * surface — passing `from=` as query so the page can return the user back
   * after activation.
   */
  redirectTo?: string;
}

/**
 * SSR add-on gate. Throws a `redirect()` (SolidStart-native control flow)
 * when the request cannot be authenticated. Authoritative add-on enforcement
 * happens at the backend — this helper only short-circuits the SSR render
 * for clearly-unauthenticated visitors.
 *
 * @example
 * ```tsx
 * import { requireAddonActive } from '~/lib/auth/require-addon-active';
 *
 * export const route = {
 *   load: ({ event }) => {
 *     requireAddonActive(event);
 *     return loadCoachDashboard();
 *   },
 * };
 * ```
 */
export function requireAddonActive(
  event: RequireEventLike,
  options: RequireAddonActiveOptions = {},
): void {
  const required = options.requiredAddons ?? DEFAULT_REQUIRED_ADDONS;
  const locale = resolveLocale(event);
  const fallbackBase = options.redirectTo ?? `/${locale}/coach/addon`;

  const token = extractJwt(event);
  if (!token) {
    throw redirect(`${fallbackBase}${buildFromQuery(event, true)}`, 302);
  }
  const claims = decodeJwtPayload(token);
  if (!isUsableSession(claims)) {
    throw redirect(`${fallbackBase}${buildFromQuery(event, true)}`, 302);
  }
  // Best-effort early reject when the JWT explicitly tells us the user has
  // no matching add-on. Today this branch is dormant (claim not emitted).
  if (jwtKnowsNoAddon(claims, required)) {
    throw redirect(`${fallbackBase}${buildFromQuery(event)}`, 302);
  }
}
