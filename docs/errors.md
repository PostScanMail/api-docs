# Errors & Response Codes

The PostScan Mail Developer API returns structured JSON error responses in the following format:

```json
{
  "code": 431,
  "message": "Key is revoked, please use the right key and try again."
}
```

> **Access requirement:** You must have an active PostScan Mail account and be registered/authorized to use the Developer API.  
> For onboarding/support, contact **api@postscanmail.com**.

## Common API Errors

| Code | Typical HTTP Status | Message / Meaning |
|---|---|---|
| `429` | Unauthorized | API key is incorrect. |
| `431` | Unauthorized | API key has been revoked. |
| `430` | Forbidden | Account is closed. |
| `433` | Forbidden | Account does not have access to the requested API. |
| `432` | Method Not Allowed | The HTTP method used for the endpoint is incorrect. |
| `19` | Unprocessable Entity | Invalid inputs were provided. |
| `435` | Unprocessable Entity | A general processing error occurred. Try again later. |
| `434` | Too Many Requests | Too many requests have been sent. |
| `436` | Payment Required | The account has outstanding fees. |
| `18` | Internal Server Error | An internal processing error occurred. |

## Mail Item Action Errors

The following errors may be returned by mail item action endpoints such as Open, Discard, Rescan, Shred, and their cancel operations.

| Code | Typical HTTP Status | Message / Meaning |
|---|---|---|
| `89` | Not Found | Address not found. |
| `9400` | Unauthorized | The specified address is not registered to the account. |
| `9426` | Bad Request | The account store subscription is suspended. |
| `437` | Forbidden | USPS Form 1583 / ID Verification is required before the requested action can be performed. |
| `469` | Forbidden | One or more items do not belong to the specified address. |
| `470` | Forbidden | The item cannot be scanned or rescanned because of its current state/type. The exact message may vary by operation. |
| `471` | Forbidden | The current item status does not allow the requested operation. |
| `472` | Forbidden | The item type does not allow the requested operation. |
| `473` | Forbidden | The mail item has already been opened and scanned. |
| `14` | Not Found | Mail item not found. |
| `134` | Forbidden | Deleting the digital copy is not allowed for the requested item/action. |
| `213` | Bad Request | The requested rescan type is not allowed for the item. |

## Example Error Response

```json
{
  "code": 469,
  "message": "Items don't belong to the specified address."
}
```

## Handling Errors

Integrations should:

1. Check the HTTP status returned by the API.
2. Read the response body `code` and `message` for the specific API error.
3. Do not rely only on the numeric API `code`, because some codes may be used with operation-specific messages.
4. Validate `address_id`, `mail_id` / `mail_ids`, and action-specific request parameters before sending an item action request.
5. For rate limiting (`434`), retry using a reasonable backoff strategy rather than immediately repeating the request.
6. Do not retry authorization or validation errors without first correcting the request or account/API access.

## Support

For API access or integration support, contact **api@postscanmail.com**.
