// ListRule widget — JSON editor o tag input.
//
// Render dipende da `ui_widget`:
// - "json": textarea con JSON pretty + bottone Format/Apply client-side
// - "tags": pillole rimovibili + add input (solo per item_type=str semplice)
//
// Pure logic estratta in `list-helpers.ts`:
// - tryParseJsonArray, coerceItem, validateListAgainstRule
import type { JSX } from 'solid-js';
import { createMemo, createSignal, For, Show } from 'solid-js';
import type { ListRule } from '../../lib/types';
import {
  coerceItem,
  tryParseJsonArray,
  validateListAgainstRule,
} from './list-helpers';

interface ListJsonOrTagsProps {
  rule: ListRule;
  value: unknown[];
  onChange: (value: unknown[]) => void;
  error?: string;
  disabled?: boolean;
}

export default function ListJsonOrTags(props: ListJsonOrTagsProps): JSX.Element {
  const widget = (): 'json' | 'tags' => props.rule.ui_widget ?? 'json';
  const itemType = (): 'str' | 'int' | 'float' => props.rule.item_type ?? 'str';
  const minItems = (): number => props.rule.min_items ?? 0;
  const maxItems = (): number => props.rule.max_items ?? 50;

  // === JSON tab state ===
  const [draftJson, setDraftJson] = createSignal<string>(
    JSON.stringify(props.value, null, 2),
  );
  const [parseErr, setParseErr] = createSignal<string | null>(null);

  function applyJson(): void {
    const r = tryParseJsonArray(draftJson());
    if (!r.ok) {
      setParseErr(r.error ?? 'Invalid input');
      return;
    }
    const validation = validateListAgainstRule(r.parsed!, props.rule);
    if (!validation.ok) {
      setParseErr(validation.error ?? 'Invalid list');
      return;
    }
    setParseErr(null);
    props.onChange(validation.coerced!);
  }

  function formatJson(): void {
    const r = tryParseJsonArray(draftJson());
    if (!r.ok) {
      setParseErr(r.error ?? 'Invalid input');
      return;
    }
    setDraftJson(JSON.stringify(r.parsed, null, 2));
    setParseErr(null);
  }

  // === Tags tab state ===
  const [tagInput, setTagInput] = createSignal('');
  const tags = createMemo<string[]>(() =>
    props.value.map((v) => (typeof v === 'string' ? v : JSON.stringify(v))),
  );

  function addTag(): void {
    const t = tagInput().trim();
    if (!t) return;
    if (props.value.length >= maxItems()) return;
    const c = coerceItem(t, itemType());
    if (c === null) return;
    props.onChange([...props.value, c]);
    setTagInput('');
  }

  function removeTag(idx: number): void {
    if (props.value.length <= minItems()) return;
    const next = props.value.slice(0, idx).concat(props.value.slice(idx + 1));
    props.onChange(next);
  }

  return (
    <div class="space-y-2">
      <Show
        when={widget() === 'tags' && itemType() === 'str'}
        fallback={
          <div class="space-y-2">
            <textarea
              class="w-full font-mono text-sm rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-on-surface focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
              rows={6}
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
          </div>
        }
      >
        <div class="flex flex-wrap gap-2">
          <For each={tags()}>
            {(tag, idx) => (
              <span class="inline-flex items-center gap-1 rounded-full bg-surface-container-highest px-2 py-1 text-xs">
                <span class="font-mono">{tag}</span>
                <button
                  type="button"
                  class="text-outline hover:text-error disabled:opacity-50"
                  onClick={() => removeTag(idx())}
                  disabled={props.disabled || props.value.length <= minItems()}
                  aria-label={`remove ${tag}`}
                >
                  ✕
                </button>
              </span>
            )}
          </For>
          <input
            type="text"
            class="rounded-md border border-outline-variant bg-surface-container-lowest px-2 py-1 text-xs"
            placeholder="add..."
            value={tagInput()}
            disabled={props.disabled || props.value.length >= maxItems()}
            onInput={(e) => setTagInput(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addTag();
              }
            }}
          />
        </div>
      </Show>

      <p class="text-xs text-outline">
        Items: {props.value.length} (min {minItems()}, max {maxItems()}, type {itemType()})
      </p>

      <Show when={props.error}>
        <p class="text-xs text-error">{props.error}</p>
      </Show>
    </div>
  );
}
