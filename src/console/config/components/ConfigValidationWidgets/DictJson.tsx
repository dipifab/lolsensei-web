// DictRule widget — JSON object editor.
//
// Schema validation profonda non implementata MVP (rule.schema parsing
// e' deferred a P2): la UI valida solo che il JSON sia un object e non
// un array/scalar. La validazione strict via JSONSchema avviene server-side.
//
// Pure logic estratta in `dict-helpers.ts`.
import type { JSX } from 'solid-js';
import { createSignal, Show } from 'solid-js';
import type { DictRule } from '../../lib/types';
import { tryParseJsonObject } from './dict-helpers';

interface DictJsonProps {
  rule: DictRule;
  value: Record<string, unknown>;
  onChange: (value: Record<string, unknown>) => void;
  error?: string;
  disabled?: boolean;
}

export default function DictJson(props: DictJsonProps): JSX.Element {
  // `rule` e' parte della signature pubblica della factory anche se la
  // versione MVP non legge schema/ui_widget — placeholder per validazione P2.
  const _unusedRule = (): DictRule => props.rule;
  void _unusedRule;

  const [draftJson, setDraftJson] = createSignal(
    JSON.stringify(props.value, null, 2),
  );
  const [parseErr, setParseErr] = createSignal<string | null>(null);

  function applyJson(): void {
    const r = tryParseJsonObject(draftJson());
    if (!r.ok) {
      setParseErr(r.error ?? 'Invalid input');
      return;
    }
    setParseErr(null);
    props.onChange(r.parsed!);
  }

  function formatJson(): void {
    const r = tryParseJsonObject(draftJson());
    if (!r.ok) {
      setParseErr(r.error ?? 'Invalid input');
      return;
    }
    setDraftJson(JSON.stringify(r.parsed, null, 2));
    setParseErr(null);
  }

  return (
    <div class="space-y-2">
      <textarea
        class="w-full font-mono text-sm rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-on-surface focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
        rows={8}
        value={draftJson()}
        disabled={props.disabled}
        onInput={(e) => setDraftJson(e.currentTarget.value)}
        onBlur={applyJson}
      />
      <div class="flex gap-2">
        <button
          type="button"
          class="rounded-md border border-outline-variant px-2 py-1 text-xs hover:bg-surface-container disabled:opacity-50"
          onClick={formatJson}
          disabled={props.disabled}
        >
          Format
        </button>
        <button
          type="button"
          class="rounded-md border border-outline-variant px-2 py-1 text-xs hover:bg-surface-container disabled:opacity-50"
          onClick={applyJson}
          disabled={props.disabled}
        >
          Apply
        </button>
      </div>

      <Show when={parseErr()}>
        <p class="text-xs text-error">{parseErr()}</p>
      </Show>

      <Show when={props.error}>
        <p class="text-xs text-error">{props.error}</p>
      </Show>
    </div>
  );
}
