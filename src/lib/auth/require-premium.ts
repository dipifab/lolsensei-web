// WP31 F4-02 — SSR Premium gate (Layer 1).
//
// Decodes the JWT carried in the request (`Authorization` header or `jwt`
// cookie) and inspects the `effective_tier` claim issued server-side by
// `auth_service._build_jwt_payload` (F4-03). If the claim is missing or not
// in `('active','trialing')`, the helper throws a SolidStart `redirect()` so
// the route handler short-circuits before hydration:
//   - No JWT       -> 302 /[lang]/pricing?from=<original>&signin=1
//   - Wrong tier   -> 302 /[lang]/pricing?from=<original>
//   - JWT corrupt  -> treated as "no JWT" (defensive default — a malformed
//                     token cannot prove Premium, so we redirect to pricing
//                     where the sign-in CTA also lives).
//
// Layer 1 is best-effort: the JWT claim has 1h TTL so a freshly-upgraded user
// can still see a stale "free" claim. Layer 2 (`<PaywallGate>`) handles that
// race by rendering an inline upsell when the backend returns 403 on the
// authoritative endpoint. Layer 3 is the backend `Depends(require_premium)`.
//
// Defense-in-depth: even if this helper is bypassed (e.g. wrong route wiring),
// every WP31 backend endpoint enforces Premium gating server-side, so no
// data leaks. This file's job is UX (avoid flashing Premium UI before the
// backend rejects the request).

import { isValidLocale, DEFAULT_LOCALE, type Locale } from '../../types/locale';

// ---------------------------------------------------------------------------
// Internal redirect helper
// ---------------------------------------------------------------------------

// SolidStart's @solidjs/router `redirect()` returns a `Response` with the
// `Location` header set. We build it inline to avoid importing the router
// module from this file — the router's top-level evaluation triggers a
// `useLocation()` call that crashes outside a SolidJS render context (SSR
// pre-warm + vitest). The shape matches `redirect(url, status)` 1:1, and the
// route handlers receive the same `Response` either way.
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
 * Subset of JWT claims this layer cares about. Issued by the backend
 * `auth_service` (lolai/backend/app/services/auth_service.py). The full
 * payload contains other fields (`sub`, `iat`, `exp`, `email_hash`, ...)
 * that this layer intentionally ignores.
 */
export interface PremiumJwtClaims {
  sub?: string;
  effective_tier?: string;
  exp?: number;
}

/**
 * Subscription states that grant Premium access. Mirror of the backend
 * `subscription_service.get_effective_tier()` return values that map to
 * Premium (REQ-F-031-014).
 */
export const PREMIUM_TIERS: ReadonlySet<string> = new Set(['active', 'trialing']);

/**
 * Decode the payload of a JWT without verifying its signature. The signature
 * is validated by the backend on every authoritative call (`require_premium`
 * dependency); this client-side decode is only used to short-circuit the SSR
 * render. Returns `null` if the token is malformed.
 */
export function decodeJwtPayload(token: string): PremiumJwtClaims | null {
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
        : // Node fallback used by vitest; safe to ignore in browser bundles.
          Buffer.from(padded + padding, 'base64').toString('binary');
    const json = decodeURIComponent(
      Array.from(decoded)
        .map((c) => `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`)
        .join(''),
    );
    const parsed = JSON.parse(json) as unknown;
    if (parsed && typeof parsed === 'object') {
      return parsed as PremiumJwtClaims;
    }
    return null;
  } catch {
    return null;
  }
}

/** True iff the claim grants access to Premium-only routes. */
export function isPremiumClaim(claims: PremiumJwtClaims | null): boolean {
  if (!claims) return false;
  if (typeof claims.effective_tier !== 'string') return false;
  if (!PREMIUM_TIERS.has(claims.effective_tier)) return false;
  if (typeof claims.exp === 'number' && claims.exp * 1000 < Date.now()) return false;
  return true;
}

// ---------------------------------------------------------------------------
// JWT extraction from the FetchEvent (server-side)
// ---------------------------------------------------------------------------

/**
 * SolidStart's `FetchEvent` shape we depend on. We don't import the public
 * type because the helper is also unit-tested with hand-rolled fakes — the
 * structural type avoids a hard dependency on the framework's runtime.
 */
export interface RequireEventLike {
  request: { headers: Headers; url: string };
}

const COOKIE_KEYS: readonly string[] = ['jwt', 'lolsensei_jwt', 'access_token'];

/**
 * Read the JWT from `Authorization: Bearer ...` or the `jwt` cookie. Returns
 * `null` if neither carries a token.
 *
 * Matching cookie name `jwt` mirrors `src/auth/store.ts` (the canonical CSR
 * key); `lolsensei_jwt` and `access_token` are tolerated for backwards
 * compatibility with intermediate names used during early WP21 prototypes.
 */
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

/**
 * Best-effort locale resolution from the request URL `/[lang]/...` prefix.
 * Falls back to `en` so the redirect target is always valid even on routes
 * we cannot pattern-match (defensive — should not happen since this helper
 * is only called from `[lang]` routes).
 */
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

/**
 * Captures the original path so the pricing/login flow can redirect back
 * after the user upgrades or signs in. When `requireSignin` is true, also
 * appends `signin=1` so the pricing page can surface the sign-in CTA more
 * prominently (the page itself decides how to render that flag).
 */
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

/**
 * SSR Premium gate. Throws a `redirect()` (SolidStart-native control flow)
 * when the request does not present a Premium JWT.
 *
 * @example
 * ```tsx
 * import { requirePremium } from '~/lib/auth/require-premium';
 *
 * export const route = {
 *   load: ({ event }) => {
 *     requirePremium(event);
 *     return getMatchHistory();
 *   },
 * };
 * ```
 */
export function requirePremium(event: RequireEventLike): void {
  const token = extractJwt(event);
  if (!token) {
    throw redirect(`/${resolveLocale(event)}/pricing${buildFromQuery(event, true)}`, 302);
  }
  const claims = decodeJwtPayload(token);
  if (!isPremiumClaim(claims)) {
    throw redirect(`/${resolveLocale(event)}/pricing${buildFromQuery(event)}`, 302);
  }
}
