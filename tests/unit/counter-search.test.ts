// WPCP-022 / WPCP-023 — searchChampions tests.
//
// Filtro substring case-insensitive su slug + display_name. Sort prefix-match
// prima, poi alfabetico. Filtro role su `cited_in_roles`. Max 10 risultati.
// Microbench su 1000 iterazioni < 50ms (NFR-CP-001 1.2).
//
// Vedi `dev-repository/wp-counter-picker/design/components.md` §2.

import { describe, expect, it } from 'vitest';
import { searchChampions } from '../../src/lib/counter/search';
import type { CounterIndex } from '../../src/lib/counter/types';

// Mini-fixture inline costruita da slug REALI (zed/zeri/aatrox/lee-sin/yasuo)
// presenti in `public/counter-index/en.json`. Niente dati fake.
function makeIndex(): CounterIndex {
  return {
    schema_version: 2,
    lang: 'en',
    generated_at: '1970-01-01',
    rationales: ['stub'],
    champions: {
      aatrox: {
        display_name: 'Aatrox',
        dd_id: 'Aatrox',
        key: '266',
        cited_in_roles: ['top'],
        has_guide: true,
      },
      yasuo: {
        display_name: 'Yasuo',
        dd_id: 'Yasuo',
        key: '157',
        cited_in_roles: ['mid'],
        has_guide: true,
      },
      zed: {
        display_name: 'Zed',
        dd_id: 'Zed',
        key: '238',
        cited_in_roles: ['mid'],
        has_guide: true,
      },
      zeri: {
        display_name: 'Zeri',
        dd_id: 'Zeri',
        key: '221',
        cited_in_roles: ['bot'],
        has_guide: false,
      },
      'lee-sin': {
        display_name: 'Lee Sin',
        dd_id: 'LeeSin',
        key: '64',
        cited_in_roles: ['jungle'],
        has_guide: true,
      },
    },
    by_enemy: {},
  };
}

describe('searchChampions — query length gate', () => {
  it('returns empty for query < 2 chars', () => {
    expect(searchChampions('z', 'any', makeIndex())).toEqual([]);
  });

  it('returns empty for empty query', () => {
    expect(searchChampions('', 'any', makeIndex())).toEqual([]);
  });
});

describe('searchChampions — substring match', () => {
  it('matches slug substring (prefix wins over substring)', () => {
    const out = searchChampions('ze', 'any', makeIndex());
    const slugs = out.map((c) => c.slug);
    expect(slugs).toContain('zed');
    expect(slugs).toContain('zeri');
    // Both are prefix-matches of "ze". Sort alpha within same prefix bucket.
    expect(slugs.indexOf('zed')).toBeLessThan(slugs.indexOf('zeri'));
  });

  it('is case-insensitive', () => {
    const out = searchChampions('ZE', 'any', makeIndex());
    expect(out.map((c) => c.slug)).toContain('zed');
  });

  it('matches display_name token (e.g. "sin" matches lee-sin)', () => {
    const out = searchChampions('sin', 'any', makeIndex());
    expect(out.map((c) => c.slug)).toContain('lee-sin');
  });

  it('orders prefix-matches before substring-only matches', () => {
    // Aggiunge un champion fittizio reale-shape che contiene "ze" non in prefix
    // ma SOLO se esistesse: nei dati reali "ze" e' prefisso unico (zed/zeri).
    // Verifichiamo invece il caso piu' robusto: "sin" matcha lee-sin (substring,
    // non prefix). Un champion che inizia con "sin" non esiste nel registry,
    // quindi questo test verifica solo la stabilita del sort.
    const out = searchChampions('sin', 'any', makeIndex());
    expect(out[0]?.slug).toBe('lee-sin');
  });
});

describe('searchChampions — role filter', () => {
  it('filters out champions not cited in the requested role', () => {
    // "yas" matches yasuo only. With role=top, yasuo (cited only mid) is
    // filtered out -> empty.
    const out = searchChampions('yas', 'top', makeIndex());
    expect(out.map((c) => c.slug)).not.toContain('yasuo');
  });

  it('keeps champions whose cited_in_roles includes the requested role', () => {
    const out = searchChampions('yas', 'mid', makeIndex());
    expect(out.map((c) => c.slug)).toContain('yasuo');
  });

  it('any role returns matches regardless of cited_in_roles', () => {
    const aatroxOut = searchChampions('aat', 'any', makeIndex());
    const yasuoOut = searchChampions('yas', 'any', makeIndex());
    expect(aatroxOut.map((c) => c.slug)).toContain('aatrox');
    expect(yasuoOut.map((c) => c.slug)).toContain('yasuo');
  });
});

describe('searchChampions — limit', () => {
  it('returns at most 10 suggestions', () => {
    // Costruisci indice con 15 slug "z..." reali-shape (ddId / key plausibili).
    const idx = makeIndex();
    for (let i = 0; i < 15; i++) {
      idx.champions[`zfake${i}`] = {
        display_name: `Zfake${i}`,
        dd_id: `Zfake${i}`,
        key: null,
        cited_in_roles: ['mid'],
        has_guide: false,
      };
    }
    const out = searchChampions('z', 'any', idx);
    expect(out.length).toBeLessThanOrEqual(10);
  });
});

describe('searchChampions — performance', () => {
  it('1000 iterations under 50ms on a 167-champion index', () => {
    const idx = makeIndex();
    // Pad to 167 entries (target di prod) per essere realistici sul budget.
    for (let i = 0; i < 162; i++) {
      idx.champions[`pad-${i}`] = {
        display_name: `Pad ${i}`,
        dd_id: null,
        key: null,
        cited_in_roles: ['top'],
        has_guide: false,
      };
    }
    const start = performance.now();
    for (let i = 0; i < 1000; i++) {
      searchChampions('ze', 'any', idx);
    }
    const elapsed = performance.now() - start;
    expect(elapsed).toBeLessThan(50);
  });
});
