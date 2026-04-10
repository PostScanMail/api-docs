# PostScan Mail Virtual Mailbox API – Developer Documentation

Official developer documentation for the **PostScan Mail Virtual Mailbox API and Mail Scanning API**, enabling you to receive, scan, manage, and automate physical mail digitally.

Use this API to integrate real-world mail into your applications, trigger workflows, and build mail-based automation systems.

> This repository is for developer documentation only. It does **not** contain PostScan Mail product source code.

---

## 🚀 What You Can Build

- Retrieve scanned mail and document data  
- Automate mail processing workflows  
- Perform actions like open, rescan, shred, or discard mail  
- Integrate virtual mailbox capabilities into your applications
- Integrate mail into CRMs, internal tools, or AI pipelines  

---

## 🔐 Access Requirement

To use these APIs, you must have:

- An active PostScan Mail account  
- Access to the Developer API  

If you need access or onboarding help, contact:  
📧 **api@postscanmail.com**

---

## 🌐 Base URL

All endpoints are served under:

`https://api.postscanmail.com/api/account-docs/v2/`

---

## 🔑 Authentication

All requests require an API key via this header:

`x-api-key: YOUR_API_KEY`

---

## 📬 Current Endpoints

### Mail Items
- `GET /items` — Fetch all items received in the account  
  Query params:
  - `sort_order` (optional): `asc` | `desc`
  - `page` (optional): integer

### Automation (System User-Defined Rules)
- `GET /user-defined-rules/system-user-defined-rules` — Fetch system rules (Auto Scan / Auto Shred / Auto Discard)  
  Query params:
  - `sort_order` (optional): `asc` | `desc`
  - `page` (optional): integer

- `PUT /user-defined-rules/update-system-user-defined-rule` — Enable/disable a system rule for all users  
  Body:
  - `automation_name` (required): e.g. `auto_scan`, `auto_shred`, `auto_discard`
  - `is_active` (required): `1` (enable) | `0` (disable)

### Item Actions (Address-scoped)

All item actions are scoped to an address:

`/addresses/{address_id}/items/actions/...`

- `POST /addresses/{address_id}/items/actions/open`  
- `POST /addresses/{address_id}/items/actions/open/cancel`  

- `POST /addresses/{address_id}/items/actions/discard`  
- `POST /addresses/{address_id}/items/actions/discard/cancel`  

- `POST /addresses/{address_id}/items/actions/rescan`  
- `POST /addresses/{address_id}/items/actions/rescan/cancel`  

- `POST /addresses/{address_id}/items/actions/shred`  
- `POST /addresses/{address_id}/items/actions/shred/cancel`  

---

## ⚡ Quickstart (cURL)

### Fetch Mail Items
```bash
curl -sS -X GET "https://api.postscanmail.com/api/account-docs/v2/items?sort_order=desc&page=1" \
  -H "x-api-key: YOUR_API_KEY"
```

### Request open for items (example)
```bash
curl -sS -X POST "https://api.postscanmail.com/api/account-docs/v2/addresses/ADDRESS_ID/items/actions/open" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "mail_ids": ["MAIL_ID_1", "MAIL_ID_2"] }'
```
