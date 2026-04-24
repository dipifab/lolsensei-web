// src/routes/[lang]/admin/community/categories.tsx
//
// Category + tag admin. Admin-only route.

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
  archiveCategory,
  deleteTag,
  fetchCategoriesAdmin,
  fetchTagsAdmin,
  type CategoryAdmin,
} from "../../../../services/community-admin-api";
import CategoryFormModal from "../../../../components/community/admin/CategoryFormModal";
import TagMergeModal from "../../../../components/community/admin/TagMergeModal";
import InsufficientRoleModal from "../../../../components/community/admin/InsufficientRoleModal";
import { pushToast } from "../../../../components/ui/toastStore";

type Tab = "categories" | "tags";

export default function CategoriesAdminPage() {
  const { t, locale } = useI18n();
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

  const [tab, setTab] = createSignal<Tab>("categories");

  const [categories, { refetch: refetchCats }] = createResource(
    () => isAdmin(),
    async (authorized) => (authorized ? fetchCategoriesAdmin() : null),
  );
  const [tags, { refetch: refetchTags }] = createResource(
    () => isAdmin(),
    async (authorized) => (authorized ? fetchTagsAdmin() : null),
  );

  const [editing, setEditing] = createSignal<CategoryAdmin | null>(null);
  const [creating, setCreating] = createSignal(false);
  const [mergingTags, setMergingTags] = createSignal(false);

  async function archive(cat: CategoryAdmin) {
    const confirmMsg = formatTemplate(
      t("mod_admin.categories.archive_confirm"),
      { name: cat.name_i18n.en ?? cat.slug },
    );
    if (!window.confirm(confirmMsg)) return;
    try {
      await archiveCategory(cat.id);
      pushToast({
        variant: "success",
        message: t("mod_admin.categories.archived"),
      });
      refetchCats();
    } catch (err) {
      if (err instanceof ApiError && err.errorCode === "category_not_empty") {
        pushToast({
          variant: "error",
          message: t("mod_admin.categories.not_empty"),
        });
      } else {
        pushToast({
          variant: "error",
          message: t("mod_admin.categories.archive_failed"),
        });
      }
    }
  }

  async function removeTag(tagId: string, slug: string) {
    const confirmMsg = formatTemplate(t("mod_admin.tags.delete_confirm"), {
      slug,
    });
    if (!window.confirm(confirmMsg)) return;
    try {
      await deleteTag(tagId);
      pushToast({
        variant: "success",
        message: t("mod_admin.tags.deleted"),
      });
      refetchTags();
    } catch {
      pushToast({
        variant: "error",
        message: t("mod_admin.tags.delete_failed"),
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
      <Title>{t("mod_admin.categories.page_title")}</Title>
      <Show when={jwtSignal() != null && !isAdmin()}>
        <InsufficientRoleModal
          errorCode="admin_only"
          onClose={() => navigate(`/${params.lang}`, { replace: true })}
        />
      </Show>
      <main class="mx-auto max-w-6xl space-y-4 p-4 text-on-surface">
        <h1 class="text-2xl font-semibold">
          {t("mod_admin.categories.heading")}
        </h1>

        <nav aria-label={t("mod_admin.categories.tabs_label")}>
          <ul class="flex gap-2 border-b border-outline-variant">
            <TabButton
              active={tab() === "categories"}
              onClick={() => setTab("categories")}
            >
              {t("mod_admin.categories.tab_categories")}
            </TabButton>
            <TabButton
              active={tab() === "tags"}
              onClick={() => setTab("tags")}
            >
              {t("mod_admin.categories.tab_tags")}
            </TabButton>
          </ul>
        </nav>

        <Show when={tab() === "categories"}>
          <div class="flex justify-end">
            <button
              type="button"
              class="min-h-[44px] rounded-md bg-primary px-4 text-sm font-medium text-on-primary hover:opacity-90"
              onClick={() => setCreating(true)}
            >
              {t("mod_admin.categories.create_cta")}
            </button>
          </div>
          <Suspense fallback={<p>{t("mod_admin.common.loading")}</p>}>
            <Show
              when={categories()}
              fallback={<p>{t("mod_admin.common.loading")}</p>}
            >
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-outline-variant text-sm">
                  <thead>
                    <tr class="text-left">
                      <th scope="col" class="px-3 py-2 font-medium">
                        {t("mod_admin.categories.col_name")}
                      </th>
                      <th scope="col" class="px-3 py-2 font-medium">
                        {t("mod_admin.categories.col_slug")}
                      </th>
                      <th scope="col" class="px-3 py-2 font-medium">
                        {t("mod_admin.categories.col_flags")}
                      </th>
                      <th scope="col" class="px-3 py-2 font-medium">
                        {t("mod_admin.categories.col_threads")}
                      </th>
                      <th scope="col" class="px-3 py-2 font-medium">
                        {t("mod_admin.common.actions")}
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-outline-variant">
                    <For each={categories()!}>
                      {(cat) => (
                        <tr>
                          <td class="px-3 py-2 font-medium">
                            {cat.name_i18n[locale()] ??
                              cat.name_i18n.en ??
                              cat.slug}
                          </td>
                          <td class="px-3 py-2 text-on-surface-variant">
                            {cat.slug}
                          </td>
                          <td class="px-3 py-2">
                            <div class="flex flex-wrap gap-1 text-xs">
                              <Show when={cat.is_admin_only}>
                                <span class="rounded bg-surface-container-high px-2 py-0.5">
                                  {t("mod_admin.categories.flag_admin")}
                                </span>
                              </Show>
                              <Show when={cat.is_premium_only}>
                                <span class="rounded bg-surface-container-high px-2 py-0.5">
                                  {t("mod_admin.categories.flag_premium")}
                                </span>
                              </Show>
                              <Show when={cat.is_archived}>
                                <span class="rounded bg-error/10 px-2 py-0.5 text-error">
                                  {t("mod_admin.categories.flag_archived")}
                                </span>
                              </Show>
                            </div>
                          </td>
                          <td class="px-3 py-2">{cat.thread_count}</td>
                          <td class="px-3 py-2">
                            <div class="flex gap-2">
                              <button
                                type="button"
                                class="min-h-[44px] rounded-md border border-outline-variant px-3 text-xs text-on-surface hover:bg-surface-container-high"
                                onClick={() => setEditing(cat)}
                              >
                                {t("mod_admin.common.edit")}
                              </button>
                              <Show when={!cat.is_archived}>
                                <button
                                  type="button"
                                  class="min-h-[44px] rounded-md border border-error px-3 text-xs text-error hover:bg-error/10"
                                  onClick={() => archive(cat)}
                                >
                                  {t("mod_admin.categories.archive")}
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
          </Suspense>
        </Show>

        <Show when={tab() === "tags"}>
          <div class="flex justify-end">
            <button
              type="button"
              class="min-h-[44px] rounded-md border border-outline-variant px-3 text-sm text-on-surface hover:bg-surface-container-high"
              onClick={() => setMergingTags(true)}
            >
              {t("mod_admin.tags.merge_cta")}
            </button>
          </div>
          <Suspense fallback={<p>{t("mod_admin.common.loading")}</p>}>
            <Show
              when={tags()}
              fallback={<p>{t("mod_admin.common.loading")}</p>}
            >
              <ul class="divide-y divide-outline-variant rounded-md border border-outline-variant bg-surface-container">
                <For each={tags()!}>
                  {(tg) => (
                    <li class="flex items-center justify-between px-3 py-2 text-sm">
                      <span>
                        <span class="font-medium">#{tg.slug}</span>
                        <span class="ml-2 text-xs text-on-surface-variant">
                          ({tg.usage_count})
                        </span>
                      </span>
                      <button
                        type="button"
                        class="min-h-[44px] rounded-md border border-error px-3 text-xs text-error hover:bg-error/10"
                        onClick={() => removeTag(tg.id, tg.slug)}
                      >
                        {t("mod_admin.common.delete")}
                      </button>
                    </li>
                  )}
                </For>
              </ul>
            </Show>
          </Suspense>
        </Show>

        <Show when={creating()}>
          <CategoryFormModal
            onClose={() => setCreating(false)}
            onSaved={() => {
              setCreating(false);
              refetchCats();
            }}
          />
        </Show>
        <Show when={editing()}>
          <CategoryFormModal
            category={editing()!}
            onClose={() => setEditing(null)}
            onSaved={() => {
              setEditing(null);
              refetchCats();
            }}
          />
        </Show>
        <Show when={mergingTags()}>
          <TagMergeModal
            tags={tags() ?? []}
            onClose={() => setMergingTags(false)}
            onMerged={() => {
              setMergingTags(false);
              refetchTags();
            }}
          />
        </Show>
      </main>
    </ErrorBoundary>
  );
}

function TabButton(props: {
  active: boolean;
  onClick: () => void;
  children: unknown;
}) {
  return (
    <li>
      <button
        type="button"
        class="min-h-[44px] rounded-t-md px-4 py-2 text-sm font-medium hover:bg-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary"
        classList={{
          "border-b-2 border-primary text-primary": props.active,
        }}
        aria-current={props.active ? "page" : undefined}
        onClick={props.onClick}
      >
        {props.children as string}
      </button>
    </li>
  );
}
