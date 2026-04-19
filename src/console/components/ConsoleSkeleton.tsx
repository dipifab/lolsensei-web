import { For, Switch, Match } from 'solid-js';

interface ConsoleSkeletonProps {
  variant: 'text' | 'card' | 'row';
  width?: string;
  height?: string;
  count?: number;
}

export default function ConsoleSkeleton(props: ConsoleSkeletonProps) {
  return (
    <div aria-hidden="true" class="space-y-3">
      <For each={Array.from({ length: props.count ?? 1 })}>
        {() => (
          <Switch>
            <Match when={props.variant === 'text'}>
              <div
                class="h-4 rounded bg-surface-container-high animate-pulse"
                style={{ width: props.width ?? '100%' }}
              />
            </Match>
            <Match when={props.variant === 'card'}>
              <div
                class="rounded-xl bg-surface-container-high animate-pulse"
                style={{ width: props.width ?? '100%', height: props.height ?? '6rem' }}
              />
            </Match>
            <Match when={props.variant === 'row'}>
              <div
                class="h-12 rounded bg-surface-container-high animate-pulse"
                style={{ width: props.width ?? '100%' }}
              />
            </Match>
          </Switch>
        )}
      </For>
    </div>
  );
}
