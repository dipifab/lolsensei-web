// WP-AI-LOGS-VIEWER (CR-061) — TASK-6-003
// Badge red "Deleted" per row con `user_email_hashed = true`.
//
// AC-005.10:
// - badge red "Deleted" (i18n `console.ai-logs.user.deleted_badge`)
// - hash sha256 truncated a 12 char hex in monospace + tooltip GDPR Art. 17
// - cella Riot ID renderizzata altrove come em-dash (no traduzione)
// - riga NON dimmed (resta leggibile per audit)
//
// Il padre passa `userEmail` cosi' come arriva dal BE (gia' hashato):
// estraiamo la prima esadecimale di 12 char come display.

import { useI18n } from '../../i18n';

interface DeletedUserBadgeProps {
  /**
   * Valore di `users.email` post-cascade WP24 (sha256 hex, 64 char). Se
   * arriva piu' corto (caso difensivo), troncatura no-op.
   */
  userEmail: string;
}

const HASH_DISPLAY_CHARS = 12;

export default function DeletedUserBadge(props: DeletedUserBadgeProps) {
  const { t } = useI18n();
  const truncated = () =>
    (props.userEmail || '').slice(0, HASH_DISPLAY_CHARS);

  return (
    <span class="inline-flex items-center gap-2">
      <span
        class="font-mono text-xs text-on-surface-variant"
        title={t('console.ai-logs.user.email_hashed_tooltip')}
      >
        {truncated()}
        {props.userEmail.length > HASH_DISPLAY_CHARS && '...'}
      </span>
      <span class="inline-flex items-center rounded-full bg-error/15 px-2 py-0.5 text-xs font-semibold text-error">
        {t('console.ai-logs.user.deleted_badge')}
      </span>
    </span>
  );
}
