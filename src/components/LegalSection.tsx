import type { JSX } from 'solid-js';

interface Props {
  id: string;
  titleKey?: string;
  title?: string;
  children: JSX.Element;
  class?: string;
}

/**
 * WP20 REQ-F-020-006/007/008/009: sectioned legal content with deep-link
 * anchors (``#cookies``, ``#gdpr-basis``, ``#data-transfers``,
 * ``#withdrawal``, ``#data-collect``). The caller passes the localized
 * heading text plus the body markup via children.
 */
export default function LegalSection(props: Props) {
  return (
    <section
      id={props.id}
      class={`mb-12 scroll-mt-32 ${props.class ?? ''}`.trim()}
    >
      {props.title ? (
        <h2 class="text-3xl font-headline font-extrabold uppercase tracking-tight mb-4 text-on-surface">
          {props.title}
        </h2>
      ) : null}
      <div class="text-on-surface-variant leading-relaxed space-y-3">
        {props.children}
      </div>
    </section>
  );
}
