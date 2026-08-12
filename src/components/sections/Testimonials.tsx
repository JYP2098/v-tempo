"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { shouldUseHeavyMotion } from "@/lib/motion-prefs";

const quotes = [
  {
    text: "I wanted something that felt like me — not like anything in a boutique. V TEMPO understood that immediately.",
    author: "Commission client",
    project: "The Architect",
  },
  {
    text: "The process was as memorable as the watch itself. Every detail was discussed, refined, and perfected.",
    author: "Commission client",
    project: "Horizon Line",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    if (!ref.current || !shouldUseHeavyMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".testimonial", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="testimonials" className="px-6 py-20 sm:py-32 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <p className="section-label mb-8">Chapter 07 — Client Stories</p>

        <div className="grid gap-16 lg:grid-cols-2">
          {quotes.map((q) => (
            <blockquote key={q.project} className="testimonial border-l border-accent pl-8">
              <p className="display-title text-2xl leading-snug lg:text-3xl">&ldquo;{q.text}&rdquo;</p>
              <footer className="mt-8">
                <p className="text-sm text-text">{q.author}</p>
                <p className="section-label mt-1">{q.project}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
