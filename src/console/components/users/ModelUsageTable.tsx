import { For, Show, createMemo } from 'solid-js';
import type { ModelUsage } from '../../types';
import ConsoleSkeleton from '../ConsoleSkeleton';
import ConsoleEmptyState from '../ConsoleEmptyState';
import { formatInteger, formatUsd4 } from '../../utils/format';

interface ModelUsageTableProps {
  rows: ModelUsage[];
  totalCost: string;
  loading?: boolean;
}

export default function ModelUsageTable(props: ModelUsageTableProps) {
  const totalNum = createMemo(() => parseFloat(props.totalCost) || 0);

  const share = (cost: string): string => {
    const t = totalNum();
    if (t <= 0) return '0%';
    const c = parseFloat(cost) || 0;
    return `${((c / t) * 100).toFixed(1)}%`;
  };

  const isEmpty = () => !props.loading && props.rows.length === 0;

  return (
    <div class="bg-surface-container rounded-xl border border-outline-variant/10 overflow-hidden">
      <Show
        when={!isEmpty()}
        fallback={
          <ConsoleEmptyState
            icon="psychology"
            title="No AI usage in this period"
          />
        }
      >
        <table class="w-full text-sm" aria-busy={props.loading ?? false}>
          <caption class="sr-only">AI usage by model</caption>
          <thead>
            <tr class="bg-surface-container-low">
              <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-left">Model</th>
              <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-right">Requests</th>
              <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-right">Input tokens</th>
              <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-right">Output tokens</th>
              <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-right">Cost USD</th>
              <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-right">% total</th>
            </tr>
          </thead>
          <tbody>
            <Show when={props.loading}>
              <For each={Array.from({ length: 4 })}>
                {() => (
                  <tr class="border-t border-outline-variant/10">
                    <For each={Array.from({ length: 6 })}>
                      {() => (
                        <td class="px-5 py-3">
                          <ConsoleSkeleton variant="text" />
                        </td>
                      )}
                    </For>
                  </tr>
                )}
              </For>
            </Show>
            <Show when={!props.loading}>
              <For each={props.rows}>
                {(r) => (
                  <tr class="border-t border-outline-variant/10">
                    <td class="px-5 py-3">
                      <div class="flex items-center gap-2">
                        <span class="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5">
                          {r.model_name}
                        </span>
                      </div>
                      <p class="text-xs text-on-surface-variant mt-0.5">
                        {r.provider_name}
                      </p>
                    </td>
                    <td class="px-5 py-3 text-right font-medium text-on-surface">
                      {formatInteger(r.requests)}
                    </td>
                    <td class="px-5 py-3 text-right text-on-surface-variant">
                      {formatInteger(r.input_tokens)}
                    </td>
                    <td class="px-5 py-3 text-right text-on-surface-variant">
                      {formatInteger(r.output_tokens)}
                    </td>
                    <td class="px-5 py-3 text-right font-semibold text-on-surface">
                      {formatUsd4(r.cost_usd)}
                    </td>
                    <td class="px-5 py-3 text-right text-on-surface-variant">
                      {share(r.cost_usd)}
                    </td>
                  </tr>
                )}
              </For>
            </Show>
          </tbody>
          <Show when={!props.loading && props.rows.length > 0}>
            <tfoot>
              <tr class="border-t border-outline-variant/30 bg-surface-container-low">
                <td class="px-5 py-3 text-sm font-bold text-on-surface" colspan={4}>
                  Total
                </td>
                <td class="px-5 py-3 text-right font-bold text-on-surface">
                  {formatUsd4(props.totalCost)}
                </td>
                <td class="px-5 py-3 text-right text-on-surface-variant">100%</td>
              </tr>
            </tfoot>
          </Show>
        </table>
      </Show>
    </div>
  );
}
