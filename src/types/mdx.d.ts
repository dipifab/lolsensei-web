// WP24 TASK-3-026 — MDX module declarations.
// @mdx-js/rollup emette componenti SolidJS (jsxImportSource=solid-js).
declare module '*.mdx' {
  import type { Component } from 'solid-js';
  export const frontmatter: Record<string, unknown>;
  const MDXComponent: Component;
  export default MDXComponent;
}

declare module '*.md' {
  import type { Component } from 'solid-js';
  export const frontmatter: Record<string, unknown>;
  const MDXComponent: Component;
  export default MDXComponent;
}
