// src/components/community/admin/InsufficientRoleModal.tsx
//
// Shared modal shown on HTTP 403 when the current account lacks the required
// community role for an action. Also used as a block screen on admin-only
// routes when the user is authenticated but not an admin/moderator.
import { onCleanup, onMount } from "solid-js";
import { useI18n } from "../../../i18n";

interface Props {
  errorCode?: string;
  onClose: () => void;
}

export default function InsufficientRoleModal(props: Props) {
  const { t } = useI18n();

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") props.onClose();
  }

  onMount(() => {
    window.addEventListener("keydown", onKeyDown);
  });
  onCleanup(() => {
    window.removeEventListener("keydown", onKeyDown);
  });

  const bodyKey = () => {
    const code = props.errorCode;
    if (!code) return "mod_admin.errors.insufficient_role_body";
    const specific = `mod_admin.errors.${code}`;
    // Fallback chain handled by t() returning the key literal when missing;
    // compare against known codes to decide which to render.
    const KNOWN = [
      "admin_only",
      "admin_only_perm_ban",
      "moderator_only_temp_ban",
      "cannot_moderate_staff",
      "cannot_ban_staff",
      "forbidden",
    ];
    return KNOWN.includes(code) ? specific : "mod_admin.errors.insufficient_role_body";
  };

  return (
    <div
      class="fixed inset-0 z-30 flex items-center justify-center bg-black/50 p-4"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="insuff-role-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) props.onClose();
      }}
    >
      <div class="w-[min(28rem,90vw)] rounded-lg border border-outline-variant bg-surface-container p-6 shadow-xl text-on-surface">
        <h2 id="insuff-role-title" class="text-lg font-semibold">
          {t("mod_admin.errors.insufficient_role_title")}
        </h2>
        <p class="mt-2 text-sm text-on-surface-variant">{t(bodyKey())}</p>
        <div class="mt-4 flex justify-end">
          <button
            type="button"
            class="min-h-[44px] rounded-md bg-primary px-4 text-sm font-medium text-on-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={props.onClose}
          >
            {t("mod_admin.common.understood")}
          </button>
        </div>
      </div>
    </div>
  );
}
