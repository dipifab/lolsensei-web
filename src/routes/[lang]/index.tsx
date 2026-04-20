import { Title, Meta, Link } from '@solidjs/meta';
import { useParams } from '@solidjs/router';
import Home from '../../pages/Home';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { JsonLd } from '../../components/seo/JsonLd';
import { BASE_URL, getRouteSeo } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';
import { getStaticMeta } from '../../lib/seo/meta-resolver';

export default function HomeRoute() {
  const params = useParams<{ lang: string }>();
  const seo = getRouteSeo('home');
  const locale = () => canonicalLocale(params.lang);
  const canonical = () => `${BASE_URL}/${locale()}/`;
  const ogImage = () => (seo ? `${BASE_URL}${seo.ogImage}` : BASE_URL);
  const meta = () => getStaticMeta('home', params.lang);

  return (
    <>
      <Title>{meta().title}</Title>
      <Meta name="description" content={meta().description} />
      <Link rel="canonical" href={canonical()} />
      <Meta property="og:title" content={meta().title} />
      <Meta property="og:description" content={meta().description} />
      <Meta property="og:image" content={ogImage()} />
      <Meta property="og:url" content={canonical()} />
      <HreflangCluster path="" baseUrl={BASE_URL} />
      <JsonLd data={{ '@type': 'Organization', name: 'LoL Sensei', url: BASE_URL }} />
      <JsonLd data={{ '@type': 'WebSite', url: BASE_URL, name: 'LoL Sensei' }} />
      <JsonLd data={{ '@type': 'SoftwareApplication', name: 'LoL Sensei', applicationCategory: 'GameApplication' }} />
      <Home />
    </>
  );
}
