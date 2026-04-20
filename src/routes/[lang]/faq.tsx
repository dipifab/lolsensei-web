import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import FAQPage from '../../pages/FAQPage';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { BASE_URL, getRouteSeo } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';
import { getStaticMeta } from '../../lib/seo/meta-resolver';

// NOTE: FAQPage JSON-LD (schema.org FAQPage) is deferred.
// FAQ_ITEMS in src/data/faq.ts expose only i18n message keys
// (es. "faq.item1.question"), non testo localizzato. Emettere
// quei key come `name`/`text` sarebbe SEO-wise sbagliato.
// Differito — richiede resolver i18n SSR (pending Fase 4/5 wiring).

export default function FAQRoute() {
  const params = useParams<{ lang: string }>();
  const seo = getRouteSeo('faq');
  const locale = () => canonicalLocale(params.lang);
  const canonical = () => `${BASE_URL}/${locale()}/faq`;
  const ogImage = () => (seo ? `${BASE_URL}${seo.ogImage}` : BASE_URL);
  const meta = () => getStaticMeta('faq', params.lang);

  return (
    <>
      <Title>{meta().title}</Title>
      <Meta name="description" content={meta().description} />
      <Link rel="canonical" href={canonical()} />
      <Meta property="og:title" content={meta().title} />
      <Meta property="og:description" content={meta().description} />
      <Meta property="og:image" content={ogImage()} />
      <Meta property="og:url" content={canonical()} />
      <HreflangCluster path="faq" baseUrl={BASE_URL} />
      <FAQPage />
    </>
  );
}
