// WP30 — Public summoner page (REQ-F-030-001/007/008/009/012/013/014).
//
// Route: `/[lang]/summoner/[region]/[handle]`. SSR-only data: every render
// performs a KV-cached BE proxy call via `services/summoner-api.ts`. Client
// hydration is purely UI (no second fetch on the client).
//
// Branches handled here:
//   - region invalid                           -> 404 noindex
//   - handle malformed (no `-`, etc.)          -> 404 noindex
//   - handle not lowercase canonical           -> 301 redirect
//   - BE 404 (Riot NOT_FOUND)                  -> 404 noindex + Cache-Control max-age=60
//   - BE 5xx / network error w/o stale cache   -> 503 noindex + Retry-After: 60
//   - success                                  -> 200 + s-maxage=3600 + STALE-WHILE-ERROR
//                                                  on stale-cached fallback
//   - is_private                               -> 200 indexable (rank still valid)
//   - is_inactive                              -> 200 BUT noindex (thin content)
//
// Carve-out (REQ-NF-030-007 / DEC-OP-008): no Stitch frame for summoner page;
// text-first MVP composed of `<SummonerHeader>` + section components +
// `<RiotDisclaimer>`. WP37 tracks the visual refactor.

import { Title, Meta, Link } from '@solidjs/meta';
import { createAsync, useParams } from '@solidjs/router';
import { Show } from 'solid-js';
import { getRequestEvent } from 'solid-js/web';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { NoindexMeta } from '../../../../components/seo/NoindexMeta';
import { HreflangCluster } from '../../../../components/seo/HreflangCluster';
import { JsonLdPerson } from '../../../../components/seo/JsonLdPerson';
import { RiotDisclaimer } from '../../../../components/seo/RiotDisclaimer';
import { NotFoundSummoner } from '../../../../components/wp30/NotFoundSummoner';
import { ServiceUnavailable } from '../../../../components/wp30/ServiceUnavailable';
import { PrivatePlayerNotice } from '../../../../components/wp30/PrivatePlayerNotice';
import { InactivePlayerNotice } from '../../../../components/wp30/InactivePlayerNotice';
import { SummonerHeader } from '../../../../components/wp30/SummonerHeader';
import { ChampionStatsTable } from '../../../../components/wp30/ChampionStatsTable';
import { RecentMatchesList } from '../../../../components/wp30/RecentMatchesList';
import { ENV } from '../../../../config/env';
import { canonicalLocale } from '../../../../lib/i18n/locales';
import { isAllowedRegion, REGION_DISPLAY } from '../../../../lib/regions';
import { normalizeHandle } from '../../../../lib/handle-normalize';
import { fetchSummoner, type SummonerFetchResult } from '../../../../services/summoner-api';
import { BASE_URL } from '../../../../lib/seo/routes';
import { useI18n } from '../../../../i18n';
import type { KVNamespaceLike } from '../../../../lib/kv-cache';

// ---------------------------------------------------------------------------
// Server-side data resolution
// ---------------------------------------------------------------------------

type ResolvedState =
  | { kind: 'invalid_region' }
  | { kind: 'invalid_handle' }
  | { kind: 'redirect'; canonical: string }
  | { kind: 'fetched'; result: SummonerFetchResult; gameName: string; tagLine: string };

/**
 * Read the Cloudflare Workers KV binding from the SolidStart request event.
 * The vinxi `cloudflare-module` preset exposes the bindings under
 * `event.nativeEvent.context.cloudflare.env`. In dev (`vite dev` / `vinxi
 * dev`) the binding is absent; the kv-cache helper transparently falls back
 * to its in-memory store.
 */
function readKvBinding(): KVNamespaceLike | undefined {
  const event = getRequestEvent();
  if (!event) return undefined;
  // SolidStart `event` does not type the Cloudflare context; we treat it as
  // an unknown record and validate at runtime.
  const native = (event as unknown as { nativeEvent?: unknown }).nativeEvent;
  if (!native || typeof native !== 'object') return undefined;
  const ctx = (native as { context?: unknown }).context;
  if (!ctx || typeof ctx !== 'object') return undefined;
  const cfCtx = (ctx as { cloudflare?: unknown }).cloudflare;
  if (!cfCtx || typeof cfCtx !== 'object') return undefined;
  const env = (cfCtx as { env?: unknown }).env;
  if (!env || typeof env !== 'object') return undefined;
  const binding = (env as { LOLAI_PUBLIC_CACHE?: unknown }).LOLAI_PUBLIC_CACHE;
  if (!binding) return undefined;
  return binding as KVNamespaceLike;
}

async function resolveState(args: {
  region: string;
  handle: string;
  lang: string;
}): Promise<ResolvedState> {
  if (!isAllowedRegion(args.region)) {
    return { kind: 'invalid_region' };
  }

  const normalized = normalizeHandle(args.handle);
  if (normalized.kind === 'malformed') {
    return { kind: 'invalid_handle' };
  }
  if (normalized.kind === 'needs_redirect') {
    return { kind: 'redirect', canonical: normalized.canonical };
  }

  const kv = readKvBinding();
  const result = await fetchSummoner({
    region: args.region,
    gameName: normalized.gameName,
    tagLine: normalized.tagLine,
    lang: args.lang,
    backendUrl: ENV.apiBaseUrl,
    kv,
  });

  return {
    kind: 'fetched',
    result,
    gameName: normalized.gameName,
    tagLine: normalized.tagLine,
  };
}

// ---------------------------------------------------------------------------
// HTTP response side-effects
// ---------------------------------------------------------------------------

function stamp404(noindex = true): void {
  const event = getRequestEvent();
  if (!event) return;
  event.response.status = 404;
  if (noindex) {
    event.response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  event.response.headers.set('Cache-Control', 'public, max-age=60');
}

function stamp503(): void {
  const event = getRequestEvent();
  if (!event) return;
  event.response.status = 503;
  event.response.headers.set('X-Robots-Tag', 'noindex');
  event.response.headers.set('Retry-After', '60');
  event.response.headers.set('Cache-Control', 'no-store');
}

function stampSuccess(opts: {
  isInactive: boolean;
  fromStaleCache: boolean;
}): void {
  const event = getRequestEvent();
  if (!event) return;
  event.response.headers.set(
    'Cache-Control',
    'public, max-age=600, s-maxage=3600',
  );
  if (opts.fromStaleCache) {
    event.response.headers.set('X-Cache', 'STALE-WHILE-ERROR');
  }
  if (opts.isInactive) {
    event.response.headers.set('X-Robots-Tag', 'noindex');
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function SummonerRoute() {
  const params = useParams<{ lang: string; region: string; handle: string }>();
  const lang = () => canonicalLocale(params.lang);

  const state = createAsync(() =>
    resolveState({
      region: params.region,
      handle: params.handle,
      lang: lang(),
    }),
  );

  return (
    <Show when={state()} fallback={<EmptySSRScaffold />}>
      {(s) => <RenderState state={s()} lang={lang()} region={params.region} handle={params.handle} />}
    </Show>
  );
}

function EmptySSRScaffold() {
  // Suspense boundary placeholder. SolidStart awaits `createAsync` server-side
  // before flushing HTML so this only renders during client navigation.
  return <main aria-busy="true" />;
}

interface RenderStateProps {
  state: ResolvedState;
  lang: string;
  region: string;
  handle: string;
}

function RenderState(props: RenderStateProps) {
  // Intentionally branching with a switch-like cascade (Show) so the dependent
  // `state.kind` narrowing flows through TS happily.
  return (
    <Show
      when={props.state.kind === 'invalid_region' && props.state}
      fallback={
        <Show
          when={props.state.kind === 'invalid_handle' && props.state}
          fallback={
            <Show
              when={props.state.kind === 'redirect' && props.state}
              fallback={
                <Show
                  when={props.state.kind === 'fetched' && (props.state as Extract<ResolvedState, { kind: 'fetched' }>)}
                  fallback={null}
                >
                  {(fetched) => (
                    <FetchedBranch
                      fetched={fetched()}
                      lang={props.lang}
                      region={props.region}
                    />
                  )}
                </Show>
              }
            >
              {(redirectState) => (
                <RedirectBranch lang={props.lang} region={props.region} canonical={(redirectState() as Extract<ResolvedState, { kind: 'redirect' }>).canonical} />
              )}
            </Show>
          }
        >
          {() => <NotFoundBranch variant="malformed" lang={props.lang} region={props.region} handle={props.handle} />}
        </Show>
      }
    >
      {() => <NotFoundBranch variant="region" lang={props.lang} region={props.region} handle={props.handle} />}
    </Show>
  );
}

function NotFoundBranch(props: {
  variant: 'region' | 'malformed';
  lang: string;
  region: string;
  handle: string;
}) {
  stamp404();
  return (
    <>
      <NoindexMeta />
      <Navbar />
      <NotFoundSummoner
        variant={props.variant}
        lang={props.lang}
        region={props.region}
        handle={props.handle}
      />
      <Footer />
    </>
  );
}

function RedirectBranch(props: {
  lang: string;
  region: string;
  canonical: string;
}) {
  // Browser-issued 301: SolidStart router can't change response status from
  // inside the render tree the way next/redirect does. We stamp the status
  // here AND emit an HTML <meta http-equiv="refresh"> + a <link rel="canonical">
  // so the redirect lands even if a cache replays the body.
  const event = getRequestEvent();
  const target = `/${props.lang}/summoner/${props.region}/${props.canonical}`;
  if (event) {
    event.response.status = 301;
    event.response.headers.set('Location', target);
    event.response.headers.set('Cache-Control', 'public, max-age=3600');
  }
  return (
    <>
      <NoindexMeta />
      <Meta http-equiv="refresh" content={`0; url=${target}`} />
      <Link rel="canonical" href={`${BASE_URL}${target}`} />
    </>
  );
}

function FetchedBranch(props: {
  fetched: Extract<ResolvedState, { kind: 'fetched' }>;
  lang: string;
  region: string;
}) {
  return (
    <Show
      when={props.fetched.result.kind === 'not_found' && props.fetched.result}
      fallback={
        <Show
          when={props.fetched.result.kind === 'service_unavailable' && props.fetched.result}
          fallback={
            <Show
              when={props.fetched.result.kind === 'success' && (props.fetched.result as Extract<SummonerFetchResult, { kind: 'success' }>)}
              fallback={null}
            >
              {(success) => (
                <SuccessBranch
                  success={success()}
                  lang={props.lang}
                  region={props.region}
                  gameName={props.fetched.gameName}
                  tagLine={props.fetched.tagLine}
                />
              )}
            </Show>
          }
        >
          {() => <UnavailableBranch lang={props.lang} />}
        </Show>
      }
    >
      {() => (
        <NotFoundBranch
          variant="malformed"
          lang={props.lang}
          region={props.region}
          handle={`${props.fetched.gameName}-${props.fetched.tagLine}`}
        />
      )}
    </Show>
  );
}

function UnavailableBranch(props: { lang: string }) {
  stamp503();
  return (
    <>
      <NoindexMeta />
      <Navbar />
      <ServiceUnavailable retryAfterSeconds={60} lang={props.lang} />
      <Footer />
    </>
  );
}

interface SuccessBranchProps {
  success: Extract<SummonerFetchResult, { kind: 'success' }>;
  lang: string;
  region: string;
  gameName: string;
  tagLine: string;
}

function SuccessBranch(props: SuccessBranchProps) {
  const payload = props.success.payload;
  const isInactive = payload.is_inactive;
  const isPrivate = payload.is_private;

  stampSuccess({
    isInactive,
    fromStaleCache: props.success.source === 'stale',
  });

  // MINOR-4 (WP30): SEO meta via i18n keys instead of hardcoded EN. The
  // 8-locale parity gate enforces these keys exist everywhere; EN+IT are
  // fully localized, the other 6 locales fall back to EN copies (consistent
  // with the existing `wp30.*meta.*_template` pattern: EN+IT are the
  // indexable WP30 locales).
  const { t } = useI18n();

  const gameName = payload.summoner_info.game_name;
  const tagLine = payload.summoner_info.tag_line;
  const fullId = `${gameName}#${tagLine}`;
  const regionLabel =
    REGION_DISPLAY[props.region as keyof typeof REGION_DISPLAY] ??
    payload.summoner_info.region_display;

  const interpolate = (key: string, extra: Record<string, string> = {}): string => {
    let out = t(key)
      .replace('{gameName}', gameName)
      .replace('{tagLine}', tagLine)
      .replace('{region}', regionLabel);
    for (const [k, v] of Object.entries(extra)) {
      out = out.replace(`{${k}}`, v);
    }
    return out;
  };

  const title = interpolate('wp30.summoner.meta.title');

  const buildDescription = (): string => {
    if (isPrivate) {
      return interpolate('wp30.summoner.meta.description_private');
    }
    if (isInactive) {
      return interpolate('wp30.summoner.meta.description_inactive');
    }
    if (payload.rank) {
      return interpolate('wp30.summoner.meta.description_ranked', {
        tier: payload.rank.tier,
        division: payload.rank.division,
        wins: String(payload.rank.wins),
        losses: String(payload.rank.losses),
      });
    }
    // Unranked / generic fallback uses the base description key.
    return interpolate('wp30.summoner.meta.description');
  };

  const canonical = `${BASE_URL}/${props.lang}/summoner/${props.region}/${encodeURIComponent(props.gameName)}-${encodeURIComponent(props.tagLine)}`;
  const hreflangPath = `summoner/${props.region}/${encodeURIComponent(props.gameName)}-${encodeURIComponent(props.tagLine)}`;

  return (
    <>
      <Title>{title}</Title>
      <Meta name="description" content={buildDescription()} />
      <Link rel="canonical" href={canonical} />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={buildDescription()} />
      <Meta property="og:url" content={canonical} />
      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={buildDescription()} />
      <HreflangCluster path={hreflangPath} baseUrl={BASE_URL} />
      <JsonLdPerson summoner={payload} regionDisplay={regionLabel} />
      {isInactive ? <NoindexMeta /> : null}

      <Navbar />
      <main>
        <SummonerHeader info={payload.summoner_info} rank={payload.rank} />

        {isPrivate ? (
          <PrivatePlayerNotice />
        ) : isInactive ? (
          <InactivePlayerNotice lang={props.lang} />
        ) : (
          <>
            <ChampionStatsTable stats={payload.champion_stats ?? []} />
            <RecentMatchesList matches={payload.recent_matches ?? []} />
          </>
        )}

        <RiotDisclaimer />
      </main>
      <Footer />
    </>
  );
}
