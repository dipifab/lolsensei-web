import type { JSX } from 'solid-js';
import {
  BASE_URL,
  buildBlogPosting,
  buildFAQPage,
  buildHowTo,
  ORG,
  SITE,
  SOFTWARE,
} from '../lib/jsonld-data';
import type { FAQItem } from '../data/types';
import type { BlogPost } from '../data/blog/types';

interface BreadcrumbItem {
  name: string;
  path: string;
}

function JsonLdScript(props: { data: Record<string, unknown> }): JSX.Element {
  return (
    <script type="application/ld+json" innerHTML={JSON.stringify(props.data)} />
  );
}

export function OrganizationJsonLd(): JSX.Element {
  return <JsonLdScript data={{ '@context': 'https://schema.org', ...ORG }} />;
}

export function WebSiteJsonLd(): JSX.Element {
  return <JsonLdScript data={{ '@context': 'https://schema.org', ...SITE }} />;
}

export function SoftwareApplicationJsonLd(): JSX.Element {
  return <JsonLdScript data={{ '@context': 'https://schema.org', ...SOFTWARE }} />;
}

export function FAQPageJsonLd(props: {
  items: FAQItem[];
  t: (key: string) => string;
}): JSX.Element {
  const data = () => {
    if (!props.items || props.items.length === 0) return null;
    return buildFAQPage(props.items, props.t);
  };
  return (
    <>
      {(() => {
        const d = data();
        return d ? <JsonLdScript data={d as unknown as Record<string, unknown>} /> : null;
      })()}
    </>
  );
}

export function HowToJsonLd(props: { post: BlogPost; locale: string }): JSX.Element {
  const data = () => {
    if (!props.post?.howToSteps || props.post.howToSteps.length === 0) return null;
    return buildHowTo(props.post, props.locale);
  };
  return (
    <>
      {(() => {
        const d = data();
        return d ? <JsonLdScript data={d as unknown as Record<string, unknown>} /> : null;
      })()}
    </>
  );
}

export function BlogPostingJsonLd(props: { post: BlogPost; locale: string }): JSX.Element {
  const data = () => {
    if (!props.post) return null;
    return buildBlogPosting(props.post, props.locale);
  };
  return (
    <>
      {(() => {
        const d = data();
        return d ? <JsonLdScript data={d as unknown as Record<string, unknown>} /> : null;
      })()}
    </>
  );
}

export function ItemListJsonLd(props: { items: { name: string; url: string }[] }): JSX.Element {
  const data = () => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: props.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  });

  return <script type="application/ld+json" innerHTML={JSON.stringify(data())} />;
}

export function BreadcrumbJsonLd(props: { lang: string; items: BreadcrumbItem[] }): JSX.Element {
  const data = () => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: props.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}/${props.lang}${item.path}`,
    })),
  });

  return <script type="application/ld+json" innerHTML={JSON.stringify(data())} />;
}
