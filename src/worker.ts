/**
 * LoL Sensei — Cloudflare Worker (WP19 P4).
 *
 * Primary entry point wired via `wrangler.toml` (`main = "src/worker.ts"`).
 * Routing priorities match `api-contracts-wp19.md` §1 table.
 *
 * Handlers implemented in P4:
 *   - handleCspReport      POST /csp-report        (P4-009)
 *   - serveFavicon         GET/HEAD /favicon.ico   (P4-004)
 *   - handleTrailingSlash  GET/HEAD /<loc>/<p>/    (P4-005)
 *   - serve404             fallback                (P4-007)
 *
 * Handlers cancelled (user decision 2026-04-20 — ContactPage uses mailto: only):
 *   - handleContact        POST /api/contact       (P4-006 CANCELLED)
 *
 * Type declarations for Workers runtime are inlined below to avoid forcing
 * `@cloudflare/workers-types` onto the app `tsconfig` (which scopes `types`
 * to `vite/client`). A dedicated `tsconfig.worker.json` can be used for
 * deeper type-checking via `tsc -p tsconfig.worker.json --noEmit`.
 */

// --- Minimal Cloudflare Workers runtime types ------------------------------

// Ambient DOM fetch/Response/Request types come from `lib: ["DOM"]` in the
// app tsconfig. We only need to declare the Workers-specific bindings.

interface Fetcher {
  fetch(request: Request): Promise<Response>;
  fetch(input: string | URL, init?: RequestInit): Promise<Response>;
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

interface ExportedHandler<EnvT> {
  fetch(request: Request, env: EnvT, ctx: ExecutionContext): Promise<Response>;
}

// --- Allowlist -------------------------------------------------------------

// The allowlist is produced at build time by `scripts/generate-allowlist.mjs`
// and committed under `public/allowlist.json` (copied to `dist/` by Vite).
// The import below is a compile-time JSON module import so bundling with
// esbuild (via wrangler) inlines the data into the Worker bundle.
import allowlistData from '../public/allowlist.json' with { type: 'json' };

interface Allowlist {
  static: string[];
  routes: string[];
  assetsGlob: string[];
}

const ALLOWLIST: Allowlist = allowlistData as Allowlist;

// Pre-compute sets for O(1) lookup.
const STATIC_SET = new Set<string>(ALLOWLIST.static);
const ROUTES_SET = new Set<string>(ALLOWLIST.routes);

// Translate glob patterns (`/assets/*.css`, `/images/*`) into regex matchers.
// Supports `*` (non-slash wildcard) and `**` (any including slash). Matching
// anchors to the full pathname to avoid partial prefix matches.
const GLOB_MATCHERS: RegExp[] = ALLOWLIST.assetsGlob.map((pattern) => {
  const escaped = pattern
    .replace(/[.+^${}()|[\]\\]/g, '\\$&')
    .replace(/\*\*/g, '__DOUBLE_STAR__')
    .replace(/\*/g, '[^/]*')
    .replace(/__DOUBLE_STAR__/g, '.*');
  return new RegExp(`^${escaped}$`);
});

function isAllowlisted(pathname: string): boolean {
  if (STATIC_SET.has(pathname)) return true;
  if (ROUTES_SET.has(pathname)) return true;
  for (const re of GLOB_MATCHERS) {
    if (re.test(pathname)) return true;
  }
  return false;
}

// --- Env -------------------------------------------------------------------

export interface Env {
  /** Cloudflare `[assets]` binding — static files under `./dist`. */
  ASSETS: Fetcher;
}

// --- Constants -------------------------------------------------------------

const LOCALES_LOWER = [
  'en', 'it', 'es', 'fr', 'de', 'pt-br', 'ko', 'zh-hans',
] as const;
type LocaleLower = (typeof LOCALES_LOWER)[number];

// Canonical casing for the Location header. BCP-47 calls for `zh-Hans`
// (script subtag capitalized); every other locale stays lowercase.
const CANONICAL_LOCALE: Record<LocaleLower, string> = {
  'en': 'en',
  'it': 'it',
  'es': 'es',
  'fr': 'fr',
  'de': 'de',
  'pt-br': 'pt-br',
  'ko': 'ko',
  'zh-hans': 'zh-Hans',
};

function canonicalLocale(lower: string): string {
  return CANONICAL_LOCALE[lower as LocaleLower] ?? lower;
}

function isLocale(lower: string): lower is LocaleLower {
  return (LOCALES_LOWER as readonly string[]).includes(lower);
}

// --- Handlers --------------------------------------------------------------

/**
 * Serves `/favicon.ico` with an explicit 1-day cache. Falls back to an
 * inline 404 response instead of triggering the SPA `serve404` fallback
 * to prevent SEO indexers from treating `/favicon.ico` as an HTML page.
 */
async function serveFavicon(request: Request, env: Env): Promise<Response> {
  const assetReq = new Request(new URL('/favicon.ico', request.url).toString(), {
    method: 'GET',
    headers: request.headers,
  });
  const res = await env.ASSETS.fetch(assetReq);
  if (res.status === 200) {
    const headers = new Headers(res.headers);
    headers.set('Content-Type', 'image/x-icon');
    headers.set('Cache-Control', 'public, max-age=86400');
    return new Response(res.body, { status: 200, headers });
  }
  return new Response(null, {
    status: 404,
    headers: {
      'Content-Type': 'image/x-icon',
      'Cache-Control': 'public, max-age=300',
    },
  });
}

/**
 * Accepts CSP violation reports from browsers (both legacy `report-uri`
 * `application/csp-report` and modern Reporting API `application/reports+json`).
 * Emits a structured console log for `wrangler tail` and Cloudflare log
 * analytics; returns 204 without a body.
 *
 * Rate limiting is intentionally enforced at the Cloudflare WAF layer
 * (dashboard configuration, P4-016), not here.
 */
async function handleCspReport(request: Request): Promise<Response> {
  try {
    const text = await request.text();
    if (text) {
      console.error('[csp]', text);
    }
  } catch (err) {
    console.error('[csp] failed to read report body', err);
  }
  return new Response(null, { status: 204 });
}

/**
 * Renders the branded 404 page. Reads `public/404.html` via the ASSETS
 * binding; if unavailable (e.g., asset deploy skew), falls back to a
 * minimal inline document so the response always has a body.
 */
async function serve404(env: Env): Promise<Response> {
  let html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">'
    + '<title>404 - Page Not Found | LoL Sensei</title></head>'
    + '<body><h1>404 - Page Not Found</h1></body></html>';
  try {
    const res = await env.ASSETS.fetch(new Request('https://placeholder/404.html'));
    if (res.status === 200) {
      html = await res.text();
    }
  } catch (err) {
    console.error('[404] failed to read 404.html asset', err);
  }
  return new Response(html, {
    status: 404,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
      'X-Robots-Tag': 'noindex',
    },
  });
}

/**
 * Normalizes trailing slashes and casing:
 *   - `/en/foo/`  -> 301 `/en/foo`
 *   - `/EN/foo`   -> 301 `/en/foo`
 *   - `/en`       -> 301 `/en/`
 *   - `/en/`      -> null (passthrough)
 *   - `//en//foo` -> 301 `/en/foo`
 *
 * Locale-root paths (`/en/`, `/it/`, `/zh-Hans/`, …) are exempt from
 * trailing-slash stripping. `/zh-Hans/` keeps its BCP-47 casing: when
 * input is `/zh-hans/...`, the redirect uses the canonical form.
 *
 * For non-safe methods (POST/PUT/PATCH/DELETE) emits 308 to preserve
 * the method/body per RFC 7538.
 */
function handleTrailingSlash(url: URL, method: string): Response | null {
  const { pathname, search } = url;
  if (pathname === '/') return null;

  const lower = pathname.toLowerCase();
  // Collapse double slashes: `//en//foo` -> `/en/foo`.
  const collapsed = lower.replace(/\/{2,}/g, '/');

  // Root locale without trailing slash: `/en` -> `/en/`.
  const rootMatch = collapsed.match(/^\/([a-z-]+)$/);
  if (rootMatch && isLocale(rootMatch[1])) {
    const target = `/${canonicalLocale(rootMatch[1])}/${search}`;
    if (target !== pathname + search) return redirect(target, method);
    return null;
  }

  // Locale root `/en/` is canonical: preserve but correct casing if needed.
  const localeRootMatch = collapsed.match(/^\/([a-z-]+)\/$/);
  if (localeRootMatch && isLocale(localeRootMatch[1])) {
    const target = `/${canonicalLocale(localeRootMatch[1])}/${search}`;
    if (target !== pathname + search) return redirect(target, method);
    return null;
  }

  // Trailing slash on deep route: `/en/foo/` -> `/en/foo`.
  const trailMatch = collapsed.match(/^\/([a-z-]+)\/(.+?)\/+$/);
  if (trailMatch && isLocale(trailMatch[1])) {
    const target = `/${canonicalLocale(trailMatch[1])}/${trailMatch[2]}${search}`;
    return redirect(target, method);
  }

  // Case-only normalization (no locale prefix, or non-locale).
  if (collapsed !== pathname) {
    return redirect(collapsed + search, method);
  }

  return null;
}

function redirect(location: string, method: string): Response {
  const status = (method === 'GET' || method === 'HEAD') ? 301 : 308;
  return new Response(null, {
    status,
    headers: {
      'Location': location,
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

// --- Main dispatch ---------------------------------------------------------

export default {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const { pathname } = url;
    const method = request.method;

    // P2: CSP reporting endpoint.
    if (pathname === '/csp-report' && method === 'POST') {
      return handleCspReport(request);
    }

    // P3: dedicated favicon handler (explicit cache, no SPA fallback).
    if (pathname === '/favicon.ico' && (method === 'GET' || method === 'HEAD')) {
      return serveFavicon(request, env);
    }

    // P4-5: trailing slash + case normalization (GET/HEAD only per spec —
    // non-safe methods on canonicalized URLs are rare and we prefer not
    // to redirect bodies implicitly).
    if (method === 'GET' || method === 'HEAD') {
      const redirectRes = handleTrailingSlash(url, method);
      if (redirectRes) return redirectRes;
    }

    // P6: allowlist gate. Requests outside the allowlist skip the ASSETS
    // fetch and land on the branded 404 directly (avoids serving stale
    // SPA shell for non-existent routes — the core WP19 fix).
    if (isAllowlisted(pathname)) {
      const assetRes = await env.ASSETS.fetch(request);
      if (assetRes.status !== 404) return assetRes;
    }

    // P7: branded 404 fallback.
    return serve404(env);
  },
} satisfies ExportedHandler<Env>;
