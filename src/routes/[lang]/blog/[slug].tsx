import { Show, For } from 'solid-js';
import { A, Navigate, useParams, createAsync } from '@solidjs/router';
import { Title, Meta, Link } from '@solidjs/meta';
import DOMPurify from 'dompurify';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import {
  BreadcrumbJsonLd,
  BlogPostingJsonLd,
  HowToJsonLd,
} from '../../../components/JsonLd';
import Icon from '../../../components/Icon';
import { useI18n } from '../../../i18n';
import { HreflangCluster } from '../../../components/seo/HreflangCluster';
import { BASE_URL } from '../../../lib/seo/routes';
import { BLOG_LOCALES, canonicalLocale, type BlogLocale } from '../../../lib/i18n/locales';
import { getBlogPost, getBlogIndex } from '../../../lib/content/query';
import { NotFoundContent } from '../../../pages/NotFoundPage';

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

const HOWTO_SLUGS = new Set([
  'how-to-climb-ranked-lol',
  'how-to-stop-tilting-lol',
]);

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

  const relatedPosts = createAsync(async () => {
    if (!isBlogLocale()) return [];
    const all = await getBlogIndex(locale() as BlogLocale);
    return all.filter((p) => p.slug !== params.slug).slice(0, 3);
  });

  const canonical = () => `${BASE_URL}/${locale()}/blog/${params.slug}`;

  const { t, locale: i18nLocale } = useI18n();

  const localizedHref = (path: string) => `/${i18nLocale()}${path}`;

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
      <Show
        when={post()}
        fallback={
          <>
            <Meta name="robots" content="noindex, nofollow" />
            <Navbar />
            <NotFoundContent />
            <Footer />
          </>
        }
      >
        {(currentPost) => (
          <>
            <Title>{currentPost().title} — LoL Sensei</Title>
            <Meta name="description" content={currentPost().excerpt} />
            <Meta name="robots" content="index, follow" />
            <Link rel="canonical" href={canonical()} />
            <HreflangCluster
              path={`blog/${params.slug}`}
              baseUrl={BASE_URL}
              isBlogRoute
            />
            <Navbar />
            <BreadcrumbJsonLd
              lang={i18nLocale()}
              items={[
                { name: t('breadcrumbs.home'), path: '/' },
                { name: t('nav.blog'), path: '/blog' },
                {
                  name: currentPost().title,
                  path: `/blog/${currentPost().slug}`,
                },
              ]}
            />
            <BlogPostingJsonLd post={currentPost()} locale={i18nLocale()} />
            <Show when={HOWTO_SLUGS.has(currentPost().slug)}>
              <HowToJsonLd post={currentPost()} locale={i18nLocale()} />
            </Show>
            <Breadcrumbs
              items={[
                { label: t('breadcrumbs.home'), href: localizedHref('/') },
                { label: t('nav.blog'), href: localizedHref('/blog') },
                { label: currentPost().title },
              ]}
            />

            <main class="max-w-4xl mx-auto px-8 pb-24">
              {/* Post Header */}
              <header class="mb-12">
                {/* Tags */}
                <div class="flex flex-wrap gap-2 mb-6">
                  <For each={currentPost().tags}>
                    {(tag) => (
                      <span class="text-[10px] font-bold tracking-widest uppercase text-primary-container bg-primary-container/10 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    )}
                  </For>
                </div>

                <h1 class="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface leading-tight mb-6">
                  {currentPost().title}
                </h1>

                {/* Meta row */}
                <div class="flex flex-wrap items-center gap-6 text-sm text-on-surface-variant/70">
                  <span class="flex items-center gap-2">
                    <Icon name="person" class="w-4 h-4" />
                    {currentPost().author}
                  </span>
                  <time
                    datetime={currentPost().date}
                    class="flex items-center gap-2"
                  >
                    <Icon name="calendar_today" class="w-4 h-4" />
                    {formatDate(currentPost().date)}
                  </time>
                  <span class="flex items-center gap-2">
                    <Icon name="schedule" class="w-4 h-4" />
                    {currentPost().readingTime} {t('blog.minRead')}
                  </span>
                </div>
              </header>

              {/* Post Body */}
              {/* HTML sanitized because content is typed as raw HTML (see data/blog/types.ts). Safe even if source becomes external CMS. */}
              <article
                class="prose prose-invert max-w-none
                prose-headings:font-headline prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-on-surface
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-4
                prose-p:text-on-surface-variant/90 prose-p:leading-relaxed prose-p:text-base prose-p:md:text-lg prose-p:mb-6
                prose-strong:text-primary-container prose-strong:font-bold
                prose-a:text-primary prose-a:underline prose-a:hover:text-primary-container
                prose-ul:text-on-surface-variant/90 prose-li:mb-2"
                innerHTML={DOMPurify.sanitize(currentPost().content)}
              />

              {/* Back to Blog */}
              <div class="mt-16 pt-8 border-t border-outline-variant/10">
                <A
                  href={localizedHref('/blog')}
                  class="inline-flex items-center gap-2 text-primary-container hover:text-primary transition-colors font-headline font-bold uppercase tracking-widest text-sm"
                >
                  <Icon name="arrow_back" class="w-4 h-4" />
                  {t('blog.backToBlog')}
                </A>
              </div>

              {/* Related Posts */}
              <Show when={(relatedPosts() ?? []).length > 0}>
                <section class="mt-20">
                  <h2 class="text-2xl font-headline font-extrabold tracking-tight text-on-surface mb-8">
                    {t('blog.relatedPosts')}
                  </h2>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <For each={relatedPosts() ?? []}>
                      {(related) => (
                        <A
                          href={localizedHref(`/blog/${related.slug}`)}
                          class="glass-panel rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all p-6 group"
                        >
                          <h3 class="text-base font-headline font-bold text-on-surface group-hover:text-primary-container transition-colors mb-2 leading-tight">
                            {related.title}
                          </h3>
                          <p class="text-on-surface-variant/70 text-sm line-clamp-2 mb-4">
                            {related.excerpt}
                          </p>
                          <div class="flex items-center justify-between text-xs text-on-surface-variant/50">
                            <time datetime={related.date}>
                              {formatDate(related.date)}
                            </time>
                            <span>
                              {related.readingTime} {t('blog.min')}
                            </span>
                          </div>
                        </A>
                      )}
                    </For>
                  </div>
                </section>
              </Show>
            </main>
            <Footer />
          </>
        )}
      </Show>
    </Show>
  );
}
