export interface SiteRoute {
  label: string;
  href: string;
  /** Short sentence that says what the page is for. */
  hint: string;
}

/** Reading order of the site: also drives the previous/next links. */
export const siteRoutes: readonly SiteRoute[] = [
  { label: "Home", href: "/", hint: "Back to the main menu" },
  { label: "About", href: "/about", hint: "Who I am" },
  { label: "Projects", href: "/projects", hint: "What I have built" },
  { label: "Resume", href: "/resume", hint: "Experience, skills and CV" },
  { label: "Contact", href: "/contact", hint: "Write to me" },
];

export function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function isCurrentRoute(pathname: string, href: string): boolean {
  return normalizePath(pathname) === normalizePath(href);
}

export function neighborsOf(pathname: string): {
  previous?: SiteRoute;
  next?: SiteRoute;
} {
  const index = siteRoutes.findIndex((route) => isCurrentRoute(pathname, route.href));
  if (index === -1) return {};
  return { previous: siteRoutes[index - 1], next: siteRoutes[index + 1] };
}
