// WP34 — pro-builds-api service unit tests.
//
// Covers:
//   - getProBuilds: 200 / 404 / schema mismatch / network err
//   - getLeaderboard: 200 / 404 / limit query param clamp
//   - URL composition with query params

import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  getLeaderboard,
  getProBuilds,
} from '../../../src/services/pro-builds-api';

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

const VALID_PRO_BUILDS = {
  champion: 'aatrox',
  role: 'top',
  period: 'last_14d',
  data_freshness_at: '2026-04-24T22:30:00Z',
  regions: ['euw1', 'na1'],
  sample_size: 47,
  build_pattern: {
    item_order_top3: [
      ['item_3071', 'item_3053', 'item_6333'],
      ['item_6630', 'item_3071', 'item_3053'],
    ],
    rune_top1: {
      keystone: 8010,
      primary_tree: [9111, 9105, 8014],
      secondary_tree: [8200, 8233],
    },
    summoner_top1: ['flash', 'ignite'],
  },
};

const VALID_LEADERBOARD = {
  champion: 'aatrox',
  role: 'top',
  period: 'last_14d',
  leaderboard: [
    {
      puuid_bucket_id: 'a'.repeat(64),
      region: 'euw1',
      match_count_14d: 12,
      win_rate_class: 'Eccellente',
      common_build_signature: 'item_3071_3053_6333',
    },
  ],
};

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('getProBuilds', () => {
  it('returns ProBuildsData on 200', async () => {
    captureFetch(async () => jsonResponse(VALID_PRO_BUILDS));
    const result = await getProBuilds({
      champion: 'aatrox',
      role: 'top',
      backendUrl: 'https://api.test',
    });
    expect(result).not.toBeNull();
    expect(result?.sample_size).toBe(47);
    expect(result?.build_pattern.item_order_top3).toHaveLength(2);
  });

  it('returns null on 404', async () => {
    captureFetch(async () =>
      jsonResponse({ detail: 'no pro builds' }, { status: 404 }),
    );
    const result = await getProBuilds({
      champion: 'unknown',
      role: 'top',
      backendUrl: 'https://api.test',
    });
    expect(result).toBeNull();
  });

  it('returns null on schema mismatch', async () => {
    captureFetch(async () => jsonResponse({ wrong: 'shape' }));
    const result = await getProBuilds({
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
        throw new Error('timeout');
      }),
    );
    const result = await getProBuilds({
      champion: 'aatrox',
      role: 'top',
      backendUrl: 'https://api.test',
    });
    expect(result).toBeNull();
  });
});

describe('getLeaderboard', () => {
  it('returns LeaderboardData on 200', async () => {
    captureFetch(async () => jsonResponse(VALID_LEADERBOARD));
    const result = await getLeaderboard({
      champion: 'aatrox',
      role: 'top',
      backendUrl: 'https://api.test',
    });
    expect(result).not.toBeNull();
    expect(result?.leaderboard).toHaveLength(1);
    expect(result?.leaderboard[0].puuid_bucket_id).toHaveLength(64);
  });

  it('clamps limit to [1, 50]', async () => {
    const { calls } = captureFetch(async () => jsonResponse(VALID_LEADERBOARD));
    await getLeaderboard({
      champion: 'aatrox',
      role: 'top',
      limit: 100,
      backendUrl: 'https://api.test',
    });
    expect(calls[0].url).toContain('limit=50');
  });

  it('clamps limit to >= 1', async () => {
    const { calls } = captureFetch(async () => jsonResponse(VALID_LEADERBOARD));
    await getLeaderboard({
      champion: 'aatrox',
      role: 'top',
      limit: 0,
      backendUrl: 'https://api.test',
    });
    expect(calls[0].url).toContain('limit=1');
  });

  it('returns null on 404', async () => {
    captureFetch(async () =>
      jsonResponse({ detail: 'no pro builds' }, { status: 404 }),
    );
    const result = await getLeaderboard({
      champion: 'aatrox',
      role: 'top',
      backendUrl: 'https://api.test',
    });
    expect(result).toBeNull();
  });

  it('builds URL with query params', async () => {
    const { calls } = captureFetch(async () => jsonResponse(VALID_LEADERBOARD));
    await getLeaderboard({
      champion: 'kai-sa',
      role: 'bot',
      limit: 5,
      backendUrl: 'https://api.test/',
    });
    expect(calls[0].url).toBe(
      'https://api.test/api/v1/public/pro-builds/leaderboard?champion=kai-sa&role=bot&limit=5',
    );
  });
});
