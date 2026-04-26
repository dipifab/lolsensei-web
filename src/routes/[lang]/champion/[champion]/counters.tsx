// WP34 — Route /[lang]/champion/[champion]/counters (F2 frontend).
//
// SSR route che serve counter data per (lang, champion, primary_role).
// Pattern derivato da WP35 guide.tsx (DEC-OP-001 / DEC-OP-007).
//
// 404 hard se:
//   - lang fuori {en, it} (whitelist locales WP34 EN+IT only).
//   - champion non in Top-50 _meta scope (no primary_role mapping).
//   - backend ritorna 404 (counter_data vuoto per la coppia).
//
// SEO:
//   - <Title> + <Meta description> da i18n templating (champion/role/patch).
//   - <Link rel=canonical> SEMPRE alla rotta `/[lang]/champion/[champion]/counters`.
//   - <Link rel=alternate hreflang> reciproco EN+IT (DEC-OP-013 stesso pattern WP35).
//   - JSON-LD Article: headline + datePublished + datModified + url + inLanguage.
//   - Empty state: <Meta robots noindex> per evitare indicizzazione 404.

import { Show, createMemo } from 'solid-js';
import { Navigate, useParams, createAsync } from '@solidjs/router';
import { Title, Meta, Link } from '@solidjs/meta';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import { BreadcrumbJsonLd } from '../../../../components/JsonLd';
import { JsonLdArticle } from '../../../../components/seo/JsonLdArticle';
import { CounterMatrix } from '../../../../components/champion/CounterMatrix';
import { EmptyState } from '../../../../components/champion/EmptyState';
import { useI18n } from '../../../../i18n';
import {
  getChampionCanonical,
  getChampionHreflang,
  type ContentLang,
} from '../../../../lib/content/champion-canonical';
import { getCounters } from '../../../../services/counter-api';
import top50Data from '../../../../../content/_meta/top-50-champions.json';
import type { CounterData, Wp34Role } from '../../../../types/wp34';

const COUNTER_LANGS: readonly ContentLang[] = ['en', 'it'];

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
  return (COUNTER_LANGS as readonly string[]).includes(v);
}

interface CountersRouteData {
  lang: ContentLang;
  champion: string;
  role: Wp34Role | null;
  data: CounterData | null;
}

async function loadCountersData(
  lang: ContentLang,
  champion: string,
): Promise<CountersRouteData> {
  const role = findPrimaryRole(champion);
  if (!role) {
    return { lang, champion, role: null, data: null };
  }
  const data = await getCounters({ champion, role });
  return { lang, champion, role, data };
}

export const route = {
  preload: ({ params }: { params: { lang: string; champion: string } }) => {
    const langParam = params.lang.toLowerCase();
    if (!isContentLang(langParam)) return;
    return loadCountersData(langParam, params.champion);
  },
};

function capitalize(slug: string): string {
  return slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
}

export default function ChampionCountersRoute() {
  const params = useParams<{ lang: string; champion: string }>();
  const langParam = () => params.lang.toLowerCase();
  const isSupported = createMemo(() => isContentLang(langParam()));

  const data = createAsync(async () => {
    if (!isSupported()) return null;
    return loadCountersData(langParam() as ContentLang, params.champion);
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
          <CountersNotFound
            data={data()}
            champion={params.champion}
            lang={langParam() as ContentLang}
          />
        }
      >
        {() => {
          const current = data()!;
          const counter = current.data!;
          const role = current.role!;
          const canonical = getChampionCanonical({
            lang: current.lang,
            champion: current.champion,
          }).replace('/guide', '/counters');
          const hreflang = getChampionHreflang({
            champion: current.champion,
            availableLangs: COUNTER_LANGS,
          }).map((h) => ({
            ...h,
            href: h.href.replace('/guide', '/counters'),
          }));
          const championLabel = capitalize(current.champion);
          const roleLabel = capitalize(role);
          const patchLabel = counter.patch_id ?? '';
          const title = tpl('wp34.counters.meta.title_template', {
            champion: championLabel,
            role: roleLabel,
            patch: patchLabel,
          });
          const description = tpl(
            'wp34.counters.meta.description_template',
            {
              champion: championLabel,
              role: roleLabel,
              patch: patchLabel,
            },
          );
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
                datePublished={counter.last_aggregated}
                dateModified={counter.last_aggregated}
                url={canonical}
                inLanguage={current.lang}
              />
              <BreadcrumbJsonLd
                lang={current.lang}
                items={[
                  { name: t('breadcrumbs.home'), path: '/' },
                  {
                    name: championLabel,
                    path: `/champion/${current.champion}/counters`,
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
                  {tpl('wp34.counters.heading', {
                    champion: championLabel,
                    role: roleLabel,
                  })}
                </h1>
                <p class="text-on-surface-variant/80 mb-8">
                  {tpl('wp34.counters.subheading', {
                    patch: patchLabel,
                  })}
                </p>
              </main>
              <CounterMatrix data={counter} />
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

function CountersNotFound(props: {
  data: CountersRouteData | null | undefined;
  champion: string;
  lang: ContentLang;
}) {
  const { t } = useI18n();
  return (
    <>
      <Meta name="robots" content="noindex, nofollow" />
      <Navbar />
      <EmptyState
        title={t('wp34.counters.not_found.title')}
        description={t('wp34.counters.not_found.description')}
        ctaHref={`/${props.lang}/`}
        ctaLabel={t('wp34.counters.not_found.back')}
        testid="wp34-counters-not-found"
      />
      <Footer />
    </>
  );
}
