import { describe, expect, it } from "vitest";
import { filterProjects, sortFeaturedFirst } from "../../src/lib/projects";

const sampleProjects = [
  { id: 1, title: "Alpha", category: "Dev Tools" },
  { id: 2, title: "Beta", category: "Seguridad" },
];

describe("filterProjects", () => {
  it("returns every project for Todos", () => {
    expect(filterProjects(sampleProjects, "Todos")).toEqual(sampleProjects);
  });

  it("returns only projects in the selected category", () => {
    expect(filterProjects(sampleProjects, "Seguridad")).toEqual([sampleProjects[1]]);
  });

  it("returns no projects for an unknown category", () => {
    expect(filterProjects(sampleProjects, "No existe")).toEqual([]);
  });
});

describe("sortFeaturedFirst", () => {
  it("places featured projects before regular projects", () => {
    const projects = [
      { id: 2, featured: false },
      { id: 1, featured: true },
    ];

    expect(sortFeaturedFirst(projects)).toEqual([projects[1], projects[0]]);
  });
});
