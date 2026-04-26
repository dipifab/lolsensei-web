#!/usr/bin/env bash
# WP30 TASK-WP30-F4-07 — Smoke test post-deploy production WP30 routes.
#
# Verifica:
#   - Security headers edge-injected (HSTS, Referrer-Policy, Permissions-Policy)
#   - CSP middleware-injected con almeno un hash sha256-
#   - X-Robots-Tag noindex su 404 summoner
#   - HTTP 404 su summoner inesistente
#   - HTTP 200 su tier list
#   - Riot disclaimer presente nel body tier list
#   - robots.txt allow per WP30 routes
#
# Pattern: pari a `smoke-prod-wp19.sh` (file/funzione `check`/`check_header`).
#
# Skip-on-localdev: gli header `_headers` non sono replicati da `wrangler dev`.
# Lo script auto-rileva via `PROD_HOST` (default https://www.lolsensei.com) e
# segnala uno skip esplicito quando il target e' localhost/127.0.0.1.
#
# Esecuzione:
#   bash scripts/smoke-prod-wp30.sh                    # default prod
#   PROD_HOST=https://staging.lolsensei.com ./...      # staging
#
# Exit 1 al primo fallimento. Output `[PASS]/[FAIL]` per parsing CI.

set -euo pipefail

HOST="${PROD_HOST:-https://www.lolsensei.com}"
PASS=0
FAIL=0

# ---------------------------------------------------------------------------
# Skip on localdev (wrangler dev does not replicate edge `_headers`)
# ---------------------------------------------------------------------------

case "$HOST" in
  http://127.0.0.1:*|http://localhost:*|http://127.0.0.1|http://localhost)
    echo "[smoke-prod-wp30] SKIP — \`wrangler dev\` does not replicate edge headers."
    echo "  HOST=$HOST"
    echo "  Run against production / staging URL to validate full pipeline."
    exit 0
    ;;
esac

check_status() {
  local label="$1"
  local url="$2"
  local expected="$3"
  local actual
  actual=$(curl -sI -o /dev/null -w "%{http_code}" "$url")
  if [ "$actual" = "$expected" ]; then
    echo "  [PASS] $label ($actual)"
    PASS=$((PASS + 1))
  else
    echo "  [FAIL] $label (expected $expected, got $actual) — $url"
    FAIL=$((FAIL + 1))
  fi
}

check_header() {
  local label="$1"
  local url="$2"
  local header="$3"
  local pattern="$4"
  local value
  value=$(curl -sI "$url" | grep -i "^$header:" | head -1 | tr -d '\r')
  if echo "$value" | grep -qi -- "$pattern"; then
    echo "  [PASS] $label"
    PASS=$((PASS + 1))
  else
    echo "  [FAIL] $label (header missing/mismatch: '$value') — $url"
    FAIL=$((FAIL + 1))
  fi
}

check_body_contains() {
  local label="$1"
  local url="$2"
  local needle="$3"
  local body
  body=$(curl -s "$url")
  if echo "$body" | grep -q -- "$needle"; then
    echo "  [PASS] $label"
    PASS=$((PASS + 1))
  else
    echo "  [FAIL] $label (substring missing) — $url"
    FAIL=$((FAIL + 1))
  fi
}

echo "=== WP30 — security headers ==="
# HSTS / Referrer-Policy / Permissions-Policy: edge-injected (CF `_headers`).
check_header "HSTS"               "$HOST/en/tier-list" "strict-transport-security" "max-age"
check_header "Referrer-Policy"    "$HOST/en/tier-list" "referrer-policy"           "strict-origin"
check_header "Permissions-Policy" "$HOST/en/tier-list" "permissions-policy"        "camera"

# CSP: middleware-injected (Worker), contiene script-src + almeno uno sha256-.
check_header "CSP enforce header" "$HOST/en/tier-list" "content-security-policy" "script-src"
check_header "CSP includes sha256-* hash" "$HOST/en/tier-list" "content-security-policy" "sha256-"

echo "=== WP30 — tier list route ==="
check_status "GET /en/tier-list -> 200"   "$HOST/en/tier-list" "200"
check_status "GET /it/tier-list -> 200"   "$HOST/it/tier-list" "200"

# Riot disclaimer (REQ-NF-030-010)
check_body_contains "tier list EN body contains Riot trademark notice" "$HOST/en/tier-list" "Riot Games"
check_body_contains "tier list IT body contains Riot trademark notice" "$HOST/it/tier-list" "Riot Games"

echo "=== WP30 — summoner 404 ==="
# Region invalid -> 404 + noindex
check_status "GET /en/summoner/xx99/anyhandle-tag -> 404" "$HOST/en/summoner/xx99/anyhandle-tag" "404"
check_header "X-Robots-Tag noindex on region-invalid" "$HOST/en/summoner/xx99/anyhandle-tag" "x-robots-tag" "noindex"

# Handle malformed -> 404 + noindex
check_status "GET /en/summoner/euw1/handlewithoutdash -> 404" "$HOST/en/summoner/euw1/handlewithoutdash" "404"
check_header "X-Robots-Tag noindex on handle-malformed" "$HOST/en/summoner/euw1/handlewithoutdash" "x-robots-tag" "noindex"

echo "=== WP30 — robots.txt allow rules ==="
check_status "GET /robots.txt -> 200" "$HOST/robots.txt" "200"
check_body_contains "robots.txt allows summoner pages"  "$HOST/robots.txt" "/*/summoner/*"
check_body_contains "robots.txt allows tier-list"       "$HOST/robots.txt" "/*/tier-list"

echo
echo "=== WP30 smoke summary: $PASS pass, $FAIL fail ==="
if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
exit 0
