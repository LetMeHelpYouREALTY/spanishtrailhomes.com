#!/usr/bin/env bash
# Audit Cloudflare redirect configuration for a zone (read-only).
#
# Use when curl shows a self-redirect (e.g. HTTP 308 Location → same URL) with
# Server: cloudflare — that response is generated at the edge, not in Next.js.
#
# Requirements: curl, jq
#
# Usage:
#   export CLOUDFLARE_API_TOKEN="..."   # Zone: SSL and Certificates Read + Zone: Rulesets Read (or broader)
#   export CLOUDFLARE_ZONE_ID="..."     # Zone Overview → API → Zone ID
#   ./scripts/cloudflare-audit-redirects.sh
#
# Optional (account-level rules / bulk redirect wiring):
#   export CLOUDFLARE_ACCOUNT_ID="..."
#
# After review: remove the offending rule in Dashboard → Rules → Redirect Rules,
# or Account → Bulk Redirects, or use the Rulesets API with a token that allows edit.

set -euo pipefail

if ! command -v curl >/dev/null 2>&1 || ! command -v jq >/dev/null 2>&1; then
  echo "This script needs curl and jq on PATH." >&2
  exit 1
fi

: "${CLOUDFLARE_API_TOKEN:?Set CLOUDFLARE_API_TOKEN (see script header)}"
: "${CLOUDFLARE_ZONE_ID:?Set CLOUDFLARE_ZONE_ID from Cloudflare zone overview}"

API="https://api.cloudflare.com/client/v4"
AUTH=(-H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" -H "Content-Type: application/json")

cf_get() {
  local url=$1
  curl -sS "${AUTH[@]}" "$url"
}

echo "=== Zone: redirect-related ruleset entrypoints (read-only) ==="
for phase in http_request_dynamic_redirect http_request_redirect; do
  url="${API}/zones/${CLOUDFLARE_ZONE_ID}/rulesets/phases/${phase}/entrypoint"
  code=$(curl -sS -o /tmp/cf_ruleset.json -w "%{http_code}" "${AUTH[@]}" "$url" || true)
  echo "--- Phase: ${phase} (HTTP ${code}) ---"
  if [[ "$code" == "200" ]]; then
    jq '.result // .' /tmp/cf_ruleset.json
  else
    cat /tmp/cf_ruleset.json 2>/dev/null | jq . 2>/dev/null || cat /tmp/cf_ruleset.json
  fi
  echo
done

echo "=== Zone: all rulesets (id, name, phase) ==="
cf_get "${API}/zones/${CLOUDFLARE_ZONE_ID}/rulesets" | jq '.result[]? | {id, name, phase, kind}'

if [[ -n "${CLOUDFLARE_ACCOUNT_ID:-}" ]]; then
  echo
  echo "=== Account: rulesets (id, name, phase) — optional ==="
  cf_get "${API}/accounts/${CLOUDFLARE_ACCOUNT_ID}/rulesets" | jq '.result[]? | {id, name, phase, kind}'
fi

echo
echo "Done. If a rule redirects https://www.example.com/ → the same URL, remove it in the dashboard or via Rulesets API."
echo
echo "Quick live check (no API token): ./scripts/check-www-redirect-health.sh"
