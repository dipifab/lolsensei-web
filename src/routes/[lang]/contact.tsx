import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import ContactPage from '../../pages/ContactPage';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { BASE_URL, getRouteSeo } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';

export default function ContactRoute() {
  const params = useParams<{ lang: string }>();
  const seo = getRouteSeo('contact');
  const locale = () => canonicalLocale(params.lang);
  const canonical = () => `${BASE_URL}/${locale()}/contact`;
  const ogImage = () => (seo ? `${BASE_URL}${seo.ogImage}` : BASE_URL);

  return (
    <>
      <Title>Contact | LoL Sensei</Title>
      <Meta name="description" content="Contact LoL Sensei" />
      <Link rel="canonical" href={canonical()} />
      <Meta property="og:title" content="Contact | LoL Sensei" />
      <Meta property="og:image" content={ogImage()} />
      <Meta property="og:url" content={canonical()} />
      <HreflangCluster path="contact" baseUrl={BASE_URL} />
      <ContactPage />
    </>
  );
}
