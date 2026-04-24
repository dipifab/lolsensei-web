#!/usr/bin/env bash
# WP19 INT-006 — Smoke test production post-deploy.
# Validates critical routes, security headers, allowlist 404 behavior,
# asset availability. Exits 1 on first failure.
set -euo pipefail

HOST="${PROD_HOST:-https://www.lolsensei.com}"
PASS=0
FAIL=0

check() {
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
    echo "  [FAIL] $label (header missing/mismatch: $value) — $url"
    FAIL=$((FAIL + 1))
  fi
}

echo "=== Homepage + locale roots ==="
check "root /"           "$HOST/"       "200"
check "/en/"             "$HOST/en/"    "200"
check "/it/"             "$HOST/it/"    "200"
check "/es/"             "$HOST/es/"    "200"
check "/fr/"             "$HOST/fr/"    "200"
check "/de/"             "$HOST/de/"    "200"
check "/pt-br/"          "$HOST/pt-br/" "200"
check "/ko/"             "$HOST/ko/"    "200"
check "/zh-Hans/"        "$HOST/zh-Hans/" "200"

echo "=== WP19 new routes ==="
check "/en/contact"      "$HOST/en/contact" "200"
check "/it/contact"      "$HOST/it/contact" "200"
check "/en/blog/how-to-climb-ranked-lol"     "$HOST/en/blog/how-to-climb-ranked-lol" "200"
check "/en/blog/how-to-stop-tilting-lol"     "$HOST/en/blog/how-to-stop-tilting-lol" "200"
check "/en/blog/best-lol-ai-coach-2026"      "$HOST/en/blog/best-lol-ai-coach-2026" "200"
check "/it/blog/understanding-champion-select" "$HOST/it/blog/understanding-champion-select" "200"

echo "=== Allowlist 404 (branded) ==="
check "/nonexistent-xyz"       "$HOST/nonexistent-xyz" "404"
check "/en/ghost-page"          "$HOST/en/ghost-page"   "404"

echo "=== Trailing slash 301 ==="
redirect=$(curl -s -o /dev/null -w "%{http_code} %{redirect_url}" "$HOST/en/features/")
case "$redirect" in
  "301 $HOST/en/features"|"308 $HOST/en/features")
    echo "  [PASS] /en/features/ -> 301 /en/features"
    PASS=$((PASS + 1));;
  *)
    echo "  [FAIL] /en/features/ trailing slash — got: $redirect"
    FAIL=$((FAIL + 1));;
esac

echo "=== Assets ==="
check "/favicon.ico"                        "$HOST/favicon.ico" "200"
check "/images/logo-512.webp"               "$HOST/images/logo-512.webp" "200"
check "/previews/champ-select-preview.webp" "$HOST/previews/champ-select-preview.webp" "200"
check "/sitemap.xml"                        "$HOST/sitemap.xml" "200"
check "/llms.txt"                           "$HOST/llms.txt" "200"
check "/robots.txt"                         "$HOST/robots.txt" "200"

echo "=== Security headers ==="
check_header "CSP" "$HOST/" "content-security-policy" "default-src 'self'"
check_header "HSTS" "$HOST/" "strict-transport-security" "max-age"
check_header "X-Frame-Options DENY" "$HOST/" "x-frame-options" "DENY"
check_header "X-Content-Type-Options nosniff" "$HOST/" "x-content-type-options" "nosniff"
check_header "Referrer-Policy" "$HOST/" "referrer-policy" "strict-origin"
check_header "Permissions-Policy" "$HOST/" "permissions-policy" "camera"

echo "=== JSON-LD @graph ==="
html=$(curl -s "$HOST/")
for id in "#organization" "#website" "#software"; do
  if echo "$html" | grep -q "\"@id\":\"https://www.lolsensei.com/$id\""; then
    echo "  [PASS] @id $id present in homepage @graph"
    PASS=$((PASS + 1))
  else
    echo "  [FAIL] @id $id missing from homepage @graph"
    FAIL=$((FAIL + 1))
  fi
done

if echo "$html" | grep -q "\"@id\":\"https://www.lolsensei.com/#founder\""; then
  echo "  [FAIL] #founder present — CR-027 cancelled Person schema"
  FAIL=$((FAIL + 1))
else
  echo "  [PASS] #founder absent (CR-027 compliant)"
  PASS=$((PASS + 1))
fi

echo "=== WP19.1 assets + critical CSS ==="
WP19_1_HTML="$(curl -sS "$HOST/en/")"

# S1: HTTP 200 on /en/
if [ -n "$WP19_1_HTML" ]; then
  echo "  [PASS] S1 HTTP 200 /en/"
  PASS=$((PASS + 1))
else
  echo "  [FAIL] S1 /en/ empty response"
  FAIL=$((FAIL + 1))
fi

# S2: <style> inline present (>=1)
style_count=$(printf '%s' "$WP19_1_HTML" | grep -c '<style')
if [ "$style_count" -ge 1 ]; then
  echo "  [PASS] S2 <style> inline count=$style_count"
  PASS=$((PASS + 1))
else
  echo "  [FAIL] S2 <style> inline missing (count=$style_count)"
  FAIL=$((FAIL + 1))
fi

# S3: <style> inner content size > 1024 byte (deterministic Node, BSD-safe)
style_content_bytes=$(printf '%s' "$WP19_1_HTML" | node -e "let d=''; process.stdin.on('data',c=>d+=c).on('end',()=>{const m=d.match(/<style[^>]*>([\\s\\S]*?)<\\/style>/); console.log(m ? m[1].length : 0)})")
if [ "$style_content_bytes" -gt 1024 ]; then
  echo "  [PASS] S3 <style> content $style_content_bytes bytes > 1024"
  PASS=$((PASS + 1))
else
  echo "  [FAIL] S3 <style> content $style_content_bytes bytes <= 1024"
  FAIL=$((FAIL + 1))
fi

# S4: @font-face count >= 2
ff_count=$(printf '%s' "$WP19_1_HTML" | grep -c '@font-face')
if [ "$ff_count" -ge 2 ]; then
  echo "  [PASS] S4 @font-face count=$ff_count"
  PASS=$((PASS + 1))
else
  echo "  [FAIL] S4 @font-face count=$ff_count < 2"
  FAIL=$((FAIL + 1))
fi

# S5: hero-panel-mobile.webp referenced
if printf '%s' "$WP19_1_HTML" | grep -q 'hero-panel-mobile.webp'; then
  echo "  [PASS] S5 hero-panel-mobile.webp referenced"
  PASS=$((PASS + 1))
else
  echo "  [FAIL] S5 hero-panel-mobile.webp missing"
  FAIL=$((FAIL + 1))
fi

# S6: WOFF2 inter-latin 200 + font/woff2
check_header "S6 WOFF2 inter-latin font/woff2" "$HOST/fonts/inter-latin.woff2" "content-type" "font/woff2"
check "S6b WOFF2 inter-latin 200" "$HOST/fonts/inter-latin.woff2" "200"

# S7: WOFF2 inter-latin-ext
check_header "S7 WOFF2 inter-latin-ext font/woff2" "$HOST/fonts/inter-latin-ext.woff2" "content-type" "font/woff2"
check "S7b WOFF2 inter-latin-ext 200" "$HOST/fonts/inter-latin-ext.woff2" "200"

# S8: hero-panel-mobile.webp 200
check "S8 hero-panel-mobile.webp 200" "$HOST/images/hero-panel-mobile.webp" "200"

# S9: No onload= on <link> tags (REQ-NF-019-1-006)
onload_count=$(printf '%s' "$WP19_1_HTML" | grep -cE '<link[^>]*onload=' || true)
if [ "$onload_count" -eq 0 ]; then
  echo "  [PASS] S9 no onload= on <link> (CSP compliant)"
  PASS=$((PASS + 1))
else
  echo "  [FAIL] S9 onload= on <link> detected ($onload_count)"
  FAIL=$((FAIL + 1))
fi

echo
echo "=== Summary: $PASS pass, $FAIL fail ==="
if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
exit 0
