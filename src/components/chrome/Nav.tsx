"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Vision", href: "#vision" },
  { label: "Craft", href: "#craft" },
  { label: "Customize", href: "#customize" },
  { label: "Creations", href: "#creations" },
  { label: "Maker", href: "#maker" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-line" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="#" className="flex items-center gap-3">
            <Image src="/logo.png" alt="V TEMPO" width={36} height={36} className="opacity-90" />
            <span className="hidden font-display text-sm tracking-[0.35em] sm:block">V TEMPO</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="section-label text-[0.625rem] transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#begin"
              className="hidden border border-text/25 px-5 py-2 text-[0.625rem] uppercase tracking-[0.22em] transition-colors hover:bg-text hover:text-bg sm:inline-flex"
            >
              Begin
            </Link>
            <button
              type="button"
              aria-label="Menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`h-px w-5 bg-text transition-all ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px w-5 bg-text transition-all ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="display-title text-3xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="#begin"
                onClick={() => setOpen(false)}
                className="mt-4 border border-text/25 px-8 py-3 text-xs uppercase tracking-[0.22em]"
              >
                Begin
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
