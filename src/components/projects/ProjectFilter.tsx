import { useState } from "react";

interface ProjectFilterProps {
  categories: readonly string[];
}

function setProjectVisibility(category: string) {
  const items = document.querySelectorAll<HTMLElement>("[data-project-item]");
  items.forEach((item) => {
    item.hidden = category !== "Todos" && item.dataset.category !== category;
  });
}

export default function ProjectFilter({ categories }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");

  function selectCategory(category: string) {
    setActiveCategory(category);
    setProjectVisibility(category);
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
    </div>
  );
}
