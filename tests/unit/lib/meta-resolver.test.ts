import { describe, it, expect } from 'vitest';
import { getStaticMeta } from '../../../src/lib/seo/meta-resolver';

/**
 * Guard per `src/lib/seo/meta-resolver.ts`: è il source of truth statico
 * dei <title>/<meta description> nelle pagine prerendered. Senza test, una
 * regressione silenziosa (fallback che ingoia tutto in inglese, mapping locale
 * rotto, chiavi messaggi mal riferite) rende le 74 pagine SSR identiche in
 * inglese — esattamente il bug che il resolver è stato creato per risolvere.
 */
describe('meta-resolver — getStaticMeta', () => {
  it('returns localized titles different per locale on the pricing page', () => {
    const en = getStaticMeta('pricing', 'en');
    const it = getStaticMeta('pricing', 'it');
    const ko = getStaticMeta('pricing', 'ko');
    expect(en.title).toBeTruthy();
    expect(it.title).toBeTruthy();
    expect(ko.title).toBeTruthy();
    expect(en.title).not.toBe(it.title);
    expect(it.title).not.toBe(ko.title);
    expect(en.title).not.toBe(ko.title);
  });

  it('falls back to en copy for an unknown locale', () => {
    const en = getStaticMeta('pricing', 'en');
    const unknown = getStaticMeta('pricing', 'xx');
    expect(unknown.title).toBe(en.title);
    expect(unknown.description).toBe(en.description);
  });

  it('falls back to generic brand string for an unknown pageKey', () => {
    // Unknown key: messages[titleKey] undefined in ogni locale -> fallback
    // finale `'LoL Sensei'` nel resolver.
    const out = getStaticMeta('nonexistent-page', 'en');
    expect(out.title).toBe('LoL Sensei');
    expect(out.description).toBe('');
  });

  it('normalizes locale casing (zh-Hans → zh-hans) so both resolve to the same entry', () => {
    // REQ-SEO-023: canonical URL path is now `zh-hans` (lowercase). The
    // resolver still accepts the legacy `zh-Hans` casing via `canonicalLocale`
    // so prerendered routes don't 404 on stale links.
    const canonical = getStaticMeta('pricing', 'zh-hans');
    const legacy = getStaticMeta('pricing', 'zh-Hans');
    expect(legacy.title).toBe(canonical.title);
  });
});
