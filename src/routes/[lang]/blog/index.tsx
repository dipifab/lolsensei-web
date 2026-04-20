import { For, Show } from 'solid-js';
import { A, Navigate, useParams, createAsync } from '@solidjs/router';
import { Title, Meta, Link } from '@solidjs/meta';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { BreadcrumbJsonLd, ItemListJsonLd } from '../../../components/JsonLd';
import Icon from '../../../components/Icon';
import { useI18n } from '../../../i18n';
import { HreflangCluster } from '../../../components/seo/HreflangCluster';
import { BASE_URL, getRouteSeo } from '../../../lib/seo/routes';
import { BLOG_LOCALES, canonicalLocale, type BlogLocale } from '../../../lib/i18n/locales';
import { getBlogIndex } from '../../../lib/content/query';
import { getStaticMeta } from '../../../lib/seo/meta-resolver';

const localeMap: Record<string, string> = {
  en: 'en-US',
  it: 'it-IT',
  ko: 'ko-KR',
  zh: 'zh-CN',
  'pt-br': 'pt-BR',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
};

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

  const { t, locale: i18nLocale } = useI18n();

  const posts = createAsync(async () => {
    const lang = locale() as BlogLocale;
    if ((BLOG_LOCALES as readonly string[]).includes(lang)) {
      return getBlogIndex(lang);
    }
    return [];
  });

  const localizedHref = (path: string) => `/${i18nLocale()}${path}`;

  const breadcrumbItems = () => [
    { label: t('breadcrumbs.home'), href: localizedHref('/') },
    { label: t('nav.blog') },
  ];

  const formatDate = (iso: string) => {
    const date = new Date(iso);
    return date.toLocaleDateString(localeMap[i18nLocale()] || 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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
      <Navbar />
      <BreadcrumbJsonLd
        lang={i18nLocale()}
        items={[
          { name: t('breadcrumbs.home'), path: '/' },
          { name: t('nav.blog'), path: '/blog' },
        ]}
      />
      <Show when={posts()}>
        {(loadedPosts) => (
          <ItemListJsonLd
            items={loadedPosts().map((post) => ({
              name: post.title,
              url: `https://www.lolsensei.com/${i18nLocale()}/blog/${post.slug}`,
            }))}
          />
        )}
      </Show>
      <Breadcrumbs items={breadcrumbItems()} />

      <main class="max-w-7xl mx-auto px-8 pb-24">
        {/* Hero */}
        <header class="mb-16">
          <span class="inline-block py-1 px-3 rounded-sm bg-tertiary-container/10 text-tertiary text-xs font-bold tracking-[0.2em] uppercase mb-6">
            {t('nav.blog')}
          </span>
          <h1 class="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface leading-none mb-6">
            {t('blog.title')}
          </h1>
          <p class="text-on-surface-variant text-lg max-w-xl leading-relaxed">
            {t('blog.subtitle')}
          </p>
        </header>

        {/* Post Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <For each={posts() ?? []}>
            {(post) => (
              <A
                href={localizedHref(`/blog/${post.slug}`)}
                class="glass-panel rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group flex flex-col overflow-hidden"
              >
                <div class="p-8 flex flex-col flex-1">
                  {/* Tags */}
                  <div class="flex flex-wrap gap-2 mb-4">
                    <For each={post.tags}>
                      {(tag) => (
                        <span class="text-[10px] font-bold tracking-widest uppercase text-primary-container bg-primary-container/10 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      )}
                    </For>
                  </div>

                  {/* Title */}
                  <h2 class="text-xl font-headline font-extrabold text-on-surface group-hover:text-primary-container transition-colors mb-3 leading-tight">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p class="text-on-surface-variant/80 text-sm leading-relaxed flex-1 mb-6">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div class="flex items-center justify-between text-xs text-on-surface-variant/60">
                    <time datetime={post.date}>{formatDate(post.date)}</time>
                    <span class="flex items-center gap-1">
                      <Icon name="schedule" class="w-3.5 h-3.5" />
                      {post.readingTime} {t('blog.min')}
                    </span>
                  </div>
                </div>
              </A>
            )}
          </For>
        </div>
      </main>

      <Footer />
    </Show>
  );
}
