// WP35 — Champion guide canonical URL helper (DEC-OP-001).
//
// Strategia canonical:
//   - `/[lang]/champion/[champion]/[role]/guide` (CR-056) e' l'URL autoritativo
//     per la pagina dettaglio guida. `role` e' un segment esplicito che permette
//     guide multi-role per champion (es. Neeko mid/support/top).
//   - `/[lang]/champion/[champion]/guide` (legacy) emette 301 al pattern role-
//     explicit. Conservato per backward compat dei link in produzione (Lux/
//     Garen/Lee Sin canonical pre-CR-056).
//   - `/[lang]/champion/[champion]/[patch]` punta canonical a `/[role]/guide`
//     quando `isLatestPatch === true` (no duplicate signal).
//   - Altrimenti il canonical della pagina patch e' la pagina stessa
//     (self-canonical), e il banner outdated puntera' a `/[role]/guide`.

const PRODUCTION_BASE = 'https://www.lolsensei.com';

export type ContentLang = 'en' | 'it';

export interface ChampionCanonicalArgs {
  lang: ContentLang;
  champion: string;
  /** Role segment (CR-056). Se assente -> URL legacy senza role. */
  role?: string;
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
 * - role-explicit guide route -> `${base}/${lang}/champion/${champion}/${role}/guide`
 * - legacy guide route -> `${base}/${lang}/champion/${champion}/guide` (back-compat)
 * - patch route latest -> stesso URL della rotta guide corrispondente
 * - patch route outdated -> `${base}/${lang}/champion/${champion}/${patch}`
 */
export function getChampionCanonical(args: ChampionCanonicalArgs): string {
  const base = args.baseUrl ?? PRODUCTION_BASE;
  const lang = args.lang;
  const champion = args.champion;
  const guidePath = args.role
    ? `${base}/${lang}/champion/${champion}/${args.role}/guide`
    : `${base}/${lang}/champion/${champion}/guide`;

  if (!args.patch) {
    return guidePath;
  }
  if (args.isLatestPatch) {
    return guidePath;
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
  role?: string;
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
        role: args.role,
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
        role: args.role,
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
        role: args.role,
        patch: args.patch,
        isLatestPatch: args.isLatestPatch,
        baseUrl: base,
      }),
    });
  }
  return out;
}
