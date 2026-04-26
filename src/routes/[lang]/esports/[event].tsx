// WP35 — Route /[lang]/esports/[event] (placeholder per-league filter MVP).
//
// Filtra schedule + results per event/league (DEC-OP-008). Whitelist league
// allineata al backend (LCK, LEC, LCS, LPL, WORLDS, MSI). Slug non in whitelist
// -> 404 + noindex.
//
// Future-ready: i league-specific event landing page possono ricevere
// design Stitch dedicato in WP37 (DEC-OP-011 carve-out). MVP riusa lo
// stesso layout di /esports con filtro server-side.

import { Show, createMemo } from 'solid-js';
import { Navigate, useParams, createAsync } from '@solidjs/router';
import { Title, Meta, Link } from '@solidjs/meta';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BreadcrumbJsonLd } from '../../../components/JsonLd';
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
const ALLOWED_LEAGUES = ['lck', 'lec', 'lcs', 'lpl', 'worlds', 'msi'] as const;

type EsportsLang = (typeof ESPORTS_LANGS)[number];
type AllowedLeagueSlug = (typeof ALLOWED_LEAGUES)[number];

function isEsportsLang(v: string): v is EsportsLang {
  return (ESPORTS_LANGS as readonly string[]).includes(v);
}

function isAllowedLeague(v: string): v is AllowedLeagueSlug {
  return (ALLOWED_LEAGUES as readonly string[]).includes(v);
}

interface EsportsApiPayload<TItem> {
  endpoint: string;
  fetched_at: string;
  cache_status: string;
  items: TItem[];
  attribution: { source: string; license: string; url: string };
}

interface EventRouteData {
  league: string;
  schedule: EsportsApiPayload<ScheduleMatchItem> | null;
  results: EsportsApiPayload<ResultMatchItem> | null;
  partial: boolean;
  stale: boolean;
}

function getApiBase(): string {
  const env = (import.meta as { env?: Record<string, string | undefined> }).env;
  return env?.VITE_BACKEND_API_URL ?? 'https://api.lolsensei.com';
}

async function fetchPayload<TItem>(
  endpoint: string,
  league: string,
): Promise<EsportsApiPayload<TItem> | null> {
  const url = `${getApiBase()}/api/v1/public/esports/${endpoint}?league=${encodeURIComponent(league)}`;
  try {
    const r = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!r.ok) return null;
    return (await r.json()) as EsportsApiPayload<TItem>;
  } catch {
    return null;
  }
}

async function loadEventData(league: string): Promise<EventRouteData> {
  const [schedule, results] = await Promise.all([
    fetchPayload<ScheduleMatchItem>('schedule', league),
    fetchPayload<ResultMatchItem>('results', league),
  ]);
  return {
    league,
    schedule,
    results,
    partial: Boolean(schedule || results),
    stale:
      schedule?.cache_status === 'STALE' || results?.cache_status === 'STALE',
  };
}

export const route = {
  preload: ({ params }: { params: { lang: string; event: string } }) => {
    const lang = params.lang.toLowerCase();
    if (!isEsportsLang(lang)) return;
    const event = params.event.toLowerCase();
    if (!isAllowedLeague(event)) return;
    return loadEventData(event.toUpperCase());
  },
};

export default function EsportsEventRoute() {
  const params = useParams<{ lang: string; event: string }>();
  const langParam = () => params.lang.toLowerCase();
  const eventParam = () => params.event.toLowerCase();
  const isSupportedLang = createMemo(() => isEsportsLang(langParam()));
  const isSupportedEvent = createMemo(() => isAllowedLeague(eventParam()));

  const data = createAsync(async () => {
    if (!isSupportedLang() || !isSupportedEvent()) return null;
    return loadEventData(eventParam().toUpperCase());
  });

  const { t } = useI18n();
  const canonical = () =>
    `${BASE_URL}/${langParam()}/esports/${eventParam()}`;
  const leagueLabel = () => eventParam().toUpperCase();

  return (
    <Show
      when={isSupportedLang()}
      fallback={<Navigate href={`/${langParam()}/`} />}
    >
      <Show
        when={isSupportedEvent()}
        fallback={<EventNotFound lang={langParam()} />}
      >
        <Title>
          {leagueLabel()} — {t('wp35.esports.meta.title')}
        </Title>
        <Meta
          name="description"
          content={`${leagueLabel()} ${t('wp35.esports.meta.description')}`}
        />
        <Meta name="robots" content="index, follow" />
        <Link rel="canonical" href={canonical()} />
        <BreadcrumbJsonLd
          lang={langParam()}
          items={[
            { name: t('breadcrumbs.home'), path: '/' },
            { name: t('wp35.esports.heading'), path: '/esports' },
            { name: leagueLabel(), path: `/esports/${eventParam()}` },
          ]}
        />
        <Navbar />
        <main class="max-w-6xl mx-auto px-8 py-12">
          <header class="mb-12">
            <h1 class="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface mb-4">
              {leagueLabel()}
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
    </Show>
  );
}

function EventNotFound(props: { lang: string }) {
  const { t } = useI18n();
  return (
    <>
      <Meta name="robots" content="noindex, nofollow" />
      <Navbar />
      <main class="min-h-[60vh] flex items-center justify-center px-8 py-24">
        <div class="max-w-xl text-center">
          <h1 class="text-3xl md:text-4xl font-headline font-extrabold tracking-tight text-on-surface mb-4">
            {t('wp35.champion_guide.not_found.title')}
          </h1>
          <a
            href={`/${props.lang}/esports`}
            class="inline-block text-primary-container hover:text-primary underline font-bold"
          >
            {t('wp35.esports.heading')}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
