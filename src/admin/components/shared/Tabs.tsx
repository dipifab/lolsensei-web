import { For, Show, createMemo, createUniqueId } from 'solid-js';

export interface TabItem<K extends string = string> {
  key: K;
  label: string;
  badge?: number | string;
}

interface TabsProps<K extends string> {
  tabs: TabItem<K>[];
  active: K;
  onChange: (key: K) => void;
  ariaLabel?: string;
  /**
   * Optional stable prefix used to build deterministic tab/panel IDs. Callers
   * that render their own `role="tabpanel"` section must pass the same prefix
   * and derive `aria-labelledby` as `${panelIdPrefix}-tab-${key}` so the
   * association with this component stays intact.
   */
  panelIdPrefix?: string;
}

export default function Tabs<K extends string>(props: TabsProps<K>) {
  const autoPrefix = createUniqueId();
  const prefix = () => props.panelIdPrefix ?? `tabs-${autoPrefix}`;
  const keys = createMemo(() => props.tabs.map((t) => t.key));

  const onKeyDown = (e: KeyboardEvent) => {
    const ks = keys();
    const idx = ks.indexOf(props.active);
    if (idx < 0) return;
    let next = idx;
    if (e.key === 'ArrowRight') next = (idx + 1) % ks.length;
    else if (e.key === 'ArrowLeft') next = (idx - 1 + ks.length) % ks.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = ks.length - 1;
    else return;
    e.preventDefault();
    props.onChange(ks[next] as K);
  };

  return (
    <div
      role="tablist"
      aria-label={props.ariaLabel ?? 'Sections'}
      onKeyDown={onKeyDown}
      class="flex gap-1 border-b border-outline-variant/30"
    >
      <For each={props.tabs}>
        {(tab) => {
          const isActive = () => props.active === tab.key;
          return (
            <button
              type="button"
              role="tab"
              aria-selected={isActive()}
              aria-controls={`${prefix()}-panel-${tab.key}`}
              id={`${prefix()}-tab-${tab.key}`}
              tabIndex={isActive() ? 0 : -1}
              onClick={() => props.onChange(tab.key)}
              class="relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
              classList={{
                'text-primary': isActive(),
                'text-on-surface-variant hover:text-on-surface': !isActive(),
              }}
            >
              {tab.label}
              <Show when={tab.badge !== undefined && tab.badge !== null && tab.badge !== ''}>
                <span class="inline-flex items-center justify-center rounded-full bg-surface-container-highest px-1.5 py-0.5 text-xs font-semibold text-on-surface">
                  {tab.badge}
                </span>
              </Show>
              <Show when={isActive()}>
                <span
                  aria-hidden="true"
                  class="absolute left-0 right-0 bottom-[-1px] h-[2px] bg-primary"
                />
              </Show>
            </button>
          );
        }}
      </For>
    </div>
  );
}
