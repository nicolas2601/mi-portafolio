import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { describe, expect, it } from "vitest";

const ROOT = process.cwd();
const MAX_IMAGE_BYTES = 400 * 1024;
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov"]);
const SOURCE_EXTENSIONS = new Set([".astro", ".ts", ".tsx", ".css"]);
const MANIFEST = join("src", "lib", "p5-assets.ts");
const IGNORED_DIRS = new Set(["node_modules", "dist", ".vercel", ".git", "test-results"]);

function walk(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (IGNORED_DIRS.has(entry.name)) return [];
    const full = join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const rel = (file: string) => relative(ROOT, file);
const sourceFiles = () =>
  ["src", "tests"]
    .flatMap((dir) => walk(join(ROOT, dir)))
    .filter((file) => SOURCE_EXTENSIONS.has(extname(file)));

describe("asset policy", () => {
  it("ships no video files", () => {
    const videos = ["src", "public"]
      .flatMap((dir) => walk(join(ROOT, dir)))
      .filter((file) => VIDEO_EXTENSIONS.has(extname(file)))
      .map(rel);
    expect(videos).toEqual([]);
  });

  it("keeps every p5 image under the weight budget", () => {
    const heavy = walk(join(ROOT, "src", "assets", "p5"))
      .filter((file) => statSync(file).size > MAX_IMAGE_BYTES)
      .map(rel);
    expect(heavy).toEqual([]);
  });

  it("imports p5 assets only through the manifest", () => {
    const offenders = sourceFiles()
      .filter((file) => rel(file) !== MANIFEST && !rel(file).startsWith("tests"))
      .filter((file) => /assets\/p5\//.test(readFileSync(file, "utf8")))
      .map(rel);
    expect(offenders).toEqual([]);
  });

  it("never autoplays or preloads audio", () => {
    const offenders = sourceFiles()
      .filter((file) => !rel(file).startsWith("tests"))
      .filter((file) => {
        const text = readFileSync(file, "utf8");
        return /<audio[^>]*\bautoPlay\b/i.test(text) || /<audio(?![^>]*preload="none")[^>]*>/i.test(text);
      })
      .map(rel);
    expect(offenders).toEqual([]);
  });
});
