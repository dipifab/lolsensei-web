import {
  Show,
  createMemo,
  createResource,
  createSignal,
} from 'solid-js';
import { useNavigate, useParams, useSearchParams } from '@solidjs/router';
import PageHeader from '../components/PageHeader';
import ConsoleBadge from '../components/ConsoleBadge';
import ConsoleSkeleton from '../components/ConsoleSkeleton';
import Tabs, { type TabItem } from '../components/shared/Tabs';
import ConfirmModal from '../components/shared/ConfirmModal';
import Pagination from '../components/shared/Pagination';
import OverrideStatusBanner from '../components/users/OverrideStatusBanner';
import RetentionWarningBanner from '../components/users/RetentionWarningBanner';
import TimelineSidebar from '../components/users/TimelineSidebar';
import LimitForm from '../components/users/LimitForm';
import RevenueChart from '../components/users/RevenueChart';
import ModelUsageTable from '../components/users/ModelUsageTable';
import { ConsoleUsersApi, type SetLimitBody } from '../api/users';
import { ConsoleApiError } from '../api/client';
import { useToast } from '../contexts/toast-context';
import { formatDateTime, formatEur, formatInteger, formatUsd4 } from '../utils/format';
import { statusToVariant } from '../utils/status';
import Icon from '../../components/Icon';

type TabKey = 'profile' | 'billing' | 'ai-usage' | 'actions';

const TAB_PANEL_PREFIX = 'user-detail';

const TABS: TabItem<TabKey>[] = [
  { key: 'profile', label: 'Profile' },
  { key: 'billing', label: 'Billing' },
  { key: 'ai-usage', label: 'AI Usage' },
  { key: 'actions', label: 'Actions' },
];

function parseTab(v: unknown): TabKey {
  if (v === 'billing' || v === 'ai-usage' || v === 'actions') return v;
  return 'profile';
}

function defaultAIFrom(): string {
  const d = new Date();
  d.setDate(d.getDate() - 30);
  return d.toISOString().slice(0, 10);
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export default function UserDetailPage() {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toast = useToast();
  const [searchParams, setSearchParams] = useSearchParams();

  const tab = createMemo<TabKey>(() => parseTab(searchParams.tab));
  const aiFrom = createMemo(() => (searchParams.ai_from as string | undefined) || defaultAIFrom());
  const aiTo = createMemo(() => (searchParams.ai_to as string | undefined) || today());
  const billingPage = createMemo(() => {
    const p = parseInt((searchParams.billing_page as string | undefined) ?? '1', 10);
    return Number.isFinite(p) && p > 0 ? p : 1;
  });

  const userId = createMemo(() => params.id);

  const [profile, { refetch: refetchProfile }] = createResource(
    userId,
    async (id) => {
      try {
        return await ConsoleUsersApi.detail(id);
      } catch (err) {
        if (err instanceof ConsoleApiError && err.status === 404) {
          toast.showToast('User not found', 'error');
          navigate('/console/users', { replace: true });
        } else if (err instanceof ConsoleApiError && err.status !== 401) {
          toast.showToast(err.message, 'error');
        }
        throw err;
      }
    },
  );

  const [timeline, { refetch: refetchTimeline }] = createResource(
    userId,
    async (id) => {
      try {
        return await ConsoleUsersApi.timeline(id, { page: 1, page_size: 50 });
      } catch (err) {
        if (err instanceof ConsoleApiError && err.status !== 401 && err.status !== 404) {
          toast.showToast(err.message, 'error');
        }
        throw err;
      }
    },
  );

  const billingSource = createMemo(() =>
    tab() === 'billing' ? { id: userId(), page: billingPage() } : null,
  );

  const [billing, { refetch: refetchBilling }] = createResource(
    billingSource,
    async (src) => {
      if (!src) return null;
      try {
        return await ConsoleUsersApi.billing(src.id, { page: src.page, page_size: 50 });
      } catch (err) {
        if (err instanceof ConsoleApiError && err.status !== 401) {
          toast.showToast(err.message, 'error');
        }
        throw err;
      }
    },
  );

  const aiSource = createMemo(() =>
    tab() === 'ai-usage'
      ? { id: userId(), from: aiFrom(), to: aiTo() }
      : null,
  );

  const [aiUsage] = createResource(aiSource, async (src) => {
    if (!src) return null;
    try {
      return await ConsoleUsersApi.aiUsage(src.id, { from: src.from, to: src.to });
    } catch (err) {
      if (err instanceof ConsoleApiError && err.status !== 401) {
        toast.showToast(err.message, 'error');
      }
      throw err;
    }
  });

  const setTab = (k: TabKey) =>
    setSearchParams({ tab: k === 'profile' ? null : k }, { replace: true });

  const setAIRange = (f: string, t: string) =>
    setSearchParams({ ai_from: f || null, ai_to: t || null }, { replace: true });

  const setBillingPage = (p: number) =>
    setSearchParams(
      { billing_page: p === 1 ? null : String(p) },
      { replace: true },
    );

  const [suspendOpen, setSuspendOpen] = createSignal(false);
  const [unsuspendOpen, setUnsuspendOpen] = createSignal(false);
  const [mutating, setMutating] = createSignal(false);
  const [limitSubmitting, setLimitSubmitting] = createSignal(false);
  const [limitRemoving, setLimitRemoving] = createSignal(false);

  const doSuspend = async (reason?: string) => {
    if (!reason) return;
    setMutating(true);
    try {
      await ConsoleUsersApi.suspend(userId(), reason);
      toast.showToast('User suspended', 'success');
      setSuspendOpen(false);
      refetchProfile();
      refetchTimeline();
    } catch (err) {
      if (err instanceof ConsoleApiError) toast.showToast(err.message, 'error');
    } finally {
      setMutating(false);
    }
  };

  const doUnsuspend = async (reason?: string) => {
    if (!reason) return;
    setMutating(true);
    try {
      await ConsoleUsersApi.unsuspend(userId(), reason);
      toast.showToast('User reactivated', 'success');
      setUnsuspendOpen(false);
      refetchProfile();
      refetchTimeline();
    } catch (err) {
      if (err instanceof ConsoleApiError) toast.showToast(err.message, 'error');
    } finally {
      setMutating(false);
    }
  };

  const doSetLimit = async (body: SetLimitBody) => {
    setLimitSubmitting(true);
    try {
      await ConsoleUsersApi.setLimit(userId(), body);
      toast.showToast('Credit override applied', 'success');
      refetchProfile();
      refetchTimeline();
    } catch (err) {
      if (err instanceof ConsoleApiError) toast.showToast(err.message, 'error');
    } finally {
      setLimitSubmitting(false);
    }
  };

  const doRemoveLimit = async (reason: string) => {
    setLimitRemoving(true);
    try {
      await ConsoleUsersApi.removeLimit(userId(), reason);
      toast.showToast('Override removed', 'success');
      refetchProfile();
      refetchTimeline();
    } catch (err) {
      if (err instanceof ConsoleApiError) toast.showToast(err.message, 'error');
    } finally {
      setLimitRemoving(false);
    }
  };

  return (
    <div class="grid grid-cols-1 xl:grid-cols-[1fr_20rem] gap-6">
      <div class="space-y-4 min-w-0">
        <PageHeader
          title="User detail"
          actions={
            <button
              type="button"
              onClick={() => navigate('/console/users')}
              class="inline-flex items-center gap-1 rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-sm text-on-surface hover:bg-surface-container-high focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
            >
              <Icon name="arrow_back" class="w-4 h-4" />
              Back to list
            </button>
          }
        />

        <Show
          when={profile()}
          fallback={
            <div class="bg-surface-container rounded-xl p-6">
              <ConsoleSkeleton variant="text" />
              <div class="mt-3">
                <ConsoleSkeleton variant="card" height="4rem" />
              </div>
            </div>
          }
        >
          {(p) => (
            <>
              <div class="sticky top-16 z-30 bg-surface-container rounded-xl border border-outline-variant/10 p-5">
                <div class="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <h2 class="text-xl font-bold text-on-surface">{p().email}</h2>
                    <p class="text-sm text-on-surface-variant">
                      {p().display_name ?? '--'} &middot; {p().region ?? 'region n/a'}
                    </p>
                  </div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <Show when={p().plan_name}>
                      <ConsoleBadge variant="trialing" label={p().plan_name!} />
                    </Show>
                    <ConsoleBadge
                      variant={statusToVariant(p().subscription_status, p().is_suspended)}
                      dot
                      pulse={p().subscription_status === 'active' && !p().is_suspended}
                    />
                  </div>
                </div>
              </div>

              <Show when={p().is_suspended}>
                <OverrideStatusBanner
                  variant="suspended"
                  reason={p().suspended_reason}
                  appliedAt={p().suspended_at}
                />
              </Show>
              <Show when={p().credit_override !== null}>
                <OverrideStatusBanner
                  variant="limit-override"
                  reason={
                    `Active custom limits: `
                    + `daily=${p().credit_override!.daily ?? 'plan'} · `
                    + `weekly=${p().credit_override!.weekly ?? 'plan'} · `
                    + `monthly=${p().credit_override!.monthly ?? 'plan'}`
                  }
                />
              </Show>

              <Tabs
                tabs={TABS}
                active={tab()}
                onChange={setTab}
                ariaLabel="User sections"
                panelIdPrefix={TAB_PANEL_PREFIX}
              />

              <section
                role="tabpanel"
                id={`${TAB_PANEL_PREFIX}-panel-${tab()}`}
                aria-labelledby={`${TAB_PANEL_PREFIX}-tab-${tab()}`}
                class="min-h-[12rem]"
              >
                <Show when={tab() === 'profile'}>
                  <ProfileTab user={p()} />
                </Show>
                <Show when={tab() === 'billing'}>
                  <div class="space-y-4">
                    <Show
                      when={billing()}
                      fallback={
                        <div class="space-y-3">
                          <ConsoleSkeleton variant="card" height="10rem" />
                          <ConsoleSkeleton variant="card" height="16rem" />
                        </div>
                      }
                    >
                      {(b) => (
                        <>
                          <Show when={p().stripe_customer_id}>
                            <a
                              href={`https://dashboard.stripe.com/customers/${p().stripe_customer_id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              class="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                            >
                              <Icon name="credit_card" class="w-4 h-4" />
                              Open in Stripe
                            </a>
                          </Show>
                          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <StatCard
                              label="Lifetime revenue"
                              value={formatEur(b().revenue_lifetime_cents)}
                            />
                            <StatCard
                              label="Total invoices"
                              value={formatInteger(b().total_invoices)}
                            />
                            <StatCard
                              label="Currency"
                              value={(b().currency || '').toUpperCase() || '--'}
                            />
                          </div>
                          <RevenueChart byMonth={b().by_month} />
                          <InvoiceList invoices={b().invoices} />
                          <Pagination
                            page={b().page}
                            pageSize={b().page_size}
                            total={b().total_invoices}
                            onPageChange={setBillingPage}
                          />
                        </>
                      )}
                    </Show>
                    <Show when={billing.error}>
                      <RetryPanel onRetry={() => refetchBilling()} />
                    </Show>
                  </div>
                </Show>
                <Show when={tab() === 'ai-usage'}>
                  <div class="space-y-4">
                    <div class="flex items-end gap-3 flex-wrap">
                      <DateInput
                        label="From"
                        value={aiFrom()}
                        onChange={(v) => setAIRange(v, aiTo())}
                      />
                      <DateInput
                        label="To"
                        value={aiTo()}
                        onChange={(v) => setAIRange(aiFrom(), v)}
                      />
                    </div>
                    <Show
                      when={aiUsage()}
                      fallback={<ConsoleSkeleton variant="card" height="12rem" />}
                    >
                      {(a) => (
                        <>
                          <RetentionWarningBanner
                            truncated={a().truncated_by_retention}
                            requestedFrom={a().period.requested_from}
                            effectiveFrom={a().period.effective_from}
                            retentionWarning={a().retention_warning}
                          />
                          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <StatCard
                              label="Total requests"
                              value={formatInteger(a().total_requests)}
                            />
                            <StatCard
                              label="Total cost"
                              value={formatUsd4(a().total_cost_usd)}
                            />
                            <StatCard
                              label="Input tokens"
                              value={formatInteger(a().total_input_tokens)}
                            />
                            <StatCard
                              label="Avg latency"
                              value={`${a().avg_latency_ms} ms`}
                            />
                          </div>
                          <ModelUsageTable
                            rows={a().by_model}
                            totalCost={a().total_cost_usd}
                          />
                        </>
                      )}
                    </Show>
                  </div>
                </Show>
                <Show when={tab() === 'actions'}>
                  <div class="space-y-6">
                    <section class="bg-surface-container rounded-xl border border-outline-variant/10 p-5 space-y-4">
                      <h3 class="text-sm font-headline font-bold text-on-surface uppercase tracking-wider">
                        Account suspension
                      </h3>
                      <Show
                        when={p().is_suspended}
                        fallback={
                          <div class="flex items-center justify-between gap-3 flex-wrap">
                            <p class="text-sm text-on-surface-variant">
                              Block the user from signing in and revoke refresh tokens.
                            </p>
                            <button
                              type="button"
                              onClick={() => setSuspendOpen(true)}
                              class="rounded-lg bg-error text-on-error px-4 py-2 text-sm font-semibold hover:brightness-110 focus-visible:outline-2 focus-visible:outline-error focus-visible:outline-offset-2"
                            >
                              Suspend user
                            </button>
                          </div>
                        }
                      >
                        <div class="flex items-center justify-between gap-3 flex-wrap">
                          <div>
                            <p class="text-sm font-semibold text-error">
                              User is currently suspended
                            </p>
                            <Show when={p().suspended_at}>
                              <p class="text-xs text-on-surface-variant">
                                Since {formatDateTime(p().suspended_at)}
                              </p>
                            </Show>
                          </div>
                          <button
                            type="button"
                            onClick={() => setUnsuspendOpen(true)}
                            class="rounded-lg gold-gradient text-on-primary-fixed px-4 py-2 text-sm font-semibold hover:brightness-110 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
                          >
                            Reactivate user
                          </button>
                        </div>
                      </Show>
                    </section>
                    <section class="bg-surface-container rounded-xl border border-outline-variant/10 p-5 space-y-4">
                      <h3 class="text-sm font-headline font-bold text-on-surface uppercase tracking-wider">
                        Credit override
                      </h3>
                      <LimitForm
                        current={p().credit_override}
                        planLimits={null}
                        loading={limitSubmitting()}
                        removing={limitRemoving()}
                        onSubmit={doSetLimit}
                        onRemove={doRemoveLimit}
                      />
                    </section>
                  </div>
                </Show>
              </section>

              <ConfirmModal
                open={suspendOpen()}
                title="Suspend user?"
                message={`User ${p().email} will no longer be able to sign in until reactivated. Refresh tokens will be revoked.`}
                variant="danger"
                confirmLabel="Suspend"
                requireReason
                reasonLabel="Suspension reason"
                loading={mutating()}
                onConfirm={doSuspend}
                onClose={() => setSuspendOpen(false)}
              />
              <ConfirmModal
                open={unsuspendOpen()}
                title="Reactivate user?"
                message={`User ${p().email} will be able to sign in again.`}
                variant="info"
                confirmLabel="Reactivate"
                requireReason
                reasonLabel="Reactivation reason"
                loading={mutating()}
                onConfirm={doUnsuspend}
                onClose={() => setUnsuspendOpen(false)}
              />
            </>
          )}
        </Show>
      </div>

      <div class="min-w-0">
        <TimelineSidebar
          events={timeline()?.events ?? []}
          loading={timeline.loading}
        />
      </div>
    </div>
  );
}

function ProfileTab(props: {
  user: import('../types').UserDetailResponse;
}) {
  return (
    <dl class="bg-surface-container rounded-xl border border-outline-variant/10 divide-y divide-outline-variant/10">
      <Field label="ID" value={props.user.id} mono />
      <Field label="Email" value={props.user.email} />
      <Field label="Display name" value={props.user.display_name ?? '--'} />
      <Field label="Google ID" value={props.user.google_id ?? '--'} mono />
      <Field label="Riot PUUID" value={props.user.riot_puuid ?? '--'} mono />
      <Field label="Region" value={props.user.region ?? '--'} />
      <Field label="Registered" value={formatDateTime(props.user.created_at)} />
      <Field label="Plan" value={props.user.plan_name ?? '--'} />
      <Field label="Status" value={props.user.subscription_status} />
      <Field label="Subscription started" value={formatDateTime(props.user.subscription_started_at)} />
      <Field label="Trial started" value={formatDateTime(props.user.trial_started_at)} />
      <Field label="Trial converted" value={formatDateTime(props.user.trial_converted_at)} />
      <Field label="Last renewed" value={formatDateTime(props.user.last_renewed_at)} />
      <Field label="Stripe customer" value={props.user.stripe_customer_id ?? '--'} mono />
      <Field label="Stripe subscription" value={props.user.stripe_subscription_id ?? '--'} mono />
    </dl>
  );
}

function Field(props: { label: string; value: string; mono?: boolean }) {
  return (
    <div class="flex items-start gap-4 px-5 py-3">
      <dt class="w-48 shrink-0 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
        {props.label}
      </dt>
      <dd
        class="text-sm text-on-surface break-all"
        classList={{ 'font-mono text-xs': props.mono }}
      >
        {props.value}
      </dd>
    </div>
  );
}

function StatCard(props: { label: string; value: string }) {
  return (
    <div class="bg-surface-container rounded-xl border border-outline-variant/10 p-4">
      <p class="text-xs text-on-surface-variant uppercase tracking-wider">{props.label}</p>
      <p class="mt-1 text-xl font-bold text-on-surface">{props.value}</p>
    </div>
  );
}

function InvoiceList(props: {
  invoices: import('../types').InvoiceItem[];
}) {
  return (
    <Show
      when={props.invoices.length > 0}
      fallback={
        <div class="bg-surface-container rounded-xl border border-outline-variant/10 px-5 py-6 text-sm text-on-surface-variant">
          No invoices in this period.
        </div>
      }
    >
      <div class="bg-surface-container rounded-xl border border-outline-variant/10 overflow-hidden">
        <table class="w-full text-sm">
          <caption class="sr-only">Stripe invoices list</caption>
          <thead>
            <tr class="bg-surface-container-low">
              <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-left">Invoice</th>
              <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-left">Date</th>
              <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-left">Status</th>
              <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {props.invoices.map((inv) => (
              <tr class="border-t border-outline-variant/10">
                <td class="px-5 py-3 font-mono text-xs text-on-surface">
                  <Show
                    when={inv.stripe_invoice_url}
                    fallback={<>{inv.stripe_invoice_id}</>}
                  >
                    <a
                      href={inv.stripe_invoice_url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-primary hover:underline"
                    >
                      {inv.stripe_invoice_id}
                    </a>
                  </Show>
                </td>
                <td class="px-5 py-3 text-on-surface-variant">
                  {formatDateTime(inv.invoice_date)}
                </td>
                <td class="px-5 py-3">
                  <ConsoleBadge
                    variant={
                      inv.status === 'paid'
                        ? 'active'
                        : inv.status === 'open'
                          ? 'past_due'
                          : 'expired'
                    }
                    label={inv.status}
                  />
                </td>
                <td class="px-5 py-3 text-right font-medium text-on-surface">
                  {formatEur(inv.amount_paid_cents)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Show>
  );
}

function DateInput(props: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
        {props.label}
      </label>
      <input
        type="date"
        value={props.value}
        onInput={(e) => props.onChange(e.currentTarget.value)}
        class="rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
      />
    </div>
  );
}

function RetryPanel(props: { onRetry: () => void }) {
  return (
    <div class="flex items-center justify-between gap-3 rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
      <span>Failed to load data.</span>
      <button
        type="button"
        onClick={props.onRetry}
        class="rounded-lg border border-error/40 px-3 py-1 text-xs font-semibold hover:bg-error/15"
      >
        Retry
      </button>
    </div>
  );
}
