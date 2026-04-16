import { Show, For, onMount, onCleanup } from 'solid-js';
import { useLocation, A } from '@solidjs/router';
import Icon from '../../components/Icon';
import { clearAdminKey } from '../api/client';

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: 'bar_chart' },
  { label: 'Plans', href: '/admin/plans', icon: 'credit_card' },
  { label: 'Promotions', href: '/admin/promotions', icon: 'sell' },
  { label: 'Trial Config', href: '/admin/trial-config', icon: 'timer' },
  { label: 'AI Providers', href: '/admin/ai-providers', icon: 'smart_toy' },
  { label: 'Admin Users', href: '/admin/admin-users', icon: 'group' },
] as const;

interface AdminSidebarProps {
  mode: 'expanded' | 'collapsed' | 'overlay';
  onClose?: () => void;
}

function isRouteActive(pathname: string, href: string): boolean {
  if (href === '/admin') return pathname === '/admin' || pathname === '/admin/';
  return pathname === href || pathname.startsWith(href + '/');
}

export default function AdminSidebar(props: AdminSidebarProps) {
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
          aria-label="Navigazione admin"
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
                <A
                  href={item.href}
                  onClick={handleNavClick}
                  title={props.mode === 'collapsed' ? item.label : undefined}
                  aria-current={active() ? "page" : undefined}
                  class={
                    props.mode === 'collapsed'
                      ? 'flex items-center justify-center py-3 text-sm font-medium transition-colors duration-200 '
                        + (active()
                          ? 'bg-surface-container text-primary border-l-[3px] border-primary-container'
                          : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface')
                      : 'flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors duration-200 '
                        + (active()
                          ? 'bg-surface-container text-primary border-l-[3px] border-primary-container'
                          : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface')
                  }
                >
                  <Icon name={item.icon} class="w-5 h-5" />
                  <Show when={props.mode !== 'collapsed'}>
                    <span>{item.label}</span>
                  </Show>
                </A>
              );
            }}
          </For>
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          title={props.mode === 'collapsed' ? 'Logout' : undefined}
          class={
            props.mode === 'collapsed'
              ? 'flex items-center justify-center py-2.5 text-sm text-on-surface-variant hover:text-error transition-colors'
              : 'flex items-center gap-3 px-5 py-2.5 text-sm text-on-surface-variant hover:text-error transition-colors'
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
