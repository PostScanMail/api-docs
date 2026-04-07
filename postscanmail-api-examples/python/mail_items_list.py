import os
import sys
import requests

BASE_URL = os.getenv("PSM_BASE_URL", "https://api.postscanmail.com/api/account-docs/v2")
API_KEY = os.getenv("PSM_API_KEY", "YOUR_API_KEY")

def main():
    url = f"{BASE_URL}/items"
    params = {"sort_order": "desc", "page": 1}
    r = requests.get(url, headers={"x-api-key": API_KEY}, params=params, timeout=30)

    if not r.ok:
        print(f"Request failed: {r.status_code}\n{r.text}", file=sys.stderr)
        sys.exit(1)

    data = r.json()
    print("Mail items fetched successfully.")
    print("Response type:", "list" if isinstance(data, list) else type(data).__name__)

if __name__ == "__main__":
    main()
