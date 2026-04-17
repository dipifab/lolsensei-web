import { For, Show, createMemo, createUniqueId } from 'solid-js';
import type { MonthRevenue } from '../../types';
import AdminSkeleton from '../AdminSkeleton';
import AdminEmptyState from '../AdminEmptyState';
import { formatEur } from '../../utils/format';

interface RevenueChartProps {
  byMonth: MonthRevenue[];
  loading?: boolean;
  maxBars?: number;
}

export default function RevenueChart(props: RevenueChartProps) {
  const tableId = createUniqueId();

  const sorted = createMemo(() => {
    const max = props.maxBars ?? 12;
    return [...props.byMonth]
      .sort((a, b) => a.month.localeCompare(b.month))
      .slice(-max);
  });

  const maxValue = createMemo(() => {
    const vals = sorted().map((m) => m.revenue_cents);
    return Math.max(1, ...vals);
  });

  const total = createMemo(() =>
    sorted().reduce((acc, m) => acc + m.revenue_cents, 0),
  );

  return (
    <figure
      role="img"
      aria-label="Revenue per month"
      aria-describedby={tableId}
      class="bg-surface-container rounded-xl border border-outline-variant/10 p-5"
    >
      <figcaption class="flex items-center justify-between mb-4">
        <h3 class="text-sm font-headline font-bold text-on-surface uppercase tracking-wider">
          Revenue per month
        </h3>
        <Show when={!props.loading}>
          <span class="text-xs text-on-surface-variant">
            Period total: <span class="font-semibold text-on-surface">{formatEur(total())}</span>
          </span>
        </Show>
      </figcaption>

      <Show
        when={!props.loading}
        fallback={
          <div class="flex items-end gap-2 h-40">
            <For each={Array.from({ length: 8 })}>
              {() => (
                <div class="flex-1 h-full">
                  <AdminSkeleton variant="card" height="100%" />
                </div>
              )}
            </For>
          </div>
        }
      >
        <Show
          when={sorted().length > 0}
          fallback={
            <AdminEmptyState
              icon="account_balance_wallet"
              title="No revenue in this period"
            />
          }
        >
          <div class="flex items-end gap-2 h-40" aria-hidden="true">
            <For each={sorted()}>
              {(m) => {
                const pct = () =>
                  Math.max(
                    2,
                    Math.round((m.revenue_cents / maxValue()) * 100),
                  );
                return (
                  <div class="flex-1 flex flex-col items-center gap-1 min-w-0">
                    <div
                      class="w-full bg-surface-container-high rounded-t"
                      style={{ height: '100%' }}
                    >
                      <div
                        class="w-full bg-success rounded-t transition-all"
                        style={{ height: `${pct()}%` }}
                        title={`${m.month}: ${formatEur(m.revenue_cents)} (${m.invoice_count} invoices)`}
                      />
                    </div>
                    <span class="text-xs text-on-surface-variant truncate max-w-full">
                      {m.month}
                    </span>
                  </div>
                );
              }}
            </For>
          </div>
          {/*
            Accessible tabular fallback: the visual bar chart conveys no text to
            screen readers, so expose the same data via a visually hidden table
            referenced through aria-describedby.
          */}
          <table id={tableId} class="sr-only">
            <caption>Monthly revenue breakdown</caption>
            <thead>
              <tr>
                <th scope="col">Month</th>
                <th scope="col">Revenue</th>
                <th scope="col">Invoices</th>
              </tr>
            </thead>
            <tbody>
              <For each={sorted()}>
                {(m) => (
                  <tr>
                    <td>{m.month}</td>
                    <td>{formatEur(m.revenue_cents)}</td>
                    <td>{m.invoice_count}</td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </Show>
      </Show>
    </figure>
  );
}
