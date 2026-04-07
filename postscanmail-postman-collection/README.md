# PostScan Mail Postman Collection (Public)

This repository provides the official Postman collection for the PostScan Mail Developer API.

## Important: Access Requirement
To use these APIs, you must have an active PostScan Mail account and be registered/authorized to access the Developer API. If you do not have access, requests will fail even if you can reach the endpoint.

Contact **api@postscanmail.com** for access/onboarding.

## What’s included
- Postman collection JSON export for current public endpoints
- (Optional) Environment template with variables

## Base URL
`https://api.postscanmail.com/api/account-docs/v2/`

## Authentication
All requests require:
- Header: `x-api-key`
- Value: your API key

## Import Instructions
1. Download the collection JSON from this repo.
2. In Postman: **Import** → select the JSON file.
3. Set variables:
   - `base_url` = `https://api.postscanmail.com/api/account-docs/v2/`
   - `api_key` = `YOUR_API_KEY`
4. Run requests from the collection folders:
   - Mail Items
   - Automation Status
   - Automation Toggle

## Notes
- Do not commit real API keys, customer IDs, or customer data into any exported collection.

## Support
Email: **api@postscanmail.com**
