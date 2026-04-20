import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import FAQPage from '../../pages/FAQPage';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { BASE_URL, getRouteSeo } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';

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

  return (
    <>
      <Title>FAQ | LoL Sensei</Title>
      <Meta name="description" content="Frequently asked questions about LoL Sensei" />
      <Link rel="canonical" href={canonical()} />
      <Meta property="og:title" content="FAQ | LoL Sensei" />
      <Meta property="og:image" content={ogImage()} />
      <Meta property="og:url" content={canonical()} />
      <HreflangCluster path="faq" baseUrl={BASE_URL} />
      <FAQPage />
    </>
  );
}
