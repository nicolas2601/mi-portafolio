import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { moveMenuIndex, resolveMenuKey } from "../lib/menu";

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

const EDITABLE_SELECTOR = "input, textarea, select, [contenteditable='true'], [role='slider']";

function menuItemStyle(index: number): CSSProperties {
  return { "--p5-menu-index": index } as CSSProperties;
}

function isEditableTarget(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest(EDITABLE_SELECTOR) !== null;
}

function isInViewport(element: Element | null): boolean {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight;
}

export default function P5Menu({ items = defaultItems }: P5MenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const select = (index: number) => {
    activeIndexRef.current = index;
    setActiveIndex(index);
  };

  // The menu answers to the keyboard from anywhere on the page, like a game
  // menu: arrows or W/S move, Enter opens. It steps aside while the user is
  // typing or after the menu has scrolled out of view.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || !isInViewport(navRef.current)) return;

      const action = resolveMenuKey(event.key, {
        hasModifier: event.ctrlKey || event.altKey || event.metaKey,
        isEditing: isEditableTarget(event.target),
        focusIsOnPage:
          document.activeElement === document.body ||
          document.activeElement === null,
      });
      if (action === "ignore") return;

      event.preventDefault();
      if (action === "activate") {
        linkRefs.current[activeIndexRef.current]?.click();
        return;
      }

      const next = moveMenuIndex(activeIndexRef.current, action, items.length);
      select(next);
      linkRefs.current[next]?.focus({ preventScroll: true });
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [items.length]);

  return (
    <nav ref={navRef} aria-label="Primary navigation" className="p5-menu">
      <ul className="p5-menu__list">
        {items.map((item, index) => (
          <li className="p5-menu-item" key={item.href} style={menuItemStyle(index)}>
            <a
              href={item.href}
              ref={(element) => {
                linkRefs.current[index] = element;
              }}
              className="p5-menu-link"
              data-active={index === activeIndex}
              data-index={index}
              onFocus={() => select(index)}
              onMouseEnter={() => select(index)}
            >
              <span className="p5-menu-link__shape" aria-hidden="true" />
              <span className="p5-menu-link__star" aria-hidden="true" />
              <span className="p5-menu-link__label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="p5-menu__hint" aria-hidden="true">
        <kbd>↑</kbd>
        <kbd>↓</kbd>
        <span>move</span>
        <kbd>Enter</kbd>
        <span>open</span>
      </p>
    </nav>
  );
}
