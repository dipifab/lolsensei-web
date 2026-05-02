// ConsoleLayout WP21 — shell UI only.
// Il gating di autenticazione e' demandato a ConsoleGate (TASK-6-001).
// Qui non c'e' piu' prompt password / admin_key / X-Admin-Key.
//
// WP-AI-LOGS-VIEWER (CR-061): wrappato in `I18nProvider` per consentire ai
// componenti del namespace `console.*` (admin tool, EN+IT) di consumare
// `useI18n()`. Il provider qui non riceve `:lang` dal path (le route
// `/console/*` vivono fuori dal segmento `[lang]`), quindi locale default
// = `en`. Le pagine console pre-WP-AI-LOGS che non chiamano `t()` non
// vengono toccate.
import type { RouteSectionProps } from '@solidjs/router';
import { ToastProvider } from '../contexts/toast-context';
import { I18nProvider } from '../../i18n';
import ConsoleShell from './ConsoleShell';

export default function ConsoleLayout(props: RouteSectionProps) {
  return (
    <div class="min-h-screen">
      <I18nProvider>
        <ToastProvider>
          <ConsoleShell>
            {props.children}
          </ConsoleShell>
        </ToastProvider>
      </I18nProvider>
    </div>
  );
}
