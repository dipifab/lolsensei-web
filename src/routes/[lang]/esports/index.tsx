// WP35 — Route /[lang]/esports (DEC-OP-008, DEC-OP-028, REQ-F-035-014/015/017/020).
//
// SSR fetch parallelo schedule + results dal backend FastAPI proxy
// (`/api/v1/public/esports/{schedule,results}`). Banner unavailable se 503
// o response null. Attribution Leaguepedia/Fandom embedded sia in sezione
// dedicata sotto i risultati sia in footer del sito.
//
// Cache header inviato dal backend (`Cache-Control: public, max-age=900,
// stale-while-revalidate=3600`); il middleware Cloudflare honora la SWR
// senza configurazione aggiuntiva.

import { Show, createMemo } from 'solid-js';
import { Navigate, useParams, createAsync } from '@solidjs/router';
import { Title, Meta, Link } from '@solidjs/meta';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BreadcrumbJsonLd } from '../../../components/JsonLd';
import { HreflangCluster } from '../../../components/seo/HreflangCluster';
import EsportsSchedule, {
  type ScheduleMatchItem,
} from '../../../components/esports/EsportsSchedule';
import EsportsResults, {
  type ResultMatchItem,
} from '../../../components/esports/EsportsResults';
import EsportsUnavailableBanner from '../../../components/esports/EsportsUnavailableBanner';
import { useI18n } from '../../../i18n';
import { BASE_URL } from '../../../lib/seo/routes';

const ESPORTS_LANGS = ['en', 'it'] as const;
type EsportsLang = (typeof ESPORTS_LANGS)[number];

function isEsportsLang(v: string): v is EsportsLang {
  return (ESPORTS_LANGS as readonly string[]).includes(v);
}

interface EsportsApiPayload<TItem> {
  endpoint: string;
  fetched_at: string;
  cache_status: string;
  items: TItem[];
  attribution: {
    source: string;
    license: string;
    url: string;
  };
}

interface EsportsRouteData {
  schedule: EsportsApiPayload<ScheduleMatchItem> | null;
  results: EsportsApiPayload<ResultMatchItem> | null;
  /** True se almeno una delle due chiamate ha avuto successo. */
  partial: boolean;
  /** Almeno una risposta era STALE. */
  stale: boolean;
}

function getApiBase(): string {
  // SSR-safe: cf wrangler/Vinxi espongono import.meta.env. In assenza
  // dell'env (es. unit test), default produzione.
  const env = (import.meta as { env?: Record<string, string | undefined> }).env;
  return env?.VITE_BACKEND_API_URL ?? 'https://api.lolsensei.com';
}

async function fetchEsportsPayload<TItem>(
  endpoint: string,
): Promise<EsportsApiPayload<TItem> | null> {
  const url = `${getApiBase()}/api/v1/public/esports/${endpoint}`;
  try {
    const r = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!r.ok) return null;
    return (await r.json()) as EsportsApiPayload<TItem>;
  } catch {
    return null;
  }
}

async function loadEsportsData(): Promise<EsportsRouteData> {
  const [schedule, results] = await Promise.all([
    fetchEsportsPayload<ScheduleMatchItem>('schedule'),
    fetchEsportsPayload<ResultMatchItem>('results'),
  ]);
  const partial = Boolean(schedule || results);
  const stale =
    (schedule?.cache_status === 'STALE') ||
    (results?.cache_status === 'STALE');
  return { schedule, results, partial, stale };
}

export const route = {
  preload: ({ params }: { params: { lang: string } }) => {
    const lang = params.lang.toLowerCase();
    if (!isEsportsLang(lang)) return;
    return loadEsportsData();
  },
};

export default function EsportsIndexRoute() {
  const params = useParams<{ lang: string }>();
  const langParam = () => params.lang.toLowerCase();
  const isSupported = createMemo(() => isEsportsLang(langParam()));

  const data = createAsync(async () => {
    if (!isSupported()) return null;
    return loadEsportsData();
  });

  const { t } = useI18n();
  const canonical = () => `${BASE_URL}/${langParam()}/esports`;

  return (
    <Show
      when={isSupported()}
      fallback={<Navigate href={`/${langParam()}/`} />}
    >
      <Title>{t('wp35.esports.meta.title')}</Title>
      <Meta name="description" content={t('wp35.esports.meta.description')} />
      <Meta name="robots" content="index, follow" />
      <Meta property="og:title" content={t('wp35.esports.meta.title')} />
      <Meta
        property="og:description"
        content={t('wp35.esports.meta.og_description')}
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={canonical()} />
      <Link rel="canonical" href={canonical()} />
      <HreflangCluster path="esports" baseUrl={BASE_URL} isBlogRoute />
      <BreadcrumbJsonLd
        lang={langParam()}
        items={[
          { name: t('breadcrumbs.home'), path: '/' },
          { name: t('wp35.esports.heading'), path: '/esports' },
        ]}
      />
      <Navbar />
      <main class="max-w-6xl mx-auto px-8 py-12">
        <header class="mb-12">
          <h1 class="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface mb-4">
            {t('wp35.esports.heading')}
          </h1>
          <p class="text-lg text-on-surface-variant/80">
            {t('wp35.esports.subheading')}
          </p>
        </header>

        <Show when={data() && !data()!.partial}>
          <EsportsUnavailableBanner />
        </Show>
        <Show when={data()?.stale}>
          <EsportsUnavailableBanner stale />
        </Show>

        <Show when={data()?.schedule}>
          {(schedule) => (
            <EsportsSchedule
              items={schedule().items}
              lang={langParam() as EsportsLang}
            />
          )}
        </Show>

        <Show when={data()?.results}>
          {(results) => (
            <EsportsResults
              items={results().items}
              lang={langParam() as EsportsLang}
            />
          )}
        </Show>

        <section
          class="mt-16 pt-8 border-t border-outline-variant/10 text-sm text-on-surface-variant/70"
          data-testid="esports-attribution-section"
        >
          <p>{t('wp35.esports.attribution.section')}</p>
        </section>
      </main>
      <footer
        class="border-t border-outline-variant/10 py-6 text-center text-xs text-on-surface-variant/60"
        data-testid="esports-attribution-footer"
      >
        {t('wp35.esports.attribution.footer')}{' '}
        <a
          href="https://lol.fandom.com"
          rel="noopener external"
          class="text-primary-container underline hover:text-primary"
        >
          {t('wp35.esports.attribution.link_label')}
        </a>
        .
      </footer>
      <Footer />
    </Show>
  );
}
