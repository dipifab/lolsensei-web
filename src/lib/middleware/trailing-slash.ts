import { canonicalLocale } from '../i18n/locales';

/**
 * Result of trailing-slash / casing normalization. `null` from
 * `normalizeTrailingSlash` means the URL is already canonical and the
 * caller should pass the request through untouched.
 */
export type RedirectIntent = { location: string; status: 301 | 308 };

// Canonical locale set, in the lowercase form used for pattern matching.
// `zh-Hans` canonicalizes back to its BCP-47 casing via `canonicalLocale`.
// Kept local to the middleware to avoid mutating the `locales.ts` contract
// (whose `isSupportedLocale` is case-sensitive against the mixed-case set).
const LOCALES_LOWER = new Set<string>([
  'en', 'it', 'es', 'fr', 'de', 'pt-br', 'ko', 'zh-hans',
]);

function isLocaleLower(value: string): boolean {
  return LOCALES_LOWER.has(value);
}

function redirectStatus(method: string): 301 | 308 {
  return method === 'GET' || method === 'HEAD' ? 301 : 308;
}

/**
 * Pure port of `src/worker.ts::handleTrailingSlash`. Returns the target
 * `Location` + status for a redirect, or `null` when the URL is already
 * canonical. See worker.ts comments for the rule ordering.
 */
export function normalizeTrailingSlash(
  url: URL,
  method: string,
): RedirectIntent | null {
  const { pathname, search } = url;
  if (pathname === '/') return null;

  const lower = pathname.toLowerCase();
  // Collapse runs of `/` into a single `/` — e.g. `//en//foo` -> `/en/foo`.
  const collapsed = lower.replace(/\/{2,}/g, '/');

  // Rule 4: bare locale segment `/en` -> `/en/`.
  const rootMatch = collapsed.match(/^\/([a-z-]+)$/);
  if (rootMatch && isLocaleLower(rootMatch[1])) {
    const target = `/${canonicalLocale(rootMatch[1])}/${search}`;
    if (target !== pathname + search) {
      return { location: target, status: redirectStatus(method) };
    }
    return null;
  }

  // Rule 5: locale root `/en/` — canonical, only fix casing if needed.
  const localeRootMatch = collapsed.match(/^\/([a-z-]+)\/$/);
  if (localeRootMatch && isLocaleLower(localeRootMatch[1])) {
    const target = `/${canonicalLocale(localeRootMatch[1])}/${search}`;
    if (target !== pathname + search) {
      return { location: target, status: redirectStatus(method) };
    }
    return null;
  }

  // Rule 6: deep locale route with trailing slash `/en/foo/` -> `/en/foo`.
  const trailMatch = collapsed.match(/^\/([a-z-]+)\/(.+?)\/+$/);
  if (trailMatch && isLocaleLower(trailMatch[1])) {
    const target = `/${canonicalLocale(trailMatch[1])}/${trailMatch[2]}${search}`;
    return { location: target, status: redirectStatus(method) };
  }

  // Rule 7: case-only / double-slash normalization outside locale patterns.
  if (collapsed !== pathname) {
    return { location: collapsed + search, status: redirectStatus(method) };
  }

  // Rule 8: already canonical.
  return null;
}
