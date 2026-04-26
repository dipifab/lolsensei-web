// WP32 F5-05 — ChatPanel single-turn chat UI.
//
// Implements UX-OP-304: skeleton-only loading (no SSE streaming on MVP).
// Stores the conversation in-memory only — single-turn means no history
// persistence client-side beyond the current session (matches BE behaviour:
// each chat() call is independent, persona memory is the only continuity).
//
// Error handling pattern mirrors `<GenerateReviewCTA>` (WP31): each typed
// `CoachApiError` subclass is mapped to a localized banner. The
// `<AddonRequiredGate>` itself handles 403 — here we surface 503 (provider
// unavailable) and the BE's 200-quota_exceeded branch.

import { For, Show, createSignal, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import {
  chat,
  CoachAddonRequiredError,
  CoachAiProviderError,
  CoachQuotaExceededError,
  CoachUnauthenticatedError,
} from '../../services/coach-api';
import type {
  ChatRequest,
  ChatResponse,
  CoachLanguage,
  QuotaExceededResponse,
} from '../../types/wp32';

export interface ChatMessage {
  role: 'user' | 'coach';
  content: string;
  /** Server-side log id — null for user-authored entries. */
  aiUsageLogId: string | null;
}

export interface ChatPanelProps {
  language: () => CoachLanguage;
  /** Override the chat fetcher — used by tests to inject a stub. */
  fetcher?: typeof chat;
  /** Notify parent of a successful chat so it can refresh quota / quotas UI. */
  onChatSuccess?: (response: ChatResponse) => void;
  /** Notify parent of a 403 so it can surface `<AddonRequiredGate>`. */
  onAddonRequired?: () => void;
  /** Notify parent of unauthenticated state so it can prompt sign-in. */
  onUnauthenticated?: () => void;
}

const MAX_INPUT_LEN = 2000;

export function ChatPanel(props: ChatPanelProps): JSX.Element {
  const { t } = useI18n();
  const [messages, setMessages] = createSignal<ChatMessage[]>([]);
  const [input, setInput] = createSignal('');
  const [sending, setSending] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);
  const [quotaExceeded, setQuotaExceeded] = createSignal<QuotaExceededResponse | null>(null);

  const send = async () => {
    const text = input().trim();
    if (!text || sending()) return;
    setError(null);
    setQuotaExceeded(null);
    setSending(true);
    setMessages([...messages(), { role: 'user', content: text, aiUsageLogId: null }]);
    setInput('');

    const request: ChatRequest = { message: text.slice(0, MAX_INPUT_LEN) };
    const fetcher = props.fetcher ?? chat;
    try {
      const response = await fetcher(request, { language: props.language() });
      setMessages([
        ...messages(),
        {
          role: 'coach',
          content: response.response,
          aiUsageLogId: response.ai_usage_log_id,
        },
      ]);
      props.onChatSuccess?.(response);
    } catch (err) {
      if (err instanceof CoachQuotaExceededError) {
        setQuotaExceeded(err.payload);
        return;
      }
      if (err instanceof CoachAddonRequiredError) {
        props.onAddonRequired?.();
        return;
      }
      if (err instanceof CoachUnauthenticatedError) {
        props.onUnauthenticated?.();
        return;
      }
      if (err instanceof CoachAiProviderError) {
        setError(t('coach.chat.error.generic'));
        return;
      }
      setError(t('coach.chat.error.generic'));
    } finally {
      setSending(false);
    }
  };

  const onSubmit = (event: Event) => {
    event.preventDefault();
    void send();
  };

  return (
    <section class="flex flex-col gap-4" data-testid="coach-chat-panel">
      <h2 class="text-xl font-bold font-headline text-on-surface">{t('coach.chat.title')}</h2>

      <Show
        when={messages().length > 0}
        fallback={
          <p class="text-on-surface-variant" data-testid="coach-chat-empty">
            {t('coach.chat.empty')}
          </p>
        }
      >
        <ul class="flex flex-col gap-3" aria-live="polite" data-testid="coach-chat-messages">
          <For each={messages()}>
            {(msg) => (
              <li
                class={`px-4 py-3 rounded-2xl max-w-prose whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'self-end bg-primary/10 text-on-surface'
                    : 'self-start bg-surface-variant/20 text-on-surface'
                }`}
                data-role={msg.role}
              >
                {msg.content}
              </li>
            )}
          </For>
        </ul>
      </Show>

      <Show when={sending()}>
        <p class="text-sm text-on-surface-variant" aria-busy="true" data-testid="coach-chat-loading">
          {t('coach.chat.loading')}
        </p>
      </Show>

      <Show when={quotaExceeded()} keyed>
        {(payload) => (
          <div
            class="px-4 py-3 rounded-xl border border-yellow-500/40 bg-yellow-500/10 text-on-surface"
            role="status"
            data-testid="coach-chat-quota-exceeded"
          >
            <p class="font-medium mb-1">
              {t('coach.quota_exceeded.chat').replace(
                '{reset_date}',
                new Date(payload.current_quota.reset_at).toISOString().slice(0, 10),
              )}
            </p>
            <Show when={payload.upgrade_hint}>
              <p class="text-sm text-on-surface-variant">{t('coach.quota_exceeded.upgrade_hint')}</p>
            </Show>
          </div>
        )}
      </Show>

      <Show when={error()} keyed>
        {(message) => (
          <p class="text-red-600" role="alert" data-testid="coach-chat-error">
            {message}
          </p>
        )}
      </Show>

      <form class="flex flex-col sm:flex-row gap-2" onSubmit={onSubmit}>
        <label class="sr-only" for="coach-chat-input">
          {t('coach.chat.input.placeholder')}
        </label>
        <input
          id="coach-chat-input"
          class="flex-1 px-4 py-3 rounded-xl border border-on-surface/20 bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
          type="text"
          maxLength={MAX_INPUT_LEN}
          placeholder={t('coach.chat.input.placeholder')}
          value={input()}
          onInput={(e) => setInput(e.currentTarget.value)}
          disabled={sending()}
          data-testid="coach-chat-input"
        />
        <button
          type="submit"
          class="px-6 py-3 rounded-xl bg-primary text-on-primary font-bold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          disabled={sending() || input().trim().length === 0}
          data-testid="coach-chat-send"
        >
          {t('coach.chat.cta.send')}
        </button>
      </form>
    </section>
  );
}

export default ChatPanel;
