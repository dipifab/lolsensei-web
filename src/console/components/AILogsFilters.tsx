// WP-AI-LOGS-VIEWER (CR-061) — TASK-6-006
// Filtri header per /console/ai-logs (AC-005.4 + AC-005.9).
//
// Stato gestito dal padre via signal. I cambi vengono trattenuti localmente
// finche' "Apply filters" non e' premuto: questo evita refetch su ogni
// keystroke (admin tool, no real-time UX).

import { Show } from 'solid-js';
import { useI18n } from '../../i18n';
import ConsoleInput from './ConsoleInput';
import ConsoleToggle from './ConsoleToggle';
import ConsoleSlider from './ConsoleSlider';

export interface AILogsFiltersValue {
  /** ISO date (YYYY-MM-DD) o '' per "no override" */
  startDate: string;
  endDate: string;
  email: string;
  /** Min cost in cents to leverage integer slider; converted to USD string when applied. */
  minCostCents: number;
  includeDeleted: boolean;
}

interface AILogsFiltersProps {
  values: AILogsFiltersValue;
  onChange: (v: AILogsFiltersValue) => void;
  onApply: () => void;
  onReset: () => void;
  /** When true, "Apply" / "Reset" are visually disabled with countdown. */
  disabledFor?: number;
}

export default function AILogsFilters(props: AILogsFiltersProps) {
  const { t } = useI18n();
  const isThrottled = () => (props.disabledFor ?? 0) > 0;

  const update = (patch: Partial<AILogsFiltersValue>) => {
    props.onChange({ ...props.values, ...patch });
  };

  return (
    <section class="space-y-4 rounded-xl border border-outline-variant/10 bg-surface-container p-4">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ConsoleInput
          type="date"
          label={t('console.ai-logs.filter.from')}
          value={props.values.startDate}
          onInput={(v) => update({ startDate: v })}
        />
        <ConsoleInput
          type="date"
          label={t('console.ai-logs.filter.to')}
          value={props.values.endDate}
          onInput={(v) => update({ endDate: v })}
        />
        <ConsoleInput
          type="text"
          label={t('console.ai-logs.filter.email')}
          placeholder={t('console.ai-logs.filter.email_placeholder')}
          value={props.values.email}
          onInput={(v) => update({ email: v })}
        />
        <div>
          <ConsoleSlider
            label={t('console.ai-logs.filter.min_cost')}
            min={0}
            max={5000}
            step={50}
            value={props.values.minCostCents}
            onChange={(n) => update({ minCostCents: n })}
            unit="¢"
          />
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-3">
        <label class="flex cursor-pointer items-center gap-3 text-sm text-on-surface">
          <ConsoleToggle
            checked={props.values.includeDeleted}
            onChange={(b) => update({ includeDeleted: b })}
            label={t('console.ai-logs.filter.include_deleted')}
          />
          {t('console.ai-logs.filter.include_deleted')}
        </label>

        <div class="flex items-center gap-2">
          <button
            type="button"
            disabled={isThrottled()}
            onClick={() => props.onReset()}
            class="rounded-lg border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface hover:bg-surface-container-high disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          >
            {t('console.ai-logs.filter.reset')}
          </button>
          <button
            type="button"
            disabled={isThrottled()}
            onClick={() => props.onApply()}
            class="rounded-lg gold-gradient px-4 py-2 text-sm font-semibold text-on-primary-fixed hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          >
            <Show
              when={isThrottled()}
              fallback={t('console.ai-logs.filter.apply')}
            >
              {t('console.ai-logs.error.rate_limit_countdown').replace(
                '{{seconds}}',
                String(props.disabledFor ?? 0),
              )}
            </Show>
          </button>
        </div>
      </div>
    </section>
  );
}
