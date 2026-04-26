// WP35 — Champion guide canonical URL helper (DEC-OP-001).
//
// Strategia canonical:
//   - `/[lang]/champion/[champion]/guide`  e' SEMPRE l'URL autoritativo.
//   - `/[lang]/champion/[champion]/[patch]` punta canonical a `/guide`
//     quando `isLatestPatch === true` (no duplicate signal).
//   - Altrimenti il canonical della pagina patch e' la pagina stessa
//     (self-canonical), e il banner outdated puntera' a `/guide`.

const PRODUCTION_BASE = 'https://www.lolsensei.com';

export type ContentLang = 'en' | 'it';

export interface ChampionCanonicalArgs {
  lang: ContentLang;
  champion: string;
  /** Se assente -> canonical e' la rotta `/guide`. */
  patch?: string;
  /** Se true e `patch` e' presente, canonical risale a `/guide`. */
  isLatestPatch?: boolean;
  /** Override base per test/preview. Default: produzione. */
  baseUrl?: string;
}

/**
 * Ritorna URL canonical assoluto per la guida indicata.
 *
 * - guide route -> `${base}/${lang}/champion/${champion}/guide`
 * - patch route latest -> `${base}/${lang}/champion/${champion}/guide`
 * - patch route outdated -> `${base}/${lang}/champion/${champion}/${patch}`
 */
export function getChampionCanonical(args: ChampionCanonicalArgs): string {
  const base = args.baseUrl ?? PRODUCTION_BASE;
  const lang = args.lang;
  const champion = args.champion;

  if (!args.patch) {
    return `${base}/${lang}/champion/${champion}/guide`;
  }
  if (args.isLatestPatch) {
    return `${base}/${lang}/champion/${champion}/guide`;
  }
  return `${base}/${lang}/champion/${champion}/${args.patch}`;
}

/**
 * Helper per la coppia hreflang reciproco EN/IT.
 * Ritorna solo i locale per cui la guida esiste effettivamente
 * (DEC-OP-013 hard 404 vs hreflang sbagliato).
 */
export function getChampionHreflang(args: {
  champion: string;
  availableLangs: readonly ContentLang[];
  patch?: string;
  isLatestPatch?: boolean;
  baseUrl?: string;
}): { lang: ContentLang | 'x-default'; href: string }[] {
  const base = args.baseUrl ?? PRODUCTION_BASE;
  const out: { lang: ContentLang | 'x-default'; href: string }[] = [];
  const includeEn = args.availableLangs.includes('en');
  if (includeEn) {
    out.push({
      lang: 'en',
      href: getChampionCanonical({
        lang: 'en',
        champion: args.champion,
        patch: args.patch,
        isLatestPatch: args.isLatestPatch,
        baseUrl: base,
      }),
    });
    // x-default punta sempre alla versione EN se disponibile.
    out.push({
      lang: 'x-default',
      href: getChampionCanonical({
        lang: 'en',
        champion: args.champion,
        patch: args.patch,
        isLatestPatch: args.isLatestPatch,
        baseUrl: base,
      }),
    });
  }
  if (args.availableLangs.includes('it')) {
    out.push({
      lang: 'it',
      href: getChampionCanonical({
        lang: 'it',
        champion: args.champion,
        patch: args.patch,
        isLatestPatch: args.isLatestPatch,
        baseUrl: base,
      }),
    });
  }
  return out;
}
