// WPCP-003 — runtime validation of CounterIndex via Zod.
//
// Lo schema gira opzionalmente in DEV (gated nel loader) ma puo essere
// invocato esplicitamente per validare l'asset prodotto dal builder.

import { describe, expect, it } from 'vitest';
import {
  CounterIndexSchema,
  MatchupCellSchema,
} from '../../src/lib/counter/schema';

const validCell = {
  champion_slug: 'aatrox',
  role: 'top',
  display_name: 'Aatrox',
  champion_dd_id: 'Aatrox',
  champion_key: '266',
  rationale_excerpt: 'Aatrox punishes immobile melee fighters early.',
  source_anchor: '/en/champion/aatrox-top/guide#pick-into',
  via: 'pick_into',
  recurrence_count: 1,
};

const validIndex = {
  schema_version: 1,
  lang: 'en',
  generated_at: '1970-01-01',
  champions: [
    {
      slug: 'aatrox',
      display_name: 'Aatrox',
      champion_dd_id: 'Aatrox',
      champion_key: '266',
      cited_in_roles: ['top'],
      has_guide: true,
    },
    {
      slug: 'fiora',
      display_name: 'Fiora',
      champion_dd_id: 'Fiora',
      champion_key: '114',
      cited_in_roles: [],
      has_guide: false,
    },
  ],
  by_enemy: {
    fiora: {
      enemy_slug: 'fiora',
      is_strong_against: [],
      is_weak_against: [validCell],
    },
  },
};

describe('CounterIndexSchema — happy path', () => {
  it('accepts a fully-valid index', () => {
    const out = CounterIndexSchema.parse(validIndex);
    expect(out.schema_version).toBe(1);
    expect(out.champions).toHaveLength(2);
    expect(out.by_enemy.fiora.is_weak_against[0].champion_slug).toBe('aatrox');
  });

  it('accepts empty champions and by_enemy', () => {
    const out = CounterIndexSchema.parse({
      schema_version: 1,
      lang: 'it',
      generated_at: '2026-05-02',
      champions: [],
      by_enemy: {},
    });
    expect(out.lang).toBe('it');
  });

  it('accepts MatchupCellSchema directly', () => {
    expect(MatchupCellSchema.parse(validCell)).toEqual(validCell);
  });
});

describe('CounterIndexSchema — failures', () => {
  it('rejects schema_version != 1', () => {
    const bad = { ...validIndex, schema_version: 99 };
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

  it('rejects MatchupCell with invalid via', () => {
    const bad = { ...validCell, via: 'wrong' };
    expect(MatchupCellSchema.safeParse(bad).success).toBe(false);
  });

  it('rejects MatchupCell with negative recurrence_count', () => {
    const bad = { ...validCell, recurrence_count: -1 };
    expect(MatchupCellSchema.safeParse(bad).success).toBe(false);
  });

  it('rejects Champion with non-array cited_in_roles', () => {
    const bad = {
      ...validIndex,
      champions: [
        {
          slug: 'aatrox',
          display_name: 'Aatrox',
          champion_dd_id: 'Aatrox',
          champion_key: '266',
          cited_in_roles: 'top',
          has_guide: true,
        },
      ],
    };
    expect(CounterIndexSchema.safeParse(bad).success).toBe(false);
  });
});
