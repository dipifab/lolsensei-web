// ConsoleLayout WP21 — shell UI only.
// Il gating di autenticazione e' demandato a ConsoleGate (TASK-6-001).
// Qui non c'e' piu' prompt password / admin_key / X-Admin-Key.
import type { RouteSectionProps } from '@solidjs/router';
import { ToastProvider } from '../contexts/toast-context';
import ConsoleShell from './ConsoleShell';

export default function ConsoleLayout(props: RouteSectionProps) {
  return (
    <div class="min-h-screen">
      <ToastProvider>
        <ConsoleShell>
          {props.children}
        </ConsoleShell>
      </ToastProvider>
    </div>
  );
}
