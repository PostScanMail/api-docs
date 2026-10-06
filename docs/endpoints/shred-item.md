# Shred Item

Requests a shred operation on an item.

> **Access requirement:** You must have an active PostScan Mail account and be registered/authorized to use the Developer API.  
> For onboarding/support, contact **api@postscanmail.com**.

**Base URL:** `https://api.postscanmail.com/api/account-docs/v2`

**Authentication header:** `x-api-key: YOUR_API_KEY`


## Endpoint

`POST /addresses/{address_id}/items/actions/shred`

## Path Parameters

| Name | Required | Description |
|---|---|---|
| `address_id` | Yes | The mailing address ID associated with the mail item(s). |

## Headers

| Header | Required | Value |
|---|---|---|
| `x-api-key` | Yes | `YOUR_API_KEY` |
| `Content-Type` | Yes | `application/json` |

## Request Body

```json
{
  "mail_id": "123456789",
  "delete_digital_copy": false
}
```

## Example Request

```bash
curl -X POST \
  "https://api.postscanmail.com/api/account-docs/v2/addresses/ADDRESS_ID/items/actions/shred" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{  "mail_id": "123456789",  "delete_digital_copy": false }'
```

## Success Response

**HTTP 200**

```json
{
  "status": 1,
  "message": "Item shred request submitted successfully."
}
```

## Possible Error Responses

| Code | Status | Message |
|---|---|---|
| `429` | Unauthorized | Key is not correct, please use the right key and try again. |
| `431` | Unauthorized | Key is revoked, please use the right key and try again. |
| `433` | Forbidden | You don't have access to the API specified. |
| `432` | Method Not Allowed | Specified method is incorrect, please recheck and try again later. |
| `19` | Unprocessable Entity | Invalid inputs. |
| `435` | Unprocessable Entity | An error occurred, please try again later. |
| `434` | Too Many Requests | Too many requests have been sent. |
| `18` | Internal Server Error | Database error |
| `430` | Forbidden | Account is closed, please contact support for further help. |
| `89` | Not Found | Address not found |
| `9400` | Unauthorized | Address is not registered to account |
| `9426` | Bad Request | This account store subscription is suspended. |
| `437` | Forbidden | USPS Form 1583 / ID Verification is required in order to do this change. |
| `469` | Forbidden | Items don't belong to the specified address. |
| `471` | Forbidden | Item status does not allow this operation. |
| `472` | Forbidden | Item type does not allow this operation. |
| `14` | Not Found | Item not found |
| `134` | Forbidden | Delete digital copy not allowed |

## Support

For API access or integration support, contact **api@postscanmail.com**.
