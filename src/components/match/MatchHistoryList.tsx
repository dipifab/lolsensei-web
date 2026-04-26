// WP31 F4-09 — Match history list + load-more pagination.
//
// Renders the user's competitive matches as a vertical list of cards.
// Each card links to `/match/[id]` (review detail). Cursor pagination is
// surfaced as a "Load more" button — clicking it appends the next page to
// the displayed list. Virtualization is intentionally deferred (the cap is
// 30 matches, REQ-F-031-007).

import { For, Show, createSignal, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import { useParams } from '@solidjs/router';
import type { MatchHistoryItem, MatchHistoryResponse } from '../../types/wp31';
import { getMatchHistory } from '../../services/match-api';
import { MatchSummaryCard } from './MatchSummaryCard';

export interface MatchHistoryListProps {
  /** First page (already fetched server-side by the route loader). */
  initial: MatchHistoryResponse;
  /** Override the default fetcher (used by tests to inject a stub). */
  fetchPage?: typeof getMatchHistory;
}

export function MatchHistoryList(props: MatchHistoryListProps): JSX.Element {
  const { t } = useI18n();
  const params = useParams<{ lang?: string }>();

  const [items, setItems] = createSignal<MatchHistoryItem[]>(props.initial.items.slice());
  const [cursor, setCursor] = createSignal<string | null>(props.initial.next_cursor);
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);

  const onLoadMore = async () => {
    const c = cursor();
    if (!c || loading()) return;
    setLoading(true);
    setError(null);
    try {
      const fetchPage = props.fetchPage ?? getMatchHistory;
      const next = await fetchPage({ cursor: c });
      setItems([...items(), ...next.items]);
      setCursor(next.next_cursor);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'unknown_error');
    } finally {
      setLoading(false);
    }
  };

  const matchHref = (matchId: string) =>
    `/${params.lang ?? 'en'}/match/${encodeURIComponent(matchId)}`;

  return (
    <section data-testid="match-history-list" aria-label={t('match.history.aria.list')}>
      <ul class="space-y-3" role="list">
        <For each={items()}>
          {(item) => (
            <li>
              <a
                href={matchHref(item.match_id)}
                class="block hover:bg-surface-variant/10 transition-colors rounded-lg"
                aria-label={t('match.history.card.aria.label')
                  .replace('{champion}', item.summary.champion)
                  .replace(
                    '{outcome}',
                    item.summary.outcome === 'win'
                      ? t('match.history.card.outcome.win')
                      : t('match.history.card.outcome.loss'),
                  )
                  .replace(
                    '{kda}',
                    `${item.summary.kills}/${item.summary.deaths}/${item.summary.assists}`,
                  )}
                data-testid="match-history-item"
                data-match-id={item.match_id}
              >
                <MatchSummaryCard match={item} variant="compact" />
                <div class="px-4 pb-3 text-xs text-on-surface-variant flex items-center gap-2">
                  <Show
                    when={item.has_review}
                    fallback={<span data-testid="match-no-review">{t('match.history.card.no_review')}</span>}
                  >
                    <span data-testid="match-has-review">{t('match.history.card.has_review')}</span>
                  </Show>
                  <span aria-hidden="true">·</span>
                  <span>{t('match.history.card.cta.view')}</span>
                </div>
              </a>
            </li>
          )}
        </For>
      </ul>

      <Show
        when={cursor() != null}
        fallback={
          <Show when={items().length > 0}>
            <p class="mt-6 text-center text-sm text-on-surface-variant/60" data-testid="match-history-end">
              {t('match.history.pagination.no_more')}
            </p>
          </Show>
        }
      >
        <div class="mt-6 text-center">
          <button
            type="button"
            class="inline-flex items-center justify-center px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors disabled:opacity-50"
            onClick={() => void onLoadMore()}
            disabled={loading()}
            aria-label={t('match.history.pagination.aria.next')}
            data-testid="match-history-load-more"
          >
            {loading() ? t('match.history.loading') : t('match.history.pagination.load_more')}
          </button>
        </div>
      </Show>

      <Show when={error()}>
        <p
          role="alert"
          class="mt-4 text-center text-sm text-error"
          data-testid="match-history-error"
        >
          {t('match.history.error.generic.body')}
        </p>
      </Show>
    </section>
  );
}

export default MatchHistoryList;
