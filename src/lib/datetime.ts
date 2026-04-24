// Relative time formatter using Intl.RelativeTimeFormat.
// Used by community notification items (runbook F4-015/016).

export function formatRelativeTime(iso: string, lang: string): string {
  const diffSec = (Date.now() - new Date(iso).getTime()) / 1000;
  const fmt = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });
  if (diffSec < 60) return fmt.format(-Math.round(diffSec), "second");
  if (diffSec < 3600) return fmt.format(-Math.round(diffSec / 60), "minute");
  if (diffSec < 86400) return fmt.format(-Math.round(diffSec / 3600), "hour");
  return fmt.format(-Math.round(diffSec / 86400), "day");
}

// Replace {var} placeholders in a flat-i18n string with the given vars.
// Values are coerced via String() and left untouched (caller is responsible
// for escaping). Unknown keys are left as-is so missing vars are visible in
// translation audits rather than silently dropped.
export function formatTemplate(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    if (Object.prototype.hasOwnProperty.call(vars, key)) {
      return String(vars[key]);
    }
    return match;
  });
}
