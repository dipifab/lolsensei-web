// src/utils/escape-html.ts
//
// HTML-escape per serializzazione sicura in innerHTML.
// Copre le 5 entita' base, sufficiente quando l'output finisce come
// testo dentro un nodo. Non usare per contesti attribute-senza-quote
// ne' per JS/CSS inline.

const HTML_ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
};

const HTML_ESCAPE_RE = /[&<>"']/g;

export function escapeHtml(raw: string): string {
  if (raw == null) return "";
  return raw.replace(HTML_ESCAPE_RE, (ch) => HTML_ESCAPE_MAP[ch]!);
}
