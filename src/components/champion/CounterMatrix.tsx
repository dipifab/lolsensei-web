// WP34 — CounterMatrix (FE-7): tabella opponents con classification badge.
//
// Reg 17 (zero decimali pubblici): la tabella espone SOLO classificazioni
// qualitative (Favorevole/Neutro/Difficile) + sample_size integer count.
// Mai win_rate / pickrate decimali. Il filtro "Indeterminato" e' gia
// applicato lato backend (route `counter_public.py`).
//
// Carve-out DEC-OP-W34-007: text-first MVP semantico HTML5. Refactor 1:1
// design system "Tactical Precision" entro 2 sprint via WP37.

import type { JSX } from 'solid-js';
import { For, Show } from 'solid-js';
import type { CounterData, CounterClassification } from '../../types/wp34';
import { useI18n } from '../../i18n';

export interface CounterMatrixProps {
  data: CounterData;
}

function classificationLabel(
  classification: CounterClassification,
  t: (key: string) => string,
): string {
  // The backend returns Italian-language enum values matching i18n keys.
  switch (classification) {
    case 'Favorevole':
      return t('wp34.counters.classification.favorable');
    case 'Neutro':
      return t('wp34.counters.classification.neutral');
    case 'Difficile':
      return t('wp34.counters.classification.difficult');
  }
}

function classificationBadgeClass(
  classification: CounterClassification,
): string {
  // Inline color mapping (text-first MVP, no design system):
  //   - Favorevole -> verde
  //   - Neutro     -> grigio
  //   - Difficile  -> rosso
  switch (classification) {
    case 'Favorevole':
      return 'bg-green-700/20 text-green-300';
    case 'Neutro':
      return 'bg-zinc-600/20 text-zinc-300';
    case 'Difficile':
      return 'bg-red-700/20 text-red-300';
  }
}

function capitalize(slug: string): string {
  return slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
}

export function CounterMatrix(props: CounterMatrixProps): JSX.Element {
  const { t } = useI18n();
  const tpl = (key: string, vars: Record<string, string>): string => {
    let out = t(key);
    for (const [k, v] of Object.entries(vars)) {
      out = out.split(`{${k}}`).join(v);
    }
    return out;
  };

  return (
    <section class="max-w-4xl mx-auto px-8 py-8" data-testid="counter-matrix">
      <header class="mb-6 flex flex-wrap items-center gap-3">
        <Show when={props.data.patch_id}>
          {(patch) => (
            <span
              class="text-[10px] font-bold tracking-widest uppercase text-primary-container bg-primary-container/10 px-2 py-0.5 rounded"
              data-testid="counter-matrix-patch-badge"
            >
              {tpl('wp34.counters.freshness.patch_badge', { patch: patch() })}
            </span>
          )}
        </Show>
        <span
          class="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/70"
          data-testid="counter-matrix-freshness"
        >
          {tpl('wp34.counters.freshness.label', {
            date: props.data.last_aggregated,
          })}
        </span>
      </header>

      <Show
        when={props.data.opponents.length > 0}
        fallback={
          <p
            class="text-on-surface-variant/80 italic"
            data-testid="counter-matrix-empty"
          >
            {t('wp34.counters.table.empty')}
          </p>
        }
      >
        <table
          class="w-full text-left border-collapse"
          aria-label={t('wp34.counters.section.matrix_heading')}
        >
          <thead>
            <tr class="border-b border-on-surface-variant/20">
              <th
                scope="col"
                class="py-2 px-3 text-sm font-headline font-bold text-on-surface-variant"
              >
                {t('wp34.counters.table.opponent')}
              </th>
              <th
                scope="col"
                class="py-2 px-3 text-sm font-headline font-bold text-on-surface-variant"
              >
                {t('wp34.counters.table.classification')}
              </th>
              <th
                scope="col"
                class="py-2 px-3 text-sm font-headline font-bold text-on-surface-variant"
              >
                {t('wp34.counters.table.sample_size')}
              </th>
            </tr>
          </thead>
          <tbody>
            <For each={props.data.opponents}>
              {(opponent) => {
                const label = classificationLabel(opponent.classification, t);
                return (
                  <tr
                    class="border-b border-on-surface-variant/10"
                    data-testid={`counter-matrix-row-${opponent.slug}`}
                    aria-label={tpl('wp34.counters.table.row_label_template', {
                      opponent: capitalize(opponent.slug),
                      classification: label,
                    })}
                  >
                    <td class="py-2 px-3 text-on-surface">
                      {capitalize(opponent.slug)}
                    </td>
                    <td class="py-2 px-3">
                      <span
                        class={`inline-block text-xs font-bold px-2 py-0.5 rounded ${classificationBadgeClass(opponent.classification)}`}
                      >
                        {label}
                      </span>
                    </td>
                    <td class="py-2 px-3 text-on-surface-variant/80 tabular-nums">
                      {opponent.sample_size}
                    </td>
                  </tr>
                );
              }}
            </For>
          </tbody>
        </table>
      </Show>
    </section>
  );
}

export default CounterMatrix;
