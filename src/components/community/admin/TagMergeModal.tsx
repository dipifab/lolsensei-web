// src/components/community/admin/TagMergeModal.tsx
//
// Merge tag source -> tag target with usage_count preview.
import { createSignal, For, Show, onCleanup, onMount } from "solid-js";
import { useI18n } from "../../../i18n";
import { formatTemplate } from "../../../lib/datetime";
import {
  mergeTags,
  ApiError,
  type TagItem,
} from "../../../services/community-admin-api";
import { pushToast } from "../../ui/toastStore";

interface Props {
  tags: TagItem[];
  onClose: () => void;
  onMerged: () => void;
}

export default function TagMergeModal(props: Props) {
  const { t } = useI18n();
  const [fromSlug, setFromSlug] = createSignal<string>("");
  const [toSlug, setToSlug] = createSignal<string>("");
  const [submitting, setSubmitting] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);

  const fromTag = () => props.tags.find((tg) => tg.slug === fromSlug());
  const toTag = () => props.tags.find((tg) => tg.slug === toSlug());
  const valid = () =>
    !!fromSlug() && !!toSlug() && fromSlug() !== toSlug();

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
    if (!valid()) {
      setError(t("mod_admin.tags.from_to_different"));
      return;
    }
    try {
      setSubmitting(true);
      await mergeTags({ from_slug: fromSlug(), to_slug: toSlug() });
      pushToast({
        variant: "success",
        message: t("mod_admin.tags.merged"),
      });
      props.onMerged();
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.detail);
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
      aria-labelledby="tag-merge-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) props.onClose();
      }}
    >
      <form
        class="w-[min(32rem,90vw)] space-y-4 rounded-lg border border-outline-variant bg-surface-container p-6 text-on-surface shadow-xl"
        onSubmit={submit}
      >
        <h2 id="tag-merge-title" class="text-lg font-semibold">
          {t("mod_admin.tags.merge_title")}
        </h2>
        <p class="text-sm text-on-surface-variant">
          {t("mod_admin.tags.merge_help")}
        </p>

        <label class="block text-sm">
          <span class="mb-1 block font-medium">
            {t("mod_admin.tags.from_slug")}
          </span>
          <select
            class="block w-full rounded-md border border-outline-variant bg-surface-container-low p-2 text-sm text-on-surface"
            value={fromSlug()}
            onChange={(e) => setFromSlug(e.currentTarget.value)}
            required
          >
            <option value="">{t("mod_admin.common.select")}</option>
            <For each={props.tags}>
              {(tg) => (
                <option value={tg.slug}>
                  {tg.slug} ({tg.usage_count})
                </option>
              )}
            </For>
          </select>
        </label>

        <label class="block text-sm">
          <span class="mb-1 block font-medium">
            {t("mod_admin.tags.to_slug")}
          </span>
          <select
            class="block w-full rounded-md border border-outline-variant bg-surface-container-low p-2 text-sm text-on-surface"
            value={toSlug()}
            onChange={(e) => setToSlug(e.currentTarget.value)}
            required
          >
            <option value="">{t("mod_admin.common.select")}</option>
            <For each={props.tags}>
              {(tg) => (
                <option value={tg.slug}>
                  {tg.slug} ({tg.usage_count})
                </option>
              )}
            </For>
          </select>
        </label>

        <Show when={fromTag() && toTag()}>
          <p class="rounded-md border border-outline-variant bg-surface-container-high p-3 text-sm">
            {formatTemplate(t("mod_admin.tags.merge_preview"), {
              from: fromTag()!.slug,
              fromCount: fromTag()!.usage_count,
              to: toTag()!.slug,
              total: fromTag()!.usage_count + toTag()!.usage_count,
            })}
          </p>
        </Show>

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
            disabled={submitting() || !valid()}
          >
            {submitting()
              ? t("mod_admin.common.submitting")
              : t("mod_admin.tags.merge")}
          </button>
        </div>
      </form>
    </div>
  );
}
