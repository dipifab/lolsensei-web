// CR-054 (WP35.2) — Champion guide discovery layer.
//
// Source: `src/data/champions/index.json` (compile-content.mjs artifact),
// che contiene per ogni `(champion, role)` i metadata leggeri di tutte le
// lingue presenti (title, description, patch, last_updated, quick_learn
// fields, champion_key). NON contiene i full body delle guide: quelli
// vivono in KV `CHAMPION_GUIDES` e sono caricati on-demand dal loader
// in `champion-loader.ts`.
//
// Migrato da WP35-original che importava staticamente i 8 dataset
// `<lang>.ts` totalizzando ~9 MB → faceva sforare il limite 3 MiB Worker.
// Ora il bundle Worker eredita solo `index.json` (~150 KB).

import indexJson from '../../data/champions/index.json';
import type { Locale } from '../i18n/locales';
import { SUPPORTED_LOCALES } from '../i18n/locales';

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
  /** Mappa lingua → metadata. Solo le lingue per cui esiste una guida sono
   *  presenti; tutte le altre sono assenti (Partial). */
  locales: Partial<Record<Locale, HubIndexLocaleData>>;
}

interface RawIndexJson {
  generated_at: string;
  guides: HubIndexEntry[];
}

const INDEX = (indexJson as unknown as RawIndexJson).guides;

export function getHubIndex(): HubIndexEntry[] {
  return INDEX;
}

/** Returns the localized guide data for a (slug, lang) pair, falling back to
 *  EN when the requested lang is missing, then to the first locale present.
 *  Returns null if no locale exists. */
export function pickLocale(
  entry: HubIndexEntry,
  lang: Locale,
): HubIndexLocaleData | null {
  if (entry.locales[lang]) return entry.locales[lang]!;
  if (entry.locales.en) return entry.locales.en;
  for (const l of SUPPORTED_LOCALES) {
    if (entry.locales[l]) return entry.locales[l]!;
  }
  return null;
}

/** Returns true if the hub index has at least one entry for `(champion, role)`
 *  in any locale. Used by the tier list cross-link to decide whether to show
 *  the "guide" icon. */
export function hasGuideFor(champion: string, role: string): boolean {
  return INDEX.some((e) => e.champion === champion && e.role === role);
}

/** Lingue dove la guida latest per `(champion, role)` esiste. Usato dalle
 *  route SSR per generare i link hreflang senza dover caricare i dataset
 *  per-lingua dal KV. */
export function getAvailableLangsFor(
  champion: string,
  role: string,
): readonly Locale[] {
  const entry = INDEX.find(
    (e) => e.champion === champion && e.role === role,
  );
  if (!entry) return [];
  return SUPPORTED_LOCALES.filter((l) => entry.locales[l] !== undefined);
}
