import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  STALE_WINDOW_S,
  _resetDevMemoryStoreForTests,
  _resetInflightForTests,
  type KVNamespaceLike,
  kvKeyForSummoner,
  kvKeyForTierList,
  readKv,
  resolveKvBinding,
  withSingleFlight,
  writeKv,
} from '../../../src/lib/kv-cache';
import type { KvCacheEnvelope } from '../../../src/types/wp30';

class FakeKv implements KVNamespaceLike {
  store = new Map<string, string>();
  options = new Map<string, { expirationTtl?: number }>();
  putErrorOnce: Error | null = null;
  getErrorOnce: Error | null = null;

  async get<T = unknown>(key: string, _type: 'json'): Promise<T | null> {
    if (this.getErrorOnce) {
      const e = this.getErrorOnce;
      this.getErrorOnce = null;
      throw e;
    }
    const raw = this.store.get(key);
    if (raw === undefined) return null;
    return JSON.parse(raw) as T;
  }

  async put(
    key: string,
    value: string,
    options?: { expirationTtl?: number },
  ): Promise<void> {
    if (this.putErrorOnce) {
      const e = this.putErrorOnce;
      this.putErrorOnce = null;
      throw e;
    }
    this.store.set(key, value);
    if (options) this.options.set(key, options);
  }
}

const FROZEN_NOW_S = 1_745_571_600;

beforeEach(() => {
  _resetInflightForTests();
  _resetDevMemoryStoreForTests();
  vi.useFakeTimers();
  vi.setSystemTime(new Date(FROZEN_NOW_S * 1000));
});

afterEach(() => {
  vi.useRealTimers();
});

describe('key derivation', () => {
  it('summoner key: NFC + lowercase + encodeURIComponent', () => {
    const key = kvKeyForSummoner('euw1', 'Caps', 'EUW', 'en');
    expect(key).toBe('summoner:euw1:caps-euw:en');
  });

  it('summoner key: KR Unicode -> %xx encoded', () => {
    const key = kvKeyForSummoner('kr', '핵심', 'kr1', 'en');
    expect(key.startsWith('summoner:kr:')).toBe(true);
    expect(key.endsWith(':en')).toBe(true);
    // The middle is encodeURIComponent('핵심') + '-kr1'
    expect(key.includes(`${encodeURIComponent('핵심')}-kr1`)).toBe(true);
  });

  it('tier-list key: simple concatenation', () => {
    expect(kvKeyForTierList('mid', '14.20', 'en')).toBe(
      'tier-list:mid:14.20:en',
    );
  });

  it('summoner key derivation is deterministic for identical inputs', () => {
    expect(kvKeyForSummoner('euw1', 'Foo', 'BAR', 'it')).toBe(
      kvKeyForSummoner('euw1', 'foo', 'bar', 'it'),
    );
  });
});

describe('readKv 3-branch logic', () => {
  it('returns miss when key is absent', async () => {
    const kv = new FakeKv();
    const r = await readKv(kv, 'summoner:euw1:caps-euw:en');
    expect(r).toEqual({ kind: 'miss' });
  });

  it('returns fresh when age < ttl', async () => {
    const kv = new FakeKv();
    const env: KvCacheEnvelope<{ x: number }> = {
      data: { x: 1 },
      fetched_at: FROZEN_NOW_S - 100, // 100s ago
      ttl: 3_600,
    };
    kv.store.set('k', JSON.stringify(env));
    const r = await readKv<{ x: number }>(kv, 'k');
    expect(r).toEqual({ kind: 'fresh', data: { x: 1 } });
  });

  it('returns stale when ttl <= age < ttl + STALE_WINDOW_S', async () => {
    const kv = new FakeKv();
    const env: KvCacheEnvelope<{ x: number }> = {
      data: { x: 2 },
      fetched_at: FROZEN_NOW_S - 4_000, // 4000s ago, ttl=3600 -> stale
      ttl: 3_600,
    };
    kv.store.set('k', JSON.stringify(env));
    const r = await readKv<{ x: number }>(kv, 'k');
    expect(r).toEqual({ kind: 'stale', data: { x: 2 } });
  });

  it('returns miss when age >= ttl + STALE_WINDOW_S', async () => {
    const kv = new FakeKv();
    const env: KvCacheEnvelope<{ x: number }> = {
      data: { x: 3 },
      fetched_at: FROZEN_NOW_S - (3_600 + STALE_WINDOW_S + 10),
      ttl: 3_600,
    };
    kv.store.set('k', JSON.stringify(env));
    const r = await readKv<{ x: number }>(kv, 'k');
    expect(r).toEqual({ kind: 'miss' });
  });

  it('returns miss on shape corruption (no fetched_at)', async () => {
    const kv = new FakeKv();
    kv.store.set('k', JSON.stringify({ data: { x: 1 } }));
    const r = await readKv(kv, 'k');
    expect(r).toEqual({ kind: 'miss' });
  });

  it('returns miss on KV.get throw (and does not propagate)', async () => {
    const kv = new FakeKv();
    kv.getErrorOnce = new Error('kv read down');
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const r = await readKv(kv, 'k');
    expect(r).toEqual({ kind: 'miss' });
    expect(errorSpy).toHaveBeenCalled();
    errorSpy.mockRestore();
  });
});

describe('writeKv envelope shape', () => {
  it('writes envelope with correct fetched_at + ttl', async () => {
    const kv = new FakeKv();
    await writeKv(kv, 'k', { x: 1 }, 3_600);

    expect(kv.store.has('k')).toBe(true);
    const parsed = JSON.parse(kv.store.get('k')!) as KvCacheEnvelope<{ x: number }>;
    expect(parsed.data).toEqual({ x: 1 });
    expect(parsed.fetched_at).toBe(FROZEN_NOW_S);
    expect(parsed.ttl).toBe(3_600);

    const opts = kv.options.get('k');
    expect(opts?.expirationTtl).toBe(3_600 + STALE_WINDOW_S);
  });

  it('swallows put errors (DEC-OP-032)', async () => {
    const kv = new FakeKv();
    kv.putErrorOnce = new Error('kv put failed');
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    // Should not throw
    await expect(writeKv(kv, 'k', { x: 1 }, 3_600)).resolves.toBeUndefined();
    expect(errorSpy).toHaveBeenCalled();
    errorSpy.mockRestore();
  });
});

describe('withSingleFlight dedupe', () => {
  it('coalesces 50 concurrent calls into a single function invocation', async () => {
    let invocations = 0;
    const fn = async () => {
      invocations += 1;
      // Yield once so the sync gate has time to attach.
      await Promise.resolve();
      return 42;
    };

    const promises = Array.from({ length: 50 }, () =>
      withSingleFlight('shared-key', fn),
    );
    const results = await Promise.all(promises);

    expect(invocations).toBe(1);
    expect(new Set(results)).toEqual(new Set([42]));
  });

  it('cleans up the inflight slot in finally on rejection', async () => {
    const failing = async () => {
      throw new Error('boom');
    };

    await expect(withSingleFlight('k', failing)).rejects.toThrow('boom');

    // After the failure the slot should be free: a second call returns the
    // result of a NEW invocation.
    let secondInvocations = 0;
    const ok = async () => {
      secondInvocations += 1;
      return 'ok';
    };
    const v = await withSingleFlight('k', ok);
    expect(v).toBe('ok');
    expect(secondInvocations).toBe(1);
  });
});

describe('resolveKvBinding fallback', () => {
  it('returns the candidate when present', () => {
    const kv = new FakeKv();
    expect(resolveKvBinding(kv)).toBe(kv);
  });

  it('falls back to dev in-memory store when binding is missing', async () => {
    const kv = resolveKvBinding(undefined);
    await kv.put('k', JSON.stringify({ data: 1, fetched_at: FROZEN_NOW_S, ttl: 60 }));
    const env = await kv.get<KvCacheEnvelope<number>>('k', 'json');
    expect(env?.data).toBe(1);
  });
});
