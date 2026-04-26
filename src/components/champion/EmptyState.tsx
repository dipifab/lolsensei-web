// WP34 — Generic empty state for counter / pro-builds pages (FE-7).
//
// Carve-out DEC-OP-W34-007: text-first MVP semantico (riuso pattern WP35
// DEC-OP-011). Refactor 1:1 verso design system "Tactical Precision" entro
// 2 sprint via WP37 (DEBT-WP34-stitch-refactor).

import type { JSX } from 'solid-js';
import { Show } from 'solid-js';

export interface EmptyStateProps {
  title: string;
  description: string;
  /** Optional CTA: link href + label. */
  ctaHref?: string;
  ctaLabel?: string;
  /** data-testid hook for E2E. */
  testid?: string;
}

export function EmptyState(props: EmptyStateProps): JSX.Element {
  return (
    <main
      class="min-h-[60vh] flex items-center justify-center px-8 py-24"
      data-testid={props.testid ?? 'wp34-empty-state'}
    >
      <div class="max-w-xl text-center">
        <h1 class="text-3xl md:text-4xl font-headline font-extrabold tracking-tight text-on-surface mb-4">
          {props.title}
        </h1>
        <p class="text-on-surface-variant/80 mb-8">{props.description}</p>
        <Show when={props.ctaHref && props.ctaLabel}>
          <a
            href={props.ctaHref}
            class="inline-block text-primary-container hover:text-primary underline font-bold"
            data-testid="wp34-empty-state-cta"
          >
            {props.ctaLabel}
          </a>
        </Show>
      </div>
    </main>
  );
}

export default EmptyState;
