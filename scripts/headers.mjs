/**
 * Pure helpers to turn the `headers` rules of vercel.json into Vercel Build
 * Output API routes. With the Astro Vercel adapter the deployment is driven by
 * `.vercel/output/config.json`, which ignores the `headers` of vercel.json.
 */

/**
 * @param {Array<{ source: string, headers: Array<{ key: string, value: string }> }> | undefined} rules
 * @returns {Array<{ src: string, headers: Record<string, string>, continue: true }>}
 */
export function toBuildOutputRoutes(rules) {
  if (!rules) return [];

  return rules.map((rule) => ({
    src: rule.source,
    headers: Object.fromEntries(rule.headers.map(({ key, value }) => [key, value])),
    continue: true,
  }));
}

const DEFAULT_REDIRECT_STATUS = 308;

/**
 * @param {Array<{ source: string, destination: string, statusCode?: number }> | undefined} rules
 */
export function toRedirectRoutes(rules) {
  if (!rules) return [];

  return rules.map((rule) => ({
    src: rule.source,
    headers: { Location: rule.destination },
    status: rule.statusCode ?? DEFAULT_REDIRECT_STATUS,
  }));
}

const isSameRoute = (a, b) => JSON.stringify(a) === JSON.stringify(b);

/**
 * Returns a new config with the header routes placed before every other route,
 * so they are evaluated before the filesystem handler. Safe to run twice.
 *
 * @param {{ routes?: unknown[] } & Record<string, unknown>} config
 * @param {Array<Record<string, unknown>>} headerRoutes
 */
export function injectHeaderRoutes(config, headerRoutes) {
  const others = (config.routes ?? []).filter(
    (route) => !headerRoutes.some((headerRoute) => isSameRoute(route, headerRoute)),
  );
  return { ...config, routes: [...headerRoutes, ...others] };
}
