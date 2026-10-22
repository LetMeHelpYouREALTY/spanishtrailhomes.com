#!/usr/bin/env bash
# Smoke-test canonical redirects for spanishtrailhomes.com (no Cloudflare API needed).
#
# Fails if www homepage self-redirects (308/301 loop signature at Cloudflare edge).
#
# Usage:
#   ./scripts/check-www-redirect-health.sh
#   BASE_URL=https://www.spanishtrailhomes.com ./scripts/check-www-redirect-health.sh

set -euo pipefail

BASE_URL="${BASE_URL:-https://www.spanishtrailhomes.com}"
APEX_URL="${APEX_URL:-https://spanishtrailhomes.com}"

if ! command -v curl >/dev/null 2>&1; then
  echo "curl is required." >&2
  exit 1
fi

fail() {
  echo "FAIL: $*" >&2
  exit 1
}

pass() {
  echo "OK: $*"
}

# www homepage must not redirect to itself
headers=$(curl -sSI --http2 "${BASE_URL}/" 2>&1) || fail "Could not reach ${BASE_URL}/"
status=$(echo "$headers" | head -n 1)
location=$(echo "$headers" | grep -i '^location:' | tr -d '\r' | head -n 1 || true)
server=$(echo "$headers" | grep -i '^server:' | tr -d '\r' | head -n 1 || true)

if echo "$status" | grep -qE '^(HTTP/[0-9.]+ )30[1278]'; then
  loc="${location#*[Ll]ocation: }"
  loc="${loc#location: }"
  if [[ "$loc" == "${BASE_URL}/" || "$loc" == "${BASE_URL}" ]]; then
    fail "Self-redirect on ${BASE_URL}/ — ${status} → ${loc} (${server}). Check Cloudflare Redirect Rules / Bulk Redirects."
  fi
  fail "Unexpected redirect on homepage: ${status} ${location} (${server})"
fi

if ! echo "$status" | grep -qE '^(HTTP/[0-9.]+ )200'; then
  fail "Homepage expected 200, got: ${status}"
fi

pass "${BASE_URL}/ returns 200"

# apex should redirect to www (Vercel or middleware)
apex_headers=$(curl -sSI --http2 "${APEX_URL}/" 2>&1) || fail "Could not reach ${APEX_URL}/"
apex_status=$(echo "$apex_headers" | head -n 1)
apex_location=$(echo "$apex_headers" | grep -i '^location:' | tr -d '\r' | head -n 1 || true)

if ! echo "$apex_status" | grep -qE '^(HTTP/[0-9.]+ )30[1278]'; then
  fail "Apex expected redirect to www, got: ${apex_status}"
fi

if ! echo "$apex_location" | grep -qi 'www\.spanishtrailhomes\.com'; then
  fail "Apex redirect should target www: ${apex_location}"
fi

pass "${APEX_URL}/ redirects to www"

echo "All redirect health checks passed."
