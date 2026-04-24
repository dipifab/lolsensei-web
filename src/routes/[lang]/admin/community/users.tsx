// src/routes/[lang]/admin/community/users.tsx
//
// Community users admin: search, role changes, ban revocation.
// Requires community role "admin" (role changes are admin-only).

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
import { hasAdminAccess } from "../../../../auth/community-role";
import {
  ApiError,
  fetchCommunityUsers,
  revokeBan,
  type CommunityUserSummary,
} from "../../../../services/community-admin-api";
import RoleChangeModal from "../../../../components/community/admin/RoleChangeModal";
import InsufficientRoleModal from "../../../../components/community/admin/InsufficientRoleModal";
import { pushToast } from "../../../../components/ui/toastStore";

export default function CommunityUsersPage() {
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

  const isAdmin = () => jwtSignal() != null && hasAdminAccess();

  const [query, setQuery] = createSignal("");
  const [debounced, setDebounced] = createSignal("");
  const [page, setPage] = createSignal(1);

  let debTimer: ReturnType<typeof setTimeout> | null = null;
  function onSearchInput(v: string) {
    setQuery(v);
    if (debTimer) clearTimeout(debTimer);
    debTimer = setTimeout(() => {
      setDebounced(v);
      setPage(1);
    }, 300);
  }

  const [users, { refetch }] = createResource(
    () => ({ authorized: isAdmin(), q: debounced(), page: page() }),
    async (p) => {
      if (!p.authorized) return null;
      return fetchCommunityUsers({ q: p.q || undefined, page: p.page });
    },
  );

  const [editing, setEditing] = createSignal<CommunityUserSummary | null>(
    null,
  );

  async function handleRevoke(u: CommunityUserSummary) {
    if (!u.active_ban_id) return;
    const reason = window.prompt(t("mod_admin.users.revoke_reason_prompt"));
    if (reason == null) return;
    if (reason.trim().length < 5) {
      pushToast({
        variant: "error",
        message: formatTemplate(t("mod_admin.users.reason_min"), { min: 5 }),
      });
      return;
    }
    try {
      await revokeBan(u.active_ban_id, reason.trim());
      pushToast({
        variant: "success",
        message: t("mod_admin.users.ban_revoked"),
      });
      refetch();
    } catch (err) {
      if (err instanceof ApiError && err.status === 403) {
        pushToast({
          variant: "error",
          message: t("mod_admin.errors.admin_only"),
        });
      } else {
        pushToast({
          variant: "error",
          message: t("mod_admin.users.revoke_failed"),
        });
      }
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
      <Title>{t("mod_admin.users.page_title")}</Title>
      <Show when={jwtSignal() != null && !isAdmin()}>
        <InsufficientRoleModal
          errorCode="admin_only"
          onClose={() => navigate(`/${params.lang}`, { replace: true })}
        />
      </Show>
      <main class="mx-auto max-w-6xl space-y-4 p-4 text-on-surface">
        <h1 class="text-2xl font-semibold">
          {t("mod_admin.users.heading")}
        </h1>
        <label class="block max-w-md text-sm">
          <span class="mb-1 block font-medium">
            {t("mod_admin.users.search_label")}
          </span>
          <input
            type="search"
            class="min-h-[44px] w-full rounded-md border border-outline-variant bg-surface-container-low px-3 text-on-surface"
            value={query()}
            onInput={(e) => onSearchInput(e.currentTarget.value)}
            placeholder={t("mod_admin.users.search_placeholder")}
            aria-describedby="user-search-help"
          />
          <small id="user-search-help" class="text-xs text-on-surface-variant">
            {t("mod_admin.users.search_help")}
          </small>
        </label>

        <Suspense fallback={<p>{t("mod_admin.common.loading")}</p>}>
          <Show
            when={!users.loading && users()}
            fallback={<p>{t("mod_admin.common.loading")}</p>}
          >
            <Show
              when={users()!.items.length > 0}
              fallback={
                <p class="rounded-md border border-dashed border-outline-variant p-6 text-center text-sm text-on-surface-variant">
                  {t("mod_admin.users.no_results")}
                </p>
              }
            >
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-outline-variant text-sm">
                  <caption class="sr-only">
                    {t("mod_admin.users.table_caption")}
                  </caption>
                  <thead>
                    <tr class="text-left">
                      <th scope="col" class="px-3 py-2 font-medium">
                        {t("mod_admin.users.col_nickname")}
                      </th>
                      <th scope="col" class="px-3 py-2 font-medium">
                        {t("mod_admin.users.col_email")}
                      </th>
                      <th scope="col" class="px-3 py-2 font-medium">
                        {t("mod_admin.users.col_role")}
                      </th>
                      <th scope="col" class="px-3 py-2 font-medium">
                        {t("mod_admin.users.col_status")}
                      </th>
                      <th scope="col" class="px-3 py-2 font-medium">
                        {t("mod_admin.users.col_bans")}
                      </th>
                      <th scope="col" class="px-3 py-2 font-medium">
                        {t("mod_admin.common.actions")}
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-outline-variant">
                    <For each={users()!.items}>
                      {(u) => (
                        <tr>
                          <td class="px-3 py-2 font-medium">@{u.nickname}</td>
                          <td class="px-3 py-2 text-on-surface-variant">
                            {u.email ?? "—"}
                          </td>
                          <td class="px-3 py-2">
                            <span class="inline-flex items-center rounded bg-surface-container-high px-2 py-0.5 text-xs">
                              {t(`mod_admin.users.role.${u.role}`)}
                            </span>
                          </td>
                          <td class="px-3 py-2">
                            <span
                              class="inline-flex items-center rounded px-2 py-0.5 text-xs"
                              classList={{
                                "bg-primary/10 text-primary":
                                  u.status === "active",
                                "bg-error/10 text-error":
                                  u.status === "banned",
                                "bg-surface-container-high text-on-surface-variant":
                                  u.status === "deleted",
                              }}
                            >
                              {t(`mod_admin.users.status.${u.status}`)}
                            </span>
                          </td>
                          <td class="px-3 py-2">{u.bans_count}</td>
                          <td class="px-3 py-2">
                            <div class="flex gap-2">
                              <button
                                type="button"
                                class="min-h-[44px] rounded-md border border-outline-variant px-3 text-xs text-on-surface hover:bg-surface-container-high"
                                onClick={() => setEditing(u)}
                              >
                                {t("mod_admin.users.change_role")}
                              </button>
                              <Show when={u.active_ban_id}>
                                <button
                                  type="button"
                                  class="min-h-[44px] rounded-md border border-error px-3 text-xs text-error hover:bg-error/10"
                                  onClick={() => handleRevoke(u)}
                                >
                                  {t("mod_admin.users.revoke_ban")}
                                </button>
                              </Show>
                            </div>
                          </td>
                        </tr>
                      )}
                    </For>
                  </tbody>
                </table>
              </div>
            </Show>
          </Show>
        </Suspense>

        <Show when={editing()}>
          <RoleChangeModal
            user={editing()!}
            onClose={() => setEditing(null)}
            onSaved={() => {
              setEditing(null);
              refetch();
            }}
          />
        </Show>
      </main>
    </ErrorBoundary>
  );
}
