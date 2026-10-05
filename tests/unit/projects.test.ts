import { describe, expect, it } from "vitest";
import { filterProjects } from "../../src/lib/projects";

const sampleProjects = [
  { id: 1, title: "Alpha", category: "Dev Tools" },
  { id: 2, title: "Beta", category: "Seguridad" },
];

describe("filterProjects", () => {
  it("returns every project for Todos", () => {
    expect(filterProjects(sampleProjects, "Todos")).toEqual(sampleProjects);
  });
});
