// WPCP-024 (CR-063) — Counter index lazy loader + module-level cache.
//
// Cache `Map<Lang, Promise<CounterIndex>>` module-level: la prima call ad
// un certo `lang` fetcha l'asset; le successive (anche concorrenti) riusano
// la stessa Promise. In caso di errore (HTTP non-2xx o reject di rete) la
// cache viene invalidata cosi un retry futuro puo riuscire.
//
// In DEV (gated da `import.meta.env.DEV`) il payload e' validato runtime
// con Zod per intercettare drift schema durante lo sviluppo.
//
// Phase 6 update: il loader supporta ora un `baseUrl` opzionale per
// abilitare il fetch server-side dell'asset. Su Cloudflare Workers SSR
// `fetch('/path')` con URL relativo non funziona (non c'e' un origin
// implicito), quindi la route SSR-aware passa l'origin estratto dalla
// request via `getRequestEvent()`. La cache e' separata per scope client
// vs server: il server cache vive solo per la durata dell'isolato Workers.
//
// Riferimenti:
//   - dev-repository/wp-counter-picker/design/components.md §2 (API loader)
//   - dev-repository/wp-counter-picker/design/architecture.md §6 (cache),
//     §7 (concurrency).
//   - dev-repository/wp-counter-picker/tasks/backlog.md WPCP-051 (SSR fix
//     OI-P4-1 / OI-P5-2).

import type { CounterIndex, Lang } from './types';
import { CounterIndexSchema } from './schema';

const cache = new Map<Lang, Promise<CounterIndex>>();

/**
 * Path canonical dell'asset statico esposto dal builder. Il path e'
 * relativo all'origin: in dev gira via vite, in prod via Cloudflare Workers.
 * Quando `baseUrl` e' fornito (caso SSR), viene prefixato per produrre
 * un URL absolute che CF Workers puo risolvere come subrequest interno.
 */
function indexUrl(lang: Lang, baseUrl?: string): string {
  const path = `/counter-index/${lang}.json`;
  return baseUrl ? `${baseUrl}${path}` : path;
}

async function fetchAndValidate(
  lang: Lang,
  baseUrl?: string,
): Promise<CounterIndex> {
  const url = indexUrl(lang, baseUrl);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`counter-index ${lang} fetch failed: HTTP ${response.status}`);
  }
  const json = (await response.json()) as CounterIndex;
  // Dev-only validation: in produzione il builder ha gia validato l'asset.
  if (import.meta.env?.DEV) {
    CounterIndexSchema.parse(json);
  }
  return json;
}

/**
 * Carica (o ritorna dalla cache) l'indice counter per la lingua data.
 * Le chiamate concorrenti per lo stesso `lang` ricevono la stessa Promise:
 * esattamente UNA fetch viene emessa.
 *
 * @param lang  Lingua dell'indice (`'en'` o `'it'`).
 * @param baseUrl Origin assoluta da prefixare al path. Solo SSR.
 *
 * @example
 *   // Client-side
 *   const idx = await loadIndex('en');
 *
 *   // SSR (es. dentro getRequestEvent())
 *   const idx = await loadIndex('en', 'https://www.lolsensei.com');
 */
export function loadIndex(lang: Lang, baseUrl?: string): Promise<CounterIndex> {
  const existing = cache.get(lang);
  if (existing) return existing;

  const promise = fetchAndValidate(lang, baseUrl).catch((err: unknown) => {
    // Invalida la cache su errore: il prossimo retry parte fresco.
    if (cache.get(lang) === promise) {
      cache.delete(lang);
    }
    throw err;
  });
  cache.set(lang, promise);
  return promise;
}

/**
 * Test helper: svuota la cache. Usato dai test unit che istanziano lo stub
 * di `fetch`. NON esposto come API pubblica.
 */
export function _resetIndexCache(): void {
  cache.clear();
}
