// src/routes/[lang]/admin/community/audit-log.tsx
//
// Audit log timeline with filters + client-side CSV export (up to 1000 rows).

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
import { jwtSignal } from "../../../../auth/store";
import { hasModeratorAccess } from "../../../../auth/community-role";
import {
  fetchAuditLog,
  type AuditLogItem,
  type AuditQuery,
  type CommunityRole,
} from "../../../../services/community-admin-api";
import AuditLogTimeline from "../../../../components/community/admin/AuditLogTimeline";
import InsufficientRoleModal from "../../../../components/community/admin/InsufficientRoleModal";
import { pushToast } from "../../../../components/ui/toastStore";

const ACTIONS = [
  "dismiss",
  "delete_target",
  "warn_user",
  "ban_temp",
  "ban_perm",
  "escalate_to_admin",
  "unban",
  "role_change",
  "category_create",
  "category_update",
  "category_archive",
  "tag_merge",
  "filter_whitelist_update",
  "break_glass_override",
] as const;

export default function AuditLogPage() {
  const { t } = useI18n();
  const params = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  createEffect(() => {
    if (jwtSignal() == null) {
      const next = encodeURIComponent(location.pathname + location.search);
      navigate(`/${params.lang}/login?next=${next}`, { replace: true });
    }
  });

  const canView = () => jwtSignal() != null && hasModeratorAccess();

  const [filters, setFiltersSignal] = createSignal<AuditQuery>({
    page: 1,
    per_page: 25,
  });

  const [log] = createResource(
    () => ({ authorized: canView(), filters: filters() }),
    async (p) => {
      if (!p.authorized) return null;
      return fetchAuditLog(p.filters);
    },
  );

  function update<K extends keyof AuditQuery>(k: K, v: AuditQuery[K]) {
    setFiltersSignal({ ...filters(), [k]: v, page: 1 });
  }

  function loadMore() {
    if (!log()) return;
    setFiltersSignal({ ...filters(), page: (filters().page ?? 1) + 1 });
  }

  async function exportCsv() {
    try {
      const all: AuditLogItem[] = [];
      const pageSize = 100;
      for (let p = 1; p <= 10; p++) {
        const batch = await fetchAuditLog({
          ...filters(),
          page: p,
          per_page: pageSize,
        });
        all.push(...batch.items);
        if (!batch.items.length || all.length >= 1000) break;
      }
      const header = [
        "created_at",
        "actor_role",
        "actor_nickname",
        "action",
        "target_type",
        "target_id",
        "reason",
      ];
      const rows = all.map((i) => [
        i.created_at,
        i.actor_role,
        i.actor_nickname ?? "",
        i.action,
        i.target_type ?? "",
        i.target_id ?? "",
        (i.reason ?? "").replaceAll('"', '""'),
      ]);
      const csv = [header, ...rows]
        .map((row) => row.map((c) => `"${c}"`).join(","))
        .join("\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `audit-log-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      pushToast({
        variant: "error",
        message: t("mod_admin.audit.export_failed"),
      });
    }
  }

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
      <Title>{t("mod_admin.audit.page_title")}</Title>
      <Show when={jwtSignal() != null && !canView()}>
        <InsufficientRoleModal
          errorCode="admin_only"
          onClose={() => navigate(`/${params.lang}`, { replace: true })}
        />
      </Show>
      <main class="mx-auto max-w-5xl space-y-4 p-4 text-on-surface">
        <header class="flex items-center justify-between">
          <h1 class="text-2xl font-semibold">
            {t("mod_admin.audit.heading")}
          </h1>
          <button
            type="button"
            class="min-h-[44px] rounded-md border border-outline-variant px-3 text-sm text-on-surface hover:bg-surface-container-high"
            onClick={exportCsv}
          >
            {t("mod_admin.audit.export_csv")}
          </button>
        </header>

        <section
          class="grid gap-3 rounded-md border border-outline-variant bg-surface-container p-3 md:grid-cols-4"
          aria-label={t("mod_admin.audit.filters_label")}
        >
          <label class="text-sm">
            <span class="mb-1 block font-medium">
              {t("mod_admin.audit.filter_role")}
            </span>
            <select
              class="min-h-[44px] w-full rounded-md border border-outline-variant bg-surface-container-low px-2 text-on-surface"
              value={filters().actor_role ?? ""}
              onChange={(e) =>
                update(
                  "actor_role",
                  (e.currentTarget.value as CommunityRole) || undefined,
                )
              }
            >
              <option value="">{t("mod_admin.common.any")}</option>
              <option value="user">
                {t("mod_admin.users.role.user")}
              </option>
              <option value="moderator">
                {t("mod_admin.users.role.moderator")}
              </option>
              <option value="admin">
                {t("mod_admin.users.role.admin")}
              </option>
            </select>
          </label>
          <label class="text-sm">
            <span class="mb-1 block font-medium">
              {t("mod_admin.audit.filter_action")}
            </span>
            <select
              class="min-h-[44px] w-full rounded-md border border-outline-variant bg-surface-container-low px-2 text-on-surface"
              value={filters().action ?? ""}
              onChange={(e) =>
                update("action", e.currentTarget.value || undefined)
              }
            >
              <option value="">{t("mod_admin.common.any")}</option>
              <For each={ACTIONS}>
                {(a) => <option value={a}>{a}</option>}
              </For>
            </select>
          </label>
          <label class="text-sm">
            <span class="mb-1 block font-medium">
              {t("mod_admin.audit.filter_from")}
            </span>
            <input
              type="date"
              class="min-h-[44px] w-full rounded-md border border-outline-variant bg-surface-container-low px-2 text-on-surface"
              value={filters().from ?? ""}
              onChange={(e) =>
                update("from", e.currentTarget.value || undefined)
              }
            />
          </label>
          <label class="text-sm">
            <span class="mb-1 block font-medium">
              {t("mod_admin.audit.filter_to")}
            </span>
            <input
              type="date"
              class="min-h-[44px] w-full rounded-md border border-outline-variant bg-surface-container-low px-2 text-on-surface"
              value={filters().to ?? ""}
              onChange={(e) =>
                update("to", e.currentTarget.value || undefined)
              }
            />
          </label>
        </section>

        <Suspense fallback={<p>{t("mod_admin.common.loading")}</p>}>
          <Show
            when={!log.loading && log()}
            fallback={<p>{t("mod_admin.common.loading")}</p>}
          >
            <Show
              when={log()!.items.length > 0}
              fallback={
                <p class="rounded-md border border-dashed border-outline-variant p-6 text-center text-sm text-on-surface-variant">
                  {t("mod_admin.audit.empty")}
                </p>
              }
            >
              <AuditLogTimeline items={log()!.items} />
              <Show when={log()!.items.length < log()!.total}>
                <button
                  type="button"
                  class="min-h-[44px] w-full rounded-md border border-outline-variant text-sm text-on-surface hover:bg-surface-container-high"
                  onClick={loadMore}
                >
                  {t("mod_admin.common.load_more")}
                </button>
              </Show>
            </Show>
          </Show>
        </Suspense>
      </main>
    </ErrorBoundary>
  );
}
