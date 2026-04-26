// WP31 F4-10 — Generate Review CTA with 3-step loading stepper (OP-033).
//
// Surface for `POST /api/v1/premium/match/{id}/review`. Disabled when the
// daily quota is exhausted; tooltip shows quota usage. On error, surfaces a
// localized message + "Try again" affordance. Keeps the user informed during
// the ~5-8s AI call by stepping through 3 i18n labels.

import { Show, createSignal, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import {
  AiProviderError,
  RateLimitedError,
  generateReview,
} from '../../services/match-api';
import type { MatchId, QuotaResponse, ReviewResponse } from '../../types/wp31';
import { formatResetTime } from './DailyQuotaBadge';

export type StepperStage = 'idle' | 'timeline' | 'highlights' | 'summary';

export interface GenerateReviewCTAProps {
  matchId: MatchId;
  /** Live quota accessor — drives disabled state + tooltip. */
  quota?: QuotaResponse | null | (() => QuotaResponse | null | undefined);
  /** Called with the new review when generation succeeds. */
  onSuccess?: (review: ReviewResponse) => void;
  /** Override the default fetcher (used by tests). */
  generate?: typeof generateReview;
}

const STEP_KEY: Readonly<Record<Exclude<StepperStage, 'idle'>, string>> = {
  timeline: 'match.review.loading.step.timeline',
  highlights: 'match.review.loading.step.highlights',
  summary: 'match.review.loading.step.summary',
};

function readQuota(
  q: GenerateReviewCTAProps['quota'],
): QuotaResponse | null | undefined {
  return typeof q === 'function' ? q() : q;
}

export function GenerateReviewCTA(props: GenerateReviewCTAProps): JSX.Element {
  const { t } = useI18n();

  const [stage, setStage] = createSignal<StepperStage>('idle');
  const [error, setError] = createSignal<{ kind: 'rate_limited' | 'provider' | 'generic'; resetAt?: string } | null>(
    null,
  );

  const quota = () => readQuota(props.quota);
  const exhausted = (): boolean => {
    const q = quota();
    if (!q) return false;
    return q.used >= q.limit;
  };
  const remaining = (): number => {
    const q = quota();
    if (!q) return 10;
    return Math.max(0, q.limit - q.used);
  };

  const tooltip = (): string => {
    const q = quota();
    if (q && exhausted()) {
      return t('match.review.cta.generate.disabled.tooltip').replace(
        '{time}',
        formatResetTime(q.reset_at),
      );
    }
    return t('match.review.cta.generate.tooltip').replace(
      '{limit}',
      String(q?.limit ?? 10),
    );
  };

  // Stepper labels are advanced on a coarse timer — the actual backend call
  // is a single network round-trip. The labels exist purely to give the user
  // confidence during the wait (REQ-F-031-022). If the backend resolves
  // before the timers fire we still flip to `idle` immediately.
  let timer1: ReturnType<typeof setTimeout> | undefined;
  let timer2: ReturnType<typeof setTimeout> | undefined;

  const clearTimers = (): void => {
    if (timer1) clearTimeout(timer1);
    if (timer2) clearTimeout(timer2);
    timer1 = undefined;
    timer2 = undefined;
  };

  const onClick = async (): Promise<void> => {
    if (stage() !== 'idle' || exhausted()) return;
    setError(null);
    setStage('timeline');
    timer1 = setTimeout(() => {
      if (stage() !== 'idle') setStage('highlights');
    }, 1500);
    timer2 = setTimeout(() => {
      if (stage() !== 'idle') setStage('summary');
    }, 4000);

    try {
      const fn = props.generate ?? generateReview;
      const review = await fn(props.matchId);
      props.onSuccess?.(review);
    } catch (err) {
      if (err instanceof RateLimitedError) {
        const q = quota();
        setError({ kind: 'rate_limited', resetAt: q?.reset_at });
      } else if (err instanceof AiProviderError) {
        setError({ kind: 'provider' });
      } else {
        setError({ kind: 'generic' });
      }
    } finally {
      clearTimers();
      setStage('idle');
    }
  };

  return (
    <section class="my-8 text-center" data-testid="generate-review-cta">
      <Show
        when={stage() === 'idle'}
        fallback={
          <div
            role="status"
            aria-live="polite"
            aria-label={t('match.review.loading.aria')}
            data-testid="generate-review-loading"
            data-stage={stage()}
            class="rounded-2xl border border-primary/20 bg-surface-variant/5 p-6"
          >
            <p class="text-on-surface font-bold mb-2">{t('match.review.loading.title')}</p>
            <p class="text-on-surface-variant text-sm mb-4">{t('match.review.loading.body')}</p>
            <ol class="text-left max-w-xs mx-auto space-y-2 text-sm">
              {(['timeline', 'highlights', 'summary'] as const).map((step) => (
                <li
                  data-testid={`generate-review-step-${step}`}
                  class={
                    stage() === step
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant'
                  }
                >
                  - {t(STEP_KEY[step])}
                </li>
              ))}
            </ol>
          </div>
        }
      >
        <h2 class="text-lg font-bold font-headline text-on-surface mb-2">
          {t('match.review.cta.generate.title')}
        </h2>
        <p class="text-on-surface-variant text-sm max-w-md mx-auto mb-4">
          {t('match.review.cta.generate.body')}
        </p>
        <button
          type="button"
          class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-on-primary font-bold disabled:bg-surface-variant/30 disabled:text-on-surface-variant/60 disabled:cursor-not-allowed transition-colors hover:bg-primary/90"
          disabled={exhausted()}
          title={tooltip()}
          aria-disabled={exhausted()}
          aria-label={t('match.review.cta.generate.button')}
          data-testid="generate-review-button"
          data-quota-remaining={remaining()}
          onClick={() => void onClick()}
        >
          {t('match.review.cta.generate.button')}
        </button>
      </Show>

      <Show when={error()} keyed>
        {(e) => (
          <div role="alert" class="mt-4 text-sm" data-testid="generate-review-error" data-kind={e.kind}>
            <Show when={e.kind === 'rate_limited'}>
              <p class="text-error">
                {t('match.review.error.quota_exceeded.body')
                  .replace('{limit}', String(quota()?.limit ?? 10))
                  .replace('{time}', e.resetAt ? formatResetTime(e.resetAt) : '--:--')}
              </p>
            </Show>
            <Show when={e.kind === 'provider' || e.kind === 'generic'}>
              <p class="text-error">{t('match.review.error.generation.body')}</p>
              <button
                type="button"
                class="mt-2 underline text-primary"
                onClick={() => void onClick()}
                data-testid="generate-review-retry"
              >
                {t('match.review.error.generation.retry')}
              </button>
            </Show>
          </div>
        )}
      </Show>
    </section>
  );
}

export default GenerateReviewCTA;
