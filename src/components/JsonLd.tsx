import type { JSX } from 'solid-js';

const BASE_URL = 'https://www.lolsensei.com';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BlogPostingJsonLdProps {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  url: string;
  readingTime: number;
  tags: string[];
}

function JsonLdScript(props: { data: Record<string, unknown> }): JSX.Element {
  return (
    <script type="application/ld+json" innerHTML={JSON.stringify(props.data)} />
  );
}

export function OrganizationJsonLd(): JSX.Element {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LoL Sensei',
    url: BASE_URL,
    logo: `${BASE_URL}/og-image.png`,
    sameAs: ['https://github.com/dipifab/lolai'],
    description:
      'AI coaching application for League of Legends that helps players learn the game through real-time guidance',
  };

  return <JsonLdScript data={data} />;
}

export function WebSiteJsonLd(): JSX.Element {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LoL Sensei',
    url: BASE_URL,
    inLanguage: ['en', 'it', 'ko', 'zh', 'pt-BR', 'es', 'fr', 'de'],
    description: 'AI coaching for League of Legends',
  };

  return <JsonLdScript data={data} />;
}

export function SoftwareApplicationJsonLd(): JSX.Element {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'LoL Sensei',
    operatingSystem: 'Windows',
    applicationCategory: 'GameApplication',
    offers: [
      {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
        name: 'Free',
      },
      {
        '@type': 'Offer',
        price: '7.99',
        priceCurrency: 'EUR',
        name: 'Pro',
        priceValidUntil: '2027-12-31',
      },
    ],
    description:
      'Real-time AI coaching for League of Legends. Learn champion select, builds, and game strategy.',
    downloadUrl:
      'https://github.com/dipifab/lolai/releases/latest/download/LoLSensei-Setup.exe',
  };

  return <JsonLdScript data={data} />;
}

export function BlogPostingJsonLd(props: BlogPostingJsonLdProps): JSX.Element {
  const data = () => ({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: props.title,
    description: props.description,
    datePublished: props.datePublished,
    author: { '@type': 'Organization', name: props.author },
    publisher: {
      '@type': 'Organization',
      name: 'LoL Sensei',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/og-image.png`,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': props.url },
    wordCount: props.readingTime * 200,
    articleSection: props.tags,
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
