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
    expect(SUPPORTED_LOCALES).toEqual(['en', 'it', 'es', 'fr', 'de', 'pt-br', 'ko', 'zh-Hans']);
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

  it('HREFLANG_MAP emits BCP-47 casing for pt-br and zh-Hans', () => {
    expect(HREFLANG_MAP['pt-br']).toBe('pt-BR');
    expect(HREFLANG_MAP['zh-Hans']).toBe('zh-Hans');
  });

  it('isSupportedLocale returns true for known and false otherwise', () => {
    expect(isSupportedLocale('en')).toBe(true);
    expect(isSupportedLocale('zh-Hans')).toBe(true);
    expect(isSupportedLocale('ja')).toBe(false);
    expect(isSupportedLocale('EN')).toBe(false);
  });

  it('canonicalLocale lowercases except zh-Hans', () => {
    expect(canonicalLocale('EN')).toBe('en');
    expect(canonicalLocale('PT-BR')).toBe('pt-br');
    expect(canonicalLocale('zh-hans')).toBe('zh-Hans');
    expect(canonicalLocale('ZH-HANS')).toBe('zh-Hans');
  });
});
