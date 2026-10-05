import { describe, expect, it } from "vitest";
import { clampVolume, createFadeSteps } from "../../src/lib/audio";

describe("clampVolume", () => {
  it("keeps a volume value inside the audio range", () => {
    expect(clampVolume(0.35)).toBe(0.35);
  });

  it("clamps values below and above the audio range", () => {
    expect(clampVolume(-1)).toBe(0);
    expect(clampVolume(2)).toBe(1);
  });
});

describe("createFadeSteps", () => {
  it("returns evenly spaced values up to the target", () => {
    expect(createFadeSteps(0, 1, 4)).toEqual([0.25, 0.5, 0.75, 1]);
  });

  it("supports fading down", () => {
    expect(createFadeSteps(1, 0, 2)).toEqual([0.5, 0]);
  });
});
