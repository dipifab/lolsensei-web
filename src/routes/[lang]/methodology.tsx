// WP-SEO-AUDIT-2026-05 REQ-SEO-013 — Methodology / Editorial Standards page.
//
// Product-focused (no founder identity per FP-01 memory). Replaces the
// author-bio E-E-A-T pattern with a transparent description of the
// editorial process (patch testing, data sources, update cadence).
//
// SSR head scaffold mirrors `about.tsx` (Title, Meta, Link canonical,
// HreflangCluster). Adds BreadcrumbJsonLd (Home -> Methodology) and an
// `AboutPage` JSON-LD entity that points back to the Organization @id.

import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BreadcrumbJsonLd } from '../../components/JsonLd';
import { useI18n } from '../../i18n';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { BASE_URL, getRouteSeo } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';
import { getStaticMeta, getOgLocale, OG_SITE_NAME } from '../../lib/seo/meta-resolver';
import { ORG } from '../../lib/jsonld-data';

export default function MethodologyRoute() {
  const params = useParams<{ lang: string }>();
  const seo = getRouteSeo('methodology');
  const locale = () => canonicalLocale(params.lang);
  const canonical = () => `${BASE_URL}/${locale()}/methodology`;
  const ogImage = () => (seo ? `${BASE_URL}${seo.ogImage}` : BASE_URL);
  const meta = () => getStaticMeta('methodology', params.lang);

  const { t, locale: i18nLocale } = useI18n();

  // AboutPage schema — describes the page itself; `about` references the
  // Organization @id so crawlers can resolve the entity. Kept inline here
  // because methodology is the only consumer; no need for a shared component.
  const aboutPageJsonLd = () => ({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${canonical()}#aboutpage`,
    url: canonical(),
    name: meta().title,
    description: meta().description,
    inLanguage: locale(),
    isPartOf: { '@id': `${BASE_URL}/#website` },
    about: { '@id': ORG['@id'] },
    publisher: { '@id': ORG['@id'] },
  });

  return (
    <>
      <Title>{meta().title}</Title>
      <Meta name="description" content={meta().description} />
      <Meta name="robots" content="index,follow" />
      <Link rel="canonical" href={canonical()} />
      <Meta property="og:title" content={meta().title} />
      <Meta property="og:description" content={meta().description} />
      <Meta property="og:image" content={ogImage()} />
      <Meta property="og:url" content={canonical()} />
      <Meta property="og:type" content="website" />
      <Meta property="og:locale" content={getOgLocale(params.lang)} />
      <Meta property="og:site_name" content={OG_SITE_NAME} />
      <Meta name="twitter:card" content="summary_large_image" />
      <HreflangCluster path="methodology" baseUrl={BASE_URL} />
      <Navbar />
      <BreadcrumbJsonLd
        lang={i18nLocale()}
        items={[
          { name: t('breadcrumbs.home'), path: '/' },
          { name: t('nav.methodology'), path: '/methodology' },
        ]}
      />
      <script
        type="application/ld+json"
        innerHTML={JSON.stringify(aboutPageJsonLd())}
      />
      <main class="pt-20">
        {/* Hero */}
        <section class="relative py-24 overflow-hidden">
          <div class="max-w-4xl mx-auto px-8 relative z-10">
            <span class="inline-block py-1 px-3 rounded-sm bg-tertiary-container/10 text-tertiary text-xs font-bold tracking-[0.2em] uppercase mb-6">
              {t('methodology.hero.label')}
            </span>
            <h1 class="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-[0.95] text-on-surface mb-8">
              {t('methodology.hero.title')}
            </h1>
            <p class="text-xl text-on-surface-variant/80 max-w-2xl leading-relaxed">
              {t('methodology.hero.subtitle')}
            </p>
          </div>
          <div class="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none bg-gradient-to-l from-primary-container/20 to-transparent" />
        </section>

        {/* Body — 5 sections (patches, sources, cadence, standards, disclaimers) */}
        <section class="pb-24">
          <div class="max-w-3xl mx-auto px-8 space-y-16">
            <article>
              <h2 class="text-2xl md:text-3xl font-headline font-extrabold tracking-tight mb-4 text-on-surface">
                {t('methodology.patches.title')}
              </h2>
              <p class="text-on-surface-variant text-lg leading-relaxed">
                {t('methodology.patches.body')}
              </p>
            </article>

            <article>
              <h2 class="text-2xl md:text-3xl font-headline font-extrabold tracking-tight mb-4 text-on-surface">
                {t('methodology.sources.title')}
              </h2>
              <p class="text-on-surface-variant text-lg leading-relaxed">
                {t('methodology.sources.body')}
              </p>
            </article>

            <article>
              <h2 class="text-2xl md:text-3xl font-headline font-extrabold tracking-tight mb-4 text-on-surface">
                {t('methodology.cadence.title')}
              </h2>
              <p class="text-on-surface-variant text-lg leading-relaxed">
                {t('methodology.cadence.body')}
              </p>
            </article>

            <article>
              <h2 class="text-2xl md:text-3xl font-headline font-extrabold tracking-tight mb-4 text-on-surface">
                {t('methodology.standards.title')}
              </h2>
              <p class="text-on-surface-variant text-lg leading-relaxed">
                {t('methodology.standards.body')}
              </p>
            </article>

            <article>
              <h2 class="text-2xl md:text-3xl font-headline font-extrabold tracking-tight mb-4 text-on-surface">
                {t('methodology.disclaimers.title')}
              </h2>
              <p class="text-on-surface-variant text-lg leading-relaxed">
                {t('methodology.disclaimers.body')}
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
