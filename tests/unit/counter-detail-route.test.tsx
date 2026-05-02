// @vitest-environment jsdom
//
// WPCP-033 (CR-063) — Counter Detail Page route logic tests.
//
// Test mirati alla logica pura della route detail:
//   - parseSlugParam (gia coperto piu specificamente in counter-slug.test.ts,
//     qui verifichiamo l'integrazione con la classificazione enemy);
//   - classifyEnemy: dato `(slug, role, index)` decide tra: 404 / no-data /
//     ok (= renderizziamo l'header + 2 colonne);
//   - selectEnemyEntry: ritorna { is_strong_against, is_weak_against } gia
//     ordinato come da DoD (recurrence_count desc, fallback stable alfa);
//   - buildSubjectGuideHref: URL della guida subject post-CR-056 (slash-form,
//     chiusura REV-001 contro la regressione hyphen-form legacy).
//
// La route stessa (file `[slug].tsx`) e' coperta da E2E in Phase 6 perche'
// importa Navbar/Footer/router/SSR (test SSR fragili in jsdom). Qui copriamo
// le funzioni pure esposte dal route module via export.

import { describe, expect, it } from 'vitest';
import {
  buildHreflangAlternates,
  buildSubjectGuideHref,
  classifyEnemy,
  filterEntryByRole,
  resolveEnemyDisplayName,
  rolesWithMatchups,
  selectEnemyEntry,
} from '../../src/lib/counter/detail';
import type { ChampionMeta, CounterIndex } from '../../src/lib/counter/types';

function makeIndex(): CounterIndex {
  return {
    schema_version: 2,
    lang: 'en',
    generated_at: '1970-01-01',
    rationales: ['rA', 'rB', 'rC', 'rD'],
    champions: {
      yasuo: {
        display_name: 'Yasuo',
        dd_id: 'Yasuo',
        key: '157',
        cited_in_roles: ['mid', 'top'],
        has_guide: true,
      },
      // Champion noto al registry ma SENZA guida pubblicata: deve produrre
      // il placeholder no-data anche se assente da by_enemy.
      'orphan-no-guide': {
        display_name: 'Orphan',
        dd_id: 'Orphan',
        key: '999',
        cited_in_roles: [],
        has_guide: false,
      },
      // Publisher slugs (citati nelle celle):
      aatrox: {
        display_name: 'Aatrox',
        dd_id: 'Aatrox',
        key: '266',
        cited_in_roles: ['top'],
        has_guide: true,
      },
      malphite: {
        display_name: 'Malphite',
        dd_id: 'Malphite',
        key: '54',
        cited_in_roles: ['top'],
        has_guide: true,
      },
      zed: {
        display_name: 'Zed',
        dd_id: 'Zed',
        key: '238',
        cited_in_roles: ['mid'],
        has_guide: true,
      },
    },
    by_enemy: {
      yasuo: {
        is_strong_against: [
          { c: 'aatrox', role: 'top', r: 0, n: 1 },
          { c: 'malphite', role: 'top', r: 1, n: 3 },
          { c: 'zed', role: 'mid', r: 2, n: 2 },
        ],
        is_weak_against: [
          { c: 'aatrox', role: 'top', r: 3, n: 1 },
        ],
      },
    },
  };
}

describe('classifyEnemy — slug presence routing', () => {
  it('returns ok when enemy slug is in champions and has by_enemy entry', () => {
    const idx = makeIndex();
    const r = classifyEnemy('yasuo', idx);
    expect(r.kind).toBe('ok');
  });

  it('returns no-data when enemy is in champions but absent from by_enemy', () => {
    const idx = makeIndex();
    // 'orphan-no-guide' is in champions but not in by_enemy
    const r = classifyEnemy('orphan-no-guide', idx);
    expect(r.kind).toBe('no-data');
  });

  it('returns not-found when enemy slug is not in champions', () => {
    const idx = makeIndex();
    const r = classifyEnemy('nonexistent', idx);
    expect(r.kind).toBe('not-found');
  });

  it('treats empty/whitespace slug as not-found', () => {
    const idx = makeIndex();
    expect(classifyEnemy('', idx).kind).toBe('not-found');
    expect(classifyEnemy('   ', idx).kind).toBe('not-found');
  });
});

describe('selectEnemyEntry — ordering by recurrence desc', () => {
  it('orders is_strong_against by recurrence_count (n) desc', () => {
    const idx = makeIndex();
    const entry = selectEnemyEntry('yasuo', idx);
    expect(entry).toBeTruthy();
    const strong = entry!.is_strong_against;
    // Originale: aatrox(n=1), malphite(n=3), zed(n=2)
    // Atteso ordering: malphite(3), zed(2), aatrox(1)
    expect(strong.map((c) => c.c)).toEqual(['malphite', 'zed', 'aatrox']);
  });

  it('falls back to stable alpha sort by publisher slug when n is tied', () => {
    const idx: CounterIndex = {
      ...makeIndex(),
      by_enemy: {
        yasuo: {
          is_strong_against: [
            { c: 'malphite', role: 'top', r: 0, n: 1 },
            { c: 'aatrox', role: 'top', r: 1, n: 1 },
            { c: 'zed', role: 'mid', r: 2, n: 1 },
          ],
          is_weak_against: [],
        },
      },
    };
    const entry = selectEnemyEntry('yasuo', idx);
    expect(entry!.is_strong_against.map((c) => c.c)).toEqual([
      'aatrox',
      'malphite',
      'zed',
    ]);
  });

  it('returns null when enemy slug is absent from by_enemy', () => {
    const idx = makeIndex();
    const entry = selectEnemyEntry('orphan-no-guide', idx);
    expect(entry).toBeNull();
  });
});

describe('resolveEnemyDisplayName', () => {
  it('returns the display_name from the champions lookup', () => {
    const idx = makeIndex();
    expect(resolveEnemyDisplayName('yasuo', idx)).toBe('Yasuo');
  });

  it('falls back to the slug when champion is not in lookup', () => {
    const idx = makeIndex();
    expect(resolveEnemyDisplayName('nonexistent', idx)).toBe('nonexistent');
  });
});

describe('buildHreflangAlternates', () => {
  it('emits en + it + x-default for the same slug-role path', () => {
    const alts = buildHreflangAlternates('yasuo', 'mid', 'https://example.test');
    const map = new Map(alts.map((a) => [a.hreflang, a.href]));
    expect(map.get('en')).toBe('https://example.test/en/counter/yasuo-mid');
    expect(map.get('it')).toBe('https://example.test/it/counter/yasuo-mid');
    expect(map.get('x-default')).toBe('https://example.test/en/counter/yasuo-mid');
  });

  it('omits the role suffix when role is null', () => {
    const alts = buildHreflangAlternates('yasuo', null, 'https://example.test');
    const map = new Map(alts.map((a) => [a.hreflang, a.href]));
    expect(map.get('en')).toBe('https://example.test/en/counter/yasuo');
  });
});

// REV-001 (chiusura 2026-05-02): la CTA "vedi la guida di {name}" sulla
// detail page deve usare il pattern slash post-CR-056 (`/[lang]/champion/
// <champion>/<role>/guide`) per evitare la soft-404 sulla forma legacy
// hyphen. Estende OI-P6-1 (gia chiusa per `resolveSourceAnchor`) al
// subject cross-link.
describe('buildSubjectGuideHref — CR-056 slash-form URL (REV-001)', () => {
  function meta(over: Partial<ChampionMeta> = {}): ChampionMeta {
    return {
      display_name: 'X',
      dd_id: 'X',
      key: '0',
      cited_in_roles: [],
      has_guide: true,
      ...over,
    };
  }

  it('uses the slash-separated role-explicit path (NOT hyphen legacy)', () => {
    const href = buildSubjectGuideHref(
      'en',
      'yasuo',
      'mid',
      meta({ cited_in_roles: ['mid', 'top'] }),
    );
    expect(href).toBe('/en/champion/yasuo/mid/guide');
    // Negative assertion: la forma legacy hyphen non deve mai comparire.
    expect(href).not.toContain('yasuo-mid/guide');
  });

  it('preserves the lang segment for IT locale', () => {
    const href = buildSubjectGuideHref(
      'it',
      'aatrox',
      'top',
      meta({ cited_in_roles: ['top'] }),
    );
    expect(href).toBe('/it/champion/aatrox/top/guide');
  });

  it('falls back to first cited_in_roles when enemyRole is null', () => {
    const href = buildSubjectGuideHref(
      'en',
      'yasuo',
      null,
      meta({ cited_in_roles: ['mid', 'top'] }),
    );
    // cited_in_roles[0] === 'mid'
    expect(href).toBe('/en/champion/yasuo/mid/guide');
  });

  it("falls back to 'top' when both enemyRole and cited_in_roles are absent", () => {
    const href = buildSubjectGuideHref(
      'en',
      'orphan',
      null,
      meta({ cited_in_roles: [] }),
    );
    expect(href).toBe('/en/champion/orphan/top/guide');
  });

  it('uses gp (guide_prefix) when present for compressed-slug champions', () => {
    // Caso reale: cho-gath -> chogath (filename markdown chogath-top.md).
    const href = buildSubjectGuideHref(
      'en',
      'cho-gath',
      'top',
      meta({ cited_in_roles: ['top'], gp: 'chogath' }),
    );
    expect(href).toBe('/en/champion/chogath/top/guide');
  });

  it('falls back to the canonical enemy slug when meta is undefined', () => {
    // Difensivo: non dovrebbe accadere se il CTA e' gated da has_guide,
    // ma il helper non deve crashare.
    const href = buildSubjectGuideHref('en', 'yasuo', 'mid', undefined);
    expect(href).toBe('/en/champion/yasuo/mid/guide');
  });

  it('prefers explicit enemyRole over cited_in_roles[0]', () => {
    const href = buildSubjectGuideHref(
      'en',
      'yasuo',
      'top',
      meta({ cited_in_roles: ['mid', 'top'] }),
    );
    // enemyRole='top' deve vincere su cited_in_roles[0]='mid'.
    expect(href).toBe('/en/champion/yasuo/top/guide');
  });
});

describe('rolesWithMatchups — derive available role tabs from entry', () => {
  it('returns union of roles across is_strong_against and is_weak_against', () => {
    const entry = selectEnemyEntry('yasuo', makeIndex());
    expect(entry).not.toBeNull();
    // yasuo entry: top (aatrox+malphite+aatrox-weak), mid (zed)
    expect(rolesWithMatchups(entry!)).toEqual(['top', 'mid']);
  });

  it('orders roles by canonical top>jungle>mid>bot>support, dedupes', () => {
    const entry = {
      is_strong_against: [
        { c: 'a', role: 'support' as const, r: 0, n: 1 },
        { c: 'b', role: 'top' as const, r: 1, n: 1 },
      ],
      is_weak_against: [
        { c: 'c', role: 'mid' as const, r: 2, n: 1 },
        { c: 'd', role: 'top' as const, r: 3, n: 1 },
      ],
    };
    expect(rolesWithMatchups(entry)).toEqual(['top', 'mid', 'support']);
  });

  it('returns empty array when entry has no cells in either list', () => {
    expect(
      rolesWithMatchups({ is_strong_against: [], is_weak_against: [] }),
    ).toEqual([]);
  });
});

describe('filterEntryByRole — narrow entry cells to a single enemy role', () => {
  it('returns entry unchanged when role is null (= "All" tab)', () => {
    const entry = selectEnemyEntry('yasuo', makeIndex())!;
    const out = filterEntryByRole(entry, null);
    expect(out.is_strong_against).toEqual(entry.is_strong_against);
    expect(out.is_weak_against).toEqual(entry.is_weak_against);
  });

  it('keeps only cells matching the given role in both lists', () => {
    const entry = selectEnemyEntry('yasuo', makeIndex())!;
    const out = filterEntryByRole(entry, 'mid');
    expect(out.is_strong_against.map((c) => c.c)).toEqual(['zed']);
    expect(out.is_weak_against).toEqual([]);
  });

  it('preserves order of cells from input lists', () => {
    const entry = selectEnemyEntry('yasuo', makeIndex())!;
    const out = filterEntryByRole(entry, 'top');
    // Strong list pre-filtered (input ordering preserved).
    expect(out.is_strong_against.map((c) => c.c)).toEqual([
      'malphite', // n=3 first by selectEnemyEntry sort
      'aatrox', // n=1 alpha after malphite
    ]);
    expect(out.is_weak_against.map((c) => c.c)).toEqual(['aatrox']);
  });

  it('returns empty lists when role has no cells', () => {
    const entry = selectEnemyEntry('yasuo', makeIndex())!;
    const out = filterEntryByRole(entry, 'support');
    expect(out.is_strong_against).toEqual([]);
    expect(out.is_weak_against).toEqual([]);
  });
});
