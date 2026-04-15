import { For } from 'solid-js';
import { useI18n } from '../i18n';

interface ChangelogEntryProps {
  version: string;
  date: string;
  changes: string[];
}

const LOCALE_INTL_MAP: Record<string, string> = {
  en: 'en-US',
  it: 'it-IT',
  ko: 'ko-KR',
  zh: 'zh-CN',
  'pt-br': 'pt-BR',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
};

export default function ChangelogEntry(props: ChangelogEntryProps) {
  const { locale } = useI18n();

  const intlLocale = () => LOCALE_INTL_MAP[locale()] || 'en-US';

  const formattedDate = () => {
    const d = new Date(props.date + 'T00:00:00');
    return d.toLocaleDateString(intlLocale(), { month: 'long', year: 'numeric' });
  };

  return (
    <article class="glass-panel rounded-xl border border-outline-variant/10 p-6">
      <div class="flex items-baseline justify-between gap-4 mb-3">
        <h3 class="text-lg font-headline font-bold text-on-surface uppercase tracking-wide">
          v{props.version}
        </h3>
        <span class="text-sm text-on-surface-variant">{formattedDate()}</span>
      </div>
      <ul class="space-y-1 text-on-surface-variant text-sm list-disc list-inside">
        <For each={props.changes}>
          {(change) => <li>{change}</li>}
        </For>
      </ul>
    </article>
  );
}
