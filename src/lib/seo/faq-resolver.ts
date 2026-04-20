/**
 * Static, SSR-safe FAQ entries resolver for prerendered FAQPage JSON-LD.
 *
 * Background: `FAQ_ITEMS` in `src/data/faq.ts` expose only i18n message keys
 * (e.g. `faq.item1.question`) — not localized text. Emitting those keys as
 * `name`/`text` in schema.org FAQPage would be SEO-wise broken.
 *
 * Fix: mirror the `meta-resolver` pattern — statically import all 8 locale
 * message modules and expose a synchronous `getStaticFaqEntries(locale)` that
 * resolves each `questionKey`/`answerKey` into the localized string at SSR
 * time. The same message files that already power the runtime `useI18n()`
 * provider are reused, so no translation duplication.
 *
 * Used by `src/routes/[lang]/faq.tsx` to emit `<script type="application/ld+json">`
 * with a localized `FAQPage` body in every prerendered `{en,it,...}/faq`
 * HTML file.
 */
import { FAQ_ITEMS } from '../../data/faq';
import en from '../../i18n/en';
import it from '../../i18n/it';
import es from '../../i18n/es';
import fr from '../../i18n/fr';
import de from '../../i18n/de';
import ptBr from '../../i18n/pt-br';
import ko from '../../i18n/ko';
import zhHans from '../../i18n/zh-Hans';
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
  'zh-Hans': zhHans as unknown as MessageMap,
};

export type FaqEntry = {
  question: string;
  answer: string;
};

/**
 * Resolve the localized `{ question, answer }` pairs for every entry in
 * `FAQ_ITEMS`, in declaration order, for the requested locale.
 *
 * Falls back to English (`en`) when:
 *   - the locale is not in `MESSAGES` (unknown / unsupported);
 *   - a specific key is missing from the target locale (per-key fallback).
 *
 * Safe to call in SSR: no reactive provider dependency, all lookups are
 * synchronous against statically imported message modules.
 *
 * @param rawLocale  locale path segment (any casing — normalized via
 *                   {@link canonicalLocale}).
 */
export function getStaticFaqEntries(rawLocale: string): FaqEntry[] {
  const locale = canonicalLocale(rawLocale);
  const messages = MESSAGES[locale] ?? MESSAGES.en;
  const fallback = MESSAGES.en;

  return FAQ_ITEMS.map((item) => ({
    question:
      messages[item.questionKey] ??
      fallback[item.questionKey] ??
      item.questionKey,
    answer:
      messages[item.answerKey] ??
      fallback[item.answerKey] ??
      item.answerKey,
  }));
}
