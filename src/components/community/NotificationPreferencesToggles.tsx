// src/components/community/NotificationPreferencesToggles.tsx
//
// Three switches for F4-017:
//   1. digest_optin         (weekly digest email)
//   2. email_reply_optout   (UI-inverted: shown as "email me on replies")
//   3. bell_enabled         (v1 always true server-side; toggle for v2)
// On change: optimistic update + PUT /me/preferences/notifications.
// On 4xx: rollback + error toast.

import { createSignal } from "solid-js";
import { useI18n } from "../../i18n";
import {
  putNotificationPreferences,
  type NotificationPreferencesResponse,
} from "../../services/community-notifications-api";
import { pushToast } from "../ui/toastStore";

export interface NotificationPreferencesTogglesProps {
  initial: NotificationPreferencesResponse;
}

export default function NotificationPreferencesToggles(
  props: NotificationPreferencesTogglesProps,
) {
  const { t } = useI18n();
  const [digestOptin, setDigestOptin] = createSignal(props.initial.digest_optin);
  const [emailReplies, setEmailReplies] = createSignal(
    !props.initial.email_reply_optout,        // UI-inverted
  );
  const [bellEnabled, setBellEnabled] = createSignal(
    props.initial.bell_enabled ?? true,
  );
  const [saving, setSaving] = createSignal(false);

  async function persist(next: {
    digest_optin: boolean;
    email_reply_optout: boolean;
    bell_enabled: boolean;
  }) {
    setSaving(true);
    try {
      await putNotificationPreferences(next);
      pushToast({
        variant: "success",
        message: t("community.preferences.save_success"),
      });
      // If re-enabling email after opt-out, inform user explicitly.
      if (
        props.initial.email_reply_optout === true &&
        next.email_reply_optout === false
      ) {
        pushToast({
          variant: "info",
          message: t("community.preferences.reopt_in_notice"),
          duration: 6000,
        });
      }
    } catch (err) {
      pushToast({
        variant: "error",
        message: t("community.preferences.save_error"),
      });
      throw err;
    } finally {
      setSaving(false);
    }
  }

  const onToggleDigest = async (checked: boolean) => {
    const prev = digestOptin();
    setDigestOptin(checked);                 // optimistic
    try {
      await persist({
        digest_optin: checked,
        email_reply_optout: !emailReplies(),
        bell_enabled: bellEnabled(),
      });
    } catch {
      setDigestOptin(prev);
    }
  };

  const onToggleEmailReplies = async (checked: boolean) => {
    const prev = emailReplies();
    setEmailReplies(checked);
    try {
      await persist({
        digest_optin: digestOptin(),
        email_reply_optout: !checked,        // UI-inverted back to contract
        bell_enabled: bellEnabled(),
      });
    } catch {
      setEmailReplies(prev);
    }
  };

  const onToggleBell = async (checked: boolean) => {
    const prev = bellEnabled();
    setBellEnabled(checked);
    try {
      await persist({
        digest_optin: digestOptin(),
        email_reply_optout: !emailReplies(),
        bell_enabled: checked,
      });
    } catch {
      setBellEnabled(prev);
    }
  };

  return (
    <section
      aria-labelledby="notif-prefs-heading"
      class="rounded-lg border border-outline-variant/30 bg-surface-container p-4 space-y-4"
    >
      <header>
        <h2 id="notif-prefs-heading" class="text-lg font-semibold text-on-surface">
          {t("community.preferences.section_title")}
        </h2>
        <p class="text-sm text-on-surface-variant">
          {t("community.preferences.section_subtitle")}
        </p>
      </header>

      <ToggleRow
        id="pref-digest"
        label={t("community.preferences.digest_optin.label")}
        description={t("community.preferences.digest_optin.description")}
        checked={digestOptin()}
        disabled={saving()}
        onChange={onToggleDigest}
      />

      <ToggleRow
        id="pref-email-replies"
        label={t("community.preferences.email_reply.label")}
        description={t("community.preferences.email_reply.description")}
        checked={emailReplies()}
        disabled={saving()}
        onChange={onToggleEmailReplies}
      />

      <ToggleRow
        id="pref-bell"
        label={t("community.preferences.bell_enabled.label")}
        description={t("community.preferences.bell_enabled.description")}
        checked={bellEnabled()}
        disabled={saving()}
        onChange={onToggleBell}
      />

      <p class="pt-2 text-xs text-on-surface-variant border-t border-outline-variant/20">
        {t("community.preferences.footer_note")}
      </p>
    </section>
  );
}

interface ToggleRowProps {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

function ToggleRow(props: ToggleRowProps) {
  const descId = `${props.id}-desc`;
  return (
    <div class="flex items-start justify-between gap-4 py-2">
      <div class="flex-1">
        <label for={props.id} class="block text-sm font-medium text-on-surface">
          {props.label}
        </label>
        <p id={descId} class="text-xs text-on-surface-variant mt-1">
          {props.description}
        </p>
      </div>
      <button
        id={props.id}
        type="button"
        role="switch"
        aria-checked={props.checked}
        aria-describedby={descId}
        disabled={props.disabled}
        onClick={() => props.onChange(!props.checked)}
        class={
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full " +
          "transition-colors focus-visible:outline-none focus-visible:ring-2 " +
          "focus-visible:ring-primary disabled:opacity-50 " +
          (props.checked ? "bg-primary" : "bg-outline-variant")
        }
      >
        <span
          aria-hidden="true"
          class={
            "inline-block h-5 w-5 mt-0.5 ml-0.5 rounded-full bg-on-primary shadow " +
            "transform transition-transform " +
            (props.checked ? "translate-x-5" : "translate-x-0")
          }
        />
      </button>
    </div>
  );
}
