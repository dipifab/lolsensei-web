// WPCP-021 (CR-063) — Counter detail URL slug parser.
//
// L'URL `/[lang]/counter/<param>` puo essere:
//   - `<champion-slug>`              -> ruolo primario (role: null)
//   - `<champion-slug>-<role>`       -> role in {top, jungle, mid, bot, support}
//
// Il parser controlla se l'ultimo segmento (dopo l'ultimo trattino) e' uno dei
// 5 ruoli noti; in tal caso lo estrae, altrimenti l'intero `param` e' lo slug.
// Questo gestisce correttamente slug con trattini interni (lee-sin, cho-gath,
// k-sante) e slug nuovi che terminano in token role-like (oggi 0 occorrenze).
//
// Riferimento: dev-repository/wp-counter-picker/design/components.md §3.

import type { Role } from './types';

/** Ruoli noti, immutabili. Usato come whitelist per il suffix match. */
export const ROLES: readonly Role[] = [
  'top',
  'jungle',
  'mid',
  'bot',
  'support',
] as const;

export interface ParsedSlugParam {
  /** Slug champion canonical Riot (kebab-case). */
  championSlug: string;
  /** Ruolo estratto dal suffix, o null se assente. */
  role: Role | null;
}

/**
 * Estrae `(championSlug, role)` da un parametro route counter detail.
 *
 * @example
 *   parseSlugParam('zed')              // {championSlug: 'zed', role: null}
 *   parseSlugParam('sett-top')         // {championSlug: 'sett', role: 'top'}
 *   parseSlugParam('lee-sin')          // {championSlug: 'lee-sin', role: null}
 *   parseSlugParam('lee-sin-jungle')   // {championSlug: 'lee-sin', role: 'jungle'}
 */
export function parseSlugParam(param: string): ParsedSlugParam {
  for (const r of ROLES) {
    const suffix = `-${r}`;
    if (param.endsWith(suffix) && param.length > suffix.length) {
      return {
        championSlug: param.slice(0, -suffix.length),
        role: r,
      };
    }
  }
  return { championSlug: param, role: null };
}
