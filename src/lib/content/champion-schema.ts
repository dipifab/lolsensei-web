// WP35 — Champion Guide Frontmatter Zod schema (DEC-OP-021).
//
// Single source of truth per la validazione del frontmatter YAML usato:
//   1. dal compile script (`scripts/compile-champion-guides.mjs`) build-time;
//   2. dal lint hybrid (`scripts/content-lint.mjs`) gate CI pre-build.
//
// Riferimento: dev-repository/wp-35/design/data-model.md §3.
// REQ coperti: REQ-F-035-002, REQ-F-035-019, REQ-NF-035-008.

import { z } from 'zod';

export const ChampionRoleSchema = z.enum([
  'top',
  'jungle',
  'mid',
  'bot',
  'support',
]);

export const ChampionLanguageSchema = z.enum(['en', 'it']);

// Patch slug "major.minor" — coerente con normalizzazione Riot (es. 14.10).
export const PatchSlugSchema = z.string().regex(/^\d{1,2}\.\d{1,2}$/, {
  message: 'patch must be major.minor (e.g. 14.10)',
});

// Champion slug kebab-case (lowercase + dash). Allinea naming Data Dragon
// (es. "kog-maw" per Kog'Maw, normalizzato senza apostrofi).
export const ChampionSlugSchema = z.string().regex(/^[a-z0-9-]+$/, {
  message: 'champion slug must be lowercase kebab-case',
});

// Frontmatter slug = "<champion>-<role>" (es. "aatrox-top").
export const FrontmatterSlugSchema = z
  .string()
  .regex(/^[a-z0-9-]+-(top|jungle|mid|bot|support)$/, {
    message: 'frontmatter slug must be <champion>-<role>',
  });

// ISO date YYYY-MM-DD (no timezone, no time). Founder-controlled.
export const IsoDateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
  message: 'last_updated must be ISO date YYYY-MM-DD',
});

// Quick Learn block (CR-053 / WP35.1). Tutti i campi sono opzionali a livello
// di frontmatter: se `quick_learn` e' assente la guida resta valida e il
// componente fallback alla sola prosa (backward-compat con le 6 guide v1.0).
//
// Le abilita' (passive + Q W E R) usano lo `dd_spell_id` Data Dragon per
// caricare le icone runtime: champion DD ID e' PascalCase (es. "Lux"), spell
// DD ID combina champion + ability name (es. "LuxLightBinding"), passive
// e' "<Champion>_Passive".
//
// `core_items[].dd_id` e' lo numeric ID Data Dragon (string per compat YAML).
// `skill_order` deve avere esattamente 18 entry (livelli 1..18).

export const AbilityKeySchema = z.enum(['P', 'Q', 'W', 'E', 'R']);

export const QuickLearnAbilitySchema = z.object({
  key: AbilityKeySchema,
  name: z.string().min(2).max(40),
  description: z.string().min(10).max(240),
  /** Data Dragon spell ID (es. "LuxLightBinding"). Per passive: "Lux_Passive". */
  dd_spell_id: z.string().min(2).max(60).optional(),
});

export const SkillOrderEntrySchema = z.object({
  level: z.number().int().min(1).max(18),
  key: z.enum(['Q', 'W', 'E', 'R']),
});

export const CoreItemSchema = z.object({
  /** Data Dragon numeric ID as string (es. "6655" per Luden's Companion). */
  dd_id: z.string().regex(/^\d{3,5}$/),
  name: z.string().min(2).max(40),
});

// Situational item: come CoreItem ma con `against` (trigger di acquisto).
// Es. against = "vs divers/assassins (Zed, Diana, Talon, Akali)".
export const SituationalItemSchema = z.object({
  dd_id: z.string().regex(/^\d{3,5}$/),
  name: z.string().min(2).max(40),
  against: z.string().min(5).max(140),
});

export const ChampionClassSchema = z.string().min(3).max(40);
export const DamageTypeSchema = z.enum(['magic', 'physical', 'mixed', 'true']);
export const DifficultySchema = z.number().int().min(1).max(5);

export const QuickLearnSchema = z.object({
  /** Data Dragon champion ID PascalCase (es. "Lux", "LeeSin"). */
  champion_dd_id: z.string().min(2).max(40),
  difficulty: DifficultySchema,
  damage_type: DamageTypeSchema,
  champion_class: ChampionClassSchema,
  abilities: z.array(QuickLearnAbilitySchema).length(5),
  skill_order: z.array(SkillOrderEntrySchema).length(18),
  core_items: z.array(CoreItemSchema).min(3).max(6),
  /** Situational item swaps (opzionale). Quando presente, min 2 max 6. */
  situational_items: z.array(SituationalItemSchema).min(2).max(6).optional(),
  base_combo: z.array(z.string().min(1).max(8)).min(2).max(8),
  win_condition: z.string().min(20).max(220),
  weakness: z.string().min(20).max(220),
});

// Matchup Draft block (CR-057). Fonte editoriale e strutturata per:
//   1. Rendering della sezione "Pick into / Counterpicks" tra Recommended
//      Build e Key matchups, derivata dal frontmatter (no drift body/data).
//   2. Indice inverso `counter-by-target.json` (build-time): per ogni champion
//      target, lista delle guide che lo elencano in `pick_into[].examples` o
//      `counterpicks[].examples`. Alimenta la futura feature champ-select.
//
// Schema voce: `examples` (array di slug champion concreti, alimenta indice
// inverso), `archetype` (label umana per il rendering), `reason` (una frase
// di ragionamento meccanico — niente winrate, niente statistiche).
//
// Backward-compat: il blocco e' opzionale a livello di frontmatter. Le guide
// pre-CR-057 senza `matchup_draft` restano valide; il compile script salta lo
// split del body e omette la guida dall'indice inverso.

export const MatchupExampleSchema = z.object({
  /** Slug champion concreti (1-5). Usati per costruire l'indice inverso. */
  examples: z.array(ChampionSlugSchema).min(1).max(5),
  /** Label leggibile dell'archetipo (es. "Mobile assassins with multi-gap-close"). */
  archetype: z.string().min(5).max(80),
  /** Ragionamento meccanico in una frase (no winrate, no statistiche). */
  reason: z.string().min(20).max(280),
});

export const MatchupDraftSchema = z.object({
  /** Champion contro cui questo pick e' forte (livello draft). */
  pick_into: z.array(MatchupExampleSchema).min(2).max(5),
  /** Champion che vengono pickati contro perche' lo neutralizzano. */
  counterpicks: z.array(MatchupExampleSchema).min(2).max(5),
});

export const ChampionGuideFrontmatterSchema = z.object({
  // SEO title visualizzato come <h1> e dentro <title> tag tramite i18n template.
  title: z.string().min(10).max(120),
  // Identificatore stable della guida; deve coincidere con `<champion>-<role>`.
  slug: FrontmatterSlugSchema,
  // Whitelist EN/IT MVP (DEC-7). 404 hard per altre lingue.
  language: ChampionLanguageSchema,
  patch: PatchSlugSchema,
  champion: ChampionSlugSchema,
  role: ChampionRoleSchema,
  last_updated: IsoDateSchema,
  // Hard fail bounds 100-200 (DEC-OP-006). Soft warn 150-170 nel lint.
  description: z.string().min(100).max(200),
  // Quick Learn block opzionale (CR-053). Se presente, tutti i sotto-campi
  // sono required. Se assente, la guida e' valida e renderizza solo la prosa.
  quick_learn: QuickLearnSchema.optional(),
  // Matchup Draft block opzionale (CR-057). Se presente, hard-validato.
  matchup_draft: MatchupDraftSchema.optional(),
});

export type ChampionGuideFrontmatter = z.infer<
  typeof ChampionGuideFrontmatterSchema
>;
export type ChampionRole = z.infer<typeof ChampionRoleSchema>;
export type ChampionLanguage = z.infer<typeof ChampionLanguageSchema>;
export type AbilityKey = z.infer<typeof AbilityKeySchema>;
export type QuickLearnAbility = z.infer<typeof QuickLearnAbilitySchema>;
export type SkillOrderEntry = z.infer<typeof SkillOrderEntrySchema>;
export type CoreItem = z.infer<typeof CoreItemSchema>;
export type SituationalItem = z.infer<typeof SituationalItemSchema>;
export type QuickLearn = z.infer<typeof QuickLearnSchema>;
export type MatchupExample = z.infer<typeof MatchupExampleSchema>;
export type MatchupDraft = z.infer<typeof MatchupDraftSchema>;
