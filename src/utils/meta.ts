export function updateMeta(config: {
  title: string;
  description: string;
  canonical: string;
  lang: string;
  alternates?: { lang: string; href: string }[];
}) {
  document.title = config.title;
  document.documentElement.lang = config.lang;

  setMetaTag('name', 'description', config.description);
  setLinkTag('canonical', config.canonical);

  // OG tags
  setMetaTag('property', 'og:title', config.title);
  setMetaTag('property', 'og:description', config.description);
  setMetaTag('property', 'og:url', config.canonical);

  // Twitter tags
  setMetaTag('name', 'twitter:title', config.title);
  setMetaTag('name', 'twitter:description', config.description);

  // Hreflang alternates: remove only dynamically-injected links so we don't
  // clobber anything injected from the static HTML or by other sources.
  document
    .querySelectorAll('link[hreflang][data-dynamic="hreflang"]')
    .forEach((el) => el.remove());
  if (config.alternates) {
    for (const alt of config.alternates) {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = alt.lang;
      link.href = alt.href;
      link.setAttribute('data-dynamic', 'hreflang');
      document.head.appendChild(link);
    }
  }
}

function setMetaTag(
  attr: 'name' | 'property',
  key: string,
  value: string,
) {
  let el = document.querySelector(
    `meta[${attr}="${key}"]`,
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}
