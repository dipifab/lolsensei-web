// WP-COUNTER-PICKER (CR-063) — Zod runtime validation per CounterIndex (schema v2).
//
// Lo schema rispecchia 1:1 i tipi TS di `./types.ts` ed e' usato:
//   1. nel builder GC34 (validazione output prima di scrivere il JSON);
//   2. opzionalmente nel client loader (gated by import.meta.env.DEV) per
//      catturare drift schema durante lo sviluppo.
//
// Riferimento: dev-repository/wp-counter-picker/design/data-model.md §3 + §6.

import { z } from 'zod';
import type {
  ChampionMeta,
  CounterIndex,
  EnemyEntry,
  MatchupCell,
} from './types';

const RoleSchema = z.enum(['top', 'jungle', 'mid', 'bot', 'support']);
// WP35.1 — esteso da EN+IT a tutte le 8 lingue del sito. Allineato a
// SUPPORTED_LOCALES (`src/lib/i18n/locales.ts`).
const LangSchema = z.enum([
  'en',
  'it',
  'es',
  'fr',
  'de',
  'pt-br',
  'ko',
  'zh-hans',
]);

// ISO date YYYY-MM-DD (no timezone). Allineato a IsoDateSchema di
// champion-schema.ts (no import diretto per non legare counter a wp35).
const IsoDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, 'generated_at must be ISO date YYYY-MM-DD');

// Slug kebab-case. Coerente con ChampionSlugSchema esistente.
const SlugSchema = z
  .string()
  .regex(/^[a-z0-9-]+$/, 'slug must be lowercase kebab-case');

export const MatchupCellSchema: z.ZodType<MatchupCell> = z.object({
  c: SlugSchema,
  role: RoleSchema,
  r: z.number().int().nonnegative(),
  n: z.number().int().nonnegative(),
});

export const EnemyEntrySchema: z.ZodType<EnemyEntry> = z.object({
  is_strong_against: z.array(MatchupCellSchema),
  is_weak_against: z.array(MatchupCellSchema),
});

export const ChampionMetaSchema: z.ZodType<ChampionMeta> = z.object({
  display_name: z.string().min(1),
  dd_id: z.string().nullable(),
  key: z.string().nullable(),
  cited_in_roles: z.array(RoleSchema),
  has_guide: z.boolean(),
  gp: z.string().regex(/^[a-z0-9-]+$/).optional(),
});

export const CounterIndexSchema: z.ZodType<CounterIndex> = z.object({
  schema_version: z.literal(2),
  lang: LangSchema,
  generated_at: IsoDateSchema,
  rationales: z.array(z.string().min(1).max(140)),
  champions: z.record(SlugSchema, ChampionMetaSchema),
  by_enemy: z.record(SlugSchema, EnemyEntrySchema),
});
