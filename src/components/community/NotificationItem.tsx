// src/components/community/NotificationItem.tsx
//
// Renders a single notification row. Used by both BellWidget dropdown and
// /community/notifications page. Click triggers: mark-read + navigate to target.
//
// Security: payload.body_excerpt is rendered as plain text (no innerHTML). The
// backend is expected to deliver excerpts already sanitised but we treat them
// as untrusted defence-in-depth.

import { Show } from "solid-js";
import type {
  NotificationItem as Notif,
  NotificationKind,
} from "../../services/community-notifications-api";
import { useI18n } from "../../i18n";
import { formatRelativeTime, formatTemplate } from "../../lib/datetime";

export interface NotificationItemProps {
  notification: Notif;
  lang: string;
  onActivate: (n: Notif) => void;       // click / keyboard Enter
  dense?: boolean;                       // dropdown variant: compact
}

function titleKey(kind: NotificationKind): string {
  switch (kind) {
    case "reply":
      return "community.notifications.item.reply";
    case "mention":
      return "community.notifications.item.mention";
    case "reaction":
      return "community.notifications.item.reaction";
    case "warn":
      return "community.notifications.item.warn";
    case "ban":
      return "community.notifications.item.ban";
    case "pending_result_approved":
      return "community.notifications.item.pending_result_approved";
    case "pending_result_rejected":
      return "community.notifications.item.pending_result_rejected";
  }
}

export default function NotificationItem(props: NotificationItemProps) {
  const { t } = useI18n();
  const n = () => props.notification;
  const isUnread = () => n().read_at === null;

  const vars = () => {
    const p = n().payload as Record<string, unknown>;
    return {
      author:
        n().actor?.nickname ?? t("community.notifications.item.unknown_actor"),
      thread:
        typeof p.thread_title === "string"
          ? p.thread_title
          : t("community.notifications.item.this_thread"),
      reason: typeof p.reason === "string" ? p.reason : "",
    };
  };

  const title = () => formatTemplate(t(titleKey(n().kind)), vars());

  const excerpt = () => {
    const p = n().payload as Record<string, unknown>;
    return typeof p.body_excerpt === "string" ? p.body_excerpt : null;
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      props.onActivate(n());
    }
  };

  return (
    <li
      role="menuitem"
      tabindex="0"
      onClick={() => props.onActivate(n())}
      onKeyDown={onKeyDown}
      class={
        (props.dense ? "px-3 py-2 " : "px-4 py-3 ") +
        "flex gap-3 cursor-pointer border-b border-outline-variant/20 last:border-b-0 " +
        "hover:bg-surface-container-highest focus:bg-surface-container-highest focus:outline-none " +
        "focus-visible:ring-2 focus-visible:ring-primary " +
        (isUnread() ? "bg-primary/5" : "bg-transparent")
      }
      aria-label={
        (isUnread()
          ? t("community.notifications.item.unread_prefix") + " "
          : "") + title()
      }
    >
      <Show when={isUnread()}>
        <span
          aria-hidden="true"
          class="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"
        />
      </Show>
      <div class="min-w-0 flex-1">
        <p class={"text-sm " + (props.dense ? "line-clamp-2" : "")}>
          {title()}
        </p>
        <Show when={!props.dense && excerpt()}>
          {/* Plain text only — never innerHTML. Runbook security constraint. */}
          <p class="mt-1 text-xs text-on-surface-variant line-clamp-2">
            {excerpt()}
          </p>
        </Show>
        <p class="mt-1 text-xs text-on-surface-variant">
          {formatRelativeTime(n().created_at, props.lang)}
        </p>
      </div>
    </li>
  );
}
