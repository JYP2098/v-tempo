"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerGsap } from "@/lib/gsap";
import { watchParts } from "@/lib/watch-parts";

const parts = [
  {
    name: "Balance Wheel",
    desc: "Oscillates 28,800 times per hour",
    image: "balance" as const,
  },
  {
    name: "Gear Train",
    desc: "Transfers power from mainspring to escapement",
    image: "geartrain" as const,
  },
  {
    name: "Escapement",
    desc: "Releases energy in precise increments",
    image: "gears" as const,
  },
  {
    name: "Bridges",
    desc: "Hold components with angulated finishing",
    image: "bridges" as const,
  },
  {
    name: "Mainplate",
    desc: "Foundation with circular graining",
    image: "plate" as const,
  },
  {
    name: "Assembly",
    desc: "Every part placed by hand with tweezers",
    image: "assembly" as const,
  },
];

export default function InsideWatch() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=320%",
          pin: true,
          scrub: 0.8,
        },
      });

      parts.forEach((_, i) => {
        const start = i * 0.14;
        tl.fromTo(
          `.inside-visual-${i}`,
          { opacity: 0, scale: 0.88 },
          { opacity: 1, scale: 1, duration: 0.12 },
          start
        );
        tl.fromTo(
          `.inside-text-${i}`,
          { opacity: 0.2, x: 30 },
          { opacity: 1, x: 0, duration: 0.1 },
          start
        );
        if (i > 0) {
          tl.to(`.inside-visual-${i - 1}`, { opacity: 0, scale: 1.04, duration: 0.08 }, start);
          tl.to(`.inside-text-${i - 1}`, { opacity: 0.2, duration: 0.08 }, start);
        }
      });

      tl.fromTo(
        ".inside-exploded",
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.15 },
        parts.length * 0.14
      );
      tl.to(".inside-part-layer", { opacity: 0, duration: 0.1 }, parts.length * 0.14);
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="inside" className="relative min-h-screen bg-surface/30 px-6 lg:px-10">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center py-24">
        <p className="section-label mb-8">Chapter 06 — Inside the Watch</p>
        <h2 className="display-title mb-12 max-w-2xl text-4xl sm:text-5xl lg:text-6xl">
          Every component has a purpose.
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <div className="absolute inset-0 watch-glow" />
            <div className="relative h-full w-full overflow-hidden rounded-sm border border-line bg-[#111]">
              {parts.map((part, i) => (
                <div
                  key={part.name}
                  className={`inside-part-layer inside-visual-${i} absolute inset-0 ${i === 0 ? "opacity-100" : "opacity-0"}`}
                >
                  <Image
                    src={watchParts[part.image]}
                    alt={part.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 500px"
                  />
                </div>
              ))}

              <div className="inside-exploded absolute inset-0 opacity-0">
                <Image
                  src={watchParts.exploded3d}
                  alt="Complete movement assembly"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 500px"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
            </div>
          </div>

          <div className="space-y-6">
            {parts.map((part, i) => (
              <div key={part.name} className={`inside-text-${i} border-l-2 border-line pl-6`}>
                <span className="section-label text-accent">0{i + 1}</span>
                <h3 className="display-title mt-1 text-2xl">{part.name}</h3>
                <p className="mt-1 text-sm text-muted">{part.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
