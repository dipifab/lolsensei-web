// src/routes/[lang]/community/notifications.tsx
//
// JWT-gated CSR route for full notification history.
// Features:
//  - tab filter All | Unread
//  - cursor-based pagination ("Load more")
//  - mark-all-read button (bulk)
//  - click item -> mark read (optimistic) + navigate
//  - skeleton loader on first fetch
//  - empty state with CTA

import { For, Show, createEffect, createResource, createSignal } from "solid-js";
import { isServer } from "solid-js/web";
import { useParams, useNavigate, useLocation } from "@solidjs/router";
import { Title, Meta } from "@solidjs/meta";
import { useI18n } from "../../../i18n";
import { jwtSignal } from "../../../auth/store";
import {
  fetchNotifications,
  buildNotificationTargetUrl,
  type NotificationItem as Notif,
  type NotificationListResponse,
} from "../../../services/community-notifications-api";
import NotificationItem from "../../../components/community/NotificationItem";
import {
  markAsRead,
  markAllAsRead,
} from "../../../stores/community/notifications-store";

type Filter = "all" | "unread";

export default function NotificationsRoute() {
  const { t } = useI18n();
  const params = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Inline auth guard (sibling pattern: no shared requireCommunityUser helper
  // exists yet — redirect to login preserving current path as `next`).
  createEffect(() => {
    if (jwtSignal() == null) {
      const next = encodeURIComponent(location.pathname + location.search);
      navigate(`/${params.lang}/login?next=${next}`, { replace: true });
    }
  });

  const [filter, setFilter] = createSignal<Filter>("all");
  const [items, setItems] = createSignal<Notif[]>([]);
  const [cursor, setCursor] = createSignal<string | null>(null);
  const [hasMore, setHasMore] = createSignal(false);
  const [pageError, setPageError] = createSignal<string | null>(null);
  const [loadingMore, setLoadingMore] = createSignal(false);

  const [initial] = createResource(
    () => (isServer ? false : filter()),
    async (f): Promise<NotificationListResponse> => {
      setPageError(null);
      const res = await fetchNotifications({
        only_unread: f === "unread",
        limit: 20,
      });
      setItems(res.items);
      setCursor(res.next_cursor);
      setHasMore(!!res.next_cursor);
      return res;
    },
  );

  const loadMore = async () => {
    const c = cursor();
    if (!c || loadingMore()) return;
    setLoadingMore(true);
    try {
      const res = await fetchNotifications({
        only_unread: filter() === "unread",
        cursor: c,
        limit: 20,
      });
      setItems([...items(), ...res.items]);
      setCursor(res.next_cursor);
      setHasMore(!!res.next_cursor);
    } catch (err) {
      setPageError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoadingMore(false);
    }
  };

  const handleMarkAll = async () => {
    try {
      await markAllAsRead();
      // Refresh local page items to reflect read state.
      setItems(
        items().map((n) =>
          n.read_at === null ? { ...n, read_at: new Date().toISOString() } : n,
        ),
      );
    } catch (err) {
      setPageError(err instanceof Error ? err.message : String(err));
    }
  };

  const handleActivate = async (n: Notif) => {
    if (n.read_at === null) {
      try {
        await markAsRead([n.id]);
        setItems(
          items().map((i) =>
            i.id === n.id ? { ...i, read_at: new Date().toISOString() } : i,
          ),
        );
      } catch {
        /* rollback handled in store; page state unchanged */
      }
    }
    const url = buildNotificationTargetUrl(params.lang, n);
    if (url) navigate(url);
  };

  return (
    <main class="max-w-2xl mx-auto px-4 py-6">
      <Title>{t("community.notifications.page_title")}</Title>
      <Meta name="robots" content="noindex,nofollow" />
      <a
        href="#notification-list"
        class="sr-only focus:not-sr-only focus:block focus:p-2 focus:bg-primary focus:text-on-primary"
      >
        {t("community.notifications.skip_to_list")}
      </a>

      <header class="mb-4">
        <h1 class="text-2xl font-semibold text-on-surface">
          {t("community.notifications.title")}
        </h1>
        <p class="text-sm text-on-surface-variant">
          {t("community.notifications.subtitle")}
        </p>
      </header>

      <div
        role="tablist"
        aria-label={t("community.notifications.filter.aria_label")}
        class="flex gap-2 mb-4 border-b border-outline-variant/30"
      >
        <button
          role="tab"
          aria-selected={filter() === "all"}
          onClick={() => setFilter("all")}
          class={
            "px-4 py-2 text-sm border-b-2 " +
            (filter() === "all"
              ? "border-primary text-primary"
              : "border-transparent text-on-surface-variant")
          }
        >
          {t("community.notifications.filter.all")}
        </button>
        <button
          role="tab"
          aria-selected={filter() === "unread"}
          onClick={() => setFilter("unread")}
          class={
            "px-4 py-2 text-sm border-b-2 " +
            (filter() === "unread"
              ? "border-primary text-primary"
              : "border-transparent text-on-surface-variant")
          }
        >
          {t("community.notifications.filter.unread")}
        </button>
        <div class="ml-auto">
          <button
            type="button"
            onClick={handleMarkAll}
            class="text-sm text-primary hover:underline"
          >
            {t("community.notifications.mark_all_read")}
          </button>
        </div>
      </div>

      <Show when={pageError()}>
        <div
          role="alert"
          class="mb-4 p-3 rounded bg-error/10 text-error text-sm"
        >
          {pageError()}
        </div>
      </Show>

      <Show when={!initial.loading} fallback={<NotificationsSkeleton />}>
        <Show
          when={items().length > 0}
          fallback={<EmptyState lang={params.lang} />}
        >
          <ul
            id="notification-list"
            class="rounded-lg border border-outline-variant/30 divide-y divide-outline-variant/20 bg-surface-container"
          >
            <For each={items()}>
              {(n) => (
                <NotificationItem
                  notification={n}
                  lang={params.lang}
                  onActivate={handleActivate}
                />
              )}
            </For>
          </ul>
          <Show when={hasMore()}>
            <div class="mt-4 text-center">
              <button
                type="button"
                onClick={loadMore}
                disabled={loadingMore()}
                class="px-4 py-2 rounded border border-outline-variant/30 text-on-surface hover:bg-surface-container-highest disabled:opacity-50"
              >
                {loadingMore()
                  ? t("common.loading")
                  : t("community.notifications.load_more")}
              </button>
            </div>
          </Show>
        </Show>
      </Show>
    </main>
  );
}

function NotificationsSkeleton() {
  const placeholders = Array.from({ length: 6 });
  return (
    <div aria-busy="true" aria-live="polite" class="space-y-3">
      <For each={placeholders}>
        {() => (
          <div class="p-4 rounded-lg border border-outline-variant/30 bg-surface-container">
            <div class="h-4 w-3/4 rounded bg-surface-container-highest animate-pulse mb-2" />
            <div class="h-3 w-1/2 rounded bg-surface-container-highest animate-pulse" />
          </div>
        )}
      </For>
    </div>
  );
}

function EmptyState(props: { lang: string }) {
  const { t } = useI18n();
  return (
    <div class="py-16 text-center">
      <div
        aria-hidden="true"
        class="mx-auto w-24 h-24 rounded-full bg-surface-container-highest flex items-center justify-center mb-4"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.2"
          class="w-12 h-12 text-on-surface-variant"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31
               A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75
               a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085
               5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0"
          />
        </svg>
      </div>
      <h2 class="text-lg font-semibold text-on-surface">
        {t("community.notifications.empty_state.title")}
      </h2>
      <p class="mt-2 text-sm text-on-surface-variant">
        {t("community.notifications.empty_state.body")}
      </p>
      <a
        href={`/${props.lang}/community`}
        class="inline-block mt-4 px-4 py-2 rounded bg-primary text-on-primary hover:opacity-90"
      >
        {t("community.notifications.empty_state.cta")}
      </a>
    </div>
  );
}
