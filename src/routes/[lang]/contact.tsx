import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BreadcrumbJsonLd } from '../../components/JsonLd';
import Icon from '../../components/Icon';
import { useI18n } from '../../i18n';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { BASE_URL, getRouteSeo } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';
import { getStaticMeta, getOgLocale, OG_SITE_NAME } from '../../lib/seo/meta-resolver';

const SUPPORT_EMAIL = 'support@lolsensei.com';

export default function ContactRoute() {
  const params = useParams<{ lang: string }>();
  const seo = getRouteSeo('contact');
  const locale = () => canonicalLocale(params.lang);
  const canonical = () => `${BASE_URL}/${locale()}/contact`;
  const ogImage = () => (seo ? `${BASE_URL}${seo.ogImage}` : BASE_URL);
  const meta = () => getStaticMeta('contact', params.lang);

  const { t, locale: i18nLocale } = useI18n();

  const mailtoHref = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('LoL Sensei — Contact')}`;

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
      <HreflangCluster path="contact" baseUrl={BASE_URL} />
      <Navbar />
      <BreadcrumbJsonLd
        lang={i18nLocale()}
        items={[
          { name: t('breadcrumbs.home'), path: '/' },
          { name: t('footer.contact'), path: '/contact' },
        ]}
      />
      <main class="pt-20">
        {/* Hero */}
        <section class="relative py-16 md:py-24 overflow-hidden">
          <div class="max-w-4xl mx-auto px-8 text-center relative z-10">
            <h1 class="text-4xl md:text-6xl xl:text-7xl font-headline font-extrabold tracking-tight leading-[1.1] text-on-surface mb-6">
              {t('contact.title')}
            </h1>
            <p class="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              {t('contact.intro')}
            </p>
          </div>
          <div class="absolute inset-x-0 top-0 h-full opacity-10 pointer-events-none bg-gradient-to-b from-primary-container/20 to-transparent" />
        </section>

        {/* Email CTA */}
        <section class="pb-12 md:pb-16">
          <div class="max-w-3xl mx-auto px-8">
            <div class="glass-panel rounded-2xl border border-outline-variant/10 p-8 md:p-12 text-center">
              <div class="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-container/10 text-primary-container">
                <Icon name="mail" class="w-8 h-8" />
              </div>
              <p class="text-xl md:text-2xl font-headline font-bold text-on-surface mb-3">
                {SUPPORT_EMAIL}
              </p>
              <p class="text-on-surface-variant leading-relaxed mb-8 max-w-xl mx-auto">
                {t('contact.form.sla')}
              </p>
              <a
                href={mailtoHref}
                class="gold-gradient text-on-primary-fixed px-10 py-4 rounded-lg font-headline font-extrabold text-lg inline-flex items-center justify-center gap-3 min-h-11 active:scale-95 motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none"
              >
                <Icon name="mail" class="w-6 h-6" />
                {t('contact.form.submit')}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
