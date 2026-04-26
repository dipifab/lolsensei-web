// WP35 — Champion guide lazy loader (DEC-OP-005).
//
// Pattern allineato a `src/data/blog/index.ts`: dynamic import per lingua per
// preservare code-splitting (la build emette un chunk separato per `en.ts` e
// `it.ts`).

import type { ChampionGuide } from './types';

type SupportedLang = 'en' | 'it';

const loaders: Record<SupportedLang, () => Promise<ChampionGuide[]>> = {
  en: async () => (await import('./en')).enChampions,
  it: async () => (await import('./it')).itChampions,
};

export async function loadChampions(
  lang: SupportedLang,
): Promise<ChampionGuide[]> {
  return loaders[lang]();
}

/**
 * Ritorna la guida `is_latest` per `(lang, champion, role)` se presente.
 * Usato dalla route `/[lang]/champion/[champion]/guide`.
 */
export async function getLatestChampionGuide(
  lang: SupportedLang,
  champion: string,
  role: string,
): Promise<ChampionGuide | undefined> {
  const all = await loadChampions(lang);
  return all.find(
    (g) => g.champion === champion && g.role === role && g.is_latest,
  );
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
  const all = await loadChampions(lang);
  return all.find(
    (g) => g.champion === champion && g.role === role && g.patch === patch,
  );
}

export type { ChampionGuide, RelatedChampion } from './types';
