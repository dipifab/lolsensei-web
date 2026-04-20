import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import AboutPage from '../../pages/AboutPage';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { BASE_URL, getRouteSeo } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';

export default function AboutRoute() {
  const params = useParams<{ lang: string }>();
  const seo = getRouteSeo('about');
  const locale = () => canonicalLocale(params.lang);
  const canonical = () => `${BASE_URL}/${locale()}/about`;
  const ogImage = () => (seo ? `${BASE_URL}${seo.ogImage}` : BASE_URL);

  return (
    <>
      <Title>About | LoL Sensei</Title>
      <Meta name="description" content="About LoL Sensei" />
      <Link rel="canonical" href={canonical()} />
      <Meta property="og:title" content="About | LoL Sensei" />
      <Meta property="og:image" content={ogImage()} />
      <Meta property="og:url" content={canonical()} />
      <HreflangCluster path="about" baseUrl={BASE_URL} />
      <AboutPage />
    </>
  );
}
