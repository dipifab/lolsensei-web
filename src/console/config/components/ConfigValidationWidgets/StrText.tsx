// StrRule widget — text input con feedback live regex + max_length.
//
// Pure logic estratta in `scalar-helpers.ts`:
// - `evaluateStrRegex(value, rule)` → status no-regex / invalid-pattern /
//   match / no-match (no throw su regex malformata)
// - `truncateToMaxLength(value, rule)` per troncamento input
import type { JSX } from 'solid-js';
import { createMemo, Show } from 'solid-js';
import type { StrRule } from '../../lib/types';
import ConsoleInput from '../../../components/ConsoleInput';
import { evaluateStrRegex, truncateToMaxLength } from './scalar-helpers';

interface StrTextProps {
  rule: StrRule;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
}

export default function StrText(props: StrTextProps): JSX.Element {
  const maxLength = (): number => props.rule.max_length ?? 500;

  const regexState = createMemo(() => evaluateStrRegex(props.value, props.rule));

  function handleInput(raw: string): void {
    props.onChange(truncateToMaxLength(raw, props.rule));
  }

  return (
    <div class="space-y-1.5">
      <ConsoleInput
        type="text"
        value={props.value}
        onInput={handleInput}
        disabled={props.disabled}
        error={props.error}
      />

      <div class="flex items-center justify-between gap-2 text-xs">
        <Show when={regexState().status !== 'no-regex'}>
          <span
            classList={{
              'text-success': regexState().status === 'match',
              'text-error':
                regexState().status === 'no-match'
                || regexState().status === 'invalid-pattern',
              'text-outline': false,
            }}
          >
            <Show
              when={regexState().status === 'invalid-pattern'}
              fallback={
                <>
                  Pattern:
                  {' '}
                  <code class="font-mono">{regexState().pattern}</code>
                  {' '}
                  {regexState().status === 'match' ? '✓ matches' : '✗ no match'}
                </>
              }
            >
              [invalid regex pattern]
            </Show>
          </span>
        </Show>

        <span class="text-outline ml-auto">
          {props.value.length}/{maxLength()}
        </span>
      </div>
    </div>
  );
}
