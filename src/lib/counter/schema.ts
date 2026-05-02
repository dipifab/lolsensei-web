// WP-COUNTER-PICKER (CR-063) — Zod runtime validation per CounterIndex.
//
// Lo schema rispecchia 1:1 i tipi TS di `./types.ts` ed e' usato:
//   1. nel builder GC34 (validazione output prima di scrivere il JSON);
//   2. opzionalmente nel client loader (gated by import.meta.env.DEV) per
//      catturare drift schema durante lo sviluppo.
//
// Riferimento: dev-repository/wp-counter-picker/design/data-model.md §3 + §6.

import { z } from 'zod';
import type {
  Champion,
  CounterIndex,
  EnemyEntry,
  MatchupCell,
} from './types';

const RoleSchema = z.enum(['top', 'jungle', 'mid', 'bot', 'support']);
const LangSchema = z.enum(['en', 'it']);
const ViaSchema = z.enum(['pick_into', 'counterpick']);

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
  champion_slug: SlugSchema,
  role: RoleSchema,
  display_name: z.string().min(1),
  champion_dd_id: z.string().nullable(),
  champion_key: z.string().nullable(),
  rationale_excerpt: z.string().min(1).max(140),
  source_anchor: z.string().min(1),
  via: ViaSchema,
  recurrence_count: z.number().int().nonnegative(),
});

export const EnemyEntrySchema: z.ZodType<EnemyEntry> = z.object({
  enemy_slug: SlugSchema,
  is_strong_against: z.array(MatchupCellSchema),
  is_weak_against: z.array(MatchupCellSchema),
});

export const ChampionSchema: z.ZodType<Champion> = z.object({
  slug: SlugSchema,
  display_name: z.string().min(1),
  champion_dd_id: z.string().nullable(),
  champion_key: z.string().nullable(),
  cited_in_roles: z.array(RoleSchema),
  has_guide: z.boolean(),
});

export const CounterIndexSchema: z.ZodType<CounterIndex> = z.object({
  schema_version: z.literal(1),
  lang: LangSchema,
  generated_at: IsoDateSchema,
  champions: z.array(ChampionSchema),
  by_enemy: z.record(SlugSchema, EnemyEntrySchema),
});
