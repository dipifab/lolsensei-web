// WP31 F4-02 — SSR Premium gate unit tests.

import { describe, expect, it } from 'vitest';
import {
  decodeJwtPayload,
  extractJwt,
  isPremiumClaim,
  PREMIUM_TIERS,
  requirePremium,
  type RequireEventLike,
} from '../../../../src/lib/auth/require-premium';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildJwt(payload: Record<string, unknown>): string {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  // Signature is irrelevant for the SSR helper (no verification client-side).
  return `${header}.${body}.fakesignature`;
}

function makeEvent(opts: { headers?: Record<string, string>; url?: string }): RequireEventLike {
  const headers = new Headers(opts.headers ?? {});
  return {
    request: {
      headers,
      url: opts.url ?? 'https://www.lolsensei.com/en/match-history',
    },
  };
}

// ---------------------------------------------------------------------------
// decodeJwtPayload
// ---------------------------------------------------------------------------

describe('decodeJwtPayload', () => {
  it('returns the payload object for a well-formed JWT', () => {
    const jwt = buildJwt({ sub: 'user-123', effective_tier: 'active', exp: 9999999999 });
    expect(decodeJwtPayload(jwt)).toEqual({
      sub: 'user-123',
      effective_tier: 'active',
      exp: 9999999999,
    });
  });

  it('returns null when the token has too few segments', () => {
    expect(decodeJwtPayload('only.two')).toBeNull();
    expect(decodeJwtPayload('')).toBeNull();
  });

  it('returns null when the payload is not valid base64', () => {
    expect(decodeJwtPayload('a.???.c')).toBeNull();
  });

  it('returns null when the payload is not JSON', () => {
    const header = Buffer.from('{}').toString('base64url');
    const body = Buffer.from('not json').toString('base64url');
    expect(decodeJwtPayload(`${header}.${body}.sig`)).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// isPremiumClaim
// ---------------------------------------------------------------------------

describe('isPremiumClaim', () => {
  it('grants access for active tier', () => {
    expect(isPremiumClaim({ effective_tier: 'active' })).toBe(true);
  });

  it('grants access for trialing tier', () => {
    expect(isPremiumClaim({ effective_tier: 'trialing' })).toBe(true);
  });

  it('rejects free tier', () => {
    expect(isPremiumClaim({ effective_tier: 'free' })).toBe(false);
  });

  it('rejects missing tier', () => {
    expect(isPremiumClaim({})).toBe(false);
  });

  it('rejects null', () => {
    expect(isPremiumClaim(null)).toBe(false);
  });

  it('rejects expired tokens', () => {
    const pastExp = Math.floor(Date.now() / 1000) - 60;
    expect(isPremiumClaim({ effective_tier: 'active', exp: pastExp })).toBe(false);
  });

  it('PREMIUM_TIERS exposes the canonical set', () => {
    expect([...PREMIUM_TIERS].sort()).toEqual(['active', 'trialing']);
  });
});

// ---------------------------------------------------------------------------
// extractJwt
// ---------------------------------------------------------------------------

describe('extractJwt', () => {
  it('reads from Authorization: Bearer header', () => {
    const event = makeEvent({ headers: { Authorization: 'Bearer abc.def.ghi' } });
    expect(extractJwt(event)).toBe('abc.def.ghi');
  });

  it('reads from `jwt` cookie', () => {
    const event = makeEvent({ headers: { Cookie: 'jwt=abc.def.ghi' } });
    expect(extractJwt(event)).toBe('abc.def.ghi');
  });

  it('returns null when both header and cookie are absent', () => {
    const event = makeEvent({});
    expect(extractJwt(event)).toBeNull();
  });

  it('URL-decodes cookie values', () => {
    const encoded = encodeURIComponent('with spaces');
    const event = makeEvent({ headers: { Cookie: `jwt=${encoded}` } });
    expect(extractJwt(event)).toBe('with spaces');
  });

  it('ignores other cookies', () => {
    const event = makeEvent({ headers: { Cookie: 'foo=bar; jwt=token; baz=qux' } });
    expect(extractJwt(event)).toBe('token');
  });

  it('prefers Authorization header over cookie when both are present', () => {
    const event = makeEvent({
      headers: { Authorization: 'Bearer header-token', Cookie: 'jwt=cookie-token' },
    });
    expect(extractJwt(event)).toBe('header-token');
  });
});

// ---------------------------------------------------------------------------
// requirePremium
// ---------------------------------------------------------------------------

describe('requirePremium', () => {
  it('throws a Response 302 to /[lang]/pricing when no JWT is present', () => {
    const event = makeEvent({ url: 'https://www.lolsensei.com/en/match-history' });
    try {
      requirePremium(event);
      expect.fail('should have thrown a redirect');
    } catch (err) {
      expect(err).toBeInstanceOf(Response);
      const res = err as Response;
      expect(res.status).toBe(302);
      const location = res.headers.get('Location') ?? '';
      expect(location).toContain('/en/pricing');
      expect(location).toContain('signin=1');
      expect(location).toContain(encodeURIComponent('/en/match-history'));
    }
  });

  it('throws a redirect to /[lang]/pricing for a Free user', () => {
    const jwt = buildJwt({ sub: 'u-1', effective_tier: 'free' });
    const event = makeEvent({
      url: 'https://www.lolsensei.com/it/match-history',
      headers: { Authorization: `Bearer ${jwt}` },
    });
    try {
      requirePremium(event);
      expect.fail('should have thrown a redirect');
    } catch (err) {
      expect(err).toBeInstanceOf(Response);
      const location = (err as Response).headers.get('Location') ?? '';
      expect(location).toContain('/it/pricing');
      expect(location).not.toContain('signin=1');
    }
  });

  it('returns silently for an active Premium user', () => {
    const jwt = buildJwt({
      sub: 'u-1',
      effective_tier: 'active',
      exp: Math.floor(Date.now() / 1000) + 600,
    });
    const event = makeEvent({
      url: 'https://www.lolsensei.com/en/match-history',
      headers: { Authorization: `Bearer ${jwt}` },
    });
    expect(() => requirePremium(event)).not.toThrow();
  });

  it('treats a malformed JWT as no JWT (defense-in-depth)', () => {
    const event = makeEvent({
      url: 'https://www.lolsensei.com/en/match-history',
      headers: { Authorization: 'Bearer not.a.jwt-payload' },
    });
    try {
      requirePremium(event);
      expect.fail('should have thrown a redirect');
    } catch (err) {
      expect(err).toBeInstanceOf(Response);
      // Malformed JWT decodes to null -> behaves like missing claim, redirect
      // to pricing. The exact branch (signin=1 vs not) is acceptable either
      // way as long as the user is redirected away from Premium content.
      expect((err as Response).status).toBe(302);
    }
  });

  it('falls back to default locale when URL has no [lang] segment', () => {
    const event = makeEvent({ url: 'https://www.lolsensei.com/' });
    try {
      requirePremium(event);
      expect.fail('should have thrown a redirect');
    } catch (err) {
      const location = (err as Response).headers.get('Location') ?? '';
      expect(location).toContain('/en/pricing');
    }
  });
});
