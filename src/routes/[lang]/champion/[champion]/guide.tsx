// WP35 — Route /[lang]/champion/[champion]/guide (DEC-OP-001, DEC-OP-007).
//
// SSR route che serve la guida latest per (lang, champion, primary_role)
// determinato da `_meta/top-50-champions.json`. 404 hard se lang fuori
// {en, it} o se la guida latest non esiste per quella lingua. Quando la
// guida esiste solo in EN ma la richiesta e' IT, il 404 IT mostra link
// esplicito al fallback EN (DEC-OP-013).

import { Show, createMemo } from 'solid-js';
import { Navigate, useParams, createAsync } from '@solidjs/router';
import { Title, Meta, Link } from '@solidjs/meta';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import { BreadcrumbJsonLd } from '../../../../components/JsonLd';
import { JsonLdArticle } from '../../../../components/seo/JsonLdArticle';
import ChampionGuide from '../../../../components/champion/ChampionGuide';
import { NotFoundContent } from '../../../../pages/NotFoundPage';
import { useI18n } from '../../../../i18n';
import {
  getChampionCanonical,
  getChampionHreflang,
  type ContentLang,
} from '../../../../lib/content/champion-canonical';
import { getLatestChampionGuide, loadChampions } from '../../../../data/champions';
import top50Data from '../../../../../content/_meta/top-50-champions.json';
import type { ChampionGuide as ChampionGuideType } from '../../../../data/champions/types';

const CHAMPION_LANGS: readonly ContentLang[] = ['en', 'it'];

interface Top50Entry {
  slug: string;
  primary_role: 'top' | 'jungle' | 'mid' | 'bot' | 'support';
}

const TOP50: readonly Top50Entry[] = (
  top50Data as { champions: Top50Entry[] }
).champions;

function findPrimaryRole(slug: string): Top50Entry['primary_role'] | null {
  const match = TOP50.find((c) => c.slug === slug);
  return match?.primary_role ?? null;
}

function isContentLang(v: string): v is ContentLang {
  return (CHAMPION_LANGS as readonly string[]).includes(v);
}

interface GuideRouteData {
  lang: ContentLang;
  champion: string;
  guide: ChampionGuideType | null;
  /** Lingue dove la guida latest esiste (per hreflang reciproco). */
  availableLangs: readonly ContentLang[];
}

async function loadGuideData(
  lang: ContentLang,
  champion: string,
): Promise<GuideRouteData> {
  const role = findPrimaryRole(champion);
  if (!role) {
    return { lang, champion, guide: null, availableLangs: [] };
  }
  // Prefetch entrambe le lingue per popolare hreflang availability senza
  // ulteriori roundtrip.
  const [enList, itList] = await Promise.all([
    loadChampions('en'),
    loadChampions('it'),
  ]);
  const enHas = enList.some(
    (g) => g.champion === champion && g.role === role && g.is_latest,
  );
  const itHas = itList.some(
    (g) => g.champion === champion && g.role === role && g.is_latest,
  );
  const availableLangs: ContentLang[] = [];
  if (enHas) availableLangs.push('en');
  if (itHas) availableLangs.push('it');

  const guide = await getLatestChampionGuide(lang, champion, role);
  return {
    lang,
    champion,
    guide: guide ?? null,
    availableLangs,
  };
}

export const route = {
  preload: ({ params }: { params: { lang: string; champion: string } }) => {
    const langParam = params.lang.toLowerCase();
    if (!isContentLang(langParam)) return;
    return loadGuideData(langParam, params.champion);
  },
};

export default function ChampionGuideRoute() {
  const params = useParams<{ lang: string; champion: string }>();
  const langParam = () => params.lang.toLowerCase();
  const isSupported = createMemo(() => isContentLang(langParam()));

  const data = createAsync(async () => {
    if (!isSupported()) return null;
    return loadGuideData(langParam() as ContentLang, params.champion);
  });

  const { t } = useI18n();
  const tpl = (key: string, vars: Record<string, string>): string => {
    let out = t(key);
    for (const [k, v] of Object.entries(vars)) {
      out = out.split(`{${k}}`).join(v);
    }
    return out;
  };

  return (
    <Show
      when={isSupported()}
      fallback={<Navigate href={`/${langParam()}/`} />}
    >
      <Show
        when={data()?.guide}
        fallback={
          <NotFoundFallback
            data={data()}
            champion={params.champion}
            lang={langParam() as ContentLang}
          />
        }
      >
        {(guide) => {
          const current = guide();
          const canonical = getChampionCanonical({
            lang: current.language,
            champion: current.champion,
          });
          const hreflang = getChampionHreflang({
            champion: current.champion,
            availableLangs: data()!.availableLangs,
          });
          const title = tpl('wp35.champion_guide.meta.title_template', {
            champion: capitalize(current.champion),
            role: capitalize(current.role),
            patch: current.patch,
          });
          const description = current.description;
          return (
            <>
              <Title>{title}</Title>
              <Meta name="description" content={description} />
              <Meta name="robots" content="index, follow" />
              <Meta property="og:title" content={title} />
              <Meta property="og:description" content={description} />
              <Meta property="og:type" content="article" />
              <Meta property="og:url" content={canonical} />
              <Link rel="canonical" href={canonical} />
              {hreflang.map((h) => (
                <Link rel="alternate" hreflang={h.lang} href={h.href} />
              ))}
              <JsonLdArticle
                headline={title}
                description={description}
                datePublished={current.last_updated}
                dateModified={current.last_updated}
                url={canonical}
                inLanguage={current.language}
              />
              <BreadcrumbJsonLd
                lang={current.language}
                items={[
                  { name: t('breadcrumbs.home'), path: '/' },
                  {
                    name: t('wp35.hub.breadcrumb_label'),
                    path: '/champion',
                  },
                  {
                    name: capitalize(current.champion),
                    path: `/champion/${current.champion}/guide`,
                  },
                ]}
              />
              <Navbar />
              <Breadcrumbs
                items={[
                  {
                    label: t('breadcrumbs.home'),
                    href: `/${current.language}/`,
                  },
                  {
                    label: t('wp35.hub.breadcrumb_label'),
                    href: `/${current.language}/champion`,
                  },
                  { label: capitalize(current.champion) },
                ]}
              />
              <ChampionGuide guide={current} lang={current.language} />
              <Footer />
            </>
          );
        }}
      </Show>
    </Show>
  );
}

function capitalize(slug: string): string {
  return slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
}

function NotFoundFallback(props: {
  data: GuideRouteData | null | undefined;
  champion: string;
  lang: ContentLang;
}) {
  const { t } = useI18n();
  const tpl = (key: string, vars: Record<string, string>): string => {
    let out = t(key);
    for (const [k, v] of Object.entries(vars)) {
      out = out.split(`{${k}}`).join(v);
    }
    return out;
  };
  const otherLang = (): ContentLang | null => {
    if (!props.data) return null;
    if (props.lang === 'it' && props.data.availableLangs.includes('en')) {
      return 'en';
    }
    if (props.lang === 'en' && props.data.availableLangs.includes('it')) {
      return 'it';
    }
    return null;
  };

  return (
    <>
      <Meta name="robots" content="noindex, nofollow" />
      <Navbar />
      <main class="min-h-[60vh] flex items-center justify-center px-8 py-24">
        <div class="max-w-xl text-center">
          <h1 class="text-3xl md:text-4xl font-headline font-extrabold tracking-tight text-on-surface mb-4">
            {t('wp35.champion_guide.not_found.title')}
          </h1>
          <p class="text-on-surface-variant/80 mb-8">
            {t('wp35.champion_guide.not_found.description')}
          </p>
          <Show when={otherLang()}>
            {(lang) => (
              <a
                href={`/${lang()}/champion/${props.champion}/guide`}
                class="inline-block text-primary-container hover:text-primary underline font-bold"
                data-testid="champion-guide-fallback-link"
              >
                {tpl('wp35.champion_guide.not_found.suggest_latest', {
                  champion: capitalize(props.champion),
                })}
              </a>
            )}
          </Show>
          <Show when={!otherLang()}>
            <a
              href={`/${props.lang}/`}
              class="inline-block text-primary-container hover:text-primary underline font-bold"
            >
              {t('wp35.champion_guide.not_found.suggest_back')}
            </a>
          </Show>
        </div>
      </main>
      <Footer />
    </>
  );
}
