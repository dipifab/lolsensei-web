// WPCP-002 — type assertion tests for src/lib/counter/types.ts.
// Updated for schema v2 (CR-063 Phase 2 fix OI2 — schema dedup, 2026-05-02).
// Updated 2026-05-02 for OI-P6-1: resolveSourceAnchor now produces the
// post-CR-056 role-explicit URL `/[lang]/champion/<champion>/<role>/guide`
// (slash, non hyphen). La forma legacy `<champion>-<role>` non risolve piu.
//
// Vitest "compile-time" tests: validano che i tipi TS siano usabili e che
// literal unions accettino i valori validi. Una violazione si manifesta
// come errore TS in `npm run typecheck`, non come assertion runtime.

import { describe, expect, it } from 'vitest';
import {
  resolveSourceAnchor,
  resolveGuideSlug,
  resolveGuideChampionSlug,
  resolveRationale,
} from '../../src/lib/counter/types';
import type {
  ChampionMeta,
  CounterIndex,
  EnemyEntry,
  Lang,
  MatchupCell,
  MatchupVia,
  Role,
  RoleFilter,
} from '../../src/lib/counter/types';

describe('counter types — happy path (schema v2)', () => {
  it('accepts a fully-formed compact MatchupCell value', () => {
    const cell: MatchupCell = {
      c: 'aatrox',
      role: 'top',
      r: 0,
      n: 1,
    };
    expect(cell.c).toBe('aatrox');
  });

  it('accepts a CounterIndex with empty by_enemy and champions', () => {
    const idx: CounterIndex = {
      schema_version: 2,
      lang: 'en',
      generated_at: '1970-01-01',
      rationales: [],
      champions: {},
      by_enemy: {},
    };
    expect(idx.schema_version).toBe(2);
  });

  it('allows nullable optional ids on ChampionMeta', () => {
    const c: ChampionMeta = {
      display_name: 'Mystery',
      dd_id: null,
      key: null,
      cited_in_roles: [],
      has_guide: false,
    };
    expect(c.has_guide).toBe(false);
  });

  it('allows ChampionMeta with optional gp (guide_prefix) for aliased subjects', () => {
    const c: ChampionMeta = {
      display_name: "Cho'Gath",
      dd_id: 'Chogath',
      key: '31',
      cited_in_roles: ['top'],
      has_guide: true,
      gp: 'chogath',
    };
    expect(c.gp).toBe('chogath');
  });

  it('allows EnemyEntry with both arrays populated', () => {
    const e: EnemyEntry = {
      is_strong_against: [],
      is_weak_against: [],
    };
    expect(e.is_strong_against).toHaveLength(0);
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

describe('client-side resolvers (schema v2)', () => {
  const champions: Record<string, ChampionMeta> = {
    aatrox: {
      display_name: 'Aatrox',
      dd_id: 'Aatrox',
      key: '266',
      cited_in_roles: ['top'],
      has_guide: true,
    },
    'cho-gath': {
      display_name: "Cho'Gath",
      dd_id: 'Chogath',
      key: '31',
      cited_in_roles: ['top'],
      has_guide: true,
      gp: 'chogath',
    },
  };

  it('resolveSourceAnchor builds the pick_into URL with role-explicit slash path', () => {
    expect(resolveSourceAnchor('en', 'aatrox', 'top', 'pick_into')).toBe(
      '/en/champion/aatrox/top/guide#matchup-draft-pick-into',
    );
  });

  it('resolveSourceAnchor uses the counterpicks fragment for counterpick via', () => {
    expect(resolveSourceAnchor('it', 'fiora', 'top', 'counterpick')).toBe(
      '/it/champion/fiora/top/guide#matchup-draft-counterpicks',
    );
  });

  it('resolveSourceAnchor preserves the lang segment for IT locale', () => {
    expect(resolveSourceAnchor('it', 'aatrox', 'jungle', 'pick_into')).toBe(
      '/it/champion/aatrox/jungle/guide#matchup-draft-pick-into',
    );
  });

  it('resolveGuideChampionSlug uses canonical slug when gp is absent', () => {
    expect(resolveGuideChampionSlug({ c: 'aatrox' }, champions)).toBe('aatrox');
  });

  it('resolveGuideChampionSlug uses gp prefix when present (alias champion)', () => {
    expect(resolveGuideChampionSlug({ c: 'cho-gath' }, champions)).toBe('chogath');
  });

  it('resolveGuideSlug (legacy composite) still returns the hyphen form for non-URL consumers', () => {
    expect(resolveGuideSlug({ c: 'aatrox', role: 'top' }, champions)).toBe('aatrox-top');
    expect(resolveGuideSlug({ c: 'cho-gath', role: 'top' }, champions)).toBe('chogath-top');
  });

  it('resolveRationale dereferences the rationales table', () => {
    const rationales = ['first reason', 'second reason'];
    expect(resolveRationale({ r: 0 }, rationales)).toBe('first reason');
    expect(resolveRationale({ r: 1 }, rationales)).toBe('second reason');
  });
});
