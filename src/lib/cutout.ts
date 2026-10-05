export interface CutoutTile {
  char: string;
  /** 0-3: which paper cut-out style the tile uses. */
  variant: number;
  /** Rotation in degrees, small enough to stay legible. */
  tilt: number;
}

const VARIANT_COUNT = 4;
const MAX_TILT = 4;
const TILT_STEPS = [-3, 2, -1, 3, -2, 1, 4, -4];

const letterPattern = /[\p{L}\p{N}]/u;

function seedFor(word: string): number {
  let seed = 0;
  for (const char of word) seed = (seed * 31 + char.charCodeAt(0)) % 97;
  return seed;
}

/**
 * Turns a title into ransom-note style tiles. Pure and deterministic so the
 * server render and any client render agree.
 */
export function cutoutWords(title: string): CutoutTile[][] {
  return title
    .toUpperCase()
    .split(/\s+/)
    .map((word) => Array.from(word).filter((char) => letterPattern.test(char)))
    .filter((letters) => letters.length > 0)
    .map((letters, wordIndex) => {
      const seed = seedFor(letters.join("")) + wordIndex;
      return letters.map((char, index) => ({
        char,
        variant: (seed + index) % VARIANT_COUNT,
        tilt: Math.max(-MAX_TILT, Math.min(MAX_TILT, TILT_STEPS[(seed + index * 3) % TILT_STEPS.length])),
      }));
    });
}
