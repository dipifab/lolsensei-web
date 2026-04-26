// Pure helpers per persistenza preferenza expanded_categories in localStorage.
//
// Estratto dal componente ConfigCategoryGroup per testabilita e per
// permettere uso anche da altri consumer (es. route /admin/config che vuole
// inizializzare il toggle in base alla preferenza salvata).
//
// Schema: lolsensei.admin.config.expanded_categories = JSON array di
// nomi categoria attualmente espanse. Default [] (tutte collapsed).
// Vedi dev-repository/wp-config-migration/design/ux-flows.md §10.

import type { ConfigCategory } from '../lib/types';

export const STORAGE_KEY = 'lolsensei.admin.config.expanded_categories';

const VALID_CATEGORIES: readonly ConfigCategory[] = [
  'tunable',
  'flag',
  'url',
  'public_id',
  'tuning',
];

function isValidCategory(v: unknown): v is ConfigCategory {
  return typeof v === 'string' && (VALID_CATEGORIES as readonly string[]).includes(v);
}

/**
 * Legge la preferenza dal localStorage. Robusto a:
 * - localStorage non disponibile (SSR / Cloudflare Workers / privacy mode)
 * - JSON malformato in storage (storage corrotto)
 * - valori non validi (filtrati)
 */
export function readExpandedCategories(
  storage: Storage | null | undefined = typeof localStorage !== 'undefined'
    ? localStorage
    : null,
): ConfigCategory[] {
  if (!storage) return [];
  let raw: string | null;
  try {
    raw = storage.getItem(STORAGE_KEY);
  } catch {
    return [];
  }
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isValidCategory);
  } catch {
    return [];
  }
}

export function writeExpandedCategories(
  categories: ConfigCategory[],
  storage: Storage | null | undefined = typeof localStorage !== 'undefined'
    ? localStorage
    : null,
): void {
  if (!storage) return;
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(categories));
  } catch {
    // ambienti privacy-restricted: ignora silenziosamente
  }
}

export function toggleCategory(
  current: ConfigCategory[],
  category: ConfigCategory,
): ConfigCategory[] {
  if (current.includes(category)) {
    return current.filter((c) => c !== category);
  }
  return [...current, category];
}
