"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { registerGsap, ScrollTrigger } from "@/lib/gsap";
import { isMobileViewport, prefersReducedMotion } from "@/lib/motion-prefs";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap();

    if (prefersReducedMotion() || isMobileViewport()) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <>{children}</>;
}
