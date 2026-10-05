import { useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { menuActionForKey, moveMenuIndex } from "../lib/menu";

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
  moveTo: (index: number) => void,
) {
  const action = menuActionForKey(event.key);
  if (action !== "next" && action !== "previous") return;

  event.preventDefault();
  moveTo(moveMenuIndex(activeIndex, action, itemCount));
}

function menuItemStyle(index: number): CSSProperties {
  return { "--p5-menu-index": index } as CSSProperties;
}

export default function P5Menu({ items = defaultItems }: P5MenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const moveTo = (index: number) => {
    setActiveIndex(index);
    linkRefs.current[index]?.focus();
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="p5-menu"
      onKeyDown={(event) =>
        handleMenuKey(event, activeIndex, items.length, moveTo)
      }
    >
      <ul className="p5-menu__list">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <li
              className="p5-menu-item"
              key={item.href}
              style={menuItemStyle(index)}
            >
              <a
                href={item.href}
                ref={(element) => {
                  linkRefs.current[index] = element;
                }}
                className="p5-menu-link"
                data-active={isActive}
                data-index={index}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span className="p5-menu-link__shape" aria-hidden="true" />
                <span className="p5-menu-link__star" aria-hidden="true" />
                <span className="p5-menu-link__label">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
