import { describe, it, expect } from 'vitest';
import {
  SUPPORTED_LOCALES,
  BLOG_LOCALES,
  DEFAULT_LOCALE,
  HREFLANG_MAP,
  isSupportedLocale,
  canonicalLocale,
} from '../../../src/lib/i18n/locales';

describe('locales module', () => {
  it('SUPPORTED_LOCALES contains 8 canonical locales', () => {
    expect(SUPPORTED_LOCALES).toEqual(['en', 'it', 'es', 'fr', 'de', 'pt-br', 'ko', 'zh-hans']);
  });

  it('BLOG_LOCALES is subset of SUPPORTED_LOCALES', () => {
    for (const l of BLOG_LOCALES) {
      expect(SUPPORTED_LOCALES).toContain(l);
    }
    expect(BLOG_LOCALES).toEqual(['en', 'it']);
  });

  it('DEFAULT_LOCALE is en', () => {
    expect(DEFAULT_LOCALE).toBe('en');
  });

  it('HREFLANG_MAP has entry for every supported locale', () => {
    for (const l of SUPPORTED_LOCALES) {
      expect(HREFLANG_MAP[l]).toBeDefined();
    }
  });

  it('HREFLANG_MAP emits BCP-47 casing for pt-br and zh-hans', () => {
    expect(HREFLANG_MAP['pt-br']).toBe('pt-BR');
    // REQ-SEO-023: URL path is lowercase `zh-hans`, hreflang attribute value
    // stays mixed-case `zh-Hans` per BCP-47 / RFC 5646.
    expect(HREFLANG_MAP['zh-hans']).toBe('zh-Hans');
  });

  it('isSupportedLocale returns true for known and false otherwise', () => {
    expect(isSupportedLocale('en')).toBe(true);
    expect(isSupportedLocale('zh-hans')).toBe(true);
    expect(isSupportedLocale('zh-Hans')).toBe(false);
    expect(isSupportedLocale('ja')).toBe(false);
    expect(isSupportedLocale('EN')).toBe(false);
  });

  it('canonicalLocale lowercases all input including zh-Hans variants', () => {
    expect(canonicalLocale('EN')).toBe('en');
    expect(canonicalLocale('PT-BR')).toBe('pt-br');
    expect(canonicalLocale('zh-hans')).toBe('zh-hans');
    expect(canonicalLocale('zh-Hans')).toBe('zh-hans');
    expect(canonicalLocale('ZH-HANS')).toBe('zh-hans');
  });
});
