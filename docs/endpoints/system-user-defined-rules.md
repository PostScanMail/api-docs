# GET /user-defined-rules/system-user-defined-rules

Fetch the list of system user-defined rules for the account, including:

- Auto Scan
- Auto Shred
- Auto Discard
- Auto AI Summary

> **Access requirement:** You must have an active PostScan Mail account and be registered/authorized to use the Developer API.  
> For onboarding/support, contact **api@postscanmail.com**.

## URL

`GET https://api.postscanmail.com/api/account-docs/v2/user-defined-rules/system-user-defined-rules`

## Headers

| Header | Required | Value |
|---|---|---|
| `x-api-key` | Yes | `YOUR_API_KEY` |
| `Content-Type` | Yes | `application/json` |

## Query Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `sort_order` | string | No | Sorting direction: `asc` or `desc`. |
| `page` | integer | No | Page number for pagination. |

## Example Request

```bash
curl -sS -X GET   "https://api.postscanmail.com/api/account-docs/v2/user-defined-rules/system-user-defined-rules?sort_order=desc&page=1"   -H "x-api-key: YOUR_API_KEY"   -H "Content-Type: application/json"
```

## Success Response

**HTTP 200**

```json
{
  "data": [
    {
      "user_full_name": "John Doe",
      "auto_scan": true,
      "auto_shred": true,
      "auto_discard": false,
      "auto_ai_summary": true,
      "last_changed_at": "2025-12-04 09:10:09"
    },
    {
      "user_full_name": "Jane Smith",
      "auto_scan": false,
      "auto_shred": true,
      "auto_discard": true,
      "auto_ai_summary": false,
      "last_changed_at": "2025-12-02 15:44:22"
    }
  ],
  "current_page": 1,
  "per_page": 20,
  "total": 50
}
```

## Response Fields

| Field | Type | Description |
|---|---|---|
| `user_full_name` | string | Name of the user associated with the automation settings. |
| `auto_scan` | boolean | Indicates whether Auto Scan is enabled for the user. |
| `auto_shred` | boolean | Indicates whether Auto Shred is enabled for the user. |
| `auto_discard` | boolean | Indicates whether Auto Discard is enabled for the user. |
| `auto_ai_summary` | boolean | Indicates whether Auto AI Summary is enabled for the user. |
| `last_changed_at` | string | Date and time when the automation settings were last changed. |
| `current_page` | integer | Current pagination page. |
| `per_page` | integer | Number of results returned per page. |
| `total` | integer | Total number of matching records. |

## No Rules Found

**HTTP 200**

```json
{
  "data": [
    "No system defined rules found on this page."
  ],
  "current_page": 1,
  "per_page": 20,
  "total": 0
}
```

## Error Handling

See `docs/errors.md` for common API error responses and handling guidance.

## Support

Email: **api@postscanmail.com**
