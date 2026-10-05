export type MenuAction = "next" | "previous" | "activate" | "ignore";

export function clampMenuIndex(index: number, itemCount: number): number {
  if (itemCount <= 0) return 0;
  return Math.min(Math.max(index, 0), itemCount - 1);
}

export function moveMenuIndex(
  currentIndex: number,
  direction: "next" | "previous",
  itemCount: number,
): number {
  if (itemCount <= 0) return 0;
  const step = direction === "next" ? 1 : -1;
  return clampMenuIndex(currentIndex + step, itemCount);
}

export function menuActionForKey(key: string): MenuAction {
  if (key === "ArrowUp") return "previous";
  if (key === "ArrowDown") return "next";
  if (key === "Enter") return "activate";
  return "ignore";
}
