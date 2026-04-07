#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${PSM_BASE_URL:-https://api.postscanmail.com/api/account-docs/v2}"
API_KEY="${PSM_API_KEY:-YOUR_API_KEY}"

AUTOMATION_NAME="${1:-auto_scan}"  # auto_scan | auto_shred | auto_discard
IS_ACTIVE="${2:-1}"               # 1 enable, 0 disable

curl -sS -X PUT "$BASE_URL/user-defined-rules/update-system-user-defined-rule"   -H "x-api-key: $API_KEY"   -H "Content-Type: application/json"   -d "{"automation_name":"$AUTOMATION_NAME","is_active":$IS_ACTIVE}"
