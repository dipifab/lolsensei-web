// src/components/community/admin/ModerationActionsMenu.tsx
//
// Dropdown of moderation actions for a single report plus reason dialog.
import { createSignal, Show, onCleanup, onMount } from "solid-js";
import { useI18n } from "../../../i18n";
import {
  postModAction,
  ApiError,
  type ModAction,
  type TargetType,
} from "../../../services/community-admin-api";
import { pushToast } from "../../ui/toastStore";

interface Props {
  reportId: string;
  targetType: TargetType;
  onComplete: () => void;
}

type PendingAction =
  | { action: ModAction; durationDays?: number }
  | null;

function confirmKey(action: ModAction): string {
  return `mod_admin.actions.confirm.${action}`;
}

export default function ModerationActionsMenu(props: Props) {
  const { t } = useI18n();
  const [open, setOpen] = createSignal(false);
  const [pending, setPending] = createSignal<PendingAction>(null);
  const [reason, setReason] = createSignal("");
  const [submitting, setSubmitting] = createSignal(false);
  let menuRef: HTMLDivElement | undefined;

  function handleDocClick(e: MouseEvent) {
    if (!menuRef) return;
    if (open() && e.target instanceof Node && !menuRef.contains(e.target)) {
      setOpen(false);
    }
  }

  onMount(() => {
    document.addEventListener("click", handleDocClick);
  });
  onCleanup(() => {
    document.removeEventListener("click", handleDocClick);
  });

  function choose(action: ModAction, durationDays?: number) {
    setOpen(false);
    setPending({ action, durationDays });
    setReason("");
  }

  async function confirm(e: Event) {
    e.preventDefault();
    const p = pending();
    if (!p) return;
    if (p.action !== "dismiss" && reason().trim().length < 3) {
      pushToast({
        variant: "error",
        message: t("mod_admin.actions.reason_required"),
      });
      return;
    }
    try {
      setSubmitting(true);
      await postModAction({
        report_id: props.reportId,
        action: p.action,
        reason: reason().trim() || null,
        ban_duration_days: p.durationDays ?? null,
      });
      pushToast({
        variant: "success",
        message: t("mod_admin.actions.applied"),
      });
      setPending(null);
      props.onComplete();
    } catch (err) {
      if (err instanceof ApiError && err.status === 403) {
        pushToast({
          variant: "error",
          message: t(`mod_admin.errors.${err.errorCode}`),
        });
      } else if (err instanceof ApiError && err.status === 429) {
        pushToast({
          variant: "error",
          message: t("mod_admin.common.rate_limited"),
        });
      } else {
        pushToast({
          variant: "error",
          message: t("mod_admin.actions.failed"),
        });
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div class="relative" ref={menuRef}>
      <button
        type="button"
        class="inline-flex min-h-[44px] items-center gap-1 rounded-md border border-outline-variant bg-surface-container px-3 text-sm font-medium text-on-surface hover:bg-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary"
        aria-haspopup="menu"
        aria-expanded={open()}
        onClick={() => setOpen(!open())}
      >
        {t("mod_admin.actions.menu")}
        <span aria-hidden="true">▾</span>
      </button>
      <Show when={open()}>
        <ul
          role="menu"
          class="absolute right-0 z-20 mt-1 w-56 rounded-md border border-outline-variant bg-surface-container-high shadow-lg"
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        >
          <MenuItem onClick={() => choose("dismiss")}>
            {t("mod_admin.actions.dismiss")}
          </MenuItem>
          <MenuItem onClick={() => choose("delete_target")}>
            {t("mod_admin.actions.delete_target")}
          </MenuItem>
          <MenuItem onClick={() => choose("warn_user")}>
            {t("mod_admin.actions.warn_user")}
          </MenuItem>
          <MenuItem onClick={() => choose("ban_temp", 1)}>
            {t("mod_admin.actions.ban_temp_1d")}
          </MenuItem>
          <MenuItem onClick={() => choose("ban_temp", 7)}>
            {t("mod_admin.actions.ban_temp_7d")}
          </MenuItem>
          <MenuItem onClick={() => choose("ban_temp", 30)}>
            {t("mod_admin.actions.ban_temp_30d")}
          </MenuItem>
          <MenuItem onClick={() => choose("ban_perm")} danger>
            {t("mod_admin.actions.ban_perm")}
          </MenuItem>
          <MenuItem onClick={() => choose("escalate_to_admin")}>
            {t("mod_admin.actions.escalate")}
          </MenuItem>
        </ul>
      </Show>

      <Show when={pending()}>
        <div
          class="fixed inset-0 z-30 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mod-action-title"
        >
          <form
            onSubmit={confirm}
            class="w-[min(32rem,90vw)] space-y-4 rounded-lg border border-outline-variant bg-surface-container p-6 text-on-surface shadow-xl"
          >
            <h2 id="mod-action-title" class="text-lg font-semibold">
              {t(confirmKey(pending()!.action))}
            </h2>
            <label class="block text-sm">
              <span class="mb-1 block font-medium">
                {t("mod_admin.actions.reason_label")}
                <Show when={pending()!.action !== "dismiss"}>
                  <span aria-hidden="true" class="text-error"> *</span>
                </Show>
              </span>
              <textarea
                class="block w-full rounded-md border border-outline-variant bg-surface-container-low p-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
                maxLength={2000}
                required={pending()!.action !== "dismiss"}
                value={reason()}
                onInput={(e) => setReason(e.currentTarget.value)}
                aria-describedby="reason-help"
              />
              <small id="reason-help" class="text-xs text-on-surface-variant">
                {t("mod_admin.actions.reason_help")}
              </small>
            </label>
            <div class="flex justify-end gap-2">
              <button
                type="button"
                class="min-h-[44px] rounded-md px-4 text-sm font-medium text-on-surface hover:bg-surface-container-high"
                onClick={() => setPending(null)}
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
                  : t("mod_admin.actions.confirm_submit")}
              </button>
            </div>
          </form>
        </div>
      </Show>
    </div>
  );
}

function MenuItem(props: {
  onClick: () => void;
  children: unknown;
  danger?: boolean;
}) {
  return (
    <li role="none">
      <button
        type="button"
        role="menuitem"
        class="flex w-full items-center px-3 py-2 text-left text-sm text-on-surface hover:bg-surface-container-highest focus:bg-surface-container-highest focus:outline-none"
        classList={{ "text-error": props.danger }}
        onClick={props.onClick}
      >
        {props.children as string}
      </button>
    </li>
  );
}
