import { describe, expect, it } from "vitest";
import { clampMenuIndex } from "../../src/lib/menu";

describe("clampMenuIndex", () => {
  it("keeps an index inside the menu bounds", () => {
    expect(clampMenuIndex(-1, 5)).toBe(0);
    expect(clampMenuIndex(8, 5)).toBe(4);
  });
});
