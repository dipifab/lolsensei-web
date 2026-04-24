// src/components/community/admin/RoleChangeModal.tsx
//
// Role change modal: radio user/moderator/admin + reason textarea.
import { createSignal, For, Show, onCleanup, onMount } from "solid-js";
import { useI18n } from "../../../i18n";
import { formatTemplate } from "../../../lib/datetime";
import {
  postRoleChange,
  ApiError,
  type CommunityRole,
  type CommunityUserSummary,
} from "../../../services/community-admin-api";
import { pushToast } from "../../ui/toastStore";

interface Props {
  user: CommunityUserSummary;
  onClose: () => void;
  onSaved: () => void;
}

const ROLES: CommunityRole[] = ["user", "moderator", "admin"];

export default function RoleChangeModal(props: Props) {
  const { t } = useI18n();
  const [role, setRole] = createSignal<CommunityRole>(props.user.role);
  const [reason, setReason] = createSignal("");
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
    if (reason().trim().length < 5) {
      setError(
        formatTemplate(t("mod_admin.users.reason_min"), { min: 5 }),
      );
      return;
    }
    try {
      setSubmitting(true);
      await postRoleChange({
        user_id: props.user.id,
        new_role: role(),
        reason: reason().trim(),
      });
      pushToast({
        variant: "success",
        message: t("mod_admin.users.role_changed"),
      });
      props.onSaved();
    } catch (err) {
      if (err instanceof ApiError && err.errorCode === "admin_count_min_1") {
        setError(t("mod_admin.users.admin_count_min_1"));
      } else if (err instanceof ApiError && err.status === 403) {
        setError(t("mod_admin.errors.admin_only"));
      } else {
        setError(t("mod_admin.users.role_change_failed"));
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
      aria-labelledby="role-change-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) props.onClose();
      }}
    >
      <form
        class="w-[min(32rem,90vw)] space-y-4 rounded-lg border border-outline-variant bg-surface-container p-6 text-on-surface shadow-xl"
        onSubmit={submit}
      >
        <h2 id="role-change-title" class="text-lg font-semibold">
          {formatTemplate(t("mod_admin.users.change_role_for"), {
            nickname: props.user.nickname,
          })}
        </h2>
        <fieldset class="space-y-2">
          <legend class="mb-1 text-sm font-medium">
            {t("mod_admin.users.new_role")}
          </legend>
          <For each={ROLES}>
            {(r) => (
              <label class="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="new_role"
                  value={r}
                  checked={role() === r}
                  onChange={() => setRole(r)}
                  class="h-4 w-4 text-primary focus:ring-primary"
                />
                <span>{t(`mod_admin.users.role.${r}`)}</span>
              </label>
            )}
          </For>
        </fieldset>
        <label class="block text-sm">
          <span class="mb-1 block font-medium">
            {t("mod_admin.users.reason_label")}
            <span aria-hidden="true" class="text-error"> *</span>
          </span>
          <textarea
            class="block w-full rounded-md border border-outline-variant bg-surface-container-low p-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
            rows={3}
            maxLength={500}
            required
            value={reason()}
            onInput={(e) => setReason(e.currentTarget.value)}
          />
        </label>
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
