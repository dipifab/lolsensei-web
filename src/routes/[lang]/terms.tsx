import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import TermsPage from '../../pages/TermsPage';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { BASE_URL, getRouteSeo } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';

export default function TermsRoute() {
  const params = useParams<{ lang: string }>();
  const seo = getRouteSeo('terms');
  const locale = () => canonicalLocale(params.lang);
  const canonical = () => `${BASE_URL}/${locale()}/terms`;
  const ogImage = () => (seo ? `${BASE_URL}${seo.ogImage}` : BASE_URL);

  return (
    <>
      <Title>Terms of Service | LoL Sensei</Title>
      <Meta name="description" content="LoL Sensei terms of service" />
      <Link rel="canonical" href={canonical()} />
      <Meta property="og:title" content="Terms of Service | LoL Sensei" />
      <Meta property="og:image" content={ogImage()} />
      <Meta property="og:url" content={canonical()} />
      <HreflangCluster path="terms" baseUrl={BASE_URL} />
      <TermsPage />
    </>
  );
}
