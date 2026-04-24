// src/components/community/HighlightSnippet.tsx
//
// Renders a search snippet safely. The backend returns plain-text with
// literal sentinels `<<hl>>...<</hl>>` marking match highlights.
//
// Security policy (MANDATORY):
//   1) HTML-escape the full raw string (neutralises any `<`, `>`, `&`,
//      `"`, `'` inside user-generated text).
//   2) Replace the *escaped* sentinel `&lt;&lt;hl&gt;&gt;` with `<mark>`
//      and `&lt;&lt;/hl&gt;&gt;` with `</mark>` — the only re-introduced
//      tag is the whitelisted <mark>.
//
// Never swap the order: replace-then-escape would neutralise the <mark>
// just inserted; replace-without-escape would be XSS-prone on any legit
// `<` in the text.

import { escapeHtml } from "../../utils/escape-html";

const ESCAPED_OPEN = "&lt;&lt;hl&gt;&gt;";
const ESCAPED_CLOSE = "&lt;&lt;/hl&gt;&gt;";

/**
 * Turn a backend snippet into trusted inner HTML with <mark> for
 * highlights. Idempotent on strings with no sentinels.
 */
export function renderSnippet(raw: string | null | undefined): string {
  if (!raw) return "";
  const escaped = escapeHtml(raw);
  return escaped
    .split(ESCAPED_OPEN)
    .join("<mark>")
    .split(ESCAPED_CLOSE)
    .join("</mark>");
}

export function HighlightSnippet(props: {
  text: string | null | undefined;
  class?: string;
}) {
  // Intentional innerHTML: the value is produced by `renderSnippet`
  // which enforces the escape-then-replace invariant above.
  // Any other route to innerHTML in this codebase must go through the
  // same utility — do NOT inline string concatenation.
  return (
    <span
      class={props.class ?? "text-sm text-on-surface-variant"}
      // eslint-disable-next-line solid/no-innerhtml
      innerHTML={renderSnippet(props.text)}
    />
  );
}
