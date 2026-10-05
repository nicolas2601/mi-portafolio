import { describe, expect, it } from "vitest";
import {
  clampMenuIndex,
  menuActionForKey,
  moveMenuIndex,
  resolveMenuKey,
} from "../../src/lib/menu";

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

describe("menuActionForKey", () => {
  it("maps supported keyboard controls to menu actions", () => {
    expect(menuActionForKey("ArrowUp")).toBe("previous");
    expect(menuActionForKey("ArrowDown")).toBe("next");
    expect(menuActionForKey("Enter")).toBe("activate");
    expect(menuActionForKey("Escape")).toBe("ignore");
  });
});

describe("resolveMenuKey", () => {
  const idle = { hasModifier: false, isEditing: false, focusIsOnPage: true };

  it("accepts arrows and W/S from anywhere on the page", () => {
    expect(resolveMenuKey("ArrowDown", idle)).toBe("next");
    expect(resolveMenuKey("ArrowUp", idle)).toBe("previous");
    expect(resolveMenuKey("s", idle)).toBe("next");
    expect(resolveMenuKey("W", idle)).toBe("previous");
  });

  it("opens the active entry with Enter only when nothing else has focus", () => {
    expect(resolveMenuKey("Enter", idle)).toBe("activate");
    expect(resolveMenuKey("Enter", { ...idle, focusIsOnPage: false })).toBe("ignore");
  });

  it("never steals keys from text fields or shortcuts", () => {
    expect(resolveMenuKey("ArrowDown", { ...idle, isEditing: true })).toBe("ignore");
    expect(resolveMenuKey("s", { ...idle, isEditing: true })).toBe("ignore");
    expect(resolveMenuKey("ArrowDown", { ...idle, hasModifier: true })).toBe("ignore");
  });

  it("ignores unrelated keys", () => {
    expect(resolveMenuKey("Tab", idle)).toBe("ignore");
    expect(resolveMenuKey("Escape", idle)).toBe("ignore");
  });
});
