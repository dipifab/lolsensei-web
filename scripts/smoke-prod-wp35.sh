#!/usr/bin/env bash
# WP35 TASK-F5-10 — Smoke test post-deploy production WP35 routes.
#
# Verifica:
#   - Backend Leaguepedia proxy: /health, /schedule, /results, /teams (200 + JSON shape)
#   - Backend attribution embedded in payload (source/license/url Leaguepedia)
#   - X-Cache header presente sui 3 endpoint pubblici (HIT|MISS|STALE)
#   - Frontend champion guide: /en/champion/lux/guide (200 + JSON-LD Article)
#   - Frontend champion guide IT: /it/champion/lux/guide (200)
#   - Frontend esports: /en/esports (200 + footer Leaguepedia link)
#   - Frontend canonical su /guide punta a /guide self URL
#
# Skip-on-localdev: ritorna esito skip se WEB_HOST e' localhost (wrangler dev
# non vede backend prod).
#
# Esecuzione:
#   bash scripts/smoke-prod-wp35.sh
#   WEB_HOST=https://staging.lolsensei.com BACKEND_HOST=https://api.staging.lolsensei.com ./...
#
# Exit 1 al primo fallimento. Output [PASS]/[FAIL] per parsing CI.

set -euo pipefail

WEB_HOST="${WEB_HOST:-https://www.lolsensei.com}"
BACKEND_HOST="${BACKEND_HOST:-https://api.lolsensei.com}"
PASS=0
FAIL=0

case "$WEB_HOST" in
  http://127.0.0.1:*|http://localhost:*)
    echo "[smoke-prod-wp35] SKIP — wrangler dev / localhost target."
    echo "  WEB_HOST=$WEB_HOST"
    exit 0
    ;;
esac

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

check_status() {
  local label="$1"
  local url="$2"
  local expected="$3"
  local actual
  actual=$(curl -s -o /dev/null -w '%{http_code}' "$url")
  if [ "$actual" = "$expected" ]; then
    echo "[PASS] $label  $url -> $actual"
    PASS=$((PASS + 1))
  else
    echo "[FAIL] $label  $url expected=$expected actual=$actual"
    FAIL=$((FAIL + 1))
  fi
}

check_header_present() {
  local label="$1"
  local url="$2"
  local header="$3"
  local headers
  headers=$(curl -s -I "$url")
  if echo "$headers" | grep -i "^${header}:" > /dev/null; then
    echo "[PASS] $label header '${header}' presente"
    PASS=$((PASS + 1))
  else
    echo "[FAIL] $label header '${header}' MANCA su $url"
    FAIL=$((FAIL + 1))
  fi
}

check_body_contains() {
  local label="$1"
  local url="$2"
  local needle="$3"
  local body
  body=$(curl -s "$url")
  if echo "$body" | grep -q "$needle"; then
    echo "[PASS] $label body contiene '${needle}'"
    PASS=$((PASS + 1))
  else
    echo "[FAIL] $label body NON contiene '${needle}' su $url"
    FAIL=$((FAIL + 1))
  fi
}

# ---------------------------------------------------------------------------
# Backend smoke (Leaguepedia proxy)
# ---------------------------------------------------------------------------

echo "=== Backend Leaguepedia proxy (${BACKEND_HOST}) ==="

check_status "esports/health" "${BACKEND_HOST}/api/v1/public/esports/health" 200
check_status "esports/schedule" "${BACKEND_HOST}/api/v1/public/esports/schedule?league=all&days_ahead=7" 200
check_status "esports/results" "${BACKEND_HOST}/api/v1/public/esports/results?league=all&days_back=14" 200
check_status "esports/teams" "${BACKEND_HOST}/api/v1/public/esports/teams?league=all" 200

check_header_present "schedule X-Cache" "${BACKEND_HOST}/api/v1/public/esports/schedule" "X-Cache"
check_header_present "results X-Cache" "${BACKEND_HOST}/api/v1/public/esports/results" "X-Cache"
check_header_present "teams X-Cache" "${BACKEND_HOST}/api/v1/public/esports/teams" "X-Cache"
check_header_present "schedule Cache-Control" "${BACKEND_HOST}/api/v1/public/esports/schedule" "Cache-Control"

check_body_contains "schedule attribution source" "${BACKEND_HOST}/api/v1/public/esports/schedule" "Leaguepedia / Fandom"
check_body_contains "schedule attribution license" "${BACKEND_HOST}/api/v1/public/esports/schedule" "CC BY-SA 4.0"
check_body_contains "schedule attribution url" "${BACKEND_HOST}/api/v1/public/esports/schedule" "lol.fandom.com"

# ---------------------------------------------------------------------------
# Frontend smoke (champion guide + esports)
# ---------------------------------------------------------------------------

echo "=== Frontend (${WEB_HOST}) ==="

check_status "champion guide en (lux)" "${WEB_HOST}/en/champion/lux/guide" 200
check_status "champion guide it (lux)" "${WEB_HOST}/it/champion/lux/guide" 200
check_status "champion guide en (garen)" "${WEB_HOST}/en/champion/garen/guide" 200
check_status "champion guide en (lee-sin)" "${WEB_HOST}/en/champion/lee-sin/guide" 200
check_status "esports en" "${WEB_HOST}/en/esports" 200
check_status "esports it" "${WEB_HOST}/it/esports" 200

check_body_contains "lux/guide canonical self" "${WEB_HOST}/en/champion/lux/guide" 'rel="canonical" href="https://www.lolsensei.com/en/champion/lux/guide"'
check_body_contains "lux/guide JSON-LD Article" "${WEB_HOST}/en/champion/lux/guide" '"@type":"Article"'
check_body_contains "lux/guide hreflang en" "${WEB_HOST}/en/champion/lux/guide" 'hreflang="en"'
check_body_contains "lux/guide hreflang it" "${WEB_HOST}/en/champion/lux/guide" 'hreflang="it"'

check_body_contains "esports footer leaguepedia link" "${WEB_HOST}/en/esports" 'href="https://lol.fandom.com"'
check_body_contains "esports attribution section" "${WEB_HOST}/en/esports" "Leaguepedia"
check_body_contains "esports attribution license" "${WEB_HOST}/en/esports" "CC BY-SA"

# ---------------------------------------------------------------------------
# Summary
# ---------------------------------------------------------------------------

echo ""
echo "=== Summary ==="
echo "PASS=$PASS FAIL=$FAIL"

if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
exit 0
