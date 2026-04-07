# PUT /user-defined-rules/update-system-user-defined-rule

Enable/disable the status of a system user-defined rule for all users.

## URL
`PUT https://api.postscanmail.com/api/account-docs/v2/user-defined-rules/update-system-user-defined-rule`

## Headers
- `x-api-key: YOUR_API_KEY`
- `Content-Type: application/json`

## Body Parameters
- `automation_name` (required): `auto_scan` | `auto_shred` | `auto_discard` (or other supported values)
- `is_active` (required): `1` (enable) | `0` (disable)
- `sort_order` (optional): `asc` | `desc` (if supported)

## Example Request
```bash
curl -sS -X PUT "https://api.postscanmail.com/api/account-docs/v2/user-defined-rules/update-system-user-defined-rule" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "automation_name": "auto_scan", "is_active": 1 }'
```

See `docs/errors.md` for error handling.

## Support
Email: **api@postscanmail.com**
