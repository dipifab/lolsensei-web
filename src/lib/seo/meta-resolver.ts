/**
 * Static, SSR-safe meta (title/description) resolver for prerendered HTML.
 *
 * Background: the runtime `useI18n()` provider resolves non-`en` locales via
 * dynamic `import()` + `createEffect`, which during SSR only emits the English
 * fallback on first render. Route wrappers that rely on it for `<Title>`/
 * `<Meta>` end up with identical English meta tags in every prerendered locale
 * HTML — a SEO regression (duplicate titles across 74 pages).
 *
 * Fix: statically import all 8 locale message modules and expose a synchronous
 * lookup by page key + locale. The i18n message files already contain
 * `meta.<page>.title` and `meta.<page>.description` for every page × every
 * locale, so we reuse them as the single source of truth — no new strings,
 * no translation duplication.
 *
 * Used by route wrappers in `src/routes/[lang]/*.tsx`.
 */
import en from '../../i18n/en';
import it from '../../i18n/it';
import es from '../../i18n/es';
import fr from '../../i18n/fr';
import de from '../../i18n/de';
import ptBr from '../../i18n/pt-br';
import ko from '../../i18n/ko';
import zhHans from '../../i18n/zh-hans';
import { canonicalLocale } from '../i18n/locales';

type MessageMap = Record<string, string>;

const MESSAGES: Record<string, MessageMap> = {
  en: en as unknown as MessageMap,
  it: it as unknown as MessageMap,
  es: es as unknown as MessageMap,
  fr: fr as unknown as MessageMap,
  de: de as unknown as MessageMap,
  'pt-br': ptBr as unknown as MessageMap,
  ko: ko as unknown as MessageMap,
  'zh-hans': zhHans as unknown as MessageMap,
};

export type PageMeta = {
  title: string;
  description: string;
};

/**
 * Resolve `{ title, description }` for a given page key and locale, with
 * English fallback. Safe to call in SSR (no reactive provider dependency).
 *
 * @param pageKey  identifier matching `meta.<pageKey>.title` in the i18n files
 *                 (e.g. `'home'`, `'pricing'`, `'blog'`).
 * @param rawLocale  locale path segment (may be any casing — normalized
 *                   internally via {@link canonicalLocale}).
 */
export function getStaticMeta(pageKey: string, rawLocale: string): PageMeta {
  const locale = canonicalLocale(rawLocale);
  const messages = MESSAGES[locale] ?? MESSAGES.en;
  const fallback = MESSAGES.en;

  const titleKey = `meta.${pageKey}.title`;
  const descKey = `meta.${pageKey}.description`;

  return {
    title: messages[titleKey] ?? fallback[titleKey] ?? 'LoL Sensei',
    description:
      messages[descKey] ??
      fallback[descKey] ??
      '',
  };
}


// REQ-SEO-024 — og:locale and og:site_name helpers used by SSR route head tags.
// Map our internal locale codes to BCP-47 region-suffixed forms expected by
// Open Graph crawlers (Facebook spec uses ll_CC).
const OG_LOCALE_MAP: Record<string, string> = {
  en: 'en_US',
  it: 'it_IT',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
  'pt-br': 'pt_BR',
  ko: 'ko_KR',
  'zh-Hans': 'zh_CN',
};

/** Resolve `og:locale` value for any incoming locale path segment casing. */
export function getOgLocale(rawLocale: string): string {
  const locale = canonicalLocale(rawLocale);
  return OG_LOCALE_MAP[locale] ?? OG_LOCALE_MAP.en;
}

/** Constant `og:site_name` — never localized (brand name). */
export const OG_SITE_NAME = 'LoL Sensei';
