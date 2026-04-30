export const SUPPORTED_LOCALES = ['en', 'it', 'es', 'fr', 'de', 'pt-br', 'ko', 'zh-hans'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const BLOG_LOCALES = ['en', 'it'] as const;
export type BlogLocale = (typeof BLOG_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

// Mapping from internal locale code (URL path segment, all lowercase) to the
// BCP-47 hreflang attribute value. The `zh-hans` URL path keeps `zh-Hans` as
// hreflang because BCP-47 mandates Title-Case for script subtags (RFC 5646).
// `pt-br` similarly emits `pt-BR`.
export const HREFLANG_MAP: Record<Locale, string> = {
  'en': 'en',
  'it': 'it',
  'es': 'es',
  'fr': 'fr',
  'de': 'de',
  'pt-br': 'pt-BR',
  'ko': 'ko',
  'zh-hans': 'zh-Hans',
};

export function isSupportedLocale(v: string): v is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(v);
}

/**
 * Normalize locale casing for URL path segment lookup.
 *
 * Path segment convention: lowercase for ALL locales (including `zh-hans`,
 * renamed from `zh-Hans` per WP-SEO-AUDIT REQ-SEO-023). For hreflang attribute
 * values use {@link HREFLANG_MAP} (e.g. `pt-br` path → `pt-BR` hreflang,
 * `zh-hans` path → `zh-Hans` hreflang).
 *
 * @example
 * canonicalLocale('zh-Hans') // 'zh-hans'
 * canonicalLocale('EN')      // 'en'
 * canonicalLocale('pt-BR')   // 'pt-br'
 */
export function canonicalLocale(input: string): string {
  return input.toLowerCase();
}
