import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const ROOT = process.cwd();
const SITE = "https://nicolasmoreno.site";

const sitemapPaths = (): string[] => {
  const xml = readFileSync(join(ROOT, "public", "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => {
    expect(loc.startsWith(SITE)).toBe(true);
    return loc.slice(SITE.length) || "/";
  });
};

const pageFileFor = (path: string) =>
  join(ROOT, "src", "pages", path === "/" ? "index.astro" : `${path.slice(1)}.astro`);

const redirectSources = (): string[] => {
  const config = JSON.parse(readFileSync(join(ROOT, "vercel.json"), "utf8"));
  return (config.redirects ?? []).map((redirect: { source: string }) => redirect.source);
};

describe("sitemap consistency", () => {
  it("lists only URLs that have a page", () => {
    const missing = sitemapPaths().filter((path) => !existsSync(pageFileFor(path)));
    expect(missing).toEqual([]);
  });

  it("does not list redirected URLs", () => {
    const redirected = sitemapPaths().filter((path) => redirectSources().includes(path));
    expect(redirected).toEqual([]);
  });

  it("lists every indexable page exactly once", () => {
    const paths = sitemapPaths();
    expect(new Set(paths).size).toBe(paths.length);
    for (const required of ["/", "/about", "/projects", "/resume", "/contact"]) {
      expect(paths).toContain(required);
    }
  });
});
