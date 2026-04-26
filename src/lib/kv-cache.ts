// WP30 — Cloudflare Workers KV cache helpers (DEC-OP-013, DEC-OP-027).
//
// One namespace `LOLAI_PUBLIC_CACHE` (binding name; the actual KV ID is bound
// at deploy time via `wrangler.toml [[kv_namespaces]]` — see TASK-WP30-F0-03,
// blocked on founder action TASK-WP30-F0-NOP-002 at the moment).
//
// Envelope format ({data, fetched_at, ttl}) is mirrored in
// `src/types/wp30.ts :: KvCacheEnvelope<T>`.
//
// 3-branch lookup (DEC-OP-013):
//   age = now - fetched_at
//   age <  ttl                          -> { kind: 'fresh' }
//   ttl <= age < ttl + STALE_WINDOW_S   -> { kind: 'stale' }  (serve + bg refresh)
//   else (or null)                      -> { kind: 'miss' }
//
// `STALE_WINDOW_S = 14400` (4h). KV native `expirationTtl` is set to
// `ttl + STALE_WINDOW_S` so KV reaps the entry after the stale window.
//
// Single-flight (DEC-OP-026):
//   Module-level `Map<string, Promise<unknown>>` deduplicates concurrent
//   refreshes inside one isolate. Best-effort across isolates (multiple workers
//   in flight on different POPs may all refresh once each — accepted tradeoff).
//   Cleanup is in `.finally()` so a rejection still releases the slot.
//
// KV write errors (DEC-OP-032): swallowed and logged; never propagate to UX.

import type { KvCacheEnvelope } from '../types/wp30';

// Minimal local definition so we don't have to add @cloudflare/workers-types
// to the global tsconfig types array (which would impact non-WP30 modules).
// Mirrors the `KVNamespace.get` / `.put` shapes we actually use.
export interface KVNamespaceLike {
  get<T = unknown>(key: string, type: 'json'): Promise<T | null>;
  put(
    key: string,
    value: string,
    options?: { expirationTtl?: number },
  ): Promise<void>;
}

export type CacheLookup<T> =
  | { kind: 'fresh'; data: T }
  | { kind: 'stale'; data: T }
  | { kind: 'miss' };

export const STALE_WINDOW_S = 14_400; // 4 hours

// Single-flight registry. Module-level on purpose: lifetime = isolate.
const inflight = new Map<string, Promise<unknown>>();

// Local in-memory fallback used in dev (`wrangler dev` does NOT bind KV
// namespaces by default unless `--kv` is passed). NOT a mock of payload data:
// it only stores REAL responses from the BE for the lifetime of the dev
// process. In production this Map stays empty because the real KV binding is
// always present (and we short-circuit to it).
const devMemoryStore = new Map<string, string>();

class DevMemoryKv implements KVNamespaceLike {
  async get<T = unknown>(key: string, _type: 'json'): Promise<T | null> {
    const raw = devMemoryStore.get(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  async put(
    key: string,
    value: string,
    _options?: { expirationTtl?: number },
  ): Promise<void> {
    // Note: `expirationTtl` is intentionally ignored in dev. The fresh/stale
    // logic is driven by the `fetched_at + ttl` envelope fields, not by KV
    // native expiry, so the dev fallback is still semantically correct for
    // 1h fresh + 4h stale windows during a dev session.
    devMemoryStore.set(key, value);
  }
}

const DEV_KV_SINGLETON = new DevMemoryKv();

/**
 * Resolve the KV binding for the current request. In production / `wrangler
 * dev --kv LOLAI_PUBLIC_CACHE=...` the binding is present and returned as-is.
 * Otherwise we fall back to an in-memory store keyed by the same shape so the
 * route handlers don't have to branch.
 */
export function resolveKvBinding(
  candidate: KVNamespaceLike | undefined | null,
): KVNamespaceLike {
  if (candidate) return candidate;
  return DEV_KV_SINGLETON;
}

// ---------------------------------------------------------------------------
// Key derivation
// ---------------------------------------------------------------------------

function normalizeForKey(s: string): string {
  return encodeURIComponent(s.normalize('NFC').toLocaleLowerCase('und'));
}

export function kvKeyForSummoner(
  region: string,
  gameName: string,
  tagLine: string,
  lang: string,
): string {
  return `summoner:${region}:${normalizeForKey(gameName)}-${normalizeForKey(
    tagLine,
  )}:${lang}`;
}

export function kvKeyForTierList(
  role: string,
  patch: string,
  lang: string,
): string {
  return `tier-list:${role}:${patch}:${lang}`;
}

// ---------------------------------------------------------------------------
// Envelope read/write
// ---------------------------------------------------------------------------

export async function readKv<T>(
  kv: KVNamespaceLike,
  key: string,
): Promise<CacheLookup<T>> {
  let envelope: KvCacheEnvelope<T> | null;
  try {
    envelope = await kv.get<KvCacheEnvelope<T>>(key, 'json');
  } catch (err) {
    // Treat read failure as miss; never propagate (DEC-OP-032 spirit).
    console.error('[kv-cache] read failed', { key, error: String(err) });
    return { kind: 'miss' };
  }

  if (!envelope || typeof envelope.fetched_at !== 'number' || typeof envelope.ttl !== 'number') {
    return { kind: 'miss' };
  }

  const ageS = Math.floor(Date.now() / 1000) - envelope.fetched_at;
  if (ageS < envelope.ttl) {
    return { kind: 'fresh', data: envelope.data };
  }
  if (ageS < envelope.ttl + STALE_WINDOW_S) {
    return { kind: 'stale', data: envelope.data };
  }
  return { kind: 'miss' };
}

export async function writeKv<T>(
  kv: KVNamespaceLike,
  key: string,
  data: T,
  ttl: number,
): Promise<void> {
  const envelope: KvCacheEnvelope<T> = {
    data,
    fetched_at: Math.floor(Date.now() / 1000),
    ttl,
  };
  try {
    await kv.put(key, JSON.stringify(envelope), {
      expirationTtl: ttl + STALE_WINDOW_S,
    });
  } catch (err) {
    // DEC-OP-032 — swallow write errors; serve the response anyway.
    console.error('[kv-cache] write failed', { key, error: String(err) });
  }
}

// ---------------------------------------------------------------------------
// Single-flight wrapper
// ---------------------------------------------------------------------------

export async function withSingleFlight<T>(
  key: string,
  fn: () => Promise<T>,
): Promise<T> {
  const existing = inflight.get(key) as Promise<T> | undefined;
  if (existing) return existing;

  const p = fn().finally(() => {
    inflight.delete(key);
  });
  inflight.set(key, p as Promise<unknown>);
  return p;
}

// ---------------------------------------------------------------------------
// Test seam (used by tests/unit/kv-cache.test.ts)
// ---------------------------------------------------------------------------

/**
 * Visible-for-testing: clears the in-isolate single-flight Map. NOT for
 * production callers — the registry is meant to deduplicate concurrent
 * refreshes within one isolate lifetime.
 */
export function _resetInflightForTests(): void {
  inflight.clear();
}

/**
 * Visible-for-testing: drains the dev in-memory KV fallback store. Used to
 * isolate test cases.
 */
export function _resetDevMemoryStoreForTests(): void {
  devMemoryStore.clear();
}
