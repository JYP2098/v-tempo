"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";

export default function BeginCTA() {
  const ref = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    registerGsap();
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".begin-content", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} id="begin" className="relative min-h-screen px-6 lg:px-10">
      <div className="absolute inset-0 watch-glow" />
      <div className="begin-content relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center py-32">
        <p className="section-label mb-8">Chapter 08 — Begin</p>
        <h2 className="display-title text-5xl sm:text-6xl lg:text-7xl">
          Let&apos;s Build Your Story.
        </h2>
        <p className="mt-8 max-w-lg text-muted">
          For those who feel deeply, dream boldly, and want to wear their story
          with pride. Share your vision — we&apos;ll begin designing your
          one-of-one timepiece together.
        </p>

        {submitted ? (
          <p className="mt-12 text-lg text-accent">
            Thank you. We&apos;ll be in touch within 48 hours.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Name"
                className="border-b border-line bg-transparent py-3 text-sm outline-none placeholder:text-muted focus:border-accent"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className="border-b border-line bg-transparent py-3 text-sm outline-none placeholder:text-muted focus:border-accent"
              />
            </div>
            <textarea
              required
              name="vision"
              rows={4}
              placeholder="Tell us about your vision..."
              className="w-full border-b border-line bg-transparent py-3 text-sm outline-none placeholder:text-muted focus:border-accent"
            />
            <button
              type="submit"
              className="border border-text/30 bg-text/5 px-10 py-4 text-xs uppercase tracking-[0.22em] transition-all hover:bg-text hover:text-bg"
            >
              Start Your Commission
            </button>
          </form>
        )}

        <div className="mt-16">
          <Button href="mailto:hello@vtempo.com" variant="ghost">
            Or email hello@vtempo.com
          </Button>
        </div>
      </div>
    </section>
  );
}
