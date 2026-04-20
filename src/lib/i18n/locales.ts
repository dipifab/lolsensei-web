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

export function canonicalLocale(input: string): string {
  const lower = input.toLowerCase();
  if (lower === 'zh-hans') return 'zh-Hans';
  return lower;
}
