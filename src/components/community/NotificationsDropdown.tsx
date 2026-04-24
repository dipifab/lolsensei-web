// src/components/community/NotificationsDropdown.tsx
//
// Popover surface rendered by BellWidget. Contains a header (title + mark-all),
// the top-N recent items, and a "View all" CTA linking to the full page.
// Focus is trapped while open; ESC closes; arrow keys move between items.

import { For, Show, createEffect, onCleanup, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { useI18n } from "../../i18n";
import NotificationItem from "./NotificationItem";
import {
  notifState,
  markAsRead,
  markAllAsRead,
} from "../../stores/community/notifications-store";
import type { NotificationItem as Notif } from "../../services/community-notifications-api";
import { buildNotificationTargetUrl } from "../../services/community-notifications-api";

export interface NotificationsDropdownProps {
  open: boolean;
  lang: string;
  onClose: () => void;
}

export default function NotificationsDropdown(
  props: NotificationsDropdownProps,
) {
  const { t } = useI18n();
  const navigate = useNavigate();
  let rootRef: HTMLDivElement | undefined;

  // ESC close + focus trap
  const onKeyDown = (e: KeyboardEvent) => {
    if (!props.open) return;
    if (e.key === "Escape") {
      e.stopPropagation();
      props.onClose();
      return;
    }
    if (e.key === "Tab" && rootRef) {
      const focusables = rootRef.querySelectorAll<HTMLElement>(
        "a, button, [tabindex]:not([tabindex='-1'])",
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    if ((e.key === "ArrowDown" || e.key === "ArrowUp") && rootRef) {
      e.preventDefault();
      const items = Array.from(
        rootRef.querySelectorAll<HTMLElement>("[role='menuitem']"),
      );
      if (items.length === 0) return;
      const idx = items.indexOf(document.activeElement as HTMLElement);
      const next =
        e.key === "ArrowDown"
          ? items[(idx + 1) % items.length]
          : items[(idx - 1 + items.length) % items.length];
      next.focus();
    }
  };

  // click outside to close
  const onDocClick = (e: MouseEvent) => {
    if (!props.open || !rootRef) return;
    if (!rootRef.contains(e.target as Node)) props.onClose();
  };

  onMount(() => {
    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("mousedown", onDocClick, true);
    onCleanup(() => {
      document.removeEventListener("keydown", onKeyDown, true);
      document.removeEventListener("mousedown", onDocClick, true);
    });
  });

  // auto-focus first item on open
  createEffect(() => {
    if (props.open && rootRef) {
      const first = rootRef.querySelector<HTMLElement>("[role='menuitem']");
      first?.focus();
    }
  });

  const handleActivate = async (n: Notif) => {
    if (n.read_at === null) {
      try {
        await markAsRead([n.id]);
      } catch {
        /* optimistic rolled back; continue navigation anyway */
      }
    }
    const url = buildNotificationTargetUrl(props.lang, n);
    props.onClose();
    if (url) navigate(url);
  };

  const handleMarkAll = async () => {
    try {
      await markAllAsRead();
    } catch {
      // TODO: surface via pushToast once dropdown has a dedicated error slot.
    }
  };

  return (
    <Show when={props.open}>
      <div
        ref={rootRef}
        role="menu"
        aria-label={t("community.notifications.dropdown.aria_label")}
        class="absolute right-0 mt-2 w-80 md:w-96 max-h-[32rem]
               overflow-hidden rounded-lg border border-outline-variant/30
               bg-surface-container-high shadow-lg z-50 flex flex-col"
      >
        <div class="flex items-center justify-between px-4 py-2 border-b border-outline-variant/20">
          <p class="text-sm font-semibold text-on-surface">
            {t("community.notifications.title")}
          </p>
          <button
            type="button"
            onClick={handleMarkAll}
            disabled={notifState.unreadCount === 0}
            class="text-xs text-primary hover:underline disabled:opacity-50"
          >
            {t("community.notifications.mark_all_read")}
          </button>
        </div>
        <div class="flex-1 overflow-y-auto">
          <Show
            when={notifState.items.length > 0}
            fallback={
              <div class="px-4 py-8 text-center text-sm text-on-surface-variant">
                {t("community.notifications.empty_state_short")}
              </div>
            }
          >
            <ul>
              <For each={notifState.items}>
                {(n) => (
                  <NotificationItem
                    notification={n}
                    lang={props.lang}
                    onActivate={handleActivate}
                    dense
                  />
                )}
              </For>
            </ul>
          </Show>
        </div>
        <div class="border-t border-outline-variant/20 px-4 py-2 text-center">
          <a
            href={`/${props.lang}/community/notifications`}
            class="text-sm text-primary hover:underline"
            onClick={() => props.onClose()}
          >
            {t("community.notifications.view_all")}
          </a>
        </div>
      </div>
    </Show>
  );
}
