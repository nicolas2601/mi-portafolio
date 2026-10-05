import { useEffect, useState } from "react";
import { filterProjects } from "../../lib/projects";

interface ProjectFilterProps {
  categories: readonly string[];
}

interface Counts {
  visible: number;
  total: number;
}

function readItems() {
  return Array.from(document.querySelectorAll<HTMLElement>("[data-project-item]")).map(
    (element) => ({ element, category: element.dataset.category ?? "" }),
  );
}

function hideEmptyGroups() {
  document.querySelectorAll<HTMLElement>(".projects-group").forEach((group) => {
    group.hidden = group.querySelector("[data-project-item]:not([hidden])") === null;
  });
}

function applyCategory(category: string): Counts {
  const items = readItems();
  const visible = new Set(filterProjects(items, category).map((item) => item.element));
  items.forEach((item) => {
    item.element.hidden = !visible.has(item.element);
  });
  hideEmptyGroups();
  return { visible: visible.size, total: items.length };
}

export default function ProjectFilter({ categories }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [counts, setCounts] = useState<Counts | null>(null);

  useEffect(() => {
    setCounts(applyCategory("Todos"));
  }, []);

  function selectCategory(category: string) {
    setActiveCategory(category);
    setCounts(applyCategory(category));
  }

  return (
    <div className="project-filter" role="group" aria-label="Filter projects by category">
      <span className="project-filter__label">FILTER</span>
      <div className="project-filter__chips">
        {categories.map((category) => (
          <button
            className="project-filter__chip"
            type="button"
            key={category}
            aria-pressed={activeCategory === category}
            onClick={() => selectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="project-filter__count" role="status">
        {counts ? `Showing ${counts.visible} of ${counts.total} projects` : ""}
      </p>
    </div>
  );
}
