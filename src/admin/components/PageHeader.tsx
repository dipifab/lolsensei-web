import { Show } from 'solid-js';
import type { JSX } from 'solid-js';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: JSX.Element;
}

export default function PageHeader(props: PageHeaderProps) {
  return (
    <header class="flex items-center justify-between">
      <div>
        <h1 class="font-headline text-2xl font-bold text-on-surface">
          {props.title}
        </h1>
        <Show when={props.subtitle}>
          <p class="mt-1 text-sm text-on-surface-variant">{props.subtitle}</p>
        </Show>
      </div>
      <Show when={props.actions}>
        <div class="flex items-center gap-3">{props.actions}</div>
      </Show>
    </header>
  );
}
