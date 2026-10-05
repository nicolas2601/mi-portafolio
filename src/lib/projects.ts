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

function initialsFor(title: string): string {
  const words = title.trim().split(/\s+/).filter(Boolean);
  if (words.length > 1) return words.slice(0, 2).map((word) => word[0]).join("").toUpperCase();
  return title.trim().slice(0, 2).toUpperCase();
}

function toneFor(title: string, category: string): string {
  const seed = `${category}:${title}`;
  let hash = 0;
  for (const character of seed) hash = (hash * 31 + character.charCodeAt(0)) % 4;
  return `tone-${hash}`;
}

export type ProjectCover =
  | { kind: "screenshot"; src: string }
  | { kind: "generated"; initials: string; tone: string };

export function coverFor(project: { image?: string; title: string; category: string }): ProjectCover {
  if (project.image && screenshotPaths.has(project.image)) {
    return { kind: "screenshot", src: project.image };
  }

  return {
    kind: "generated",
    initials: initialsFor(project.title),
    tone: toneFor(project.title, project.category),
  };
}
