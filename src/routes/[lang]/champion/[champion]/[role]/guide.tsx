// WP35 / CR-056 — Route /[lang]/champion/[champion]/[role]/guide.
//
// Variante role-explicit della route guida. `role` e' un segment esplicito
// che permette guide multi-role per champion (Neeko mid/support, Sett
// jungle/top, ecc.) e champion fuori top-50. La route legacy
// `/[lang]/champion/[champion]/guide` redirige 301 qui.
//
// Differenze rispetto a `[champion]/guide.tsx`:
//   - role viene letto da `params.role`, non derivato da top-50
//   - 404 se role non e' uno dei 5 ruoli validi LoL
//   - 404 se la guida (lang, champion, role) non esiste in dataset

import { Show, createMemo } from 'solid-js';
import { Navigate, useParams, createAsync } from '@solidjs/router';
import { Title, Meta, Link } from '@solidjs/meta';
import Navbar from '../../../../../components/Navbar';
import Footer from '../../../../../components/Footer';
import Breadcrumbs from '../../../../../components/Breadcrumbs';
import { BreadcrumbJsonLd } from '../../../../../components/JsonLd';
import { JsonLdArticle } from '../../../../../components/seo/JsonLdArticle';
import ChampionGuide from '../../../../../components/champion/ChampionGuide';
import { GuideCounterLink } from '../../../../../components/counter/GuideCounterLink';
import { useI18n } from '../../../../../i18n';
import { getOgLocale, OG_SITE_NAME } from '../../../../../lib/seo/meta-resolver';
import {
  getChampionCanonical,
  getChampionHreflang,
  type ContentLang,
} from '../../../../../lib/content/champion-canonical';
import { isSupportedLocale } from '../../../../../lib/i18n/locales';
import { getLatestChampionGuide } from '../../../../../data/champions';
import { getAvailableLangsFor } from '../../../../../lib/champion/discovery';
import type { ChampionGuide as ChampionGuideType } from '../../../../../data/champions/types';

// WP35.1 — esteso da EN+IT a tutte le 8 lingue del sito. La route accetta
// qualunque locale supportato; se la guida non esiste in quella lingua,
// `loadGuideData` ritorna `guide: null` e la UI mostra il fallback con
// suggerimento alle lingue disponibili.
const VALID_ROLES = ['top', 'jungle', 'mid', 'bot', 'support'] as const;
type ValidRole = (typeof VALID_ROLES)[number];

function isContentLang(v: string): v is ContentLang {
  return isSupportedLocale(v);
}

function isValidRole(v: string): v is ValidRole {
  return (VALID_ROLES as readonly string[]).includes(v);
}

interface GuideRouteData {
  lang: ContentLang;
  champion: string;
  role: ValidRole;
  guide: ChampionGuideType | null;
  /** Lingue dove la guida (champion, role) latest esiste, per hreflang. */
  availableLangs: readonly ContentLang[];
}

async function loadGuideData(
  lang: ContentLang,
  champion: string,
  role: ValidRole,
): Promise<GuideRouteData> {
  // Hreflang: calcolato dai metadata bundled in index.json (zero KV calls).
  const availableLangs = getAvailableLangsFor(champion, role) as ContentLang[];

  const guide = await getLatestChampionGuide(lang, champion, role);
  return {
    lang,
    champion,
    role,
    guide: guide ?? null,
    availableLangs,
  };
}

export const route = {
  preload: ({
    params,
  }: {
    params: { lang: string; champion: string; role: string };
  }) => {
    const langParam = params.lang.toLowerCase();
    const roleParam = params.role.toLowerCase();
    if (!isContentLang(langParam)) return;
    if (!isValidRole(roleParam)) return;
    return loadGuideData(langParam, params.champion, roleParam);
  },
};

export default function ChampionRoleGuideRoute() {
  const params = useParams<{
    lang: string;
    champion: string;
    role: string;
  }>();
  const langParam = () => params.lang.toLowerCase();
  const roleParam = () => params.role.toLowerCase();
  const isSupported = createMemo(() => isContentLang(langParam()));
  const isRoleValid = createMemo(() => isValidRole(roleParam()));

  const data = createAsync(async () => {
    if (!isSupported()) return null;
    if (!isRoleValid()) return null;
    return loadGuideData(
      langParam() as ContentLang,
      params.champion,
      roleParam() as ValidRole,
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
      <Navbar />
      <Show
        when={isRoleValid()}
        fallback={
          <NotFoundFallback
            data={null}
            champion={params.champion}
            lang={langParam() as ContentLang}
          />
        }
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
              role: current.role,
            });
            const hreflang = getChampionHreflang({
              champion: current.champion,
              role: current.role,
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
                <Meta property="og:locale" content={getOgLocale(params.lang)} />
                <Meta property="og:site_name" content={OG_SITE_NAME} />
                <Meta name="twitter:card" content="summary_large_image" />
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
                      name: `${capitalize(current.champion)} — ${capitalize(current.role)}`,
                      path: `/champion/${current.champion}/${current.role}/guide`,
                    },
                  ]}
                />
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
                    {
                      label: `${capitalize(current.champion)} — ${capitalize(current.role)}`,
                    },
                  ]}
                />
                {/* WP-COUNTER-PICKER (CR-063 / WPCP-043): cross-link sopra-
                    the-fold verso la pagina counter del soggetto guida.
                    Naviga a /[lang]/counter/<champion-slug> (no role suffix:
                    entry-point agnostico, vedi routing.md §4). */}
                <div class="px-6 md:px-8 mt-4 mb-2" data-testid="guide-counter-link-wrapper">
                  <GuideCounterLink
                    lang={current.language}
                    championSlug={current.champion}
                    name={capitalize(current.champion)}
                  />
                </div>
                <ChampionGuide
                  guide={current}
                  lang={current.language}
                  experienceCallout={
                    <>
                      <h2 class="text-base md:text-lg font-headline font-extrabold tracking-tight text-primary-container mb-2">
                        {tpl('champion.guide.experience_callout.title', {
                          patch: current.patch,
                        })}
                      </h2>
                      <p class="text-sm md:text-base">
                        {tpl('champion.guide.experience_callout.body', {
                          role: t(`wp30.tier_list.filter.role.${current.role}`),
                        })}
                      </p>
                    </>
                  }
                />
              </>
            );
          }}
        </Show>
      </Show>
      <Footer />
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
    // Suggerisci EN se disponibile e diverso da quella corrente, altrimenti
    // la prima lingua disponibile. Per il pilot WP35.1 (Lux multilingua) e'
    // utile poter cadere su es/fr/de/pt-br/ko/zh-hans se la lingua corrente
    // manca ma altre coprono la guida.
    if (props.lang !== 'en' && props.data.availableLangs.includes('en')) {
      return 'en';
    }
    for (const l of props.data.availableLangs) {
      if (l !== props.lang) return l;
    }
    return null;
  };
  const fallbackHref = (): string | null => {
    const lang = otherLang();
    if (!lang || !props.data) return null;
    return `/${lang}/champion/${props.champion}/${props.data.role}/guide`;
  };

  return (
    <>
      <Meta name="robots" content="noindex, nofollow" />
      <main class="min-h-[60vh] flex items-center justify-center px-8 py-24">
        <div class="max-w-xl text-center">
          <h1 class="text-3xl md:text-4xl font-headline font-extrabold tracking-tight text-on-surface mb-4">
            {t('wp35.champion_guide.not_found.title')}
          </h1>
          <p class="text-on-surface-variant/80 mb-8">
            {t('wp35.champion_guide.not_found.description')}
          </p>
          <Show when={fallbackHref()}>
            {(href) => (
              <a
                href={href()}
                class="inline-block text-primary-container hover:text-primary underline font-bold"
                data-testid="champion-guide-fallback-link"
              >
                {tpl('wp35.champion_guide.not_found.suggest_latest', {
                  champion: capitalize(props.champion),
                })}
              </a>
            )}
          </Show>
          <Show when={!fallbackHref()}>
            <a
              href={`/${props.lang}/champion`}
              class="inline-block text-primary-container hover:text-primary underline font-bold"
            >
              {t('wp35.champion_guide.not_found.suggest_back')}
            </a>
          </Show>
        </div>
      </main>
    </>
  );
}
