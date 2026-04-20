import { describe, it, expect } from 'vitest';
import * as ts from '../../../src/lib/i18n/locales';
// @ts-expect-error .mjs import (no types, manual parity with locales.ts)
import * as mjs from '../../../scripts/locales.mjs';

/**
 * scripts/locales.mjs è un duplicato manuale di src/lib/i18n/locales.ts
 * (gli script Node di build come sitemap/seo checker non possono importare .ts).
 * Al primo drift (es: nuova locale aggiunta solo al modulo TS) sitemap/hreflang
 * e HTML prerendered diventerebbero inconsistenti. Questi test catturano il drift.
 */
describe('locales TS vs MJS parity', () => {
  it('SUPPORTED_LOCALES matches', () => {
    expect(Array.from(ts.SUPPORTED_LOCALES)).toEqual(Array.from(mjs.SUPPORTED_LOCALES));
  });

  it('BLOG_LOCALES matches', () => {
    expect(Array.from(ts.BLOG_LOCALES)).toEqual(Array.from(mjs.BLOG_LOCALES));
  });

  it('DEFAULT_LOCALE matches', () => {
    expect(ts.DEFAULT_LOCALE).toBe(mjs.DEFAULT_LOCALE);
  });

  it('HREFLANG_MAP matches (keys and values)', () => {
    expect(ts.HREFLANG_MAP).toEqual(mjs.HREFLANG_MAP);
  });
});
