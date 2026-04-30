import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import HowItWorks from '../../components/HowItWorks';
import FeaturesBento from '../../components/FeaturesBento';
import ComparisonGrid from '../../components/ComparisonGrid';
import Pricing from '../../components/Pricing';
import Download from '../../components/Download';
import TrustBadges from '../../components/TrustBadges';
import FAQ from '../../components/FAQ';
import Changelog from '../../components/Changelog';
import Footer from '../../components/Footer';
import MobileStickyCta from '../../components/MobileStickyCta';
import { useI18n } from '../../i18n';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  SoftwareApplicationJsonLd,
} from '../../components/JsonLd';
import { BASE_URL, getRouteSeo } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';
import { getStaticMeta, getOgLocale, OG_SITE_NAME } from '../../lib/seo/meta-resolver';

export default function HomeRoute() {
  const params = useParams<{ lang: string }>();
  const seo = getRouteSeo('home');
  const locale = () => canonicalLocale(params.lang);
  const canonical = () => `${BASE_URL}/${locale()}/`;
  const ogImage = () => (seo ? `${BASE_URL}${seo.ogImage}` : BASE_URL);
  const meta = () => getStaticMeta('home', params.lang);

  const { t } = useI18n();

  return (
    <>
      <Title>{meta().title}</Title>
      <Meta name="description" content={meta().description} />
      <Link rel="canonical" href={canonical()} />
      <Meta property="og:title" content={meta().title} />
      <Meta property="og:description" content={meta().description} />
      <Meta property="og:image" content={ogImage()} />
      <Meta property="og:url" content={canonical()} />
      <Meta name="robots" content="index,follow" />
      <Meta property="og:type" content="website" />
      <Meta property="og:locale" content={getOgLocale(params.lang)} />
      <Meta property="og:site_name" content={OG_SITE_NAME} />
      <Meta name="twitter:card" content="summary_large_image" />
      <HreflangCluster path="" baseUrl={BASE_URL} />
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <SoftwareApplicationJsonLd />
      <a
        href="#hero"
        class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary-container focus:text-on-primary-fixed focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        {t('home.skipToContent')}
      </a>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturesBento />
        <ComparisonGrid />
        <Pricing />
        <Download />
        <TrustBadges />
        <FAQ />
        <Changelog />
      </main>
      <Footer />
      {/* WP-SEO-AUDIT-2026-05 REQ-SEO-019 — sticky mini-CTA mobile, post-hero. */}
      <MobileStickyCta />
    </>
  );
}
