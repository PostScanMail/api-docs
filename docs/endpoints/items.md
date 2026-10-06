# GET /items

Fetch all mail items received in the account.

The response includes standard mail item information and, when available, AI-generated content summary information for scanned mail.

> **Access requirement:** You must have an active PostScan Mail account and be registered/authorized to use the Developer API.  
> For onboarding/support, contact **api@postscanmail.com**.

## URL

`GET https://api.postscanmail.com/api/account-docs/v2/items`

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
curl -sS -X GET   "https://api.postscanmail.com/api/account-docs/v2/items?sort_order=desc&page=1"   -H "x-api-key: YOUR_API_KEY"   -H "Content-Type: application/json"
```

## Success Response

**HTTP 200**

```json
{
  "data": [
    {
      "mail_id": "12345",
      "sender_name": "John Doe",
      "address_id": "12345",
      "cover_image": "https://cdn.psm.com/mail/cover.jpg",
      "pdf_content": "https://cdn.psm.com/mail/document.pdf",
      "ai_summary": [
        "Sender: National Trust Bank",
        "Subject: New Card and Account Information",
        "Text Summary:",
        "National Trust Bank sent a new Visa Debit card notice for Alex R. Thompson.",
        "Key Insights:",
        "- New Visa Debit card issued",
        "Required Customer Actions:",
        "1. Review the account information"
      ],
      "ai_summary_version": "Version 2",
      "pdf_metadata": {
        "received_at": "2025-11-18 00:00:01",
        "current_status": "Assign Complete",
        "assigned_user": "John Doe",
        "current_folder_name": "Inbox",
        "uploaded_from_address": {
          "city": "Anaheim",
          "state": "California",
          "postal_code": "92805"
        }
      }
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
| `mail_id` | string | Unique identifier of the mail item. |
| `sender_name` | string | Sender name associated with the mail item. |
| `address_id` | string | Mailing address ID associated with the item. |
| `cover_image` | string | URL of the mail item's cover image, when available. |
| `pdf_content` | string | URL of the scanned PDF content, when available. |
| `ai_summary` | array | AI-generated content summary for the mail item, when available. |
| `ai_summary_version` | string or null | Version of the AI summary format/model associated with the returned summary. |
| `pdf_metadata.received_at` | string | Date and time the item was received. |
| `pdf_metadata.current_status` | string | Current mail item status. |
| `pdf_metadata.assigned_user` | string | User assigned to the mail item. |
| `pdf_metadata.current_folder_name` | string | Current folder containing the mail item. |
| `pdf_metadata.uploaded_from_address` | object | Location details for the address from which the item was uploaded. |
| `current_page` | integer | Current pagination page. |
| `per_page` | integer | Number of items returned per page. |
| `total` | integer | Total number of matching items. |

## AI Summary Availability

When an AI summary is available:

```json
"ai_summary": [
  "Sender: ...",
  "Subject: ...",
  "Text Summary:",
  "...",
  "Key Insights:",
  "...",
  "Required Customer Actions:",
  "..."
],
"ai_summary_version": "Version 2"
```

When an AI summary is not available:

```json
"ai_summary": [],
"ai_summary_version": null
```

Integrations should handle both cases.

## No Items Found

**HTTP 200**

```json
{
  "data": [
    "No items are received yet."
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
