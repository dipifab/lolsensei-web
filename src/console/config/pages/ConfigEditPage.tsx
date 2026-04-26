// ConfigEditPage — S2 (ux-flows §3.2) form edit per chiave singola.
//
// REQ-F-CONFIG-002 AC.5/6/7/11. Lifecycle:
// 1. Load `getConfig(key)` via createResource (loading skeleton, 404→empty)
// 2. Edit via ConfigEditForm (widget Pydantic-derived + reason textarea)
// 3. On submit:
//    a. Se `requires_restart` o `env_override_active`: ConfirmDialog
//    b. PATCH via patchConfig:
//       - 200 → toast success + redirect /console/config
//       - 409 (VersionMismatchError) → conflict dialog "Reload"
//       - 400 → inline serverError
//       - 4xx/5xx → toast errore via ConsoleApiError
//
// Optional `initialValue`/`initialReason` query params: usati dal flow di
// rollback (audit log → "Rollback to vN" → naviga qui pre-popolato).
import { Show, createSignal, createResource } from 'solid-js';
import { useNavigate, useParams, useSearchParams, A } from '@solidjs/router';
import PageHeader from '../../components/PageHeader';
import ConsoleSkeleton from '../../components/ConsoleSkeleton';
import ConsoleEmptyState from '../../components/ConsoleEmptyState';
import ConfirmDialog from '../../components/ConfirmDialog';
import { useToast } from '../../contexts/toast-context';
import { ConsoleApiError } from '../../api/client';
import {
  getConfig,
  patchConfig,
  VersionMismatchError,
} from '../lib/admin-config-api';
import type { AppConfigItem } from '../lib/types';
import ConfigEditForm, {
  type ConfigEditFormSubmit,
} from '../components/ConfigEditForm';

interface PendingSubmit {
  data: ConfigEditFormSubmit;
  /** True quando occorre ConfirmDialog (requires_restart o env override). */
  requiresConfirm: boolean;
}

function tryParseJson(raw: string): unknown {
  try {
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
}

export default function ConfigEditPage() {
  const params = useParams<{ key: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const toast = useToast();

  const keyName = () => decodeURIComponent(params.key);

  // Optional pre-fill (rollback flow): /console/config/[key]?prefill_value=...&prefill_reason=...
  const prefillValue = (): unknown => {
    const raw = searchParams.prefill_value as string | undefined;
    if (!raw) return undefined;
    return tryParseJson(raw);
  };
  const prefillReason = (): string | undefined => {
    const raw = searchParams.prefill_reason as string | undefined;
    return raw ? raw : undefined;
  };

  const [item, { refetch }] = createResource<AppConfigItem | null, string>(
    keyName,
    async (key) => {
      try {
        return await getConfig(key);
      } catch (err) {
        if (err instanceof ConsoleApiError) {
          if (err.status === 404) return null;
          if (err.status !== 401) toast.showToast(err.message, 'error');
        } else {
          toast.showToast('Unexpected error while loading config.', 'error');
        }
        throw err;
      }
    },
  );

  // --- Submission state ---
  const [submitting, setSubmitting] = createSignal(false);
  const [serverError, setServerError] = createSignal<string | null>(null);
  const [pending, setPending] = createSignal<PendingSubmit | null>(null);
  const [conflict, setConflict] = createSignal<number | null>(null);

  function handleFormSubmit(data: ConfigEditFormSubmit): void {
    const it = item();
    if (!it) return;
    const requiresConfirm = it.requires_restart || it.env_override_active;
    if (requiresConfirm) {
      setPending({ data, requiresConfirm: true });
      return;
    }
    void doPatch(data);
  }

  async function doPatch(data: ConfigEditFormSubmit): Promise<void> {
    const it = item();
    if (!it) return;
    setSubmitting(true);
    setServerError(null);
    try {
      await patchConfig(it.key, {
        value_json: data.value as never,
        change_reason: data.reason,
        version: data.version,
      });
      toast.showToast('Configuration updated.', 'success');
      navigate('/console/config');
    } catch (err) {
      if (err instanceof VersionMismatchError) {
        setConflict(err.currentVersion);
      } else if (err instanceof ConsoleApiError) {
        if (err.status === 400) {
          setServerError(err.detail || 'Validation error.');
        } else if (err.status === 404) {
          toast.showToast('Config key not found.', 'error');
          navigate('/console/config');
        } else if (err.status !== 401) {
          toast.showToast(err.message, 'error');
        }
      } else {
        toast.showToast('Unexpected error. Retry.', 'error');
      }
    } finally {
      setSubmitting(false);
      setPending(null);
    }
  }

  function handleConfirm(): void {
    const p = pending();
    if (!p) return;
    void doPatch(p.data);
  }

  function handleConfirmCancel(): void {
    setPending(null);
  }

  function handleConflictReload(): void {
    setConflict(null);
    void refetch();
  }

  function handleCancel(): void {
    navigate('/console/config');
  }

  return (
    <div class="space-y-6">
      <div class="text-sm text-on-surface-variant">
        <A href="/console/config" class="hover:underline">
          ← Back to Runtime Config
        </A>
      </div>

      <PageHeader title="Edit configuration key" />

      <Show
        when={!item.loading || item()}
        fallback={<ConsoleSkeleton variant="card" count={3} height="3rem" />}
      >
        <Show
          when={item()}
          fallback={
            <ConsoleEmptyState
              icon="search_off"
              title={`Config key not found: ${keyName()}`}
              subtitle="The key does not exist in app_config. It may have been removed."
              action={{
                label: 'Back to list',
                onClick: () => navigate('/console/config'),
              }}
            />
          }
        >
          {(it) => (
            <ConfigEditForm
              item={it()}
              initialValue={prefillValue()}
              initialReason={prefillReason()}
              serverError={serverError()}
              submitting={submitting()}
              onSubmit={handleFormSubmit}
              onCancel={handleCancel}
            />
          )}
        </Show>
      </Show>

      {/* Confirm dialog: requires_restart o env override */}
      <ConfirmDialog
        open={pending() !== null}
        onClose={handleConfirmCancel}
        onConfirm={handleConfirm}
        title={
          item()?.requires_restart
            ? 'This change requires a container restart'
            : 'Env override active'
        }
        message={
          item()?.requires_restart
            ? `"${item()?.key}" is marked as requires_restart. The new value will not take effect until the next deploy or container restart.`
            : `"${item()?.key}" is currently shadowed by env variable ${item()?.env_var_name ?? 'unknown'}. The DB value will be written but will not take effect until the env variable is removed.`
        }
        variant="warning"
        confirmLabel="Save anyway"
        loading={submitting()}
      />

      {/* Conflict dialog: 409 optimistic concurrency */}
      <ConfirmDialog
        open={conflict() !== null}
        onClose={() => setConflict(null)}
        onConfirm={handleConflictReload}
        title="Configuration updated elsewhere"
        message={`This key was modified by someone else. The current version is ${conflict() ?? '?'} (you were editing version ${item()?.version ?? '?'}). Reload to see the latest value, then re-apply your change if still needed.`}
        variant="warning"
        confirmLabel="Reload"
      />
    </div>
  );
}
