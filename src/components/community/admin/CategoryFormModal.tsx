// src/components/community/admin/CategoryFormModal.tsx
//
// Create/Edit category: slug + name_i18n across 8 locales + flags.
import { createSignal, For, Show, onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { useI18n } from "../../../i18n";
import {
  createCategory,
  updateCategory,
  ApiError,
  type CategoryAdmin,
  type CategoryAdminRequest,
} from "../../../services/community-admin-api";
import { pushToast } from "../../ui/toastStore";

// Locale keys for backend JSONB columns (name_i18n / description_i18n).
// Backend CORE_LANGUAGES uses short codes (pt, zh), not the UI locales
// (pt-br, zh-Hans). Keep this list aligned with backend _SUPPORTED_LANGS
// in app/routes/community_me.py and community_category model.
const LOCALES = ["en", "it", "fr", "de", "es", "pt", "ko", "ja", "zh"] as const;

interface Props {
  category?: CategoryAdmin;
  onClose: () => void;
  onSaved: () => void;
}

export default function CategoryFormModal(props: Props) {
  const { t } = useI18n();
  const isEdit = () => !!props.category;
  const [slug, setSlug] = createSignal(props.category?.slug ?? "");
  const [nameI18n, setNameI18n] = createStore<Record<string, string>>(
    { ...(props.category?.name_i18n ?? {}) },
  );
  const [descI18n, setDescI18n] = createStore<Record<string, string>>(
    { ...(props.category?.description_i18n ?? {}) },
  );
  const [isAdminOnly, setIsAdminOnly] = createSignal(
    props.category?.is_admin_only ?? false,
  );
  const [isPremiumOnly, setIsPremiumOnly] = createSignal(
    props.category?.is_premium_only ?? false,
  );
  const [submitting, setSubmitting] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") props.onClose();
  }

  onMount(() => {
    window.addEventListener("keydown", onKeyDown);
  });
  onCleanup(() => {
    window.removeEventListener("keydown", onKeyDown);
  });

  async function submit(e: Event) {
    e.preventDefault();
    setError(null);
    if (!nameI18n.en || nameI18n.en.trim().length === 0) {
      setError(t("mod_admin.categories.name_en_required"));
      return;
    }
    const body: CategoryAdminRequest = {
      slug: isEdit() ? undefined : slug().trim(),
      name_i18n: { ...nameI18n },
      description_i18n: { ...descI18n },
      is_admin_only: isAdminOnly(),
      is_premium_only: isPremiumOnly(),
    };
    try {
      setSubmitting(true);
      if (isEdit()) {
        await updateCategory(props.category!.id, body);
      } else {
        await createCategory(body);
      }
      pushToast({
        variant: "success",
        message: t("mod_admin.categories.saved"),
      });
      props.onSaved();
    } catch (err) {
      if (err instanceof ApiError) {
        const knownKey = `mod_admin.errors.${err.errorCode}`;
        const translated = t(knownKey);
        // When the i18n fallback returns the key literal, prefer API detail.
        setError(translated === knownKey ? err.detail : translated);
      } else {
        setError(t("mod_admin.common.unknown_error"));
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      class="fixed inset-0 z-30 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cat-form-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) props.onClose();
      }}
    >
      <form
        class="w-[min(48rem,95vw)] max-h-[90vh] space-y-4 overflow-y-auto rounded-lg border border-outline-variant bg-surface-container p-6 text-on-surface shadow-xl"
        onSubmit={submit}
      >
        <h2 id="cat-form-title" class="text-lg font-semibold">
          {isEdit()
            ? t("mod_admin.categories.edit_title")
            : t("mod_admin.categories.create_title")}
        </h2>

        <label class="block text-sm">
          <span class="mb-1 block font-medium">
            {t("mod_admin.categories.slug")}
            <Show when={!isEdit()}>
              <span aria-hidden="true" class="text-error"> *</span>
            </Show>
          </span>
          <input
            type="text"
            class="block w-full rounded-md border border-outline-variant bg-surface-container-low p-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
            pattern="^[a-z0-9]+(-[a-z0-9]+)*$"
            minLength={2}
            maxLength={64}
            required={!isEdit()}
            disabled={isEdit()}
            value={slug()}
            onInput={(e) => setSlug(e.currentTarget.value)}
            aria-describedby="slug-help"
          />
          <small id="slug-help" class="text-xs text-on-surface-variant">
            {isEdit()
              ? t("mod_admin.categories.slug_immutable")
              : t("mod_admin.categories.slug_help")}
          </small>
        </label>

        <fieldset>
          <legend class="mb-2 text-sm font-medium">
            {t("mod_admin.categories.name_i18n")}
          </legend>
          <div class="grid gap-2 sm:grid-cols-2">
            <For each={LOCALES}>
              {(lc) => (
                <label class="block text-sm">
                  <span class="mb-1 block text-xs uppercase text-on-surface-variant">
                    {lc}
                  </span>
                  <input
                    type="text"
                    class="block w-full rounded-md border border-outline-variant bg-surface-container-low p-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                    maxLength={80}
                    value={nameI18n[lc] ?? ""}
                    onInput={(e) => setNameI18n(lc, e.currentTarget.value)}
                    required={lc === "en"}
                  />
                </label>
              )}
            </For>
          </div>
        </fieldset>

        <fieldset>
          <legend class="mb-2 text-sm font-medium">
            {t("mod_admin.categories.description_i18n")}
          </legend>
          <div class="grid gap-2 sm:grid-cols-2">
            <For each={LOCALES}>
              {(lc) => (
                <label class="block text-sm">
                  <span class="mb-1 block text-xs uppercase text-on-surface-variant">
                    {lc}
                  </span>
                  <input
                    type="text"
                    class="block w-full rounded-md border border-outline-variant bg-surface-container-low p-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                    maxLength={300}
                    value={descI18n[lc] ?? ""}
                    onInput={(e) => setDescI18n(lc, e.currentTarget.value)}
                  />
                </label>
              )}
            </For>
          </div>
        </fieldset>

        <div class="flex flex-wrap gap-4 text-sm">
          <label class="flex items-center gap-2">
            <input
              type="checkbox"
              class="h-4 w-4 text-primary focus:ring-primary"
              checked={isAdminOnly()}
              onChange={(e) => setIsAdminOnly(e.currentTarget.checked)}
            />
            {t("mod_admin.categories.is_admin_only")}
          </label>
          <label class="flex items-center gap-2">
            <input
              type="checkbox"
              class="h-4 w-4 text-primary focus:ring-primary"
              checked={isPremiumOnly()}
              onChange={(e) => setIsPremiumOnly(e.currentTarget.checked)}
            />
            {t("mod_admin.categories.is_premium_only")}
          </label>
        </div>

        <Show when={error()}>
          <p class="text-sm text-error" role="alert">
            {error()}
          </p>
        </Show>

        <div class="flex justify-end gap-2">
          <button
            type="button"
            class="min-h-[44px] rounded-md px-4 text-sm text-on-surface hover:bg-surface-container-high"
            onClick={props.onClose}
            disabled={submitting()}
          >
            {t("mod_admin.common.cancel")}
          </button>
          <button
            type="submit"
            class="min-h-[44px] rounded-md bg-primary px-4 text-sm font-medium text-on-primary hover:opacity-90 disabled:opacity-60"
            disabled={submitting()}
          >
            {submitting()
              ? t("mod_admin.common.submitting")
              : t("mod_admin.common.save")}
          </button>
        </div>
      </form>
    </div>
  );
}
