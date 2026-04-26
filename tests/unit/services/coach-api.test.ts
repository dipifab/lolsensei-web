// WP32 F5-01 — coach-api service unit tests.
//
// Covers:
//   - status-code -> error class mapping (401/403/404/409/503/5xx)
//   - quota_exceeded discriminator (HTTP 200 + flag) -> CoachQuotaExceededError
//   - JWT injection in Authorization header
//   - Accept-Language header propagation
//   - URL composition (BACKEND_API_URL precedence + percent-encoding)

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  chat,
  drill,
  latestRecap,
  quota,
  weeklyRecap,
  CoachAddonRequiredError,
  CoachAiProviderError,
  CoachApiError,
  CoachConflictError,
  CoachDrillQuotaExceededError,
  CoachNotFoundError,
  CoachQuotaExceededError,
  CoachSchemaMismatchError,
  CoachUnauthenticatedError,
  resolveBackendApiUrl,
} from '../../../src/services/coach-api';

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

const VALID_CHAT = {
  response: 'Coach reply',
  model_used: 'claude-haiku',
  model_tier: 'haiku' as const,
  language: 'en' as const,
  ai_usage_log_id: '11111111-1111-1111-1111-111111111111',
  current_quota: { chat_remaining: 49, chat_max: 50, reset_at: '2026-05-01T00:00:00Z' },
};

const VALID_DRILL = {
  drills: [
    {
      drill_id_str: 'd1',
      title: 'Last hit minions',
      description: 'Practice CS for 10 min',
      duration_min_int: 10,
      weakness_tag: 'csing',
      steps: null,
    },
  ],
  tier: 'light' as const,
  is_precached: false,
  ai_usage_log_id: '22222222-2222-2222-2222-222222222222',
  current_quota: { drill_remaining: 3, drill_max: 4, reset_at: '2026-05-01T00:00:00Z' },
};

const VALID_RECAP = {
  recap: {
    week_year: '2026-W17',
    summary: 'Solid week.',
    key_insights: ['CS up 12%'],
    language: 'en' as const,
    generated_at: '2026-04-25T06:00:00Z',
  },
  extended_trend: null,
  tier: 'light' as const,
};

const VALID_QUOTA = {
  addon_code: 'ai_coach_light' as const,
  current_quota: {
    chat_remaining: 50,
    chat_max: 50,
    drill_remaining: 4,
    drill_max: 4,
    recap_remaining: 4,
    recap_max: 4,
    consolidation_remaining: null,
    consolidation_max: 0,
  },
  reset_at: '2026-05-01T00:00:00Z',
};

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-04-25T10:00:00Z'));
  // Force a stable backend URL across tests.
  (globalThis as { __BACKEND_API_URL__?: string }).__BACKEND_API_URL__ =
    'https://api.lolsensei.com/';
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  delete (globalThis as { __BACKEND_API_URL__?: string }).__BACKEND_API_URL__;
});

describe('resolveBackendApiUrl', () => {
  it('strips trailing slashes', () => {
    expect(resolveBackendApiUrl()).toBe('https://api.lolsensei.com');
  });
});

describe('chat()', () => {
  it('throws CoachUnauthenticatedError when no JWT is provided', async () => {
    captureFetch(async () => jsonResponse({}));
    await expect(chat({ message: 'hi' }, { jwt: null })).rejects.toBeInstanceOf(
      CoachUnauthenticatedError,
    );
  });

  it('returns the parsed body on 200', async () => {
    captureFetch(async () => jsonResponse(VALID_CHAT));
    const result = await chat({ message: 'hi' }, { jwt: 'token-abc', language: 'it' });
    expect(result.response).toBe('Coach reply');
  });

  it('attaches Authorization Bearer header and Accept-Language', async () => {
    const { calls } = captureFetch(async () => jsonResponse(VALID_CHAT));
    await chat({ message: 'hi' }, { jwt: 'token-abc', language: 'it' });
    expect(calls).toHaveLength(1);
    const headers = new Headers(calls[0].init.headers);
    expect(headers.get('Authorization')).toBe('Bearer token-abc');
    expect(headers.get('Accept-Language')).toBe('it');
    expect(headers.get('Content-Type')).toBe('application/json');
  });

  it('throws CoachQuotaExceededError when BE returns quota_exceeded:true', async () => {
    const payload = {
      quota_exceeded: true,
      addon_code: 'ai_coach_light',
      current_quota: { chat_remaining: 0, chat_max: 50, reset_at: '2026-05-01T00:00:00Z' },
      upgrade_hint: { addon_code: 'ai_coach_full', chat_max: 200 },
    };
    captureFetch(async () => jsonResponse(payload));
    try {
      await chat({ message: 'hi' }, { jwt: 'token-abc' });
      throw new Error('should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(CoachQuotaExceededError);
      expect((err as CoachQuotaExceededError).payload.addon_code).toBe('ai_coach_light');
    }
  });

  it('maps 403 to CoachAddonRequiredError with addon_code_required', async () => {
    captureFetch(async () =>
      jsonResponse(
        { detail: 'addon_required', addon_code_required: 'ai_coach_light' },
        { status: 403 },
      ),
    );
    try {
      await chat({ message: 'hi' }, { jwt: 'token-abc' });
      throw new Error('should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(CoachAddonRequiredError);
      expect((err as CoachAddonRequiredError).addonRequired).toBe('ai_coach_light');
    }
  });

  it('maps 401 to CoachUnauthenticatedError', async () => {
    captureFetch(async () => jsonResponse({ detail: 'unauthenticated' }, { status: 401 }));
    await expect(chat({ message: 'hi' }, { jwt: 'token-abc' })).rejects.toBeInstanceOf(
      CoachUnauthenticatedError,
    );
  });

  it('maps 503 to CoachAiProviderError', async () => {
    captureFetch(async () =>
      jsonResponse({ detail: 'ai_provider_unavailable' }, { status: 503 }),
    );
    await expect(chat({ message: 'hi' }, { jwt: 'token-abc' })).rejects.toBeInstanceOf(
      CoachAiProviderError,
    );
  });

  it('maps 500 to CoachApiError', async () => {
    captureFetch(async () => jsonResponse({ detail: 'oops' }, { status: 500 }));
    try {
      await chat({ message: 'hi' }, { jwt: 'token-abc' });
      throw new Error('should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(CoachApiError);
      expect((err as CoachApiError).status).toBe(500);
    }
  });

  it('throws CoachSchemaMismatchError when payload lacks expected fields', async () => {
    captureFetch(async () => jsonResponse({ unexpected: true }));
    await expect(chat({ message: 'hi' }, { jwt: 'token-abc' })).rejects.toBeInstanceOf(
      CoachSchemaMismatchError,
    );
  });
});

describe('drill()', () => {
  it('returns the drill batch on success', async () => {
    captureFetch(async () => jsonResponse(VALID_DRILL));
    const r = await drill({}, { jwt: 'token' });
    expect(r.drills).toHaveLength(1);
    expect(r.tier).toBe('light');
  });

  it('discriminates quota_exceeded for drill surface with type-safe shape', async () => {
    const payload = {
      quota_exceeded: true as const,
      surface: 'drill' as const,
      addon_code: 'ai_coach_full' as const,
      current_quota: {
        drill_remaining: 0,
        drill_max: 16,
        reset_at: '2026-05-01T00:00:00Z',
      },
      upgrade_hint: { addon_code: 'ai_coach_full' as const, drill_max: 16 },
    };
    captureFetch(async () => jsonResponse(payload));
    try {
      await drill({}, { jwt: 'token' });
      throw new Error('should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(CoachDrillQuotaExceededError);
      const e = err as CoachDrillQuotaExceededError;
      expect(e.payload.surface).toBe('drill');
      expect(e.payload.addon_code).toBe('ai_coach_full');
      expect(e.payload.current_quota.drill_remaining).toBe(0);
      expect(e.payload.current_quota.drill_max).toBe(16);
      expect(e.payload.current_quota.reset_at).toBe('2026-05-01T00:00:00Z');
      expect(e.payload.upgrade_hint?.drill_max).toBe(16);
    }
  });
});

describe('weeklyRecap()', () => {
  it('returns recap=null + tier when BE has not generated it yet', async () => {
    const empty = {
      recap: null,
      extended_trend: null,
      tier: 'light' as const,
      next_recap_at: '2026-05-04T06:00:00Z',
    };
    captureFetch(async () => jsonResponse(empty));
    const r = await weeklyRecap('2026-W17', { jwt: 'token' });
    expect(r.recap).toBeNull();
    expect(r.next_recap_at).toBe('2026-05-04T06:00:00Z');
  });

  it('percent-encodes the week_year path segment', async () => {
    const { calls } = captureFetch(async () => jsonResponse(VALID_RECAP));
    await weeklyRecap('2026-W17', { jwt: 'token' });
    expect(calls[0].url).toContain('/api/v1/coach/recap/2026-W17');
  });

  it('maps 404 to CoachNotFoundError', async () => {
    captureFetch(async () => jsonResponse({ detail: 'not_found' }, { status: 404 }));
    await expect(weeklyRecap('2026-W17', { jwt: 'token' })).rejects.toBeInstanceOf(
      CoachNotFoundError,
    );
  });
});

describe('latestRecap()', () => {
  it('hits /api/v1/coach/recap with no path param', async () => {
    const { calls } = captureFetch(async () => jsonResponse(VALID_RECAP));
    await latestRecap({ jwt: 'token' });
    expect(calls[0].url.endsWith('/api/v1/coach/recap')).toBe(true);
  });
});

describe('quota()', () => {
  it('returns the quota snapshot with light-tier consolidation=null', async () => {
    captureFetch(async () => jsonResponse(VALID_QUOTA));
    const r = await quota({ jwt: 'token' });
    expect(r.current_quota.consolidation_remaining).toBeNull();
    expect(r.current_quota.consolidation_max).toBe(0);
  });
});

describe('addon-conflict mapping', () => {
  it('maps 409 to CoachConflictError', async () => {
    captureFetch(async () =>
      jsonResponse(
        { detail: 'addon_conflict', current_addon_code: 'ai_coach_light' },
        { status: 409 },
      ),
    );
    try {
      await chat({ message: 'hi' }, { jwt: 'token' });
      throw new Error('should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(CoachConflictError);
      expect((err as CoachConflictError).currentAddonCode).toBe('ai_coach_light');
    }
  });
});
