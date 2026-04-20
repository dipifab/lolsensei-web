import { createMiddleware } from '@solidjs/start/middleware';
import { normalizeTrailingSlash } from './lib/middleware/trailing-slash';
import { detectLocale } from './lib/middleware/locale-detection';

/**
 * SolidStart middleware orchestrator. Ports the edge-layer handlers
 * previously implemented in `src/worker.ts` into SolidStart's
 * `createMiddleware` pipeline so that the SolidStart deploy target
 * (Cloudflare Module Worker via `cloudflare-module` preset) can reuse
 * the same contract.
 *
 * Pipeline (onRequest, evaluated in declaration order; first handler
 * that returns a Response short-circuits downstream handlers and the
 * route handler itself):
 *
 *   1. Legacy admin alias: `/admin` + `/admin/*` -> 301 `/console[...]`
 *      (WP20 compat — preserves search string, permanent so caches
 *      absorb the redirect).
 *   2. CSP report sink: POST `/csp-report` -> 204 No Content. Body is
 *      intentionally discarded at this layer; the cloud-native log
 *      pipeline (wrangler tail / Cloudflare Logs) captures payloads.
 *   3. Root redirect: `/` -> 302 `/{detectLocale(Accept-Language)}/`.
 *      302 (not 301) so negotiated locale is not cached permanently
 *      against a UA that later changes language preferences.
 *   4. Trailing-slash / casing normalization via the pure helper in
 *      `lib/middleware/trailing-slash.ts`.
 *
 * onBeforeResponse: stamps `X-Robots-Tag: noindex, nofollow` and
 * `Cache-Control: no-store` on sensitive paths (checkout funnel,
 * console admin UI, auth callback).
 */

const NOINDEX_PATTERNS: readonly RegExp[] = [
  /^\/[^/]+\/checkout(\/|$)/,       // /{lang}/checkout or /{lang}/checkout/*
  /^\/console(\/|$)/,                // /console or /console/*
  /^\/console-login\/?$/,            // /console-login
  /^\/auth\/google\/callback\/?$/,   // /auth/google/callback
];

function isNoindex(pathname: string): boolean {
  return NOINDEX_PATTERNS.some((re) => re.test(pathname));
}

export default createMiddleware({
  onRequest: [
    // 1. Legacy /admin/* -> 301 /console/*
    (event) => {
      const url = new URL(event.request.url);
      if (url.pathname === '/admin' || url.pathname.startsWith('/admin/')) {
        const target = url.pathname.replace(/^\/admin/, '/console') + url.search;
        return Response.redirect(new URL(target, url).toString(), 301);
      }
    },
    // 2. CSP report endpoint
    (event) => {
      const url = new URL(event.request.url);
      if (url.pathname === '/csp-report' && event.request.method === 'POST') {
        return new Response(null, { status: 204 });
      }
    },
    // 3. Root redirect -> /{detected-locale}/
    (event) => {
      const url = new URL(event.request.url);
      if (url.pathname === '/') {
        const locale = detectLocale(event.request.headers.get('accept-language'));
        return Response.redirect(new URL(`/${locale}/`, url).toString(), 302);
      }
    },
    // 4. Trailing-slash / casing normalization
    (event) => {
      const url = new URL(event.request.url);
      const intent = normalizeTrailingSlash(url, event.request.method);
      if (intent) {
        return new Response(null, {
          status: intent.status,
          headers: {
            Location: intent.location,
            'Cache-Control': 'public, max-age=3600',
          },
        });
      }
    },
  ],
  onBeforeResponse: [
    (event) => {
      const url = new URL(event.request.url);
      if (isNoindex(url.pathname)) {
        event.response.headers.set('X-Robots-Tag', 'noindex, nofollow');
        event.response.headers.set('Cache-Control', 'no-store');
      }
    },
  ],
});
