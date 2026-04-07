# Errors & Response Codes

The API returns structured JSON errors in the format:

```json
{ "code": 431, "message": "..." }
```

## Common Codes

- **429** — Key is not correct
- **431** — Key is revoked
- **430** — Account is closed
- **433** — No access to the specified API
- **432** — Method not allowed
- **19** — Invalid inputs
- **435** — Generic error (try again later)
- **434** — Too many requests
- **436** — Account has outstanding fees (payment required)

## Notes
- Always handle both:
  - HTTP status code
  - response body `code` + `message`
- For `434` (Too many requests), implement retry with backoff.
- Access is restricted to registered/authorized PostScan Mail accounts. If you need access, contact **api@postscanmail.com**.
