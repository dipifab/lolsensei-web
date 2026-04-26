// ConfigRequiresRestartBadge — 🟠 RST con tooltip.
//
// REQ-F-CONFIG-002 AC.11: badge per chiavi con requires_restart=true.
// Tooltip esplicito: la modifica non avra effetto fino al prossimo redeploy.
import type { JSX } from 'solid-js';

const TOOLTIP = 'Requires container restart to apply changes';

export default function ConfigRequiresRestartBadge(): JSX.Element {
  return (
    <span
      class="inline-flex items-center gap-1 rounded-full bg-tertiary/15 text-tertiary px-2 py-0.5 text-xs font-semibold"
      title={TOOLTIP}
      aria-label={TOOLTIP}
    >
      <span aria-hidden="true">🟠</span>
      <span>RST</span>
    </span>
  );
}
