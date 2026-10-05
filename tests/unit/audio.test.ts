import { describe, expect, it } from "vitest";
import { clampVolume } from "../../src/lib/audio";

describe("clampVolume", () => {
  it("keeps a volume value inside the audio range", () => {
    expect(clampVolume(0.35)).toBe(0.35);
  });
});
