// WP-AI-LOGS-VIEWER (CR-061) — TASK-6-004
// Hook fetch list groups con gestione errori dedicati:
// - 429 RateLimitError -> espone `disabledFor: number` countdown 30s
// - 503 AuditUnavailableError -> espone `audit_unavailable` flag
// - 422 RangeTooLongError -> propagato al padre per RangeWarningModal
//
// L'hook NON gestisce il flusso di conferma RangeWarningModal: e' il
// padre che decide quando settare `allowLongRange=true`. Qui ci limitiamo
// a chiamare `fetchAILogsByMatch(filters)` e mappare gli errori.

import { createResource, createSignal, onCleanup } from 'solid-js';
import {
  AuditUnavailableError,
  RangeTooLongError,
  RateLimitError,
  fetchAILogsByMatch,
  type AILogsListFilters,
  type AILogsListResponse,
} from '../api/aiLogs';

export type AILogsErrorKind =
  | 'rate_limit'
  | 'audit_unavailable'
  | 'range_too_long'
  | 'generic';

export interface AILogsError {
  kind: AILogsErrorKind;
  message: string;
}

export interface UseAILogsByMatchResult {
  data: () => AILogsListResponse | undefined;
  loading: () => boolean;
  error: () => AILogsError | null;
  /** Seconds remaining before "Apply"/"Load more" can be retried. 0 when not throttled. */
  disabledFor: () => number;
  refetch: () => void;
}

const COUNTDOWN_SECONDS = 30;

function classifyError(err: unknown): AILogsError {
  if (err instanceof RateLimitError) {
    return { kind: 'rate_limit', message: err.message };
  }
  if (err instanceof AuditUnavailableError) {
    return { kind: 'audit_unavailable', message: err.message };
  }
  if (err instanceof RangeTooLongError) {
    return { kind: 'range_too_long', message: err.message };
  }
  if (err instanceof Error) {
    return { kind: 'generic', message: err.message };
  }
  return { kind: 'generic', message: 'Unexpected error' };
}

export function useAILogsByMatch(
  filters: () => AILogsListFilters,
): UseAILogsByMatchResult {
  const [error, setError] = createSignal<AILogsError | null>(null);
  const [disabledFor, setDisabledFor] = createSignal(0);
  let countdownTimer: ReturnType<typeof setInterval> | null = null;

  function startCountdown(seconds: number) {
    setDisabledFor(seconds);
    if (countdownTimer) clearInterval(countdownTimer);
    countdownTimer = setInterval(() => {
      setDisabledFor((s) => {
        if (s <= 1) {
          if (countdownTimer) {
            clearInterval(countdownTimer);
            countdownTimer = null;
          }
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  }

  onCleanup(() => {
    if (countdownTimer) clearInterval(countdownTimer);
  });

  const [data, { refetch }] = createResource<
    AILogsListResponse,
    AILogsListFilters
  >(filters, async (params) => {
    setError(null);
    try {
      return await fetchAILogsByMatch(params);
    } catch (err) {
      const classified = classifyError(err);
      setError(classified);
      if (classified.kind === 'rate_limit') {
        startCountdown(COUNTDOWN_SECONDS);
      }
      throw err;
    }
  });

  return {
    data: () => data(),
    loading: () => data.loading,
    error,
    disabledFor,
    refetch: () => {
      setError(null);
      refetch();
    },
  };
}
