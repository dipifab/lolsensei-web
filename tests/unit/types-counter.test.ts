// WPCP-002 — type assertion tests for src/lib/counter/types.ts.
//
// Vitest "compile-time" tests: validano che i tipi TS siano usabili e che
// literal unions accettino i valori validi. Una violazione si manifesta
// come errore TS in `npm run typecheck`, non come assertion runtime.

import { describe, expect, it } from 'vitest';
import type {
  Champion,
  CounterIndex,
  EnemyEntry,
  Lang,
  MatchupCell,
  MatchupVia,
  Role,
  RoleFilter,
} from '../../src/lib/counter/types';

describe('counter types — happy path', () => {
  it('accepts a fully-formed MatchupCell value', () => {
    const cell: MatchupCell = {
      champion_slug: 'aatrox',
      role: 'top',
      display_name: 'Aatrox',
      champion_dd_id: 'Aatrox',
      champion_key: '266',
      rationale_excerpt: 'Aatrox vince i trade prima del livello 6.',
      source_anchor: '/en/champion/aatrox-top/guide#pick-into',
      via: 'pick_into',
      recurrence_count: 1,
    };
    expect(cell.champion_slug).toBe('aatrox');
  });

  it('accepts a CounterIndex with empty by_enemy and champions', () => {
    const idx: CounterIndex = {
      schema_version: 1,
      lang: 'en',
      generated_at: '1970-01-01',
      champions: [],
      by_enemy: {},
    };
    expect(idx.schema_version).toBe(1);
  });

  it('allows nullable optional ids on Champion', () => {
    const c: Champion = {
      slug: 'mystery',
      display_name: 'Mystery',
      champion_dd_id: null,
      champion_key: null,
      cited_in_roles: [],
      has_guide: false,
    };
    expect(c.has_guide).toBe(false);
  });

  it('allows EnemyEntry with both arrays populated', () => {
    const e: EnemyEntry = {
      enemy_slug: 'fiora',
      is_strong_against: [],
      is_weak_against: [],
    };
    expect(e.enemy_slug).toBe('fiora');
  });
});

describe('counter types — literal unions', () => {
  it('exposes the 5 canonical roles', () => {
    const roles: Role[] = ['top', 'jungle', 'mid', 'bot', 'support'];
    expect(roles).toHaveLength(5);
  });

  it('exposes the 2 supported langs', () => {
    const langs: Lang[] = ['en', 'it'];
    expect(langs).toEqual(['en', 'it']);
  });

  it('exposes RoleFilter with the synthetic "any" value', () => {
    const filters: RoleFilter[] = ['any', 'top', 'jungle', 'mid', 'bot', 'support'];
    expect(filters[0]).toBe('any');
  });

  it('exposes the 2 matchup via values', () => {
    const via: MatchupVia[] = ['pick_into', 'counterpick'];
    expect(via).toEqual(['pick_into', 'counterpick']);
  });
});
