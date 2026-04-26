// EnumRule widget — dropdown (riuso ConsoleSelect).
import type { JSX } from 'solid-js';
import { createMemo, Show } from 'solid-js';
import type { EnumRule } from '../../lib/types';
import ConsoleSelect from '../../../components/ConsoleSelect';

interface EnumDropdownProps {
  rule: EnumRule;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
}

export default function EnumDropdown(props: EnumDropdownProps): JSX.Element {
  const options = createMemo(() =>
    props.rule.values.map((v) => ({ value: v, label: v })),
  );

  return (
    <div class="space-y-1.5">
      <ConsoleSelect
        value={props.value}
        onChange={props.onChange}
        options={options()}
        disabled={props.disabled}
        error={props.error}
      />
      <Show when={!props.error && props.rule.values.length > 0}>
        <p class="text-xs text-outline">
          {props.rule.values.length} allowed values
        </p>
      </Show>
    </div>
  );
}
