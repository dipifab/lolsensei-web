import { describe, it, expect } from 'vitest';
import { normalizeTrailingSlash } from '../../../src/lib/middleware/trailing-slash';

// Helper: build a URL anchored to the production origin.
// Verified behavior:
//  - `new URL('//en//foo', base)` treats `en` as the authority (host),
//    so the pathname becomes `//foo`. We must NOT use the two-arg form
//    to exercise double-slash paths.
//  - `new URL('https://host//en//foo')` keeps the pathname as
//    `//en//foo`, which is what a raw Workers Request can surface and
//    is the shape rule 7 (case/slash collapse) must handle.
// The helper detects leading `//` and routes those through the single-arg
// absolute form; everything else uses the base-relative form for brevity.
const ORIGIN = 'https://www.lolsensei.com';
const u = (p: string): URL => {
  if (p.startsWith('//')) return new URL(ORIGIN + p);
  return new URL(p, ORIGIN);
};

describe('normalizeTrailingSlash — baseline parity with handleTrailingSlash', () => {
  it('returns null for canonical root "/"', () => {
    expect(normalizeTrailingSlash(u('/'), 'GET')).toBeNull();
  });

  it('returns null for canonical locale root "/en/"', () => {
    expect(normalizeTrailingSlash(u('/en/'), 'GET')).toBeNull();
  });

  it('returns null for canonical lowercase locale root "/zh-hans/"', () => {
    // REQ-SEO-023: `zh-hans` is now the canonical lowercase path segment.
    expect(normalizeTrailingSlash(u('/zh-hans/'), 'GET')).toBeNull();
  });

  it('adds trailing slash on locale-only path "/en" -> "/en/"', () => {
    expect(normalizeTrailingSlash(u('/en'), 'GET')).toEqual({
      location: '/en/',
      status: 301,
    });
  });

  it('strips trailing slash on deep route "/en/pricing/" -> "/en/pricing"', () => {
    expect(normalizeTrailingSlash(u('/en/pricing/'), 'GET')).toEqual({
      location: '/en/pricing',
      status: 301,
    });
  });

  it('lowercases uppercase locale on deep path "/EN/foo" -> "/en/foo"', () => {
    // Rule 4 requires `^/([a-z-]+)$` (no extra segments) — no match.
    // Rule 6 requires a trailing slash — no match.
    // Rule 7 fires: collapsed ("/en/foo") differs from pathname ("/EN/foo").
    expect(normalizeTrailingSlash(u('/EN/foo'), 'GET')).toEqual({
      location: '/en/foo',
      status: 301,
    });
  });

  it('lowercases legacy "/zh-Hans/" path to canonical "/zh-hans/"', () => {
    // REQ-SEO-023: in-app fallback redirect for the legacy mixed-case URL.
    // Cloudflare normally absorbs this via a 301 rule, but the middleware
    // must still emit the redirect when the request reaches the origin.
    expect(normalizeTrailingSlash(u('/zh-Hans/'), 'GET')).toEqual({
      location: '/zh-hans/',
      status: 301,
    });
  });

  it('collapses double slashes "//en//foo" -> "/en/foo"', () => {
    expect(normalizeTrailingSlash(u('//en//foo'), 'GET')).toEqual({
      location: '/en/foo',
      status: 301,
    });
  });

  it('uses 308 for non-safe methods to preserve method/body (POST /EN/foo)', () => {
    expect(normalizeTrailingSlash(u('/EN/foo'), 'POST')).toEqual({
      location: '/en/foo',
      status: 308,
    });
  });

  it('preserves query string on deep-route strip "/en/pricing?x=1"', () => {
    expect(normalizeTrailingSlash(u('/en/pricing?x=1'), 'GET')).toBeNull();
  });

  it('preserves query string on deep-route trailing strip "/en/pricing/?x=1"', () => {
    expect(normalizeTrailingSlash(u('/en/pricing/?x=1'), 'GET')).toEqual({
      location: '/en/pricing?x=1',
      status: 301,
    });
  });

  it('preserves query string on add-slash "/en?foo=bar" -> "/en/?foo=bar"', () => {
    expect(normalizeTrailingSlash(u('/en?foo=bar'), 'GET')).toEqual({
      location: '/en/?foo=bar',
      status: 301,
    });
  });

  it('passes through non-locale path with no case change "/unknown/foo"', () => {
    expect(normalizeTrailingSlash(u('/unknown/foo'), 'GET')).toBeNull();
  });

  it('uses 308 for PUT on "/en/foo/" deep-route strip', () => {
    expect(normalizeTrailingSlash(u('/en/foo/'), 'PUT')).toEqual({
      location: '/en/foo',
      status: 308,
    });
  });

  it('handles pt-br (lowercase canonical) "/pt-br/" as canonical', () => {
    expect(normalizeTrailingSlash(u('/pt-br/'), 'GET')).toBeNull();
  });

  it('adds trailing slash for "/zh-hans" (no slash) -> "/zh-hans/"', () => {
    expect(normalizeTrailingSlash(u('/zh-hans'), 'GET')).toEqual({
      location: '/zh-hans/',
      status: 301,
    });
  });
});
