// WP31 F4-12 — `/[lang]/match/[id]` Premium-only review detail route.
//
// SSR pre-render gated by `requirePremium(event)` (Layer 1). Inside the page
// we render:
//   - <MatchSummaryCard variant="detail">  — champion / KDA / queue / model
//   - <HighlightSection>                   — 8-type chronological list (null
//                                            when the array is empty, OP-035)
//   - <SummaryBlock> + EN/IT toggle        — when a review exists
//   - <GenerateReviewCTA>                  — when no review yet
//
// Cold-storage matches (>90 days) trigger a longer SSR load — the empty
// scaffold during that wait is the same `aria-busy` pattern used on the
// summoner page (WP30).
//
// SEO: `<meta name="robots" content="noindex,nofollow">` + edge `_headers`
// `X-Robots-Tag` rule. Review pages are private content (REQ-NF-031-007).
// Carve-out: text-first MVP, no Stitch frame (OP-027).

import { Title, Meta } from '@solidjs/meta';
import { createAsync, useParams } from '@solidjs/router';
import { Show, createSignal } from 'solid-js';
import { getRequestEvent } from 'solid-js/web';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { NoindexMeta } from '../../../components/seo/NoindexMeta';
import { useI18n } from '../../../i18n';
import { isValidLocale, type Locale } from '../../../types/locale';
import { requirePremium, type RequireEventLike } from '../../../lib/auth/require-premium';
import {
  getMatchDetail,
  NotFoundError,
  PremiumRequiredError,
} from '../../../services/match-api';
import type { MatchDetail, ReviewResponse } from '../../../types/wp31';
import { MatchSummaryCard } from '../../../components/match/MatchSummaryCard';
import { HighlightSection } from '../../../components/match/HighlightSection';
import { SummaryBlock, type SummaryLanguage } from '../../../components/match/SummaryBlock';
import { GenerateReviewCTA } from '../../../components/match/GenerateReviewCTA';
import { PaywallGate } from '../../../components/match/PaywallGate';
import { EmptyState } from '../../../components/match/EmptyState';

// ---------------------------------------------------------------------------
// SSR loader
// ---------------------------------------------------------------------------

interface DetailLoaderState {
  detail: MatchDetail | null;
  paywalled: boolean;
  notFound: boolean;
  unavailable: boolean;
}

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
  const auth = event.request.headers.get('authorization');
  if (auth) {
    const match = auth.match(/^Bearer\s+(.+)$/i);
    if (match) return match[1].trim();
  }
  return null;
}

async function loadDetail(matchId: string): Promise<DetailLoaderState> {
  const event = asRequireEvent();
  if (event) {
    requirePremium(event);
  }

  const jwt = readJwtFromCookie();
  if (!jwt) {
    return { detail: null, paywalled: false, notFound: false, unavailable: true };
  }

  try {
    const detail = await getMatchDetail(matchId, { jwt });
    return { detail, paywalled: false, notFound: false, unavailable: false };
  } catch (err) {
    if (err instanceof PremiumRequiredError) {
      return { detail: null, paywalled: true, notFound: false, unavailable: false };
    }
    if (err instanceof NotFoundError) {
      return { detail: null, paywalled: false, notFound: true, unavailable: false };
    }
    return { detail: null, paywalled: false, notFound: false, unavailable: true };
  }
}

function pickInitialLanguage(lang: string | undefined): SummaryLanguage {
  if (!lang) return 'en';
  const locale: Locale | null = isValidLocale(lang) ? lang : null;
  return locale === 'it' ? 'it' : 'en';
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function MatchReviewRoute() {
  const { t } = useI18n();
  const params = useParams<{ lang: string; id: string }>();

  const data = createAsync(() => loadDetail(params.id));
  const [csrPaywalled, setCsrPaywalled] = createSignal(false);
  const isPaywalled = () => csrPaywalled() || (data()?.paywalled ?? false);

  // Local-only review state — overrides the SSR `detail.review` on success
  // so the `<GenerateReviewCTA>` swaps to `<SummaryBlock>` without a full
  // page reload (no SSR re-render needed).
  const [latestReview, setLatestReview] = createSignal<ReviewResponse | null>(null);
  const review = (): ReviewResponse | null =>
    latestReview() ?? data()?.detail?.review ?? null;

  const [language, setLanguage] = createSignal<SummaryLanguage>(
    pickInitialLanguage(params.lang),
  );

  return (
    <>
      <Title>{t('match.review.title')}</Title>
      <Meta name="description" content={t('match.review.meta.description')} />
      <NoindexMeta />
      <Navbar />
      <main
        class="min-h-screen px-4 sm:px-8 py-8 max-w-4xl mx-auto"
        data-testid="match-review-page"
        data-match-id={params.id}
      >
        <PaywallGate enabled={isPaywalled} pricingHref={`/${params.lang}/pricing`}>
          <Show
            when={data()}
            fallback={<p class="text-on-surface-variant" aria-busy="true">{t('match.history.loading')}</p>}
            keyed
          >
            {(state) => (
              <Show
                when={state.detail}
                keyed
                fallback={
                  <Show
                    when={state.notFound}
                    fallback={
                      <EmptyState
                        title={t('match.review.error.timeline_unavailable.title')}
                        body={t('match.review.error.timeline_unavailable.body')}
                      />
                    }
                  >
                    <EmptyState
                      title={t('match.review.error.not_found.title')}
                      body={t('match.review.error.not_found.body')}
                      cta={{
                        label: t('match.history.heading'),
                        href: `/${params.lang}/match-history`,
                      }}
                    />
                  </Show>
                }
              >
                {(detail) => (
                  <>
                    <header class="mb-6">
                      <h1 class="text-3xl sm:text-5xl font-extrabold font-headline text-on-surface mb-2">
                        {t('match.review.heading')}
                      </h1>
                      <Show
                        when={review()}
                        keyed
                        fallback={
                          <p class="text-on-surface-variant">
                            {t('match.review.subtitle.no_review')}
                          </p>
                        }
                      >
                        {(r) => (
                          <p class="text-on-surface-variant">
                            {t('match.review.subtitle.with_review').replace(
                              '{date}',
                              new Date(r.generated_at).toISOString().slice(0, 10),
                            )}
                          </p>
                        )}
                      </Show>
                    </header>

                    <MatchSummaryCard
                      match={{
                        match_id: detail.match_id,
                        region: detail.region,
                        queue: detail.queue,
                        played_at: detail.played_at,
                        summary: detail.summary,
                        has_review: review() != null,
                      }}
                      variant="detail"
                      model={review()?.model_used}
                      selectionReason={review()?.selection_reason}
                    />

                    <Show
                      when={review()}
                      keyed
                      fallback={
                        <GenerateReviewCTA
                          matchId={detail.match_id}
                          quota={null}
                          onSuccess={(r) => setLatestReview(r)}
                        />
                      }
                    >
                      {(r) => (
                        <>
                          <SummaryBlock
                            review={r}
                            language={language}
                            onLanguageChange={setLanguage}
                          />
                          <HighlightSection highlights={r.highlights} />
                        </>
                      )}
                    </Show>
                  </>
                )}
              </Show>
            )}
          </Show>
        </PaywallGate>
      </main>
      <Footer />
    </>
  );
}
