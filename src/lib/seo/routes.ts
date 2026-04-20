export const BASE_URL = 'https://www.lolsensei.com';

export type JsonLdType =
  | 'Organization'
  | 'WebSite'
  | 'SoftwareApplication'
  | 'FAQPage'
  | 'BlogPosting'
  | 'BreadcrumbList';

export type RouteSeo = {
  key: string;              // identifier (e.g. 'home', 'pricing')
  canonicalPath: string;    // path WITHOUT locale prefix, e.g. '' for home, 'pricing'
  titleKey: string;         // i18n key, e.g. 'seo.home.title'
  descKey: string;          // i18n key
  ogImage: string;          // absolute URL or path-from-root
  jsonLdTypes: JsonLdType[];
  isBlogRoute?: boolean;
};

export const ROUTE_SEO: Record<string, RouteSeo> = {
  home: {
    key: 'home',
    canonicalPath: '',
    titleKey: 'seo.home.title',
    descKey: 'seo.home.description',
    ogImage: '/og/home.png',
    jsonLdTypes: ['Organization', 'WebSite', 'SoftwareApplication'],
  },
  pricing: {
    key: 'pricing',
    canonicalPath: 'pricing',
    titleKey: 'seo.pricing.title',
    descKey: 'seo.pricing.description',
    ogImage: '/og/pricing.png',
    jsonLdTypes: ['BreadcrumbList'],
  },
  faq: {
    key: 'faq',
    canonicalPath: 'faq',
    titleKey: 'seo.faq.title',
    descKey: 'seo.faq.description',
    ogImage: '/og/faq.png',
    jsonLdTypes: ['FAQPage', 'BreadcrumbList'],
  },
  privacy: {
    key: 'privacy',
    canonicalPath: 'privacy',
    titleKey: 'seo.privacy.title',
    descKey: 'seo.privacy.description',
    ogImage: '/og/default.png',
    jsonLdTypes: ['BreadcrumbList'],
  },
  terms: {
    key: 'terms',
    canonicalPath: 'terms',
    titleKey: 'seo.terms.title',
    descKey: 'seo.terms.description',
    ogImage: '/og/default.png',
    jsonLdTypes: ['BreadcrumbList'],
  },
  contact: {
    key: 'contact',
    canonicalPath: 'contact',
    titleKey: 'seo.contact.title',
    descKey: 'seo.contact.description',
    ogImage: '/og/default.png',
    jsonLdTypes: ['BreadcrumbList'],
  },
  features: {
    key: 'features',
    canonicalPath: 'features',
    titleKey: 'seo.features.title',
    descKey: 'seo.features.description',
    ogImage: '/og/features.png',
    jsonLdTypes: ['SoftwareApplication', 'BreadcrumbList'],
  },
  community: {
    key: 'community',
    canonicalPath: 'community',
    titleKey: 'seo.community.title',
    descKey: 'seo.community.description',
    ogImage: '/og/community.png',
    jsonLdTypes: ['BreadcrumbList'],
  },
  about: {
    key: 'about',
    canonicalPath: 'about',
    titleKey: 'seo.about.title',
    descKey: 'seo.about.description',
    ogImage: '/og/default.png',
    jsonLdTypes: ['Organization', 'BreadcrumbList'],
  },
  blog: {
    key: 'blog',
    canonicalPath: 'blog',
    titleKey: 'seo.blog.title',
    descKey: 'seo.blog.description',
    ogImage: '/og/blog.png',
    jsonLdTypes: ['BreadcrumbList'],
    isBlogRoute: true,
  },
};

export function getRouteSeo(key: string): RouteSeo | undefined {
  return ROUTE_SEO[key];
}
