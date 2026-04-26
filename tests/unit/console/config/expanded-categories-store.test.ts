// T-CONFIG-028 — expanded_categories localStorage persistence tests.

import { describe, expect, it } from 'vitest';
import {
  STORAGE_KEY,
  readExpandedCategories,
  writeExpandedCategories,
  toggleCategory,
} from '../../../../src/console/config/components/expanded-categories-store';

class FakeStorage implements Storage {
  private store = new Map<string, string>();

  get length(): number {
    return this.store.size;
  }

  clear(): void {
    this.store.clear();
  }

  getItem(key: string): string | null {
    return this.store.get(key) ?? null;
  }

  key(index: number): string | null {
    return Array.from(this.store.keys())[index] ?? null;
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  setItem(key: string, value: string): void {
    this.store.set(key, value);
  }
}

describe('readExpandedCategories', () => {
  it('returns [] when storage is null', () => {
    expect(readExpandedCategories(null)).toEqual([]);
  });

  it('returns [] when no value stored', () => {
    const s = new FakeStorage();
    expect(readExpandedCategories(s)).toEqual([]);
  });

  it('returns valid stored categories', () => {
    const s = new FakeStorage();
    s.setItem(STORAGE_KEY, JSON.stringify(['tunable', 'flag']));
    expect(readExpandedCategories(s)).toEqual(['tunable', 'flag']);
  });

  it('filters out invalid category names', () => {
    const s = new FakeStorage();
    s.setItem(STORAGE_KEY, JSON.stringify(['tunable', 'invalid', 'public_id']));
    expect(readExpandedCategories(s)).toEqual(['tunable', 'public_id']);
  });

  it('returns [] when stored value is malformed JSON', () => {
    const s = new FakeStorage();
    s.setItem(STORAGE_KEY, '{not json');
    expect(readExpandedCategories(s)).toEqual([]);
  });

  it('returns [] when stored value is not an array', () => {
    const s = new FakeStorage();
    s.setItem(STORAGE_KEY, JSON.stringify({ a: 1 }));
    expect(readExpandedCategories(s)).toEqual([]);
  });

  it('survives storage.getItem throwing (privacy mode)', () => {
    const throwing: Storage = {
      length: 0,
      clear: () => {},
      getItem: () => {
        throw new Error('SecurityError: storage disabled');
      },
      key: () => null,
      removeItem: () => {},
      setItem: () => {},
    };
    expect(readExpandedCategories(throwing)).toEqual([]);
  });
});

describe('writeExpandedCategories', () => {
  it('writes JSON-serialized categories', () => {
    const s = new FakeStorage();
    writeExpandedCategories(['tunable', 'flag'], s);
    expect(s.getItem(STORAGE_KEY)).toBe(JSON.stringify(['tunable', 'flag']));
  });

  it('survives storage being null', () => {
    expect(() => writeExpandedCategories(['tunable'], null)).not.toThrow();
  });

  it('survives storage.setItem throwing (privacy mode)', () => {
    const throwing: Storage = {
      length: 0,
      clear: () => {},
      getItem: () => null,
      key: () => null,
      removeItem: () => {},
      setItem: () => {
        throw new Error('SecurityError: quota exceeded');
      },
    };
    expect(() => writeExpandedCategories(['tunable'], throwing)).not.toThrow();
  });
});

describe('toggleCategory', () => {
  it('adds category when not present', () => {
    expect(toggleCategory(['tunable'], 'flag')).toEqual(['tunable', 'flag']);
  });

  it('removes category when present', () => {
    expect(toggleCategory(['tunable', 'flag'], 'tunable')).toEqual(['flag']);
  });

  it('does not mutate input array', () => {
    const input: ('tunable' | 'flag')[] = ['tunable'];
    const out = toggleCategory(input, 'flag');
    expect(input).toEqual(['tunable']);
    expect(out).not.toBe(input);
  });
});
