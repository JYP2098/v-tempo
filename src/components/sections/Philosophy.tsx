"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".philosophy-line", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="philosophy" className="px-6 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <p className="section-label mb-12">Chapter 01 — Philosophy</p>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="philosophy-line display-title text-5xl sm:text-6xl lg:text-7xl">
              Every watch begins with a story.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="philosophy-line text-lg leading-relaxed text-muted">
              V TEMPO is not just a watch brand — it is a story told in time. Each
              timepiece is a chapter in a larger narrative, crafted with intention and
              emotion, designed to resonate with the soul of its wearer.
            </p>
            <p className="philosophy-line text-lg leading-relaxed text-muted">
              While a phone may keep perfect time, it cannot capture the poetry of a
              mechanical movement ticking against your wrist — encased in materials
              chosen with care, crafted to speak to your story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
