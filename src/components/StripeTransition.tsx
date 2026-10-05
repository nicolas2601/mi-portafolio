import { useEffect, useState } from "react";

const STRIPE_TRANSITION_DURATION_MS = 560;

export default function StripeTransition() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;
    let startedAt = 0;

    const startTransition = () => {
      window.clearTimeout(timeoutId);
      startedAt = performance.now();
      setIsActive(true);
    };

    // The overlay keeps animating across the page swap and ends exactly when
    // its keyframes do, measured from the moment the navigation started.
    const finishTransition = () => {
      const remaining = Math.max(
        STRIPE_TRANSITION_DURATION_MS - (performance.now() - startedAt),
        0,
      );
      timeoutId = window.setTimeout(() => setIsActive(false), remaining);
    };

    document.addEventListener("astro:before-preparation", startTransition);
    document.addEventListener("astro:after-swap", finishTransition);

    return () => {
      window.clearTimeout(timeoutId);
      document.removeEventListener("astro:before-preparation", startTransition);
      document.removeEventListener("astro:after-swap", finishTransition);
    };
  }, []);

  return (
    <div
      className="p5-stripe-overlay"
      data-active={isActive}
      aria-hidden="true"
    />
  );
}
