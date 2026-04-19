import type { JSX } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';

interface Props {
  variant: '404' | 'checkout';
  children?: JSX.Element;
}

export default function BareLayout(props: Props & Partial<RouteSectionProps>) {
  return (
    <div class="min-h-screen flex flex-col bg-background text-on-surface">
      <a
        href="#main-content"
        class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        Skip to main content
      </a>
      <main id="main-content" class="flex-1">
        {props.children ?? (props as RouteSectionProps).children}
      </main>
      <footer class="py-6 text-center text-xs text-on-surface-variant/60">
        © {new Date().getFullYear()} LoL Sensei
      </footer>
    </div>
  );
}
