import { createSignal, createResource, createMemo, createEffect, Show } from 'solid-js';
import type { PromotionResponse, PromotionCreateRequest, PromotionUpdateRequest, PlanResponse } from '../types';
import { fetchPromotions, createPromotion, updatePromotion, terminatePromotion } from '../api/promotions';
import { fetchPlans } from '../api/plans';
import { AdminApiError, clearAdminKey } from '../api/client';
import { useToast } from '../contexts/toast-context';
import { formatEur, formatDate, formatDateTime } from '../utils/format';
import { required } from '../utils/validation';
import type { ValidationErrors } from '../utils/validation';
import PageHeader from '../components/PageHeader';
import AdminTable from '../components/AdminTable';
import type { ColumnDef } from '../components/AdminTable';
import SegmentedControl from '../components/SegmentedControl';
import AdminDialog from '../components/AdminDialog';
import ConfirmDialog from '../components/ConfirmDialog';
import AdminButton from '../components/AdminButton';
import AdminInput from '../components/AdminInput';
import AdminSelect from '../components/AdminSelect';
import AdminToggle from '../components/AdminToggle';
import AdminBadge from '../components/AdminBadge';
import PriceInput from '../components/PriceInput';
import AdminInfoBanner from '../components/AdminInfoBanner';
import IconButton from '../components/IconButton';
import FormField from '../components/FormField';

type PromoFilter = 'all' | 'active' | 'scheduled' | 'expired' | 'terminated';

export default function PromotionsPage() {
  const toast = useToast();

  // --- Data fetching ---
  const [promos, { refetch }] = createResource(
    () => true,
    async () => {
      try {
        return await fetchPromotions();
      } catch (err) {
        if (err instanceof AdminApiError) {
          if (err.status === 401) { clearAdminKey(); return; }
          toast.showToast(err.message, 'error');
        }
        throw err;
      }
    },
  );

  const [plans] = createResource(() => true, async () => {
    try {
      return await fetchPlans(true);
    } catch (err) {
      if (err instanceof AdminApiError) {
        if (err.status === 401) { clearAdminKey(); return; }
        toast.showToast(err.message, 'error');
      }
      throw err;
    }
  });

  // --- Filter ---
  const [filter, setFilter] = createSignal<PromoFilter>('all');

  const filteredPromos = createMemo(() => {
    const data = promos() ?? [];
    const f = filter();
    if (f === 'all') return data;
    return data.filter(p => p.effective_status === f);
  });

  const segmentItems = createMemo(() => {
    const data = promos() ?? [];
    return [
      { label: 'Tutte', value: 'all', count: data.length },
      { label: 'Attive', value: 'active', count: data.filter(p => p.effective_status === 'active').length },
      { label: 'Programmate', value: 'scheduled', count: data.filter(p => p.effective_status === 'scheduled').length },
      { label: 'Scadute', value: 'expired', count: data.filter(p => p.effective_status === 'expired').length },
      { label: 'Terminate', value: 'terminated', count: data.filter(p => p.effective_status === 'terminated').length },
    ];
  });

  // --- Form dialog state ---
  const [formOpen, setFormOpen] = createSignal(false);
  const [editingPromo, setEditingPromo] = createSignal<PromotionResponse | null>(null);

  function openCreate() {
    setEditingPromo(null);
    setFormOpen(true);
  }

  function openEdit(promo: PromotionResponse) {
    setEditingPromo(promo);
    setFormOpen(true);
  }

  // --- Terminate confirmation state ---
  const [terminateTarget, setTerminateTarget] = createSignal<PromotionResponse | null>(null);
  const [terminating, setTerminating] = createSignal(false);

  async function handleTerminate() {
    const target = terminateTarget();
    if (!target) return;

    setTerminating(true);
    try {
      await terminatePromotion(target.id);
      toast.showToast('Promozione terminata', 'success');
      refetch();
      setTerminateTarget(null);
    } catch (err) {
      if (err instanceof AdminApiError) {
        if (err.status === 401) { clearAdminKey(); return; }
        toast.showToast(err.message, 'error');
      } else {
        toast.showToast('Errore imprevisto. Riprova.', 'error');
      }
    } finally {
      setTerminating(false);
    }
  }

  // --- Table columns ---
  const columns: ColumnDef<PromotionResponse>[] = [
    {
      key: 'name',
      header: 'Nome',
      render: (row) => row.name,
    },
    {
      key: 'plan_name',
      header: 'Piano',
      render: (row) => row.plan_name,
    },
    {
      key: 'promo_price_cents',
      header: 'Prezzo promo',
      render: (row) => formatEur(row.promo_price_cents),
    },
    {
      key: 'starts_at',
      header: 'Inizio',
      render: (row) => formatDate(row.starts_at),
    },
    {
      key: 'ends_at',
      header: 'Fine',
      render: (row) => formatDateTime(row.ends_at),
    },
    {
      key: 'effective_status',
      header: 'Stato',
      render: (row) => <AdminBadge variant={row.effective_status} dot />,
    },
    {
      key: 'actions',
      header: 'Azioni',
      align: 'right',
      render: (row) => {
        const isImmutable = row.effective_status === 'terminated' || row.effective_status === 'expired';
        return (
          <div class="flex items-center justify-end gap-1">
            <IconButton
              icon="edit"
              tooltip="Modifica"
              onClick={() => openEdit(row)}
            />
            <IconButton
              icon="delete"
              variant="danger"
              tooltip="Termina"
              disabled={isImmutable}
              onClick={() => setTerminateTarget(row)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div class="space-y-6">
      <PageHeader
        title="Promozioni"
        subtitle="Gestisci le promozioni e i coupon Stripe"
        actions={
          <AdminButton variant="primary" icon="shopping_cart" onClick={openCreate}>
            Nuova Promozione
          </AdminButton>
        }
      />

      <SegmentedControl
        items={segmentItems()}
        value={filter()}
        onChange={(v) => setFilter(v as PromoFilter)}
        label="Filtra per stato"
      />

      <AdminTable
        columns={columns}
        rows={filteredPromos()}
        loading={promos.loading}
        emptyIcon="local_offer"
        emptyTitle="Nessuna promozione trovata"
        caption="Lista promozioni"
      />

      <PromoFormDialog
        open={formOpen()}
        onClose={() => setFormOpen(false)}
        promo={editingPromo()}
        plans={plans() ?? []}
        onSaved={() => refetch()}
      />

      <ConfirmDialog
        open={!!terminateTarget()}
        onClose={() => setTerminateTarget(null)}
        onConfirm={handleTerminate}
        variant="danger"
        title="Termina promozione"
        message={`Vuoi terminare la promozione "${terminateTarget()?.name ?? ''}"? Il coupon Stripe associato verr\u00E0 disattivato.`}
        confirmLabel="Termina"
        loading={terminating()}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// PromoFormDialog
// ---------------------------------------------------------------------------

interface PromoFormDialogProps {
  open: boolean;
  onClose: () => void;
  promo: PromotionResponse | null;
  plans: PlanResponse[];
  onSaved: () => void;
}

function PromoFormDialog(props: PromoFormDialogProps) {
  const toast = useToast();
  const isEdit = () => props.promo !== null;

  // --- Form state ---
  const [name, setName] = createSignal('');
  const [planId, setPlanId] = createSignal('');
  const [priceCents, setPriceCents] = createSignal(0);
  const [startsAt, setStartsAt] = createSignal('');
  const [endsAt, setEndsAt] = createSignal('');
  const [isActive, setIsActive] = createSignal(true);
  const [errors, setErrors] = createSignal<ValidationErrors>({});
  const [submitting, setSubmitting] = createSignal(false);

  // Reset form when dialog opens or promo changes
  createEffect(() => {
    if (props.open) {
      if (props.promo) {
        setName(props.promo.name);
        setPlanId(props.promo.plan_id);
        setPriceCents(props.promo.promo_price_cents);
        setStartsAt(props.promo.starts_at.slice(0, 10));
        setEndsAt(props.promo.ends_at?.slice(0, 10) ?? '');
        setIsActive(props.promo.is_active);
      } else {
        setName('');
        setPlanId(props.plans.length > 0 ? props.plans[0].id : '');
        setPriceCents(0);
        setStartsAt('');
        setEndsAt('');
        setIsActive(true);
      }
      setErrors({});
      setSubmitting(false);
    }
  });

  // Selected plan for price comparison
  const selectedPlan = createMemo(() => {
    const id = planId();
    return props.plans.find(p => p.id === id) ?? null;
  });

  const planOptions = createMemo(() =>
    props.plans.map(p => ({ value: p.id, label: `${p.name} (${formatEur(p.price_base_cents)})` })),
  );

  // Price comparison
  const priceWarning = createMemo(() => {
    const plan = selectedPlan();
    if (!plan) return false;
    return priceCents() >= plan.price_base_cents;
  });

  function validate(): boolean {
    const errs: ValidationErrors = {};

    const nameErr = required(name(), 'Nome');
    if (nameErr) errs.name = nameErr;

    if (!isEdit()) {
      const planErr = required(planId(), 'Piano');
      if (planErr) errs.plan_id = planErr;

      if (priceCents() <= 0) errs.promo_price_cents = 'Il prezzo deve essere maggiore di 0';

      const startsErr = required(startsAt(), 'Data inizio');
      if (startsErr) errs.starts_at = startsErr;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function buildCreateData(): PromotionCreateRequest {
    return {
      name: name(),
      plan_id: planId(),
      promo_price_cents: priceCents(),
      starts_at: new Date(startsAt() + 'T00:00:00').toISOString(),
      ends_at: endsAt() ? new Date(endsAt() + 'T23:59:59').toISOString() : null,
    };
  }

  async function handleSave() {
    if (!validate()) return;

    setSubmitting(true);
    try {
      if (props.promo) {
        const data: PromotionUpdateRequest = {};
        if (name() !== props.promo.name) data.name = name();
        if (endsAt() !== (props.promo.ends_at?.slice(0, 10) ?? '')) {
          data.ends_at = endsAt() ? new Date(endsAt() + 'T23:59:59').toISOString() : null;
        }
        if (isActive() !== props.promo.is_active) data.is_active = isActive();
        await updatePromotion(props.promo.id, data);
      } else {
        await createPromotion(buildCreateData());
      }
      toast.showToast(props.promo ? 'Promozione aggiornata' : 'Promozione creata', 'success');
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
      title={isEdit() ? 'Modifica promozione' : 'Nuova promozione'}
      width="md"
      footer={
        <>
          <AdminButton variant="secondary" onClick={props.onClose} disabled={submitting()}>
            Annulla
          </AdminButton>
          <AdminButton variant="primary" onClick={handleSave} loading={submitting()}>
            {isEdit() ? 'Salva modifiche' : 'Crea promozione'}
          </AdminButton>
        </>
      }
    >
      <div class="space-y-5">
        {/* Nome */}
        <FormField label="Nome" required error={errors().name}>
          <AdminInput
            type="text"
            value={name()}
            onInput={setName}
            error={errors().name}
            placeholder="Es. Lancio estate 2026"
          />
        </FormField>

        {/* Piano */}
        <FormField label="Piano" required={!isEdit()} error={errors().plan_id}>
          <AdminSelect
            options={planOptions()}
            value={planId()}
            onChange={setPlanId}
            disabled={isEdit()}
            error={errors().plan_id}
          />
        </FormField>

        {/* Prezzo promozionale */}
        <FormField
          label="Prezzo promozionale"
          required={!isEdit()}
          error={errors().promo_price_cents}
        >
          <PriceInput
            value={priceCents()}
            onChange={setPriceCents}
            disabled={isEdit()}
            error={errors().promo_price_cents}
          />
        </FormField>

        {/* Price comparison banners */}
        <Show when={selectedPlan()}>
          {(plan) => (
            <>
              <Show
                when={!priceWarning()}
                fallback={
                  <AdminInfoBanner
                    variant="warning"
                    message={`Il prezzo promozionale dovrebbe essere inferiore al prezzo base (${formatEur(plan().price_base_cents)})`}
                  />
                }
              >
                <AdminInfoBanner
                  variant="info"
                  message={`Prezzo base del piano: ${formatEur(plan().price_base_cents)}`}
                />
              </Show>
            </>
          )}
        </Show>

        {/* Data inizio */}
        <FormField label="Data inizio" required={!isEdit()} error={errors().starts_at}>
          <AdminInput
            type="date"
            value={startsAt()}
            onInput={setStartsAt}
            disabled={isEdit()}
            error={errors().starts_at}
          />
        </FormField>

        {/* Data fine */}
        <FormField label="Data fine" helper="Lascia vuoto per nessuna scadenza">
          <AdminInput
            type="date"
            value={endsAt()}
            onInput={setEndsAt}
          />
        </FormField>

        {/* Attivo (solo in edit) */}
        <Show when={isEdit()}>
          <FormField label="Attivo">
            <div class="pt-1">
              <AdminToggle
                checked={isActive()}
                onChange={setIsActive}
              />
            </div>
          </FormField>
        </Show>
      </div>
    </AdminDialog>
  );
}
