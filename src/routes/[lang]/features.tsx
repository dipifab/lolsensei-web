import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import FeaturesPage from '../../pages/FeaturesPage';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { BASE_URL, getRouteSeo } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';

export default function FeaturesRoute() {
  const params = useParams<{ lang: string }>();
  const seo = getRouteSeo('features');
  const locale = () => canonicalLocale(params.lang);
  const canonical = () => `${BASE_URL}/${locale()}/features`;
  const ogImage = () => (seo ? `${BASE_URL}${seo.ogImage}` : BASE_URL);

  return (
    <>
      <Title>Features | LoL Sensei</Title>
      <Meta name="description" content="LoL Sensei features overview" />
      <Link rel="canonical" href={canonical()} />
      <Meta property="og:title" content="Features | LoL Sensei" />
      <Meta property="og:image" content={ogImage()} />
      <Meta property="og:url" content={canonical()} />
      <HreflangCluster path="features" baseUrl={BASE_URL} />
      <FeaturesPage />
    </>
  );
}
