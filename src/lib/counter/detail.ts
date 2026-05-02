// WPCP-033 (CR-063) — Counter Detail Page route helper logic.
//
// Funzioni pure usate dalla route `[slug].tsx` per:
//   - classificare la richiesta (404 / no-data / ok)
//   - selezionare la entry by_enemy ordinata (recurrence desc, alpha tie-break)
//   - risolvere display name enemy
//   - costruire alternates hreflang
//   - costruire l'href della guida del subject (cross-link CTA)
//
// Sono state estratte dalla route per essere unit-testabili senza render
// SSR/Solid (vedi `tests/unit/counter-detail-route.test.tsx`).
//
// Riferimenti:
//   - dev-repository/wp-counter-picker/design/components.md §3 (Casi UI)
//   - dev-repository/wp-counter-picker/design/routing.md §9 (404 handling),
//     §10 (hreflang)

import type {
  ChampionMeta,
  CounterIndex,
  EnemyEntry,
  Lang,
  MatchupCell,
  Role,
} from './types';

/** Esito della classificazione di una richiesta detail. */
export type EnemyClassification =
  | { kind: 'ok' }
  | { kind: 'no-data' }
  | { kind: 'not-found' };

/**
 * Classifica una richiesta `/[lang]/counter/<slug>[-<role>]`:
 *
 *   - `not-found`: lo slug NON e' in `champions{}` (URL malformato / champion
 *     sconosciuto al registry). La route deve emettere 404.
 *   - `no-data`: lo slug e' in `champions{}` ma NON in `by_enemy{}` (champion
 *     noto ma senza guide pubblicate che lo citino). La route deve mostrare
 *     un placeholder "guida non ancora pubblicata" (200 OK).
 *   - `ok`: lo slug e' in entrambi. La route renderizza header + 2 colonne.
 */
export function classifyEnemy(
  slug: string,
  index: CounterIndex,
): EnemyClassification {
  const trimmed = slug.trim();
  if (trimmed.length === 0) return { kind: 'not-found' };
  if (!Object.prototype.hasOwnProperty.call(index.champions, trimmed)) {
    return { kind: 'not-found' };
  }
  if (!Object.prototype.hasOwnProperty.call(index.by_enemy, trimmed)) {
    return { kind: 'no-data' };
  }
  return { kind: 'ok' };
}

/**
 * Comparator stabile per ordinare le celle:
 *   1. recurrence_count (`n`) desc — chi appare in piu guide va in alto;
 *   2. publisher slug (`c`) asc — alfabetico stabile in caso di tie;
 *   3. role asc — ulteriore tie-breaker deterministico.
 *
 * Garantisce idempotenza UI tra reload dell'asset (i builder gia ordinano
 * upstream allo stesso modo: questo comparator client e' difensivo).
 */
function compareCells(a: MatchupCell, b: MatchupCell): number {
  if (b.n !== a.n) return b.n - a.n;
  const slugCmp = a.c.localeCompare(b.c);
  if (slugCmp !== 0) return slugCmp;
  return a.role.localeCompare(b.role);
}

/**
 * Ritorna la entry by_enemy (con liste ordinate) per il subject `slug`,
 * o `null` se assente. Le liste vengono CLONATE prima del sort per non
 * mutare l'asset (cached in module-level Map dal loader).
 */
export function selectEnemyEntry(
  slug: string,
  index: CounterIndex,
): EnemyEntry | null {
  const entry = index.by_enemy[slug];
  if (!entry) return null;
  return {
    is_strong_against: [...entry.is_strong_against].sort(compareCells),
    is_weak_against: [...entry.is_weak_against].sort(compareCells),
  };
}

/**
 * Risolve il display name dell'enemy. Fallback alla slug stessa quando il
 * champion non e' nel registry (caso che `classifyEnemy` ha gia bloccato,
 * ma il fallback protegge consumer che bypassano la classificazione).
 */
export function resolveEnemyDisplayName(
  slug: string,
  index: CounterIndex,
): string {
  return index.champions[slug]?.display_name ?? slug;
}

const ROLE_DISPLAY_ORDER: readonly Role[] = [
  'top',
  'jungle',
  'mid',
  'bot',
  'support',
];

/**
 * Insieme dei ruoli enemy per cui esiste almeno una cella nelle liste
 * `is_strong_against` o `is_weak_against`. Usato dalla detail page per
 * decidere quali tab mostrare: tab di un ruolo senza dati creerebbero
 * una vista vuota fuorviante.
 *
 * Output ordinato secondo `top > jungle > mid > bot > support` (ordine
 * stabile e naturale per il giocatore, indipendente dall'ordine di
 * inserimento nelle liste).
 */
export function rolesWithMatchups(entry: EnemyEntry): Role[] {
  const set = new Set<Role>();
  for (const c of entry.is_strong_against) set.add(c.role);
  for (const c of entry.is_weak_against) set.add(c.role);
  return ROLE_DISPLAY_ORDER.filter((r) => set.has(r));
}

/**
 * Filtra entry.is_strong_against e entry.is_weak_against tenendo solo le
 * celle il cui `role` (= ruolo dell'enemy nella guida sorgente) corrisponde
 * a `role`. Se `role === null` ritorna l'entry invariata (vista "Tutti").
 *
 * L'ordine relativo delle celle e' preservato: il chiamante e' responsabile
 * di passare un'entry gia ordinata via `selectEnemyEntry`.
 */
export function filterEntryByRole(
  entry: EnemyEntry,
  role: Role | null,
): EnemyEntry {
  if (role === null) return entry;
  return {
    is_strong_against: entry.is_strong_against.filter((c) => c.role === role),
    is_weak_against: entry.is_weak_against.filter((c) => c.role === role),
  };
}

export interface HreflangAlternate {
  hreflang: 'en' | 'it' | 'x-default';
  href: string;
}

/**
 * Costruisce gli alternates hreflang per la pagina detail. EN e' canonical
 * x-default (parita ADR-034 + DEC-7 scope counter EN+IT only).
 */
export function buildHreflangAlternates(
  slug: string,
  role: Role | null,
  baseUrl: string,
): HreflangAlternate[] {
  const suffix = role ? `-${role}` : '';
  const path = `/counter/${slug}${suffix}`;
  return [
    { hreflang: 'en', href: `${baseUrl}/en${path}` },
    { hreflang: 'it', href: `${baseUrl}/it${path}` },
    { hreflang: 'x-default', href: `${baseUrl}/en${path}` },
  ];
}

/**
 * Costruisce l'href della guida del subject (CTA "vedi la guida di {name}"
 * sulla detail page).
 *
 * Post-CR-056 la route guida e' role-explicit con segment separati da slash:
 * `/[lang]/champion/<champion>/<role>/guide`. La forma legacy hyphen
 * `<champion>-<role>/guide` non emette piu redirect 301 e cade su
 * NotFoundFallback (soft-404). Stesso pattern usato da `resolveSourceAnchor`
 * in `types.ts` (chiusura OI-P6-1) e ora esteso al cross-link CTA del subject
 * (chiusura REV-001).
 *
 * Il role usato per la guida e':
 *   1. `enemyRole` se l'utente e' arrivato a una URL role-explicit;
 *   2. altrimenti il primo role in `cited_in_roles` del meta (ordine stabile);
 *   3. fallback `'top'` come ultimo difensivo (non dovrebbe mai accadere se
 *      `meta.has_guide === true`, condizione gating del CTA in `[slug].tsx`).
 *
 * Il prefix slug usa l'eventuale `gp` (guide_prefix) sul `meta` per i
 * champion il cui filename markdown ha slug compressa diversa dal canonical
 * (es. `cho-gath` -> `chogath`); fallback allo slug canonical.
 *
 * @example
 *   buildSubjectGuideHref('en', 'yasuo', null, idx.champions['yasuo'])
 *   // -> "/en/champion/yasuo/mid/guide"  (cited_in_roles[0] = 'mid')
 *
 *   buildSubjectGuideHref('it', 'cho-gath', 'top', idx.champions['cho-gath'])
 *   // gp === 'chogath' -> "/it/champion/chogath/top/guide"
 */
export function buildSubjectGuideHref(
  lang: Lang,
  enemySlug: string,
  enemyRole: Role | null,
  meta: ChampionMeta | undefined,
): string {
  const role: Role = enemyRole ?? meta?.cited_in_roles[0] ?? 'top';
  const prefix = meta?.gp ?? enemySlug;
  return `/${lang}/champion/${prefix}/${role}/guide`;
}
