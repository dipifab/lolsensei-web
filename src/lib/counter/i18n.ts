// WPCP Phase 5 (CR-063 / WPCP-025) — Counter-picker i18n helper.
//
// Successor of the temporary `i18n-fallback.ts` used during Phase 3-4. The
// fallback is no longer needed: all `counter.*` keys now live officially in
// `src/i18n/{en,it}.ts` (and the other 6 locales receive an EN replica so
// the parity check stays green; runtime they redirect 308 to /en/ via
// `src/middleware.ts` per ADR-034).
//
// `useCounterI18n()` wraps the project i18n provider with a small
// interpolation helper that mirrors the convention used elsewhere in the
// repo (e.g. `[lang]/champion/[champion]/[role]/guide.tsx`):
//
//   t('foo.bar.baz_template')               -> 'Foo {name} bar'
//   label('foo.bar.baz_template', { name }) -> 'Foo Aatrox bar'
//
// Returns `key` itself when the key is missing in both the current locale
// and EN — same graceful-degrade contract as the underlying provider, so a
// missing key surfaces as the literal token (highly visible to QA, no
// crash). Interpolation is single-brace `{var}` to match the translation
// strings shipped in the locale files.
//
// Provider absence: when invoked outside an `<I18nProvider>` (e.g. unit
// tests that render a single component without app shell), `useI18n()`
// throws by contract. We catch that to degrade to a key-passthrough so the
// existing component test suite (which renders components without provider)
// keeps working. Tests that need real translations can opt-in by rendering
// inside a provider.

import { useI18n } from '../../i18n';

const KEY_PASSTHROUGH = (key: string): string => key;

/**
 * Returns a `label(key, vars?)` function bound to the current i18n provider,
 * or to a key-passthrough fallback when no provider is available (unit
 * tests, isolated stories).
 *
 * Must be called from inside a Solid component (depends on Solid context).
 */
export function useCounterI18n(): {
  label: (key: string, vars?: Record<string, string>) => string;
} {
  let t: (key: string) => string;
  try {
    t = useI18n().t;
  } catch {
    // No provider in scope (typical for unit tests). Fall back to identity
    // so render still produces stable, machine-checkable output.
    t = KEY_PASSTHROUGH;
  }
  const label = (key: string, vars?: Record<string, string>): string => {
    const tpl = t(key);
    if (!vars) return tpl;
    let out = tpl;
    for (const [k, v] of Object.entries(vars)) {
      out = out.split(`{${k}}`).join(v);
    }
    return out;
  };
  return { label };
}
