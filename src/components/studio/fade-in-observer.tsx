"use client";

import { useEffect } from "react";

const PENDING_FADE_SELECTOR = ".studio-fade-in:not([data-revealed])";

function observeFades(): (() => void) | undefined {
  const main = document.querySelector("main");
  if (!main) {
    return;
  }

  const pendingElements = new Set<Element>();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const viewportObserver =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.setAttribute("data-revealed", "true");
                viewportObserver?.unobserve(entry.target);
                pendingElements.delete(entry.target);
              }
            }
          },
          { rootMargin: "50px", threshold: 0 }
        )
      : null;

  const observeElements = () => {
    for (const element of pendingElements) {
      if (!main.contains(element)) {
        viewportObserver?.unobserve(element);
        pendingElements.delete(element);
      }
    }

    const elements = main.querySelectorAll(PENDING_FADE_SELECTOR);
    if (!viewportObserver || reducedMotion.matches) {
      for (const element of elements) {
        element.setAttribute("data-revealed", "true");
        viewportObserver?.unobserve(element);
        pendingElements.delete(element);
      }
      return;
    }

    for (const element of elements) {
      if (!pendingElements.has(element)) {
        pendingElements.add(element);
        viewportObserver.observe(element);
      }
    }
  };

  // Discover streamed content and client navigations without remounting fades.
  const mutationObserver = new MutationObserver(observeElements);
  mutationObserver.observe(main, { childList: true, subtree: true });
  reducedMotion.addEventListener("change", observeElements);
  observeElements();

  return () => {
    mutationObserver.disconnect();
    viewportObserver?.disconnect();
    reducedMotion.removeEventListener("change", observeElements);
    pendingElements.clear();
  };
}

export default function FadeInObserver() {
  useEffect(observeFades, []);

  return null;
}
