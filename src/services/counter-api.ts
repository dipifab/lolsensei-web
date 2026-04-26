// WP34 — Counter public API service layer (F2 frontend).
//
// SSR-safe fetch wrapper for `GET /api/v1/public/counters/{champion}/{role}`.
// Backend contract: dev-repository/wp-34/design/api-contracts.md §1.1.
// Type contract: src/types/wp34.ts (mirrored from backend Pydantic schemas).
//
// Public endpoint -> no auth, no JWT. Used SSR-side from route handlers
// (`/[lang]/champion/[champion]/counters`) so it must run cleanly on
// Cloudflare Workers (no Node-specific globals, plain `fetch`).
//
// Error semantics:
//   - 404           -> resolve to `null` (route renders the empty state).
//   - schema mismatch / non-200 -> resolve to `null` (defensive: SSR must
//     never throw an unhandled exception in the worker, otherwise the page
//     becomes a hard 500 instead of degrading gracefully).
//   - network error -> resolve to `null`.
// The route handler is the gatekeeper: it emits `noindex` headers when this
// helper returns `null`, identical pattern to WP30 tier-list-api.ts.

import { type CounterData, isCounterData, type Wp34Role } from '../types/wp34';

const FETCH_TIMEOUT_MS = 6_000;

// ---------------------------------------------------------------------------
// Backend base URL resolution (parity with services/match-api.ts WP31).
// ---------------------------------------------------------------------------

function pickEnv(value: unknown): string | undefined {
  return typeof value === 'string' && value.length > 0 ? value : undefined;
}

export function resolveBackendApiUrl(): string {
  const runtime =
    typeof globalThis !== 'undefined'
      ? pickEnv(
          (globalThis as { __BACKEND_API_URL__?: string }).__BACKEND_API_URL__,
        )
      : undefined;
  const buildTime =
    pickEnv(import.meta.env.VITE_BACKEND_API_URL) ??
    pickEnv(import.meta.env.VITE_API_BASE_URL);
  const raw = runtime ?? buildTime ?? 'https://api.lolsensei.com';
  return raw.replace(/\/+$/, '');
}

// ---------------------------------------------------------------------------
// Internal: abortable fetch with timeout
// ---------------------------------------------------------------------------

function abortableFetch(
  url: string,
  init: RequestInit,
  timeoutMs: number,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { ...init, signal: controller.signal }).finally(() =>
    clearTimeout(timer),
  );
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export interface FetchCountersArgs {
  champion: string;
  role: Wp34Role;
  /** Override base URL (test/preview). Default: production resolver. */
  backendUrl?: string;
}

/**
 * Fetch counter data for `(champion, role)`. Returns:
 *   - `CounterData` on 200 with valid schema.
 *   - `null` on 404 or any failure (network, non-200, schema mismatch).
 *
 * The route handler MUST treat `null` as "no data": render the empty state
 * + `<Meta name="robots" content="noindex">` (the backend already sends
 * `X-Robots-Tag: noindex` on 404; we mirror that signal client-side).
 */
export async function getCounters(
  args: FetchCountersArgs,
): Promise<CounterData | null> {
  const base = (args.backendUrl ?? resolveBackendApiUrl()).replace(/\/+$/, '');
  const url = `${base}/api/v1/public/counters/${encodeURIComponent(
    args.champion,
  )}/${encodeURIComponent(args.role)}`;

  let response: Response;
  try {
    response = await abortableFetch(
      url,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'User-Agent': 'lolsensei-web/wp34',
        },
      },
      FETCH_TIMEOUT_MS,
    );
  } catch (err) {
    console.warn(
      JSON.stringify({
        event: 'wp34_counters_network_error',
        champion: args.champion,
        role: args.role,
        error: err instanceof Error ? err.message : String(err),
      }),
    );
    return null;
  }

  if (response.status === 404) {
    return null;
  }
  if (response.status !== 200) {
    console.warn(
      JSON.stringify({
        event: 'wp34_counters_non_200',
        champion: args.champion,
        role: args.role,
        status: response.status,
      }),
    );
    return null;
  }

  let parsed: unknown;
  try {
    parsed = await response.json();
  } catch (err) {
    console.warn(
      JSON.stringify({
        event: 'wp34_counters_invalid_json',
        champion: args.champion,
        role: args.role,
        error: err instanceof Error ? err.message : String(err),
      }),
    );
    return null;
  }

  if (!isCounterData(parsed)) {
    console.warn(
      JSON.stringify({
        event: 'wp34_counters_schema_mismatch',
        champion: args.champion,
        role: args.role,
      }),
    );
    return null;
  }
  return parsed;
}
