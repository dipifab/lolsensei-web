// WP-COUNTER-PICKER (CR-063) — Counter index data contract.
//
// Tipi TypeScript del reverse-index `public/counter-index/<lang>.json` prodotto
// dal builder GC34 e consumato dalle route /[lang]/counter/. Single source of
// truth per la shape dell'asset; lo schema Zod runtime in `./schema.ts`
// rispecchia 1:1 questi tipi (validazione gated by `import.meta.env.DEV`).
//
// Riferimento: dev-repository/wp-counter-picker/design/data-model.md §3.

/** Lingua dell'indice. ADR-034 i18n EN/IT parity. */
export type Lang = 'en' | 'it';

/** Ruoli supportati (allineato a ChampionRoleSchema di champion-schema.ts). */
export type Role = 'top' | 'jungle' | 'mid' | 'bot' | 'support';

/**
 * Filtro role lato UI: include "any" per "tutti i ruoli". Non e' un Role
 * perche "any" non e' un valore lecito nel data layer.
 */
export type RoleFilter = 'any' | Role;

/** Origine semantica della cella matchup: pick_into = subject e' forte contro
 *  enemy; counterpick = subject e' debole contro enemy. */
export type MatchupVia = 'pick_into' | 'counterpick';

/** Singola cella nel reverse index: 1 cella = 1 guida sorgente che cita
 *  l'enemy in `pick_into` o `counterpicks`. */
export interface MatchupCell {
  /** Slug champion del PUBLISHER (= guida sorgente). Es. "aatrox". */
  champion_slug: string;
  /** Ruolo del publisher (= role della guida sorgente). */
  role: Role;
  /** Display name localizzato del publisher. */
  display_name: string;
  /** Riot Data Dragon ID PascalCase per fallback DDragon. Null se non noto. */
  champion_dd_id: string | null;
  /** Riot numeric champion key per CDragon (URL primary). Null se non noto. */
  champion_key: string | null;
  /** Estratto rationale da matchup_draft.<via>[].reason (max 140 chars).
   *  Tagliato a fine frase con "..." se >140. */
  rationale_excerpt: string;
  /** URL ancora alla guida sorgente. Es. "/en/champion/aatrox-top/guide#pick-into". */
  source_anchor: string;
  /** Origine semantica: "pick_into" o "counterpick". */
  via: MatchupVia;
  /** Quante guide distinte (publisher diversi) citano lo stesso enemy.
   *  Pre-calcolato per evitare aggregazione client. */
  recurrence_count: number;
}

/** Voce reverse-index: tutto cio che si sa contro un singolo enemy slug. */
export interface EnemyEntry {
  /** Slug del champion enemy (chiave esterna in `by_enemy`). */
  enemy_slug: string;
  /** Lista di "publisher + role" che sono FORTI contro `enemy_slug`. */
  is_strong_against: MatchupCell[];
  /** Lista di "publisher + role" CONTRO CUI `enemy_slug` e' debole. */
  is_weak_against: MatchupCell[];
}

/** Champion noto al registry: usato per autocomplete + display. */
export interface Champion {
  /** Slug kebab-case Riot canonical. */
  slug: string;
  /** Nome localizzato. */
  display_name: string;
  /** Riot DD ID PascalCase. Null se non noto. */
  champion_dd_id: string | null;
  /** Riot numeric key. Null se non noto. */
  champion_key: string | null;
  /** Ruoli per cui esiste una guida che CITA questo champion in matchup_draft. */
  cited_in_roles: Role[];
  /** True se il champion e' SUBJECT di almeno una guida pubblicata. */
  has_guide: boolean;
}

/** Asset finale prodotto dal builder e consumato dalle route counter. */
export interface CounterIndex {
  /** Versione schema asset. Bump major se shape cambia in modo non-additivo. */
  schema_version: 1;
  /** Lingua dell'indice. */
  lang: Lang;
  /** ISO date YYYY-MM-DD del build. */
  generated_at: string;
  /** Lista alfabetica per slug di tutti i champion noti (subject U enemy). */
  champions: Champion[];
  /** Reverse index: chiave = slug enemy. Object literal (non Map) per
   *  serializzabilita JSON. */
  by_enemy: Record<string, EnemyEntry>;
}
