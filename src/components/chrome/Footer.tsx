import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-16 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div className="space-y-6">
          <Image src="/logo.png" alt="V TEMPO" width={80} height={80} />
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            A story told in time. Founded by Vitor — watchmaker, perfumer, storyteller.
            Every commission begins with your story.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted md:text-right">
          <Link href="#begin" className="transition-colors hover:text-text">
            Begin Your Watch
          </Link>
          <Link href="mailto:hello@vtempo.com" className="transition-colors hover:text-text">
            hello@vtempo.com
          </Link>
          <a
            href="https://www.instagram.com/vtempo.watches?igsh=Z2MzOWV5dDNkbmp1"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text"
          >
            Instagram
          </a>
          <span className="section-label mt-4">© {new Date().getFullYear()} V TEMPO</span>
        </div>
      </div>
    </footer>
  );
}
