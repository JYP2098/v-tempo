"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap, registerGsap } from "@/lib/gsap";
import { shouldUseHeavyMotion } from "@/lib/motion-prefs";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    if (!sectionRef.current || !shouldUseHeavyMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(".hero-video", {
        scale: 1.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-copy", {
        y: -80,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "60% top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative h-screen overflow-hidden grain">
      <div className="absolute inset-0 watch-glow" />

      <video
        className="hero-video absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-75"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero-watch.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/40 to-bg" />

      <div className="hero-copy relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="section-label mb-8"
        >
          Custom Timepieces
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="display-title max-w-4xl text-4xl sm:text-7xl lg:text-8xl"
        >
          Built Around
          <br />
          Your Vision
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 max-w-md text-sm leading-relaxed text-muted"
        >
          A story told in time. Commission a one-of-one timepiece shaped by your vision.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="section-label text-[0.6rem]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-10 w-px bg-text/40"
        />
      </motion.div>
    </section>
  );
}
