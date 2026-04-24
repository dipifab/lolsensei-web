// src/components/community/admin/QueueSkeleton.tsx
//
// Skeleton placeholder during queue loading. Avoids spinner flash < 200ms.
import { For } from "solid-js";
import { useI18n } from "../../../i18n";

export default function QueueSkeleton(props: { rows?: number }) {
  const { t } = useI18n();
  const rows = () => props.rows ?? 6;
  return (
    <ul
      class="space-y-3"
      aria-busy="true"
      aria-label={t("mod_admin.queue.loading")}
    >
      <For each={Array.from({ length: rows() })}>
        {() => (
          <li class="rounded-lg border border-outline-variant bg-surface-container p-4 animate-pulse">
            <div class="h-4 w-1/3 rounded bg-surface-container-highest" />
            <div class="mt-3 h-3 w-2/3 rounded bg-surface-container-high" />
            <div class="mt-2 h-3 w-1/2 rounded bg-surface-container-high" />
          </li>
        )}
      </For>
    </ul>
  );
}
