import { createSignal, Show } from 'solid-js';
import type { JSX } from 'solid-js';
import Icon from '../../components/Icon';

interface ConsoleCardProps {
  title?: string;
  titleRight?: JSX.Element;
  collapsible?: boolean;
  defaultOpen?: boolean;
  children: JSX.Element;
}

export default function ConsoleCard(props: ConsoleCardProps) {
  const [open, setOpen] = createSignal(props.defaultOpen ?? true);

  const isCollapsible = () => props.collapsible ?? false;

  function toggle() {
    if (isCollapsible()) setOpen(!open());
  }

  return (
    <div class="rounded-xl border border-outline-variant/10 bg-surface-container overflow-hidden shadow-sm shadow-primary/5">
      <Show when={props.title}>
        <div
          class="flex items-center justify-between px-5 py-4"
          classList={{
            'cursor-pointer select-none hover:bg-surface-container-high transition-colors': isCollapsible(),
          }}
          role={isCollapsible() ? 'button' : undefined}
          tabIndex={isCollapsible() ? 0 : undefined}
          aria-expanded={isCollapsible() ? open() : undefined}
          onKeyDown={(e: KeyboardEvent) => {
            if ((e.key === 'Enter' || e.key === ' ') && isCollapsible()) {
              e.preventDefault();
              toggle();
            }
          }}
          onClick={toggle}
        >
          <div class="flex items-center gap-3">
            <Show when={isCollapsible()}>
              <span aria-hidden="true">
                <Icon
                  name="expand_more"
                  class={`w-5 h-5 text-on-surface-variant transition-transform motion-safe:duration-200 ${open() ? '' : '-rotate-90'}`}
                />
              </span>
            </Show>
            <h3 class="font-headline text-sm font-semibold text-on-surface">
              {props.title}
            </h3>
          </div>
          <Show when={props.titleRight}>
            <div onClick={(e: MouseEvent) => e.stopPropagation()}>
              {props.titleRight}
            </div>
          </Show>
        </div>
      </Show>

      <div
        class="transition-all motion-safe:duration-200 overflow-hidden"
        classList={{
          'max-h-0 opacity-0': isCollapsible() && !open(),
          'max-h-[2000px] opacity-100': !isCollapsible() || open(),
        }}
        aria-hidden={isCollapsible() && !open()}
      >
        <Show when={props.title}>
          <div class="border-t border-outline-variant/10" />
        </Show>
        <div class="px-5 py-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}
