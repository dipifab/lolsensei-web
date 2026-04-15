import { For } from 'solid-js';
import { A } from '@solidjs/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { BreadcrumbJsonLd } from '../components/JsonLd';
import { useI18n } from '../i18n';
import { usePageMeta } from '../utils/seo';
import { getBlogPosts } from '../data/blog';

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

export default function BlogPage() {
  const { t, locale } = useI18n();
  usePageMeta('blog', '/blog');

  const localizedHref = (path: string) => `/${locale()}${path}`;

  const posts = () => getBlogPosts(locale());

  const breadcrumbItems = () => [
    { label: t('breadcrumbs.home'), href: localizedHref('/') },
    { label: t('nav.blog') },
  ];

  const formatDate = (iso: string) => {
    const date = new Date(iso);
    return date.toLocaleDateString(localeMap[locale()] || 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Navbar />
      <BreadcrumbJsonLd
        lang={locale()}
        items={[
          { name: t('breadcrumbs.home'), path: '/' },
          { name: t('nav.blog'), path: '/blog' },
        ]}
      />
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
          <For each={posts()}>
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
                      <span class="material-symbols-outlined text-[14px]">schedule</span>
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
    </>
  );
}
