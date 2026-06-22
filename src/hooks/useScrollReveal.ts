"use client";

import { useEffect, useRef } from "react";

/**
 * Intersection Observer-based scroll reveal fallback.
 * Used when scroll-driven animations (animation-timeline) are not supported.
 */
export function useScrollReveal() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Check if native scroll-driven animations are supported
    const supportsScrollTimeline = CSS.supports("animation-timeline: view()");
    if (supportsScrollTimeline) return; // Native handles it

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Map CSS animation classes to IO fallback classes
            if (el.classList.contains("clip-reveal")) {
              el.classList.remove("clip-reveal");
              el.classList.add("io-clip-visible");
            }
            if (el.classList.contains("text-reveal")) {
              el.classList.remove("text-reveal");
              el.classList.add("io-text-visible");
            }
            if (el.classList.contains("slide-up")) {
              el.classList.remove("slide-up");
              el.classList.add("io-visible");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all animated elements
    document.querySelectorAll(".clip-reveal, .text-reveal, .slide-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
