# PostScan Mail Developer API (Public)

This repository contains public Developer API documentation for PostScan Mail.

> This GitHub content is for developer enablement only. It does not include any PostScan Mail product source code.

## Important: Access Requirement
To use these APIs, you must have an active PostScan Mail account and be registered/authorized to access the Developer API. If you do not have access, requests will fail even if you can reach the endpoint.

If you need access or onboarding help, contact: **api@postscanmail.com**

## Base URL
All endpoints are served under:

`https://api.postscanmail.com/api/account-docs/v2/`

## Authentication
All requests require an API key via the following header:

`x-api-key: YOUR_API_KEY`

## Endpoints (Current)
### Mail Items
- `GET /items` — Fetch all items received in the account

Query parameters:
- `sort_order` (optional): `asc` or `desc`
- `page` (optional): page number (integer)

### Automation Status
- `GET /user-defined-rules/system-user-defined-rules` — Fetch system user-defined rules (e.g., auto scan/shred/discard)

Query parameters:
- `sort_order` (optional): `asc` or `desc`
- `page` (optional): page number (integer)

### Automation Toggle
- `PUT /user-defined-rules/update-system-user-defined-rule` — Enable/disable a system user-defined rule for all users

Body:
- `automation_name` (required): e.g. `auto_scan`, `auto_shred`, `auto_discard`
- `is_active` (required): `1` to enable, `0` to disable
- `sort_order` (optional): `asc` or `desc` (if supported)

## Quickstart (cURL)
```bash
curl -sS -X GET "https://api.postscanmail.com/api/account-docs/v2/items?sort_order=desc&page=1" \
  -H "x-api-key: YOUR_API_KEY"
```

## Error Codes
See: `docs/errors.md`

## Related Repositories
- `postscanmail-postman-collection` — Postman collection for onboarding/testing
- `postscanmail-api-examples` — Minimal Node/Python/cURL examples

## Support
Email: **api@postscanmail.com**
