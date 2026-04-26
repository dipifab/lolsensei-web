// WP32 F5 — SSR addon-active gate unit tests.

import { describe, expect, it } from 'vitest';
import {
  decodeJwtPayload,
  extractJwt,
  isUsableSession,
  jwtKnowsNoAddon,
  requireAddonActive,
  type RequireEventLike,
} from '../../../../src/lib/auth/require-addon-active';

function buildJwt(payload: Record<string, unknown>): string {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return `${header}.${body}.fakesignature`;
}

function makeEvent(opts: { headers?: Record<string, string>; url?: string }): RequireEventLike {
  const headers = new Headers(opts.headers ?? {});
  return {
    request: {
      headers,
      url: opts.url ?? 'https://www.lolsensei.com/en/coach',
    },
  };
}

describe('decodeJwtPayload', () => {
  it('returns the parsed body for a well-formed JWT', () => {
    const jwt = buildJwt({ sub: 'user-1', exp: 9999999999 });
    expect(decodeJwtPayload(jwt)).toEqual({ sub: 'user-1', exp: 9999999999 });
  });

  it('returns null on a malformed JWT', () => {
    expect(decodeJwtPayload('only.two')).toBeNull();
  });
});

describe('isUsableSession', () => {
  it('accepts a non-expired session', () => {
    const future = Math.floor(Date.now() / 1000) + 3600;
    expect(isUsableSession({ sub: 'u1', exp: future })).toBe(true);
  });

  it('rejects a session with no claims object', () => {
    expect(isUsableSession(null)).toBe(false);
  });

  it('rejects an expired session', () => {
    const past = Math.floor(Date.now() / 1000) - 60;
    expect(isUsableSession({ sub: 'u1', exp: past })).toBe(false);
  });
});

describe('jwtKnowsNoAddon', () => {
  it('returns false when the claim is absent (today\'s shape)', () => {
    expect(jwtKnowsNoAddon({ sub: 'u1' }, ['ai_coach_light'])).toBe(false);
  });

  it('returns true when the user has no matching addon and the claim is present', () => {
    expect(jwtKnowsNoAddon({ addon_codes: [] }, ['ai_coach_light'])).toBe(true);
  });

  it('returns false when at least one required addon is in the claim', () => {
    expect(
      jwtKnowsNoAddon({ addon_codes: ['ai_coach_full'] }, ['ai_coach_light', 'ai_coach_full']),
    ).toBe(false);
  });
});

describe('extractJwt', () => {
  it('reads the Authorization Bearer header', () => {
    const event = makeEvent({ headers: { authorization: 'Bearer abc.def.ghi' } });
    expect(extractJwt(event)).toBe('abc.def.ghi');
  });

  it('falls back to the jwt cookie', () => {
    const event = makeEvent({ headers: { cookie: 'foo=bar; jwt=tok123; baz=qux' } });
    expect(extractJwt(event)).toBe('tok123');
  });

  it('returns null when no source provides a token', () => {
    const event = makeEvent({});
    expect(extractJwt(event)).toBeNull();
  });
});

describe('requireAddonActive', () => {
  it('redirects to /coach/addon with signin=1 when no JWT', () => {
    const event = makeEvent({});
    try {
      requireAddonActive(event);
      throw new Error('should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(Response);
      const response = err as Response;
      expect(response.status).toBe(302);
      const location = response.headers.get('Location') ?? '';
      expect(location).toContain('/en/coach/addon');
      expect(location).toContain('signin=1');
      expect(location).toContain('from=');
    }
  });

  it('does NOT redirect when the JWT is usable (best-effort gate)', () => {
    const future = Math.floor(Date.now() / 1000) + 3600;
    const jwt = buildJwt({ sub: 'u1', exp: future });
    const event = makeEvent({ headers: { authorization: `Bearer ${jwt}` } });
    expect(() => requireAddonActive(event)).not.toThrow();
  });

  it('redirects to /coach/addon (no signin) when the JWT explicitly tells us no addon', () => {
    const future = Math.floor(Date.now() / 1000) + 3600;
    const jwt = buildJwt({ sub: 'u1', exp: future, addon_codes: [] });
    const event = makeEvent({ headers: { authorization: `Bearer ${jwt}` } });
    try {
      requireAddonActive(event);
      throw new Error('should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(Response);
      const location = (err as Response).headers.get('Location') ?? '';
      expect(location).toContain('/en/coach/addon');
      expect(location).not.toContain('signin=1');
    }
  });

  it('preserves the locale from the request URL', () => {
    const event = makeEvent({ url: 'https://www.lolsensei.com/it/coach?utm=foo' });
    try {
      requireAddonActive(event);
      throw new Error('should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(Response);
      expect((err as Response).headers.get('Location')).toContain('/it/coach/addon');
    }
  });
});
