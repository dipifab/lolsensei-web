// ConfigEnvOverrideBadge — 🟡 ENV con tooltip env_var_name.
//
// REQ-NF-CONFIG-005 AC.2/3: badge visibile per chiavi con env_override_active=true.
// Color-only conveying evitato: icona + testo (a11y, ux-flows §7).
import type { JSX } from 'solid-js';

interface ConfigEnvOverrideBadgeProps {
  envVarName: string | null;
  /** Optional: valore env attualmente attivo (per tooltip esplicativo). */
  envVarValue?: string | null;
}

export default function ConfigEnvOverrideBadge(
  props: ConfigEnvOverrideBadgeProps,
): JSX.Element {
  const tooltip = (): string => {
    const name = props.envVarName ?? 'unknown';
    if (props.envVarValue) {
      return `Shadowed by env var ${name}=${props.envVarValue}`;
    }
    return `Shadowed by env var ${name}`;
  };

  return (
    <span
      class="inline-flex items-center gap-1 rounded-full bg-warning/15 text-warning px-2 py-0.5 text-xs font-semibold"
      title={tooltip()}
      aria-label={tooltip()}
    >
      <span aria-hidden="true">🟡</span>
      <span>ENV</span>
    </span>
  );
}
