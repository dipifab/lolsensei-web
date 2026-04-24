#!/usr/bin/env bash
# optimize-assets.sh — WP19.1 asset pipeline (REQ-F-019-1-001, REQ-NF-019-1-001, REQ-NF-019-1-003)
#
# Scope:
#   1. .gitignore enforcement per public/fonts/source/
#   2. Auto-fetch Inter-Regular.ttf v4.0 da rsms/inter se mancante
#   3. Preflight TTF (ttx family/weight) + preflight hero-panel-large.webp (sanity >=512x512)
#   4. Subset Inter weight 400 → inter-latin.woff2 + inter-latin-ext.woff2 (budget 12/15/25 KB)
#   5. Hero mobile crop 760x760 q=85 via sharp (budget 80 KB)
#   6. Idempotency + summary
#
# User-side prereq:
#   pip install fonttools brotli
#   (zopfli opzionale, non bloccante)
#
# Uso:
#   bash scripts/optimize-assets.sh
#
# Exit codes (allineati a dev-repository/design/wp19_1/api-contracts.md §1.1):
#   0  success
#   1  preflight TTF fail (family != Inter OR weight != 400)
#   2  preflight hero fail (source <512x512)
#   3  auto-fetch TTF fail (curl/unzip)
#   4  pyftsubset/ttx not in PATH
#   5  WOFF2 budget exceeded (>12288 latin OR >15360 latin-ext OR >25600 totale)
#   6  hero mobile fail (sharp resize error OR >81920 bytes)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

SRC_DIR="${REPO_ROOT}/public/fonts/source"
OUT_DIR="${REPO_ROOT}/public/fonts"
IMG_DIR="${REPO_ROOT}/public/images"
SRC_TTF="${SRC_DIR}/Inter-Regular.ttf"

# Inter v4.0 pinned release (ADR-010 self-host fonts)
INTER_URL="https://github.com/rsms/inter/releases/download/v4.0/Inter-4.0.zip"
INTER_ZIP="/tmp/inter-4.0.zip"
INTER_EXTRACT="/tmp/inter-4.0-extract"

# Budget (WP19.1 REQ-NF-019-1-001, REQ-NF-019-1-003)
BUDGET_LATIN=12288          # 12 KB
BUDGET_LATIN_EXT=15360      # 15 KB
BUDGET_TOTAL=25600          # 25 KB totale
BUDGET_HERO=81920           # 80 KB hero mobile

# Unicode ranges (WP19.1 tightened per budget strict 12KB/15KB).
# Rimossi PUA/symbol/general-punctuation per rispettare budget (REQ-NF-019-1-001).
# Coerenti con public/fonts/fonts.css @font-face unicode-range.
UNICODES_LATIN="U+0020-007E,U+00A0-00FF"
UNICODES_LATIN_EXT="U+0100-024F"
# Layout features essential only (typography core). `calt`/`rclt` aggiungerebbero ~2KB.
LAYOUT_FEATURES="kern,liga,rlig"

log() { printf '[optimize-assets] %s\n' "$*"; }
err() { printf '[optimize-assets] ERROR: %s\n' "$*" >&2; }

file_size() {
  # Portable stat: BSD (-f%z) vs GNU (-c%s)
  if stat -f%z "$1" >/dev/null 2>&1; then
    stat -f%z "$1"
  else
    stat -c%s "$1"
  fi
}

# --- Block 1: .gitignore enforcement (AC #1) ---------------------------------

GITIGNORE="${REPO_ROOT}/.gitignore"
if ! grep -q '^public/fonts/source/' "${GITIGNORE}" 2>/dev/null; then
  log ".gitignore missing public/fonts/source/ — appending"
  printf '\n# WP19.1 font source (auto-fetched, not committed)\npublic/fonts/source/\n' >> "${GITIGNORE}"
fi

# --- Block 2: auto-fetch TTF (AC #2, exit 3) ---------------------------------

mkdir -p "${SRC_DIR}" "${OUT_DIR}" "${IMG_DIR}"

if [[ ! -f "${SRC_TTF}" ]]; then
  log "Inter-Regular.ttf missing; fetching ${INTER_URL}"
  if ! curl -fsSL "${INTER_URL}" -o "${INTER_ZIP}"; then
    err "fetch: curl exited $? on rsms/inter v4.0 zip"
    exit 3
  fi
  rm -rf "${INTER_EXTRACT}"
  mkdir -p "${INTER_EXTRACT}"
  if ! unzip -q -o "${INTER_ZIP}" -d "${INTER_EXTRACT}"; then
    err "fetch: unzip failed on ${INTER_ZIP}"
    exit 3
  fi
  # rsms/inter v4.0 ships Inter-Regular.ttf under extras/ttf/
  FOUND_TTF="$(find "${INTER_EXTRACT}" -type f -name 'Inter-Regular.ttf' | head -1)"
  if [[ -z "${FOUND_TTF}" ]]; then
    err "fetch: Inter-Regular.ttf not found in zip (archive layout changed?)"
    exit 3
  fi
  cp "${FOUND_TTF}" "${SRC_TTF}"
  log "Auto-fetched Inter-Regular.ttf → ${SRC_TTF}"
fi

# --- Block 3: tooling check (exit 4) -----------------------------------------

if ! command -v pyftsubset >/dev/null 2>&1; then
  err "pyftsubset not in PATH. Install: pip install fonttools brotli"
  exit 4
fi
if ! command -v ttx >/dev/null 2>&1; then
  err "ttx not in PATH (fonttools missing). Install: pip install fonttools brotli"
  exit 4
fi

# --- Block 4: preflight TTF family/weight (AC #3, exit 1) --------------------

# Parse TTX headers to check name table (family) + OS/2 weight
TTX_HEAD="$(ttx -t name -o - "${SRC_TTF}" 2>/dev/null || true)"
if ! echo "${TTX_HEAD}" | grep -q 'Inter'; then
  err "preflight: TTF family does not contain 'Inter' (got unknown)"
  exit 1
fi
TTX_OS2="$(ttx -t OS/2 -o - "${SRC_TTF}" 2>/dev/null || true)"
WEIGHT_LINE="$(echo "${TTX_OS2}" | grep -E 'usWeightClass' | head -1 || true)"
if ! echo "${WEIGHT_LINE}" | grep -qE 'value="400"'; then
  err "preflight: TTF usWeightClass != 400 (got: ${WEIGHT_LINE})"
  exit 1
fi
log "preflight TTF OK (family=Inter, weight=400)"

# --- Block 5: preflight hero source (AC #4 relaxed, exit 2) ------------------

HERO_LARGE="${IMG_DIR}/hero-panel-large.webp"
if [[ ! -f "${HERO_LARGE}" ]]; then
  err "preflight: ${HERO_LARGE} missing"
  exit 2
fi
# Use node+sharp for dimensions (portable, identify not required)
HERO_DIMS="$(node -e "require('sharp')('${HERO_LARGE}').metadata().then(m => console.log(m.width + 'x' + m.height)).catch(e => {console.error(e.message); process.exit(1)})")"
HERO_W="${HERO_DIMS%x*}"
HERO_H="${HERO_DIMS#*x}"
if (( HERO_W < 512 || HERO_H < 512 )); then
  err "preflight: hero-panel-large.webp ${HERO_DIMS} below 512x512 sanity threshold"
  exit 2
fi
log "preflight hero OK (${HERO_DIMS}; target mobile 760x760 via upscale se necessario)"

# --- Block 6: pyftsubset latin + latin-ext (budget gate, exit 5) -------------

OUT_LATIN="${OUT_DIR}/inter-latin.woff2"
OUT_LATIN_EXT="${OUT_DIR}/inter-latin-ext.woff2"

log "pyftsubset latin → ${OUT_LATIN}"
pyftsubset "${SRC_TTF}" \
  --unicodes="${UNICODES_LATIN}" \
  --flavor=woff2 \
  --desubroutinize \
  --no-hinting \
  --layout-features="${LAYOUT_FEATURES}" \
  --no-recalc-timestamp \
  --output-file="${OUT_LATIN}"

log "pyftsubset latin-ext → ${OUT_LATIN_EXT}"
pyftsubset "${SRC_TTF}" \
  --unicodes="${UNICODES_LATIN_EXT}" \
  --flavor=woff2 \
  --desubroutinize \
  --no-hinting \
  --layout-features="${LAYOUT_FEATURES}" \
  --no-recalc-timestamp \
  --output-file="${OUT_LATIN_EXT}"

SIZE_LATIN=$(file_size "${OUT_LATIN}")
SIZE_LATIN_EXT=$(file_size "${OUT_LATIN_EXT}")
SIZE_TOTAL=$((SIZE_LATIN + SIZE_LATIN_EXT))

if (( SIZE_LATIN > BUDGET_LATIN )); then
  err "inter-latin.woff2: ${SIZE_LATIN} bytes > ${BUDGET_LATIN} budget; tune --unicodes range or --layout-features"
  exit 5
fi
if (( SIZE_LATIN_EXT > BUDGET_LATIN_EXT )); then
  err "inter-latin-ext.woff2: ${SIZE_LATIN_EXT} bytes > ${BUDGET_LATIN_EXT} budget; tune --unicodes range or --layout-features"
  exit 5
fi
if (( SIZE_TOTAL > BUDGET_TOTAL )); then
  err "inter-latin + inter-latin-ext total: ${SIZE_TOTAL} bytes > ${BUDGET_TOTAL} budget"
  exit 5
fi

# --- Block 7: hero mobile crop (exit 6) --------------------------------------

HERO_MOBILE="${IMG_DIR}/hero-panel-mobile.webp"
log "sharp crop hero mobile → ${HERO_MOBILE} (760x760 q=85)"
# fit:'cover' gestisce upscale se source <760 (bassa qualità ma non errore)
if ! node -e "require('sharp')('${HERO_LARGE}').resize(760, 760, {fit: 'cover'}).webp({quality: 85}).toFile('${HERO_MOBILE}')"; then
  err "hero: sharp resize exited $?"
  exit 6
fi

SIZE_HERO=$(file_size "${HERO_MOBILE}")
if (( SIZE_HERO > BUDGET_HERO )); then
  err "hero-panel-mobile.webp: ${SIZE_HERO} bytes > ${BUDGET_HERO} budget; lower quality or adjust crop"
  exit 6
fi

# --- Block 8: summary --------------------------------------------------------

log "OK. Fonts emitted:"
log "  inter-latin.woff2     ${SIZE_LATIN} bytes (budget ${BUDGET_LATIN})"
log "  inter-latin-ext.woff2 ${SIZE_LATIN_EXT} bytes (budget ${BUDGET_LATIN_EXT})"
log "  total                 ${SIZE_TOTAL} bytes (budget ${BUDGET_TOTAL})"
log "Hero mobile emitted:"
log "  hero-panel-mobile.webp ${SIZE_HERO} bytes (budget ${BUDGET_HERO})"
log "Remember: align public/fonts/fonts.css @font-face unicode-range with this script if modified."

exit 0
