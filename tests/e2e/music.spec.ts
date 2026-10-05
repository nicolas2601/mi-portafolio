import { expect, test } from "@playwright/test";

const PLAY_SETTLE_MS = 1200;

test.describe("background music", () => {
  test("is off on first load and starts only after a click", async ({ page }) => {
    const audioRequests: string[] = [];
    page.on("request", (request) => {
      if (request.url().includes("/audio/")) audioRequests.push(request.url());
    });

    await page.goto("/", { waitUntil: "networkidle" });
    const toggle = page.getByRole("button", { name: /turn background music on/i });
    await expect(toggle).toHaveAttribute("aria-pressed", "false");
    expect(audioRequests).toEqual([]);

    await toggle.click();
    await expect(page.getByRole("button", { name: /turn background music off/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await page.waitForTimeout(PLAY_SETTLE_MS);

    const isPlaying = await page.evaluate(() => {
      const audio = document.querySelector("audio");
      return Boolean(audio && !audio.paused && audio.currentTime > 0);
    });
    expect(isPlaying).toBe(true);
  });

  test("keeps playing when navigating to another page", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: /turn background music on/i }).click();
    await page.waitForTimeout(PLAY_SETTLE_MS);

    await page.getByRole("link", { name: /^about me$/i }).first().click();
    await expect(page).toHaveURL(/\/about$/);
    await page.waitForTimeout(PLAY_SETTLE_MS);

    const stillPlaying = await page.evaluate(() => {
      const audio = document.querySelector("audio");
      return Boolean(audio && !audio.paused);
    });
    expect(stillPlaying).toBe(true);
  });

  test("turns off again with the same button", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: /turn background music on/i }).click();
    await page.getByRole("button", { name: /turn background music off/i }).click();
    await expect(page.getByRole("button", { name: /turn background music on/i })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });
});
