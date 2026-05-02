// WP-AI-LOGS-VIEWER (CR-061) — TASK-6-007
// Bottone "Refresh Riot ID" in `/console/users/{id}` (AC-005.11 + OP-039).
//
// - Disabled if `riotPuuid` is null (FE pre-check).
// - On click: POST /api/admin/users/{id}/refresh-riot-id.
// - Success: toast i18n + callback `onSuccess` (caller refreshes profile).
// - Error: toast i18n con classe specifica (riot_unavailable / account_not_found / rate_limit).
//
// Vincolo: bottone SOLO qui, NON in /console/ai-logs (decisione AC-005.11
// + OP-039, conferma TASK-5-003).

import { Show, createSignal } from 'solid-js';
import {
  refreshRiotId,
  isRefreshRiotIdResolved,
  RateLimitError,
} from '../api/aiLogs';
import { ConsoleApiError } from '../api/client';
import { useI18n } from '../../i18n';
import { useToast } from '../contexts/toast-context';

interface RefreshRiotIdButtonProps {
  userId: string;
  riotPuuid: string | null;
  onSuccess: () => void;
}

export default function RefreshRiotIdButton(props: RefreshRiotIdButtonProps) {
  const { t } = useI18n();
  const toast = useToast();
  const [loading, setLoading] = createSignal(false);

  const noPuuid = () => !props.riotPuuid;

  async function handleClick() {
    if (noPuuid() || loading()) return;
    setLoading(true);
    try {
      const resp = await refreshRiotId(props.userId);
      if (isRefreshRiotIdResolved(resp)) {
        toast.showToast(
          t('console.users.refresh_riot_id.success')
            .replace('{{game_name}}', resp.riot_game_name)
            .replace('{{tag_line}}', resp.riot_tag_line),
          'success',
        );
        props.onSuccess();
      } else {
        toast.showToast(
          t('console.users.refresh_riot_id.skipped_no_puuid'),
          'warning',
        );
      }
    } catch (err) {
      if (err instanceof RateLimitError) {
        toast.showToast(t('console.users.refresh_riot_id.error.rate_limit'), 'error');
      } else if (err instanceof ConsoleApiError) {
        const detail = (err.detail ?? '').toString();
        if (err.status === 503 && /riot_unavailable/i.test(detail)) {
          toast.showToast(
            t('console.users.refresh_riot_id.error.riot_unavailable'),
            'error',
          );
        } else if (err.status === 422 && /account_not_found/i.test(detail)) {
          toast.showToast(
            t('console.users.refresh_riot_id.error.account_not_found'),
            'error',
          );
        } else {
          toast.showToast(err.message, 'error');
        }
      } else {
        toast.showToast(
          err instanceof Error ? err.message : 'Unexpected error',
          'error',
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={noPuuid() || loading()}
      title={
        noPuuid()
          ? t('console.users.refresh_riot_id.disabled_no_puuid')
          : undefined
      }
      class="inline-flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-sm font-semibold text-on-surface hover:bg-surface-container-high disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
    >
      <Show when={loading()}>
        <svg class="animate-spin w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </Show>
      {t('console.users.refresh_riot_id.button')}
    </button>
  );
}
