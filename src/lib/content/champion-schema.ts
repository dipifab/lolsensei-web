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
});

export type ChampionGuideFrontmatter = z.infer<
  typeof ChampionGuideFrontmatterSchema
>;
export type ChampionRole = z.infer<typeof ChampionRoleSchema>;
export type ChampionLanguage = z.infer<typeof ChampionLanguageSchema>;
