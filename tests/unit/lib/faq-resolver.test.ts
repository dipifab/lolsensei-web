import { describe, it, expect } from 'vitest';
import { getStaticFaqEntries } from '../../../src/lib/seo/faq-resolver';
import { FAQ_ITEMS } from '../../../src/data/faq';

/**
 * Guard per `src/lib/seo/faq-resolver.ts`: è il source of truth statico del
 * FAQPage JSON-LD prerendered nelle 8 locali × N entries. Senza test, una
 * regressione silenziosa (fallback in inglese che ingoia tutto, key leak
 * come `faq.item1.question` nel body della pagina) invaliderebbe lo schema
 * FAQPage consumato da Google per i rich results.
 */
describe('faq-resolver — getStaticFaqEntries', () => {
  it('returns localized entries with question+answer texts for en', () => {
    const entries = getStaticFaqEntries('en');
    expect(entries.length).toBe(FAQ_ITEMS.length);
    expect(entries.length).toBeGreaterThan(0);
    // no leak di i18n key (la chiave originale inizierebbe con "faq.itemN.")
    expect(entries[0].question).not.toMatch(/^faq\./);
    expect(entries[0].answer).not.toMatch(/^faq\./);
    expect(entries[0].question.length).toBeGreaterThan(0);
    expect(entries[0].answer.length).toBeGreaterThan(0);
  });

  it('returns different texts for different locales (it vs en)', () => {
    const en = getStaticFaqEntries('en');
    const it = getStaticFaqEntries('it');
    expect(en.length).toBe(it.length);
    expect(en[0].question).not.toBe(it[0].question);
    expect(en[0].answer).not.toBe(it[0].answer);
  });

  it('falls back to en copy for an unknown locale', () => {
    const en = getStaticFaqEntries('en');
    const xx = getStaticFaqEntries('xx');
    expect(xx[0].question).toBe(en[0].question);
    expect(xx[0].answer).toBe(en[0].answer);
  });
});
