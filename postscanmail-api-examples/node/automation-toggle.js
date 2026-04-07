const BASE_URL = process.env.PSM_BASE_URL || "https://api.postscanmail.com/api/account-docs/v2";
const API_KEY = process.env.PSM_API_KEY || "YOUR_API_KEY";

// Example: enable auto_scan
const automationName = process.argv[2] || "auto_scan"; // auto_scan | auto_shred | auto_discard
const isActive = Number(process.argv[3] || "1"); // 1 enable, 0 disable

async function main() {
  const res = await fetch(`${BASE_URL}/user-defined-rules/update-system-user-defined-rule`, {
    method: "PUT",
    headers: {
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      automation_name: automationName,
      is_active: isActive,
    }),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error(`Request failed: ${res.status}\n${text}`);
    process.exit(1);
  }

  console.log("Automation toggle updated successfully.");
  console.log(text);
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
