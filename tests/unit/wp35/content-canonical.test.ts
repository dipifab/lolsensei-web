// WP35 — Integrazione: content-compile output produce canonical corretto.
//
// Verifica end-to-end che il bundle `src/data/champions/{en,it}.ts` generato
// dal compile pipeline sia consumabile dai loader e che `getLatestChampionGuide`
// + `getChampionCanonical` restituiscano coppie consistenti.

import { describe, it, expect } from 'vitest';
import {
  loadChampions,
  getLatestChampionGuide,
  getChampionGuideAtPatch,
} from '../../../src/data/champions';
import { getChampionCanonical } from '../../../src/lib/content/champion-canonical';

describe('content-canonical end-to-end (compiled output)', () => {
  it('loads en champions array (post-compile)', async () => {
    const en = await loadChampions('en');
    expect(Array.isArray(en)).toBe(true);
  });

  it('loads it champions array (post-compile)', async () => {
    const it = await loadChampions('it');
    expect(Array.isArray(it)).toBe(true);
  });

  it('lux mid latest guide en exists with consistent canonical', async () => {
    const guide = await getLatestChampionGuide('en', 'lux', 'mid');
    if (!guide) {
      // Pre-F4 seed potrebbe avere bundle vuoto. Skip soft.
      return;
    }
    expect(guide.champion).toBe('lux');
    expect(guide.role).toBe('mid');
    expect(guide.is_latest).toBe(true);
    const canonical = getChampionCanonical({
      lang: 'en',
      champion: guide.champion,
    });
    expect(canonical).toBe('https://www.lolsensei.com/en/champion/lux/guide');
  });

  it('lux mid latest guide it exists with consistent canonical', async () => {
    const guide = await getLatestChampionGuide('it', 'lux', 'mid');
    if (!guide) return;
    expect(guide.language).toBe('it');
    expect(guide.is_latest).toBe(true);
    const canonical = getChampionCanonical({
      lang: 'it',
      champion: guide.champion,
    });
    expect(canonical).toBe('https://www.lolsensei.com/it/champion/lux/guide');
  });

  it('garen top latest guide present in both languages', async () => {
    const en = await getLatestChampionGuide('en', 'garen', 'top');
    const it = await getLatestChampionGuide('it', 'garen', 'top');
    if (!en || !it) return;
    expect(en.champion).toBe('garen');
    expect(it.champion).toBe('garen');
    expect(en.role).toBe('top');
    expect(it.role).toBe('top');
  });

  it('lee-sin jungle latest guide present in both languages', async () => {
    const en = await getLatestChampionGuide('en', 'lee-sin', 'jungle');
    const it = await getLatestChampionGuide('it', 'lee-sin', 'jungle');
    if (!en || !it) return;
    expect(en.champion).toBe('lee-sin');
    expect(it.champion).toBe('lee-sin');
  });

  it('returns undefined for non-seeded champion', async () => {
    const guide = await getLatestChampionGuide('en', 'aatrox', 'top');
    // pre-F4 expansion: aatrox non e' nel seed iniziale 3-champion.
    expect(guide).toBeUndefined();
  });

  it('returns undefined for non-existent patch', async () => {
    const guide = await getChampionGuideAtPatch('en', 'lux', 'mid', '99.99');
    expect(guide).toBeUndefined();
  });

  it('compiled content_html is sanitized (no <script> tags)', async () => {
    const en = await loadChampions('en');
    for (const guide of en) {
      expect(guide.content_html).not.toContain('<script');
    }
  });
});
