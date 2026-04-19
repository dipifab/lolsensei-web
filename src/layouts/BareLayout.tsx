import type { JSX } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';
import { useLocation } from '@solidjs/router';

interface Props {
  variant: '404' | 'checkout';
  children?: JSX.Element;
}

// BareLayout vive fuori da I18nProvider (catch-all 404). Usiamo un mini
// dizionario inline per il skip-link per evitare EN hardcoded (FIND-03).
const SKIP_TO_MAIN: Record<string, string> = {
  en: 'Skip to main content',
  it: 'Vai al contenuto principale',
  es: 'Saltar al contenido principal',
  fr: 'Aller au contenu principal',
  de: 'Zum Hauptinhalt springen',
  'pt-br': 'Ir para o conteúdo principal',
  ko: '본문으로 건너뛰기',
  'zh-Hans': '跳转到主要内容',
};

function detectLocaleFromPath(pathname: string): string {
  const seg = pathname.split('/')[1] ?? '';
  if (seg in SKIP_TO_MAIN) return seg;
  return 'en';
}

export default function BareLayout(props: Props & Partial<RouteSectionProps>) {
  const location = useLocation();
  const skipLabel = () => SKIP_TO_MAIN[detectLocaleFromPath(location.pathname)];

  return (
    <div class="min-h-screen flex flex-col bg-background text-on-surface">
      <a
        href="#main-content"
        class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        {skipLabel()}
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
