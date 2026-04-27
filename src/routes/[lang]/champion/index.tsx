// Stitch: 724478731955543608/721fa2021a384f4193c981c87bcdee0b
// CR-054 (WP35.2) — Route /[lang]/champion (Champion Guides Hub).
//
// SSR landing page that lists every guide present in the build datasets,
// with client-side search + filters. Indexable in EN+IT only (DEC-7);
// other locales fall back to the home redirect.
//
// SEO: Title + Meta + canonical + hreflang triplet + JSON-LD CollectionPage
// with mainEntity Article array. Sitemap entry is emitted by
// `scripts/generate-sitemap.mjs` (separate task).

import { Show, createMemo } from 'solid-js';
import { Navigate, useParams } from '@solidjs/router';
import { Title, Meta, Link } from '@solidjs/meta';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import ChampionGuidesHub from '../../../components/champion/ChampionGuidesHub';
import { BASE_URL } from '../../../lib/seo/routes';
import { useI18n } from '../../../i18n';
import { getHubIndex, pickLocale } from '../../../lib/champion/discovery';
import top50Data from '../../../../content/_meta/top-50-champions.json';

const HUB_LANGS = ['en', 'it'] as const;
type HubLang = (typeof HUB_LANGS)[number];

interface Top50Entry {
  slug: string;
  primary_role: string;
}
const TOP50_COUNT: number = (top50Data as { champions: Top50Entry[] }).champions
  .length;

function isHubLang(v: string): v is HubLang {
  return (HUB_LANGS as readonly string[]).includes(v);
}

export default function ChampionHubRoute() {
  const params = useParams<{ lang: string }>();
  const lang = () => params.lang.toLowerCase();
  const isSupported = createMemo(() => isHubLang(lang()));

  const { t } = useI18n();

  return (
    <Show
      when={isSupported()}
      fallback={<Navigate href={`/${lang()}/`} />}
    >
      <HubPage lang={lang() as HubLang} />
    </Show>
  );
}

function HubPage(props: { lang: HubLang }) {
  const { t } = useI18n();
  const canonical = `${BASE_URL}/${props.lang}/champion`;

  const title = t('wp35.hub.meta.title');
  const description = t('wp35.hub.meta.description');

  // CollectionPage JSON-LD with mainEntity = list of Article entries
  // pointing at each guide currently published in the user's locale.
  const jsonLd = createMemo(() => {
    const entries = getHubIndex();
    const items = entries
      .map((e, idx) => {
        const data = pickLocale(e, props.lang);
        if (!data) return null;
        return {
          '@type': 'ListItem',
          position: idx + 1,
          url: `${BASE_URL}/${props.lang}/champion/${e.champion}/guide`,
          name: data.title,
        };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);
    return {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      url: canonical,
      name: title,
      description,
      inLanguage: props.lang,
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: items.length,
        itemListElement: items,
      },
    };
  });

  return (
    <>
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <Meta name="robots" content="index, follow" />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={canonical} />
      <Link rel="canonical" href={canonical} />
      <Link
        rel="alternate"
        hreflang="en"
        href={`${BASE_URL}/en/champion`}
      />
      <Link
        rel="alternate"
        hreflang="it"
        href={`${BASE_URL}/it/champion`}
      />
      <Link
        rel="alternate"
        hreflang="x-default"
        href={`${BASE_URL}/en/champion`}
      />
      <script
        type="application/ld+json"
        // SSR-only string injection; client doesn't need to read this back.
        innerHTML={JSON.stringify(jsonLd())}
      />

      <Navbar />
      <Breadcrumbs
        items={[
          { label: t('breadcrumbs.home'), href: `/${props.lang}/` },
          { label: t('wp35.hub.breadcrumb_label') },
        ]}
      />
      <main>
        <ChampionGuidesHub lang={props.lang} topTargetCount={TOP50_COUNT} />
      </main>
      <Footer />
    </>
  );
}
