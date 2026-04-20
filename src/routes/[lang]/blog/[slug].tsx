import { Title, Meta, Link } from '@solidjs/meta';
import { useParams, Navigate, createAsync } from '@solidjs/router';
import { Show } from 'solid-js';
import { HreflangCluster } from '../../../components/seo/HreflangCluster';
import { JsonLd } from '../../../components/seo/JsonLd';
import { Breadcrumbs } from '../../../components/seo/Breadcrumbs';
import { BASE_URL } from '../../../lib/seo/routes';
import { BLOG_LOCALES, canonicalLocale, type BlogLocale } from '../../../lib/i18n/locales';
import { getBlogPost } from '../../../lib/content/query';
import BlogPostPage from '../../../pages/BlogPostPage';

export const route = {
  preload: ({ params }: { params: { lang: string; slug: string } }) => {
    const lang = canonicalLocale(params.lang) as BlogLocale;
    if ((BLOG_LOCALES as readonly string[]).includes(lang)) {
      return getBlogPost(lang, params.slug);
    }
  },
};

export default function BlogPostRoute() {
  const params = useParams<{ lang: string; slug: string }>();
  const locale = () => canonicalLocale(params.lang);
  const isBlogLocale = () =>
    (BLOG_LOCALES as readonly string[]).includes(locale());
  const post = createAsync(() =>
    isBlogLocale()
      ? getBlogPost(locale() as BlogLocale, params.slug)
      : Promise.resolve(undefined),
  );
  const canonical = () => `${BASE_URL}/${locale()}/blog/${params.slug}`;

  return (
    <Show when={isBlogLocale()} fallback={<Navigate href={`/${locale()}/`} />}>
      <Show when={post()}>
        {(p) => (
          <>
            <Title>{p().title} | LoL Sensei</Title>
            <Meta name="description" content={p().title} />
            <Link rel="canonical" href={canonical()} />
            <HreflangCluster
              path={`blog/${params.slug}`}
              baseUrl={BASE_URL}
              isBlogRoute
            />
            <JsonLd
              data={{
                '@type': 'BlogPosting',
                headline: p().title,
                author: p().author,
                datePublished: p().date,
                url: canonical(),
              }}
            />
            <Breadcrumbs
              items={[
                { name: 'Home', href: `/${locale()}/` },
                { name: 'Blog', href: `/${locale()}/blog` },
                { name: p().title, href: `/${locale()}/blog/${params.slug}` },
              ]}
            />
            <BlogPostPage />
          </>
        )}
      </Show>
    </Show>
  );
}
