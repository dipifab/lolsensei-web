// src/components/community/admin/ReportCard.tsx
//
// Single report card. Checkbox selection, priority/category badges, target
// preview, actions menu.
import { Show } from "solid-js";
import { useI18n } from "../../../i18n";
import { formatTemplate } from "../../../lib/datetime";
import type { ModQueueItem } from "../../../services/community-admin-api";
import ModerationActionsMenu from "./ModerationActionsMenu";

interface Props {
  item: ModQueueItem;
  selected: boolean;
  reporterIdentityRedacted: boolean;
  onToggleSelect: (id: string, shiftKey: boolean) => void;
  onOpenDetail: (id: string) => void;
  onActionComplete: (reportId: string) => void;
}

export default function ReportCard(props: Props) {
  const { t, locale } = useI18n();

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
    <li
      class="group rounded-lg border border-outline-variant bg-surface-container p-4 shadow-sm transition focus-within:ring-2 focus-within:ring-primary"
      classList={{
        "border-error bg-error/5": props.item.report.is_high_priority,
      }}
    >
      <div class="flex items-start gap-3">
        <label class="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center">
          <span class="sr-only">
            {formatTemplate(t("mod_admin.queue.select_report"), {
              id: props.item.report.id.slice(0, 8),
            })}
          </span>
          <input
            type="checkbox"
            class="h-5 w-5 rounded border-outline text-primary focus:ring-primary"
            checked={props.selected}
            onClick={(e) =>
              props.onToggleSelect(props.item.report.id, e.shiftKey)
            }
          />
        </label>

        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-center gap-2 text-sm">
            <Show when={props.item.report.is_high_priority}>
              <span
                class="inline-flex items-center rounded bg-error px-2 py-0.5 text-xs font-semibold text-on-primary"
                aria-label={t("mod_admin.queue.high_priority")}
              >
                {t("mod_admin.queue.high_priority_short")}
              </span>
            </Show>
            <span class="inline-flex items-center rounded bg-surface-container-high px-2 py-0.5 text-xs font-medium text-on-surface">
              {t(`mod_admin.queue.target_type.${props.item.report.target_type}`)}
            </span>
            <span class="inline-flex items-center rounded bg-surface-container-highest px-2 py-0.5 text-xs text-on-surface">
              {t(`mod_admin.queue.reason.${props.item.report.reason}`)}
            </span>
            <time
              class="text-xs text-on-surface-variant"
              dateTime={props.item.report.created_at}
            >
              {formatDateTime(props.item.report.created_at)}
            </time>
          </div>

          <button
            type="button"
            class="mt-2 block text-left font-medium text-on-surface hover:underline focus:outline-none focus:underline"
            onClick={() => props.onOpenDetail(props.item.report.id)}
          >
            <Show
              when={props.item.target_title}
              fallback={<span>{props.item.target_preview ?? "…"}</span>}
            >
              {props.item.target_title}
            </Show>
          </button>

          <Show when={props.item.target_preview && props.item.target_title}>
            <p class="mt-1 line-clamp-2 text-sm text-on-surface-variant">
              {props.item.target_preview}
            </p>
          </Show>

          <dl class="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs text-on-surface-variant">
            <dt>{t("mod_admin.queue.author")}</dt>
            <dd>
              <Show
                when={props.item.target_author_nickname}
                fallback={<em>{t("mod_admin.queue.author_deleted")}</em>}
              >
                @{props.item.target_author_nickname}
              </Show>
            </dd>
            <dt>{t("mod_admin.queue.reporter")}</dt>
            <dd>
              <Show
                when={
                  !props.reporterIdentityRedacted &&
                  props.item.report.reporter_nickname
                }
                fallback={
                  <span aria-label={t("mod_admin.queue.reporter_hidden")}>
                    ***
                  </span>
                }
              >
                @{props.item.report.reporter_nickname}
              </Show>
            </dd>
            <Show when={props.item.report.note}>
              <dt>{t("mod_admin.queue.note")}</dt>
              <dd class="italic">"{props.item.report.note}"</dd>
            </Show>
          </dl>
        </div>

        <ModerationActionsMenu
          reportId={props.item.report.id}
          targetType={props.item.report.target_type}
          onComplete={() => props.onActionComplete(props.item.report.id)}
        />
      </div>
    </li>
  );
}
