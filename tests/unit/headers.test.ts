import { describe, expect, it } from "vitest";
import { injectHeaderRoutes, toBuildOutputRoutes, toRedirectRoutes } from "../../scripts/headers.mjs";

const vercelHeaders = [
  {
    source: "/(.*)",
    headers: [
      { key: "X-Frame-Options", value: "DENY" },
      { key: "X-Content-Type-Options", value: "nosniff" },
    ],
  },
  {
    source: "/CV_Nicolas_Moreno.pdf",
    headers: [{ key: "Content-Disposition", value: 'attachment; filename="cv.pdf"' }],
  },
];

describe("toBuildOutputRoutes", () => {
  it("converts vercel.json header rules into Build Output routes", () => {
    const routes = toBuildOutputRoutes(vercelHeaders);
    expect(routes).toEqual([
      {
        src: "/(.*)",
        headers: { "X-Frame-Options": "DENY", "X-Content-Type-Options": "nosniff" },
        continue: true,
      },
      {
        src: "/CV_Nicolas_Moreno.pdf",
        headers: { "Content-Disposition": 'attachment; filename="cv.pdf"' },
        continue: true,
      },
    ]);
  });

  it("returns no routes when there are no header rules", () => {
    expect(toBuildOutputRoutes([])).toEqual([]);
    expect(toBuildOutputRoutes(undefined)).toEqual([]);
  });
});

describe("injectHeaderRoutes", () => {
  const headerRoutes = toBuildOutputRoutes(vercelHeaders);

  it("places header routes before the filesystem handler", () => {
    const config = { version: 3, routes: [{ handle: "filesystem" }, { src: "/x", dest: "/y" }] };
    const result = injectHeaderRoutes(config, headerRoutes);
    expect(result.routes.slice(0, 2)).toEqual(headerRoutes);
    expect(result.routes[2]).toEqual({ handle: "filesystem" });
  });

  it("is idempotent when run twice", () => {
    const config = { version: 3, routes: [{ handle: "filesystem" }] };
    const once = injectHeaderRoutes(config, headerRoutes);
    const twice = injectHeaderRoutes(once, headerRoutes);
    expect(twice.routes).toEqual(once.routes);
  });

  it("creates the routes list when the config has none", () => {
    const result = injectHeaderRoutes({ version: 3 }, headerRoutes);
    expect(result.routes).toEqual(headerRoutes);
  });

  it("does not mutate its input", () => {
    const config = { version: 3, routes: [{ handle: "filesystem" }] };
    injectHeaderRoutes(config, headerRoutes);
    expect(config.routes).toEqual([{ handle: "filesystem" }]);
  });
});

describe("toRedirectRoutes", () => {
  it("converts vercel.json redirects into Build Output redirect routes", () => {
    expect(toRedirectRoutes([{ source: "/services", destination: "/", statusCode: 301 }])).toEqual([
      { src: "/services", headers: { Location: "/" }, status: 301 },
    ]);
  });

  it("defaults to a permanent redirect and tolerates no rules", () => {
    expect(toRedirectRoutes([{ source: "/old", destination: "/new" }])[0].status).toBe(308);
    expect(toRedirectRoutes(undefined)).toEqual([]);
  });

  it("is placed before filesystem together with header routes", () => {
    const redirects = toRedirectRoutes([{ source: "/services", destination: "/", statusCode: 301 }]);
    const result = injectHeaderRoutes({ routes: [{ handle: "filesystem" }] }, redirects);
    expect(result.routes).toEqual([...redirects, { handle: "filesystem" }]);
  });
});
