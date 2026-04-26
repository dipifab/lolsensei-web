#!/usr/bin/env bash
# scripts/check-competitors.sh
# Quality gate REQ-NF-017-001 / CR-010 / WP35 REQ-NF-035-008: zero competitor
# mentions in src/ and public/.
# Blocklist data-driven: edit scripts/competitor-blocklist.txt to add/remove patterns.
#
# WP35 extension (DEC-OP-018):
#   - excludes content/ (raw Markdown handled by content-lint.mjs);
#   - excludes src/data/champions/ (build-time generated TS arrays —
#     content-lint already validated their source).
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

# Search src/ and public/. Exclude:
#   - _headers / _redirects (server config: governance metadata path strings);
#   - node_modules (vendor dep);
#   - content/* (Markdown source — checked by content-lint.mjs);
#   - src/data/champions/ (build-time generated from content/, redundant scan).
if grep -riE \
    --exclude=_headers \
    --exclude=_redirects \
    --exclude-dir=node_modules \
    --exclude-dir=content \
    --exclude-dir=champions \
    "$PATTERN" src/ public/ 2>/dev/null; then
  echo "FAIL: competitor mentions found in src/ or public/" >&2
  exit 1
fi

echo "OK: no competitor mentions in src/ or public/"
