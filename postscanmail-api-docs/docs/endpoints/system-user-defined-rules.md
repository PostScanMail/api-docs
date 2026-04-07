# GET /user-defined-rules/system-user-defined-rules

Fetch the list of system user-defined rules (e.g., Auto scan, Auto shred, Auto discard).

## URL
`GET https://api.postscanmail.com/api/account-docs/v2/user-defined-rules/system-user-defined-rules`

## Headers
- `x-api-key: YOUR_API_KEY`

## Query Parameters
- `sort_order` (optional): `asc` | `desc`
- `page` (optional): integer

## Example Request
```bash
curl -sS -X GET "https://api.postscanmail.com/api/account-docs/v2/user-defined-rules/system-user-defined-rules?sort_order=desc&page=1" \
  -H "x-api-key: YOUR_API_KEY"
```

See `docs/errors.md` for error handling.

## Support
Email: **api@postscanmail.com**
