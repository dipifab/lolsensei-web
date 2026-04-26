import { Show, For, onMount, onCleanup } from 'solid-js';
import { useLocation, A } from '@solidjs/router';
import Icon from '../../components/Icon';
import { clearAdminKey } from '../api/client';

interface NavItem {
  label: string;
  href: string;
  icon: string;
  /**
   * Quando presente, viene reso un divider con questa label sopra la voce.
   * Usato per separare la sezione "Runtime Config" (OP-027): la nuova
   * configurazione DB-backed non e' un peer di "Trial Config" / "Plans"
   * (tipologie diverse di config), quindi la teniamo in una sezione propria.
   */
  sectionDivider?: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Dashboard', href: '/console', icon: 'bar_chart' },
  { label: 'Users', href: '/console/users', icon: 'group' },
  { label: 'Plans', href: '/console/plans', icon: 'credit_card' },
  { label: 'Promotions', href: '/console/promotions', icon: 'sell' },
  { label: 'Trial Config', href: '/console/trial-config', icon: 'timer' },
  { label: 'AI Providers', href: '/console/ai-providers', icon: 'smart_toy' },
  { label: 'Admin Users', href: '/console/admin-users', icon: 'person' },
  { label: 'Allowlist', href: '/console/allowlist', icon: 'verified_user' },
  { label: 'Game Data', href: '/console/game-data', icon: 'dataset' },
  {
    label: 'Runtime Config',
    href: '/console/config',
    icon: 'tune',
    sectionDivider: 'Runtime',
  },
] as const;

interface ConsoleSidebarProps {
  mode: 'expanded' | 'collapsed' | 'overlay';
  onClose?: () => void;
}

function isRouteActive(pathname: string, href: string): boolean {
  if (href === '/console') return pathname === '/console' || pathname === '/console/';
  return pathname === href || pathname.startsWith(href + '/');
}

const NAV_FOCUS_RING =
  ' focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2';

export default function ConsoleSidebar(props: ConsoleSidebarProps) {
  const location = useLocation();

  onMount(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && props.mode === 'overlay') {
        props.onClose?.();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    onCleanup(() => document.removeEventListener('keydown', handleKeyDown));
  });

  const handleLogout = () => {
    clearAdminKey();
    window.location.reload();
  };

  const handleNavClick = () => {
    if (props.mode === 'overlay') {
      props.onClose?.();
    }
  };

  return (
    <>
      {/* Backdrop for overlay mode */}
      <Show when={props.mode === 'overlay'}>
        <div
          class="fixed inset-0 bg-black/50 z-40"
          aria-hidden="true"
          onClick={() => props.onClose?.()}
        />
      </Show>

      <aside
        class={
          props.mode === 'collapsed'
            ? 'w-16 bg-surface-container-lowest h-screen fixed left-0 top-0 flex flex-col z-30'
            : 'w-64 bg-surface-container-lowest h-screen fixed left-0 top-0 flex flex-col'
              + (props.mode === 'overlay'
                ? ' z-50 motion-safe:transition-transform motion-safe:duration-200'
                : ' z-30')
        }
      >
        {/* Logo */}
        <div
          class={
            props.mode === 'collapsed'
              ? 'flex items-center justify-center px-2 py-5'
              : 'flex items-center gap-3 px-4 py-5'
          }
        >
          <img
            src="/images/logo-120.webp"
            class="w-10 h-10 rounded-lg"
            alt="LoL Sensei"
          />
          <Show when={props.mode !== 'collapsed'}>
            <span class="font-headline text-sm font-bold text-primary">
              LoL Sensei Admin
            </span>
          </Show>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Admin navigation"
          class={
            props.mode === 'collapsed'
              ? 'flex-1 mt-2 px-1 space-y-1'
              : 'flex-1 mt-2 px-2 space-y-1'
          }
        >
          <For each={NAV_ITEMS}>
            {(item) => {
              const active = () => isRouteActive(location.pathname, item.href);
              return (
                <>
                  <Show when={item.sectionDivider}>
                    <Show when={props.mode !== 'collapsed'}>
                      <div class="mt-3 mb-1 px-4 text-[10px] font-semibold uppercase tracking-wider text-outline">
                        {item.sectionDivider}
                      </div>
                    </Show>
                    <Show when={props.mode === 'collapsed'}>
                      <div
                        aria-hidden="true"
                        class="my-2 mx-3 border-t border-outline-variant/30"
                      />
                    </Show>
                  </Show>
                  <A
                    href={item.href}
                    onClick={handleNavClick}
                    title={props.mode === 'collapsed' ? item.label : undefined}
                    aria-label={item.label}
                    aria-current={active() ? 'page' : undefined}
                    class={
                      (props.mode === 'collapsed'
                        ? 'flex items-center justify-center py-3 text-sm font-medium transition-colors duration-200 '
                          + (active()
                            ? 'bg-surface-container text-primary border-l-[3px] border-primary-container'
                            : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface')
                        : 'flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors duration-200 '
                          + (active()
                            ? 'bg-surface-container text-primary border-l-[3px] border-primary-container'
                            : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'))
                      + NAV_FOCUS_RING
                    }
                  >
                    <Icon name={item.icon} class="w-5 h-5" />
                    <Show when={props.mode !== 'collapsed'}>
                      <span>{item.label}</span>
                    </Show>
                  </A>
                </>
              );
            }}
          </For>
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          title={props.mode === 'collapsed' ? 'Logout' : undefined}
          aria-label="Logout"
          class={
            (props.mode === 'collapsed'
              ? 'flex items-center justify-center py-2.5 text-sm text-on-surface-variant hover:text-error transition-colors'
              : 'flex items-center gap-3 px-5 py-2.5 text-sm text-on-surface-variant hover:text-error transition-colors')
            + NAV_FOCUS_RING
          }
        >
          <Icon name="person" class="w-5 h-5" />
          <Show when={props.mode !== 'collapsed'}>
            <span>Logout</span>
          </Show>
        </button>

        {/* Version footer */}
        <Show when={props.mode !== 'collapsed'}>
          <div class="px-4 py-3 text-xs text-outline">v1.0.0</div>
        </Show>
      </aside>
    </>
  );
}
