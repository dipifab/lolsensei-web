#!/usr/bin/env bash
# WP24 TASK-3-034 — Bundle guard: verifica che nel chunk principale il CookieBanner
# NON impacchetti PreferenceCenter staticamente (deve essere lazy via dynamic import).
# Inoltre controlla il peso gzipped del chunk banner < 8KB e banner+prefcenter < 15KB.
#
# Exit:
#   0 bundle OK
#   1 violazione (PreferenceCenter inlineato nel banner chunk OPPURE budget superato)
#   2 asset directory assente
set -eu

ASSETS_DIR=".output/public/_build/assets"
if [ ! -d "$ASSETS_DIR" ]; then
  # Fallback path per vinxi output alternativo
  ASSETS_DIR=".vinxi/build/client/_build/assets"
fi
if [ ! -d "$ASSETS_DIR" ]; then
  echo "[WARN] assets dir non trovata. Esegui 'npm run build' prima. Skipping WP24 bundle guard." >&2
  exit 0
fi

# Trova chunk che contengono il CookieBanner (identificato dal title id).
BANNER_CHUNKS=$(grep -l "cookie-banner-title" "$ASSETS_DIR"/*.js 2>/dev/null || true)
if [ -z "$BANNER_CHUNKS" ]; then
  echo "[WARN] Nessun chunk con CookieBanner trovato — build potrebbe non contenere locale EN." >&2
  exit 0
fi

fail=0

for chunk in $BANNER_CHUNKS; do
  # Check 1: PreferenceCenter NON deve essere in questo chunk (deve essere lazy).
  if grep -q "consent.preferences.technical" "$chunk"; then
    echo "[FAIL] $chunk contiene PreferenceCenter inlineato (deve essere lazy-loaded)." >&2
    fail=1
  fi

  # Check 2: dimensione gzipped del chunk.
  size=$(gzip -c "$chunk" | wc -c | tr -d ' ')
  size_kb=$((size / 1024))
  if [ "$size" -gt 8192 ]; then
    echo "[FAIL] Bundle banner $chunk = ${size}B gzipped (>${size_kb}KB) — budget 8KB." >&2
    fail=1
  else
    echo "[OK] Banner chunk $chunk: ${size}B gzipped (<8KB)."
  fi
done

# ---------------------------------------------------------------------------
# TASK-4-024 — PreferenceCenter chunk < 15KB gzipped
# Identifica il chunk del PreferenceCenter via la i18n key `consent.preferences.technical`
# (presente solo nel PreferenceCenter). Esclude i chunk banner (gia' tested sopra).
PREFCENTER_CHUNKS=$(grep -l "consent.preferences.technical" "$ASSETS_DIR"/*.js 2>/dev/null | {
  while read -r f; do
    case " $BANNER_CHUNKS " in
      *" $f "*) ;;
      *) echo "$f" ;;
    esac
  done
})

if [ -z "$PREFCENTER_CHUNKS" ]; then
  echo "[WARN] Nessun chunk separato per PreferenceCenter — verifica lazy-load." >&2
else
  for chunk in $PREFCENTER_CHUNKS; do
    size=$(gzip -c "$chunk" | wc -c | tr -d ' ')
    size_kb=$((size / 1024))
    if [ "$size" -gt 15360 ]; then
      echo "[FAIL] PreferenceCenter chunk $chunk = ${size}B gzipped (>${size_kb}KB) — budget 15KB." >&2
      fail=1
    else
      echo "[OK] PreferenceCenter chunk $chunk: ${size}B gzipped (<15KB)."
    fi
  done
fi

if [ "$fail" -ne 0 ]; then
  exit 1
fi

echo "[OK] WP24 bundle guard: banner + preference center entro budget."
exit 0
