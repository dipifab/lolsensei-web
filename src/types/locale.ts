export const SUPPORTED_LOCALES = [
  'en',
  'it',
  'es',
  'fr',
  'de',
  'pt-br',
  'ko',
  'zh-hans',
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export function isValidLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export const NATIVE_NAMES: Readonly<Record<Locale, string>> = Object.freeze({
  en: 'English',
  it: 'Italiano',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  'pt-br': 'Português (Brasil)',
  ko: '한국어',
  'zh-hans': '简体中文',
});
