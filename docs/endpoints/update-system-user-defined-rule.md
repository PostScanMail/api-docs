# PUT /user-defined-rules/update-system-user-defined-rule

Enable or disable a supported system user-defined rule for all users on the account.

Supported automation rules include:

- Auto Scan
- Auto Shred
- Auto Discard
- Auto AI Summary

> **Access requirement:** You must have an active PostScan Mail account and be registered/authorized to use the Developer API.  
> For onboarding/support, contact **api@postscanmail.com**.

## URL

`PUT https://api.postscanmail.com/api/account-docs/v2/user-defined-rules/update-system-user-defined-rule`

## Headers

| Header | Required | Value |
|---|---|---|
| `x-api-key` | Yes | `YOUR_API_KEY` |
| `Content-Type` | Yes | `application/json` |

## Body Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `automation_name` | string | Yes | Automation rule to update: `auto_scan`, `auto_shred`, `auto_discard`, or `auto_ai_summary`. |
| `is_active` | integer | Yes | `1` to enable the automation rule, `0` to disable it. |
| `sort_order` | string | No | Sorting direction such as `asc` or `desc`, where supported. |

## Example Request — Enable Auto Scan

```bash
curl -sS -X PUT   "https://api.postscanmail.com/api/account-docs/v2/user-defined-rules/update-system-user-defined-rule"   -H "x-api-key: YOUR_API_KEY"   -H "Content-Type: application/json"   -d '{
    "automation_name": "auto_scan",
    "is_active": 1,
    "sort_order": "desc"
  }'
```

## Example Request — Enable Auto AI Summary

```bash
curl -sS -X PUT   "https://api.postscanmail.com/api/account-docs/v2/user-defined-rules/update-system-user-defined-rule"   -H "x-api-key: YOUR_API_KEY"   -H "Content-Type: application/json"   -d '{
    "automation_name": "auto_ai_summary",
    "is_active": 1,
    "sort_order": "desc"
  }'
```

## Success Response

**HTTP 200**

The response returns the updated system user-defined rule status for users, including:

- `auto_scan`
- `auto_shred`
- `auto_discard`
- `auto_ai_summary`
- `last_changed_at`

Example:

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
    }
  ],
  "current_page": 1,
  "per_page": 20,
  "total": 50
}
```

## Error Handling

See `docs/errors.md` for common API error responses and handling guidance.

## Support

Email: **api@postscanmail.com**
