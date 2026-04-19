import { createSignal, createResource, createEffect, Show, For } from 'solid-js';
import type { AIProviderResponse, AIModelResponse, AIModelUpdateRequest } from '../types';
import { fetchAIProviders, updateAIProvider, updateAIModel } from '../api/ai-providers';
import { ConsoleApiError, clearAdminKey } from '../api/client';
import { useToast } from '../contexts/toast-context';
import { formatRate } from '../utils/format';
import PageHeader from '../components/PageHeader';
import ConsoleCard from '../components/ConsoleCard';
import ConsoleTable from '../components/ConsoleTable';
import type { ColumnDef } from '../components/ConsoleTable';
import ConsoleDialog from '../components/ConsoleDialog';
import ConsoleToggle from '../components/ConsoleToggle';
import ConsoleInput from '../components/ConsoleInput';
import ConsoleButton from '../components/ConsoleButton';
import ConsoleBadge from '../components/ConsoleBadge';
import CodeChip from '../components/CodeChip';
import FormField from '../components/FormField';
import IconButton from '../components/IconButton';

// ---------------------------------------------------------------------------
// ModelEditDialog
// ---------------------------------------------------------------------------

interface ModelEditDialogProps {
  open: boolean;
  onClose: () => void;
  model: AIModelResponse | null;
  onSaved: () => void;
}

function ModelEditDialog(props: ModelEditDialogProps) {
  const toast = useToast();

  const [displayName, setDisplayName] = createSignal('');
  const [inputRate, setInputRate] = createSignal('');
  const [outputRate, setOutputRate] = createSignal('');
  const [isActive, setIsActive] = createSignal(true);
  const [submitting, setSubmitting] = createSignal(false);

  createEffect(() => {
    if (props.open && props.model) {
      setDisplayName(props.model.display_name);
      setInputRate(props.model.input_rate_per_million);
      setOutputRate(props.model.output_rate_per_million);
      setIsActive(props.model.is_active);
      setSubmitting(false);
    }
  });

  function buildUpdateData(): AIModelUpdateRequest | null {
    const model = props.model;
    if (!model) return null;

    const data: AIModelUpdateRequest = {};
    if (displayName() !== model.display_name) data.display_name = displayName();
    if (inputRate() !== model.input_rate_per_million) data.input_rate_per_million = inputRate();
    if (outputRate() !== model.output_rate_per_million) data.output_rate_per_million = outputRate();
    if (isActive() !== model.is_active) data.is_active = isActive();

    return Object.keys(data).length > 0 ? data : null;
  }

  async function handleSave() {
    const model = props.model;
    if (!model) return;

    const data = buildUpdateData();
    if (!data) {
      props.onClose();
      return;
    }

    setSubmitting(true);
    try {
      await updateAIModel(model.model_id, data);
      toast.showToast('Modello aggiornato', 'success');
      props.onSaved();
      props.onClose();
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
    <ConsoleDialog
      open={props.open}
      onClose={props.onClose}
      title="Modifica modello"
      width="md"
      footer={
        <>
          <ConsoleButton variant="secondary" onClick={props.onClose} disabled={submitting()}>
            Annulla
          </ConsoleButton>
          <ConsoleButton variant="primary" onClick={handleSave} loading={submitting()}>
            Salva modifiche
          </ConsoleButton>
        </>
      }
    >
      <div class="space-y-4">
        <FormField label="Display name">
          <ConsoleInput
            type="text"
            value={displayName()}
            onInput={setDisplayName}
            placeholder="Es. GPT-4o"
          />
        </FormField>

        <FormField label="Input rate (per 1M tokens)">
          <ConsoleInput
            type="text"
            value={inputRate()}
            onInput={setInputRate}
            placeholder="3.00"
            monospace
          />
        </FormField>

        <FormField label="Output rate (per 1M tokens)">
          <ConsoleInput
            type="text"
            value={outputRate()}
            onInput={setOutputRate}
            placeholder="15.00"
            monospace
          />
        </FormField>

        <FormField label="Attivo">
          <div class="pt-1">
            <ConsoleToggle checked={isActive()} onChange={setIsActive} />
          </div>
        </FormField>
      </div>
    </ConsoleDialog>
  );
}

// ---------------------------------------------------------------------------
// ProviderCard
// ---------------------------------------------------------------------------

interface ProviderCardProps {
  provider: AIProviderResponse;
  onToggleActive: (providerId: string, value: boolean) => void;
  onEditModel: (model: AIModelResponse) => void;
}

function ProviderCard(props: ProviderCardProps) {
  const toast = useToast();

  const [showKeyInput, setShowKeyInput] = createSignal(false);
  const [newKey, setNewKey] = createSignal('');
  const [savingKey, setSavingKey] = createSignal(false);

  async function handleSaveKey() {
    const key = newKey().trim();
    if (!key) return;

    setSavingKey(true);
    try {
      await updateAIProvider(props.provider.provider_id, { api_key: key });
      toast.showToast('Chiave API aggiornata', 'success');
      setShowKeyInput(false);
      setNewKey('');
    } catch (err) {
      if (err instanceof ConsoleApiError) {
        if (err.status === 401) { clearAdminKey(); return; }
        toast.showToast(err.message, 'error');
      } else {
        toast.showToast('Errore imprevisto. Riprova.', 'error');
      }
    } finally {
      setSavingKey(false);
    }
  }

  const modelColumns: ColumnDef<AIModelResponse>[] = [
    {
      key: 'slug',
      header: 'Slug',
      render: (row) => <CodeChip text={row.slug} />,
    },
    {
      key: 'display_name',
      header: 'Display Name',
      render: (row) => <span class="text-on-surface">{row.display_name}</span>,
    },
    {
      key: 'input_rate',
      header: 'Input Rate',
      render: (row) => formatRate(row.input_rate_per_million),
      align: 'right',
    },
    {
      key: 'output_rate',
      header: 'Output Rate',
      render: (row) => formatRate(row.output_rate_per_million),
      align: 'right',
    },
    {
      key: 'status',
      header: 'Stato',
      render: (row) => <ConsoleBadge variant={row.is_active ? 'active' : 'inactive'} dot />,
    },
    {
      key: 'actions',
      header: '',
      align: 'right',
      render: (row) => (
        <IconButton
          icon="edit"
          tooltip="Modifica"
          onClick={() => props.onEditModel(row)}
        />
      ),
    },
  ];

  return (
    <ConsoleCard
      title={props.provider.name}
      collapsible={true}
      defaultOpen={true}
      titleRight={
        <div class="flex items-center gap-3">
          <ConsoleBadge variant={props.provider.is_active ? 'active' : 'inactive'} dot />
          <ConsoleToggle
            checked={props.provider.is_active}
            onChange={(v) => props.onToggleActive(props.provider.provider_id, v)}
            size="sm"
          />
        </div>
      }
    >
      <div class="space-y-5">
        {/* API Key section */}
        <div class="flex items-center gap-3 flex-wrap">
          <span class="text-xs font-medium text-on-surface-variant">API Key:</span>
          <CodeChip text={props.provider.api_key_masked} />
          <Show
            when={showKeyInput()}
            fallback={
              <ConsoleButton variant="ghost" onClick={() => setShowKeyInput(true)}>
                Cambia chiave
              </ConsoleButton>
            }
          >
            <div class="flex items-center gap-2">
              <ConsoleInput
                type="password"
                value={newKey()}
                onInput={setNewKey}
                placeholder="Nuova API key"
              />
              <ConsoleButton
                variant="primary"
                onClick={handleSaveKey}
                loading={savingKey()}
                disabled={!newKey().trim()}
              >
                Salva chiave
              </ConsoleButton>
              <ConsoleButton
                variant="ghost"
                onClick={() => { setShowKeyInput(false); setNewKey(''); }}
                disabled={savingKey()}
              >
                Annulla
              </ConsoleButton>
            </div>
          </Show>
        </div>

        {/* Models table */}
        <ConsoleTable
          columns={modelColumns}
          rows={props.provider.models}
          emptyIcon="smart_toy_filled"
          emptyTitle="Nessun modello configurato"
          caption={`Modelli AI del provider ${props.provider.name}`}
        />
      </div>
    </ConsoleCard>
  );
}

// ---------------------------------------------------------------------------
// AIProvidersPage
// ---------------------------------------------------------------------------

export default function AIProvidersPage() {
  const toast = useToast();

  const [providers, { refetch }] = createResource(
    () => true,
    async () => {
      try {
        return await fetchAIProviders();
      } catch (err) {
        if (err instanceof ConsoleApiError) {
          if (err.status === 401) { clearAdminKey(); return; }
          toast.showToast(err.message, 'error');
        }
        throw err;
      }
    },
  );

  // Model edit dialog state
  const [editingModel, setEditingModel] = createSignal<AIModelResponse | null>(null);

  async function handleToggleProvider(providerId: string, value: boolean) {
    try {
      await updateAIProvider(providerId, { is_active: value });
      toast.showToast(value ? 'Provider attivato' : 'Provider disattivato', 'success');
      refetch();
    } catch (err) {
      if (err instanceof ConsoleApiError) {
        if (err.status === 401) { clearAdminKey(); return; }
        toast.showToast(err.message, 'error');
      } else {
        toast.showToast('Errore imprevisto. Riprova.', 'error');
      }
    }
  }

  return (
    <div class="space-y-6">
      <PageHeader title="AI Providers & Models" />

      <For each={providers() ?? []}>
        {(provider) => (
          <ProviderCard
            provider={provider}
            onToggleActive={handleToggleProvider}
            onEditModel={(model) => setEditingModel(model)}
          />
        )}
      </For>

      <ModelEditDialog
        open={!!editingModel()}
        onClose={() => setEditingModel(null)}
        model={editingModel()}
        onSaved={() => refetch()}
      />
    </div>
  );
}
