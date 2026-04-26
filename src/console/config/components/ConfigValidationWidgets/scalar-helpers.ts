// Pure helpers scalar widgets (Int/Float/Str) — testabili senza DOM.

import type { IntRule, FloatRule, StrRule } from '../../lib/types';

const DEFAULT_INT_MIN = 0;
const DEFAULT_INT_MAX = 1_000_000;

/**
 * Restituisce il valore intero clampato fra min/max della rule, arrotondato
 * a intero. NaN ritorna null (caller mantiene valore precedente).
 */
export function clampInt(raw: number, rule: IntRule): number | null {
  if (Number.isNaN(raw)) return null;
  const min = rule.min ?? DEFAULT_INT_MIN;
  const max = rule.max ?? DEFAULT_INT_MAX;
  return Math.min(max, Math.max(min, Math.round(raw)));
}

/**
 * Clamp float al range della rule. Se min/max sono null/undefined il clamp
 * non viene applicato su quel lato. NaN ritorna null.
 */
export function clampFloat(raw: number, rule: FloatRule): number | null {
  if (Number.isNaN(raw)) return null;
  let v = raw;
  if (rule.min !== null && rule.min !== undefined) v = Math.max(rule.min, v);
  if (rule.max !== null && rule.max !== undefined) v = Math.min(rule.max, v);
  return v;
}

export type RegexStatus = 'no-regex' | 'invalid-pattern' | 'match' | 'no-match';

export interface RegexEvaluation {
  status: RegexStatus;
  pattern?: string;
}

/**
 * Compila la regex (se presente) e valuta il match contro `value`.
 * Pattern malformato → status='invalid-pattern' (no throw).
 *
 * Mirror semantica di Python `re.fullmatch` (REV-MAJ-02 fix): il backend
 * (`backend/app/routes/admin_config.py::_validate_value_against_rule`)
 * usa `re.fullmatch(pattern, value)` che richiede il match dell'intera
 * stringa. `RegExp.test()` invece accetta partial match. Per allineare
 * UX e server, wrappiamo il pattern utente in `^(?:${pattern})$` PRIMA
 * di compilarlo. Se il pattern e' gia' anchored (`^...$`), evitiamo
 * la doppia ancora (no-op semantico).
 */
export function evaluateStrRegex(value: string, rule: StrRule): RegexEvaluation {
  if (!rule.regex) return { status: 'no-regex' };
  const userPattern = rule.regex;
  // Skip re-anchoring se il pattern e' GIA' completamente anchored
  // (`^...$`). Pattern parzialmente anchored (es. solo `^...`) viene
  // comunque ri-anchored per allineare al fullmatch.
  const alreadyFullyAnchored =
    userPattern.startsWith('^') && userPattern.endsWith('$');
  const anchoredPattern = alreadyFullyAnchored
    ? userPattern
    : `^(?:${userPattern})$`;
  let re: RegExp;
  try {
    re = new RegExp(anchoredPattern);
  } catch {
    return { status: 'invalid-pattern', pattern: rule.regex };
  }
  return {
    status: re.test(value) ? 'match' : 'no-match',
    pattern: rule.regex,
  };
}

/**
 * Tronca al `max_length` (default 500) della rule.
 */
export function truncateToMaxLength(raw: string, rule: StrRule): string {
  const max = rule.max_length ?? 500;
  return raw.length > max ? raw.slice(0, max) : raw;
}
