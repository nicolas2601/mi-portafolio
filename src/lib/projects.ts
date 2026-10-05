export function filterProjects<T extends { category: string }>(
  projects: readonly T[],
  category: string,
): T[] {
  if (category === "Todos") return [...projects];
  return projects.filter((project) => project.category === category);
}

export function sortFeaturedFirst<T extends { featured: boolean; id: number }>(
  projects: readonly T[],
): T[] {
  return [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured) || a.id - b.id,
  );
}

const screenshotPaths = new Set([
  "/iot.png",
  "/lsc-app.png",
  "/reservas-dashboard.png",
]);

export type ProjectCover =
  | { kind: "screenshot"; src: string }
  | { kind: "generated"; initials: string; tone: string };

export function coverFor(project: { image?: string; title: string; category: string }): ProjectCover {
  if (project.image && screenshotPaths.has(project.image)) {
    return { kind: "screenshot", src: project.image };
  }

  return { kind: "generated", initials: "", tone: "" };
}
