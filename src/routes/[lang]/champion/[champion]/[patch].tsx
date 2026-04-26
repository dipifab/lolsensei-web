// WP35 — Route /[lang]/champion/[champion]/[patch] (DEC-OP-001, DEC-OP-023).
//
// SSR route che serve la guida al patch storico richiesto. Canonical condizionale:
//  - is_latest === true -> canonical punta a /guide (no duplicate signal)
//  - is_latest === false -> canonical = self URL
//
// Tutte le pagine con is_latest === false ricevono <meta name="robots"
// content="noindex, follow"> per evitare cannibalizzazione SEO della guida
// canonical (REQ-F-035-005 + DEC-OP-023). La guida latest e' canonica via
// /guide route, quindi la pagina /<latest-patch> qui idealmente non e'
// linkata in sitemap (DEC-OP-014) ma se accidentalmente raggiunta riceve
// canonical = /guide e resta indicizzabile sotto canonical override.

import { Show, createMemo } from 'solid-js';
import { Navigate, useParams, createAsync } from '@solidjs/router';
import { Title, Meta, Link } from '@solidjs/meta';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import { JsonLdArticle } from '../../../../components/seo/JsonLdArticle';
import ChampionGuide from '../../../../components/champion/ChampionGuide';
import { NotFoundContent } from '../../../../pages/NotFoundPage';
import { useI18n } from '../../../../i18n';
import {
  getChampionCanonical,
  getChampionHreflang,
  type ContentLang,
} from '../../../../lib/content/champion-canonical';
import { isValidPatchSlug } from '../../../../lib/content/patch-version';
import { getChampionGuideAtPatch, loadChampions } from '../../../../data/champions';
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
  return TOP50.find((c) => c.slug === slug)?.primary_role ?? null;
}

function isContentLang(v: string): v is ContentLang {
  return (CHAMPION_LANGS as readonly string[]).includes(v);
}

interface PatchRouteData {
  lang: ContentLang;
  champion: string;
  patch: string;
  guide: ChampionGuideType | null;
  /** True se esiste una guida (anche se diverso patch) per stesso (lang, champion). */
  guideRouteAvailable: boolean;
  availableLangs: readonly ContentLang[];
}

async function loadPatchData(
  lang: ContentLang,
  champion: string,
  patch: string,
): Promise<PatchRouteData> {
  const role = findPrimaryRole(champion);
  if (!role || !isValidPatchSlug(patch)) {
    return {
      lang,
      champion,
      patch,
      guide: null,
      guideRouteAvailable: false,
      availableLangs: [],
    };
  }
  const [enList, itList, guide] = await Promise.all([
    loadChampions('en'),
    loadChampions('it'),
    getChampionGuideAtPatch(lang, champion, role, patch),
  ]);
  const enHasLatest = enList.some(
    (g) => g.champion === champion && g.role === role && g.is_latest,
  );
  const itHasLatest = itList.some(
    (g) => g.champion === champion && g.role === role && g.is_latest,
  );
  const availableLangs: ContentLang[] = [];
  if (enHasLatest) availableLangs.push('en');
  if (itHasLatest) availableLangs.push('it');

  // Verifica esistenza guide /guide per lo stesso (lang, champion).
  const sameLangList = lang === 'en' ? enList : itList;
  const guideRouteAvailable = sameLangList.some(
    (g) => g.champion === champion && g.role === role && g.is_latest,
  );

  return {
    lang,
    champion,
    patch,
    guide: guide ?? null,
    guideRouteAvailable,
    availableLangs,
  };
}

export const route = {
  preload: ({
    params,
  }: {
    params: { lang: string; champion: string; patch: string };
  }) => {
    const langParam = params.lang.toLowerCase();
    if (!isContentLang(langParam)) return;
    return loadPatchData(langParam, params.champion, params.patch);
  },
};

export default function ChampionPatchRoute() {
  const params = useParams<{
    lang: string;
    champion: string;
    patch: string;
  }>();
  const langParam = () => params.lang.toLowerCase();
  const isSupported = createMemo(() => isContentLang(langParam()));
  const validPatch = createMemo(() => isValidPatchSlug(params.patch));

  const data = createAsync(async () => {
    if (!isSupported() || !validPatch()) return null;
    return loadPatchData(
      langParam() as ContentLang,
      params.champion,
      params.patch,
    );
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
      <Show when={validPatch()} fallback={<PatchNotFound champion={params.champion} lang={langParam() as ContentLang} guideAvailable={false} />}>
        <Show
          when={data()?.guide}
          fallback={
            <PatchNotFound
              champion={params.champion}
              lang={langParam() as ContentLang}
              guideAvailable={Boolean(data()?.guideRouteAvailable)}
            />
          }
        >
          {(guide) => {
            const current = guide();
            const canonical = getChampionCanonical({
              lang: current.language,
              champion: current.champion,
              patch: current.patch,
              isLatestPatch: current.is_latest,
            });
            const hreflang = getChampionHreflang({
              champion: current.champion,
              availableLangs: data()!.availableLangs,
              patch: current.patch,
              isLatestPatch: current.is_latest,
            });
            const title = tpl('wp35.champion_guide.meta.title_template', {
              champion: capitalize(current.champion),
              role: capitalize(current.role),
              patch: current.patch,
            });
            const description = current.description;
            // Pagine non-latest: noindex (DEC-OP-023). Pagine latest: canonical
            // override punta a /guide ma documento resta indicizzabile.
            const robots = current.is_latest
              ? 'index, follow'
              : 'noindex, follow';
            return (
              <>
                <Title>{title}</Title>
                <Meta name="description" content={description} />
                <Meta name="robots" content={robots} />
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
                <Navbar />
                <Breadcrumbs
                  items={[
                    {
                      label: t('breadcrumbs.home'),
                      href: `/${current.language}/`,
                    },
                    {
                      label: capitalize(current.champion),
                      href: `/${current.language}/champion/${current.champion}/guide`,
                    },
                    { label: current.patch },
                  ]}
                />
                <ChampionGuide
                  guide={current}
                  lang={current.language}
                  outdated={!current.is_latest}
                />
                <Footer />
              </>
            );
          }}
        </Show>
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

function PatchNotFound(props: {
  champion: string;
  lang: ContentLang;
  guideAvailable: boolean;
}) {
  const { t } = useI18n();
  const tpl = (key: string, vars: Record<string, string>): string => {
    let out = t(key);
    for (const [k, v] of Object.entries(vars)) {
      out = out.split(`{${k}}`).join(v);
    }
    return out;
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
          <Show
            when={props.guideAvailable}
            fallback={
              <a
                href={`/${props.lang}/`}
                class="inline-block text-primary-container hover:text-primary underline font-bold"
              >
                {t('wp35.champion_guide.not_found.suggest_back')}
              </a>
            }
          >
            <a
              href={`/${props.lang}/champion/${props.champion}/guide`}
              class="inline-block text-primary-container hover:text-primary underline font-bold"
              data-testid="champion-patch-fallback-link"
            >
              {tpl('wp35.champion_guide.not_found.suggest_latest', {
                champion: capitalize(props.champion),
              })}
            </a>
          </Show>
        </div>
      </main>
      <Footer />
    </>
  );
}
