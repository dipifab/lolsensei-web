import { createSignal, createEffect, onCleanup, Show } from 'solid-js';
import type { JSX } from 'solid-js';
import AdminSidebar from './AdminSidebar';
import AdminToast from './AdminToast';
import Icon from '../../components/Icon';
import { getAdminKey } from '../api/client';

type SidebarMode = 'expanded' | 'collapsed' | 'overlay';
type ApiStatus = 'ok' | 'error' | 'checking';

function getInitialMode(): SidebarMode {
  const w = window.innerWidth;
  if (w >= 1280) return 'expanded';
  if (w >= 1024) return 'collapsed';
  return 'overlay';
}

interface AdminShellProps {
  children: JSX.Element;
}

export default function AdminShell(props: AdminShellProps) {
  const [sidebarMode, setSidebarMode] = createSignal<SidebarMode>(getInitialMode());
  const [overlayOpen, setOverlayOpen] = createSignal(false);
  const [apiStatus, setApiStatus] = createSignal<ApiStatus>('checking');

  const checkApiStatus = async () => {
    const key = getAdminKey();
    if (!key) { setApiStatus('error'); return; }
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const res = await fetch(`${baseUrl}/api/admin/trial-config`, {
        method: 'GET',
        headers: { 'X-Admin-Key': key },
      });
      setApiStatus(res.ok ? 'ok' : 'error');
    } catch {
      setApiStatus('error');
    }
  };

  createEffect(() => {
    checkApiStatus();
    const interval = setInterval(checkApiStatus, 30_000);
    onCleanup(() => clearInterval(interval));
  });

  createEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const updateMode = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const w = window.innerWidth;
        if (w >= 1280) setSidebarMode('expanded');
        else if (w >= 1024) setSidebarMode('collapsed');
        else setSidebarMode('overlay');
      }, 100);
    };
    window.addEventListener('resize', updateMode);
    onCleanup(() => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateMode);
    });
  });

  const showSidebar = () =>
    sidebarMode() !== 'overlay' || overlayOpen();

  const mainMargin = (): string => {
    if (sidebarMode() === 'expanded') return 'ml-64';
    if (sidebarMode() === 'collapsed') return 'ml-16';
    return 'ml-0';
  };

  return (
    <div class="min-h-screen bg-surface">
      <a
        href="#admin-main-content"
        class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary-container focus:text-on-primary-fixed focus:font-semibold focus:outline-2 focus:outline-primary-container"
      >
        Vai al contenuto principale
      </a>

      {/* Sidebar: always visible for expanded/collapsed, conditional for overlay */}
      <Show when={showSidebar()}>
        <AdminSidebar
          mode={sidebarMode()}
          onClose={() => setOverlayOpen(false)}
        />
      </Show>

      {/* Main area */}
      <div class={`flex flex-col min-h-screen ${mainMargin()}`}>
        {/* Sticky header */}
        <header class="sticky top-0 z-40 flex items-center justify-between h-16 px-8 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20">
          <div class="flex items-center">
            {/* Hamburger for mobile */}
            <Show when={sidebarMode() === 'overlay'}>
              <button
                class="mr-4 p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant"
                aria-label="Menu navigazione"
                aria-expanded={overlayOpen()}
                onClick={() => setOverlayOpen(true)}
              >
                <Icon name="tune" class="w-5 h-5" />
              </button>
            </Show>
          </div>

          {/* API Status Indicator */}
          <div
            class="flex items-center gap-2 text-xs font-medium"
            role="status"
            aria-live="polite"
          >
            <span
              class={`w-2 h-2 rounded-full ${
                apiStatus() === 'ok'
                  ? 'bg-success'
                  : apiStatus() === 'error'
                    ? 'bg-error'
                    : 'bg-warning animate-pulse'
              }`}
            />
            <span class="text-on-surface-variant">
              {apiStatus() === 'ok'
                ? 'API OK'
                : apiStatus() === 'error'
                  ? 'API Error'
                  : 'Checking...'}
            </span>
          </div>
        </header>

        {/* Content */}
        <main id="admin-main-content" class="flex-1 p-10">
          {props.children}
        </main>
      </div>

      {/* Toast container */}
      <AdminToast />
    </div>
  );
}
