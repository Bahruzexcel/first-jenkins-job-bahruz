import { test } from "@playwright/test";

test("", async ({ page }) => {
  // Navigate to google.com
  await page.goto("https://www.google.com");

  // Wait for 3 seconds
  await page.waitForTimeout(3000);
});
