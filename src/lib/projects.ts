export function filterProjects<T extends { category: string }>(
  projects: readonly T[],
  category: string,
): T[] {
  if (category === "Todos") return [...projects];
  return projects.filter((project) => project.category === category);
}

export function sortFeaturedFirst<T extends { featured: boolean }>(
  projects: readonly T[],
): T[] {
  return [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
}
