import { SUPPORTED_LOCALES, DEFAULT_LOCALE, type Locale } from '../i18n/locales';

interface ParsedCandidate {
  tag: string; // lowercased full tag (e.g. "pt-pt")
  primary: string; // lowercased primary subtag (e.g. "pt")
  q: number; // quality weight in [0, 1]
  order: number; // original position, used for stable sort on ties
}

/**
 * Lowercased full-tag -> canonical supported locale.
 * SUPPORTED_LOCALES values are mostly already lowercase; zh-hans is preserved
 * in its canonical casing via canonicalLocale().
 */
function buildFullTagIndex(): Map<string, Locale> {
  const index = new Map<string, Locale>();
  for (const locale of SUPPORTED_LOCALES) {
    index.set(locale.toLowerCase(), locale);
  }
  return index;
}

/**
 * Primary subtag (lowercase) -> canonical supported locale.
 * If multiple supported locales share a primary subtag (e.g. two "en-*"),
 * the first one wins by iteration order of SUPPORTED_LOCALES.
 */
function buildPrimaryIndex(): Map<string, Locale> {
  const index = new Map<string, Locale>();
  for (const locale of SUPPORTED_LOCALES) {
    const primary = locale.toLowerCase().split('-')[0];
    if (!index.has(primary)) {
      index.set(primary, locale);
    }
  }
  return index;
}

const FULL_TAG_INDEX = buildFullTagIndex();
const PRIMARY_INDEX = buildPrimaryIndex();

function parseQ(param: string): number {
  const match = param.match(/^q\s*=\s*(.*)$/i);
  if (!match) return 1;
  const value = parseFloat(match[1]);
  if (Number.isNaN(value)) return 1;
  if (value < 0) return 0;
  if (value > 1) return 1;
  return value;
}

function parseAcceptLanguage(header: string): ParsedCandidate[] {
  const candidates: ParsedCandidate[] = [];
  const parts = header.split(',');
  for (let i = 0; i < parts.length; i++) {
    const raw = parts[i].trim();
    if (!raw) continue;

    const segments = raw.split(';').map((s) => s.trim()).filter(Boolean);
    if (segments.length === 0) continue;

    const tag = segments[0].toLowerCase();
    if (!tag || tag === '*') continue;

    let q = 1;
    for (let j = 1; j < segments.length; j++) {
      if (/^q\s*=/i.test(segments[j])) {
        q = parseQ(segments[j]);
      }
    }

    if (q === 0) continue;

    const primary = tag.split('-')[0];
    candidates.push({ tag, primary, q, order: i });
  }

  // Stable sort: q desc, then original order asc.
  candidates.sort((a, b) => {
    if (b.q !== a.q) return b.q - a.q;
    return a.order - b.order;
  });

  return candidates;
}

export function detectLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;
  const trimmed = acceptLanguage.trim();
  if (!trimmed) return DEFAULT_LOCALE;

  const candidates = parseAcceptLanguage(trimmed);

  for (const candidate of candidates) {
    const fullMatch = FULL_TAG_INDEX.get(candidate.tag);
    if (fullMatch) {
      // Index stores canonical Locale values directly.
      return fullMatch;
    }
    const primaryMatch = PRIMARY_INDEX.get(candidate.primary);
    if (primaryMatch) {
      return primaryMatch;
    }
  }

  return DEFAULT_LOCALE;
}
