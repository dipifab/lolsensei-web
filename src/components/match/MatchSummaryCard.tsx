// WP31 F4-08 — Match summary card.
//
// Renders the user's own participant snapshot for a given match: champion,
// role, outcome, KDA, CS, gold, vision score, duration. Used both inside
// `<MatchHistoryList>` items (compact variant) and at the top of the review
// detail page (full variant).
//
// The component is presentational: it does not fetch data and does not own
// state. Variants are explicit so the caller decides density.

import { Show, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import type {
  MatchHistoryItem,
  MatchQueue,
  MatchRole,
  MatchSummary,
  ReviewModel,
  ReviewSelectionReason,
} from '../../types/wp31';

export interface MatchSummaryCardProps {
  /** Single source of truth for shape — used by both list and detail. */
  match: MatchHistoryItem;
  /** When `'compact'`, hides gold/vision and uses smaller typography (list view). */
  variant?: 'compact' | 'detail';
  /** Optional review model badge shown in detail variant. */
  model?: ReviewModel;
  /** Optional model selection reason (drives short_match label). */
  selectionReason?: ReviewSelectionReason;
}

const ROLE_KEY: Readonly<Record<Exclude<MatchRole, ''>, string>> = {
  TOP: 'match.review.summary.role.top',
  JUNGLE: 'match.review.summary.role.jungle',
  MIDDLE: 'match.review.summary.role.mid',
  BOTTOM: 'match.review.summary.role.adc',
  UTILITY: 'match.review.summary.role.support',
};

const QUEUE_KEY: Readonly<Record<MatchQueue, string>> = {
  ranked_solo: 'match.review.summary.queue.solo',
  ranked_flex: 'match.review.summary.queue.flex',
  clash: 'match.review.summary.queue.clash',
};

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function formatDuration(seconds: number): { minutes: number; seconds: number } {
  const safe = Math.max(0, Math.floor(seconds));
  return { minutes: Math.floor(safe / 60), seconds: safe % 60 };
}

export function MatchSummaryCard(props: MatchSummaryCardProps): JSX.Element {
  const { t } = useI18n();
  const variant = (): 'compact' | 'detail' => props.variant ?? 'detail';
  const summary = (): MatchSummary => props.match.summary;

  const roleLabel = (): string => {
    const role = summary().role;
    if (role === '') return '-';
    return t(ROLE_KEY[role]);
  };

  const queueLabel = (): string => t(QUEUE_KEY[props.match.queue]);

  const isWin = (): boolean => summary().outcome === 'win';

  const duration = () => formatDuration(summary().duration_seconds);

  return (
    <article
      class={
        variant() === 'detail'
          ? 'rounded-2xl border border-outline-variant/20 bg-surface-variant/5 p-6'
          : 'rounded-lg border border-outline-variant/20 bg-surface-variant/5 p-4'
      }
      data-testid="match-summary-card"
      data-variant={variant()}
      data-outcome={summary().outcome}
    >
      <header class="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
        <span
          class={
            isWin()
              ? 'text-xs uppercase tracking-widest font-headline font-extrabold text-success'
              : 'text-xs uppercase tracking-widest font-headline font-extrabold text-error'
          }
        >
          {isWin()
            ? t('match.review.summary.outcome.win')
            : t('match.review.summary.outcome.loss')}
        </span>
        <h3 class="font-headline font-bold text-on-surface text-lg">
          {summary().champion}
        </h3>
        <span class="text-sm text-on-surface-variant">{queueLabel()}</span>
        <span class="text-sm text-on-surface-variant/70">{roleLabel()}</span>
      </header>

      <dl class="grid grid-cols-2 sm:grid-cols-4 gap-y-2 gap-x-6 text-sm">
        <div>
          <dt class="text-on-surface-variant/60 uppercase tracking-wide text-xs">
            {t('match.history.card.kda.label')}
          </dt>
          <dd class="text-on-surface font-mono">
            {summary().kills}/{summary().deaths}/{summary().assists}
          </dd>
        </div>
        <div>
          <dt class="text-on-surface-variant/60 uppercase tracking-wide text-xs">
            {t('match.history.card.duration.label')}
          </dt>
          <dd class="text-on-surface font-mono">
            {duration().minutes}:{pad(duration().seconds)}
          </dd>
        </div>
        <Show when={variant() === 'detail'}>
          <div>
            <dt class="text-on-surface-variant/60 uppercase tracking-wide text-xs">CS</dt>
            <dd class="text-on-surface font-mono">
              {summary().cs} ({summary().cs_per_min.toFixed(1)}/min)
            </dd>
          </div>
          <div>
            <dt class="text-on-surface-variant/60 uppercase tracking-wide text-xs">Gold</dt>
            <dd class="text-on-surface font-mono">{summary().gold_earned.toLocaleString()}</dd>
          </div>
          <div class="col-span-2 sm:col-span-1">
            <dt class="text-on-surface-variant/60 uppercase tracking-wide text-xs">Vision</dt>
            <dd class="text-on-surface font-mono">{summary().vision_score}</dd>
          </div>
        </Show>
      </dl>

      <Show when={variant() === 'detail' && props.model}>
        <footer class="mt-4 pt-3 border-t border-outline-variant/10 text-xs text-on-surface-variant/70">
          <span data-testid="match-model-badge">
            {props.selectionReason === 'short_match'
              ? t('match.review.summary.model.short_match')
              : t('match.review.summary.model.standard')}
          </span>
        </footer>
      </Show>
    </article>
  );
}

/** Alias requested by F4 brief: same component as `MatchSummaryCard`. */
export const MatchCard = MatchSummaryCard;

export default MatchSummaryCard;
