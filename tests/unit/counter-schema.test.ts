// WPCP-003 — runtime validation of CounterIndex via Zod.
// Updated for schema v2 (CR-063 Phase 2 fix OI2 — schema dedup, 2026-05-02).
//
// Lo schema gira opzionalmente in DEV (gated nel loader) ma puo essere
// invocato esplicitamente per validare l'asset prodotto dal builder.

import { describe, expect, it } from 'vitest';
import {
  CounterIndexSchema,
  MatchupCellSchema,
} from '../../src/lib/counter/schema';

const validCell = {
  c: 'aatrox',
  role: 'top',
  r: 0,
  n: 1,
};

const validIndex = {
  schema_version: 2,
  lang: 'en',
  generated_at: '1970-01-01',
  rationales: ['Aatrox punishes immobile melee fighters early.'],
  champions: {
    aatrox: {
      display_name: 'Aatrox',
      dd_id: 'Aatrox',
      key: '266',
      cited_in_roles: ['top'],
      has_guide: true,
    },
    fiora: {
      display_name: 'Fiora',
      dd_id: 'Fiora',
      key: '114',
      cited_in_roles: [],
      has_guide: false,
    },
  },
  by_enemy: {
    fiora: {
      is_strong_against: [],
      is_weak_against: [validCell],
    },
  },
};

describe('CounterIndexSchema — happy path (v2)', () => {
  it('accepts a fully-valid index', () => {
    const out = CounterIndexSchema.parse(validIndex);
    expect(out.schema_version).toBe(2);
    expect(Object.keys(out.champions)).toHaveLength(2);
    expect(out.by_enemy.fiora.is_weak_against[0].c).toBe('aatrox');
    expect(out.rationales).toHaveLength(1);
  });

  it('accepts empty rationales/champions/by_enemy', () => {
    const out = CounterIndexSchema.parse({
      schema_version: 2,
      lang: 'it',
      generated_at: '2026-05-02',
      rationales: [],
      champions: {},
      by_enemy: {},
    });
    expect(out.lang).toBe('it');
  });

  it('accepts MatchupCellSchema directly', () => {
    expect(MatchupCellSchema.parse(validCell)).toEqual(validCell);
  });

  it('accepts ChampionMeta with optional gp', () => {
    const idx = {
      ...validIndex,
      champions: {
        ...validIndex.champions,
        'cho-gath': {
          display_name: "Cho'Gath",
          dd_id: 'Chogath',
          key: '31',
          cited_in_roles: ['top'],
          has_guide: true,
          gp: 'chogath',
        },
      },
    };
    expect(CounterIndexSchema.safeParse(idx).success).toBe(true);
  });
});

describe('CounterIndexSchema — failures', () => {
  it('rejects schema_version != 2', () => {
    const bad = { ...validIndex, schema_version: 1 };
    const result = CounterIndexSchema.safeParse(bad);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.some((i) => i.path[0] === 'schema_version')).toBe(true);
    }
  });

  it('rejects unknown lang', () => {
    const bad = { ...validIndex, lang: 'fr' };
    expect(CounterIndexSchema.safeParse(bad).success).toBe(false);
  });

  it('rejects malformed generated_at', () => {
    const bad = { ...validIndex, generated_at: 'not-a-date' };
    expect(CounterIndexSchema.safeParse(bad).success).toBe(false);
  });

  it('rejects MatchupCell with invalid role', () => {
    const bad = { ...validCell, role: 'wrong' };
    expect(MatchupCellSchema.safeParse(bad).success).toBe(false);
  });

  it('rejects MatchupCell with negative recurrence count', () => {
    const bad = { ...validCell, n: -1 };
    expect(MatchupCellSchema.safeParse(bad).success).toBe(false);
  });

  it('rejects MatchupCell with non-integer rationale index', () => {
    const bad = { ...validCell, r: 1.5 };
    expect(MatchupCellSchema.safeParse(bad).success).toBe(false);
  });

  it('rejects MatchupCell with negative rationale index', () => {
    const bad = { ...validCell, r: -1 };
    expect(MatchupCellSchema.safeParse(bad).success).toBe(false);
  });

  it('rejects ChampionMeta with non-array cited_in_roles', () => {
    const bad = {
      ...validIndex,
      champions: {
        aatrox: {
          display_name: 'Aatrox',
          dd_id: 'Aatrox',
          key: '266',
          cited_in_roles: 'top',
          has_guide: true,
        },
      },
    };
    expect(CounterIndexSchema.safeParse(bad).success).toBe(false);
  });

  it('rejects ChampionMeta gp with invalid characters', () => {
    const bad = {
      ...validIndex,
      champions: {
        aatrox: {
          ...validIndex.champions.aatrox,
          gp: 'BadPrefix',
        },
      },
    };
    expect(CounterIndexSchema.safeParse(bad).success).toBe(false);
  });
});
