import { For } from 'solid-js';

interface ChangelogEntryProps {
  version: string;
  date: string;
  changes: string[];
}

export default function ChangelogEntry(props: ChangelogEntryProps) {
  const formattedDate = () => {
    const d = new Date(props.date + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
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
