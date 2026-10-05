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

export interface MenuKeyContext {
  /** Ctrl, Alt or Meta is held: the key belongs to a browser shortcut. */
  hasModifier: boolean;
  /** The user is typing in a field or another editable control. */
  isEditing: boolean;
  /** Nothing interactive has focus, so Enter would do nothing on its own. */
  focusIsOnPage: boolean;
}

const NEXT_KEYS = new Set(["ArrowDown", "s", "S"]);
const PREVIOUS_KEYS = new Set(["ArrowUp", "w", "W"]);

export function resolveMenuKey(key: string, context: MenuKeyContext): MenuAction {
  if (context.hasModifier || context.isEditing) return "ignore";
  if (NEXT_KEYS.has(key)) return "next";
  if (PREVIOUS_KEYS.has(key)) return "previous";
  if (key === "Enter" && context.focusIsOnPage) return "activate";
  return "ignore";
}
