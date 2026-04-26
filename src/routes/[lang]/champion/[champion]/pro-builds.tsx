// WP34 — Route /[lang]/champion/[champion]/pro-builds (F2 frontend).
//
// SSR route per pro builds tracker (rolling 14gg challenger). Pattern
// allineato a counters.tsx + WP35 guide.tsx.
//
// Anonimizzazione: tutto cio che viene mostrato e' aggregato. Nessun
// gameName/tagLine/summonerName/puuid raw. La leaderboard espone solo
// `puuid_bucket_id` (SHA-256, NON navigabile).
//
// SEO: <Title> + meta + canonical + hreflang reciproco EN+IT + JSON-LD
// `ItemList` (Schema.org) per il leaderboard, JSON-LD `Article` per la
// pagina principale. Empty state -> noindex.

import { Show, createMemo } from 'solid-js';
import { Navigate, useParams, createAsync } from '@solidjs/router';
import { Title, Meta, Link } from '@solidjs/meta';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import { BreadcrumbJsonLd } from '../../../../components/JsonLd';
import { JsonLd } from '../../../../components/seo/JsonLd';
import { JsonLdArticle } from '../../../../components/seo/JsonLdArticle';
import { ProBuildsList } from '../../../../components/champion/ProBuildsList';
import { EmptyState } from '../../../../components/champion/EmptyState';
import { useI18n } from '../../../../i18n';
import {
  getChampionCanonical,
  getChampionHreflang,
  type ContentLang,
} from '../../../../lib/content/champion-canonical';
import {
  getLeaderboard,
  getProBuilds,
} from '../../../../services/pro-builds-api';
import top50Data from '../../../../../content/_meta/top-50-champions.json';
import type {
  LeaderboardData,
  ProBuildsData,
  Wp34Role,
} from '../../../../types/wp34';

const PRO_BUILD_LANGS: readonly ContentLang[] = ['en', 'it'];

interface Top50Entry {
  slug: string;
  primary_role: Wp34Role;
}

const TOP50: readonly Top50Entry[] = (
  top50Data as { champions: Top50Entry[] }
).champions;

function findPrimaryRole(slug: string): Wp34Role | null {
  const match = TOP50.find((c) => c.slug === slug);
  return match?.primary_role ?? null;
}

function isContentLang(v: string): v is ContentLang {
  return (PRO_BUILD_LANGS as readonly string[]).includes(v);
}

function capitalize(slug: string): string {
  return slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
}

interface ProBuildsRouteData {
  lang: ContentLang;
  champion: string;
  role: Wp34Role | null;
  data: ProBuildsData | null;
  leaderboard: LeaderboardData | null;
}

async function loadProBuildsData(
  lang: ContentLang,
  champion: string,
): Promise<ProBuildsRouteData> {
  const role = findPrimaryRole(champion);
  if (!role) {
    return { lang, champion, role: null, data: null, leaderboard: null };
  }
  // Parallel SSR fetch: pattern aggregato + leaderboard.
  const [data, leaderboard] = await Promise.all([
    getProBuilds({ champion, role }),
    getLeaderboard({ champion, role, limit: 10 }),
  ]);
  return { lang, champion, role, data, leaderboard };
}

export const route = {
  preload: ({ params }: { params: { lang: string; champion: string } }) => {
    const langParam = params.lang.toLowerCase();
    if (!isContentLang(langParam)) return;
    return loadProBuildsData(langParam, params.champion);
  },
};

export default function ChampionProBuildsRoute() {
  const params = useParams<{ lang: string; champion: string }>();
  const langParam = () => params.lang.toLowerCase();
  const isSupported = createMemo(() => isContentLang(langParam()));

  const data = createAsync(async () => {
    if (!isSupported()) return null;
    return loadProBuildsData(langParam() as ContentLang, params.champion);
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
        when={data() && data()!.data && data()!.role}
        fallback={
          <ProBuildsNotFound
            champion={params.champion}
            lang={langParam() as ContentLang}
          />
        }
      >
        {() => {
          const current = data()!;
          const probuilds = current.data!;
          const role = current.role!;
          const canonical = getChampionCanonical({
            lang: current.lang,
            champion: current.champion,
          }).replace('/guide', '/pro-builds');
          const hreflang = getChampionHreflang({
            champion: current.champion,
            availableLangs: PRO_BUILD_LANGS,
          }).map((h) => ({
            ...h,
            href: h.href.replace('/guide', '/pro-builds'),
          }));
          const championLabel = capitalize(current.champion);
          const roleLabel = capitalize(role);
          const patchLabel = '14d';
          const title = tpl('wp34.pro_builds.meta.title_template', {
            champion: championLabel,
            role: roleLabel,
            patch: patchLabel,
          });
          const description = tpl(
            'wp34.pro_builds.meta.description_template',
            {
              champion: championLabel,
              role: roleLabel,
              patch: patchLabel,
            },
          );
          // ItemList Schema.org per il leaderboard. Anonimizzato: name e'
          // bucket id truncated, NON link navigabile.
          const itemListData = (): Record<string, unknown> | null => {
            const lb = current.leaderboard;
            if (!lb || lb.leaderboard.length === 0) return null;
            return {
              '@type': 'ItemList',
              name: title,
              numberOfItems: lb.leaderboard.length,
              itemListOrder: 'https://schema.org/ItemListOrderDescending',
              itemListElement: lb.leaderboard.map((entry, idx) => ({
                '@type': 'ListItem',
                position: idx + 1,
                name: `${entry.region.toUpperCase()} — ${entry.match_count_14d} matches`,
              })),
            };
          };
          const itemList = itemListData();
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
                datePublished={probuilds.data_freshness_at.slice(0, 10)}
                dateModified={probuilds.data_freshness_at.slice(0, 10)}
                url={canonical}
                inLanguage={current.lang}
              />
              <Show when={itemList}>{(d) => <JsonLd data={d()!} />}</Show>
              <BreadcrumbJsonLd
                lang={current.lang}
                items={[
                  { name: t('breadcrumbs.home'), path: '/' },
                  {
                    name: championLabel,
                    path: `/champion/${current.champion}/pro-builds`,
                  },
                ]}
              />
              <Navbar />
              <Breadcrumbs
                items={[
                  {
                    label: t('breadcrumbs.home'),
                    href: `/${current.lang}/`,
                  },
                  { label: championLabel },
                ]}
              />
              <main class="max-w-4xl mx-auto px-8 pt-8">
                <h1 class="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface leading-tight mb-4">
                  {tpl('wp34.pro_builds.heading', {
                    champion: championLabel,
                    role: roleLabel,
                  })}
                </h1>
                <p class="text-on-surface-variant/80 mb-8">
                  {t('wp34.pro_builds.subheading')}
                </p>
              </main>
              <ProBuildsList
                data={probuilds}
                leaderboard={current.leaderboard}
                lang={current.lang}
              />
              <footer
                class="max-w-4xl mx-auto px-8 py-12 text-on-surface-variant/60 text-xs"
                data-testid="wp34-disclaimer"
              >
                {t('wp34.common.disclaimer')}
              </footer>
              <Footer />
            </>
          );
        }}
      </Show>
    </Show>
  );
}

function ProBuildsNotFound(props: { champion: string; lang: ContentLang }) {
  const { t } = useI18n();
  return (
    <>
      <Meta name="robots" content="noindex, nofollow" />
      <Navbar />
      <EmptyState
        title={t('wp34.pro_builds.not_found.title')}
        description={t('wp34.pro_builds.not_found.description')}
        ctaHref={`/${props.lang}/`}
        ctaLabel={t('wp34.pro_builds.not_found.back')}
        testid="wp34-pro-builds-not-found"
      />
      <Footer />
    </>
  );
}
