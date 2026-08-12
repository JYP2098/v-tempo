"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    if (!barRef.current) return;

    gsap.fromTo(
      barRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      }
    );
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-px bg-line">
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-accent"
        style={{ transformOrigin: "left center" }}
      />
    </div>
  );
}
