// WPCP-026 (CR-063) — RoleFilter component.
//
// Pillole tab-style con pattern radiogroup ARIA. Default "any" (tutti i ruoli).
// 6 bottoni: any + top + jungle + mid + bot + support. Click emette
// `onRoleChange(role)`. Keyboard: ogni pillola e' un `<button>` raggiungibile
// con Tab; Enter/Space attiva (default browser su button).
//
// Riferimenti:
//   - dev-repository/wp-counter-picker/design/components.md §2 (RoleFilter)
//   - dev-repository/wp-counter-picker/design/i18n.md §3.4 (counter.role.*)
//   - dev-repository/wp-counter-picker/design/accessibility-perf.md §2 (ARIA)

import { For, type JSX } from 'solid-js';
import type { Lang, RoleFilter as RoleFilterValue } from '../../lib/counter/types';
import { useCounterI18n } from '../../lib/counter/i18n';

const ROLE_FILTER_VALUES: readonly RoleFilterValue[] = [
  'any',
  'top',
  'jungle',
  'mid',
  'bot',
  'support',
] as const;

const I18N_KEY_BY_ROLE: Record<RoleFilterValue, string> = {
  any: 'counter.role.any',
  top: 'counter.role.top',
  jungle: 'counter.role.jungle',
  mid: 'counter.role.mid',
  bot: 'counter.role.bot',
  support: 'counter.role.support',
};

export interface RoleFilterProps {
  /** Lingua corrente per le label localizzate (riservato per future estensioni
   *  che dipendano dalla lingua oltre l'i18n provider). */
  lang: Lang;
  /** Valore attualmente selezionato. */
  value: RoleFilterValue;
  /** Callback invocato quando l'utente cambia il filtro. */
  onRoleChange: (role: RoleFilterValue) => void;
}

export function RoleFilter(props: RoleFilterProps): JSX.Element {
  const { label } = useCounterI18n();

  return (
    <div
      role="radiogroup"
      aria-label={label('counter.role.aria_label')}
      class="flex flex-wrap gap-2"
      data-testid="role-filter"
      data-lang={props.lang}
    >
      <For each={ROLE_FILTER_VALUES}>
        {(role) => {
          const isActive = (): boolean => props.value === role;
          return (
            <button
              type="button"
              role="radio"
              aria-checked={isActive() ? 'true' : 'false'}
              tabIndex={isActive() ? 0 : -1}
              class={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors
                motion-safe:transition-colors
                ${
                  isActive()
                    ? 'bg-primary text-on-primary border-primary'
                    : 'bg-surface-container/40 text-on-surface border-outline/30 hover:bg-surface-container'
                }
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2`}
              onClick={() => props.onRoleChange(role)}
              onKeyDown={(e) => {
                // Within a radiogroup, ArrowRight/Down advances, ArrowLeft/Up
                // retreats. Wrap around for keyboard cycling.
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                  e.preventDefault();
                  const idx = ROLE_FILTER_VALUES.indexOf(role);
                  const next = ROLE_FILTER_VALUES[(idx + 1) % ROLE_FILTER_VALUES.length]!;
                  props.onRoleChange(next);
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                  e.preventDefault();
                  const idx = ROLE_FILTER_VALUES.indexOf(role);
                  const prev =
                    ROLE_FILTER_VALUES[
                      (idx - 1 + ROLE_FILTER_VALUES.length) % ROLE_FILTER_VALUES.length
                    ]!;
                  props.onRoleChange(prev);
                }
              }}
            >
              {label(I18N_KEY_BY_ROLE[role])}
            </button>
          );
        }}
      </For>
    </div>
  );
}

export default RoleFilter;
