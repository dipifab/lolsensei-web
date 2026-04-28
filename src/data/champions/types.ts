// WP35 — ChampionGuide TS interface.
//
// Contratto condiviso tra `scripts/compile-champion-guides.mjs` (producer
// build-time) e i route loader SolidStart (consumer SSR).
//
// Riferimento: dev-repository/wp-35/design/data-model.md §4.

import type {
  ChampionLanguage,
  ChampionRole,
  MatchupDraft,
  QuickLearn,
} from '../../lib/content/champion-schema';

export interface RelatedChampion {
  /** `${champion}-${role}` slug. */
  slug: string;
  /** Champion slug kebab-case. */
  champion: string;
  /** Role (must match the parent guide's role per DEC-OP-017). */
  role: ChampionRole;
}

export interface ChampionGuide {
  // ---- Frontmatter (validated, copied verbatim) ----------------------------
  /** `<champion>-<role>` */
  slug: string;
  title: string;
  language: ChampionLanguage;
  /** `major.minor` (e.g. `14.10`). */
  patch: string;
  champion: string;
  role: ChampionRole;
  /** ISO date YYYY-MM-DD. */
  last_updated: string;
  description: string;
  /** CR-053 Quick Learn block. Optional — guide remains valid without it. */
  quick_learn?: QuickLearn;
  /** CR-057 Matchup Draft block. Optional. When present the body is
   *  splitted at compile time on `## Key matchups` (EN) / `## Matchup chiave`
   *  (IT) and `content_html_pre` / `content_html_post` are populated. */
  matchup_draft?: MatchupDraft;

  // ---- Build-time derived --------------------------------------------------
  /** Sanitized HTML rendered from the Markdown body (single block, fallback). */
  content_html: string;
  /** When `matchup_draft` is set: HTML up to the H2 that opens Key matchups. */
  content_html_pre?: string;
  /** When `matchup_draft` is set: HTML from Key matchups onward (inclusive). */
  content_html_post?: string;
  /** Word count of the body (post-HTML strip). Editorial QA helper. */
  word_count: number;
  /** All patches present in the dataset for `(champion, role, language)`. Sorted ascending. */
  available_patches: string[];
  /** True if this entry is the latest patch for `(champion, role, language)`. */
  is_latest: boolean;
  /** 3-5 same-role siblings derived from `_meta/top-50-champions.json`. */
  related_champions: RelatedChampion[];
}
