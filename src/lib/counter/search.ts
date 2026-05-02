// WPCP-023 (CR-063) — Counter search algorithm.
//
// Substring case-insensitive su slug + display_name. Sort: prefix-match prima
// (sul slug), poi alfabetico per slug. Filtro ruolo applicato sui champion
// citati in `cited_in_roles`. Slice a 10 risultati per limitare il costo
// di rendering del dropdown.
//
// Performance: O(n) su n<=167 champion. NFR-CP-001 1.2 richiede <50ms per
// 1000 iter — ottenuto memoizzando le forme normalizzate per-indice (la
// normalizzazione NFKD + toLocaleLowerCase e' la voce piu' costosa, e
// l'indice cambia solo a ogni nuovo deploy).
//
// Riferimento: dev-repository/wp-counter-picker/design/components.md §2.

import type {
  ChampionMeta,
  CounterIndex,
  Role,
  RoleFilter,
} from './types';

const MIN_QUERY_LENGTH = 2;
const MAX_SUGGESTIONS = 10;

/** Risultato di ricerca con slug includo (la slug e' la chiave del Record
 *  `index.champions`, esposta esplicitamente per la UI). */
export interface SearchResult extends ChampionMeta {
  slug: string;
}

/**
 * Normalizza una stringa per il match: lowercase i18n-aware + NFKD per
 * decomporre eventuali accenti / segni diacritici.
 */
function normalize(s: string): string {
  return s.toLocaleLowerCase('en-US').normalize('NFKD');
}

interface NormalizedEntry {
  slug: string;
  slugNorm: string;
  // Concatenazione "slug displayName" gia normalizzata, usata per substring.
  haystack: string;
  meta: ChampionMeta;
}

/** Cache module-level: WeakMap evita memory leak; quando un nuovo CounterIndex
 *  viene caricato (e quello vecchio diventa unreachable) la sua entry viene
 *  garbage-collected automaticamente. */
const normalizedCache = new WeakMap<CounterIndex, NormalizedEntry[]>();

function getNormalizedEntries(index: CounterIndex): NormalizedEntry[] {
  const cached = normalizedCache.get(index);
  if (cached) return cached;
  const entries: NormalizedEntry[] = [];
  for (const slug of Object.keys(index.champions)) {
    const meta = index.champions[slug]!;
    const slugNorm = normalize(slug);
    const nameNorm = normalize(meta.display_name);
    entries.push({
      slug,
      slugNorm,
      haystack: `${slugNorm} ${nameNorm}`,
      meta,
    });
  }
  normalizedCache.set(index, entries);
  return entries;
}

/**
 * Cerca champion che matchano la query nell'indice.
 *
 * @param query    stringa utente (>=2 char per ottenere risultati)
 * @param role     filtro ruolo: "any" o uno dei 5 ruoli noti
 * @param index    `CounterIndex` caricato dal loader
 * @returns        max 10 risultati ordinati prefix-first poi alfabetico
 */
export function searchChampions(
  query: string,
  role: RoleFilter,
  index: CounterIndex,
): SearchResult[] {
  if (query.length < MIN_QUERY_LENGTH) return [];

  const norm = normalize(query);
  const entries = getNormalizedEntries(index);

  const matches: SearchResult[] = [];
  for (let i = 0; i < entries.length; i++) {
    const e = entries[i]!;
    if (!e.haystack.includes(norm)) continue;
    if (
      role !== 'any' &&
      !e.meta.cited_in_roles.includes(role as Role)
    ) {
      continue;
    }
    matches.push({ slug: e.slug, ...e.meta });
  }

  // Sort: prefix-match sul slug prima, poi alfabetico per slug.
  matches.sort((a, b) => {
    const aIsPrefix = a.slug.startsWith(norm) ? 0 : 1;
    const bIsPrefix = b.slug.startsWith(norm) ? 0 : 1;
    if (aIsPrefix !== bIsPrefix) return aIsPrefix - bIsPrefix;
    return a.slug.localeCompare(b.slug);
  });

  return matches.slice(0, MAX_SUGGESTIONS);
}
