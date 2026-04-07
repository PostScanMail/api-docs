# GET /items

Fetch all items received in the account.

## URL
`GET https://api.postscanmail.com/api/account-docs/v2/items`

## Headers
- `x-api-key: YOUR_API_KEY`

## Query Parameters
- `sort_order` (optional): `asc` | `desc`
- `page` (optional): integer

## Example Request
```bash
curl -sS -X GET "https://api.postscanmail.com/api/account-docs/v2/items?sort_order=desc&page=1" \
  -H "x-api-key: YOUR_API_KEY"
```

## Example Response (shape only)
Responses vary depending on account data. Your integration should handle:
- items returned
- no items returned

See `docs/errors.md` for error handling.

## Support
Email: **api@postscanmail.com**
