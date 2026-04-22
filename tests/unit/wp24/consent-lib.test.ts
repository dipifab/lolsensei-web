// WP24 TASK-3-029 — lib/consent.ts retry + 404 handling.
// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  getConsentSiteCurrent,
  postConsentSite,
  type ConsentSiteCreate,
} from '../../../src/lib/consent';

const BODY: ConsentSiteCreate = {
  anonymous_id: null,
  scope: { technical: true, analytics: true, marketing: false },
  privacy_version: '1.0.0',
  client_platform: 'web',
};

function jsonResponse(body: unknown, init: ResponseInit = {}): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init.headers ?? {}) },
  });
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('postConsentSite (WP24)', () => {
  it('returns body on 201', async () => {
    const payload = {
      consent_id: 'c1',
      anonymous_id: 'a1',
      privacy_version: '1.0.0',
      recorded_at: '2026-04-22T00:00:00Z',
    };
    vi.stubGlobal('fetch', vi.fn(() => Promise.resolve(jsonResponse(payload, { status: 201 }))));
    const res = await postConsentSite(BODY);
    expect(res.consent_id).toBe('c1');
  });

  it('never retries on 4xx', async () => {
    const mock = vi.fn(() =>
      Promise.resolve(jsonResponse({ detail: 'bad', error_code: 'INVALID' }, { status: 400 })),
    );
    vi.stubGlobal('fetch', mock);
    await expect(postConsentSite(BODY)).rejects.toMatchObject({
      status: 400,
      error_code: 'INVALID',
    });
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it('retries on 5xx and succeeds when server recovers', async () => {
    const mock = vi
      .fn()
      .mockResolvedValueOnce(new Response('server err', { status: 500 }))
      .mockResolvedValueOnce(
        jsonResponse(
          { consent_id: 'ok', anonymous_id: 'a', privacy_version: '1.0.0', recorded_at: 'x' },
          { status: 201 },
        ),
      );
    vi.stubGlobal('fetch', mock);
    const res = await postConsentSite(BODY);
    expect(res.consent_id).toBe('ok');
    expect(mock.mock.calls.length).toBeGreaterThanOrEqual(2);
  });

  it('adds Authorization header when jwt provided', async () => {
    const mock = vi.fn(() =>
      Promise.resolve(
        jsonResponse({ consent_id: 'c', anonymous_id: 'a', privacy_version: '1.0.0', recorded_at: 'x' }, { status: 201 }),
      ),
    );
    vi.stubGlobal('fetch', mock);
    await postConsentSite(BODY, 'TOKEN');
    const call = mock.mock.calls[0];
    const init = call[1] as RequestInit;
    const headers = init.headers as Record<string, string>;
    expect(headers.Authorization).toBe('Bearer TOKEN');
  });
});

describe('getConsentSiteCurrent (WP24)', () => {
  it('returns null on 404', async () => {
    vi.stubGlobal('fetch', vi.fn(() => Promise.resolve(new Response(null, { status: 404 }))));
    const res = await getConsentSiteCurrent('anon-1');
    expect(res).toBeNull();
  });

  it('returns parsed payload on 200', async () => {
    const payload = {
      anonymous_id: 'a',
      scope: { technical: true, analytics: false, marketing: false },
      privacy_version: '1.0.0',
      current_privacy_version: '1.0.0',
      needs_reprompt: false,
      granted_at: '2026-04-22T00:00:00Z',
    };
    vi.stubGlobal('fetch', vi.fn(() => Promise.resolve(jsonResponse(payload, { status: 200 }))));
    const res = await getConsentSiteCurrent('a');
    expect(res?.anonymous_id).toBe('a');
    expect(res?.needs_reprompt).toBe(false);
  });
});
