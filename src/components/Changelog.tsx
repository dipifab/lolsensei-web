import { For } from 'solid-js';
import { CHANGELOG_ENTRIES } from '../data/changelog';
import ChangelogEntry from './ChangelogEntry';

export default function Changelog() {
  return (
    <section id="changelog" class="py-12 md:py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold tracking-tight text-center uppercase mb-16">
          Release Log
        </h2>
        <div class="flex flex-col gap-4 max-w-3xl mx-auto">
          <For each={CHANGELOG_ENTRIES}>
            {(entry) => (
              <ChangelogEntry
                version={entry.version}
                date={entry.date}
                changes={entry.changes}
              />
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
