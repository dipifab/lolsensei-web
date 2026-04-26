// WP32 F5-02 — addon-api service unit tests.

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  activate,
  deactivate,
  listStatus,
  swapTier,
} from '../../../src/services/addon-api';
import {
  CoachConflictError,
  CoachUnauthenticatedError,
  CoachSchemaMismatchError,
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

const CHECKOUT_BODY = { checkout_url: 'https://checkout.stripe.com/c/pay/cs_test_123' };
const SWAP_BODY = {
  from_addon_code: 'ai_coach_light',
  to_addon_code: 'ai_coach_full',
  stripe_proration_amount_eur: 0,
  new_period_end: '2026-05-25T00:00:00Z',
  swap_at: '2026-04-25T10:00:00Z',
};
const PORTAL_BODY = {
  portal_url: 'https://billing.stripe.com/session/abc',
  message: 'Redirecting to portal',
  current_period_end: '2026-05-25T00:00:00Z',
};
const STATUS_BODY = {
  addons: [
    {
      addon_code: 'ai_coach_light',
      status: 'active',
      started_at: '2026-04-01T00:00:00Z',
      current_period_end: '2026-05-01T00:00:00Z',
      ended_at: null,
      stripe_price_id: 'price_aicoach_light_eur5',
      metadata: {},
    },
  ],
  pagination: { limit: 10, offset: 0, total: 1 },
};

beforeEach(() => {
  (globalThis as { __BACKEND_API_URL__?: string }).__BACKEND_API_URL__ =
    'https://api.lolsensei.com';
});

afterEach(() => {
  vi.unstubAllGlobals();
  delete (globalThis as { __BACKEND_API_URL__?: string }).__BACKEND_API_URL__;
});

describe('activate()', () => {
  it('throws CoachUnauthenticatedError when no JWT', async () => {
    captureFetch(async () => jsonResponse({}));
    await expect(
      activate(
        {
          addon_code: 'ai_coach_light',
          success_url: 'https://lolsensei.com/en/coach',
          cancel_url: 'https://lolsensei.com/en/coach/addon',
        },
        { jwt: null },
      ),
    ).rejects.toBeInstanceOf(CoachUnauthenticatedError);
  });

  it('returns checkout_url on 200', async () => {
    const { calls } = captureFetch(async () => jsonResponse(CHECKOUT_BODY));
    const r = await activate(
      {
        addon_code: 'ai_coach_light',
        success_url: 'https://lolsensei.com/en/coach?activated=1',
        cancel_url: 'https://lolsensei.com/en/coach/addon',
      },
      { jwt: 'token' },
    );
    expect(r.checkout_url).toContain('checkout.stripe.com');
    expect(calls[0].init.method).toBe('POST');
  });

  it('maps 409 to CoachConflictError with current_addon_code surfaced', async () => {
    captureFetch(async () =>
      jsonResponse(
        { detail: 'addon_conflict', current_addon_code: 'ai_coach_light' },
        { status: 409 },
      ),
    );
    try {
      await activate(
        {
          addon_code: 'ai_coach_light',
          success_url: 'https://lolsensei.com/en/coach',
          cancel_url: 'https://lolsensei.com/en/coach/addon',
        },
        { jwt: 'token' },
      );
      throw new Error('should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(CoachConflictError);
      expect((err as CoachConflictError).currentAddonCode).toBe('ai_coach_light');
    }
  });

  it('throws CoachSchemaMismatchError when checkout_url is missing', async () => {
    captureFetch(async () => jsonResponse({ unexpected: true }));
    await expect(
      activate(
        {
          addon_code: 'ai_coach_light',
          success_url: 'https://lolsensei.com/en/coach',
          cancel_url: 'https://lolsensei.com/en/coach/addon',
        },
        { jwt: 'token' },
      ),
    ).rejects.toBeInstanceOf(CoachSchemaMismatchError);
  });
});

describe('swapTier()', () => {
  it('returns the swap result on 200', async () => {
    captureFetch(async () => jsonResponse(SWAP_BODY));
    const r = await swapTier({ to_addon_code: 'ai_coach_full' }, { jwt: 'token' });
    expect(r.from_addon_code).toBe('ai_coach_light');
    expect(r.to_addon_code).toBe('ai_coach_full');
  });
});

describe('deactivate()', () => {
  it('returns portal_url branch on 200 (default redirect_to_portal)', async () => {
    const { calls } = captureFetch(async () => jsonResponse(PORTAL_BODY));
    const r = await deactivate({ redirect_to_portal: true }, { jwt: 'token' });
    expect(calls[0].init.method).toBe('DELETE');
    expect('portal_url' in r ? r.portal_url : null).toContain('billing.stripe.com');
  });

  it('returns direct-cancel branch when BE returns addon_code+status', async () => {
    captureFetch(async () =>
      jsonResponse({
        addon_code: 'ai_coach_light',
        status: 'canceled',
        ended_at: '2026-05-01T00:00:00Z',
        message: 'Canceled at period end',
      }),
    );
    const r = await deactivate({ redirect_to_portal: false }, { jwt: 'token' });
    expect('addon_code' in r ? r.addon_code : null).toBe('ai_coach_light');
  });
});

describe('listStatus()', () => {
  it('appends limit + offset to query string', async () => {
    const { calls } = captureFetch(async () => jsonResponse(STATUS_BODY));
    await listStatus({ jwt: 'token', limit: 10, offset: 0 });
    const url = calls[0].url;
    expect(url).toContain('limit=10');
    expect(url).toContain('offset=0');
  });

  it('returns the addon list with pagination', async () => {
    captureFetch(async () => jsonResponse(STATUS_BODY));
    const r = await listStatus({ jwt: 'token' });
    expect(r.addons).toHaveLength(1);
    expect(r.pagination.total).toBe(1);
  });
});
