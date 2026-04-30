// scripts/locales.mjs
//
// Fonte di verità duplicata per script Node che non possono importare .ts.
// Mantenere ALLINEATO manualmente a src/lib/i18n/locales.ts.
// In caso di divergenza, src/lib/i18n/locales.ts è la fonte autoritativa.

export const SUPPORTED_LOCALES = [
  'en', 'it', 'es', 'fr', 'de', 'pt-br', 'ko', 'zh-hans',
];

export const BLOG_LOCALES = ['en', 'it'];

export const DEFAULT_LOCALE = 'en';

// BCP-47 casing: path segment è lowercase per tutti i locale (REQ-SEO-023 ha
// rinominato il segmento `zh-Hans` in `zh-hans`); l'attributo hreflang HTML/
// sitemap usa invece il casing canonico BCP-47 (`pt-BR`, `zh-Hans`).
export const HREFLANG_MAP = {
  'en': 'en',
  'it': 'it',
  'es': 'es',
  'fr': 'fr',
  'de': 'de',
  'pt-br': 'pt-BR',
  'ko': 'ko',
  'zh-hans': 'zh-Hans',
};
