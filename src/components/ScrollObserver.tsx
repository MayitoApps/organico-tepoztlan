"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Enable JS ready flag
    document.documentElement.classList.add("js-ready");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll(
        ".reveal, .reveal-scale, .reveal-fade, .reveal-left, .reveal-right, [data-reveal], .reveal-on-scroll, .reveal-scale-up, .reveal-fade-in, .reveal-slide-left, .reveal-slide-right"
      ).forEach((el) => {
        el.classList.add("is-revealed", "revealed");
      });
      return;
    }

    let observer: IntersectionObserver | null = null;

    const scanAndObserve = () => {
      // 1. Any container with .reveal-stagger automatically equips all direct children
      document.querySelectorAll<HTMLElement>(".reveal-stagger").forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[];
        children.forEach((child, idx) => {
          const hasVariant =
            child.classList.contains("reveal") ||
            child.classList.contains("reveal-scale") ||
            child.classList.contains("reveal-fade") ||
            child.classList.contains("reveal-left") ||
            child.classList.contains("reveal-right");
          if (!hasVariant) {
            child.classList.add("reveal");
          }
          if (!child.style.transitionDelay) {
            const delay = (idx % 8) * 110;
            child.style.transitionDelay = `${delay}ms`;
          }
        });
      });

      // 2. Setup intersection observer
      if (!observer) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-revealed", "revealed");
                observer?.unobserve(entry.target);
              }
            });
          },
          {
            rootMargin: "0px 0px -40px 0px",
            threshold: 0.1,
          }
        );
      }

      // 3. Register all target elements
      const targets = document.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-scale, .reveal-fade, .reveal-left, .reveal-right, [data-reveal], .reveal-on-scroll, .reveal-scale-up, .reveal-fade-in, .reveal-slide-left, .reveal-slide-right"
      );

      targets.forEach((el) => {
        if (el.classList.contains("is-revealed") || el.classList.contains("revealed")) return;

        const rect = el.getBoundingClientRect();
        const isInitialTopFold = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        if (rect.bottom < 50 || isInitialTopFold) {
          el.classList.add("is-revealed", "revealed");
        } else {
          observer?.observe(el);
        }
      });
    };

    scanAndObserve();
    const frameId = requestAnimationFrame(() => scanAndObserve());
    const timer1 = setTimeout(() => scanAndObserve(), 250);
    const timer2 = setTimeout(() => scanAndObserve(), 750);

    const safetyTimer = setTimeout(() => {
      document.querySelectorAll(
        ".reveal, .reveal-scale, .reveal-fade, .reveal-left, .reveal-right, [data-reveal], .reveal-on-scroll, .reveal-scale-up, .reveal-fade-in, .reveal-slide-left, .reveal-slide-right"
      ).forEach((el) => {
        el.classList.add("is-revealed", "revealed");
      });
    }, 3500);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(safetyTimer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
