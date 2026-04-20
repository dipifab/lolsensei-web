import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import PricingPage from '../../pages/PricingPage';
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
      <PricingPage />
    </>
  );
}
