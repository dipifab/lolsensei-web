// Factory — sceglie il widget corretto in base a `rule.value_type`.
//
// Il chiamante (ConfigEditForm di Phase 6) passa la rule discriminata e il
// valore corrente; la factory delega al componente specifico.
//
// Edge case: se `rule` e' null (nessuna validation_rules nel DB), la
// factory cade su un widget StrText con max_length=500 default — comportamento
// coerente con il pattern Pydantic StrRule fallback.
import type { JSX } from 'solid-js';
import { Match, Switch } from 'solid-js';
import type {
  ConfigValidationRule,
  ConfigValueType,
  IntRule,
  FloatRule,
  StrRule,
  BoolRule,
  EnumRule,
  ListRule,
  DictRule,
} from '../../lib/types';
import IntSlider from './IntSlider';
import FloatNumber from './FloatNumber';
import StrText from './StrText';
import BoolToggle from './BoolToggle';
import EnumDropdown from './EnumDropdown';
import ListJsonOrTags from './ListJsonOrTags';
import DictJson from './DictJson';

interface ConfigValidationWidgetProps {
  rule: ConfigValidationRule | null;
  /**
   * Necessario per il fallback quando `rule === null`: la factory deve
   * comunque sapere che widget renderizzare in base al `value_type`
   * della chiave (esposto su AppConfigItem).
   */
  fallbackValueType: ConfigValueType;
  value: unknown;
  onChange: (value: unknown) => void;
  error?: string;
  disabled?: boolean;
}

const DEFAULT_STR_RULE: StrRule = {
  value_type: 'str',
  max_length: 500,
  ui_widget: 'text',
};

export default function ConfigValidationWidget(
  props: ConfigValidationWidgetProps,
): JSX.Element {
  // Tipo effettivo: usa la rule se presente, altrimenti fallback al
  // value_type della chiave per scegliere il widget di base.
  const effectiveType = (): ConfigValueType =>
    props.rule?.value_type ?? props.fallbackValueType;

  return (
    <Switch
      fallback={
        <StrText
          rule={DEFAULT_STR_RULE}
          value={String(props.value ?? '')}
          onChange={(v) => props.onChange(v)}
          error={props.error}
          disabled={props.disabled}
        />
      }
    >
      <Match when={effectiveType() === 'int'}>
        <IntSlider
          rule={(props.rule as IntRule) ?? { value_type: 'int' }}
          value={typeof props.value === 'number' ? props.value : 0}
          onChange={(v) => props.onChange(v)}
          error={props.error}
          disabled={props.disabled}
        />
      </Match>

      <Match when={effectiveType() === 'float'}>
        <FloatNumber
          rule={(props.rule as FloatRule) ?? { value_type: 'float' }}
          value={typeof props.value === 'number' ? props.value : 0}
          onChange={(v) => props.onChange(v)}
          error={props.error}
          disabled={props.disabled}
        />
      </Match>

      <Match when={effectiveType() === 'str'}>
        <StrText
          rule={(props.rule as StrRule) ?? DEFAULT_STR_RULE}
          value={typeof props.value === 'string' ? props.value : String(props.value ?? '')}
          onChange={(v) => props.onChange(v)}
          error={props.error}
          disabled={props.disabled}
        />
      </Match>

      <Match when={effectiveType() === 'bool'}>
        <BoolToggle
          rule={(props.rule as BoolRule) ?? { value_type: 'bool' }}
          value={Boolean(props.value)}
          onChange={(v) => props.onChange(v)}
          error={props.error}
          disabled={props.disabled}
        />
      </Match>

      <Match when={effectiveType() === 'enum'}>
        <EnumDropdown
          rule={(props.rule as EnumRule) ?? { value_type: 'enum', values: [] }}
          value={typeof props.value === 'string' ? props.value : String(props.value ?? '')}
          onChange={(v) => props.onChange(v)}
          error={props.error}
          disabled={props.disabled}
        />
      </Match>

      <Match when={effectiveType() === 'list'}>
        <ListJsonOrTags
          rule={(props.rule as ListRule) ?? { value_type: 'list' }}
          value={Array.isArray(props.value) ? props.value : []}
          onChange={(v) => props.onChange(v)}
          error={props.error}
          disabled={props.disabled}
        />
      </Match>

      <Match when={effectiveType() === 'dict'}>
        <DictJson
          rule={(props.rule as DictRule) ?? { value_type: 'dict' }}
          value={
            typeof props.value === 'object' && props.value !== null && !Array.isArray(props.value)
              ? (props.value as Record<string, unknown>)
              : {}
          }
          onChange={(v) => props.onChange(v)}
          error={props.error}
          disabled={props.disabled}
        />
      </Match>
    </Switch>
  );
}

// Re-export widget singoli per consumer specifici (es. test, custom UI).
export {
  IntSlider,
  FloatNumber,
  StrText,
  BoolToggle,
  EnumDropdown,
  ListJsonOrTags,
  DictJson,
};
