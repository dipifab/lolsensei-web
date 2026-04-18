#!/usr/bin/env bash
# WP20 i18n coverage guard (REQ-NF-020-001).
# Fails (exit 1) if any WP20 required key is missing in any of the 8 locales,
# or if any banned marketing claim slips back into src/.
#
# Usage: bash scripts/check-i18n-wp20.sh
#        (wired into package.json via ``pnpm check-i18n`` if desired)

set -uo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

LANGS=(en it es fr de pt-br ko zh)
KEYS=(
  hero.cta.download
  features.scaling
  features.framing.preMatchEducational
  trust.perfImpact
  trust.perfImpact.note
  privacy.dataCollect.lol.description
  privacy.cookies.title
  privacy.cookies.body
  privacy.howWeUse.intro
  privacy.howWeUse.auth
  privacy.howWeUse.ai
  privacy.howWeUse.payment
  privacy.howWeUse.analytics
  privacy.howWeUse.riotId
  privacy.transfer.title
  privacy.transfer.scc.intro
  privacy.transfer.scc.stripe
  privacy.transfer.scc.cloudflare
  privacy.transfer.scc.anthropic
  privacy.transfer.scc.note
  terms.s5.waiver.title
  terms.s5.waiver.body
  terms.s5.waiver.optIn
  terms.s5.waiver.optOut
  checkout.waiver.fieldLabel
  checkout.waiver.placeholder
  checkout.waiver.optionWaive
  checkout.waiver.optionPreserve
  checkout.waiver.consentTextSnapshot
  pricing.footer.vat
)

missing=0
for lang in "${LANGS[@]}"; do
  file="src/i18n/${lang}.ts"
  if [[ ! -f "$file" ]]; then
    echo "MISSING FILE: $file"
    missing=$((missing + 1))
    continue
  fi
  for key in "${KEYS[@]}"; do
    if ! grep -q "\"$key\"\|'$key'" "$file"; then
      echo "MISSING: $lang $key"
      missing=$((missing + 1))
    fi
  done
done

# Banned tokens: must not appear in i18n source or data content files.
BANNED_PATTERNS=(
  "0 FPS"
  "Zero performance"
  "0 Impact"
  "zeroFps"
  "power spike"
)

banned=0
for pat in "${BANNED_PATTERNS[@]}"; do
  hits=$(grep -rn "$pat" src/i18n/ src/data/content.ts 2>/dev/null || true)
  if [[ -n "$hits" ]]; then
    echo "BANNED TOKEN: $pat"
    echo "$hits"
    banned=$((banned + 1))
  fi
done

total=$((missing + banned))
if [[ "$total" -ne 0 ]]; then
  echo "FAIL: $missing missing keys, $banned banned tokens"
  exit 1
fi

echo "OK: all ${#KEYS[@]} WP20 keys present in ${#LANGS[@]} locales, no banned tokens."
exit 0
