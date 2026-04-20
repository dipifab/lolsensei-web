#!/usr/bin/env bash
# optimize-assets.sh — WP19 P3 asset optimization
#
# Scope (TASK-W19-P3-03 / REQ-NF-019-002):
#   - Subset Inter Regular (400) in due slice WOFF2: latin + latin-ext
#   - Target budget: ogni file <25KB gzip (singolo slice); totale dei due <25KB gzip
#     e' il target piu stringente in design/security-performance-wp19.md §4.4
#     (<12KB latin, <15KB latin-ext).
#
# Prerequisiti:
#   1. File sorgente Inter-Regular in ./public/fonts/source/Inter-Regular.ttf
#      (oppure .woff — fonttools accetta entrambi). Se manca: BLOCKER.
#   2. fonttools installato (fornisce pyftsubset). Install:
#        python3 -m pip install --user fonttools brotli zopfli
#      Su macOS via brew: brew install fonttools
#
# Uso:
#   bash scripts/optimize-assets.sh
#
# Exit codes:
#   0  success (entrambi i file generati e sotto budget)
#   10 source font mancante
#   11 pyftsubset non disponibile
#   12 slice fuori budget (>25KB gzip)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

SRC_DIR="${REPO_ROOT}/public/fonts/source"
OUT_DIR="${REPO_ROOT}/public/fonts"
SRC_FILE_TTF="${SRC_DIR}/Inter-Regular.ttf"
SRC_FILE_WOFF="${SRC_DIR}/Inter-Regular.woff"

BUDGET_BYTES_PER_SLICE=$((25 * 1024))  # 25KB gzip hard cap per slice (REQ-NF-019-002)

# Unicode ranges coerenti con public/fonts/fonts.css (NO overlap con CJK fonts).
# Fonte: Google Fonts split standard per Inter.
UNICODES_LATIN="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"
UNICODES_LATIN_EXT="U+0100-024F,U+0259,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF"

log() { printf '[optimize-assets] %s\n' "$*"; }
err() { printf '[optimize-assets] ERROR: %s\n' "$*" >&2; }

# --- Validation: source font ---
if [[ -f "${SRC_FILE_TTF}" ]]; then
  SRC="${SRC_FILE_TTF}"
elif [[ -f "${SRC_FILE_WOFF}" ]]; then
  SRC="${SRC_FILE_WOFF}"
else
  err "Inter source font missing."
  err "Expected one of:"
  err "  ${SRC_FILE_TTF}"
  err "  ${SRC_FILE_WOFF}"
  err ""
  err "Action required: download Inter-Regular.ttf from https://rsms.me/inter/"
  err "(or https://github.com/rsms/inter/releases) and place it under public/fonts/source/."
  err "This file is typically gitignored; keep under public/fonts/source/ locally."
  exit 10
fi
log "Source font: ${SRC}"

# --- Validation: pyftsubset ---
if ! command -v pyftsubset >/dev/null 2>&1; then
  err "pyftsubset not found on PATH."
  err "Install fonttools + brotli:"
  err "  python3 -m pip install --user fonttools brotli zopfli"
  err "or"
  err "  brew install fonttools"
  err "Optionally verify: python3 -c 'from fontTools.ttLib import TTFont'"
  exit 11
fi
log "Using: $(command -v pyftsubset)"

mkdir -p "${OUT_DIR}"

# --- Subset: latin ---
OUT_LATIN="${OUT_DIR}/inter-latin.woff2"
log "Subsetting latin slice -> ${OUT_LATIN}"
pyftsubset "${SRC}" \
  --unicodes="${UNICODES_LATIN}" \
  --layout-features='*' \
  --flavor=woff2 \
  --no-hinting \
  --desubroutinize \
  --output-file="${OUT_LATIN}"

# --- Subset: latin-ext ---
OUT_LATIN_EXT="${OUT_DIR}/inter-latin-ext.woff2"
log "Subsetting latin-ext slice -> ${OUT_LATIN_EXT}"
pyftsubset "${SRC}" \
  --unicodes="${UNICODES_LATIN_EXT}" \
  --layout-features='*' \
  --flavor=woff2 \
  --no-hinting \
  --desubroutinize \
  --output-file="${OUT_LATIN_EXT}"

# --- Budget check (WOFF2 is already Brotli-compressed; compare raw bytes) ---
check_budget() {
  local file="$1"
  local label="$2"
  if [[ ! -f "${file}" ]]; then
    err "${label} slice not produced."
    exit 12
  fi
  local size
  size=$(wc -c <"${file}" | tr -d '[:space:]')
  log "${label}: ${size} bytes (budget ${BUDGET_BYTES_PER_SLICE})"
  if (( size > BUDGET_BYTES_PER_SLICE )); then
    err "${label} slice exceeds budget (${size} > ${BUDGET_BYTES_PER_SLICE})."
    err "Action: narrow unicode-range, disable extra features, or split further."
    exit 12
  fi
}

check_budget "${OUT_LATIN}" "inter-latin"
check_budget "${OUT_LATIN_EXT}" "inter-latin-ext"

log "OK. Fonts emitted:"
log "  $(ls -la "${OUT_LATIN}" | awk '{print $5, $NF}')"
log "  $(ls -la "${OUT_LATIN_EXT}" | awk '{print $5, $NF}')"
log "Remember: align public/fonts/fonts.css @font-face unicode-range with this script."
