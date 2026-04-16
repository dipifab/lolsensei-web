#!/usr/bin/env bash
# scripts/check-competitors.sh
# Quality gate REQ-NF-017-001: zero menzioni competitor in src/ e public/.
set -euo pipefail
PATTERN='op\.gg|blitz\.gg|mobalytics|porofessor|u\.gg'
if grep -riE "$PATTERN" src/ public/ 2>/dev/null; then
  echo "FAIL: competitor mentions found in src/ or public/" >&2
  exit 1
fi
echo "OK: no competitor mentions in src/ or public/"
