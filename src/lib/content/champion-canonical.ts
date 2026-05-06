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

import type { Locale } from '../i18n/locales';

const PRODUCTION_BASE = 'https://www.lolsensei.com';

// WP35.1 — esteso da `'en' | 'it'` a tutte le lingue del sito (rev. DEC-7).
// Il rollout content per le 6 lingue aggiuntive e' incrementale: una guida
// puo' esistere in qualunque sottoinsieme di Locale, e l'`availableLangs`
// passato a `getChampionHreflang` riflette la disponibilita' reale della
// guida specifica (lookup filesystem-aware lato build).
export type ContentLang = Locale;

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
 * Helper hreflang per le champion guide.
 *
 * Ritorna solo i locale per cui la guida esiste effettivamente
 * (DEC-OP-013: hard 404 vs hreflang sbagliato). Il caller deve passare la
 * lista di lingue disponibili per quella specifica (champion, role, patch).
 *
 * Ordine di emissione (deterministico per crawler-stability):
 *   1. EN (se disponibile) — sempre primo per compat storica.
 *   2. x-default (alias di EN se EN disponibile, alias della prima lingua
 *      di `availableLangs` se EN assente — fallback raro, ma robusto).
 *   3. Le altre lingue nello stesso ordine di `availableLangs`.
 *
 * WP35.1 — supporta tutte le 8 lingue del sito (era hardcoded EN+IT).
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
  const buildHref = (lang: ContentLang) =>
    getChampionCanonical({
      lang,
      champion: args.champion,
      role: args.role,
      patch: args.patch,
      isLatestPatch: args.isLatestPatch,
      baseUrl: base,
    });

  const includeEn = args.availableLangs.includes('en');
  if (includeEn) {
    const enHref = buildHref('en');
    out.push({ lang: 'en', href: enHref });
    // x-default punta sempre alla versione EN se disponibile (DEC-OP-013).
    out.push({ lang: 'x-default', href: enHref });
  }

  for (const lang of args.availableLangs) {
    if (lang === 'en') continue; // gia' emesso sopra.
    out.push({ lang, href: buildHref(lang) });
  }

  return out;
}
