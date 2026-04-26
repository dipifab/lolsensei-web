// WP31 F4-01 — match-api service unit tests.
//
// Covers:
//   - status-code -> error class mapping (401/403/404/429/502/5xx)
//   - Retry-After parsing (header + body fallback)
//   - JWT injection in Authorization header
//   - schema validation (typed responses)
//   - URL composition (BACKEND_API_URL precedence + query params)

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  AiProviderError,
  ApiError,
  NotFoundError,
  PremiumRequiredError,
  RateLimitedError,
  SchemaMismatchError,
  UnauthenticatedError,
  generateReview,
  getMatch,
  getMatchHistory,
  getQuota,
  getReview,
  resolveBackendApiUrl,
  triggerIngest,
  __testing,
} from '../../../src/services/match-api';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

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
  return { calls, fn };
}

const VALID_HISTORY = {
  items: [],
  next_cursor: null,
};

const VALID_QUOTA = {
  used: 3,
  limit: 10,
  reset_at: '2026-04-27T08:00:00Z',
};

const VALID_REVIEW = {
  match_id: 'EUW1_42',
  highlights: [],
  summary_en: 'EN text',
  summary_it: 'IT text',
  model_used: 'claude-sonnet',
  selection_reason: 'standard',
  generated_at: '2026-04-25T10:00:00Z',
};

const VALID_DETAIL = {
  match_id: 'EUW1_42',
  region: 'EUW1',
  queue: 'ranked_solo',
  played_at: '2026-04-25T08:00:00Z',
  summary: {
    champion: 'Zoe',
    role: 'MIDDLE',
    outcome: 'win',
    kills: 12,
    deaths: 3,
    assists: 7,
    cs: 234,
    cs_per_min: 7.7,
    gold_earned: 14000,
    vision_score: 28,
    duration_seconds: 1820,
  },
  timeline: { info: { frames: [] } },
  storage_tier: 'hot',
  review: null,
};

const VALID_INGEST = {
  match_id: 'EUW1_42',
  enqueued: true,
  status: 'queued',
};

beforeEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.stubEnv('VITE_API_BASE_URL', 'https://api.test.local');
});

afterEach(() => {
  vi.restoreAllMocks();
});

// ---------------------------------------------------------------------------
// resolveBackendApiUrl
// ---------------------------------------------------------------------------

describe('resolveBackendApiUrl', () => {
  it('strips trailing slashes from VITE_API_BASE_URL', () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.example.com/');
    expect(resolveBackendApiUrl()).toBe('https://api.example.com');
  });

  it('falls back to production URL when no env is set', () => {
    vi.stubEnv('VITE_API_BASE_URL', '');
    vi.stubEnv('VITE_BACKEND_API_URL', '');
    expect(resolveBackendApiUrl()).toBe('https://api.lolsensei.com');
  });

  it('prefers VITE_BACKEND_API_URL over VITE_API_BASE_URL', () => {
    vi.stubEnv('VITE_BACKEND_API_URL', 'https://staging.api.local');
    vi.stubEnv('VITE_API_BASE_URL', 'https://prod.api.local');
    expect(resolveBackendApiUrl()).toBe('https://staging.api.local');
  });
});

// ---------------------------------------------------------------------------
// authedFetch — error mapping
// ---------------------------------------------------------------------------

describe('authedFetch error mapping', () => {
  it('throws UnauthenticatedError when JWT is missing', async () => {
    captureFetch(async () => jsonResponse({}));
    await expect(__testing.authedFetch('/x', { jwt: null })).rejects.toBeInstanceOf(
      UnauthenticatedError,
    );
  });

  it('maps 401 to UnauthenticatedError', async () => {
    captureFetch(async () => jsonResponse({ detail: 'unauthenticated' }, { status: 401 }));
    await expect(__testing.authedFetch('/x', { jwt: 'tok' })).rejects.toBeInstanceOf(
      UnauthenticatedError,
    );
  });

  it('maps 403 premium_required to PremiumRequiredError', async () => {
    captureFetch(async () => jsonResponse({ detail: 'premium_required' }, { status: 403 }));
    await expect(__testing.authedFetch('/x', { jwt: 'tok' })).rejects.toBeInstanceOf(
      PremiumRequiredError,
    );
  });

  it('maps 404 to NotFoundError', async () => {
    captureFetch(async () => jsonResponse({ detail: 'not_found' }, { status: 404 }));
    await expect(__testing.authedFetch('/x', { jwt: 'tok' })).rejects.toBeInstanceOf(NotFoundError);
  });

  it('maps 429 to RateLimitedError with Retry-After seconds (header)', async () => {
    captureFetch(async () =>
      jsonResponse({ detail: 'rate_limited' }, { status: 429, headers: { 'Retry-After': '120' } }),
    );
    try {
      await __testing.authedFetch('/x', { jwt: 'tok' });
      expect.fail('should throw');
    } catch (err) {
      expect(err).toBeInstanceOf(RateLimitedError);
      expect((err as RateLimitedError).retryAfterSeconds).toBe(120);
    }
  });

  it('falls back to body.retry_after when header is absent', async () => {
    captureFetch(async () =>
      jsonResponse({ detail: 'rate_limited', retry_after: 600 }, { status: 429 }),
    );
    try {
      await __testing.authedFetch('/x', { jwt: 'tok' });
      expect.fail('should throw');
    } catch (err) {
      expect(err).toBeInstanceOf(RateLimitedError);
      expect((err as RateLimitedError).retryAfterSeconds).toBe(600);
    }
  });

  it('maps 502 to AiProviderError', async () => {
    captureFetch(async () => jsonResponse({ detail: 'ai_provider_error' }, { status: 502 }));
    await expect(__testing.authedFetch('/x', { jwt: 'tok' })).rejects.toBeInstanceOf(
      AiProviderError,
    );
  });

  it('maps other 5xx to ApiError', async () => {
    captureFetch(async () => jsonResponse({ detail: 'internal_error' }, { status: 500 }));
    try {
      await __testing.authedFetch('/x', { jwt: 'tok' });
      expect.fail('should throw');
    } catch (err) {
      expect(err).toBeInstanceOf(ApiError);
      expect((err as ApiError).status).toBe(500);
    }
  });

  it('throws SchemaMismatchError on non-JSON 200 body', async () => {
    captureFetch(
      async () =>
        new Response('not-json', {
          status: 200,
          headers: { 'content-type': 'text/plain' },
        }),
    );
    await expect(__testing.authedFetch('/x', { jwt: 'tok' })).rejects.toBeInstanceOf(
      SchemaMismatchError,
    );
  });
});

// ---------------------------------------------------------------------------
// authedFetch — header injection
// ---------------------------------------------------------------------------

describe('authedFetch headers', () => {
  it('injects Authorization: Bearer <jwt>', async () => {
    const { calls } = captureFetch(async () => jsonResponse({ items: [], next_cursor: null }));
    await __testing.authedFetch('/api/v1/premium/match-history', { jwt: 'mytoken' });
    expect(calls).toHaveLength(1);
    const headers = new Headers(calls[0].init.headers);
    expect(headers.get('Authorization')).toBe('Bearer mytoken');
    expect(headers.get('Accept')).toBe('application/json');
  });

  it('serializes object body and sets Content-Type to JSON', async () => {
    const { calls } = captureFetch(async () =>
      jsonResponse({ match_id: 'EUW1_42', enqueued: true, status: 'queued' }),
    );
    await __testing.authedFetch('/api/match/ingest', {
      jwt: 'tok',
      method: 'POST',
      body: { match_id: 'EUW1_42', region: 'EUW1' },
    });
    const headers = new Headers(calls[0].init.headers);
    expect(headers.get('Content-Type')).toBe('application/json');
    expect(calls[0].init.body).toBe(JSON.stringify({ match_id: 'EUW1_42', region: 'EUW1' }));
  });
});

// ---------------------------------------------------------------------------
// Public methods — schema validation + URL composition
// ---------------------------------------------------------------------------

describe('getMatchHistory', () => {
  it('builds the correct URL with cursor and limit', async () => {
    const { calls } = captureFetch(async () => jsonResponse(VALID_HISTORY));
    await getMatchHistory({ jwt: 'tok', cursor: 'abc', limit: 50 });
    expect(calls[0].url).toBe(
      'https://api.test.local/api/v1/premium/match-history?limit=50&cursor=abc',
    );
  });

  it('omits query string when no params are passed', async () => {
    const { calls } = captureFetch(async () => jsonResponse(VALID_HISTORY));
    await getMatchHistory({ jwt: 'tok' });
    expect(calls[0].url).toBe('https://api.test.local/api/v1/premium/match-history');
  });

  it('rejects responses with the wrong shape', async () => {
    captureFetch(async () => jsonResponse({ wrong: true }));
    await expect(getMatchHistory({ jwt: 'tok' })).rejects.toBeInstanceOf(SchemaMismatchError);
  });
});

describe('getMatch / getMatchDetail', () => {
  it('encodes the matchId in the path', async () => {
    const { calls } = captureFetch(async () => jsonResponse(VALID_DETAIL));
    await getMatch('EUW1_42', { jwt: 'tok' });
    expect(calls[0].url).toBe('https://api.test.local/api/v1/premium/match/EUW1_42');
  });
});

describe('triggerIngest', () => {
  it('POSTs to /api/match/ingest with the body', async () => {
    const { calls } = captureFetch(async () => jsonResponse(VALID_INGEST));
    await triggerIngest('EUW1_42', 'EUW1', { jwt: 'tok' });
    expect(calls[0].url).toBe('https://api.test.local/api/match/ingest');
    expect(calls[0].init.method).toBe('POST');
  });
});

describe('generateReview', () => {
  it('POSTs to .../review with empty JSON body', async () => {
    const { calls } = captureFetch(async () => jsonResponse(VALID_REVIEW));
    await generateReview('EUW1_42', { jwt: 'tok' });
    expect(calls[0].url).toBe('https://api.test.local/api/v1/premium/match/EUW1_42/review');
    expect(calls[0].init.method).toBe('POST');
  });

  it('surfaces RateLimitedError on cap exhaustion', async () => {
    captureFetch(async () =>
      jsonResponse(
        { detail: 'rate_limited' },
        { status: 429, headers: { 'Retry-After': '3600' } },
      ),
    );
    await expect(generateReview('EUW1_42', { jwt: 'tok' })).rejects.toBeInstanceOf(
      RateLimitedError,
    );
  });
});

describe('getReview', () => {
  it('GETs the cached review', async () => {
    const { calls } = captureFetch(async () => jsonResponse(VALID_REVIEW));
    await getReview('EUW1_42', { jwt: 'tok' });
    expect(calls[0].url).toBe('https://api.test.local/api/v1/premium/match/EUW1_42/review');
    expect(calls[0].init.method).toBe('GET');
  });
});

describe('getQuota', () => {
  it('returns parsed QuotaResponse', async () => {
    captureFetch(async () => jsonResponse(VALID_QUOTA));
    const out = await getQuota({ jwt: 'tok' });
    expect(out.used).toBe(3);
    expect(out.limit).toBe(10);
  });
});
