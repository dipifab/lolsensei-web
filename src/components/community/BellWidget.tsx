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
import Icon from "../Icon";

export interface BellWidgetProps {
  lang: string;
  authenticated: boolean;
}

const COMMUNITY_FEATURE_ENABLED =
  import.meta.env.VITE_COMMUNITY_FEATURE_ENABLED === "true";

export default function BellWidget(props: BellWidgetProps) {
  const { t } = useI18n();
  const [open, setOpen] = createSignal(false);
  let buttonRef: HTMLButtonElement | undefined;

  onMount(() => {
    if (COMMUNITY_FEATURE_ENABLED && props.authenticated) startPolling();
    onCleanup(() => stopPolling());
  });

  // Guard render: hidden when community feature disabled or user not authed.
  // Backend community endpoints (/api/community/*) are not registered when
  // COMMUNITY_FEATURE_ENABLED=false on backend; polling them produces 404
  // noise on every authenticated page (incl. admin console).
  if (!COMMUNITY_FEATURE_ENABLED) return null;
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
        <Icon name="notifications" class="w-5 h-5" />
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
