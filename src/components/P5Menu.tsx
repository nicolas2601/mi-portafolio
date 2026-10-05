import { useState } from "react";
import type { KeyboardEvent } from "react";
import {
  menuActionForKey,
  moveMenuIndex,
} from "../lib/menu";

export interface P5MenuItem {
  label: string;
  href: string;
}

interface P5MenuProps {
  items?: readonly P5MenuItem[];
}

const defaultItems: readonly P5MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

function handleMenuKey(
  event: KeyboardEvent<HTMLElement>,
  activeIndex: number,
  itemCount: number,
  setActiveIndex: (index: number) => void,
) {
  const action = menuActionForKey(event.key);
  if (action === "ignore") return;

  event.preventDefault();
  if (action === "activate") {
    const activeLink = event.currentTarget.querySelector<HTMLElement>(
      '[data-active="true"]',
    );
    activeLink?.click();
    return;
  }

  setActiveIndex(moveMenuIndex(activeIndex, action, itemCount));
}

export default function P5Menu({ items = defaultItems }: P5MenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav
      aria-label="Primary navigation"
      className="p5-menu w-full max-w-sm"
      onKeyDown={(event) =>
        handleMenuKey(event, activeIndex, items.length, setActiveIndex)
      }
    >
      <ul className="space-y-2">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <li key={item.href}>
              <a
                href={item.href}
                className="p5-menu-link p5-clip-right p5-display p5-tap-target text-2xl"
                data-active={isActive}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="ml-auto text-sm" aria-hidden="true">
                    /
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
