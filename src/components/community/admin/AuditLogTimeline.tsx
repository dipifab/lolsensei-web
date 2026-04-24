// src/components/community/admin/AuditLogTimeline.tsx
//
// Vertical timeline of audit events with expandable JSON details.
import { createSignal, For, Show } from "solid-js";
import { useI18n } from "../../../i18n";
import type { AuditLogItem } from "../../../services/community-admin-api";

interface Props {
  items: AuditLogItem[];
}

export default function AuditLogTimeline(props: Props) {
  const { t } = useI18n();
  return (
    <ol
      class="relative border-l-2 border-outline-variant pl-4"
      aria-label={t("mod_admin.audit.timeline_label")}
    >
      <For each={props.items}>
        {(item) => <AuditEntry item={item} />}
      </For>
    </ol>
  );
}

function AuditEntry(props: { item: AuditLogItem }) {
  const { t, locale } = useI18n();
  const [expanded, setExpanded] = createSignal(false);
  const hasDetails = () =>
    props.item.details && Object.keys(props.item.details).length > 0;

  const formatDateTime = (iso: string): string => {
    try {
      return new Intl.DateTimeFormat(locale(), {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(iso));
    } catch {
      return iso;
    }
  };

  return (
    <li class="mb-4 -ml-[9px]">
      <span
        class="absolute -left-[9px] mt-1 block h-4 w-4 rounded-full border-2 border-outline bg-surface-container"
        aria-hidden="true"
      />
      <div class="rounded-md border border-outline-variant bg-surface-container p-3 text-sm text-on-surface">
        <div class="flex flex-wrap items-center gap-2">
          <time
            class="text-xs text-on-surface-variant"
            dateTime={props.item.created_at}
          >
            {formatDateTime(props.item.created_at)}
          </time>
          <span class="inline-flex items-center rounded bg-surface-container-high px-2 py-0.5 text-xs font-medium">
            {props.item.actor_role}
          </span>
          <span class="font-medium">
            <Show
              when={props.item.actor_nickname}
              fallback={<em>system</em>}
            >
              @{props.item.actor_nickname}
            </Show>
          </span>
          <span class="text-on-surface-variant">
            {t("mod_admin.audit.did")}
          </span>
          <code class="rounded bg-surface-container-high px-1.5 py-0.5 text-xs">
            {props.item.action}
          </code>
          <Show when={props.item.target_type && props.item.target_id}>
            <span class="text-xs text-on-surface-variant">
              → {props.item.target_type} #{props.item.target_id?.slice(0, 8)}
            </span>
          </Show>
        </div>
        <Show when={props.item.reason}>
          <p class="mt-1 text-on-surface-variant">"{props.item.reason}"</p>
        </Show>
        <Show when={hasDetails()}>
          <button
            type="button"
            class="mt-2 text-xs font-medium text-primary hover:underline"
            aria-expanded={expanded()}
            onClick={() => setExpanded(!expanded())}
          >
            {expanded()
              ? t("mod_admin.audit.hide_details")
              : t("mod_admin.audit.show_details")}
          </button>
          <Show when={expanded()}>
            <pre class="mt-2 overflow-x-auto rounded bg-surface-container-high p-2 text-xs text-on-surface">
              {JSON.stringify(props.item.details, null, 2)}
            </pre>
          </Show>
        </Show>
      </div>
    </li>
  );
}
