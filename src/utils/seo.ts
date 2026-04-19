import { createEffect, onCleanup } from 'solid-js';
import { useI18n, SUPPORTED_LOCALES } from '../i18n';
import { updateMeta } from './meta';

const BASE_URL = 'https://www.lolsensei.com';

/**
 * Sets document title, meta description, canonical URL, OG/Twitter tags,
 * and hreflang alternates reactively based on current locale.
 *
 * Must be called inside a component rendered within I18nProvider.
 */
export function usePageMeta(pageKey: string, path: string) {
  const { t, locale } = useI18n();

  createEffect(() => {
    const lang = locale();
    const title = t(`meta.${pageKey}.title`);
    const description = t(`meta.${pageKey}.description`);
    const canonical = `${BASE_URL}/${lang}${path}`;

    const alternates: { lang: string; href: string }[] = SUPPORTED_LOCALES.map((l) => ({
      lang: l,
      href: `${BASE_URL}/${l}${path}`,
    }));
    // x-default points to English
    alternates.push({ lang: 'x-default', href: `${BASE_URL}/en${path}` });

    updateMeta({ title, description, canonical, lang, alternates });
  });

  // Clean up hreflang links when component unmounts
  onCleanup(() => {
    document.querySelectorAll('link[hreflang]').forEach((el) => el.remove());
  });
}
