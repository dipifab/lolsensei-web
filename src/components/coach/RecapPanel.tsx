// WP32 F5-07 — RecapPanel (component-design §6.4).
//
// Renders the weekly recap. EN/IT switcher (button group). Full tier surfaces
// `extended_trend` as inline copy (a sparkline rendering is deferred — MVP
// is text-first, no charts library, per design §6.4 carve-out). Light tier
// shows the summary only. Empty state when the recap has not yet been
// generated (BE returns `recap: null` + `next_recap_at`, NOT 404).

import { For, Show, createSignal, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import {
  latestRecap,
  weeklyRecap,
  CoachAddonRequiredError,
  CoachUnauthenticatedError,
} from '../../services/coach-api';
import type {
  CoachLanguage,
  RecapResponse,
  WeekYear,
} from '../../types/wp32';

export interface RecapPanelProps {
  /** Initial recap from SSR loader, optional. */
  initial?: RecapResponse | null;
  /**
   * Specific week to load. When omitted, the panel calls
   * `GET /api/v1/coach/recap` (latest).
   */
  weekYear?: () => WeekYear | null;
  /** Override fetchers (used by tests). */
  fetcher?: typeof weeklyRecap;
  latestFetcher?: typeof latestRecap;
  onAddonRequired?: () => void;
  onUnauthenticated?: () => void;
}

export function RecapPanel(props: RecapPanelProps): JSX.Element {
  const { t } = useI18n();
  const [data, setData] = createSignal<RecapResponse | null>(props.initial ?? null);
  const [language, setLanguage] = createSignal<CoachLanguage>('en');
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);

  const fetchRecap = async () => {
    if (loading()) return;
    setError(null);
    setLoading(true);
    try {
      const week = props.weekYear?.();
      let response: RecapResponse;
      if (week) {
        const fetcher = props.fetcher ?? weeklyRecap;
        response = await fetcher(week, { language: language() });
      } else {
        const fetcher = props.latestFetcher ?? latestRecap;
        response = await fetcher({ language: language() });
      }
      setData(response);
    } catch (err) {
      if (err instanceof CoachAddonRequiredError) {
        props.onAddonRequired?.();
        return;
      }
      if (err instanceof CoachUnauthenticatedError) {
        props.onUnauthenticated?.();
        return;
      }
      setError(t('coach.chat.error.generic'));
    } finally {
      setLoading(false);
    }
  };

  const showExtendedTrend = (): boolean => {
    const state = data();
    return Boolean(state && state.tier === 'full' && state.extended_trend);
  };

  return (
    <section class="flex flex-col gap-4" data-testid="coach-recap-panel">
      <header class="flex flex-wrap items-baseline justify-between gap-2">
        <h2 class="text-xl font-bold font-headline text-on-surface">{t('coach.recap.title')}</h2>
        <div
          class="inline-flex rounded-full border border-on-surface/15 overflow-hidden"
          role="group"
          aria-label="Language"
          data-testid="coach-recap-lang-switch"
        >
          <button
            type="button"
            class={`px-3 py-1 text-sm ${
              language() === 'en'
                ? 'bg-primary text-on-primary'
                : 'bg-surface text-on-surface hover:bg-surface-variant/30'
            }`}
            onClick={() => {
              setLanguage('en');
              void fetchRecap();
            }}
            aria-pressed={language() === 'en'}
            data-lang="en"
          >
            EN
          </button>
          <button
            type="button"
            class={`px-3 py-1 text-sm border-l border-on-surface/15 ${
              language() === 'it'
                ? 'bg-primary text-on-primary'
                : 'bg-surface text-on-surface hover:bg-surface-variant/30'
            }`}
            onClick={() => {
              setLanguage('it');
              void fetchRecap();
            }}
            aria-pressed={language() === 'it'}
            data-lang="it"
          >
            IT
          </button>
        </div>
      </header>

      <Show when={loading()}>
        <p class="text-sm text-on-surface-variant" aria-busy="true">
          {t('coach.chat.loading')}
        </p>
      </Show>

      <Show when={error()} keyed>
        {(message) => (
          <p class="text-red-600" role="alert" data-testid="coach-recap-error">
            {message}
          </p>
        )}
      </Show>

      <Show when={data()} keyed>
        {(state) => (
          <Show
            when={state.recap}
            keyed
            fallback={
              <div class="px-4 py-6 rounded-2xl border border-on-surface/10 bg-surface text-center">
                <p class="text-on-surface-variant" data-testid="coach-recap-empty">
                  {t('coach.recap.empty')}
                </p>
                <Show when={state.next_recap_at} keyed>
                  {(next) => (
                    <p class="text-xs text-on-surface-variant mt-2">
                      {t('coach.recap.next_recap_at').replace(
                        '{date}',
                        new Date(next).toISOString().slice(0, 10),
                      )}
                    </p>
                  )}
                </Show>
              </div>
            }
          >
            {(recap) => (
              <article class="flex flex-col gap-3" data-testid="coach-recap-content">
                <p class="text-sm text-on-surface-variant">{recap.week_year}</p>
                <p class="text-on-surface whitespace-pre-wrap">{recap.summary}</p>
                <Show when={recap.key_insights.length > 0}>
                  <ul class="list-disc pl-6 text-sm text-on-surface space-y-1">
                    <For each={recap.key_insights}>{(item) => <li>{item}</li>}</For>
                  </ul>
                </Show>
                <Show when={showExtendedTrend()}>
                  <section
                    class="mt-2 px-4 py-3 rounded-xl bg-surface-variant/20"
                    data-testid="coach-recap-extended-trend"
                  >
                    <h3 class="text-sm font-bold text-on-surface mb-2">
                      {t('coach.recap.extended_trend.title')}
                    </h3>
                    <pre class="text-xs text-on-surface-variant whitespace-pre-wrap font-mono">
                      {JSON.stringify(state.extended_trend, null, 2)}
                    </pre>
                  </section>
                </Show>
              </article>
            )}
          </Show>
        )}
      </Show>
    </section>
  );
}

export default RecapPanel;
