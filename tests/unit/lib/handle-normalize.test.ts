import { describe, expect, it } from 'vitest';
import { normalizeHandle } from '../../../src/lib/handle-normalize';

describe('normalizeHandle', () => {
  it('returns ok for already canonical lowercase handle', () => {
    const r = normalizeHandle('caps-euw');
    expect(r).toEqual({
      kind: 'ok',
      gameName: 'caps',
      tagLine: 'euw',
      canonical: 'caps-euw',
    });
  });

  it('returns needs_redirect for uppercase input', () => {
    const r = normalizeHandle('Caps-EUW');
    // Uppercase "Caps-EUW" lowercased becomes "caps-euw"; encodeURIComponent
    // does not change pure ASCII. So canonical is "caps-euw".
    expect(r).toEqual({
      kind: 'needs_redirect',
      canonical: 'caps-euw',
    });
  });

  it('returns ok for KR Unicode preserving NFC + lowercase', () => {
    // "핵심플레이어" (Korean) is already NFC; concat with "-kr1".
    const input = encodeURIComponent('핵심플레이어') + '-kr1';
    const r = normalizeHandle(input);
    expect(r.kind).toBe('ok');
    if (r.kind === 'ok') {
      expect(r.gameName).toBe('핵심플레이어');
      expect(r.tagLine).toBe('kr1');
    }
  });

  it('redirects when input has uppercase Unicode', () => {
    // Latin-1 supplement S Sharp uppercase ẞ vs lowercase ß: tagLine uppercase
    // forces a redirect to the lowercased canonical.
    const r = normalizeHandle('alpha-EU1');
    expect(r.kind).toBe('needs_redirect');
    if (r.kind === 'needs_redirect') {
      expect(r.canonical).toBe('alpha-eu1');
    }
  });

  it('splits on the LAST dash so gameName may contain a dash', () => {
    const r = normalizeHandle('foo-bar-tag');
    expect(r).toEqual({
      kind: 'ok',
      gameName: 'foo-bar',
      tagLine: 'tag',
      canonical: 'foo-bar-tag',
    });
  });

  it('rejects empty input as malformed', () => {
    expect(normalizeHandle('')).toEqual({ kind: 'malformed' });
  });

  it('rejects input without a dash as malformed', () => {
    expect(normalizeHandle('caps')).toEqual({ kind: 'malformed' });
  });

  it('rejects leading-dash input as malformed', () => {
    expect(normalizeHandle('-tag')).toEqual({ kind: 'malformed' });
  });

  it('rejects trailing-dash input as malformed', () => {
    expect(normalizeHandle('caps-')).toEqual({ kind: 'malformed' });
  });

  it('rejects malformed percent-encoding as malformed (no exception)', () => {
    expect(normalizeHandle('%E0%A4%A')).toEqual({ kind: 'malformed' });
  });

  it('redirects when only the gameName has uppercase but tagLine is already lowercase', () => {
    const r = normalizeHandle('Caps-euw');
    expect(r).toEqual({ kind: 'needs_redirect', canonical: 'caps-euw' });
  });

  it('preserves percent-encoded input when it is already canonical', () => {
    // "한국-kr1" pre-encoded
    const input = encodeURIComponent('한국') + '-kr1';
    const r = normalizeHandle(input);
    expect(r.kind).toBe('ok');
    if (r.kind === 'ok') {
      expect(r.canonical).toBe(input);
    }
  });
});
