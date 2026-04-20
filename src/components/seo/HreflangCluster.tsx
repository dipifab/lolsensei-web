import type { JSX } from 'solid-js';
import { SUPPORTED_LOCALES, BLOG_LOCALES, DEFAULT_LOCALE, HREFLANG_MAP } from '../../lib/i18n/locales';

export type HreflangLink = { hreflang: string; href: string };

function joinUrl(baseUrl: string, locale: string, path: string): string {
  const normalized = path.replace(/^\/+|\/+$/g, '');
  if (normalized === '') return `${baseUrl}/${locale}/`;
  return `${baseUrl}/${locale}/${normalized}`;
}

export function buildHreflangLinks(
  path: string,
  baseUrl: string,
  opts?: { isBlogRoute?: boolean },
): HreflangLink[] {
  const locales = opts?.isBlogRoute ? BLOG_LOCALES : SUPPORTED_LOCALES;
  const links: HreflangLink[] = locales.map((locale) => ({
    hreflang: HREFLANG_MAP[locale] ?? locale,
    href: joinUrl(baseUrl, locale, path),
  }));
  links.push({ hreflang: 'x-default', href: joinUrl(baseUrl, DEFAULT_LOCALE, path) });
  return links;
}

export function HreflangCluster(props: {
  path: string;
  baseUrl: string;
  isBlogRoute?: boolean;
}): JSX.Element {
  const links = buildHreflangLinks(props.path, props.baseUrl, { isBlogRoute: props.isBlogRoute });
  return (
    <>
      {links.map((link) => (
        <link rel="alternate" hreflang={link.hreflang} href={link.href} />
      ))}
    </>
  );
}
