// ConfigEditForm — form edit per una singola chiave config.
//
// REQ-F-CONFIG-002 AC.5/6/7/11. Render:
// - Header info (key, type, category, version, last_updated)
// - Widget Pydantic-derived via factory <ConfigValidationWidget>
// - Reason textarea con counter + min 10 char enforcement
// - Save button disabilitato se reason < 10 char
// - Hot-reload notice (LISTEN/NOTIFY ~2s)
//
// Il submit/confirm dialog/handle errori e' gestito dal chiamante
// (ConfigEditPage) per mantenere il form puramente "presentational".
import { Show, createMemo, createSignal, createEffect } from 'solid-js';
import type { JSX } from 'solid-js';
import type { AppConfigItem } from '../lib/types';
import ConfigValidationWidget from './ConfigValidationWidgets';
import ConfigEnvOverrideBadge from './ConfigEnvOverrideBadge';
import ConfigRequiresRestartBadge from './ConfigRequiresRestartBadge';
import { formatRelativeTime } from '../lib/format-relative-time';

const REASON_MIN_LENGTH = 10;
const REASON_MAX_LENGTH = 500;

export interface ConfigEditFormSubmit {
  /** Nuovo valore (gia coerced dal widget al tipo corretto). */
  value: unknown;
  /** Reason testo libero, gia validato min/max length. */
  reason: string;
  /** Versione del record letto, propagata per optimistic concurrency. */
  version: number;
}

interface ConfigEditFormProps {
  item: AppConfigItem;
  /**
   * Valore di partenza pre-compilato. Il chiamante puo iniettare un valore
   * di rollback (entry audit) oppure passare `item.value`.
   */
  initialValue?: unknown;
  /**
   * Reason di partenza pre-compilato. Il chiamante puo iniettare la reason
   * auto-generata in caso di rollback ("rollback to entry #N: ...").
   */
  initialReason?: string;
  /** Errore inline dal server (es. 400 validation rules fail, 409 stale). */
  serverError?: string | null;
  /** True quando la richiesta PATCH e' in corso. */
  submitting?: boolean;
  onSubmit: (data: ConfigEditFormSubmit) => void;
  onCancel: () => void;
}

export default function ConfigEditForm(props: ConfigEditFormProps): JSX.Element {
  const [value, setValue] = createSignal<unknown>(
    props.initialValue !== undefined ? props.initialValue : props.item.value,
  );
  const [reason, setReason] = createSignal<string>(props.initialReason ?? '');
  const [touched, setTouched] = createSignal(false);

  // Se il chiamante swap-a `item` (rollback flow), riallinea i campi.
  createEffect(() => {
    if (props.initialValue !== undefined) {
      setValue(props.initialValue);
    }
  });
  createEffect(() => {
    if (props.initialReason !== undefined) {
      setReason(props.initialReason);
    }
  });

  const reasonTrimmed = createMemo(() => reason().trim());
  const reasonInvalid = createMemo(() => reasonTrimmed().length < REASON_MIN_LENGTH);
  const reasonTooLong = createMemo(() => reason().length > REASON_MAX_LENGTH);

  const canSubmit = createMemo(
    () => !reasonInvalid() && !reasonTooLong() && !props.submitting,
  );

  function handleSubmit(e: Event): void {
    e.preventDefault();
    setTouched(true);
    if (!canSubmit()) return;
    props.onSubmit({
      value: value(),
      reason: reason(),
      version: props.item.version,
    });
  }

  return (
    <form class="space-y-6" onSubmit={handleSubmit} noValidate>
      <header class="space-y-2">
        <div class="flex flex-wrap items-center gap-2">
          <h2 class="font-headline text-xl font-bold text-on-surface font-mono">
            {props.item.key}
          </h2>
          <Show when={props.item.env_override_active}>
            <ConfigEnvOverrideBadge envVarName={props.item.env_var_name} />
          </Show>
          <Show when={props.item.requires_restart}>
            <ConfigRequiresRestartBadge />
          </Show>
        </div>
        <Show when={props.item.description}>
          <p class="text-sm text-on-surface-variant">{props.item.description}</p>
        </Show>
        <p class="text-xs text-outline">
          Type: <span class="font-mono text-on-surface">{props.item.value_type}</span>
          {' '} · Category: <span class="font-mono text-on-surface">{props.item.category}</span>
          {' '} · Version: <span class="font-mono text-on-surface">{props.item.version}</span>
          {' '} · Updated:
          {' '}
          <span title={props.item.last_updated} class="text-on-surface">
            {formatRelativeTime(props.item.last_updated)}
          </span>
          <Show when={props.item.last_updated_by_email}>
            {' '}by <span class="text-on-surface">{props.item.last_updated_by_email}</span>
          </Show>
        </p>
      </header>

      <Show when={props.item.env_override_active}>
        <div
          role="alert"
          class="rounded-xl border border-warning/40 bg-warning/5 p-4 text-sm text-on-surface space-y-1"
        >
          <p class="font-semibold text-warning">ENV override active</p>
          <p class="text-on-surface-variant">
            This config is currently shadowed by env variable
            {' '}
            <code class="font-mono">{props.item.env_var_name ?? 'unknown'}</code>.
            Editing the DB value will not take effect at runtime until the env
            variable is removed from the deployment settings.
          </p>
        </div>
      </Show>

      <section class="space-y-1.5">
        <label class="block text-xs font-semibold uppercase tracking-wider text-primary">
          Value
        </label>
        <ConfigValidationWidget
          rule={props.item.validation_rules}
          fallbackValueType={props.item.value_type}
          value={value()}
          onChange={setValue}
          disabled={props.submitting}
          error={props.serverError ?? undefined}
        />
      </section>

      <section class="space-y-1.5">
        <label
          for="config-edit-reason"
          class="block text-xs font-semibold uppercase tracking-wider text-primary"
        >
          Reason
          <span aria-hidden="true" class="text-error ml-1">*</span>
          <span class="sr-only">(required, minimum 10 characters)</span>
        </label>
        <textarea
          id="config-edit-reason"
          value={reason()}
          onInput={(e) => setReason(e.currentTarget.value)}
          onBlur={() => setTouched(true)}
          placeholder="Explain why you are changing this value (min 10 characters)"
          rows={3}
          disabled={props.submitting}
          aria-invalid={touched() && reasonInvalid() ? true : undefined}
          aria-describedby="config-edit-reason-counter"
          class="w-full rounded-lg border bg-surface-container-lowest px-3 py-2 text-sm text-on-surface placeholder:text-outline transition-colors focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2 disabled:opacity-50"
          classList={{
            'border-error': touched() && (reasonInvalid() || reasonTooLong()),
            'border-outline-variant': !(touched() && (reasonInvalid() || reasonTooLong())),
          }}
        />
        <div
          id="config-edit-reason-counter"
          class="flex items-center justify-between text-xs"
        >
          <Show when={touched() && reasonInvalid()}>
            <span class="text-error">
              Reason is required, minimum {REASON_MIN_LENGTH} characters.
            </span>
          </Show>
          <Show when={touched() && reasonTooLong()}>
            <span class="text-error">
              Reason is too long, maximum {REASON_MAX_LENGTH} characters.
            </span>
          </Show>
          <span class="ml-auto text-outline">
            {reason().length}/{REASON_MAX_LENGTH}
          </span>
        </div>
      </section>

      <Show when={props.serverError}>
        <div
          role="alert"
          class="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error"
        >
          {props.serverError}
        </div>
      </Show>

      <p class="text-xs text-outline">
        This change takes effect within ~2 seconds via LISTEN/NOTIFY hot-reload.
        <Show when={props.item.requires_restart}>
          {' '}However, this key requires a container restart to apply changes.
        </Show>
      </p>

      <div class="flex justify-end gap-3">
        <button
          type="button"
          onClick={props.onCancel}
          disabled={props.submitting}
          class="rounded-lg border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface hover:bg-surface-container disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!canSubmit()}
          class="inline-flex items-center justify-center gap-2 rounded-lg gold-gradient px-4 py-2 text-sm font-semibold text-on-primary-fixed hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
        >
          <Show when={props.submitting}>
            <svg class="animate-spin w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </Show>
          Save Changes
        </button>
      </div>
    </form>
  );
}
