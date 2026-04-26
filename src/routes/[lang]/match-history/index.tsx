// WP31 F4-11 — `/[lang]/match-history` Premium-only dashboard route.
//
// SSR pre-render with three layers of protection (security-design.md §2):
//   1. Layer 1 — `requirePremium(event)` decodes the JWT carried in the
//      request. Free / unauthenticated users are 302'd to `/[lang]/pricing`
//      before any data fetch happens.
//   2. Layer 2 — `<PaywallGate>` intercepts a backend `403 premium_required`
//      (race window when the JWT is stale) and renders an inline upsell
//      without leaving the page.
//   3. Layer 3 — the backend itself enforces `Depends(require_premium)` on
//      the underlying endpoint.
//
// SEO: review history is private content (REQ-NF-031-007). The route emits
// a `<meta name="robots" content="noindex,nofollow">` and the `_headers`
// file mirrors that with `X-Robots-Tag: noindex, nofollow` at the edge
// (defense-in-depth).
//
// Carve-out: text-first MVP per OP-027 (Stitch frame deferred to WP37,
// tracked in `dev-repository/wp-37/stitch-wp31-frames-handoff.md`).

import { Title, Meta } from '@solidjs/meta';
import { createAsync, useParams } from '@solidjs/router';
import { Show, createSignal } from 'solid-js';
import { getRequestEvent } from 'solid-js/web';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { NoindexMeta } from '../../../components/seo/NoindexMeta';
import { useI18n } from '../../../i18n';
import { requirePremium, type RequireEventLike } from '../../../lib/auth/require-premium';
import {
  getMatchHistory,
  getQuota,
  PremiumRequiredError,
} from '../../../services/match-api';
import type { MatchHistoryResponse, QuotaResponse } from '../../../types/wp31';
import { MatchHistoryList } from '../../../components/match/MatchHistoryList';
import { DailyQuotaBadge } from '../../../components/match/DailyQuotaBadge';
import { PaywallGate } from '../../../components/match/PaywallGate';
import { EmptyState } from '../../../components/match/EmptyState';

// ---------------------------------------------------------------------------
// SSR loader — runs on every request, never on the client.
// ---------------------------------------------------------------------------

interface LoaderState {
  history: MatchHistoryResponse | null;
  quota: QuotaResponse | null;
  /** True when the backend returned 403 — drives <PaywallGate>. */
  paywalled: boolean;
  /** True when the loader could not reach the backend. */
  unavailable: boolean;
}

/**
 * Adapter from the Solid `getRequestEvent` shape to `RequireEventLike`. The
 * SolidStart event has `request: Request` and exposes the same `headers` /
 * `url` fields the gate cares about, but we keep the conversion explicit so
 * it's easy to mock in unit tests.
 */
function asRequireEvent(): RequireEventLike | null {
  const event = getRequestEvent();
  if (!event) return null;
  return { request: event.request };
}

function readJwtFromCookie(): string | null {
  const event = getRequestEvent();
  if (!event) return null;
  const cookieHeader = event.request.headers.get('cookie');
  if (!cookieHeader) return null;
  for (const cookie of cookieHeader.split(';')) {
    const eq = cookie.indexOf('=');
    if (eq <= 0) continue;
    const name = cookie.slice(0, eq).trim();
    if (name !== 'jwt') continue;
    return cookie.slice(eq + 1).trim() || null;
  }
  // Authorization header is not used by the browser fetch wrapper, but the
  // service layer accepts an explicit jwt; on SSR we read it from cookies.
  const auth = event.request.headers.get('authorization');
  if (auth) {
    const match = auth.match(/^Bearer\s+(.+)$/i);
    if (match) return match[1].trim();
  }
  return null;
}

async function loadDashboard(): Promise<LoaderState> {
  const event = asRequireEvent();
  if (event) {
    // Throws redirect() on Layer 1 fail — short-circuits before any fetch.
    requirePremium(event);
  }

  const jwt = readJwtFromCookie();
  // No JWT here means SSR is running outside a browser request (e.g. dev
  // SSR pre-warm). Skip the fetch — the route falls back to the paywall
  // CSR layer, and the explicit `requirePremium` gate above already 302'd
  // when running in a real request flow.
  if (!jwt) {
    return { history: null, quota: null, paywalled: false, unavailable: true };
  }

  try {
    const [history, quota] = await Promise.all([
      getMatchHistory({ jwt, limit: 25 }),
      getQuota({ jwt }),
    ]);
    return { history, quota, paywalled: false, unavailable: false };
  } catch (err) {
    if (err instanceof PremiumRequiredError) {
      return { history: null, quota: null, paywalled: true, unavailable: false };
    }
    return { history: null, quota: null, paywalled: false, unavailable: true };
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function MatchHistoryRoute() {
  const { t } = useI18n();
  const params = useParams<{ lang: string }>();
  const data = createAsync(() => loadDashboard());

  // CSR fallback: when the user navigates client-side after the JWT has
  // become stale, the service layer throws `PremiumRequiredError` and we
  // flip this signal so `<PaywallGate>` shows the upsell without leaving
  // the page. Bound to the SSR result on first render.
  const [csrPaywalled, setCsrPaywalled] = createSignal(false);
  const isPaywalled = () => csrPaywalled() || (data()?.paywalled ?? false);

  return (
    <>
      <Title>{t('match.history.title')}</Title>
      <Meta name="description" content={t('match.history.meta.description')} />
      <NoindexMeta />
      <Navbar />
      <main class="min-h-screen px-4 sm:px-8 py-8 max-w-5xl mx-auto" data-testid="match-history-page">
        <PaywallGate enabled={isPaywalled} pricingHref={`/${params.lang}/pricing`}>
          <header class="flex flex-wrap items-baseline justify-between gap-4 mb-6">
            <div>
              <h1 class="text-3xl sm:text-5xl font-extrabold font-headline text-on-surface">
                {t('match.history.heading')}
              </h1>
              <p class="text-on-surface-variant mt-1">{t('match.history.subtitle')}</p>
            </div>
            <DailyQuotaBadge quota={() => data()?.quota ?? null} />
          </header>

          <Show when={data()} keyed>
            {(state) => (
              <Show
                when={state.history && state.history.items.length > 0}
                fallback={
                  <Show
                    when={state.unavailable}
                    fallback={
                      <EmptyState
                        title={t('match.history.empty.zero.title')}
                        body={t('match.history.empty.zero.body')}
                        cta={{
                          label: t('match.history.empty.zero.cta'),
                          href: `/${params.lang}/`,
                        }}
                      />
                    }
                  >
                    <EmptyState
                      title={t('match.history.error.generic.title')}
                      body={t('match.history.error.generic.body')}
                    />
                  </Show>
                }
              >
                <Show when={state.history} keyed>
                  {(history) => (
                    <MatchHistoryList
                      initial={history}
                      fetchPage={async ({ cursor, limit }) => {
                        try {
                          return await getMatchHistory({ cursor, limit });
                        } catch (err) {
                          if (err instanceof PremiumRequiredError) {
                            setCsrPaywalled(true);
                          }
                          throw err;
                        }
                      }}
                    />
                  )}
                </Show>
              </Show>
            )}
          </Show>
        </PaywallGate>
      </main>
      <Footer />
    </>
  );
}
