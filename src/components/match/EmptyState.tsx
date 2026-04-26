// WP31 F4 — Generic empty-state widget for the match-history dashboard.
//
// Used when the backend returns `items: []` (Premium user with no recent
// competitive games) and as the fallback for transient list errors.

import type { JSX } from 'solid-js';

export interface EmptyStateProps {
  title: string;
  body: string;
  /** Optional CTA — typically links the user to the League client or back to home. */
  cta?: { label: string; href: string };
  /** Override the default ARIA role (`status`). */
  role?: 'status' | 'note';
}

export function EmptyState(props: EmptyStateProps): JSX.Element {
  return (
    <section
      role={props.role ?? 'status'}
      class="max-w-xl mx-auto my-10 px-6 py-8 rounded-xl border border-outline-variant/30 bg-surface-variant/5 text-center"
      data-testid="match-empty-state"
    >
      <h2 class="text-lg font-bold font-headline text-on-surface mb-2">{props.title}</h2>
      <p class="text-on-surface-variant mb-4">{props.body}</p>
      {props.cta ? (
        <a
          href={props.cta.href}
          class="inline-flex items-center justify-center px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
        >
          {props.cta.label}
        </a>
      ) : null}
    </section>
  );
}

export default EmptyState;
