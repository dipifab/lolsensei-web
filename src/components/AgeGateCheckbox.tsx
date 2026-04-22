// WP24 TASK-3-011 — Age gate checkbox (GDPR Art. 8).
// Componente controlled. Validazione a carico del form parent.
import { createUniqueId, Show } from 'solid-js';
import { useI18n } from '../i18n';

interface Props {
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  id?: string;
}

export default function AgeGateCheckbox(props: Props) {
  const autoId = createUniqueId();
  const inputId = () => props.id ?? autoId;
  const errorId = () => `${inputId()}-err`;
  const descId = () => `${inputId()}-desc`;
  const { t } = useI18n();

  return (
    <div>
      <label
        for={inputId()}
        class="flex items-start gap-3 p-3 -m-3 rounded-lg min-h-11 cursor-pointer motion-safe:transition-colors hover:bg-surface-variant/30"
      >
        <input
          id={inputId()}
          type="checkbox"
          checked={props.checked}
          onChange={(e) => props.onChange(e.currentTarget.checked)}
          aria-required="true"
          aria-invalid={!!props.error}
          aria-describedby={`${descId()}${props.error ? ` ${errorId()}` : ''}`}
          class="mt-1 w-5 h-5 rounded border-outline focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:outline-none"
        />
        <span class="flex-1 text-sm leading-relaxed">
          <span class="block text-on-surface">{t('age_gate.label')}</span>
          <span id={descId()} class="block text-on-surface/70 mt-1 text-xs">
            {t('age_gate.explanation')}
          </span>
        </span>
      </label>

      <Show when={props.error}>
        <p id={errorId()} role="alert" class="mt-2 text-sm text-error">
          {props.error}
        </p>
      </Show>
    </div>
  );
}
