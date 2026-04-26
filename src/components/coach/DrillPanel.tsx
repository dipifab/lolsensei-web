// WP32 F5-06 — DrillPanel (component-design §6.3).
//
// Renders a drill batch (3 light / 5 full). Tier-aware: full tier expands the
// `steps[]` collapsible; light tier hides them and surfaces an upgrade hint.
// "Refresh" CTA invokes POST /coach/drill which decrements the drill cap.

import { For, Show, createSignal, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import {
  drill,
  CoachAddonRequiredError,
  CoachAiProviderError,
  CoachQuotaExceededError,
  CoachUnauthenticatedError,
} from '../../services/coach-api';
import type {
  CoachLanguage,
  Drill,
  DrillResponse,
  QuotaExceededResponse,
} from '../../types/wp32';

export interface DrillPanelProps {
  language: () => CoachLanguage;
  /** Initial drill batch from the SSR loader (optional). */
  initial?: DrillResponse | null;
  fetcher?: typeof drill;
  onDrillSuccess?: (response: DrillResponse) => void;
  onAddonRequired?: () => void;
  onUnauthenticated?: () => void;
}

function DrillCard(props: { drill: Drill; tier: 'light' | 'full' }): JSX.Element {
  const { t } = useI18n();
  const [expanded, setExpanded] = createSignal(false);
  const showSteps = () =>
    props.tier === 'full' && Array.isArray(props.drill.steps) && props.drill.steps.length > 0;

  return (
    <article
      class="px-4 py-4 rounded-2xl border border-on-surface/10 bg-surface flex flex-col gap-2"
      data-testid="coach-drill-card"
      data-drill-id={props.drill.drill_id_str}
    >
      <header class="flex items-baseline justify-between gap-2">
        <h3 class="font-bold text-on-surface">{props.drill.title}</h3>
        <span class="text-xs text-on-surface-variant">
          {t('coach.drills.duration').replace('{minutes}', String(props.drill.duration_min_int))}
        </span>
      </header>
      <p class="text-sm text-on-surface-variant whitespace-pre-wrap">{props.drill.description}</p>
      <p class="text-xs uppercase tracking-wide text-primary">{props.drill.weakness_tag}</p>

      <Show when={showSteps()}>
        <div class="mt-2">
          <button
            type="button"
            class="text-sm text-primary underline"
            onClick={() => setExpanded(!expanded())}
            aria-expanded={expanded()}
            data-testid="coach-drill-steps-toggle"
          >
            {expanded() ? '−' : '+'} steps
          </button>
          <Show when={expanded()}>
            <ol class="list-decimal pl-6 mt-2 text-sm text-on-surface space-y-1">
              <For each={props.drill.steps ?? []}>{(step) => <li>{step}</li>}</For>
            </ol>
          </Show>
        </div>
      </Show>
    </article>
  );
}

export function DrillPanel(props: DrillPanelProps): JSX.Element {
  const { t } = useI18n();
  const [batch, setBatch] = createSignal<DrillResponse | null>(props.initial ?? null);
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);
  const [quotaExceeded, setQuotaExceeded] = createSignal<QuotaExceededResponse | null>(null);

  const refresh = async () => {
    if (loading()) return;
    setError(null);
    setQuotaExceeded(null);
    setLoading(true);
    const fetcher = props.fetcher ?? drill;
    try {
      const response = await fetcher({}, { language: props.language() });
      setBatch(response);
      props.onDrillSuccess?.(response);
    } catch (err) {
      if (err instanceof CoachQuotaExceededError) {
        setQuotaExceeded(err.payload);
        return;
      }
      if (err instanceof CoachAddonRequiredError) {
        props.onAddonRequired?.();
        return;
      }
      if (err instanceof CoachUnauthenticatedError) {
        props.onUnauthenticated?.();
        return;
      }
      if (err instanceof CoachAiProviderError) {
        setError(t('coach.chat.error.generic'));
        return;
      }
      setError(t('coach.chat.error.generic'));
    } finally {
      setLoading(false);
    }
  };

  const subtitle = () => {
    const tier = batch()?.tier;
    if (tier === 'full') return t('coach.drills.subtitle.full');
    return t('coach.drills.subtitle.light');
  };

  return (
    <section class="flex flex-col gap-4" data-testid="coach-drill-panel">
      <header class="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h2 class="text-xl font-bold font-headline text-on-surface">{t('coach.drills.title')}</h2>
          <p class="text-sm text-on-surface-variant">{subtitle()}</p>
        </div>
        <button
          type="button"
          class="px-4 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 disabled:opacity-50 transition-colors"
          onClick={() => void refresh()}
          disabled={loading()}
          data-testid="coach-drill-refresh"
        >
          {t('coach.drills.cta.regenerate')}
        </button>
      </header>

      <Show when={loading()}>
        <p class="text-sm text-on-surface-variant" aria-busy="true">
          {t('coach.chat.loading')}
        </p>
      </Show>

      <Show when={quotaExceeded()} keyed>
        {(payload) => (
          <div
            class="px-4 py-3 rounded-xl border border-yellow-500/40 bg-yellow-500/10 text-on-surface"
            role="status"
            data-testid="coach-drill-quota-exceeded"
          >
            <p class="font-medium mb-1">{t('coach.quota_exceeded.drill')}</p>
            <Show when={payload.upgrade_hint}>
              <p class="text-sm text-on-surface-variant">{t('coach.quota_exceeded.upgrade_hint')}</p>
            </Show>
          </div>
        )}
      </Show>

      <Show when={error()} keyed>
        {(message) => (
          <p class="text-red-600" role="alert" data-testid="coach-drill-error">
            {message}
          </p>
        )}
      </Show>

      <Show
        when={batch()}
        keyed
        fallback={
          <p class="text-on-surface-variant" data-testid="coach-drill-empty">
            {t('coach.chat.empty')}
          </p>
        }
      >
        {(state) => (
          <>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4" data-testid="coach-drill-list">
              <For each={state.drills}>{(d) => <DrillCard drill={d} tier={state.tier} />}</For>
            </ul>
            <Show when={state.tier === 'light'}>
              <p
                class="text-sm text-on-surface-variant italic"
                data-testid="coach-drill-upgrade-hint"
              >
                {t('coach.drills.upgrade_hint')}
              </p>
            </Show>
          </>
        )}
      </Show>
    </section>
  );
}

export default DrillPanel;
