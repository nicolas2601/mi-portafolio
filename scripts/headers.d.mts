export interface HeaderRule {
  source: string;
  headers: Array<{ key: string; value: string }>;
}

export interface BuildOutputRoute {
  src: string;
  headers: Record<string, string>;
  continue: true;
}

export interface BuildOutputConfig {
  version?: number;
  routes?: unknown[];
  [key: string]: unknown;
}

export interface RedirectRule {
  source: string;
  destination: string;
  statusCode?: number;
}

export interface RedirectRoute {
  src: string;
  headers: { Location: string };
  status: number;
}

export function toRedirectRoutes(rules: RedirectRule[] | undefined): RedirectRoute[];

export function toBuildOutputRoutes(rules: HeaderRule[] | undefined): BuildOutputRoute[];

export function injectHeaderRoutes(
  config: BuildOutputConfig,
  headerRoutes: Array<BuildOutputRoute | RedirectRoute>,
): BuildOutputConfig & { routes: unknown[] };
