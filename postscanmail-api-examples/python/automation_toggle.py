import os
import sys
import json
import requests

BASE_URL = os.getenv("PSM_BASE_URL", "https://api.postscanmail.com/api/account-docs/v2")
API_KEY = os.getenv("PSM_API_KEY", "YOUR_API_KEY")

# Example: python automation_toggle.py auto_scan 1
automation_name = sys.argv[1] if len(sys.argv) > 1 else "auto_scan"
is_active = int(sys.argv[2]) if len(sys.argv) > 2 else 1

def main():
    url = f"{BASE_URL}/user-defined-rules/update-system-user-defined-rule"
    payload = {"automation_name": automation_name, "is_active": is_active}

    r = requests.put(
        url,
        headers={"x-api-key": API_KEY, "Content-Type": "application/json"},
        data=json.dumps(payload),
        timeout=30
    )

    if not r.ok:
        print(f"Request failed: {r.status_code}\n{r.text}", file=sys.stderr)
        sys.exit(1)

    print("Automation toggle updated successfully.")
    print(r.text)

if __name__ == "__main__":
    main()
