import { Title, Meta, Link } from '@solidjs/meta';
import { useParams, Navigate } from '@solidjs/router';
import { Show } from 'solid-js';
import { HreflangCluster } from '../../../components/seo/HreflangCluster';
import { BASE_URL } from '../../../lib/seo/routes';
import { BLOG_LOCALES, canonicalLocale, type BlogLocale } from '../../../lib/i18n/locales';
import { getBlogIndex } from '../../../lib/content/query';
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
  const locale = () => canonicalLocale(params.lang);
  const isBlogLocale = () =>
    (BLOG_LOCALES as readonly string[]).includes(locale());
  const canonical = () => `${BASE_URL}/${locale()}/blog`;

  return (
    <Show when={isBlogLocale()} fallback={<Navigate href={`/${locale()}/`} />}>
      <Title>Blog | LoL Sensei</Title>
      <Meta name="description" content="LoL Sensei blog" />
      <Link rel="canonical" href={canonical()} />
      <HreflangCluster path="blog" baseUrl={BASE_URL} isBlogRoute />
      <BlogPage />
    </Show>
  );
}
