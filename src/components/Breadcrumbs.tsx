import { For, Show } from 'solid-js';
import { A } from '@solidjs/router';
import Icon from './Icon';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs(props: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" class="max-w-7xl mx-auto px-8 pt-24 pb-4">
      <ol class="flex items-center gap-2 text-xs text-on-surface-variant/60 font-body">
        <For each={props.items}>
          {(item, index) => (
            <>
              <Show when={index() > 0}>
                <li aria-hidden="true" class="select-none">
                  <Icon name="chevron_right" class="w-3.5 h-3.5" />
                </li>
              </Show>
              <li>
                <Show
                  when={item.href}
                  fallback={
                    <span class="text-on-surface/80 font-medium" aria-current="page">
                      {item.label}
                    </span>
                  }
                >
                  <A href={item.href!} class="hover:text-primary-container transition-colors">
                    {item.label}
                  </A>
                </Show>
              </li>
            </>
          )}
        </For>
      </ol>
    </nav>
  );
}
