import { createSignal, createResource, createMemo, createEffect } from 'solid-js';
import type { JSX } from 'solid-js';
import type { PlanResponse, PlanCreateRequest, PlanUpdateRequest } from '../types';
import { fetchPlans, createPlan, updatePlan, deactivatePlan } from '../api/plans';
import { AdminApiError, clearAdminKey } from '../api/client';
import { useToast } from '../contexts/toast-context';
import { formatEur } from '../utils/format';
import { required, slugPattern, priceValidation } from '../utils/validation';
import type { ValidationErrors } from '../utils/validation';
import PageHeader from '../components/PageHeader';
import AdminTable from '../components/AdminTable';
import type { ColumnDef } from '../components/AdminTable';
import SegmentedControl from '../components/SegmentedControl';
import AdminDialog from '../components/AdminDialog';
import ConfirmDialog from '../components/ConfirmDialog';
import AdminButton from '../components/AdminButton';
import AdminInput from '../components/AdminInput';
import AdminToggle from '../components/AdminToggle';
import AdminBadge from '../components/AdminBadge';
import PriceInput from '../components/PriceInput';
import CodeChip from '../components/CodeChip';
import IconButton from '../components/IconButton';
import FormField from '../components/FormField';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatCredits(plan: PlanResponse): string {
  if (plan.credits_daily !== null) return `${plan.credits_daily}/giorno`;
  if (plan.credits_weekly !== null) return `${plan.credits_weekly}/settimana`;
  if (plan.credits_monthly !== null) return `${plan.credits_monthly}/mese`;
  return 'Illimitati';
}

type FilterValue = 'all' | 'active' | 'inactive';

// ---------------------------------------------------------------------------
// PlanFormDialog
// ---------------------------------------------------------------------------

interface PlanFormDialogProps {
  open: boolean;
  onClose: () => void;
  plan: PlanResponse | null;
  onSaved: () => void;
}

function PlanFormDialog(props: PlanFormDialogProps) {
  const toast = useToast();

  // Form fields
  const [name, setName] = createSignal('');
  const [slug, setSlug] = createSignal('');
  const [priceCents, setPriceCents] = createSignal(0);
  const [stripePriceId, setStripePriceId] = createSignal('');
  const [aiModelSlug, setAiModelSlug] = createSignal('');
  const [creditsDaily, setCreditsDaily] = createSignal('');
  const [creditsWeekly, setCreditsWeekly] = createSignal('');
  const [creditsMonthly, setCreditsMonthly] = createSignal('');
  const [trialDays, setTrialDays] = createSignal('0');
  const [isActive, setIsActive] = createSignal(true);

  const [errors, setErrors] = createSignal<ValidationErrors>({});
  const [submitting, setSubmitting] = createSignal(false);

  // Populate form when editing or reset when creating
  createEffect(() => {
    if (props.open) {
      const plan = props.plan;
      if (plan) {
        setName(plan.name);
        setSlug(plan.slug);
        setPriceCents(plan.price_base_cents);
        setStripePriceId(plan.stripe_price_id);
        setAiModelSlug(plan.ai_model_slug);
        setCreditsDaily(plan.credits_daily !== null ? String(plan.credits_daily) : '');
        setCreditsWeekly(plan.credits_weekly !== null ? String(plan.credits_weekly) : '');
        setCreditsMonthly(plan.credits_monthly !== null ? String(plan.credits_monthly) : '');
        setTrialDays(String(plan.trial_days));
        setIsActive(plan.is_active);
      } else {
        setName('');
        setSlug('');
        setPriceCents(0);
        setStripePriceId('');
        setAiModelSlug('');
        setCreditsDaily('');
        setCreditsWeekly('');
        setCreditsMonthly('');
        setTrialDays('0');
        setIsActive(true);
      }
      setErrors({});
    }
  });

  function parseNullableInt(value: string): number | null {
    const trimmed = value.trim();
    if (trimmed === '') return null;
    const n = parseInt(trimmed, 10);
    return Number.isNaN(n) ? null : n;
  }

  function validate(): ValidationErrors {
    const errs: ValidationErrors = {};

    const nameErr = required(name(), 'Nome');
    if (nameErr) errs.name = nameErr;

    const slugErr = required(slug(), 'Slug');
    if (slugErr) {
      errs.slug = slugErr;
    } else {
      const patErr = slugPattern(slug());
      if (patErr) errs.slug = patErr;
    }

    const priceErr = priceValidation(priceCents(), 'Prezzo');
    if (priceErr) errs.price = priceErr;

    return errs;
  }

  function buildCreateData(): PlanCreateRequest {
    return {
      name: name(),
      slug: slug(),
      credits_daily: parseNullableInt(creditsDaily()),
      credits_weekly: parseNullableInt(creditsWeekly()),
      credits_monthly: parseNullableInt(creditsMonthly()),
      price_base_cents: priceCents(),
      stripe_price_id: stripePriceId(),
      ai_model_slug: aiModelSlug(),
      trial_days: parseInt(trialDays(), 10) || 0,
      is_active: isActive(),
    };
  }

  function buildUpdateData(): PlanUpdateRequest {
    return {
      name: name(),
      slug: slug(),
      credits_daily: parseNullableInt(creditsDaily()),
      credits_weekly: parseNullableInt(creditsWeekly()),
      credits_monthly: parseNullableInt(creditsMonthly()),
      price_base_cents: priceCents(),
      stripe_price_id: stripePriceId(),
      ai_model_slug: aiModelSlug(),
      trial_days: parseInt(trialDays(), 10) || 0,
      is_active: isActive(),
    };
  }

  async function handleSave() {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    try {
      if (props.plan) {
        await updatePlan(props.plan.id, buildUpdateData());
      } else {
        await createPlan(buildCreateData());
      }
      toast.showToast(props.plan ? 'Piano aggiornato' : 'Piano creato', 'success');
      props.onSaved();
      props.onClose();
    } catch (err) {
      if (err instanceof AdminApiError) {
        if (err.status === 401) { clearAdminKey(); return; }
        toast.showToast(err.message, 'error');
      } else {
        toast.showToast('Errore imprevisto. Riprova.', 'error');
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AdminDialog
      open={props.open}
      onClose={props.onClose}
      title={props.plan ? 'Modifica piano' : 'Nuovo piano'}
      width="lg"
      footer={
        <>
          <AdminButton variant="secondary" onClick={props.onClose} disabled={submitting()}>
            Annulla
          </AdminButton>
          <AdminButton variant="primary" onClick={handleSave} loading={submitting()}>
            {props.plan ? 'Salva modifiche' : 'Crea piano'}
          </AdminButton>
        </>
      }
    >
      <div class="space-y-4">
        <FormField label="Nome" required error={errors().name}>
          <AdminInput
            type="text"
            value={name()}
            onInput={setName}
            error={errors().name}
            placeholder="Es. Pro Monthly"
          />
        </FormField>

        <FormField label="Slug" required error={errors().slug} helper="Solo lettere minuscole, numeri e trattini">
          <AdminInput
            type="text"
            value={slug()}
            onInput={setSlug}
            error={errors().slug}
            monospace
            placeholder="es. pro-monthly"
          />
        </FormField>

        <FormField label="Prezzo" required error={errors().price}>
          <PriceInput
            value={priceCents()}
            onChange={setPriceCents}
            error={errors().price}
          />
        </FormField>

        <FormField label="Stripe Price ID">
          <AdminInput
            type="text"
            value={stripePriceId()}
            onInput={setStripePriceId}
            monospace
            placeholder="price_..."
          />
        </FormField>

        <FormField label="Modello AI">
          <AdminInput
            type="text"
            value={aiModelSlug()}
            onInput={setAiModelSlug}
            placeholder="es. gpt-4o"
          />
        </FormField>

        <div class="grid grid-cols-3 gap-4">
          <FormField label="Crediti giornalieri">
            <AdminInput
              type="number"
              value={creditsDaily()}
              onInput={setCreditsDaily}
              placeholder="--"
            />
          </FormField>

          <FormField label="Crediti settimanali">
            <AdminInput
              type="number"
              value={creditsWeekly()}
              onInput={setCreditsWeekly}
              placeholder="--"
            />
          </FormField>

          <FormField label="Crediti mensili">
            <AdminInput
              type="number"
              value={creditsMonthly()}
              onInput={setCreditsMonthly}
              placeholder="--"
            />
          </FormField>
        </div>

        <FormField label="Giorni trial">
          <AdminInput
            type="number"
            value={trialDays()}
            onInput={setTrialDays}
            placeholder="0"
          />
        </FormField>

        <FormField label="Attivo">
          <AdminToggle checked={isActive()} onChange={setIsActive} />
        </FormField>
      </div>
    </AdminDialog>
  );
}

// ---------------------------------------------------------------------------
// PlansPage
// ---------------------------------------------------------------------------

export default function PlansPage() {
  const toast = useToast();

  // Data fetching — always fetch all plans, filter client-side
  const [plans, { refetch }] = createResource(
    () => true,
    async () => {
      try {
        return await fetchPlans();
      } catch (err) {
        if (err instanceof AdminApiError) {
          if (err.status === 401) { clearAdminKey(); return; }
          toast.showToast(err.message, 'error');
        }
        throw err;
      }
    },
  );

  // Filter state
  const [filter, setFilter] = createSignal<FilterValue>('all');

  const filteredPlans = createMemo(() => {
    const data = plans() ?? [];
    const f = filter();
    if (f === 'all') return data;
    return data.filter((p) => p.is_active === (f === 'active'));
  });

  // Segment counts
  const allCount = createMemo(() => plans()?.length ?? 0);
  const activeCount = createMemo(() => plans()?.filter((p) => p.is_active).length ?? 0);
  const inactiveCount = createMemo(() => plans()?.filter((p) => !p.is_active).length ?? 0);

  const segmentItems = createMemo(() => [
    { label: 'Tutti', value: 'all' as FilterValue, count: allCount() },
    { label: 'Attivi', value: 'active' as FilterValue, count: activeCount() },
    { label: 'Inattivi', value: 'inactive' as FilterValue, count: inactiveCount() },
  ]);

  // Dialog state
  const [formOpen, setFormOpen] = createSignal(false);
  const [editingPlan, setEditingPlan] = createSignal<PlanResponse | null>(null);

  const [confirmOpen, setConfirmOpen] = createSignal(false);
  const [deactivatingPlan, setDeactivatingPlan] = createSignal<PlanResponse | null>(null);
  const [deactivating, setDeactivating] = createSignal(false);

  function openCreate() {
    setEditingPlan(null);
    setFormOpen(true);
  }

  function openEdit(plan: PlanResponse) {
    setEditingPlan(plan);
    setFormOpen(true);
  }

  function openDeactivate(plan: PlanResponse) {
    setDeactivatingPlan(plan);
    setConfirmOpen(true);
  }

  async function handleDeactivate() {
    const plan = deactivatingPlan();
    if (!plan) return;

    setDeactivating(true);
    try {
      await deactivatePlan(plan.id);
      toast.showToast('Piano disattivato', 'success');
      refetch();
      setConfirmOpen(false);
    } catch (err) {
      if (err instanceof AdminApiError) {
        if (err.status === 401) { clearAdminKey(); return; }
        toast.showToast(err.message, 'error');
      } else {
        toast.showToast('Errore imprevisto. Riprova.', 'error');
      }
    } finally {
      setDeactivating(false);
    }
  }

  // Table columns
  const columns: ColumnDef<PlanResponse>[] = [
    {
      key: 'name',
      header: 'Nome',
      render: (row) => <span class="font-medium text-on-surface">{row.name}</span>,
    },
    {
      key: 'slug',
      header: 'Slug',
      render: (row) => <CodeChip text={row.slug} />,
    },
    {
      key: 'price',
      header: 'Prezzo',
      render: (row) => formatEur(row.price_base_cents),
      align: 'right',
    },
    {
      key: 'credits',
      header: 'Crediti',
      render: (row) => formatCredits(row),
    },
    {
      key: 'ai_model',
      header: 'Modello AI',
      render: (row) => <CodeChip text={row.ai_model_slug} />,
    },
    {
      key: 'status',
      header: 'Stato',
      render: (row) => (
        <AdminBadge variant={row.is_active ? 'active' : 'inactive'} dot />
      ),
    },
    {
      key: 'actions',
      header: '',
      align: 'right',
      render: (row) => (
        <div class="flex items-center justify-end gap-1">
          <IconButton
            icon="edit"
            tooltip="Modifica"
            onClick={() => openEdit(row)}
          />
          <IconButton
            icon="delete"
            tooltip="Disattiva"
            variant="danger"
            disabled={!row.is_active}
            onClick={() => openDeactivate(row)}
          />
        </div>
      ),
    },
  ];

  // Page header actions
  const headerActions: JSX.Element = (
    <AdminButton variant="primary" icon="credit_card" onClick={openCreate}>
      Nuovo Piano
    </AdminButton>
  );

  return (
    <div class="space-y-6">
      <PageHeader title="Subscription Plans" actions={headerActions} />

      <SegmentedControl
        items={segmentItems()}
        value={filter()}
        onChange={(v) => setFilter(v as FilterValue)}
        label="Filtra per stato"
      />

      <AdminTable
        columns={columns}
        rows={filteredPlans()}
        loading={plans.loading}
        emptyIcon="credit_card"
        emptyTitle="Nessun piano trovato"
        caption="Lista piani di abbonamento"
      />

      <PlanFormDialog
        open={formOpen()}
        onClose={() => setFormOpen(false)}
        plan={editingPlan()}
        onSaved={() => refetch()}
      />

      <ConfirmDialog
        open={confirmOpen()}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleDeactivate}
        variant="danger"
        title="Disattiva piano"
        message={`Vuoi disattivare il piano "${deactivatingPlan()?.name ?? ''}"? Gli abbonati esistenti non saranno impattati.`}
        confirmLabel="Disattiva"
        loading={deactivating()}
      />
    </div>
  );
}
