"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

const projects = [
  {
    title: "The Architect",
    challenge: "Minimal dial inspired by brutalist geometry",
    materials: "Titanium case, slate dial, black leather",
    result: "A quiet statement piece for daily wear",
  },
  {
    title: "Horizon Line",
    challenge: "Capture a Pacific sunset in enamel",
    materials: "Steel case, gradient enamel dial, mesh bracelet",
    result: "Color that shifts with every angle of light",
  },
  {
    title: "Legacy No. 1",
    challenge: "Commemorate a family milestone",
    materials: "Rose gold, skeleton movement, custom engraving",
    result: "An heirloom designed to outlast generations",
  },
];

export default function Creations() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".creation-card", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="creations" className="px-6 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <p className="section-label mb-8">Chapter 05 — Featured Creations</p>
        <h2 className="display-title mb-16 max-w-2xl text-4xl sm:text-5xl lg:text-6xl">
          Commissions that tell their own story.
        </h2>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="creation-card grid gap-10 border-t border-line pt-16 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <span className="section-label text-accent">Project 0{i + 1}</span>
                <h3 className="display-title mt-4 text-4xl lg:text-5xl">{project.title}</h3>
              </div>
              <div className="space-y-6 lg:col-span-7">
                <div>
                  <span className="section-label">Challenge</span>
                  <p className="mt-2 text-muted">{project.challenge}</p>
                </div>
                <div>
                  <span className="section-label">Materials</span>
                  <p className="mt-2 text-muted">{project.materials}</p>
                </div>
                <div>
                  <span className="section-label">Result</span>
                  <p className="mt-2 text-text">{project.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
