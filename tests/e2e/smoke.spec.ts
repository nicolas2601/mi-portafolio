import { expect, test } from "@playwright/test";

const SITE = "https://nicolasmoreno.site";
const ROUTES = ["/", "/about", "/projects", "/resume", "/contact", "/privacy-policy"];
const MAX_TITLE = 60;
const DESCRIPTION_RANGE = { min: 120, max: 160 };
const MOBILE = { width: 375, height: 812 };

for (const route of ROUTES) {
  test.describe(`route ${route}`, () => {
    test("returns 200 with one h1, canonical and unique metadata", async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);

      await expect(page.locator("h1")).toHaveCount(1);

      const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
      expect(canonical).toBe(`${SITE}${route}`);

      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);
      expect(title.length).toBeLessThanOrEqual(MAX_TITLE);

      const description = await page.locator('meta[name="description"]').getAttribute("content");
      expect(description?.length ?? 0).toBeGreaterThanOrEqual(DESCRIPTION_RANGE.min);
      expect(description?.length ?? 0).toBeLessThanOrEqual(DESCRIPTION_RANGE.max);
    });

    test("has no horizontal scroll at 375px", async ({ page }) => {
      await page.setViewportSize(MOBILE);
      await page.goto(route);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });

    test("issues no audio request on first load", async ({ page }) => {
      const audioRequests: string[] = [];
      page.on("request", (request) => {
        if (request.url().includes("/audio/")) audioRequests.push(request.url());
      });
      await page.goto(route);
      await page.waitForLoadState("networkidle");
      expect(audioRequests).toEqual([]);
    });
  });
}

test("titles are unique across routes", async ({ page }) => {
  const titles: string[] = [];
  for (const route of ROUTES) {
    await page.goto(route);
    titles.push(await page.title());
  }
  expect(new Set(titles).size).toBe(titles.length);
});

test.describe("home menu", () => {
  test("menu links exist without JavaScript", async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto("/");
    const hrefs = await page
      .getByRole("navigation", { name: "Primary navigation" })
      .getByRole("link")
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    expect(hrefs).toEqual(["/about", "/projects", "/resume", "/contact"]);
    await context.close();
  });

  test("arrow keys move the active entry and Enter follows it", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const menu = page.getByRole("navigation", { name: "Primary navigation" });
    await menu.getByRole("link").first().focus();

    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await expect(menu.locator('[data-active="true"]')).toHaveAttribute("href", "/resume");

    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/\/resume$/);
  });

  test("keyboard cannot move before the first entry", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const menu = page.getByRole("navigation", { name: "Primary navigation" });
    await menu.getByRole("link").first().focus();
    await page.keyboard.press("ArrowUp");
    await expect(menu.locator('[data-active="true"]')).toHaveAttribute("href", "/about");
  });
});
