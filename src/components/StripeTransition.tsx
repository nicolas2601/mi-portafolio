import { useEffect, useState } from "react";

const STRIPE_TRANSITION_DURATION_MS = 560;

export default function StripeTransition() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;

    const startTransition = () => {
      window.clearTimeout(timeoutId);
      setIsActive(true);
    };

    const finishTransition = () => {
      timeoutId = window.setTimeout(
        () => setIsActive(false),
        STRIPE_TRANSITION_DURATION_MS,
      );
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
