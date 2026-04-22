// WP24 TASK-3-029 — lib/dsr.ts error parsing + JWT enforcement.
// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest';

// Mock auth/store — getJwt must be controllable
vi.mock('../../../src/auth/store', () => {
  let token: string | null = null;
  return {
    setAuthJwt: (t: string | null) => {
      token = t;
    },
    getJwt: () => token,
  };
});

import { setAuthJwt } from '../../../src/auth/store';
import { deleteUserData, getUserDataExport, type DsrError } from '../../../src/lib/dsr';

afterEach(() => {
  vi.restoreAllMocks();
  setAuthJwt(null);
});

describe('dsr lib (WP24)', () => {
  it('throws TOKEN_INVALID when jwt missing', async () => {
    try {
      await getUserDataExport();
      throw new Error('should not reach');
    } catch (err) {
      expect((err as DsrError).error_code).toBe('TOKEN_INVALID');
    }
  });

  it('parses Retry-After into retry_after_sec on 429', async () => {
    setAuthJwt('TOKEN');
    const res = new Response(JSON.stringify({ detail: 'rate', error_code: 'DSR_EXPORT_RATE_LIMIT' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json', 'Retry-After': '600' },
    });
    vi.stubGlobal('fetch', vi.fn(() => Promise.resolve(res)));
    try {
      await getUserDataExport();
    } catch (err) {
      const e = err as DsrError;
      expect(e.status).toBe(429);
      expect(e.retry_after_sec).toBe(600);
      expect(e.error_code).toBe('DSR_EXPORT_RATE_LIMIT');
    }
  });

  it('deleteUserData resolves on 204', async () => {
    setAuthJwt('TOKEN');
    vi.stubGlobal('fetch', vi.fn(() => Promise.resolve(new Response(null, { status: 204 }))));
    await expect(deleteUserData()).resolves.toBeUndefined();
  });

  it('deleteUserData rejects on non-204 with parsed error', async () => {
    setAuthJwt('TOKEN');
    const res = new Response(JSON.stringify({ detail: 'already', error_code: 'DSR_DELETE_ALREADY_DONE' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json', 'Retry-After': '86400' },
    });
    vi.stubGlobal('fetch', vi.fn(() => Promise.resolve(res)));
    await expect(deleteUserData()).rejects.toMatchObject({
      status: 429,
      error_code: 'DSR_DELETE_ALREADY_DONE',
      retry_after_sec: 86400,
    });
  });
});
