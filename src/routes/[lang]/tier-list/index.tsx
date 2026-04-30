// WP30 — Public tier list page (REQ-F-030-002/006/007/008/013/015).
//
// Route: `/[lang]/tier-list?role=<role>&patch=<patch>`. Filter form uses
// plain `<form method="GET">` so the page reloads SSR (DEC-OP-024) without
// any client-side JS handler.
//
// Branches:
//   - role/patch query params invalid    -> server normalizes silently
//                                            (route handler validates `role`
//                                            against whitelist, drops `patch`
//                                            if it's not /^\d+\.\d+$/).
//   - service_unavailable                 -> 503 + Retry-After 60 + noindex
//   - patch_not_found (BE 404)            -> 200 + Cache-Control 60s + noindex
//                                            + TierListEmpty (MINOR-5).
//   - insufficient_sample === true        -> 200 + Cache-Control 1h + noindex
//   - sufficient                          -> 200 + Cache-Control 24h + JSON-LD
//
// Carve-out (DEC-OP-008): no Stitch frame for tier list page.

import { Title, Meta, Link } from '@solidjs/meta';
import { createAsync, useParams, useSearchParams } from '@solidjs/router';
import { Show } from 'solid-js';
import { getRequestEvent } from 'solid-js/web';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { NoindexMeta } from '../../../components/seo/NoindexMeta';
import { HreflangCluster } from '../../../components/seo/HreflangCluster';
import { JsonLdItemList } from '../../../components/seo/JsonLdItemList';
import { RiotDisclaimer } from '../../../components/seo/RiotDisclaimer';
import { ServiceUnavailable } from '../../../components/wp30/ServiceUnavailable';
import { TierListEmpty } from '../../../components/wp30/TierListEmpty';
import { TierListTable } from '../../../components/wp30/TierListTable';
import { ENV } from '../../../config/env';
import { canonicalLocale } from '../../../lib/i18n/locales';
import { fetchTierList, type TierListFetchResult } from '../../../services/tier-list-api';
import { BASE_URL } from '../../../lib/seo/routes';
import { useI18n } from '../../../i18n';
import type { KVNamespaceLike } from '../../../lib/kv-cache';

const ALLOWED_ROLES = ['all', 'top', 'jungle', 'mid', 'bot', 'support'] as const;
type AllowedRole = (typeof ALLOWED_ROLES)[number];
const PATCH_REGEX = /^\d+\.\d+$/;

function normalizeRole(raw: string | string[] | undefined): AllowedRole {
  const v = Array.isArray(raw) ? raw[0] : raw;
  if (typeof v === 'string' && (ALLOWED_ROLES as readonly string[]).includes(v)) {
    return v as AllowedRole;
  }
  return 'all';
}

function normalizePatch(raw: string | string[] | undefined): string | undefined {
  const v = Array.isArray(raw) ? raw[0] : raw;
  if (typeof v === 'string' && PATCH_REGEX.test(v)) return v;
  return undefined;
}

// ---------------------------------------------------------------------------
// Cloudflare KV access (mirrors summoner route helper)
// ---------------------------------------------------------------------------

function readKvBinding(): KVNamespaceLike | undefined {
  const event = getRequestEvent();
  if (!event) return undefined;
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

// ---------------------------------------------------------------------------
// HTTP response stamps
// ---------------------------------------------------------------------------

function stamp503(): void {
  const event = getRequestEvent();
  if (!event) return;
  event.response.status = 503;
  event.response.headers.set('X-Robots-Tag', 'noindex');
  event.response.headers.set('Retry-After', '60');
  event.response.headers.set('Cache-Control', 'no-store');
}

function stampSuccess(opts: {
  insufficientSample: boolean;
  fromStaleCache: boolean;
}): void {
  const event = getRequestEvent();
  if (!event) return;
  event.response.headers.set(
    'Cache-Control',
    opts.insufficientSample
      ? 'public, max-age=1800, s-maxage=3600'
      : 'public, max-age=3600, s-maxage=86400',
  );
  if (opts.fromStaleCache) {
    event.response.headers.set('X-Cache', 'STALE-WHILE-ERROR');
  }
  if (opts.insufficientSample) {
    event.response.headers.set('X-Robots-Tag', 'noindex');
  }
}

// MINOR-5 (WP30): PATCH_NOT_FOUND BE response. The page is reachable but no
// snapshot exists yet for (role, patch). We render TierListEmpty at 200 +
// noindex + short-cache (60s). Mirrors the BE Cache-Control on PATCH_NOT_FOUND.
function stampPatchNotFound(): void {
  const event = getRequestEvent();
  if (!event) return;
  event.response.status = 200;
  event.response.headers.set('X-Robots-Tag', 'noindex');
  event.response.headers.set('Cache-Control', 'public, max-age=60');
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function TierListRoute() {
  const params = useParams<{ lang: string }>();
  const [searchParams] = useSearchParams();
  const lang = () => canonicalLocale(params.lang);
  const role = () => normalizeRole(searchParams.role);
  const patch = () => normalizePatch(searchParams.patch);

  const { t } = useI18n();
  const baselineRoleLabel = () => t(`wp30.tier_list.filter.role.${role()}`);
  const cleanTemplate = (raw: string) =>
    raw
      .replace(/—\s*Patch\s*(?=[—|])/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  const baselineTitle = () => {
    const raw = t('wp30.tier_list.meta.title')
      .replace('{role}', baselineRoleLabel())
      .replace('{patch}', patch() ?? '');
    return patch() ? raw : cleanTemplate(raw);
  };
  const baselineDescription = () => {
    const raw = t('wp30.tier_list.meta.description')
      .replace('{role}', baselineRoleLabel())
      .replace('{patch}', patch() ?? '');
    return patch() ? raw : cleanTemplate(raw);
  };
  const baselineQs = () => {
    const parts: string[] = [];
    if (role() !== 'all') parts.push(`role=${role()}`);
    if (patch()) parts.push(`patch=${patch()}`);
    return parts.length === 0 ? '' : `?${parts.join('&')}`;
  };
  const baselineCanonical = () => `${BASE_URL}/${lang()}/tier-list${baselineQs()}`;
  const baselineHreflangPath = () => `tier-list${baselineQs()}`;

  const result = createAsync(async () => {
    const kv = readKvBinding();
    return fetchTierList({
      role: role(),
      patch: patch(),
      lang: lang(),
      backendUrl: ENV.apiBaseUrl,
      kv,
    });
  });

  return (
    <>
      <Title>{baselineTitle()}</Title>
      <Meta name="description" content={baselineDescription()} />
      <Link rel="canonical" href={baselineCanonical()} />
      <Meta property="og:title" content={baselineTitle()} />
      <Meta property="og:description" content={baselineDescription()} />
      <Meta property="og:url" content={baselineCanonical()} />
      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:title" content={baselineTitle()} />
      <Meta name="twitter:description" content={baselineDescription()} />
      <HreflangCluster path={baselineHreflangPath()} baseUrl={BASE_URL} />
      <Show when={result()} fallback={<main aria-busy="true" />}>
        {(r) => <RenderResult result={r()} role={role()} patch={patch()} lang={lang()} />}
      </Show>
    </>
  );
}

interface RenderResultProps {
  result: TierListFetchResult;
  role: AllowedRole;
  patch: string | undefined;
  lang: string;
}

function RenderResult(props: RenderResultProps) {
  // Discriminated union dispatch. Cascade pattern matches existing summoner
  // page style (see /[lang]/summoner/[region]/[handle].tsx).
  return (
    <Show
      when={props.result.kind === 'service_unavailable' && props.result}
      fallback={
        <Show
          when={props.result.kind === 'patch_not_found' && props.result}
          fallback={
            <Show
              when={props.result.kind === 'success' && (props.result as Extract<TierListFetchResult, { kind: 'success' }>)}
              fallback={null}
            >
              {(success) => (
                <SuccessBranch
                  success={success()}
                  role={props.role}
                  patch={props.patch}
                  lang={props.lang}
                />
              )}
            </Show>
          }
        >
          {() => (
            <PatchNotFoundBranch
              role={props.role}
              patch={props.patch}
              lang={props.lang}
            />
          )}
        </Show>
      }
    >
      {() => <UnavailableBranch lang={props.lang} />}
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

function PatchNotFoundBranch(props: {
  role: AllowedRole;
  patch: string | undefined;
  lang: string;
}) {
  // MINOR-5 (WP30): when the BE returns 404 PATCH_NOT_FOUND we still render a
  // navigable page (200) so the user lands on a curated empty state with
  // suggested filters, instead of a generic outage page. `patch` may be
  // undefined (auto-resolution miss) — TierListEmpty accepts that.
  stampPatchNotFound();
  const { t } = useI18n();
  // Best-effort role label even on the empty state — consistent with success
  // copy. Patch is unknown ("auto" miss): pass empty string to the component
  // which renders the suggestions block regardless.
  const patchLabel = props.patch ?? '';
  const heading = t('wp30.tier_list.heading').replace('{patch}', patchLabel);
  return (
    <>
      <NoindexMeta />
      <Navbar />
      <main class="max-w-6xl mx-auto px-8 py-12">
        <header class="mb-8 max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-2">
            {heading}
          </h1>
        </header>
        <TierListEmpty role={props.role} patch={patchLabel} lang={props.lang} />
        <RiotDisclaimer />
      </main>
      <Footer />
    </>
  );
}

function SuccessBranch(props: {
  success: Extract<TierListFetchResult, { kind: 'success' }>;
  role: AllowedRole;
  patch: string | undefined;
  lang: string;
}) {
  const payload = props.success.payload;
  const insufficient = payload.insufficient_sample;

  stampSuccess({
    insufficientSample: insufficient,
    fromStaleCache: props.success.source === 'stale',
  });

  // MINOR-3 (WP30): SEO meta tags via i18n keys instead of hardcoded EN.
  // The 8-locale parity gate enforces these keys exist in every locale; EN
  // falls back to itself, IT is fully localized, the rest copy EN by design
  // (consistent with the existing `wp30.*meta.*_template` pattern — IT/EN are
  // the indexable locales for WP30 SEO scope).
  const { t } = useI18n();
  const roleLabel = t(`wp30.tier_list.filter.role.${props.role}`);
  const title = t('wp30.tier_list.meta.title')
    .replace('{role}', roleLabel)
    .replace('{patch}', payload.patch);
  const description = t('wp30.tier_list.meta.description')
    .replace('{role}', roleLabel)
    .replace('{patch}', payload.patch);

  // Canonical: only functional query params (role, patch). Drop UTM and any
  // unknown params for SEO consolidation.
  const canonicalQs = (() => {
    const parts: string[] = [];
    if (props.role !== 'all') parts.push(`role=${props.role}`);
    if (props.patch) parts.push(`patch=${props.patch}`);
    return parts.length === 0 ? '' : `?${parts.join('&')}`;
  })();
  const canonical = `${BASE_URL}/${props.lang}/tier-list${canonicalQs}`;
  const hreflangPath = `tier-list${canonicalQs}`;

  return (
    <>
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <Link rel="canonical" href={canonical} />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:url" content={canonical} />
      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <HreflangCluster path={hreflangPath} baseUrl={BASE_URL} />
      {insufficient ? <NoindexMeta /> : (
        <JsonLdItemList tiers={payload.tiers} role={props.role} patch={payload.patch} />
      )}

      <Navbar />
      <main class="max-w-6xl mx-auto px-8 py-12">
        <TierListHeading role={props.role} patch={payload.patch} />
        <TierListFilters role={props.role} patch={props.patch} lang={props.lang} />

        {insufficient ? (
          <TierListEmpty role={props.role} patch={payload.patch} lang={props.lang} />
        ) : (
          <TierListTable
            tiers={payload.tiers}
            lang={props.lang as 'en' | 'it'}
            currentRole={props.role}
          />
        )}

        <RiotDisclaimer />
      </main>
      <Footer />
    </>
  );
}

function TierListHeading(props: { role: AllowedRole; patch: string }) {
  const { t } = useI18n();
  return (
    <header class="mb-8 max-w-3xl">
      <h1 class="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-2">
        {t('wp30.tier_list.heading').replace('{patch}', props.patch)}
      </h1>
      <p class="text-on-surface-variant">
        {props.role === 'all'
          ? t('wp30.tier_list.subheading_all_roles')
          : t('wp30.tier_list.subheading_role').replace(
              '{role}',
              t(`wp30.tier_list.filter.role.${props.role}`),
            )}
      </p>
      <p class="text-xs text-on-surface-variant/70 mt-3 max-w-prose">
        {t('wp30.tier_list.intro_body')}
      </p>
    </header>
  );
}

function TierListFilters(props: {
  role: AllowedRole;
  patch: string | undefined;
  lang: string;
}) {
  const { t } = useI18n();
  return (
    <form
      method="get"
      action={`/${props.lang}/tier-list`}
      class="flex flex-wrap items-end gap-4 mb-8 rounded-lg border border-outline-variant/20 bg-surface-variant/5 p-4"
    >
      <label class="flex flex-col gap-1">
        <span class="text-xs uppercase tracking-widest text-on-surface-variant/70">
          {t('wp30.tier_list.filter.role_label')}
        </span>
        <select
          name="role"
          value={props.role}
          class="rounded-md border border-outline-variant/40 bg-background px-3 py-2 text-sm text-on-surface"
        >
          <option value="all">{t('wp30.tier_list.filter.role.all')}</option>
          <option value="top">{t('wp30.tier_list.filter.role.top')}</option>
          <option value="jungle">{t('wp30.tier_list.filter.role.jungle')}</option>
          <option value="mid">{t('wp30.tier_list.filter.role.mid')}</option>
          <option value="bot">{t('wp30.tier_list.filter.role.bot')}</option>
          <option value="support">{t('wp30.tier_list.filter.role.support')}</option>
        </select>
      </label>

      <label class="flex flex-col gap-1">
        <span class="text-xs uppercase tracking-widest text-on-surface-variant/70">
          {t('wp30.tier_list.filter.patch_label')}
        </span>
        <input
          type="text"
          name="patch"
          inputMode="decimal"
          placeholder="14.20"
          pattern="\d+\.\d+"
          value={props.patch ?? ''}
          class="rounded-md border border-outline-variant/40 bg-background px-3 py-2 text-sm text-on-surface w-28"
        />
      </label>

      <button
        type="submit"
        class="rounded-lg bg-primary-container text-on-primary-container px-5 py-2 font-headline font-extrabold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
      >
        {t('wp30.tier_list.filter.apply_button')}
      </button>
    </form>
  );
}
