// ConfigAuditEntry — riga audit log con diff hybrid.
//
// REQ-F-CONFIG-002 AC.8/9. Render:
// - Header: #id, key, version_before -> version_after, source badge,
//   changed_at relative + ISO tooltip, changed_by_email
// - Diff hybrid (formatDiff): scalar inline, list/dict side-by-side
// - Reason text
// - Optional rollback button (callback prop)
//
// Source badge color mapping (ux-flows §3.3):
// - admin_ui (blu), cli (grigio), seed (verde), migration (giallo),
//   api (viola).
import type { JSX } from 'solid-js';
import { Show } from 'solid-js';
import type {
  AppConfigAuditEntry as AppConfigAuditEntryType,
  ConfigSource,
  ConfigValueType,
} from '../lib/types';
import { formatRelativeTime } from '../lib/format-relative-time';
import { formatDiff } from '../lib/diff-formatter';

interface ConfigAuditEntryProps {
  entry: AppConfigAuditEntryType;
  /**
   * Se fornito, mostra un bottone "Rollback" che chiama questa callback
   * con l'entry corrente. Il chiamante apre la dialog di conferma e
   * gestisce la PATCH idempotent.
   */
  onRollback?: (entry: AppConfigAuditEntryType) => void;
}

const SOURCE_CLASS: Record<ConfigSource, string> = {
  admin_ui: 'bg-primary/15 text-primary',
  cli: 'bg-surface-container-highest text-outline',
  seed: 'bg-success/15 text-success',
  migration: 'bg-warning/15 text-warning',
  api: 'bg-secondary/15 text-secondary',
};

function sourceClass(source: ConfigSource): string {
  return SOURCE_CLASS[source] ?? 'bg-surface-container-highest text-outline';
}

export default function ConfigAuditEntry(
  props: ConfigAuditEntryProps,
): JSX.Element {
  const diff = (): ReturnType<typeof formatDiff> =>
    formatDiff(
      props.entry.old_value,
      props.entry.new_value,
      props.entry.value_type as ConfigValueType,
    );

  return (
    <article class="space-y-2 p-4 border border-outline-variant rounded-lg">
      <header class="flex flex-wrap items-center gap-2 text-sm">
        <span class="text-on-surface-variant font-mono">
          #{props.entry.id}
        </span>
        <span class="font-semibold text-on-surface font-mono">
          {props.entry.key}
        </span>
        <span class="text-on-surface-variant">
          v{props.entry.version_before ?? '∅'} → v{props.entry.version_after}
        </span>
        <span
          class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold"
          classList={{ [sourceClass(props.entry.source)]: true }}
        >
          {props.entry.source}
        </span>
        <span
          class="text-xs text-on-surface-variant ml-auto"
          title={props.entry.changed_at}
        >
          {formatRelativeTime(props.entry.changed_at)}
          <Show when={props.entry.changed_by_email}>
            {' '}by {props.entry.changed_by_email}
          </Show>
        </span>
      </header>

      <Show
        when={diff().mode === 'inline'}
        fallback={
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div>
              <p class="text-on-surface-variant mb-1">OLD</p>
              <pre class="font-mono bg-surface-container-low p-2 rounded overflow-auto">
                {diff().oldText}
              </pre>
            </div>
            <div>
              <p class="text-on-surface-variant mb-1">NEW</p>
              <pre class="font-mono bg-surface-container-low p-2 rounded overflow-auto">
                {diff().newText}
              </pre>
            </div>
          </div>
        }
      >
        <p class="text-sm font-mono text-on-surface">{diff().inline}</p>
      </Show>

      <Show when={props.entry.change_reason}>
        <p class="text-xs text-on-surface-variant italic">
          Reason: "{props.entry.change_reason}"
        </p>
      </Show>

      <Show when={props.onRollback}>
        <div class="flex justify-end">
          <button
            type="button"
            class="rounded-md border border-outline-variant px-3 py-1 text-xs font-semibold hover:bg-surface-container disabled:opacity-50"
            onClick={() => props.onRollback?.(props.entry)}
          >
            Rollback to v{props.entry.version_before ?? '?'}
          </button>
        </div>
      </Show>
    </article>
  );
}
