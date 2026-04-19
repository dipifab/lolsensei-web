import { createSignal, createResource, createMemo, Show, For } from 'solid-js';
import type { JSX } from 'solid-js';
import { fetchDashboard } from '../api/client';
import { ConsoleApiError, clearAdminKey } from '../api/client';
import type { DashboardResponse, DashboardAICostByModel } from '../types';
import PageHeader from '../components/PageHeader';
import ConsoleSkeleton from '../components/ConsoleSkeleton';
import Icon from '../../components/Icon';
import { useToast } from '../contexts/toast-context';
import { formatEur, formatUsd, formatPercent } from '../utils/format';

type DateRange = '7d' | '30d' | '90d' | 'ytd';

function computeDateRange(range: DateRange): { start: string; end: string } {
  const today = new Date();
  const end = formatISODate(today);

  let start: Date;
  switch (range) {
    case '7d':
      start = new Date(today);
      start.setDate(start.getDate() - 7);
      break;
    case '30d':
      start = new Date(today);
      start.setDate(start.getDate() - 30);
      break;
    case '90d':
      start = new Date(today);
      start.setDate(start.getDate() - 90);
      break;
    case 'ytd':
      start = new Date(today.getFullYear(), 0, 1);
      break;
  }

  return { start: formatISODate(start), end };
}

function formatISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

const RANGE_OPTIONS: { value: DateRange; label: string }[] = [
  { value: '7d', label: '7g' },
  { value: '30d', label: '30g' },
  { value: '90d', label: '90g' },
  { value: 'ytd', label: 'YTD' },
];

const USER_SEGMENTS = [
  { key: 'active' as const, label: 'Attivi', colorClass: 'bg-primary' },
  { key: 'trialing' as const, label: 'In prova', colorClass: 'bg-gold' },
  { key: 'past_due' as const, label: 'In ritardo', colorClass: 'bg-error' },
  { key: 'cancelled' as const, label: 'Cancellati', colorClass: 'bg-on-surface-variant' },
  { key: 'expired' as const, label: 'Scaduti', colorClass: 'bg-outline' },
  { key: 'no_subscription' as const, label: 'Senza piano', colorClass: 'bg-surface-container-highest' },
];

function deriveModelTier(modelName: string): string {
  const lower = modelName.toLowerCase();
  if (lower.includes('sonnet') || lower.includes('opus')) return 'Reasoning';
  if (lower.includes('haiku') || lower.includes('flash')) return 'Inference';
  return 'General';
}

function formatUtcTime(): string {
  const now = new Date();
  return now.toISOString().slice(11, 19) + ' UTC';
}

export default function DashboardPage() {
  const toast = useToast();
  const [range, setRange] = createSignal<DateRange>('30d');

  const dateParams = createMemo(() => computeDateRange(range()));

  const [data, { refetch }] = createResource(dateParams, async (params) => {
    try {
      return await fetchDashboard(params.start, params.end);
    } catch (err) {
      if (err instanceof ConsoleApiError) {
        if (err.status === 401) { clearAdminKey(); return; }
        toast.showToast(err.message, 'error');
      } else {
        toast.showToast('Errore imprevisto nel caricamento della dashboard', 'error');
      }
      throw err;
    }
  });

  const dateRangeButtons: JSX.Element = (
    <div class="flex items-center bg-surface-container-low rounded-lg p-1">
      <div class="flex items-center gap-2 px-3 border-r border-outline-variant/20">
        <span class="text-xs font-medium text-on-surface">{dateParams().start}</span>
        <span class="text-[10px] text-on-surface-variant">TO</span>
        <span class="text-xs font-medium text-on-surface">{dateParams().end}</span>
      </div>
      <div class="flex items-center gap-1 px-1">
        <For each={RANGE_OPTIONS}>
          {(option) => (
            <button
              type="button"
              class={`px-3 py-1.5 text-[10px] font-bold uppercase rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2 ${
                range() === option.value
                  ? 'bg-primary-container text-on-primary-container shadow-sm'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              onClick={() => setRange(option.value)}
            >
              {option.label}
            </button>
          )}
        </For>
      </div>
    </div>
  );

  const skeletonContent: JSX.Element = (
    <div class="space-y-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <ConsoleSkeleton variant="card" count={4} />
      </div>
      <ConsoleSkeleton variant="card" height="16rem" />
      <ConsoleSkeleton variant="card" height="12rem" />
    </div>
  );

  const errorContent: JSX.Element = (
    <div class="flex flex-col items-center justify-center py-16 text-center">
      <p class="text-on-surface-variant mb-4">
        Impossibile caricare i dati della dashboard.
      </p>
      <button
        type="button"
        class="rounded-lg bg-primary-container px-4 py-2 text-sm font-medium text-on-primary-container transition-colors hover:bg-primary-container/80 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
        onClick={() => refetch()}
      >
        Riprova
      </button>
    </div>
  );

  return (
    <div class="space-y-8">
      <PageHeader
        title="Dashboard"
        subtitle="Panoramica in tempo reale dello stato dell'ecosistema."
        actions={dateRangeButtons}
      />

      <Show when={!data.loading} fallback={skeletonContent}>
        <Show when={data()} fallback={errorContent}>
          {(d) => (
            <>
              <KPICards data={d()} />
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <UserSegmentCard data={d()} />
                <ConversionFunnel data={d()} />
              </div>
              <AICostsTable models={d().ai_costs.by_model} totalUsd={d().ai_costs.total_cost_usd} />
              <FooterStatusBar />
            </>
          )}
        </Show>
      </Show>
    </div>
  );
}

/* ---------- KPI Cards ---------- */

function KPICards(props: { data: DashboardResponse }) {
  return (
    <section class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <KPICard
        icon="account_balance_wallet"
        label="MRR (Monthly Recurring Revenue)"
        value={formatEur(props.data.revenue.mrr_cents)}
        sub={<>Proiezione: <span class="text-on-surface font-medium">{formatEur(props.data.revenue.projected_monthly_cents)}</span></>}
        showLive={props.data.revenue.mrr_cents > 0}
      />
      <KPICard
        icon="group"
        label="Abbonamenti attivi"
        value={props.data.revenue.active_subscriptions.toLocaleString('it-IT')}
        showLive={props.data.revenue.active_subscriptions > 0}
      />
      <KPICard
        icon="trending_up"
        label="Trial to Paid"
        value={formatPercent(props.data.conversions.trial_to_paid_rate)}
        sub={<><span class="text-on-surface font-medium">{props.data.conversions.trial_converted}/{props.data.conversions.trial_started}</span> convertiti</>}
        showLive={props.data.conversions.trial_to_paid_rate > 0}
      />
      <KPICard
        icon="person_remove"
        label="Churn Rate"
        value={formatPercent(props.data.conversions.churn_rate)}
        valueClass={props.data.conversions.churn_rate > 0 ? 'text-error' : undefined}
        iconBgClass={props.data.conversions.churn_rate > 0 ? 'bg-error/10' : undefined}
        iconColorClass={props.data.conversions.churn_rate > 0 ? 'text-error' : undefined}
        sub={<><span class="text-on-surface font-medium">{props.data.conversions.churned}</span> persi</>}
        showLive={props.data.conversions.churn_rate > 0}
        liveBadgeClass="bg-error/10 text-error"
      />
    </section>
  );
}

function KPICard(props: {
  icon: string;
  label: string;
  value: string;
  sub?: JSX.Element;
  valueClass?: string;
  iconBgClass?: string;
  iconColorClass?: string;
  showLive?: boolean;
  liveBadgeClass?: string;
}) {
  return (
    <div class="bg-surface-container rounded-xl p-5 border border-outline-variant/10 shadow-sm shadow-primary/5">
      <div class="flex justify-between items-start mb-4">
        <div class={`w-10 h-10 rounded-xl ${props.iconBgClass ?? 'bg-primary/10'} flex items-center justify-center`}>
          <Icon name={props.icon} class={`w-5 h-5 ${props.iconColorClass ?? 'text-primary'}`} />
        </div>
        <Show when={props.showLive}>
          <span class={`rounded-full px-2 py-0.5 text-xs font-bold flex items-center gap-1 ${props.liveBadgeClass ?? 'bg-success/15 text-success'}`}>
            <span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            live
          </span>
        </Show>
      </div>
      <p class="text-xs text-on-surface-variant mb-1">{props.label}</p>
      <h3 class={`text-2xl font-bold ${props.valueClass ?? 'text-on-surface'}`}>
        {props.value}
      </h3>
      <Show when={props.sub}>
        <p class="text-sm text-on-surface-variant mt-1">{props.sub}</p>
      </Show>
    </div>
  );
}

/* ---------- User Segment Card ---------- */

function UserSegmentCard(props: { data: DashboardResponse }) {
  const total = createMemo(() => {
    const u = props.data.users;
    return u.active + u.trialing + u.past_due + u.cancelled + u.expired + u.no_subscription;
  });

  const segmentPct = (key: typeof USER_SEGMENTS[number]['key']) => {
    const count = props.data.users[key];
    return total() > 0 ? (count / total()) * 100 : 0;
  };

  return (
    <section class="lg:col-span-2 bg-surface-container rounded-xl p-6 space-y-6">
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-bold text-on-surface">Segmentazione Utenti</h2>
        <span class="text-[10px] uppercase tracking-widest text-primary font-bold">
          Live Partition
        </span>
      </div>

      {/* Segmented color bar */}
      <div class="h-4 w-full flex rounded-full overflow-hidden bg-surface-container-highest">
        <For each={USER_SEGMENTS}>
          {(segment) => {
            const pct = () => segmentPct(segment.key);
            return (
              <Show when={props.data.users[segment.key] > 0}>
                <div
                  class={`h-full ${segment.colorClass} transition-all`}
                  style={{ width: `${Math.max(pct(), total() > 0 ? 0.5 : 0)}%` }}
                  title={`${segment.label}: ${props.data.users[segment.key]}`}
                />
              </Show>
            );
          }}
        </For>
      </div>

      {/* Table */}
      <table class="w-full text-left">
        <caption class="sr-only">Segmentazione utenti per stato</caption>
        <thead>
          <tr>
            <th scope="col" class="text-[10px] font-black text-on-surface-variant uppercase tracking-widest pb-3">Segmento</th>
            <th scope="col" class="text-[10px] font-black text-on-surface-variant uppercase tracking-widest pb-3 text-right">Conteggio</th>
            <th scope="col" class="text-[10px] font-black text-on-surface-variant uppercase tracking-widest pb-3 text-right">Variazione</th>
            <th scope="col" class="text-[10px] font-black text-on-surface-variant uppercase tracking-widest pb-3 text-right">Contributo</th>
          </tr>
        </thead>
        <tbody>
          <For each={USER_SEGMENTS}>
            {(segment) => {
              const count = () => props.data.users[segment.key];
              const pct = () => total() > 0 ? ((count() / total()) * 100).toFixed(1) : '0.0';
              return (
                <tr class="border-t border-outline-variant/10">
                  <td class="py-3">
                    <div class="flex items-center gap-2">
                      <div class={`w-2.5 h-2.5 rounded-full shrink-0 ${segment.colorClass}`} />
                      <span class="text-sm text-on-surface font-medium">{segment.label}</span>
                    </div>
                  </td>
                  <td class="py-3 text-sm text-on-surface font-bold text-right">
                    {count().toLocaleString('it-IT')}
                  </td>
                  <td class="py-3 text-sm text-on-surface-variant text-right">--</td>
                  <td class="py-3 text-sm text-on-surface font-medium text-right">{pct()}%</td>
                </tr>
              );
            }}
          </For>
        </tbody>
      </table>
    </section>
  );
}

/* ---------- Conversion Funnel ---------- */

function ConversionFunnel(props: { data: DashboardResponse }) {
  const rate = () => props.data.conversions.trial_to_paid_rate;
  const progressPct = () => {
    const started = props.data.conversions.trial_started;
    if (started <= 0) return 0;
    return Math.min((props.data.conversions.trial_converted / started) * 100, 100);
  };

  return (
    <section class="bg-surface-container rounded-xl p-6 flex flex-col">
      <h2 class="text-lg font-bold text-on-surface mb-6">Funnel Conversione</h2>

      <div class="flex-1 flex flex-col items-center justify-center gap-0">
        {/* Trial starts card */}
        <div class="w-full bg-surface-container-low rounded-lg p-4 border-l-4 border-primary">
          <p class="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">
            Trial avviati (totale)
          </p>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-on-surface">
              {props.data.conversions.trial_started.toLocaleString('it-IT')}
            </span>
            <Icon name="target" class="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* Vertical connector */}
        <div class="w-px h-6 bg-outline-variant" />
        <span class="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold py-1">
          {formatPercent(rate())} conversione
        </span>
        <div class="w-px h-6 bg-outline-variant" />

        {/* Paid activations card */}
        <div class="w-full bg-surface-container-low rounded-lg p-4 border-l-4 border-primary">
          <p class="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">
            Attivazioni a pagamento
          </p>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-primary">
              {props.data.conversions.trial_converted.toLocaleString('it-IT')}
            </span>
            <Icon name="check_circle" class="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div class="mt-6 space-y-2">
        <div class="flex justify-between items-center">
          <span class="text-xs text-on-surface-variant font-medium">Progresso conversioni</span>
          <span class="text-xs font-bold text-primary">
            {props.data.conversions.trial_converted}/{props.data.conversions.trial_started}
          </span>
        </div>
        <div class="h-2 rounded-full bg-surface-container-highest overflow-hidden">
          <div
            class="h-full bg-primary rounded-full transition-all"
            style={{ width: `${progressPct()}%` }}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- AI Costs Table ---------- */

function AICostsTable(props: { models: DashboardAICostByModel[]; totalUsd: string }) {
  return (
    <section class="bg-surface-container rounded-xl overflow-hidden">
      <div class="p-6 flex justify-between items-center">
        <div>
          <h2 class="text-lg font-bold text-on-surface">Neural Engine Utilization</h2>
          <p class="text-xs text-on-surface-variant">Analisi costi per provider AI attivi.</p>
        </div>
        <div class="bg-gold/20 text-gold-dim px-4 py-2 rounded-lg text-sm font-bold border border-gold/40">
          Total Burn (30d): {formatUsd(props.totalUsd)}
        </div>
      </div>

      <Show
        when={props.models.length > 0}
        fallback={
          <p class="text-sm text-on-surface-variant text-center py-8">
            Nessun dato disponibile
          </p>
        }
      >
        <table class="w-full text-left">
          <caption class="sr-only">Costi AI per modello</caption>
          <thead>
            <tr class="border-t border-outline-variant/10">
              <th scope="col" class="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Model Instance</th>
              <th scope="col" class="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest text-right">Richieste</th>
              <th scope="col" class="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest text-right">Costo</th>
              <th scope="col" class="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest text-right">Volume %</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-outline-variant/5">
            <For each={props.models}>
              {(model) => {
                const totalCost = parseFloat(props.totalUsd);
                const modelCost = parseFloat(model.cost_usd);
                const pct = () => totalCost > 0 ? (modelCost / totalCost) * 100 : 0;
                const tier = deriveModelTier(model.model);
                return (
                  <tr class="hover:bg-surface-container-low transition-colors">
                    <td class="px-6 py-5">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
                          <Icon name="bolt" class="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <span class="text-sm font-bold text-on-surface">{model.model}</span>
                          <p class="text-[10px] text-on-surface-variant">Tier — {tier}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-5 text-sm text-on-surface text-right font-medium">
                      {model.requests.toLocaleString('it-IT')}
                    </td>
                    <td class="px-6 py-5 text-sm text-on-surface text-right font-bold">
                      {formatUsd(model.cost_usd)}
                    </td>
                    <td class="px-6 py-5 text-right">
                      <span class="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded">
                        {Math.round(pct())}%
                      </span>
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

/* ---------- Footer Status Bar ---------- */

function FooterStatusBar() {
  const syncTime = formatUtcTime();

  return (
    <footer class="mt-8 py-4 flex items-center justify-center gap-4 text-[10px] text-on-surface-variant uppercase tracking-widest">
      <span class="flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-success" />
        Systems Nominal
      </span>
      <span class="text-outline">|</span>
      <span>Last Sync: {syncTime}</span>
      <span class="text-outline">|</span>
      <span>&copy; 2026 Lol Sensei Inc.</span>
    </footer>
  );
}
