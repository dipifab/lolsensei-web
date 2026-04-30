import { describe, it, expect } from 'vitest';
import { detectLocale } from '../../../src/lib/middleware/locale-detection';

describe('detectLocale', () => {
  it('returns default locale (en) when input is null', () => {
    expect(detectLocale(null)).toBe('en');
  });

  it('returns default locale (en) when input is undefined', () => {
    expect(detectLocale(undefined)).toBe('en');
  });

  it('returns default locale (en) when input is empty string', () => {
    expect(detectLocale('')).toBe('en');
  });

  it('returns default locale (en) when input is whitespace only', () => {
    expect(detectLocale('   ')).toBe('en');
  });

  it('matches exact supported locale "it"', () => {
    expect(detectLocale('it')).toBe('it');
  });

  it('resolves "it-IT,it;q=0.9,en;q=0.8" to "it" via primary-subtag fallback', () => {
    expect(detectLocale('it-IT,it;q=0.9,en;q=0.8')).toBe('it');
  });

  it('orders candidates by q-weight (fr;q=0.5,en;q=0.9 -> en)', () => {
    expect(detectLocale('fr;q=0.5,en;q=0.9')).toBe('en');
  });

  it('falls back "pt-PT" to "pt-br" via primary-subtag match', () => {
    expect(detectLocale('pt-PT')).toBe('pt-br');
  });

  it('maps "zh-CN" to "zh-hans" via primary-subtag match', () => {
    expect(detectLocale('zh-CN')).toBe('zh-hans');
  });

  it('skips unsupported "ja" and falls through to "en"', () => {
    expect(detectLocale('ja,en;q=0.8')).toBe('en');
  });

  it('returns default when all candidates unknown (xx-YY -> en)', () => {
    expect(detectLocale('xx-YY')).toBe('en');
  });

  it('resolves "de-AT" to "de"', () => {
    expect(detectLocale('de-AT')).toBe('de');
  });

  it('picks higher-q "ko" over "en-US" in "ko-KR,en-US;q=0.5"', () => {
    expect(detectLocale('ko-KR,en-US;q=0.5')).toBe('ko');
  });

  it('matches lowercase canonical "zh-hans" against Accept-Language "zh-hans"', () => {
    expect(detectLocale('zh-hans')).toBe('zh-hans');
  });

  it('ignores wildcard "*" candidates', () => {
    expect(detectLocale('*,it;q=0.5')).toBe('it');
  });

  it('excludes candidates with q=0', () => {
    expect(detectLocale('it;q=0,fr;q=0.5')).toBe('fr');
  });

  it('handles whitespace around commas and semicolons', () => {
    expect(detectLocale('  fr ; q=0.5 ,  en ; q=0.9  ')).toBe('en');
  });

  it('preserves order for equal q values (first wins)', () => {
    expect(detectLocale('fr,de')).toBe('fr');
  });
});
