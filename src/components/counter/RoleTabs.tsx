// CR-063 followup — RoleTabs (Counter Detail Page).
//
// Tablist client-side per filtrare le celle matchup della detail page
// per ruolo dell'enemy nella guida sorgente. Tab "All" + N tab ruolo
// (solo i ruoli che hanno almeno una cella, derivati via
// `rolesWithMatchups` in `detail.ts`).
//
// Pattern ARIA tablist semplificato: i tab sono `<button role="tab">`
// con `aria-selected`, raggruppati in un container `role="tablist"`.
// Le freccette tastiera non sono gestite (i tab non sono il focus
// primario della pagina; Tab nativo basta per a11y di base — vedi
// design/accessibility-perf.md §3.2 per la deviazione documentata).

import { For, type JSX } from 'solid-js';
import type { Lang, Role } from '../../lib/counter/types';
import { useCounterI18n } from '../../lib/counter/i18n';

export interface RoleTabsProps {
  lang: Lang;
  /** Ruoli con almeno una cella nelle liste matchup, in ordine canonico. */
  roles: Role[];
  /** Ruolo attivo (null = tab "All"). */
  active: Role | null;
  /** Callback su click tab. `null` = tab "All". */
  onSelect: (role: Role | null) => void;
}

export function RoleTabs(props: RoleTabsProps): JSX.Element {
  const { label } = useCounterI18n();

  const tabClass = (selected: boolean): string =>
    [
      'px-3 py-1.5 rounded-full text-xs md:text-sm font-medium uppercase',
      'tracking-wider whitespace-nowrap transition-colors',
      'focus-visible:outline focus-visible:outline-2',
      'focus-visible:outline-primary focus-visible:outline-offset-2',
      selected
        ? 'bg-primary text-on-primary'
        : 'bg-surface-container/40 text-on-surface-variant hover:bg-surface-container/70',
    ].join(' ');

  return (
    <div
      role="tablist"
      aria-label={label('counter.role.aria_label')}
      class="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1"
      data-testid="counter-detail-role-tabs"
      data-lang={props.lang}
    >
      <button
        type="button"
        role="tab"
        aria-selected={props.active === null ? 'true' : 'false'}
        data-testid="counter-detail-role-tab-all"
        class={tabClass(props.active === null)}
        onClick={() => props.onSelect(null)}
      >
        {label('counter.role.any')}
      </button>
      <For each={props.roles}>
        {(r) => (
          <button
            type="button"
            role="tab"
            aria-selected={props.active === r ? 'true' : 'false'}
            data-testid={`counter-detail-role-tab-${r}`}
            class={tabClass(props.active === r)}
            onClick={() => props.onSelect(r)}
          >
            {label(`counter.role.${r}`)}
          </button>
        )}
      </For>
    </div>
  );
}

export default RoleTabs;
