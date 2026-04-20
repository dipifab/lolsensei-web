import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import Navbar from '../../components/Navbar';
import Pricing from '../../components/Pricing';
import VATDisclosure from '../../components/VATDisclosure';
import Footer from '../../components/Footer';
import { BreadcrumbJsonLd } from '../../components/JsonLd';
import { useI18n } from '../../i18n';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { BASE_URL, getRouteSeo } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';
import { getStaticMeta } from '../../lib/seo/meta-resolver';

export default function PricingRoute() {
  const params = useParams<{ lang: string }>();
  const seo = getRouteSeo('pricing');
  const locale = () => canonicalLocale(params.lang);
  const canonical = () => `${BASE_URL}/${locale()}/pricing`;
  const ogImage = () => (seo ? `${BASE_URL}${seo.ogImage}` : BASE_URL);
  const meta = () => getStaticMeta('pricing', params.lang);

  const { t, locale: i18nLocale } = useI18n();

  return (
    <>
      <Title>{meta().title}</Title>
      <Meta name="description" content={meta().description} />
      <Link rel="canonical" href={canonical()} />
      <Meta property="og:title" content={meta().title} />
      <Meta property="og:description" content={meta().description} />
      <Meta property="og:image" content={ogImage()} />
      <Meta property="og:url" content={canonical()} />
      <HreflangCluster path="pricing" baseUrl={BASE_URL} />
      <Navbar />
      <BreadcrumbJsonLd
        lang={i18nLocale()}
        items={[
          { name: t('breadcrumbs.home'), path: '/' },
          { name: t('nav.pricing'), path: '/pricing' },
        ]}
      />
      <main>
        <div class="max-w-7xl mx-auto px-8 pt-32 pb-4 text-center">
          <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight font-headline text-on-surface leading-none">
            {t('pricing.pricingPage.title')} <span class="text-primary-container">{t('pricing.pricingPage.titleHighlight')}</span>
          </h1>
        </div>
        <Pricing />
        <div class="max-w-4xl mx-auto px-8 pb-16">
          <VATDisclosure />
        </div>
      </main>
      <Footer />
    </>
  );
}
