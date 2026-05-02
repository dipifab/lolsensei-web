// WPCP-012 — Test fallimentari per buildExcerpt + V6 enforcement.
//
// Algoritmo target (design/data-model.md §5):
//   - input <=140 char trimmed: passthrough
//   - input >140 con frase terminata (.!?) entro 140: tronca a fine frase
//   - input >140 senza frase entro 140: tronca a ultimo spazio (>80) + "…"
//   - input vuoto/whitespace-only: throw V6

import { describe, expect, it } from 'vitest';
import {
  buildExcerpt,
  ValidationError,
} from '../../scripts/build-counter-index.mjs';

describe('buildExcerpt', () => {
  it('passes through reasons <= 140 chars unchanged (trimmed)', () => {
    const input = '  Short rationale that fits within the 140 char budget.  ';
    expect(buildExcerpt(input)).toBe(
      'Short rationale that fits within the 140 char budget.',
    );
  });

  it('truncates to end of sentence when a sentence terminator falls within 140 chars', () => {
    const long =
      'First sentence ends here. Second sentence is much longer than the budget allows so it gets dropped entirely from the excerpt because we only want the first sentence in the cell.';
    const out = buildExcerpt(long);
    expect(out.length).toBeLessThanOrEqual(140);
    expect(out).toBe('First sentence ends here.');
  });

  it('falls back to last-space + ellipsis for very long sentences without punctuation', () => {
    const long =
      'aaaaaaaaaa bbbbbbbbbb cccccccccc dddddddddd eeeeeeeeee ffffffffff gggggggggg hhhhhhhhhh iiiiiiiiii jjjjjjjjjj kkkkkkkkkk llllllllll mmmmmmmmmm nnnnnnnnnn';
    const out = buildExcerpt(long);
    expect(out.length).toBeLessThanOrEqual(140);
    expect(out.endsWith('…')).toBe(true);
    // L'ultima parola troncata deve finire prima di 140 chars.
    expect(out).not.toContain('mmmmmmmmmm nnnnnnnnnn');
  });

  it('respects the lastSpace>80 rule, otherwise hard-truncates at 137 chars + ellipsis', () => {
    // String senza spazi vicini all'inizio (lastSpace <80): hard-truncate.
    const noSpaceEarly =
      'word ' + 'x'.repeat(200);
    const out = buildExcerpt(noSpaceEarly);
    expect(out.endsWith('…')).toBe(true);
    expect(out.length).toBeLessThanOrEqual(140);
  });

  it('throws ValidationError (V6) on empty / whitespace-only input', () => {
    expect(() => buildExcerpt('')).toThrowError(ValidationError);
    expect(() => buildExcerpt('   \n\t  ')).toThrowError(ValidationError);
    try {
      buildExcerpt('');
    } catch (err) {
      expect((err as Error).message).toMatch(/V6/);
    }
  });

  it('preserves exclamation/question terminators within 140 chars', () => {
    const long =
      'Did you know? Aatrox wins trades before level 6 with Q edge hits over W chains, and his ultimate easily snowballs the side lane after one item.';
    const out = buildExcerpt(long);
    expect(out.length).toBeLessThanOrEqual(140);
    // Match della prima frase (terminata da ?).
    expect(out).toBe('Did you know?');
  });
});
