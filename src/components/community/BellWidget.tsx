// src/components/community/BellWidget.tsx
//
// Global header bell. Renders icon + unread badge + dropdown.
// Integrates with notifications-store for polling and state.
// F4-015 REQ:
//   - poll 30s (delegated to store)
//   - badge "99+" cap
//   - dropdown top 5 + "View all"
//   - aria-live="polite" on counter
// future: switch to server-sent events (EventSource) — see store.
//
// The unread aria-label is rendered via flat i18n keys picked by count bucket
// (zero / one / other) because the sibling i18n layer does not support ICU
// plural inline; this keeps translation audits explicit per bucket.

import { Show, createSignal, onCleanup, onMount } from "solid-js";
import { useI18n } from "../../i18n";
import {
  notifState,
  formatUnreadBadge,
  startPolling,
  stopPolling,
} from "../../stores/community/notifications-store";
import { formatTemplate } from "../../lib/datetime";
import NotificationsDropdown from "./NotificationsDropdown";

export interface BellWidgetProps {
  lang: string;
  authenticated: boolean;
}

export default function BellWidget(props: BellWidgetProps) {
  const { t } = useI18n();
  const [open, setOpen] = createSignal(false);
  let buttonRef: HTMLButtonElement | undefined;

  onMount(() => {
    if (props.authenticated) startPolling();
    onCleanup(() => stopPolling());
  });

  // Guard render: if not authenticated, widget is hidden.
  if (!props.authenticated) return null;

  const ariaLabel = () => {
    const n = notifState.unreadCount;
    const bucket = n === 0 ? "zero" : n === 1 ? "one" : "other";
    const template = t(`community.notifications.bell.aria_label.${bucket}`);
    return formatTemplate(template, { count: n });
  };

  return (
    <div class="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-label={ariaLabel()}
        aria-haspopup="menu"
        aria-expanded={open()}
        onClick={() => setOpen((v) => !v)}
        class="relative inline-flex items-center justify-center
               w-11 h-11 rounded-full
               text-on-surface hover:bg-surface-container-highest
               focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-primary"
      >
        {/* Inline SVG bell icon. TODO: replace with shared <Icon name="notifications" /> once available. */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          class="w-5 h-5"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31
               A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75
               a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085
               5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0
               m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
        <Show when={notifState.unreadCount > 0}>
          <span
            aria-live="polite"
            aria-atomic="true"
            class="absolute -top-1 -right-1 min-w-[20px] h-5 px-1
                   rounded-full bg-error text-on-error text-[11px]
                   font-semibold flex items-center justify-center"
          >
            {formatUnreadBadge(notifState.unreadCount)}
          </span>
        </Show>
      </button>
      <NotificationsDropdown
        open={open()}
        lang={props.lang}
        onClose={() => {
          setOpen(false);
          buttonRef?.focus();
        }}
      />
    </div>
  );
}
