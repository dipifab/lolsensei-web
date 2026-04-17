#!/usr/bin/env bash
# scripts/check-competitors.sh
# Quality gate REQ-NF-017-001 / CR-010: zero competitor mentions in src/ and public/.
# Blocklist data-driven: edit scripts/competitor-blocklist.txt to add/remove patterns.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BLOCKLIST="$SCRIPT_DIR/competitor-blocklist.txt"

if [[ ! -f "$BLOCKLIST" ]]; then
  echo "FAIL: blocklist not found at $BLOCKLIST" >&2
  exit 2
fi

PATTERN=$(grep -vE '^\s*(#|$)' "$BLOCKLIST" | paste -sd '|' -)
if [[ -z "$PATTERN" ]]; then
  echo "FAIL: blocklist is empty" >&2
  exit 2
fi

# Search src/ and public/. Exclude _headers and _redirects (server config: contain
# path strings like /blog/lol-sensei-vs-opgg that are not user-facing brand mentions
# but governance metadata required for noindex enforcement).
if grep -riE \
    --exclude=_headers \
    --exclude=_redirects \
    --exclude-dir=node_modules \
    "$PATTERN" src/ public/ 2>/dev/null; then
  echo "FAIL: competitor mentions found in src/ or public/" >&2
  exit 1
fi

echo "OK: no competitor mentions in src/ or public/"
