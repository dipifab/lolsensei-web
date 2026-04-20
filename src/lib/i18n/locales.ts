export const SUPPORTED_LOCALES = ['en', 'it', 'es', 'fr', 'de', 'pt-br', 'ko', 'zh-Hans'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const BLOG_LOCALES = ['en', 'it'] as const;
export type BlogLocale = (typeof BLOG_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const HREFLANG_MAP: Record<Locale, string> = {
  'en': 'en',
  'it': 'it',
  'es': 'es',
  'fr': 'fr',
  'de': 'de',
  'pt-br': 'pt-BR',
  'ko': 'ko',
  'zh-Hans': 'zh-Hans',
};

export function isSupportedLocale(v: string): v is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(v);
}

/**
 * Normalize locale casing for URL path segment lookup.
 *
 * Path segment convention: lowercase for all locales EXCEPT `zh-Hans` which
 * preserves BCP-47 script-subtag capitalization. For hreflang attributes use
 * {@link HREFLANG_MAP} (e.g. `pt-br` path → `pt-BR` hreflang, `zh-Hans`
 * unchanged).
 *
 * @example
 * canonicalLocale('zh-hans') // 'zh-Hans'
 * canonicalLocale('EN')      // 'en'
 * canonicalLocale('pt-BR')   // 'pt-br'
 */
export function canonicalLocale(input: string): string {
  const lower = input.toLowerCase();
  if (lower === 'zh-hans') return 'zh-Hans';
  return lower;
}
