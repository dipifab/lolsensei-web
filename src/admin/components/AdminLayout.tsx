import { createSignal, Show } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';
import { getAdminKey, setAdminKey, clearAdminKey, fetchDashboard } from '../api/client';
import { ToastProvider } from '../contexts/toast-context';
import AdminShell from './AdminShell';

export default function AdminLayout(props: RouteSectionProps) {
  const [authed, setAuthed] = createSignal(!!getAdminKey());
  const [keyInput, setKeyInput] = createSignal('');
  const [error, setError] = createSignal('');
  const [validating, setValidating] = createSignal(false);

  const handleLogin = async (e: Event) => {
    e.preventDefault();
    const key = keyInput().trim();
    if (!key) {
      setError('Inserisci la chiave admin');
      return;
    }
    setAdminKey(key);
    setValidating(true);
    try {
      await fetchDashboard();
      setAuthed(true);
      setError('');
    } catch {
      clearAdminKey();
      setError('Chiave non valida');
    } finally {
      setValidating(false);
    }
  };

  return (
    <div class="min-h-screen">
      <Show
        when={authed()}
        fallback={
          <div class="min-h-screen bg-surface flex items-center justify-center">
            <form
              onSubmit={handleLogin}
              class="w-full max-w-sm p-8 rounded-2xl bg-surface-container"
            >
              <div class="flex flex-col items-center mb-6">
                <img
                  src="/images/logo-160.png"
                  class="w-16 h-16 rounded-xl mb-3"
                  alt="LoL Sensei"
                />
                <h1 class="font-headline text-xl font-bold text-on-surface">
                  Admin Console
                </h1>
                <p class="mt-1 text-sm text-on-surface-variant">
                  Inserisci la chiave di accesso
                </p>
              </div>

              <div class="space-y-4">
                <div>
                  <input
                    type="password"
                    value={keyInput()}
                    onInput={(e) => {
                      setKeyInput(e.currentTarget.value);
                      setError('');
                    }}
                    placeholder="Admin Key"
                    class="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface placeholder:text-outline focus:border-primary-container focus:outline-none"
                    autocomplete="current-password"
                  />
                  <Show when={error()}>
                    <p class="mt-1.5 text-xs text-error">{error()}</p>
                  </Show>
                </div>

                <button
                  type="submit"
                  disabled={validating()}
                  class="w-full rounded-lg gold-gradient px-4 py-2.5 text-sm font-semibold text-on-primary-fixed hover:brightness-110 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {validating() ? 'Verifica...' : 'Accedi'}
                </button>
              </div>
            </form>
          </div>
        }
      >
        <ToastProvider>
          <AdminShell>
            {props.children}
          </AdminShell>
        </ToastProvider>
      </Show>
    </div>
  );
}
