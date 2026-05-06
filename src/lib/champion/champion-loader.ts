// Champion guide loader — single source of truth per le full guides.
//
// Spostato fuori dal Worker bundle per stare sotto il limite 3 MiB del piano
// Workers Free. In produzione legge dal binding KV `CHAMPION_GUIDES`. In dev
// (vinxi dev, niente binding) cade su filesystem leggendo gli artifact prebuild
// in `dist/kv-uploads/champions/<lang>/<slug>.json`.
//
// Layout chiavi KV:
//   guides:<lang>:<slug>   →  ChampionGuide[]   (di solito 1 elemento)
//
// `<slug>` e' sempre `${champion}-${role}` (es. "aatrox-top").
//
// Le metadata leggere (title, description, patch, ecc.) NON passano da qui:
// vivono in `src/data/champions/index.json` come bundled asset (~147 KB) e
// sono esposte via `src/lib/champion/discovery.ts`. Solo il full body viene
// caricato on-demand dalle route che renderizzano una guida.

import { getRequestEvent } from 'solid-js/web';
import type { Locale } from '../i18n/locales';
import type { ChampionGuide } from '../../data/champions/types';

interface KVNamespaceLike {
  get<T = unknown>(key: string, type: 'json'): Promise<T | null>;
}

interface CloudflareEnv {
  CHAMPION_GUIDES?: KVNamespaceLike;
}

function resolveKv(): KVNamespaceLike | null {
  const event = getRequestEvent();
  if (!event) return null;
  const native = (event as unknown as { nativeEvent?: unknown }).nativeEvent;
  const ctx = (native as { context?: { cloudflare?: { env?: CloudflareEnv } } })
    ?.context?.cloudflare?.env;
  return ctx?.CHAMPION_GUIDES ?? null;
}

function key(lang: Locale, slug: string): string {
  return `guides:${lang}:${slug}`;
}

/**
 * Carica tutte le guide per `(lang, slug)` (di solito 1 elemento, raramente
 * piu' patch storiche). Ritorna `[]` se la chiave non esiste.
 *
 * Marcata `"use server"`: il KV namespace `CHAMPION_GUIDES` e' raggiungibile
 * solo dal Worker, quindi qualunque chiamata client-side (es. SPA navigation
 * sul Champion Hub) deve passare per RPC server-side. Senza la direttiva,
 * `getRequestEvent()` ritorna undefined nel browser → la guida non viene
 * trovata e l'utente vede "Guida non trovata" cliccando dall'hub.
 */
export async function loadGuidesForSlug(
  lang: Locale,
  slug: string,
): Promise<ChampionGuide[]> {
  'use server';
  const kv = resolveKv();
  if (kv) {
    const value = await kv.get<ChampionGuide[]>(key(lang, slug), 'json');
    return value ?? [];
  }
  // Dev fallback: niente binding KV in vinxi dev. Carica da filesystem
  // dagli artifact prebuild (`dist/kv-uploads/champions/<lang>/<slug>.json`).
  if (import.meta.env.DEV) {
    return loadGuidesForSlugFromDisk(lang, slug);
  }
  console.warn('[champion-loader] KV binding CHAMPION_GUIDES missing in production runtime');
  return [];
}

async function loadGuidesForSlugFromDisk(
  lang: Locale,
  slug: string,
): Promise<ChampionGuide[]> {
  try {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const file = path.resolve(
      process.cwd(),
      'dist/kv-uploads/champions',
      lang,
      `${slug}.json`,
    );
    const raw = await fs.readFile(file, 'utf8');
    return JSON.parse(raw) as ChampionGuide[];
  } catch {
    return [];
  }
}
