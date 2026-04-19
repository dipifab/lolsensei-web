import { createSignal, createResource, createMemo, createEffect, onCleanup, Show } from 'solid-js';
import type { TrialConfigResponse, TrialConfigUpdateRequest } from '../types';
import { fetchTrialConfig, updateTrialConfig } from '../api/trial';
import { fetchPlans } from '../api/plans';
import { ConsoleApiError, clearAdminKey } from '../api/client';
import { useToast } from '../contexts/toast-context';
import PageHeader from '../components/PageHeader';
import ConsoleSlider from '../components/ConsoleSlider';
import ConsoleSelect from '../components/ConsoleSelect';
import ConsoleButton from '../components/ConsoleButton';
import ConsoleInfoBanner from '../components/ConsoleInfoBanner';
import FormField from '../components/FormField';

export default function TrialConfigPage() {
  const toast = useToast();

  const [config] = createResource(() => true, async () => {
    try {
      return await fetchTrialConfig();
    } catch (err) {
      if (err instanceof ConsoleApiError) {
        if (err.status === 401) { clearAdminKey(); return; }
        toast.showToast(err.message, 'error');
      }
      throw err;
    }
  });

  const [plans] = createResource(() => true, async () => {
    try {
      return await fetchPlans(true);
    } catch (err) {
      if (err instanceof ConsoleApiError) {
        if (err.status === 401) { clearAdminKey(); return; }
        toast.showToast(err.message, 'error');
      }
      throw err;
    }
  });

  const [original, setOriginal] = createSignal<TrialConfigResponse | null>(null);
  const [trialDays, setTrialDays] = createSignal(7);
  const [planId, setPlanId] = createSignal('');
  const [submitting, setSubmitting] = createSignal(false);

  createEffect(() => {
    const data = config();
    if (data) {
      setOriginal(data);
      setTrialDays(data.default_trial_days);
      setPlanId(data.default_trial_plan_id);
    }
  });

  const isDirty = createMemo(() => {
    const o = original();
    if (!o) return false;
    return trialDays() !== o.default_trial_days || planId() !== o.default_trial_plan_id;
  });

  createEffect(() => {
    if (isDirty()) {
      const handler = (e: BeforeUnloadEvent) => {
        e.preventDefault();
      };
      window.addEventListener('beforeunload', handler);
      onCleanup(() => window.removeEventListener('beforeunload', handler));
    }
  });

  const planOptions = createMemo(() =>
    (plans() ?? []).map(p => ({ value: p.id, label: p.name })),
  );

  async function handleSave() {
    setSubmitting(true);
    try {
      const data: TrialConfigUpdateRequest = {};
      const o = original();
      if (!o) return;
      if (trialDays() !== o.default_trial_days) data.default_trial_days = trialDays();
      if (planId() !== o.default_trial_plan_id) data.default_trial_plan_id = planId();
      const updated = await updateTrialConfig(data);
      setOriginal(updated);
      toast.showToast('Configurazione aggiornata', 'success');
    } catch (err) {
      if (err instanceof ConsoleApiError) {
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
    <div class="space-y-6">
      <PageHeader title="Trial Configuration" />

      <Show when={isDirty()}>
        <ConsoleInfoBanner variant="warning" message="Ci sono modifiche non salvate" />
      </Show>

      <div class="max-w-xl space-y-6">
        <FormField label="Giorni di trial">
          <ConsoleSlider
            min={1}
            max={30}
            step={1}
            value={trialDays()}
            onChange={setTrialDays}
            unit="giorni"
          />
        </FormField>

        <FormField label="Piano trial predefinito">
          <ConsoleSelect
            options={planOptions()}
            value={planId()}
            onChange={setPlanId}
          />
        </FormField>

        <ConsoleButton
          variant="primary"
          onClick={handleSave}
          loading={submitting()}
          disabled={!isDirty() || submitting()}
        >
          Salva configurazione
        </ConsoleButton>
      </div>
    </div>
  );
}
