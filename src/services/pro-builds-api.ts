// WP34 — Pro builds public API service layer (F2 frontend).
//
// SSR-safe fetch wrappers for:
//   - `GET /api/v1/public/pro-builds/{champion}/{role}`
//   - `GET /api/v1/public/pro-builds/leaderboard?champion=&role=&limit=`
//
// Backend contract: dev-repository/wp-34/design/api-contracts.md §1.2 / §1.3.
// Type contract: src/types/wp34.ts (mirrored from backend Pydantic schemas).
//
// Anonimizzazione: la response NON contiene mai `gameName`, `tagLine`,
// `summonerName` o `puuid` raw. Solo `puuid_bucket_id` (SHA-256, NON
// navigabile lato FE — no route `/pro/{id}` MVP).
//
// Same defensive error semantics di `counter-api.ts`: 404 / errori / schema
// mismatch -> `null`. Il route handler emette `noindex` quando non ci sono
// dati (parity backend `X-Robots-Tag: noindex` su 404).

import {
  type LeaderboardData,
  type ProBuildsData,
  type Wp34Role,
  isLeaderboardData,
  isProBuildsData,
} from '../types/wp34';

const FETCH_TIMEOUT_MS = 6_000;

// ---------------------------------------------------------------------------
// Backend base URL resolution (parity con services/match-api.ts).
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
// Pro builds — pattern dominante
// ---------------------------------------------------------------------------

export interface FetchProBuildsArgs {
  champion: string;
  role: Wp34Role;
  backendUrl?: string;
}

/**
 * Fetch pro builds aggregati 14gg per `(champion, role)`.
 * Returns:
 *   - `ProBuildsData` on 200 with valid schema.
 *   - `null` on 404 / network / non-200 / schema mismatch.
 */
export async function getProBuilds(
  args: FetchProBuildsArgs,
): Promise<ProBuildsData | null> {
  const base = (args.backendUrl ?? resolveBackendApiUrl()).replace(/\/+$/, '');
  const url = `${base}/api/v1/public/pro-builds/${encodeURIComponent(
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
        event: 'wp34_pro_builds_network_error',
        champion: args.champion,
        role: args.role,
        error: err instanceof Error ? err.message : String(err),
      }),
    );
    return null;
  }

  if (response.status === 404) return null;
  if (response.status !== 200) {
    console.warn(
      JSON.stringify({
        event: 'wp34_pro_builds_non_200',
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
        event: 'wp34_pro_builds_invalid_json',
        error: err instanceof Error ? err.message : String(err),
      }),
    );
    return null;
  }

  if (!isProBuildsData(parsed)) {
    console.warn(
      JSON.stringify({
        event: 'wp34_pro_builds_schema_mismatch',
        champion: args.champion,
        role: args.role,
      }),
    );
    return null;
  }
  return parsed;
}

// ---------------------------------------------------------------------------
// Leaderboard challenger
// ---------------------------------------------------------------------------

export interface FetchLeaderboardArgs {
  champion: string;
  role: Wp34Role;
  /** Default 10, max 50 (validato lato backend). */
  limit?: number;
  backendUrl?: string;
}

/**
 * Fetch leaderboard challenger anonimizzata per `(champion, role)`.
 * Anonimizzazione: solo `puuid_bucket_id` (SHA-256, non navigabile),
 * region, match count, win_rate_class qualitativo, signature.
 */
export async function getLeaderboard(
  args: FetchLeaderboardArgs,
): Promise<LeaderboardData | null> {
  const base = (args.backendUrl ?? resolveBackendApiUrl()).replace(/\/+$/, '');
  const limit = Math.max(1, Math.min(50, args.limit ?? 10));
  const params = new URLSearchParams({
    champion: args.champion,
    role: args.role,
    limit: String(limit),
  });
  const url = `${base}/api/v1/public/pro-builds/leaderboard?${params.toString()}`;

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
        event: 'wp34_leaderboard_network_error',
        error: err instanceof Error ? err.message : String(err),
      }),
    );
    return null;
  }

  if (response.status === 404) return null;
  if (response.status !== 200) {
    console.warn(
      JSON.stringify({
        event: 'wp34_leaderboard_non_200',
        status: response.status,
      }),
    );
    return null;
  }

  let parsed: unknown;
  try {
    parsed = await response.json();
  } catch {
    return null;
  }
  if (!isLeaderboardData(parsed)) {
    console.warn(
      JSON.stringify({ event: 'wp34_leaderboard_schema_mismatch' }),
    );
    return null;
  }
  return parsed;
}
