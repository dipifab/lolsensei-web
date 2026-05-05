// Champion guide loader API.
//
// Migrato da dynamic import di `<lang>.ts` (faceva esplodere il bundle Worker
// ~5 MB) a lookup KV via `champion-loader.ts`. Le metadata leggere (per hub
// UI, hreflang, navigazione) restano in `index.json` bundled con il Worker,
// mentre il full body delle guide vive nel KV namespace `CHAMPION_GUIDES`.

import type { Locale } from '../../lib/i18n/locales';
import { loadGuidesForSlug } from '../../lib/champion/champion-loader';
import { getHubIndex } from '../../lib/champion/discovery';
import type { ChampionGuide } from './types';

type SupportedLang = Locale;

/**
 * Ritorna la guida `is_latest` per `(lang, champion, role)` se presente.
 * Usato dalla route `/[lang]/champion/[champion]/guide` (legacy) e dalla
 * route per-role `/[lang]/champion/[champion]/[role]/guide`.
 */
export async function getLatestChampionGuide(
  lang: SupportedLang,
  champion: string,
  role: string,
): Promise<ChampionGuide | undefined> {
  const slug = `${champion}-${role}`;
  const guides = await loadGuidesForSlug(lang, slug);
  return guides.find((g) => g.is_latest);
}

/**
 * Ritorna la guida specifica per `(lang, champion, role, patch)` se presente.
 * Usato dalla route `/[lang]/champion/[champion]/[patch]`.
 */
export async function getChampionGuideAtPatch(
  lang: SupportedLang,
  champion: string,
  role: string,
  patch: string,
): Promise<ChampionGuide | undefined> {
  const slug = `${champion}-${role}`;
  const guides = await loadGuidesForSlug(lang, slug);
  return guides.find((g) => g.patch === patch);
}

/**
 * Ritorna l'elenco completo delle guide per la lingua data. Compatibility
 * shim per i pochi consumer che ancora richiedono il dataset intero.
 *
 * NOTA: questa chiamata e' costosa (1 KV.get per ogni `(champion, role)`
 * presente in index.json). Le route SSR che la usavano per generare hreflang
 * sono state migrate a `getAvailableLangsFor` da `discovery.ts`, che lavora
 * sui metadata bundled. Evita di reintrodurla in nuovi consumer.
 */
export async function loadChampions(
  lang: SupportedLang,
): Promise<ChampionGuide[]> {
  const slugs = getHubIndex()
    .filter((entry) => entry.locales[lang] !== undefined)
    .map((entry) => entry.slug);
  const lists = await Promise.all(
    slugs.map((slug) => loadGuidesForSlug(lang, slug)),
  );
  return lists.flat();
}

export type { ChampionGuide, RelatedChampion } from './types';
