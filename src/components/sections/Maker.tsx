"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerGsap } from "@/lib/gsap";

export default function Maker() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".maker-content > *", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
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
    <section ref={ref} id="maker" className="relative px-6 py-32 lg:px-10 lg:py-48">
      <div className="absolute inset-0 watch-glow opacity-30" />
      <div className="maker-content relative mx-auto max-w-7xl">
        <p className="section-label mb-8">Chapter 06 — Meet the Maker</p>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface/30">
            <Image
              src="/vitor-maker.png"
              alt="Vitor at his watchmaking bench"
              fill
              className="object-cover object-center grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-bg/20" />
          </div>

          <div>
            <h2 className="display-title text-4xl sm:text-5xl lg:text-6xl">
              A story told in time.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
              <p>
                V TEMPO is not just a watch brand — it is a story told in time. Founded
                by Vitor, a self-taught watchmaker and perfumer, the atelier is the
                embodiment of passion, resilience, and artistic expression.
              </p>
              <p>
                The name carries weight: <em className="text-text not-italic">V</em> for
                Vitor, victory, vengeance, voice — and{" "}
                <em className="text-text not-italic">Tempo</em>, the Portuguese word for
                time, a nod to his Brazilian roots. Together, they form a brand that
                honors both personal history and the universal rhythm we all move to.
              </p>
              <p>
                The feather in the logo is a tribute to Blackbird — a song that carried
                Vitor through life&apos;s darkest moments, and a symbol of flight,
                freedom, and connection to his father. A quiet reminder that time, like
                a bird, flies.
              </p>
              <p>
                Above all, V TEMPO is built on emotion. On storytelling. On the belief
                that through sharing our journeys, we help others navigate theirs.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {["Watchmaker", "Perfumer", "Storyteller", "Brazilian roots"].map((tag) => (
                <span
                  key={tag}
                  className="border border-line px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
