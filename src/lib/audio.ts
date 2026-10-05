export function clampVolume(value: number): number {
  return Math.min(Math.max(value, 0), 1);
}
