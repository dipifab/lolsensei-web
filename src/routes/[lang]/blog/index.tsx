import { Title, Meta, Link } from '@solidjs/meta';
import { useParams, Navigate } from '@solidjs/router';
import { Show } from 'solid-js';
import { HreflangCluster } from '../../../components/seo/HreflangCluster';
import { BASE_URL, getRouteSeo } from '../../../lib/seo/routes';
import { BLOG_LOCALES, canonicalLocale, type BlogLocale } from '../../../lib/i18n/locales';
import { getBlogIndex } from '../../../lib/content/query';
import { getStaticMeta } from '../../../lib/seo/meta-resolver';
import BlogPage from '../../../pages/BlogPage';

export const route = {
  preload: ({ params }: { params: { lang: string } }) => {
    const lang = canonicalLocale(params.lang) as BlogLocale;
    if ((BLOG_LOCALES as readonly string[]).includes(lang)) {
      return getBlogIndex(lang);
    }
  },
};

export default function BlogIndexRoute() {
  const params = useParams<{ lang: string }>();
  const seo = getRouteSeo('blog');
  const locale = () => canonicalLocale(params.lang);
  const isBlogLocale = () =>
    (BLOG_LOCALES as readonly string[]).includes(locale());
  const canonical = () => `${BASE_URL}/${locale()}/blog`;
  const ogImage = () => (seo ? `${BASE_URL}${seo.ogImage}` : BASE_URL);
  const meta = () => getStaticMeta('blog', params.lang);

  return (
    <Show when={isBlogLocale()} fallback={<Navigate href={`/${locale()}/`} />}>
      <Title>{meta().title}</Title>
      <Meta name="description" content={meta().description} />
      <Link rel="canonical" href={canonical()} />
      <Meta property="og:title" content={meta().title} />
      <Meta property="og:description" content={meta().description} />
      <Meta property="og:image" content={ogImage()} />
      <Meta property="og:url" content={canonical()} />
      <HreflangCluster path="blog" baseUrl={BASE_URL} isBlogRoute />
      <BlogPage />
    </Show>
  );
}
