// Hybrid diff formatter — audit log entries (OP-022)
//
// Strategia:
// - Scalar (int/float/bool/str): mode "inline" → "OLD: <a> → NEW: <b>"
// - Container (list/dict): mode "side-by-side" → due colonne JSON pretty
//   ciascuna su righe distinte. Il chiamante render le due colonne come
//   testi pre-formattati (no HTML interno per evitare XSS).
//
// Nessuna libreria diff esterna: in SolidJS l'ecosistema diff e' carente,
// e per il caso d'uso (audit config) il diff line-by-line custom basta.

import type { ConfigValue, ConfigValueType } from './types';

export type DiffMode = 'inline' | 'side-by-side';

export interface DiffResult {
  mode: DiffMode;
  oldText: string;
  newText: string;
  /**
   * Rappresentazione "inline" pre-composta per i tipi scalar
   * (es. `OLD: 50 → NEW: 100`). Per i container e' una stringa vuota.
   * La UI usa direttamente oldText/newText su due colonne in modalita
   * side-by-side, oppure `inline` per un single-line render scalar.
   */
  inline: string;
}

const SCALAR_TYPES: readonly ConfigValueType[] = ['int', 'float', 'bool', 'str', 'enum'];

function isScalarType(t: ConfigValueType): boolean {
  return SCALAR_TYPES.includes(t);
}

/**
 * Produce una rappresentazione testuale stabile e pretty di un valore
 * config per la visualizzazione audit. Scalar → toString; list/dict →
 * JSON.stringify con indentazione 2.
 *
 * `null` e' un caso valido (prima entry seed: old_value === null).
 */
function stringify(value: ConfigValue | null, valueType: ConfigValueType): string {
  if (value === null || value === undefined) return '∅'; // null marker visibile

  if (valueType === 'bool') {
    return value ? 'true' : 'false';
  }
  if (valueType === 'str' || valueType === 'enum') {
    // Quote per chiarire i confini della stringa (utile per spazi terminali).
    return JSON.stringify(value);
  }
  if (valueType === 'int' || valueType === 'float') {
    return String(value);
  }
  // list / dict: pretty JSON
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

/**
 * Calcola la modalita di diff e produce le rappresentazioni testuali.
 *
 * @param oldValue valore prima della modifica (null per prima entry seed)
 * @param newValue valore dopo la modifica
 * @param valueType `value_type` della chiave (Pydantic Literal)
 */
export function formatDiff(
  oldValue: ConfigValue | null,
  newValue: ConfigValue | null,
  valueType: ConfigValueType,
): DiffResult {
  const oldText = stringify(oldValue, valueType);
  const newText = stringify(newValue, valueType);

  if (isScalarType(valueType)) {
    return {
      mode: 'inline',
      oldText,
      newText,
      inline: `OLD: ${oldText} → NEW: ${newText}`,
    };
  }
  return {
    mode: 'side-by-side',
    oldText,
    newText,
    inline: '',
  };
}
