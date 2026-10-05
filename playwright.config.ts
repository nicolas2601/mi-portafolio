import { defineConfig, devices } from "@playwright/test";

const externalBaseUrl = process.env.E2E_BASE_URL;
const localBaseUrl = "http://127.0.0.1:4321";

export default defineConfig({
  testDir: "./tests/e2e",
  use: {
    baseURL: externalBaseUrl ?? localBaseUrl,
    trace: "on-first-retry",
  },
  webServer: externalBaseUrl
    ? undefined
    : {
        command: "npm run dev -- --host 127.0.0.1",
        url: localBaseUrl,
        reuseExistingServer: true,
      },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
