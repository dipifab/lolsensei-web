// WP31 F4-07 — AI summary block with EN/IT toggle (REQ-F-031-018, OP-008/OP-017).
//
// Renders the cached `summary_en` / `summary_it` from `ReviewResponse`
// without re-fetching from the backend on language switch — the toggle is
// purely a local state mutation. The toggle is keyboard-friendly (button
// pair with `aria-pressed`) and reads from the URL `[lang]` segment as the
// initial selection.

import { Show, createMemo, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import type { ReviewResponse } from '../../types/wp31';

export type SummaryLanguage = 'en' | 'it';

export interface SummaryBlockProps {
  review: ReviewResponse;
  /** Currently displayed language. */
  language: SummaryLanguage | (() => SummaryLanguage);
  /** Notified when the user toggles. The parent owns the signal so the URL
   * can be updated alongside it (or not — the toggle is intentionally
   * stateless from the component's perspective). */
  onLanguageChange: (lang: SummaryLanguage) => void;
}

function readLanguage(
  l: SummaryLanguage | (() => SummaryLanguage),
): SummaryLanguage {
  return typeof l === 'function' ? l() : l;
}

export function SummaryBlock(props: SummaryBlockProps): JSX.Element {
  const { t } = useI18n();

  const activeLang = createMemo<SummaryLanguage>(() => readLanguage(props.language));

  const summary = createMemo<string | null>(() => {
    return activeLang() === 'it' ? props.review.summary_it : props.review.summary_en;
  });

  const otherSummary = createMemo<string | null>(() => {
    return activeLang() === 'it' ? props.review.summary_en : props.review.summary_it;
  });

  return (
    <section
      class="my-8"
      data-testid="summary-block"
      aria-label={t('match.review.aria.summary')}
    >
      <header class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <h2 class="text-lg font-bold font-headline text-on-surface">
          {t('match.review.summary.heading')}
        </h2>
        <div
          class="inline-flex rounded-full border border-outline-variant/30 overflow-hidden"
          role="group"
          aria-label={t('match.review.summary.toggle.aria')}
        >
          <button
            type="button"
            class={
              activeLang() === 'en'
                ? 'px-3 py-1 text-sm bg-primary text-on-primary'
                : 'px-3 py-1 text-sm text-on-surface-variant hover:bg-surface-variant/10'
            }
            aria-pressed={activeLang() === 'en'}
            data-testid="summary-toggle-en"
            onClick={() => props.onLanguageChange('en')}
          >
            {t('match.review.summary.toggle.en')}
          </button>
          <button
            type="button"
            class={
              activeLang() === 'it'
                ? 'px-3 py-1 text-sm bg-primary text-on-primary'
                : 'px-3 py-1 text-sm text-on-surface-variant hover:bg-surface-variant/10'
            }
            aria-pressed={activeLang() === 'it'}
            data-testid="summary-toggle-it"
            onClick={() => props.onLanguageChange('it')}
          >
            {t('match.review.summary.toggle.it')}
          </button>
        </div>
      </header>

      <Show
        when={summary()}
        fallback={
          <Show
            when={otherSummary()}
            fallback={
              <p class="text-on-surface-variant" data-testid="summary-empty">
                {t('match.review.error.generation.body')}
              </p>
            }
          >
            <p class="text-on-surface-variant" data-testid="summary-empty-fallback">
              {t('match.review.error.generation.body')}
            </p>
          </Show>
        }
      >
        {(text) => (
          <p
            class="prose prose-on-surface max-w-none whitespace-pre-line text-on-surface"
            data-testid="summary-text"
            data-lang={activeLang()}
            lang={activeLang()}
          >
            {text()}
          </p>
        )}
      </Show>

      <p class="mt-4 text-xs text-on-surface-variant/60" data-testid="summary-disclaimer">
        {t('match.review.summary.disclaimer')}
      </p>
    </section>
  );
}

/** Alias requested by F4 brief: same component as `SummaryBlock`. */
export const ReviewPanel = SummaryBlock;

export default SummaryBlock;
