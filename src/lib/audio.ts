export function clampVolume(value: number): number {
  return Math.min(Math.max(value, 0), 1);
}

export function createFadeSteps(
  from: number,
  to: number,
  stepCount: number,
): number[] {
  if (stepCount <= 0) return [];

  const step = (to - from) / stepCount;
  return Array.from(
    { length: stepCount },
    (_, index) => from + step * (index + 1),
  );
}
