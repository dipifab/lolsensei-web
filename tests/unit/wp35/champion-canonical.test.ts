// WP35 — champion-canonical.ts unit tests (TASK-F5-05).

import { describe, it, expect } from 'vitest';
import {
  getChampionCanonical,
  getChampionHreflang,
} from '../../../src/lib/content/champion-canonical';

describe('getChampionCanonical', () => {
  it('returns /guide URL when patch is absent', () => {
    expect(
      getChampionCanonical({ lang: 'en', champion: 'lux' }),
    ).toBe('https://www.lolsensei.com/en/champion/lux/guide');
  });

  it('returns /guide URL for IT lang', () => {
    expect(
      getChampionCanonical({ lang: 'it', champion: 'garen' }),
    ).toBe('https://www.lolsensei.com/it/champion/garen/guide');
  });

  it('returns /guide URL when patch is latest', () => {
    expect(
      getChampionCanonical({
        lang: 'en',
        champion: 'lux',
        patch: '14.10',
        isLatestPatch: true,
      }),
    ).toBe('https://www.lolsensei.com/en/champion/lux/guide');
  });

  it('returns self URL when patch is non-latest', () => {
    expect(
      getChampionCanonical({
        lang: 'en',
        champion: 'lux',
        patch: '14.5',
        isLatestPatch: false,
      }),
    ).toBe('https://www.lolsensei.com/en/champion/lux/14.5');
  });

  it('honors baseUrl override for testing', () => {
    expect(
      getChampionCanonical({
        lang: 'en',
        champion: 'lux',
        baseUrl: 'http://localhost:3000',
      }),
    ).toBe('http://localhost:3000/en/champion/lux/guide');
  });
});

describe('getChampionHreflang', () => {
  it('emits EN + IT + x-default when both langs present', () => {
    const out = getChampionHreflang({
      champion: 'lux',
      availableLangs: ['en', 'it'],
    });
    expect(out).toEqual([
      { lang: 'en', href: 'https://www.lolsensei.com/en/champion/lux/guide' },
      {
        lang: 'x-default',
        href: 'https://www.lolsensei.com/en/champion/lux/guide',
      },
      { lang: 'it', href: 'https://www.lolsensei.com/it/champion/lux/guide' },
    ]);
  });

  it('emits only IT when only IT is available', () => {
    const out = getChampionHreflang({
      champion: 'rare',
      availableLangs: ['it'],
    });
    expect(out).toHaveLength(1);
    expect(out[0]).toEqual({
      lang: 'it',
      href: 'https://www.lolsensei.com/it/champion/rare/guide',
    });
  });

  it('emits only EN + x-default when only EN is available', () => {
    const out = getChampionHreflang({
      champion: 'lux',
      availableLangs: ['en'],
    });
    expect(out).toEqual([
      { lang: 'en', href: 'https://www.lolsensei.com/en/champion/lux/guide' },
      {
        lang: 'x-default',
        href: 'https://www.lolsensei.com/en/champion/lux/guide',
      },
    ]);
  });

  it('forwards patch + isLatestPatch to canonical builder', () => {
    const out = getChampionHreflang({
      champion: 'lux',
      availableLangs: ['en', 'it'],
      patch: '14.5',
      isLatestPatch: false,
    });
    expect(out[0].href).toBe('https://www.lolsensei.com/en/champion/lux/14.5');
    expect(out[2].href).toBe('https://www.lolsensei.com/it/champion/lux/14.5');
  });
});
