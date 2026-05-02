// WPCP Phase 5 (CR-063 / WPCP-025) — Counter i18n parity test.
//
// Verifica che il namespace `counter.*` sia presente con perfetta parita di
// chiavi in EN e IT (ADR-034: feature EN+IT only). Le chiavi devono coprire
// tutti i sotto-namespace usati dai componenti Phase 3-5:
//   - counter.search.*  (search page)
//   - counter.role.*    (role filter)
//   - counter.detail.*  (detail page)
//   - counter.cta.*     (cross-link hub + guide)
//   - counter.a11y.*    (alt + aria-label)
//
// Nota: il check globale `npm run check:i18n` valida la parita di TUTTO il
// dizionario contro EN. Questo test e' piu mirato e fail-fast sulle chiavi
// counter, cosi un developer che dimentica di aggiungere una chiave nuova
// in IT vede l'errore subito senza dover scorrere l'output del check
// globale.

import { describe, expect, it } from 'vitest';
import en from '../../src/i18n/en';
import itLocale from '../../src/i18n/it';

const COUNTER_PREFIX = 'counter.';

const REQUIRED_KEYS = [
  // Search
  'counter.search.page_title',
  'counter.search.h1',
  'counter.search.tagline',
  'counter.search.input_placeholder',
  'counter.search.input_aria',
  'counter.search.placeholder_hint',
  'counter.search.no_results',
  'counter.search.loading',
  'counter.search.error_load',
  // Role filter
  'counter.role.any',
  'counter.role.top',
  'counter.role.jungle',
  'counter.role.mid',
  'counter.role.bot',
  'counter.role.support',
  'counter.role.aria_label',
  // Detail page
  'counter.detail.page_title_template',
  'counter.detail.meta_description_template',
  'counter.detail.column.strong',
  'counter.detail.column.weak',
  'counter.detail.column.empty_strong',
  'counter.detail.column.empty_weak',
  'counter.detail.no_data',
  'counter.detail.no_data_cta',
  'counter.detail.cross_link_subject',
  'counter.detail.role_badge_aria',
  'counter.detail.not_found_title',
  'counter.detail.not_found_body',
  'counter.detail.not_found_cta',
  'counter.detail.loading',
  // CTA
  'counter.cta.hub_label',
  'counter.cta.hub_subtitle',
  'counter.cta.guide_label',
  'counter.cta.guide_label_short',
  // A11y
  'counter.a11y.portrait_alt',
  'counter.a11y.suggestion_role',
  'counter.a11y.cell_link_aria',
  'counter.a11y.cell_via_pick_into',
  'counter.a11y.cell_via_counterpick',
  'counter.a11y.column_strong_label',
  'counter.a11y.column_weak_label',
] as const;

function counterKeys(dict: Record<string, string>): string[] {
  return Object.keys(dict).filter((k) => k.startsWith(COUNTER_PREFIX));
}

describe('counter.* i18n keys — EN locale', () => {
  it('contains every required key', () => {
    const enDict = en as unknown as Record<string, string>;
    const missing = REQUIRED_KEYS.filter((k) => !(k in enDict));
    expect(missing).toEqual([]);
  });

  it('every required key resolves to a non-empty string', () => {
    const enDict = en as unknown as Record<string, string>;
    for (const key of REQUIRED_KEYS) {
      const value = enDict[key];
      expect(typeof value).toBe('string');
      expect(value.length).toBeGreaterThan(0);
    }
  });
});

describe('counter.* i18n keys — IT locale', () => {
  it('contains every required key', () => {
    const itDict = itLocale as unknown as Record<string, string>;
    const missing = REQUIRED_KEYS.filter((k) => !(k in itDict));
    expect(missing).toEqual([]);
  });

  it('every required key resolves to a non-empty string', () => {
    const itDict = itLocale as unknown as Record<string, string>;
    for (const key of REQUIRED_KEYS) {
      const value = itDict[key];
      expect(typeof value).toBe('string');
      expect(value.length).toBeGreaterThan(0);
    }
  });
});

describe('counter.* i18n parity EN <-> IT', () => {
  it('EN and IT have the same set of counter.* keys', () => {
    const enDict = en as unknown as Record<string, string>;
    const itDict = itLocale as unknown as Record<string, string>;
    const enKeys = new Set(counterKeys(enDict));
    const itKeys = new Set(counterKeys(itDict));

    const onlyInEn = [...enKeys].filter((k) => !itKeys.has(k));
    const onlyInIt = [...itKeys].filter((k) => !enKeys.has(k));

    expect(onlyInEn).toEqual([]);
    expect(onlyInIt).toEqual([]);
  });

  it('templated keys preserve interpolation placeholders across locales', () => {
    // Tutte le chiavi che contengono `{name}` in EN devono contenere `{name}`
    // anche in IT (e cosi via per altri placeholder). Garanzia che la
    // traduzione non abbia rotto l'interpolazione.
    const enDict = en as unknown as Record<string, string>;
    const itDict = itLocale as unknown as Record<string, string>;
    const placeholderRe = /\{(\w+)\}/g;

    for (const key of REQUIRED_KEYS) {
      const enVal = enDict[key];
      const itVal = itDict[key];
      const enPlaceholders = new Set(
        Array.from(enVal.matchAll(placeholderRe), (m) => m[1]),
      );
      const itPlaceholders = new Set(
        Array.from(itVal.matchAll(placeholderRe), (m) => m[1]),
      );
      // I placeholder devono essere lo stesso insieme (no traduzione del
      // nome del placeholder, no perdita di placeholder).
      expect([...itPlaceholders].sort()).toEqual([...enPlaceholders].sort());
    }
  });
});
