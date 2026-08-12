"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

const stages = [
  { num: "01", title: "Idea", desc: "Your story, references, and intent" },
  { num: "02", title: "Sketch", desc: "Hand-drawn concepts and proportions" },
  { num: "03", title: "CAD", desc: "Precision digital modeling" },
  { num: "04", title: "Prototype", desc: "First physical form" },
  { num: "05", title: "Assembly", desc: "Movement, dial, case, strap" },
  { num: "06", title: "Final", desc: "Your one-of-one timepiece" },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        x: 80,
        opacity: 0,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".process-rail",
          start: "top 75%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="process" className="px-6 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <p className="section-label mb-8">Chapter 03 — Design Process</p>
        <h2 className="display-title mb-16 max-w-2xl text-4xl sm:text-5xl lg:text-6xl">
          From first conversation to finished masterpiece.
        </h2>

        <div className="process-rail flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide lg:gap-8">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="process-step min-w-[240px] flex-shrink-0 snap-start border border-line bg-surface/50 p-8 lg:min-w-[280px]"
            >
              <span className="section-label text-accent">{stage.num}</span>
              <h3 className="display-title mt-4 text-3xl">{stage.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
