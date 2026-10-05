import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { injectHeaderRoutes, toBuildOutputRoutes, toRedirectRoutes } from "./headers.mjs";

const root = process.cwd();
const configPath = join(root, ".vercel", "output", "config.json");

if (!existsSync(configPath)) {
  console.error(`inject-headers: ${configPath} not found. Run "astro build" first.`);
  process.exit(1);
}

const vercelConfig = JSON.parse(readFileSync(join(root, "vercel.json"), "utf8"));
const headerRoutes = [
  ...toRedirectRoutes(vercelConfig.redirects),
  ...toBuildOutputRoutes(vercelConfig.headers),
];
const buildConfig = JSON.parse(readFileSync(configPath, "utf8"));
const merged = injectHeaderRoutes(buildConfig, headerRoutes);

writeFileSync(configPath, `${JSON.stringify(merged, null, 2)}\n`);
console.log(`inject-headers: ${headerRoutes.length} redirect/header route(s) written to ${configPath}`);
