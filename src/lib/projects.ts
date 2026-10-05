export function filterProjects<T extends { category: string }>(
  projects: readonly T[],
  category: string,
): T[] {
  if (category === "Todos") return [...projects];
  return projects.filter((project) => project.category === category);
}
