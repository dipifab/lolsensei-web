import { For, Show } from 'solid-js';
import type { TimelineEvent } from '../../types';
import TimelineEventItem from './TimelineEventItem';
import ConsoleSkeleton from '../ConsoleSkeleton';

interface TimelineSidebarProps {
  events: TimelineEvent[];
  loading?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
}

export default function TimelineSidebar(props: TimelineSidebarProps) {
  const isEmpty = () =>
    !props.loading && (props.events?.length ?? 0) === 0;

  return (
    <aside
      aria-label="User events timeline"
      class="sticky top-20 self-start h-[calc(100vh-6rem)] w-full xl:w-80 bg-surface-container rounded-xl border border-outline-variant/10 p-4 flex flex-col"
    >
      <header class="flex items-center justify-between mb-4">
        <h2 class="text-sm font-headline font-bold text-on-surface uppercase tracking-wider">
          Timeline
        </h2>
        <Show when={props.events && props.events.length > 0}>
          <span class="text-xs text-on-surface-variant">{props.events.length} events</span>
        </Show>
      </header>
      <div class="flex-1 overflow-y-auto pr-1">
        <Show when={props.loading && (!props.events || props.events.length === 0)}>
          <div class="space-y-4">
            <For each={Array.from({ length: 5 })}>
              {() => <ConsoleSkeleton variant="card" height="4rem" />}
            </For>
          </div>
        </Show>
        <Show when={isEmpty()}>
          <p class="text-sm text-on-surface-variant text-center py-8">
            No events recorded
          </p>
        </Show>
        <Show when={props.events && props.events.length > 0}>
          <ol class="list-none m-0 p-0">
            <For each={props.events}>
              {(e) => <TimelineEventItem event={e} />}
            </For>
          </ol>
          <Show when={props.hasMore}>
            <button
              type="button"
              onClick={() => props.onLoadMore?.()}
              class="w-full mt-2 rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm text-on-surface hover:bg-surface-container-high focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
            >
              Load more
            </button>
          </Show>
        </Show>
      </div>
    </aside>
  );
}
