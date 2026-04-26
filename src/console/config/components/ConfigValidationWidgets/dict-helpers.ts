// Pure helpers per DictJson — testabili senza DOM.

export interface DictParseResult {
  ok: boolean;
  error?: string;
  parsed?: Record<string, unknown>;
}

export function tryParseJsonObject(raw: string): DictParseResult {
  if (!raw.trim()) return { ok: false, error: 'Empty input' };
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Invalid JSON' };
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    return { ok: false, error: 'Expected JSON object' };
  }
  return { ok: true, parsed: parsed as Record<string, unknown> };
}
