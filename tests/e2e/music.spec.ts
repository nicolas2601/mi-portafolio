import { expect, test } from "@playwright/test";

test.describe("background music", () => {
  test("is off on first load and starts only after a click", async ({ page }) => {
    const audioRequests: string[] = [];
    page.on("request", (request) => {
      if (request.url().includes("/audio/")) audioRequests.push(request.url());
    });

    await page.goto("/", { waitUntil: "networkidle" });
    const toggle = page.getByRole("button", { name: /^music$/i });
    await expect(toggle).toHaveAttribute("aria-pressed", "false");
    expect(audioRequests).toEqual([]);

    await toggle.click();
    await expect(page.getByRole("button", { name: /^music$/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect
      .poll(() => page.evaluate(() => document.querySelector("audio")?.currentTime ?? 0))
      .toBeGreaterThan(0);
  });

  test("keeps playing when navigating to another page", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: /^music$/i }).click();
    await expect.poll(() => page.evaluate(() => document.querySelector("audio")?.paused)).toBe(false);

    await page.getByRole("link", { name: /^about me$/i }).first().click();
    await expect(page).toHaveURL(/\/about$/);

    await expect.poll(() => page.evaluate(() => document.querySelector("audio")?.paused)).toBe(false);
  });

  test("turns off again with the same button", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: /^music$/i }).click();
    await page.getByRole("button", { name: /^music$/i }).click();
    await expect(page.getByRole("button", { name: /^music$/i })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    await expect.poll(() => page.evaluate(() => document.querySelector("audio")?.paused)).toBe(true);
  });

  test("resumes on the first click for a visitor who left music on", async ({ page }) => {
    await page.addInitScript(() => window.localStorage.setItem("p5-bgm-enabled", "1"));
    await page.goto("/", { waitUntil: "networkidle" });
    await expect.poll(() => page.evaluate(() => document.querySelector("audio")?.paused)).toBe(true);

    await page.mouse.click(5, 300);
    await expect.poll(() => page.evaluate(() => document.querySelector("audio")?.paused)).toBe(false);
  });

  test("still works when localStorage throws", async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(window, "localStorage", {
        get() {
          throw new Error("blocked");
        },
      });
    });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: /^music$/i }).click();
    await expect.poll(() => page.evaluate(() => document.querySelector("audio")?.paused)).toBe(false);
  });
});
