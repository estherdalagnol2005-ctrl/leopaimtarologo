"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".hero-copy > *",
  ".hero-visual",
  ".marquee",
  ".section-kicker",
  ".services-intro > *",
  ".tarot-carousel",
  ".about-heading > *",
  ".about-feature > *",
  ".process-header > *",
  ".process-timeline",
  ".final-cta > *",
  "footer > *:not(.disclaimer)",
].join(",");

export default function ScrollReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));

    items.forEach((item, index) => {
      item.classList.add("reveal-item");
      item.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
    });

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0.12 },
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
