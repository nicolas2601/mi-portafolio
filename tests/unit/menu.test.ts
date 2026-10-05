import { describe, expect, it } from "vitest";
import { clampMenuIndex, moveMenuIndex } from "../../src/lib/menu";

describe("clampMenuIndex", () => {
  it("keeps an index inside the menu bounds", () => {
    expect(clampMenuIndex(-1, 5)).toBe(0);
    expect(clampMenuIndex(8, 5)).toBe(4);
  });
});

describe("moveMenuIndex", () => {
  it("moves in either direction without leaving the menu", () => {
    expect(moveMenuIndex(0, "next", 5)).toBe(1);
    expect(moveMenuIndex(4, "next", 5)).toBe(4);
    expect(moveMenuIndex(4, "previous", 5)).toBe(3);
    expect(moveMenuIndex(0, "previous", 5)).toBe(0);
  });
});
