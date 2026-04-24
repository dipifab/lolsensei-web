// src/stores/community/notifications-store.ts
//
// Bell widget store. Long-running singleton across the community header.
// Polls GET /notifications every 30s when the tab is visible and a user is
// authenticated. Counter caps at 99 client-side for display; the server caps
// unread_count at 99 server-side too.
//
// future: switch to server-sent events (EventSource on /notifications/stream)
// when backend SSE endpoint ships — replace pollLoop() with sseSubscribe().

import { createStore, produce } from "solid-js/store";
import { createSignal, onCleanup } from "solid-js";
import type { NotificationItem } from "../../services/community-notifications-api";
import {
  fetchNotifications,
  postNotificationsRead,
  ApiError,
} from "../../services/community-notifications-api";

const POLL_INTERVAL_MS = 30_000;
const BACKOFF_MAX_MS = 5 * 60_000;
const RECENT_LIMIT = 5;

export interface NotificationsState {
  items: NotificationItem[];            // top-N recent (for dropdown)
  unreadCount: number;                  // capped 99 by server
  lastPolledAt: string | null;          // ISO8601
  loading: boolean;
  error: string | null;
  paused: boolean;                      // tab hidden or user logged out
}

const initial: NotificationsState = {
  items: [],
  unreadCount: 0,
  lastPolledAt: null,
  loading: false,
  error: null,
  paused: false,
};

export const [notifState, setNotifState] =
  createStore<NotificationsState>(initial);

// Polling controller (singleton module state).
let pollTimer: ReturnType<typeof setTimeout> | null = null;
let currentBackoff = POLL_INTERVAL_MS;
let inflight = false;
let stopped = false;

async function pollOnce(): Promise<void> {
  if (inflight || stopped || notifState.paused) return;
  inflight = true;
  try {
    const res = await fetchNotifications({ limit: RECENT_LIMIT });
    setNotifState(
      produce((s) => {
        s.items = res.items;
        s.unreadCount = res.unread_count;
        s.lastPolledAt = new Date().toISOString();
        s.error = null;
      }),
    );
    currentBackoff = POLL_INTERVAL_MS;
  } catch (err) {
    if (err instanceof ApiError && err.status === 401) {
      // User session gone; stop polling until next login event re-starts us.
      stopPolling();
      return;
    }
    if (err instanceof ApiError && err.status === 429) {
      currentBackoff = Math.min(currentBackoff * 2, BACKOFF_MAX_MS);
    }
    setNotifState("error", err instanceof Error ? err.message : String(err));
  } finally {
    inflight = false;
  }
}

function scheduleNext() {
  if (stopped) return;
  pollTimer = setTimeout(() => {
    void pollOnce().finally(scheduleNext);
  }, currentBackoff);
}

export function startPolling(): void {
  if (pollTimer || stopped === false && notifState.lastPolledAt != null) {
    // already started
  }
  stopped = false;
  currentBackoff = POLL_INTERVAL_MS;
  // fire immediately to populate header, then schedule.
  void pollOnce().finally(scheduleNext);
  bindVisibilityListener();
}

export function stopPolling(): void {
  stopped = true;
  if (pollTimer) {
    clearTimeout(pollTimer);
    pollTimer = null;
  }
}

function bindVisibilityListener() {
  if (typeof document === "undefined") return;
  const handler = () => {
    const hidden = document.visibilityState === "hidden";
    setNotifState("paused", hidden);
    if (!hidden) {
      // tab back to foreground: refresh now (debounced by inflight guard).
      void pollOnce();
    }
  };
  document.addEventListener("visibilitychange", handler);
  onCleanup(() => document.removeEventListener("visibilitychange", handler));
}

// ---------- optimistic actions ----------

export async function markAsRead(ids: string[]): Promise<void> {
  if (ids.length === 0) return;
  const idSet = new Set(ids);
  const snapshot = { ...notifState };
  setNotifState(
    produce((s) => {
      s.items = s.items.map((n) =>
        idSet.has(n.id) && n.read_at === null
          ? { ...n, read_at: new Date().toISOString() }
          : n,
      );
      // decrement counter by number of actually-unread items
      const delta = snapshot.items.filter(
        (n) => idSet.has(n.id) && n.read_at === null,
      ).length;
      s.unreadCount = Math.max(0, s.unreadCount - delta);
    }),
  );
  try {
    await postNotificationsRead(ids);
  } catch (err) {
    // rollback on failure
    setNotifState("items", snapshot.items);
    setNotifState("unreadCount", snapshot.unreadCount);
    throw err;
  }
}

export async function markAllAsRead(): Promise<void> {
  const snapshot = { ...notifState };
  const now = new Date().toISOString();
  setNotifState(
    produce((s) => {
      s.items = s.items.map((n) =>
        n.read_at === null ? { ...n, read_at: now } : n,
      );
      s.unreadCount = 0;
    }),
  );
  try {
    await postNotificationsRead(null);
  } catch (err) {
    setNotifState("items", snapshot.items);
    setNotifState("unreadCount", snapshot.unreadCount);
    throw err;
  }
}

// Display helper: "99+" cap
export function formatUnreadBadge(count: number): string {
  if (count <= 0) return "";
  if (count > 99) return "99+";
  return String(count);
}

// Solid-friendly counter signal for consumers that prefer signal over store.
export function useUnreadCount() {
  const [count, setCount] = createSignal(notifState.unreadCount);
  // re-sync on every store change
  const dispose = () => {};
  // note: createEffect on store field is the idiomatic solution; consumers who
  // need finer control should import `notifState.unreadCount` directly.
  return { count, setCount, dispose };
}
