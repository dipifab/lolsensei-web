import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import CommunityPage from '../../pages/CommunityPage';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { BASE_URL, getRouteSeo } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';

export default function CommunityRoute() {
  const params = useParams<{ lang: string }>();
  const seo = getRouteSeo('community');
  const locale = () => canonicalLocale(params.lang);
  const canonical = () => `${BASE_URL}/${locale()}/community`;
  const ogImage = () => (seo ? `${BASE_URL}${seo.ogImage}` : BASE_URL);

  return (
    <>
      <Title>Community | LoL Sensei</Title>
      <Meta name="description" content="Join the LoL Sensei community" />
      <Link rel="canonical" href={canonical()} />
      <Meta property="og:title" content="Community | LoL Sensei" />
      <Meta property="og:image" content={ogImage()} />
      <Meta property="og:url" content={canonical()} />
      <HreflangCluster path="community" baseUrl={BASE_URL} />
      <CommunityPage />
    </>
  );
}
