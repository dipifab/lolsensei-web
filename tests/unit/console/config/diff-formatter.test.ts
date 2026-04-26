// T-CONFIG-026 — diff-formatter unit tests
// Scalar inline (int/float/bool/str/enum) + container side-by-side (list/dict).

import { describe, expect, it } from 'vitest';
import { formatDiff } from '../../../../src/console/config/lib/diff-formatter';

describe('formatDiff', () => {
  describe('scalar inline mode', () => {
    it('formats int diff inline', () => {
      const r = formatDiff(50, 100, 'int');
      expect(r.mode).toBe('inline');
      expect(r.oldText).toBe('50');
      expect(r.newText).toBe('100');
      expect(r.inline).toBe('OLD: 50 → NEW: 100');
    });

    it('formats float diff inline', () => {
      const r = formatDiff(1.5, 2.75, 'float');
      expect(r.mode).toBe('inline');
      expect(r.inline).toBe('OLD: 1.5 → NEW: 2.75');
    });

    it('formats bool diff inline', () => {
      const r = formatDiff(false, true, 'bool');
      expect(r.mode).toBe('inline');
      expect(r.oldText).toBe('false');
      expect(r.newText).toBe('true');
    });

    it('formats str diff inline with quotes (visible string boundaries)', () => {
      const r = formatDiff('old text', 'new text', 'str');
      expect(r.mode).toBe('inline');
      expect(r.oldText).toBe('"old text"');
      expect(r.newText).toBe('"new text"');
    });

    it('formats enum diff inline', () => {
      const r = formatDiff('claude-haiku', 'claude-sonnet', 'enum');
      expect(r.mode).toBe('inline');
      expect(r.oldText).toBe('"claude-haiku"');
    });

    it('renders null old_value as ∅ marker (initial seed)', () => {
      const r = formatDiff(null, 50, 'int');
      expect(r.oldText).toBe('∅');
      expect(r.newText).toBe('50');
      expect(r.inline).toBe('OLD: ∅ → NEW: 50');
    });
  });

  describe('container side-by-side mode', () => {
    it('formats list diff side-by-side with pretty JSON', () => {
      const r = formatDiff(
        ['a', 'b'],
        ['a', 'b', 'c'],
        'list',
      );
      expect(r.mode).toBe('side-by-side');
      expect(r.inline).toBe('');
      expect(r.oldText).toContain('"a"');
      expect(r.oldText).toContain('"b"');
      expect(r.oldText.split('\n').length).toBe(4); // [, "a", "b", ]
      expect(r.newText.split('\n').length).toBe(5);
    });

    it('formats dict diff side-by-side with pretty JSON', () => {
      const r = formatDiff(
        { haiku: 'old' },
        { haiku: 'new', sonnet: 'extra' },
        'dict',
      );
      expect(r.mode).toBe('side-by-side');
      expect(r.oldText).toContain('"haiku"');
      expect(r.oldText).toContain('"old"');
      expect(r.newText).toContain('"sonnet"');
    });

    it('handles null old_value for container', () => {
      const r = formatDiff(null, ['a'], 'list');
      expect(r.mode).toBe('side-by-side');
      expect(r.oldText).toBe('∅');
      expect(r.newText).toContain('"a"');
    });
  });
});
