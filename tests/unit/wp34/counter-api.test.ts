// WP34 — counter-api service unit tests.
//
// Covers:
//   - 200 OK with valid schema -> returns CounterData
//   - 404 -> resolves to null (route renders empty state)
//   - schema mismatch -> resolves to null
//   - non-200 status -> resolves to null
//   - network error -> resolves to null
//   - URL composition with backendUrl override

import { afterEach, describe, expect, it, vi } from 'vitest';
import { getCounters, resolveBackendApiUrl } from '../../../src/services/counter-api';

interface FetchCall {
  url: string;
  init: RequestInit;
}

function jsonResponse(body: unknown, init: ResponseInit = {}): Response {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    headers: { 'content-type': 'application/json', ...(init.headers ?? {}) },
  });
}

function captureFetch(handler: (call: FetchCall) => Promise<Response>) {
  const calls: FetchCall[] = [];
  const fn = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const call: FetchCall = {
      url: typeof input === 'string' ? input : input.toString(),
      init: init ?? {},
    };
    calls.push(call);
    return handler(call);
  });
  vi.stubGlobal('fetch', fn);
  return { calls };
}

const VALID_COUNTER = {
  champion: 'aatrox',
  role: 'top',
  patch_id: '14.8',
  last_aggregated: '2026-04-24',
  opponents: [
    { slug: 'fiora', classification: 'Difficile', sample_size: 142 },
    { slug: 'garen', classification: 'Favorevole', sample_size: 87 },
  ],
};

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('getCounters', () => {
  it('returns CounterData on 200 with valid schema', async () => {
    captureFetch(async () => jsonResponse(VALID_COUNTER));
    const result = await getCounters({
      champion: 'aatrox',
      role: 'top',
      backendUrl: 'https://api.test',
    });
    expect(result).not.toBeNull();
    expect(result?.champion).toBe('aatrox');
    expect(result?.opponents).toHaveLength(2);
  });

  it('returns null on 404', async () => {
    captureFetch(async () =>
      jsonResponse({ detail: 'no counter data' }, { status: 404 }),
    );
    const result = await getCounters({
      champion: 'unknown',
      role: 'top',
      backendUrl: 'https://api.test',
    });
    expect(result).toBeNull();
  });

  it('returns null on non-200 status', async () => {
    captureFetch(async () =>
      jsonResponse({ detail: 'rate_limited' }, { status: 429 }),
    );
    const result = await getCounters({
      champion: 'aatrox',
      role: 'top',
      backendUrl: 'https://api.test',
    });
    expect(result).toBeNull();
  });

  it('returns null on schema mismatch', async () => {
    captureFetch(async () => jsonResponse({ wrong: 'shape' }));
    const result = await getCounters({
      champion: 'aatrox',
      role: 'top',
      backendUrl: 'https://api.test',
    });
    expect(result).toBeNull();
  });

  it('returns null on network error', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => {
        throw new Error('ECONNRESET');
      }),
    );
    const result = await getCounters({
      champion: 'aatrox',
      role: 'top',
      backendUrl: 'https://api.test',
    });
    expect(result).toBeNull();
  });

  it('builds URL with backendUrl override and encoded path params', async () => {
    const { calls } = captureFetch(async () => jsonResponse(VALID_COUNTER));
    await getCounters({
      champion: 'kai-sa',
      role: 'bot',
      backendUrl: 'https://api.test/',
    });
    expect(calls).toHaveLength(1);
    expect(calls[0].url).toBe(
      'https://api.test/api/v1/public/counters/kai-sa/bot',
    );
  });
});

describe('resolveBackendApiUrl', () => {
  it('falls back to production URL when no env vars set', () => {
    const url = resolveBackendApiUrl();
    expect(url).toMatch(/^https?:\/\//);
    expect(url).not.toMatch(/\/$/);
  });
});
