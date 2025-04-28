import { test } from "@playwright/test";

test("Getting the tile of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
  await page.waitForTimeout(3000);
  let actualTitle = await page.title();
  console.log("Actual title: " + actualTitle);
});

test("", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
  let actulLink = await page.url();
  console.log("Actual link: " + actulLink);
});


test("Set the window size", async ({ page }) => {
await page.goto("https://practice.cydeo.com/");
await page.waitForTimeout(3000);
await page.setViewportSize({ width: 1000, height: 1080 });
await page.waitForTimeout(3000);

});
