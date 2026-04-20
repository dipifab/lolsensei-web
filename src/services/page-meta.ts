import { createEffect, onCleanup } from 'solid-js';
import { useI18n, SUPPORTED_LOCALES } from '../i18n';
import { updateMeta } from '../utils/meta';

const BASE_URL = 'https://www.lolsensei.com';

/**
 * Sets document title, meta description, canonical URL, OG/Twitter tags,
 * and hreflang alternates reactively based on current locale.
 *
 * Must be called inside a component rendered within I18nProvider.
 *
 * Cleanup is idempotent: only links marked with `data-dynamic="hreflang"`
 * (injected by {@link updateMeta}) are removed on unmount, so cleanup from
 * one page cannot strip hreflang links already re-injected by the next
 * page during SPA navigation.
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

  // Clean up only hreflang links we injected. Static/preexisting hreflang
  // links (e.g. from index.html) and links re-injected by another mount
  // before this cleanup runs are preserved.
  // SSR/prerender guard (WP18): `document` non esiste in Node e Solid invoca
  // onCleanup anche a fine render SSR — saltiamo il cleanup DOM lato server.
  onCleanup(() => {
    if (typeof document === 'undefined') return;
    document
      .querySelectorAll('link[hreflang][data-dynamic="hreflang"]')
      .forEach((el) => el.remove());
  });
}
