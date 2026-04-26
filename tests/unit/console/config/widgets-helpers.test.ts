// T-CONFIG-027 — ConfigValidationWidgets helper unit tests.
//
// Test focalizzati sulle pure functions di parsing/coercion/clamping —
// la UI rendering completa e' coperta da E2E (Phase 6 / T-CONFIG-032).
// Questo file copre min/max bounds, regex match, parsing JSON,
// coercion item_type, range/length checks per i 7 widget.

import { describe, expect, it } from 'vitest';
import {
  clampInt,
  clampFloat,
  evaluateStrRegex,
  truncateToMaxLength,
} from '../../../../src/console/config/components/ConfigValidationWidgets/scalar-helpers';
import {
  tryParseJsonArray,
  coerceItem,
  validateListAgainstRule,
} from '../../../../src/console/config/components/ConfigValidationWidgets/list-helpers';
import { tryParseJsonObject } from '../../../../src/console/config/components/ConfigValidationWidgets/dict-helpers';

describe('clampInt (IntSlider/IntNumber)', () => {
  it('clamps to min when below', () => {
    expect(clampInt(-5, { value_type: 'int', min: 0, max: 100 })).toBe(0);
  });

  it('clamps to max when above', () => {
    expect(clampInt(500, { value_type: 'int', min: 0, max: 100 })).toBe(100);
  });

  it('preserves valid value', () => {
    expect(clampInt(50, { value_type: 'int', min: 0, max: 100 })).toBe(50);
  });

  it('rounds floats to integer', () => {
    expect(clampInt(50.7, { value_type: 'int', min: 0, max: 100 })).toBe(51);
  });

  it('returns null on NaN', () => {
    expect(clampInt(NaN, { value_type: 'int' })).toBeNull();
  });

  it('uses fallback bounds when rule omits min/max', () => {
    expect(clampInt(-1, { value_type: 'int' })).toBe(0); // fallback min=0
  });
});

describe('clampFloat (FloatNumber)', () => {
  it('clamps to min', () => {
    expect(clampFloat(-1.5, { value_type: 'float', min: 0, max: 5 })).toBe(0);
  });

  it('clamps to max', () => {
    expect(clampFloat(10.5, { value_type: 'float', min: 0, max: 5 })).toBe(5);
  });

  it('preserves valid float', () => {
    expect(clampFloat(2.5, { value_type: 'float', min: 0, max: 5 })).toBe(2.5);
  });

  it('does not clamp when min/max are undefined', () => {
    expect(clampFloat(-100, { value_type: 'float' })).toBe(-100);
    expect(clampFloat(1e9, { value_type: 'float' })).toBe(1e9);
  });

  it('returns null on NaN', () => {
    expect(clampFloat(NaN, { value_type: 'float' })).toBeNull();
  });
});

describe('evaluateStrRegex (StrText)', () => {
  it('returns no-regex when rule has no regex', () => {
    const r = evaluateStrRegex('anything', { value_type: 'str' });
    expect(r.status).toBe('no-regex');
  });

  it('returns match for valid input', () => {
    const r = evaluateStrRegex('abc123', { value_type: 'str', regex: '^[a-z]+\\d+$' });
    expect(r.status).toBe('match');
    expect(r.pattern).toBe('^[a-z]+\\d+$');
  });

  it('returns no-match for invalid input', () => {
    const r = evaluateStrRegex('123abc', { value_type: 'str', regex: '^[a-z]+\\d+$' });
    expect(r.status).toBe('no-match');
  });

  it('returns invalid-pattern on malformed regex without throwing', () => {
    const r = evaluateStrRegex('test', { value_type: 'str', regex: '[unbalanced' });
    expect(r.status).toBe('invalid-pattern');
    expect(r.pattern).toBe('[unbalanced');
  });

  it('test_partial_match_rejected_by_str_regex (REV-MAJ-02 fix)', () => {
    // pattern `[a-z]+` su `abc123`: con `RegExp.test()` partial-match
    // sarebbe true (trova `abc` anywhere). Allineato a `re.fullmatch`
    // backend, deve essere rejected: la parte `123` non matcha `[a-z]+`.
    const r = evaluateStrRegex('abc123', { value_type: 'str', regex: '[a-z]+' });
    expect(r.status).toBe('no-match');
    // Il pattern originale e' preservato in response (non mostriamo
    // l'anchor wrap all'utente).
    expect(r.pattern).toBe('[a-z]+');
  });

  it('accepts pattern already fully anchored (no double-wrap)', () => {
    // `^[a-z]+$` e' gia' anchored: il fix non lo ri-anchora ma il
    // risultato funzionale e' identico (fullmatch).
    const r = evaluateStrRegex('abc', { value_type: 'str', regex: '^[a-z]+$' });
    expect(r.status).toBe('match');
    const r2 = evaluateStrRegex('abc1', { value_type: 'str', regex: '^[a-z]+$' });
    expect(r2.status).toBe('no-match');
  });

  it('partial anchor `^...` viene comunque ri-anchorato (parity Python)', () => {
    // `^https://.+` su `https://lolsensei.com extra junk` con `test()`
    // ritorna true (anchor inizio + qualsiasi suffix). Con fullmatch
    // dovrebbe matchare (la regex copre tutta la stringa via `.+`).
    // Caso piu' istruttivo: `^foo` su `foobar` con test() matcha,
    // con fullmatch NO (manca anchor finale).
    const r = evaluateStrRegex('foobar', { value_type: 'str', regex: '^foo' });
    expect(r.status).toBe('no-match');
  });
});

describe('truncateToMaxLength (StrText)', () => {
  it('preserves strings within max_length', () => {
    expect(truncateToMaxLength('hello', { value_type: 'str', max_length: 10 })).toBe('hello');
  });

  it('truncates when exceeding max_length', () => {
    expect(truncateToMaxLength('helloworld', { value_type: 'str', max_length: 5 })).toBe('hello');
  });

  it('uses default max_length 500 when not set', () => {
    const long = 'x'.repeat(600);
    const out = truncateToMaxLength(long, { value_type: 'str' });
    expect(out.length).toBe(500);
  });
});

describe('tryParseJsonArray (ListJsonOrTags)', () => {
  it('parses valid JSON array', () => {
    const r = tryParseJsonArray('[1, 2, 3]');
    expect(r.ok).toBe(true);
    expect(r.parsed).toEqual([1, 2, 3]);
  });

  it('rejects empty input', () => {
    const r = tryParseJsonArray('   ');
    expect(r.ok).toBe(false);
    expect(r.error).toBe('Empty input');
  });

  it('rejects malformed JSON', () => {
    const r = tryParseJsonArray('[1, 2,');
    expect(r.ok).toBe(false);
    expect(r.error).toBeDefined();
  });

  it('rejects non-array JSON (object)', () => {
    const r = tryParseJsonArray('{"a": 1}');
    expect(r.ok).toBe(false);
    expect(r.error).toBe('Expected JSON array');
  });

  it('rejects scalar JSON', () => {
    const r = tryParseJsonArray('42');
    expect(r.ok).toBe(false);
  });
});

describe('coerceItem (ListJsonOrTags)', () => {
  it('coerces string item type', () => {
    expect(coerceItem('hello', 'str')).toBe('hello');
    expect(coerceItem(42, 'str')).toBeNull();
  });

  it('coerces int item type strict (no boolean)', () => {
    expect(coerceItem(42, 'int')).toBe(42);
    expect(coerceItem('42', 'int')).toBe(42);
    expect(coerceItem(true, 'int')).toBeNull();
    expect(coerceItem(3.14, 'int')).toBeNull(); // not integer
    expect(coerceItem('abc', 'int')).toBeNull();
  });

  it('coerces float item type', () => {
    expect(coerceItem(3.14, 'float')).toBe(3.14);
    expect(coerceItem('2.5', 'float')).toBe(2.5);
    expect(coerceItem(42, 'float')).toBe(42);
    expect(coerceItem(true, 'float')).toBeNull();
    expect(coerceItem('not-a-number', 'float')).toBeNull();
  });
});

describe('validateListAgainstRule (ListJsonOrTags)', () => {
  it('passes valid string list', () => {
    const r = validateListAgainstRule(['a', 'b'], {
      value_type: 'list',
      item_type: 'str',
      min_items: 1,
      max_items: 5,
    });
    expect(r.ok).toBe(true);
    expect(r.coerced).toEqual(['a', 'b']);
  });

  it('rejects below min_items', () => {
    const r = validateListAgainstRule([], {
      value_type: 'list',
      min_items: 1,
      max_items: 5,
    });
    expect(r.ok).toBe(false);
    expect(r.error).toContain('between 1 and 5');
  });

  it('rejects above max_items', () => {
    const r = validateListAgainstRule([1, 2, 3, 4], {
      value_type: 'list',
      item_type: 'int',
      min_items: 0,
      max_items: 3,
    });
    expect(r.ok).toBe(false);
  });

  it('rejects mixed types when item_type is strict', () => {
    const r = validateListAgainstRule(['a', 1], {
      value_type: 'list',
      item_type: 'str',
      min_items: 0,
      max_items: 10,
    });
    expect(r.ok).toBe(false);
    expect(r.error).toContain('Invalid item type');
  });

  it('uses default bounds when rule omits them', () => {
    const r = validateListAgainstRule([1, 2, 3], {
      value_type: 'list',
      item_type: 'int',
    });
    expect(r.ok).toBe(true);
  });
});

describe('tryParseJsonObject (DictJson)', () => {
  it('parses valid JSON object', () => {
    const r = tryParseJsonObject('{"a": 1, "b": "two"}');
    expect(r.ok).toBe(true);
    expect(r.parsed).toEqual({ a: 1, b: 'two' });
  });

  it('rejects empty input', () => {
    const r = tryParseJsonObject('  ');
    expect(r.ok).toBe(false);
    expect(r.error).toBe('Empty input');
  });

  it('rejects array (must be object)', () => {
    const r = tryParseJsonObject('[1, 2]');
    expect(r.ok).toBe(false);
    expect(r.error).toBe('Expected JSON object');
  });

  it('rejects null', () => {
    const r = tryParseJsonObject('null');
    expect(r.ok).toBe(false);
  });

  it('rejects scalar', () => {
    const r = tryParseJsonObject('42');
    expect(r.ok).toBe(false);
  });

  it('rejects malformed JSON', () => {
    const r = tryParseJsonObject('{a: 1}');
    expect(r.ok).toBe(false);
    expect(r.error).toBeDefined();
  });
});
