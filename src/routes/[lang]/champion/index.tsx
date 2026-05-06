// Stitch: 724478731955543608/721fa2021a384f4193c981c87bcdee0b
// CR-054 (WP35.2) — Route /[lang]/champion (Champion Guides Hub).
//
// SSR landing page that lists every guide present in the build datasets,
// with client-side search + filters.
//
// WP35.1 (rev. DEC-7) — esteso da EN+IT a tutte le 8 lingue del sito. Le
// 6 lingue aggiuntive vedono solo le guide effettivamente tradotte (oggi:
// solo Lux mid). Mano mano che il rollout content procede, l'hub si popola.
//
// SEO: Title + Meta + canonical + hreflang dinamici + JSON-LD CollectionPage
// con mainEntity Article array (solo guide nella lingua corrente, no fallback).
// Sitemap entry emessa da `scripts/generate-sitemap.mjs`.

import { Show, createMemo } from 'solid-js';
import { Navigate, useParams } from '@solidjs/router';
import { Title, Meta, Link } from '@solidjs/meta';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import ChampionGuidesHub from '../../../components/champion/ChampionGuidesHub';
import { BASE_URL } from '../../../lib/seo/routes';
import { useI18n } from '../../../i18n';
import { getHubIndex } from '../../../lib/champion/discovery';
import {
  isSupportedLocale,
  SUPPORTED_LOCALES,
  HREFLANG_MAP,
  type Locale,
} from '../../../lib/i18n/locales';

type HubLang = Locale;

function isHubLang(v: string): v is HubLang {
  return isSupportedLocale(v);
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
  // pointing at each guide ACTUALLY published in the user's locale (no
  // fallback to EN: l'hub deve riflettere solo le guide tradotte nella
  // lingua corrente per coerenza UX e SEO).
  const jsonLd = createMemo(() => {
    const entries = getHubIndex();
    const items = entries
      .map((e, idx) => {
        const data = e.locales[props.lang];
        if (!data) return null;
        return {
          '@type': 'ListItem',
          position: idx + 1,
          url: `${BASE_URL}/${props.lang}/champion/${e.champion}/${e.role}/guide`,
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
      {SUPPORTED_LOCALES.map((l) => (
        <Link
          rel="alternate"
          hreflang={HREFLANG_MAP[l] ?? l}
          href={`${BASE_URL}/${l}/champion`}
        />
      ))}
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
        <ChampionGuidesHub lang={props.lang} />
      </main>
      <Footer />
    </>
  );
}
