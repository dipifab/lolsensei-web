// WP30 — Tier List BE proxy with KV cache wrap (REQ-F-030-002/006/015).
//
// Cache strategy (DEC-OP-013):
//   1. KV read with key `tier-list:<role>:<patch|auto>:<lang>`.
//   2. fresh -> return.
//   3. stale -> single-flight BE; fall back to stale on BE failure.
//   4. miss  -> single-flight BE; KV write on success.
//
// TTL choice:
//   - 24h fresh window when `insufficient_sample === false` (REQ-F-030-006).
//   - 1h fresh when `insufficient_sample === true` so the sample can grow
//     (cron daily 04:00 UTC may flip the flag mid-day).
//
// 404 (PATCH_NOT_FOUND from BE) is propagated as `service_unavailable` because
// from the user's perspective the tier list page is not actionable; the route
// will surface a 503 + Retry-After. We deliberately do NOT distinguish 404
// here — the page never goes "not found" semantically, only "no data yet".

import {
  type CacheLookup,
  type KVNamespaceLike,
  kvKeyForTierList,
  readKv,
  resolveKvBinding,
  withSingleFlight,
  writeKv,
} from '../lib/kv-cache';
import { type TierListPayload, isTierListPayload } from '../types/wp30';

const TIER_LIST_TTL_FRESH_S = 86_400; // 24h — REQ-F-030-006
const TIER_LIST_TTL_INSUFFICIENT_S = 3_600; // 1h when sample is too small
const FETCH_TIMEOUT_MS = 6_000;

export type TierListSource = 'fresh' | 'stale' | 'miss';

export type TierListFetchResult =
  | { kind: 'success'; payload: TierListPayload; source: TierListSource }
  | { kind: 'service_unavailable' };

export interface FetchTierListArgs {
  /** Whitelisted by route handler before reaching here. */
  role: string;
  /** Optional. `undefined` triggers BE auto-resolution (DEC-OP-014); we cache
   *  under sentinel `auto` until the BE response carries the resolved patch. */
  patch?: string;
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

export async function fetchTierList(
  args: FetchTierListArgs,
): Promise<TierListFetchResult> {
  const { role, patch, lang, backendUrl } = args;
  const kv = resolveKvBinding(args.kv);
  const cacheKey = kvKeyForTierList(role, patch ?? 'auto', lang);

  const lookup: CacheLookup<TierListPayload> = await readKv<TierListPayload>(
    kv,
    cacheKey,
  );
  if (lookup.kind === 'fresh') {
    return { kind: 'success', payload: lookup.data, source: 'fresh' };
  }

  return withSingleFlight(cacheKey, async () => {
    const params = new URLSearchParams({ role, lang });
    if (patch) params.set('patch', patch);
    const beUrl = `${backendUrl.replace(/\/+$/, '')}/api/v1/public/tier-list?${params.toString()}`;

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
      if (lookup.kind === 'stale') {
        return {
          kind: 'success',
          payload: lookup.data,
          source: 'stale',
        } satisfies TierListFetchResult;
      }
      console.warn(
        JSON.stringify({
          event: 'tier_list_api_network_error',
          role,
          patch: patch ?? 'auto',
          error: err instanceof Error ? err.message : String(err),
        }),
      );
      return { kind: 'service_unavailable' };
    }

    if (response.status >= 500 || response.status === 429 || response.status === 404) {
      if (lookup.kind === 'stale') {
        return {
          kind: 'success',
          payload: lookup.data,
          source: 'stale',
        } satisfies TierListFetchResult;
      }
      return { kind: 'service_unavailable' };
    }

    if (response.status !== 200) {
      // 422 (invalid role/lang) should never happen because the route handler
      // pre-validates. Treat as service_unavailable defensively.
      if (lookup.kind === 'stale') {
        return {
          kind: 'success',
          payload: lookup.data,
          source: 'stale',
        } satisfies TierListFetchResult;
      }
      return { kind: 'service_unavailable' };
    }

    let parsed: unknown;
    try {
      parsed = await response.json();
    } catch (err) {
      console.warn(
        JSON.stringify({
          event: 'tier_list_api_invalid_json',
          role,
          error: err instanceof Error ? err.message : String(err),
        }),
      );
      if (lookup.kind === 'stale') {
        return {
          kind: 'success',
          payload: lookup.data,
          source: 'stale',
        } satisfies TierListFetchResult;
      }
      return { kind: 'service_unavailable' };
    }

    if (!isTierListPayload(parsed)) {
      console.warn(
        JSON.stringify({ event: 'tier_list_api_schema_mismatch', role }),
      );
      if (lookup.kind === 'stale') {
        return {
          kind: 'success',
          payload: lookup.data,
          source: 'stale',
        } satisfies TierListFetchResult;
      }
      return { kind: 'service_unavailable' };
    }

    const ttl = parsed.insufficient_sample
      ? TIER_LIST_TTL_INSUFFICIENT_S
      : TIER_LIST_TTL_FRESH_S;
    await writeKv(kv, cacheKey, parsed, ttl);
    return { kind: 'success', payload: parsed, source: 'miss' };
  });
}
