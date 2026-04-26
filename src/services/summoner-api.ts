// WP30 — Summoner BE proxy with KV cache wrap (REQ-F-030-001/005/015).
//
// The route handler `[lang]/summoner/[region]/[handle].tsx` delegates ALL
// network IO to this service. It returns a tagged union the route handler
// can branch on without leaking HTTP status codes upstream.
//
// Cache strategy (DEC-OP-013):
//   1. KV read.
//   2. fresh    -> return as-is.
//   3. stale    -> still call BE in single-flight; if BE fails, fall back to
//                  stale data and the route emits `X-Cache: STALE-WHILE-ERROR`.
//   4. miss     -> single-flight BE call; KV write on success.
//
// 404 from BE is NEVER cached as "data" (REQ-F-030-005 — short-lived
// `Cache-Control: max-age=60` is enforced at the HTTP layer instead). 5xx
// also bypass the data cache; we use stale-while-error as the only resilience
// layer.

import {
  type CacheLookup,
  type KVNamespaceLike,
  kvKeyForSummoner,
  readKv,
  resolveKvBinding,
  withSingleFlight,
  writeKv,
} from '../lib/kv-cache';
import { type SummonerPayload, isSummonerPayload } from '../types/wp30';

const SUMMONER_TTL_S = 3_600; // 1h fresh window — REQ-F-030-005
const FETCH_TIMEOUT_MS = 4_000;

export type SummonerSource = 'fresh' | 'stale' | 'miss';

export type SummonerFetchResult =
  | { kind: 'success'; payload: SummonerPayload; source: SummonerSource }
  | { kind: 'not_found' }
  | { kind: 'service_unavailable' };

export interface FetchSummonerArgs {
  region: string;
  /** lowercase, NFC-normalized — produced by `normalizeHandle`. */
  gameName: string;
  /** lowercase, NFC-normalized — produced by `normalizeHandle`. */
  tagLine: string;
  lang: string;
  backendUrl: string;
  kv: KVNamespaceLike | undefined | null;
}

function abortableFetch(url: string, init: RequestInit, timeoutMs: number) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const merged: RequestInit = { ...init, signal: controller.signal };
  return fetch(url, merged).finally(() => clearTimeout(timer));
}

export async function fetchSummoner(
  args: FetchSummonerArgs,
): Promise<SummonerFetchResult> {
  const { region, gameName, tagLine, lang, backendUrl } = args;
  const kv = resolveKvBinding(args.kv);
  const cacheKey = kvKeyForSummoner(region, gameName, tagLine, lang);

  const lookup: CacheLookup<SummonerPayload> = await readKv<SummonerPayload>(
    kv,
    cacheKey,
  );

  if (lookup.kind === 'fresh') {
    return { kind: 'success', payload: lookup.data, source: 'fresh' };
  }

  // Both `stale` and `miss` go through single-flight to BE. Keep the lookup
  // captured so we can fall back to stale data on BE failure.
  return withSingleFlight(cacheKey, async () => {
    // Encoded handle in BE path; BE expects lowercase per ADR-WP30-D-04.
    const beUrl =
      `${backendUrl.replace(/\/+$/, '')}/api/v1/public/summoner/` +
      `${encodeURIComponent(region)}/` +
      `${encodeURIComponent(gameName)}-${encodeURIComponent(tagLine)}` +
      `?lang=${encodeURIComponent(lang)}`;

    let response: Response;
    try {
      response = await abortableFetch(
        beUrl,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Accept-Language': lang,
          },
        },
        FETCH_TIMEOUT_MS,
      );
    } catch (err) {
      // Network error or timeout. Prefer stale over hard 503.
      if (lookup.kind === 'stale') {
        return {
          kind: 'success',
          payload: lookup.data,
          source: 'stale',
        } satisfies SummonerFetchResult;
      }
      console.warn(
        JSON.stringify({
          event: 'summoner_api_network_error',
          region,
          error: err instanceof Error ? err.message : String(err),
        }),
      );
      return { kind: 'service_unavailable' };
    }

    if (response.status === 404) {
      // REQ-F-030-005 — never cache 404 payload in KV. The HTTP layer has its
      // own short Cache-Control: 60s for the negative response.
      return { kind: 'not_found' };
    }

    if (response.status >= 500 || response.status === 429) {
      if (lookup.kind === 'stale') {
        return {
          kind: 'success',
          payload: lookup.data,
          source: 'stale',
        } satisfies SummonerFetchResult;
      }
      return { kind: 'service_unavailable' };
    }

    if (response.status !== 200) {
      // 4xx other than 404 -> defensive: route already validated region/handle,
      // so this is most likely a transient BE rejection. Fall through to
      // stale or 503.
      if (lookup.kind === 'stale') {
        return {
          kind: 'success',
          payload: lookup.data,
          source: 'stale',
        } satisfies SummonerFetchResult;
      }
      return { kind: 'service_unavailable' };
    }

    let parsed: unknown;
    try {
      parsed = await response.json();
    } catch (err) {
      console.warn(
        JSON.stringify({
          event: 'summoner_api_invalid_json',
          region,
          error: err instanceof Error ? err.message : String(err),
        }),
      );
      if (lookup.kind === 'stale') {
        return {
          kind: 'success',
          payload: lookup.data,
          source: 'stale',
        } satisfies SummonerFetchResult;
      }
      return { kind: 'service_unavailable' };
    }

    if (!isSummonerPayload(parsed)) {
      console.warn(
        JSON.stringify({
          event: 'summoner_api_schema_mismatch',
          region,
        }),
      );
      if (lookup.kind === 'stale') {
        return {
          kind: 'success',
          payload: lookup.data,
          source: 'stale',
        } satisfies SummonerFetchResult;
      }
      return { kind: 'service_unavailable' };
    }

    await writeKv(kv, cacheKey, parsed, SUMMONER_TTL_S);
    return { kind: 'success', payload: parsed, source: 'miss' };
  });
}
