import type { Locale } from '../types/locale';

const LOCALE_TO_BCP47: Record<Locale, string> = {
  en: 'en',
  it: 'it',
  es: 'es',
  fr: 'fr',
  de: 'de',
  'pt-br': 'pt-BR',
  ko: 'ko',
  'zh-Hans': 'zh-Hans',
};

export function toBcp47(locale: Locale): string {
  return LOCALE_TO_BCP47[locale];
}

export function formatCurrency(amount: number, locale: Locale, currency: 'EUR' = 'EUR'): string {
  if (!Number.isFinite(amount)) {
    if (import.meta.env.DEV) {
      console.warn('[intl] formatCurrency received non-finite amount', amount);
    }
    return '';
  }
  return new Intl.NumberFormat(toBcp47(locale), {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}
