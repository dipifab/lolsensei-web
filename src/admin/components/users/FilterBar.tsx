import { createSignal, createEffect, onCleanup, For, Show } from 'solid-js';
import type { SubscriptionStatusFilter } from '../../types';
import AdminSelect from '../AdminSelect';
import AdminInput from '../AdminInput';
import Icon from '../../../components/Icon';
import { hasActiveFilters } from '../../utils/filters';

export interface FilterValues {
  status?: SubscriptionStatusFilter;
  plan_id?: string;
  registered_from?: string;
  registered_to?: string;
  search?: string;
}

interface FilterBarProps {
  values: FilterValues;
  plans: { id: string; name: string }[];
  onChange: (next: FilterValues) => void;
}

const STATUS_OPTIONS: { value: string; label: string }[] = [
  { value: '', label: 'All status' },
  { value: 'active', label: 'Active' },
  { value: 'trialing', label: 'Trialing' },
  { value: 'past_due', label: 'Past due' },
  { value: 'cancelled', label: 'Cancelled' },
  { value: 'suspended', label: 'Suspended' },
  { value: 'free', label: 'Free' },
];

const DEBOUNCE_MS = 300;

export default function FilterBar(props: FilterBarProps) {
  const [searchDraft, setSearchDraft] = createSignal(props.values.search ?? '');

  createEffect(() => {
    setSearchDraft(props.values.search ?? '');
  });

  createEffect(() => {
    const current = searchDraft();
    const committed = props.values.search ?? '';
    if (current === committed) return;
    const handle = setTimeout(() => {
      props.onChange({ ...props.values, search: current || undefined });
    }, DEBOUNCE_MS);
    onCleanup(() => clearTimeout(handle));
  });

  const planOptions = () => [
    { value: '', label: 'All plans' },
    ...props.plans.map((p) => ({ value: p.id, label: p.name })),
  ];

  const setStatus = (v: string) =>
    props.onChange({
      ...props.values,
      status: v ? (v as SubscriptionStatusFilter) : undefined,
    });

  const setPlan = (v: string) =>
    props.onChange({ ...props.values, plan_id: v || undefined });

  const setFrom = (v: string) =>
    props.onChange({ ...props.values, registered_from: v || undefined });

  const setTo = (v: string) =>
    props.onChange({ ...props.values, registered_to: v || undefined });

  const clearAll = () => {
    setSearchDraft('');
    props.onChange({});
  };

  const showChips = () => hasActiveFilters(props.values);

  const activeChips = () => {
    const chips: { label: string; onRemove: () => void }[] = [];
    if (props.values.status) {
      const opt = STATUS_OPTIONS.find((o) => o.value === props.values.status);
      chips.push({
        label: `Status: ${opt?.label ?? props.values.status}`,
        onRemove: () => setStatus(''),
      });
    }
    if (props.values.plan_id) {
      const plan = props.plans.find((p) => p.id === props.values.plan_id);
      chips.push({
        label: `Plan: ${plan?.name ?? props.values.plan_id}`,
        onRemove: () => setPlan(''),
      });
    }
    if (props.values.registered_from) {
      chips.push({
        label: `From: ${props.values.registered_from}`,
        onRemove: () => setFrom(''),
      });
    }
    if (props.values.registered_to) {
      chips.push({
        label: `To: ${props.values.registered_to}`,
        onRemove: () => setTo(''),
      });
    }
    if (props.values.search) {
      chips.push({
        label: `Search: ${props.values.search}`,
        onRemove: () => {
          setSearchDraft('');
          props.onChange({ ...props.values, search: undefined });
        },
      });
    }
    return chips;
  };

  return (
    <section
      role="search"
      aria-label="Users list filters"
      class="bg-surface-container rounded-xl border border-outline-variant/10 p-4 space-y-3"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        <AdminSelect
          label="Status"
          options={STATUS_OPTIONS}
          value={props.values.status ?? ''}
          onChange={setStatus}
        />
        <AdminSelect
          label="Plan"
          options={planOptions()}
          value={props.values.plan_id ?? ''}
          onChange={setPlan}
        />
        <AdminInput
          label="Registered from"
          type="date"
          value={props.values.registered_from ?? ''}
          onInput={setFrom}
        />
        <AdminInput
          label="Registered to"
          type="date"
          value={props.values.registered_to ?? ''}
          onInput={setTo}
        />
        <div>
          <label
            for="users-filter-search"
            class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            Search
          </label>
          <div class="relative">
            <input
              id="users-filter-search"
              type="text"
              value={searchDraft()}
              onInput={(e) => setSearchDraft(e.currentTarget.value)}
              placeholder="Email or name"
              maxLength={120}
              aria-label="Search by email or name"
              class="w-full rounded-lg border border-outline-variant bg-surface-container-lowest pl-9 pr-3 py-2 text-sm text-on-surface placeholder:text-outline focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
            />
            <Icon
              name="search"
              class="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant"
            />
          </div>
        </div>
      </div>

      <Show when={showChips()}>
        <div class="flex items-center flex-wrap gap-2 pt-2 border-t border-outline-variant/10">
          <span class="text-xs font-semibold text-on-surface-variant mr-1">Active:</span>
          <For each={activeChips()}>
            {(chip) => (
              <button
                type="button"
                onClick={chip.onRemove}
                class="inline-flex items-center gap-1 rounded-full bg-surface-container-high px-2.5 py-1 text-xs text-on-surface hover:bg-surface-container-highest focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
                aria-label={`Remove filter: ${chip.label}`}
              >
                {chip.label}
                <span aria-hidden="true" class="text-on-surface-variant">&#x2715;</span>
              </button>
            )}
          </For>
          <button
            type="button"
            onClick={clearAll}
            class="ml-auto text-xs font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          >
            Reset
          </button>
        </div>
      </Show>
    </section>
  );
}
