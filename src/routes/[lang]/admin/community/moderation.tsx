// src/routes/[lang]/admin/community/moderation.tsx
//
// Moderation triage queue (api-contracts section 4.2 / 4.3 / 4.4).
// Auth: inline guard on jwtSignal() + community role (moderator OR admin).
// CSR only (no SSR) - admin routes never cached at edge.

import {
  createEffect,
  createResource,
  createSignal,
  ErrorBoundary,
  For,
  Show,
  Suspense,
} from "solid-js";
import { Title } from "@solidjs/meta";
import { useLocation, useNavigate, useParams } from "@solidjs/router";
import { useI18n } from "../../../../i18n";
import { formatTemplate } from "../../../../lib/datetime";
import { jwtSignal } from "../../../../auth/store";
import { hasModeratorAccess } from "../../../../auth/community-role";
import {
  fetchModQueue,
  type ReportReason,
  type ReportStatus,
  type TargetType,
} from "../../../../services/community-admin-api";
import {
  clearSelection,
  modState,
  removeReportsLocal,
  setFilters,
  setModState,
  setPage,
  toggleSelection,
} from "../../../../stores/community/admin-moderation-store";
import ReportCard from "../../../../components/community/admin/ReportCard";
import BulkActionsBar from "../../../../components/community/admin/BulkActionsBar";
import QueueSkeleton from "../../../../components/community/admin/QueueSkeleton";
import InsufficientRoleModal from "../../../../components/community/admin/InsufficientRoleModal";

const TABS: Array<ReportStatus | "in_progress"> = [
  "pending",
  "in_progress",
  "resolved",
  "dismissed",
];
const REASONS: ReportReason[] = ["spam", "abuse", "competitor", "other"];
const TARGET_TYPES: TargetType[] = ["thread", "post"];

export default function ModerationQueuePage() {
  const { t } = useI18n();
  const params = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Inline auth guard: redirect to login if no JWT. Role guard renders modal.
  createEffect(() => {
    if (jwtSignal() == null) {
      const next = encodeURIComponent(location.pathname + location.search);
      navigate(`/${params.lang}/login?next=${next}`, { replace: true });
    }
  });

  const canModerate = () => jwtSignal() != null && hasModeratorAccess();

  const [queueResource, { refetch }] = createResource(
    () => ({
      authorized: canModerate(),
      status: modState.filters.status,
      category: modState.filters.category,
      is_high_priority: modState.filters.is_high_priority,
      target_type: modState.filters.target_type,
      from: modState.filters.from,
      to: modState.filters.to,
      page: modState.page,
      per_page: modState.perPage,
    }),
    async (q) => {
      if (!q.authorized) return null;
      setModState("loading", true);
      setModState("error", null);
      try {
        const { authorized: _a, ...query } = q;
        void _a;
        const resp = await fetchModQueue(query);
        setModState("items", resp.items);
        setModState("total", resp.total);
        setModState(
          "reporterIdentityRedacted",
          resp.reporter_identity_redacted,
        );
        return resp;
      } catch (err) {
        setModState("error", (err as Error).message);
        throw err;
      } finally {
        setModState("loading", false);
      }
    },
  );

  const [drawerId, setDrawerId] = createSignal<string | null>(null);
  const selectedIds = () => Array.from(modState.selection);

  return (
    <ErrorBoundary
      fallback={(err) => (
        <div class="mx-auto max-w-3xl p-4 text-on-surface">
          <p class="rounded-md border border-outline-variant bg-surface-container p-4 text-sm text-error">
            {(err as Error).message}
          </p>
        </div>
      )}
    >
      <Title>{t("mod_admin.queue.page_title")}</Title>
      <Show when={jwtSignal() != null && !canModerate()}>
        <InsufficientRoleModal
          errorCode="admin_only"
          onClose={() => navigate(`/${params.lang}`, { replace: true })}
        />
      </Show>
      <a href="#queue" class="skip-link sr-only focus:not-sr-only">
        {t("mod_admin.common.skip_to_content")}
      </a>
      <main class="mx-auto max-w-6xl space-y-4 p-4 text-on-surface">
        <header>
          <h1 class="text-2xl font-semibold">
            {t("mod_admin.queue.heading")}
          </h1>
          <p class="text-sm text-on-surface-variant">
            {t("mod_admin.queue.subheading")}
          </p>
        </header>

        <nav aria-label={t("mod_admin.queue.status_tabs")}>
          <ul class="flex flex-wrap gap-2 border-b border-outline-variant">
            <For each={TABS}>
              {(tab) => (
                <li>
                  <button
                    type="button"
                    class="min-h-[44px] rounded-t-md px-4 py-2 text-sm font-medium hover:bg-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary"
                    classList={{
                      "border-b-2 border-primary text-primary":
                        modState.filters.status === tab,
                    }}
                    aria-current={
                      modState.filters.status === tab ? "page" : undefined
                    }
                    onClick={() => setFilters({ status: tab })}
                  >
                    {t(`mod_admin.queue.tab.${tab}`)}
                  </button>
                </li>
              )}
            </For>
          </ul>
        </nav>

        <section
          class="grid gap-3 rounded-md border border-outline-variant bg-surface-container p-3 sm:grid-cols-2 md:grid-cols-4"
          aria-label={t("mod_admin.queue.filters_label")}
        >
          <label class="text-sm">
            <span class="mb-1 block font-medium">
              {t("mod_admin.queue.filter_category")}
            </span>
            <select
              class="min-h-[44px] w-full rounded-md border border-outline-variant bg-surface-container-low px-2 text-on-surface"
              value={modState.filters.category ?? ""}
              onChange={(e) =>
                setFilters({
                  category: e.currentTarget.value || undefined,
                })
              }
            >
              <option value="">{t("mod_admin.common.any")}</option>
              <For each={REASONS}>
                {(r) => (
                  <option value={r}>
                    {t(`mod_admin.queue.reason.${r}`)}
                  </option>
                )}
              </For>
            </select>
          </label>
          <label class="text-sm">
            <span class="mb-1 block font-medium">
              {t("mod_admin.queue.filter_target_type")}
            </span>
            <select
              class="min-h-[44px] w-full rounded-md border border-outline-variant bg-surface-container-low px-2 text-on-surface"
              value={modState.filters.target_type ?? ""}
              onChange={(e) =>
                setFilters({
                  target_type:
                    (e.currentTarget.value as TargetType) || undefined,
                })
              }
            >
              <option value="">{t("mod_admin.common.any")}</option>
              <For each={TARGET_TYPES}>
                {(tt) => (
                  <option value={tt}>
                    {t(`mod_admin.queue.target_type.${tt}`)}
                  </option>
                )}
              </For>
            </select>
          </label>
          <label class="mt-5 flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              class="h-4 w-4 text-primary focus:ring-primary"
              checked={!!modState.filters.is_high_priority}
              onChange={(e) =>
                setFilters({
                  is_high_priority: e.currentTarget.checked || undefined,
                })
              }
            />
            {t("mod_admin.queue.filter_high_priority_only")}
          </label>
          <div class="flex items-end gap-2">
            <button
              type="button"
              class="min-h-[44px] rounded-md border border-outline-variant px-4 text-sm text-on-surface hover:bg-surface-container-high"
              onClick={() => refetch()}
            >
              {t("mod_admin.common.refresh")}
            </button>
          </div>
        </section>

        <section id="queue" aria-labelledby="queue-heading">
          <h2 id="queue-heading" class="sr-only">
            {t("mod_admin.queue.list_heading")}
          </h2>
          <Suspense fallback={<QueueSkeleton />}>
            <Show when={!queueResource.loading} fallback={<QueueSkeleton />}>
              <Show
                when={modState.items.length > 0}
                fallback={<EmptyQueue status={modState.filters.status} />}
              >
                <p
                  class="text-xs text-on-surface-variant"
                  aria-live="polite"
                >
                  {formatTemplate(t("mod_admin.queue.count"), {
                    shown: modState.items.length,
                    total: modState.total,
                  })}
                </p>
                <ul class="mt-2 space-y-3">
                  <For each={modState.items}>
                    {(item) => (
                      <ReportCard
                        item={item}
                        selected={modState.selection.has(item.report.id)}
                        reporterIdentityRedacted={
                          modState.reporterIdentityRedacted
                        }
                        onToggleSelect={toggleSelection}
                        onOpenDetail={setDrawerId}
                        onActionComplete={(id) => removeReportsLocal([id])}
                      />
                    )}
                  </For>
                </ul>
                <Pagination
                  page={modState.page}
                  perPage={modState.perPage}
                  total={modState.total}
                  onPageChange={setPage}
                />
              </Show>
            </Show>
          </Suspense>
        </section>

        <Show when={drawerId()}>
          <ReportDetailDrawer
            reportId={drawerId()!}
            onClose={() => setDrawerId(null)}
          />
        </Show>

        <BulkActionsBar
          selectedIds={selectedIds()}
          onDone={(ids) => {
            removeReportsLocal(ids);
            clearSelection();
          }}
          onClear={clearSelection}
        />
      </main>
    </ErrorBoundary>
  );
}

function EmptyQueue(props: { status: string }) {
  const { t } = useI18n();
  return (
    <div class="rounded-lg border border-dashed border-outline-variant p-8 text-center text-on-surface">
      <p class="text-lg font-medium">
        {t(`mod_admin.queue.empty.${props.status}.title`)}
      </p>
      <p class="mt-1 text-sm text-on-surface-variant">
        {t(`mod_admin.queue.empty.${props.status}.body`)}
      </p>
    </div>
  );
}

function Pagination(props: {
  page: number;
  perPage: number;
  total: number;
  onPageChange: (p: number) => void;
}) {
  const { t } = useI18n();
  const totalPages = () =>
    Math.max(1, Math.ceil(props.total / props.perPage));
  return (
    <nav
      class="mt-4 flex items-center justify-between"
      aria-label={t("mod_admin.common.pagination")}
    >
      <button
        type="button"
        class="min-h-[44px] rounded-md border border-outline-variant px-3 text-sm text-on-surface hover:bg-surface-container-high disabled:opacity-40"
        disabled={props.page <= 1}
        onClick={() => props.onPageChange(props.page - 1)}
      >
        {t("mod_admin.common.previous")}
      </button>
      <span class="text-sm text-on-surface-variant">
        {formatTemplate(t("mod_admin.common.page_of"), {
          page: props.page,
          total: totalPages(),
        })}
      </span>
      <button
        type="button"
        class="min-h-[44px] rounded-md border border-outline-variant px-3 text-sm text-on-surface hover:bg-surface-container-high disabled:opacity-40"
        disabled={props.page >= totalPages()}
        onClick={() => props.onPageChange(props.page + 1)}
      >
        {t("mod_admin.common.next")}
      </button>
    </nav>
  );
}

function ReportDetailDrawer(props: { reportId: string; onClose: () => void }) {
  const { t } = useI18n();
  const item = () =>
    modState.items.find((i) => i.report.id === props.reportId);

  return (
    <aside
      class="fixed right-0 top-0 z-20 h-full w-full max-w-md overflow-y-auto border-l border-outline-variant bg-surface-container p-4 text-on-surface shadow-xl sm:w-[28rem]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      onKeyDown={(e) => e.key === "Escape" && props.onClose()}
    >
      <div class="flex items-center justify-between">
        <h2 id="drawer-title" class="text-lg font-semibold">
          {t("mod_admin.queue.detail_title")}
        </h2>
        <button
          type="button"
          class="min-h-[44px] rounded-md px-3 hover:bg-surface-container-high"
          onClick={props.onClose}
          aria-label={t("mod_admin.common.close")}
        >
          ×
        </button>
      </div>
      <Show when={item()} fallback={<p>{t("mod_admin.common.not_found")}</p>}>
        <dl class="mt-4 space-y-2 text-sm">
          <div>
            <dt class="font-medium">
              {t("mod_admin.queue.target_title_label")}
            </dt>
            <dd>{item()!.target_title ?? "—"}</dd>
          </div>
          <div>
            <dt class="font-medium">
              {t("mod_admin.queue.target_body")}
            </dt>
            <dd class="whitespace-pre-wrap rounded bg-surface-container-high p-2">
              {item()!.target_preview ?? "—"}
            </dd>
          </div>
          <div>
            <dt class="font-medium">
              {t("mod_admin.queue.reason_label")}
            </dt>
            <dd>
              {t(`mod_admin.queue.reason.${item()!.report.reason}`)}
            </dd>
          </div>
          <Show when={item()!.report.note}>
            <div>
              <dt class="font-medium">{t("mod_admin.queue.note")}</dt>
              <dd class="italic">"{item()!.report.note}"</dd>
            </div>
          </Show>
        </dl>
      </Show>
    </aside>
  );
}
