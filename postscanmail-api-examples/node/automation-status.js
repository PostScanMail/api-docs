const BASE_URL = process.env.PSM_BASE_URL || "https://api.postscanmail.com/api/account-docs/v2";
const API_KEY = process.env.PSM_API_KEY || "YOUR_API_KEY";

async function main() {
  const url = new URL(`${BASE_URL}/user-defined-rules/system-user-defined-rules`);
  url.searchParams.set("sort_order", "desc");
  url.searchParams.set("page", "1");

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: { "x-api-key": API_KEY },
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`Request failed: ${res.status}\n${text}`);
    process.exit(1);
  }

  const data = await res.json();
  console.log("Automation status fetched successfully.");
  console.log("Response type:", Array.isArray(data) ? "array" : typeof data);
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
