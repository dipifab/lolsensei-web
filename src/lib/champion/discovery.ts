// CR-054 (WP35.2) — Champion guide discovery layer.
//
// Builds the hub index from the compiled per-language datasets emitted by
// `scripts/compile-content.mjs`. Same shape as `src/data/champions/index.json`
// (produced by the same compile script) — kept as a TS function so the hub
// works even when index.json hasn't been regenerated yet (e.g. content compile
// blocked by an unrelated guide; CR-054 hub still ships from the per-lang .ts).
//
// Output is memoized at module load (datasets are immutable build artifacts).

import { enChampions } from '../../data/champions/en';
import { itChampions } from '../../data/champions/it';
import type { ChampionGuide } from '../../data/champions/types';

export interface HubIndexLocaleData {
  title: string;
  description: string;
  patch: string;
  last_updated: string;
  champion_class: string | null;
  difficulty: number | null;
  damage_type: string | null;
  champion_dd_id: string | null;
  /** Riot numeric champion key (e.g. "166" for Akshan). Used to address
   *  Community Dragon by stable path; null when not synced yet. */
  champion_key: string | null;
}

export interface HubIndexEntry {
  /** `${champion}-${role}`. */
  slug: string;
  champion: string;
  role: 'top' | 'jungle' | 'mid' | 'bot' | 'support';
  locales: {
    en?: HubIndexLocaleData;
    it?: HubIndexLocaleData;
  };
}

function pickLocaleData(g: ChampionGuide): HubIndexLocaleData {
  return {
    title: g.title,
    description: g.description,
    patch: g.patch,
    last_updated: g.last_updated,
    champion_class: g.quick_learn?.champion_class ?? null,
    difficulty: g.quick_learn?.difficulty ?? null,
    damage_type: g.quick_learn?.damage_type ?? null,
    champion_dd_id: g.quick_learn?.champion_dd_id ?? null,
    champion_key: g.champion_key ?? null,
  };
}

function buildIndex(): HubIndexEntry[] {
  const map = new Map<string, HubIndexEntry>();
  // Only consider the latest patch entry per (champion, role, lang). The
  // dataset is sorted desc by patch, so the first occurrence wins.
  const seen = new Set<string>();
  for (const g of enChampions) {
    const k = `${g.champion}-${g.role}-en`;
    if (seen.has(k)) continue;
    seen.add(k);
    const slug = `${g.champion}-${g.role}`;
    if (!map.has(slug)) {
      map.set(slug, {
        slug,
        champion: g.champion,
        role: g.role as HubIndexEntry['role'],
        locales: {},
      });
    }
    map.get(slug)!.locales.en = pickLocaleData(g);
  }
  for (const g of itChampions) {
    const k = `${g.champion}-${g.role}-it`;
    if (seen.has(k)) continue;
    seen.add(k);
    const slug = `${g.champion}-${g.role}`;
    if (!map.has(slug)) {
      map.set(slug, {
        slug,
        champion: g.champion,
        role: g.role as HubIndexEntry['role'],
        locales: {},
      });
    }
    map.get(slug)!.locales.it = pickLocaleData(g);
  }
  return [...map.values()].sort((a, b) => {
    if (a.champion !== b.champion) return a.champion.localeCompare(b.champion);
    return a.role.localeCompare(b.role);
  });
}

let cached: HubIndexEntry[] | null = null;

export function getHubIndex(): HubIndexEntry[] {
  if (cached === null) cached = buildIndex();
  return cached;
}

/** Returns the localized guide data for a (slug, lang) pair, falling back to
 *  EN when the requested lang is missing. Returns null if no locale exists. */
export function pickLocale(
  entry: HubIndexEntry,
  lang: 'en' | 'it',
): HubIndexLocaleData | null {
  return entry.locales[lang] ?? entry.locales.en ?? entry.locales.it ?? null;
}

/** Returns true if the hub index has at least one entry for `(champion, role)`
 *  in any locale. Used by the tier list cross-link to decide whether to show
 *  the "guide" icon. */
export function hasGuideFor(champion: string, role: string): boolean {
  return getHubIndex().some(
    (e) => e.champion === champion && e.role === role,
  );
}
