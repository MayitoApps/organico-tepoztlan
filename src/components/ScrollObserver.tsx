"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Flag to enable hidden initial state only once JS is active
    document.documentElement.classList.add("js-ready");

    const selector =
      ".reveal-on-scroll, .reveal-fade-in, .reveal-scale-up, .reveal-slide-left, .reveal-slide-right";

    const getTargets = () =>
      Array.from(document.querySelectorAll(selector)) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.12,
      }
    );

    const observeElements = () => {
      const targets = getTargets();
      const viewportHeight = window.innerHeight;

      targets.forEach((target) => {
        if (target.classList.contains("revealed")) return;

        const rect = target.getBoundingClientRect();
        // If element is already substantially visible on screen upon mount
        if (rect.top < viewportHeight * 0.85 && rect.bottom > 0) {
          // Subtle natural delay for elements near the top
          requestAnimationFrame(() => {
            target.classList.add("revealed");
          });
        } else {
          observer.observe(target);
        }
      });
    };

    // Run on mount / path change
    observeElements();

    // Small delayed run to catch late-hydrated elements or images
    const timer = setTimeout(observeElements, 250);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
