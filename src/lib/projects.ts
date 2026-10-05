export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectRecord {
  id: number;
  title: string;
  description: string;
  tech: readonly string[];
  category: string;
  featured: boolean;
  metrics: readonly ProjectMetric[];
  image?: string;
  github?: string;
}

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
  const initials = title
    .trim()
    .split(/\s+/)
    .map((word) => word.match(/[\p{L}\p{N}]/u)?.[0])
    .filter((initial): initial is string => Boolean(initial));
  if (initials.length > 1) return initials.slice(0, 2).join("").toUpperCase();
  return title.replace(/[^\p{L}\p{N}]/gu, "").slice(0, 2).toUpperCase();
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

export function coverFor(
  project: Pick<ProjectRecord, "image" | "title" | "category">,
): ProjectCover {
  if (project.image && screenshotPaths.has(project.image)) {
    return { kind: "screenshot", src: project.image };
  }

  return {
    kind: "generated",
    initials: initialsFor(project.title),
    tone: toneFor(project.title, project.category),
  };
}
