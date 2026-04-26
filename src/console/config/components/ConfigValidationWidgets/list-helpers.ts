// Pure helpers per ListJsonOrTags — testabili senza DOM.
//
// Estratti dal widget per consentire unit test mirati su parsing/coercion.

import type { ListRule } from '../../lib/types';

export interface ListParseResult {
  ok: boolean;
  error?: string;
  parsed?: unknown[];
}

export function tryParseJsonArray(raw: string): ListParseResult {
  if (!raw.trim()) return { ok: false, error: 'Empty input' };
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Invalid JSON' };
  }
  if (!Array.isArray(parsed)) {
    return { ok: false, error: 'Expected JSON array' };
  }
  return { ok: true, parsed };
}

export function coerceItem(value: unknown, itemType: 'str' | 'int' | 'float'): unknown | null {
  if (itemType === 'str') {
    return typeof value === 'string' ? value : null;
  }
  if (itemType === 'int') {
    if (typeof value === 'boolean') return null; // strict: bool != int
    if (typeof value === 'number' && Number.isInteger(value)) return value;
    if (typeof value === 'string') {
      const n = parseInt(value, 10);
      return Number.isNaN(n) ? null : n;
    }
    return null;
  }
  // float
  if (typeof value === 'boolean') return null;
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const n = parseFloat(value);
    return Number.isNaN(n) ? null : n;
  }
  return null;
}

export interface ValidateListResult {
  ok: boolean;
  error?: string;
  coerced?: unknown[];
}

export function validateListAgainstRule(
  arr: unknown[],
  rule: ListRule,
): ValidateListResult {
  const minItems = rule.min_items ?? 0;
  const maxItems = rule.max_items ?? 50;
  const itemType = rule.item_type ?? 'str';

  if (arr.length < minItems || arr.length > maxItems) {
    return {
      ok: false,
      error: `Item count must be between ${minItems} and ${maxItems}`,
    };
  }
  const coerced: unknown[] = [];
  for (const it of arr) {
    const c = coerceItem(it, itemType);
    if (c === null) {
      return { ok: false, error: `Invalid item type (expected ${itemType})` };
    }
    coerced.push(c);
  }
  return { ok: true, coerced };
}
