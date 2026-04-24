// src/components/community/admin/BulkActionsBar.tsx
//
// Sticky bottom bar shown when selection > 0. Max 50 reports per batch.
import { createSignal, Show } from "solid-js";
import { useI18n } from "../../../i18n";
import { formatTemplate } from "../../../lib/datetime";
import {
  postBulkModAction,
  ApiError,
  type BulkModAction,
} from "../../../services/community-admin-api";
import { pushToast } from "../../ui/toastStore";

interface Props {
  selectedIds: string[];
  onDone: (ids: string[]) => void;
  onClear: () => void;
}

const MAX_BULK = 50;

export default function BulkActionsBar(props: Props) {
  const { t } = useI18n();
  const [action, setAction] = createSignal<BulkModAction>("dismiss");
  const [reason, setReason] = createSignal("");
  const [submitting, setSubmitting] = createSignal(false);

  async function submit(e: Event) {
    e.preventDefault();
    if (props.selectedIds.length === 0) return;
    if (props.selectedIds.length > MAX_BULK) {
      pushToast({
        variant: "warning",
        message: formatTemplate(t("mod_admin.bulk.over_limit"), {
          max: MAX_BULK,
        }),
      });
      return;
    }
    if (reason().trim().length < 1) {
      pushToast({
        variant: "warning",
        message: t("mod_admin.bulk.reason_required"),
      });
      return;
    }
    try {
      setSubmitting(true);
      const resp = await postBulkModAction({
        report_ids: props.selectedIds,
        action: action(),
        reason: reason().trim(),
      });
      pushToast({
        variant: resp.failed_count === 0 ? "success" : "warning",
        message: formatTemplate(t("mod_admin.bulk.completed"), {
          ok: resp.success_count,
          fail: resp.failed_count,
        }),
      });
      const successIds = props.selectedIds.filter((id) =>
        resp.details.some((d) => d.id === id && d.ok),
      );
      props.onDone(successIds);
    } catch (err) {
      if (err instanceof ApiError && err.status === 429) {
        pushToast({
          variant: "error",
          message: formatTemplate(t("mod_admin.common.rate_limited_retry"), {
            seconds: err.retryAfterSeconds ?? 60,
          }),
        });
      } else {
        pushToast({
          variant: "error",
          message: t("mod_admin.bulk.failed"),
        });
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Show when={props.selectedIds.length > 0}>
      <div
        class="sticky bottom-0 z-10 border-t border-outline-variant bg-surface-container/95 p-3 shadow-lg backdrop-blur"
        role="region"
        aria-label={t("mod_admin.bulk.aria_region")}
      >
        <form
          class="mx-auto flex max-w-5xl flex-wrap items-center gap-3"
          onSubmit={submit}
        >
          <span class="text-sm font-medium text-on-surface">
            {formatTemplate(t("mod_admin.bulk.selected"), {
              count: props.selectedIds.length,
            })}
          </span>
          <label class="text-sm">
            <span class="sr-only">{t("mod_admin.bulk.action_label")}</span>
            <select
              class="min-h-[44px] rounded-md border border-outline-variant bg-surface-container-low px-2 text-on-surface"
              value={action()}
              onChange={(e) =>
                setAction(e.currentTarget.value as BulkModAction)
              }
            >
              <option value="dismiss">
                {t("mod_admin.actions.dismiss")}
              </option>
              <option value="approve_no_action">
                {t("mod_admin.actions.approve_no_action")}
              </option>
            </select>
          </label>
          <input
            type="text"
            class="min-h-[44px] flex-1 min-w-[16rem] rounded-md border border-outline-variant bg-surface-container-low px-3 text-sm text-on-surface"
            placeholder={t("mod_admin.bulk.reason_placeholder")}
            maxLength={1000}
            value={reason()}
            onInput={(e) => setReason(e.currentTarget.value)}
            aria-label={t("mod_admin.bulk.reason_label")}
          />
          <button
            type="button"
            class="min-h-[44px] rounded-md px-3 text-sm text-on-surface hover:bg-surface-container-high"
            onClick={props.onClear}
            disabled={submitting()}
          >
            {t("mod_admin.common.clear")}
          </button>
          <button
            type="submit"
            class="min-h-[44px] rounded-md bg-primary px-4 text-sm font-medium text-on-primary hover:opacity-90 disabled:opacity-60"
            disabled={submitting() || props.selectedIds.length > MAX_BULK}
          >
            {submitting()
              ? t("mod_admin.common.submitting")
              : t("mod_admin.bulk.apply")}
          </button>
        </form>
      </div>
    </Show>
  );
}
