// WPCP-024 — index-loader tests.
//
// Cache module-level: la prima call ad un certo `lang` fetcha l'asset, le
// successive riusano la Promise (anche se ancora pendente: chiamate concorrenti
// non causano fetch duplicate). Errori di fetch (HTTP non-2xx o reject di
// rete) NON cachano la Promise rejected, cosi un retry futuro puo succedere.
//
// Lo stub di `globalThis.fetch` viene resettato fra i test; il modulo viene
// re-importato via `vi.resetModules` per pulire la cache module-level.

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { CounterIndex } from '../../src/lib/counter/types';

// Costruisce un asset realistico-shape (schema_version 2) ma minimo.
function makeAsset(lang: 'en' | 'it'): CounterIndex {
  return {
    schema_version: 2,
    lang,
    generated_at: '1970-01-01',
    rationales: ['stub'],
    champions: {
      aatrox: {
        display_name: 'Aatrox',
        dd_id: 'Aatrox',
        key: '266',
        cited_in_roles: ['top'],
        has_guide: true,
      },
    },
    by_enemy: {},
  };
}

interface FetchResponseLike {
  ok: boolean;
  status: number;
  json: () => Promise<unknown>;
}

function makeOkResponse(asset: CounterIndex): FetchResponseLike {
  return {
    ok: true,
    status: 200,
    json: async () => asset,
  };
}

function makeErrorResponse(status: number): FetchResponseLike {
  return {
    ok: false,
    status,
    json: async () => ({}),
  };
}

describe('loadIndex — fetch + cache behavior', () => {
  let fetchSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.resetModules();
    fetchSpy = vi.fn();
    vi.stubGlobal('fetch', fetchSpy);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('fetches /counter-index/<lang>.json on first call', async () => {
    fetchSpy.mockResolvedValueOnce(makeOkResponse(makeAsset('en')));
    const { loadIndex } = await import('../../src/lib/counter/index-loader');

    const result = await loadIndex('en');

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith('/counter-index/en.json');
    expect(result.lang).toBe('en');
    expect(result.schema_version).toBe(2);
  });

  it('returns cached promise on subsequent calls for the same lang', async () => {
    fetchSpy.mockResolvedValueOnce(makeOkResponse(makeAsset('en')));
    const { loadIndex } = await import('../../src/lib/counter/index-loader');

    const a = await loadIndex('en');
    const b = await loadIndex('en');

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(a).toBe(b); // identita di riferimento (stessa Promise -> stesso valore)
  });

  it('deduplicates concurrent calls for the same lang', async () => {
    fetchSpy.mockResolvedValue(makeOkResponse(makeAsset('en')));
    const { loadIndex } = await import('../../src/lib/counter/index-loader');

    const [a, b] = await Promise.all([loadIndex('en'), loadIndex('en')]);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(a).toBe(b);
  });

  it('caches en and it independently', async () => {
    fetchSpy
      .mockResolvedValueOnce(makeOkResponse(makeAsset('en')))
      .mockResolvedValueOnce(makeOkResponse(makeAsset('it')));
    const { loadIndex } = await import('../../src/lib/counter/index-loader');

    const en = await loadIndex('en');
    const it = await loadIndex('it');

    expect(fetchSpy).toHaveBeenCalledTimes(2);
    expect(en.lang).toBe('en');
    expect(it.lang).toBe('it');
  });

  it('throws when fetch returns non-2xx and does not cache the failure', async () => {
    fetchSpy
      .mockResolvedValueOnce(makeErrorResponse(500))
      .mockResolvedValueOnce(makeOkResponse(makeAsset('en')));
    const { loadIndex } = await import('../../src/lib/counter/index-loader');

    await expect(loadIndex('en')).rejects.toThrow(/500/);

    // Retry succeeds: la cache non ha persistito la rejection.
    const ok = await loadIndex('en');
    expect(ok.lang).toBe('en');
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });

  it('throws on network reject and clears cache for retry', async () => {
    fetchSpy
      .mockRejectedValueOnce(new Error('network'))
      .mockResolvedValueOnce(makeOkResponse(makeAsset('en')));
    const { loadIndex } = await import('../../src/lib/counter/index-loader');

    await expect(loadIndex('en')).rejects.toThrow(/network/);

    const ok = await loadIndex('en');
    expect(ok.lang).toBe('en');
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });
});
