// src/components/community/SearchSkeleton.tsx
//
// Placeholder rows shown during the first search fetch.

import { For } from "solid-js";

export default function SearchSkeleton(props: { rows?: number }) {
  const n = props.rows ?? 6;
  return (
    <ul role="list" aria-busy="true" class="flex flex-col gap-3">
      <For each={Array.from({ length: n })}>
        {() => (
          <li class="border border-outline-variant/30 rounded bg-surface-container p-4 animate-pulse">
            <div class="h-4 w-2/3 bg-surface-container-highest rounded mb-2" />
            <div class="h-3 w-full bg-surface-container-highest rounded mb-1" />
            <div class="h-3 w-5/6 bg-surface-container-highest rounded" />
          </li>
        )}
      </For>
    </ul>
  );
}
