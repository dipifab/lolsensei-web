#!/usr/bin/env bash
# WP21 — CLR-213 — scansione bundle prod per leak di stringhe sensibili
# nel main entry chunk (quello referenziato da index.html).
#
# Pattern sensibili (match → FAIL):
#   - admin_key OUTSIDE removeItem (credenziale legacy; removeItem e' one-release CLR-211)
#   - X-Admin-Key / ADMIN_API_KEY (credenziali legacy)
#   - KPICard (widget analytics privati)
#   - provider_key / api_key / apiKey (secrets AI provider)
#   - subscription_plan_id / plan_price_cents (dettagli pricing admin-only)
#   - fetchAllowlist / AllowlistPage / PromotionsPage / DashboardPage
#     / AllowlistAddDialog / RevokeConfirmDialog (component names console)
#
# I path literal `/api/admin/*`, `/admin-users`, `/allowlist`, `/promotions`
# sono definizioni di route accettabili: il gate ConsoleGate blocca comunque
# l'accesso senza credenziali.
#
# Exit:
#   0 bundle pulito
#   1 leak rilevato
#   2 dist assente / html malformato
# Compatibile con bash 3.2 (macOS).
set -eu

DIST_DIR="dist/assets"
INDEX_HTML="dist/index.html"

if [ ! -d "$DIST_DIR" ]; then
  echo "[ERR] $DIST_DIR non trovata. Eseguire 'npm run build' prima." >&2
  exit 2
fi

if [ ! -f "$INDEX_HTML" ]; then
  echo "[ERR] $INDEX_HTML non trovato" >&2
  exit 2
fi

ENTRY_REL=$(grep -oE 'src="/assets/[^"]+\.js"' "$INDEX_HTML" | head -1 | sed 's/src="//;s/"$//')
if [ -z "$ENTRY_REL" ]; then
  echo "[ERR] Impossibile identificare l'entry chunk da $INDEX_HTML" >&2
  exit 2
fi
ENTRY_FILE="dist${ENTRY_REL}"
if [ ! -f "$ENTRY_FILE" ]; then
  echo "[ERR] Entry chunk $ENTRY_FILE non esiste" >&2
  exit 2
fi

SENSITIVE_PATTERN='X-Admin-Key|ADMIN_API_KEY|KPICard|provider_key|api_key|apiKey|subscription_plan_id|plan_price_cents|fetchAllowlist|AllowlistPage|PromotionsPage|DashboardPage|AllowlistAddDialog|RevokeConfirmDialog'

# Seconda scansione: admin_key NON dentro removeItem(`admin_key`) — CLR-211 allow-list.
# Cerchiamo admin_key e filtriamo le sole occorrenze dentro removeItem literal.
matches=""
sens_matches=$(grep -n -E "$SENSITIVE_PATTERN" "$ENTRY_FILE" 2>/dev/null || true)
admin_key_matches=$(grep -n "admin_key" "$ENTRY_FILE" 2>/dev/null || true)

# Filtra admin_key: accettabile solo se line contiene "removeItem"
admin_key_leaks=""
if [ -n "$admin_key_matches" ]; then
  # macOS bash 3.2: usare here-string no-op, iterare via printf | while
  admin_key_leaks=$(printf '%s\n' "$admin_key_matches" | grep -v "removeItem" || true)
fi

if [ -n "$sens_matches" ] || [ -n "$admin_key_leaks" ]; then
  echo "[FAIL] Leak rilevato nell'entry chunk $ENTRY_FILE:"
  if [ -n "$sens_matches" ]; then
    printf '%s\n' "$sens_matches" | head -20 | while IFS=: read -r line rest; do
      snippet=$(printf '%s' "$rest" | cut -c1-160)
      printf '  %s:%s: %s\n' "$ENTRY_FILE" "$line" "$snippet"
    done
  fi
  if [ -n "$admin_key_leaks" ]; then
    printf '%s\n' "$admin_key_leaks" | head -20 | while IFS=: read -r line rest; do
      snippet=$(printf '%s' "$rest" | cut -c1-160)
      printf '  [admin_key non-CLR-211] %s:%s: %s\n' "$ENTRY_FILE" "$line" "$snippet"
    done
  fi
  exit 1
fi

echo "[OK] bundle clean (entry: $ENTRY_FILE)"
exit 0
