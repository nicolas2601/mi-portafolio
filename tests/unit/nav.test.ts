import { describe, expect, it } from "vitest";
import { isCurrentRoute, neighborsOf, normalizePath, siteRoutes } from "../../src/lib/nav";

describe("normalizePath", () => {
  it("drops trailing slashes but keeps the root", () => {
    expect(normalizePath("/projects/")).toBe("/projects");
    expect(normalizePath("/")).toBe("/");
    expect(normalizePath("")).toBe("/");
  });
});

describe("isCurrentRoute", () => {
  it("matches the exact page, with or without a trailing slash", () => {
    expect(isCurrentRoute("/projects", "/projects")).toBe(true);
    expect(isCurrentRoute("/projects/", "/projects")).toBe(true);
    expect(isCurrentRoute("/about", "/projects")).toBe(false);
  });

  it("only treats the root as current on the root", () => {
    expect(isCurrentRoute("/", "/")).toBe(true);
    expect(isCurrentRoute("/about", "/")).toBe(false);
  });
});

describe("neighborsOf", () => {
  it("returns the previous and next page in reading order", () => {
    const { previous, next } = neighborsOf("/projects");
    expect(previous?.href).toBe("/about");
    expect(next?.href).toBe("/resume");
  });

  it("has no next page at the end and no previous at the start", () => {
    expect(neighborsOf("/contact").next).toBeUndefined();
    expect(neighborsOf("/").previous).toBeUndefined();
  });

  it("returns nothing for pages outside the main flow", () => {
    expect(neighborsOf("/privacy-policy")).toEqual({});
    expect(neighborsOf("/gracias")).toEqual({});
  });
});

describe("siteRoutes", () => {
  it("lists every main page once, starting at home", () => {
    expect(siteRoutes[0].href).toBe("/");
    expect(new Set(siteRoutes.map((route) => route.href)).size).toBe(siteRoutes.length);
  });
});
