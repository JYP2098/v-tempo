"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { shouldUseHeavyMotion } from "@/lib/motion-prefs";

const items = [
  {
    label: "Your Story",
    desc: "Every commission begins with who you are — your memories, your taste, the life you've lived.",
  },
  {
    label: "Your Vision",
    desc: "Sketches, inspiration, materials. You bring the idea; Vitor gives it form.",
  },
  {
    label: "Your Materials",
    desc: "Steel, gold, ceramic, leather — chosen for beauty and value, never compromise.",
  },
  {
    label: "Your Timepiece",
    desc: "A one-of-one watch built to reflect your personality and carry your story forward.",
  },
];

export default function Vision() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    if (!ref.current || !shouldUseHeavyMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 0.8,
        },
      });

      items.forEach((_, i) => {
        const start = i * 0.22;
        tl.fromTo(
          `.vision-item-${i}`,
          { opacity: 0.25, y: 20 },
          { opacity: 1, y: 0, duration: 0.15 },
          start
        );
        if (i > 0) {
          tl.to(`.vision-item-${i - 1}`, { opacity: 0.2, duration: 0.1 }, start);
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="vision" className="relative px-6 lg:px-10">
      <div className="mx-auto flex max-w-3xl flex-col justify-center py-20 sm:min-h-screen sm:py-24">
        <p className="section-label mb-6 sm:mb-8">Chapter 02 — Your Vision</p>
        <h2 className="display-title mb-12 text-3xl sm:mb-20 sm:text-5xl lg:text-6xl">
          You bring the idea. We give it form.
        </h2>

        <div className="space-y-8 sm:space-y-12">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`vision-item-${i} border-l-2 border-line pl-6 sm:pl-8`}
            >
              <h3 className="display-title text-2xl sm:text-4xl">{item.label}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
