// WP-COUNTER-PICKER (CR-063) — Counter index data contract.
//
// Tipi TypeScript del reverse-index `public/counter-index/<lang>.json` prodotto
// dal builder GC34 e consumato dalle route /[lang]/counter/. Single source of
// truth per la shape dell'asset; lo schema Zod runtime in `./schema.ts`
// rispecchia 1:1 questi tipi (validazione gated by `import.meta.env.DEV`).
//
// Schema v2 (Phase 2 fix OI2 — schema dedup, 2026-05-02):
//   Lo shape e' relazionale + dedup-by-table:
//     - `champions`: tabella keyed by slug (display_name, dd_id, key, ...)
//     - `rationales`: tabella di rationale uniche; ogni cella ne contiene
//       l'indice numerico per evitare di ripetere stringhe lunghe
//     - `by_enemy`: reverse index con celle compatte
//   Il client fa join via `c` su `champions` e `r` su `rationales` durante
//   il rendering. Lo shape e' stato dedupato per rispettare NFR-CP-006
//   AC-006.2 (asset gz <=25KB): la v1 ripeteva display_name + dd_id + key
//   in ogni cella + rationale completa (1116 celle EN -> 64KB gz).
//
// Riferimento: dev-repository/wp-counter-picker/design/data-model.md §3.

import type { Locale } from '../i18n/locales';

/** Lingua dell'indice. WP35.1 ha esteso da `'en' | 'it'` a tutte le 8 lingue
 *  del sito; il counter-index e' costruito per ogni lingua con guide presenti
 *  (le lingue senza guide producono indice vuoto, vedi `emptyIndex` nel builder). */
export type Lang = Locale;

/** Ruoli supportati (allineato a ChampionRoleSchema di champion-schema.ts). */
export type Role = 'top' | 'jungle' | 'mid' | 'bot' | 'support';

/**
 * Filtro role lato UI: include "any" per "tutti i ruoli". Non e' un Role
 * perche "any" non e' un valore lecito nel data layer.
 */
export type RoleFilter = 'any' | Role;

/** Origine semantica della cella matchup: pick_into = subject e' forte contro
 *  enemy; counterpick = subject e' debole contro enemy.
 *
 *  In schema v2 la `via` non e' piu' serializzata per cella (e' implicita
 *  dall'array che contiene la cella). Resta esposta come tipo per il client
 *  che la calcola al volo durante il rendering. */
export type MatchupVia = 'pick_into' | 'counterpick';

/**
 * Singola cella nel reverse index (schema v2): rappresenta UNA guida sorgente
 * che cita l'enemy nel block `pick_into` o `counterpicks`.
 *
 * Campi compatti per ridurre il footprint gz. Tutto il resto (display_name,
 * dd_id, key, source_anchor, via, rationale text) e' ricostruito client-side
 * via lookup su `CounterIndex.champions[c]` + `CounterIndex.rationales[r]` +
 * il nome dell'array contenente la cella.
 */
export interface MatchupCell {
  /** Slug champion del PUBLISHER (= guida sorgente). Chiave esterna per
   *  `CounterIndex.champions[c]`. Es. "aatrox". */
  c: string;
  /** Ruolo del publisher (= role della guida sorgente). */
  role: Role;
  /** Indice nella tabella `CounterIndex.rationales` del rationale_excerpt
   *  (max 140 chars) di questa cella. La dedup risparmia ~63% raw quando
   *  multiple celle condividono lo stesso `reason` del frontmatter. */
  r: number;
  /** Recurrence count: quante guide distinte dello stesso publisher citano
   *  l'enemy nella stessa via. Pre-calcolato per evitare aggregazione client. */
  n: number;
}

/** Voce reverse-index: tutto cio che si sa contro un singolo enemy slug.
 *  La chiave dell'enemy e' la chiave esterna in `CounterIndex.by_enemy`. */
export interface EnemyEntry {
  /** Lista di celle di guide forti contro l'enemy (block pick_into). */
  is_strong_against: MatchupCell[];
  /** Lista di celle di guide deboli contro l'enemy (block counterpicks). */
  is_weak_against: MatchupCell[];
}

/** Champion noto al registry: usato per autocomplete + display + portrait.
 *  Una sola entry per champion in tutto l'indice (table normalizzata). */
export interface ChampionMeta {
  /** Nome localizzato. */
  display_name: string;
  /** Riot DD ID PascalCase. Null se non noto. Compresso da `champion_dd_id` v1. */
  dd_id: string | null;
  /** Riot numeric key. Null se non noto. Compresso da `champion_key` v1. */
  key: string | null;
  /** Ruoli per cui esiste una guida che CITA questo champion in matchup_draft. */
  cited_in_roles: Role[];
  /** True se il champion e' SUBJECT di almeno una guida pubblicata. */
  has_guide: boolean;
  /** Guide-slug prefix opzionale: presente solo per i champion il cui
   *  filename markdown usa una slug compressa diversa dalla canonical
   *  (es. `chogath-top.md` con canonical `cho-gath` -> `gp: "chogath"`).
   *  Quando assente, il client usa lo slug canonical (chiave del Record).
   *  Vedi `resolveGuideSlug()` sotto. */
  gp?: string;
}

/** Asset finale prodotto dal builder e consumato dalle route counter (schema v2). */
export interface CounterIndex {
  /** Versione schema asset. Bump major se shape cambia in modo non-additivo. */
  schema_version: 2;
  /** Lingua dell'indice. */
  lang: Lang;
  /** ISO date YYYY-MM-DD del build. */
  generated_at: string;
  /** Tabella rationale dedupata. Ogni cella punta a un indice qui dentro. */
  rationales: string[];
  /** Tabella champion (subject U enemy citati): chiave = slug kebab-case. */
  champions: Record<string, ChampionMeta>;
  /** Reverse index: chiave = slug enemy. Object literal (non Map) per
   *  serializzabilita JSON. */
  by_enemy: Record<string, EnemyEntry>;
}

/**
 * Risolve il prefix slug del publisher di una cella (= primo segmento URL
 * della route guida `/[lang]/champion/<prefix>/<role>/guide`). Usa
 * l'eventuale `gp` (guide_prefix) sulla `ChampionMeta`; in assenza, ricade
 * sullo slug canonical stesso (chiave del Record `champions`).
 *
 * @example
 *   resolveGuideChampionSlug({c: 'cho-gath', role: 'top'}, idx.champions)
 *   // champions['cho-gath'].gp === 'chogath' -> "chogath"
 *   resolveGuideChampionSlug({c: 'aatrox', role: 'top'}, idx.champions)
 *   // champions['aatrox'].gp undefined       -> "aatrox"
 */
export function resolveGuideChampionSlug(
  cell: Pick<MatchupCell, 'c'>,
  champions: Record<string, ChampionMeta>,
): string {
  return champions[cell.c]?.gp ?? cell.c;
}

/**
 * Ricostruisce il guide slug composito legacy del publisher di una cella
 * (`<champion>-<role>`) usando l'eventuale `gp` (guide_prefix) sulla
 * `ChampionMeta`. Helper retain per consumer che hanno bisogno di un
 * identifier piatto della guida (es. logging, deduplica, chiavi cache).
 * NON va piu usato per costruire URL: la route attiva post-CR-056 e'
 * `/[lang]/champion/<champion>/<role>/guide` (slash, non hyphen). Per gli
 * URL usare `resolveSourceAnchor` direttamente.
 *
 * @example
 *   resolveGuideSlug({c: 'cho-gath', role: 'top'}, idx.champions)
 *   // champions['cho-gath'].gp === 'chogath' -> "chogath-top"
 *   resolveGuideSlug({c: 'aatrox', role: 'top'}, idx.champions)
 *   // champions['aatrox'].gp undefined       -> "aatrox-top"
 */
export function resolveGuideSlug(
  cell: Pick<MatchupCell, 'c' | 'role'>,
  champions: Record<string, ChampionMeta>,
): string {
  return `${resolveGuideChampionSlug(cell, champions)}-${cell.role}`;
}

/**
 * Costruisce il `source_anchor` di una cella (URL ancora alla guida sorgente).
 * Helper esposto per il client (Phase 3 search + Phase 4 detail).
 *
 * Post-CR-056 la route guida e' role-explicit: il path attivo e'
 * `/[lang]/champion/<champion>/<role>/guide` (segment separati da slash).
 * La forma legacy `<champion>-<role>/guide` non emette piu redirect 301 e
 * cade su NotFoundFallback (soft-404). Vedi OI-P6-1 in
 * dev-repository/wp-counter-picker/tasks/progress.md.
 *
 * @example
 *   const anchor = resolveSourceAnchor('en', 'aatrox', 'top', 'pick_into');
 *   // -> "/en/champion/aatrox/top/guide#matchup-draft-pick-into"
 */
export function resolveSourceAnchor(
  lang: Lang,
  championSlug: string,
  role: Role,
  via: MatchupVia,
): string {
  const fragment = via === 'pick_into' ? 'pick-into' : 'counterpicks';
  return `/${lang}/champion/${championSlug}/${role}/guide#matchup-draft-${fragment}`;
}

/**
 * Risolve il rationale text di una cella tramite l'indice della tabella.
 *
 * @example
 *   const text = resolveRationale(cell, idx.rationales);
 */
export function resolveRationale(
  cell: Pick<MatchupCell, 'r'>,
  rationales: string[],
): string {
  return rationales[cell.r] ?? '';
}
