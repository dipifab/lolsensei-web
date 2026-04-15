import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import { BreadcrumbJsonLd } from '../components/JsonLd';
import { useI18n } from '../i18n';
import { usePageMeta } from '../utils/seo';

export default function PricingPage() {
  const { t, locale } = useI18n();
  usePageMeta('pricing', '/pricing');

  return (
    <>
      <Navbar />
      <BreadcrumbJsonLd
        lang={locale()}
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
      </main>
      <Footer />
    </>
  );
}
