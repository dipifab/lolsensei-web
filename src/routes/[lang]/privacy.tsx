import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import PrivacyPage from '../../pages/PrivacyPage';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { BASE_URL, getRouteSeo } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';

export default function PrivacyRoute() {
  const params = useParams<{ lang: string }>();
  const seo = getRouteSeo('privacy');
  const locale = () => canonicalLocale(params.lang);
  const canonical = () => `${BASE_URL}/${locale()}/privacy`;
  const ogImage = () => (seo ? `${BASE_URL}${seo.ogImage}` : BASE_URL);

  return (
    <>
      <Title>Privacy Policy | LoL Sensei</Title>
      <Meta name="description" content="LoL Sensei privacy policy" />
      <Link rel="canonical" href={canonical()} />
      <Meta property="og:title" content="Privacy Policy | LoL Sensei" />
      <Meta property="og:image" content={ogImage()} />
      <Meta property="og:url" content={canonical()} />
      <HreflangCluster path="privacy" baseUrl={BASE_URL} />
      <PrivacyPage />
    </>
  );
}
