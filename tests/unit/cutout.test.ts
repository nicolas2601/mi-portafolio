import { describe, expect, it } from "vitest";
import { cutoutWords } from "../../src/lib/cutout";

describe("cutoutWords", () => {
  it("splits a title into words made of uppercase letter tiles", () => {
    const words = cutoutWords("n8n fix");
    expect(words.map((word) => word.map((tile) => tile.char).join(""))).toEqual(["N8N", "FIX"]);
  });

  it("is deterministic so server and client render the same tiles", () => {
    expect(cutoutWords("GobIA Auditor")).toEqual(cutoutWords("GobIA Auditor"));
  });

  it("cycles through the tile variants without repeating neighbours", () => {
    const [word] = cutoutWords("ABCDEFGH");
    word.slice(1).forEach((tile, index) => {
      expect(tile.variant).not.toBe(word[index].variant);
    });
    expect(new Set(word.map((tile) => tile.variant)).size).toBeGreaterThan(2);
  });

  it("keeps the tilt small enough to stay readable", () => {
    for (const word of cutoutWords("Plataforma IoT con Dashboard en Tiempo Real")) {
      for (const tile of word) expect(Math.abs(tile.tilt)).toBeLessThanOrEqual(4);
    }
  });

  it("drops punctuation-only fragments and handles empty titles", () => {
    expect(cutoutWords("—")).toEqual([]);
    expect(cutoutWords("   ")).toEqual([]);
  });

  it("keeps accented letters", () => {
    const [word] = cutoutWords("Órdenes");
    expect(word[0].char).toBe("Ó");
  });
});
