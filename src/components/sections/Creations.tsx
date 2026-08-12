"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerGsap } from "@/lib/gsap";
import { shouldUseHeavyMotion } from "@/lib/motion-prefs";

const projects = [
  {
    title: "Monaco",
    challenge: "Racing heritage meets modern restraint",
    materials: "Square case, chronograph dial, perforated leather",
    result: "Built for those who live at full throttle",
    image: "/creations/monaco.png",
    objectPosition: "center 45%",
    imageZoom: 1.12,
  },
  {
    title: "Explorer",
    challenge: "Rugged capability without sacrificing elegance",
    materials: "Brushed steel, high-contrast dial, robust bracelet",
    result: "A companion for every horizon",
    image: "/creations/explorer.png",
    objectPosition: "center 40%",
    imageZoom: 1.1,
  },
  {
    title: "Mariner",
    challenge: "Depth, durability, and refined presence",
    materials: "Rotating bezel, luminous indices, rubber strap",
    result: "Engineered for land and sea",
    image: "/creations/mariner.png",
    objectPosition: "38% 68%",
  },
  {
    title: "GMT",
    challenge: "Two time zones, one unmistakable identity",
    materials: "Dual-time complication, bi-color bezel, steel case",
    result: "For those who move between worlds",
  },
  {
    title: "Classic",
    challenge: "Timeless proportions, nothing superfluous",
    materials: "Dress case, clean dial, leather strap",
    result: "Quiet confidence for every occasion",
  },
  {
    title: "Imperial",
    challenge: "Opulence with intention, never excess",
    materials: "Rose gold case, enamel dial, alligator leather",
    result: "A statement of refined authority",
  },
  {
    title: "Executive",
    challenge: "Power and precision in equal measure",
    materials: "Slim profile, sunburst dial, deployant clasp",
    result: "The boardroom, distilled to its essence",
    image: "/creations/executive.png",
    objectPosition: "center center",
  },
];

function ProjectImage({
  project,
}: {
  project: (typeof projects)[number] & { image: string; objectPosition?: string; imageZoom?: number };
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: `${(project.imageZoom ?? 1) * 100}%`,
          height: `${(project.imageZoom ?? 1) * 100}%`,
        }}
      >
        <Image
          src={project.image}
          alt={`V TEMPO ${project.title}`}
          fill
          className="object-cover"
          style={{ objectPosition: project.objectPosition }}
          sizes="(max-width: 768px) 100vw, 1280px"
        />
      </div>
    </div>
  );
}

export default function Creations() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    if (!ref.current || !shouldUseHeavyMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".creation-card", {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
      });

      projects.forEach((project, i) => {
        if (!project.image) return;
        const card = ref.current?.querySelector(`.creation-visual-${i}`);
        const bg = card?.querySelector(".creation-bg");
        if (!card || !bg) return;

        gsap.fromTo(
          bg,
          { y: 20 },
          {
            y: -20,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="creations" className="px-6 py-20 sm:py-32 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <p className="section-label mb-6 sm:mb-8">Chapter 05 — Featured Creations</p>
        <h2 className="display-title mb-12 max-w-2xl text-3xl sm:mb-16 sm:text-5xl lg:text-6xl">
          Commissions that tell their own story.
        </h2>

        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {projects.map((project, i) =>
            project.image ? (
              <article
                key={project.title}
                className={`creation-card creation-visual-${i} overflow-hidden border border-line`}
              >
                {/* Mobile: image on top, text below */}
                <div className="relative h-[50vh] min-h-[280px] w-full lg:hidden">
                  <ProjectImage project={project} />
                </div>

                {/* Desktop: full-bleed background */}
                <div className="creation-bg relative hidden min-h-[70vh] lg:block">
                  <div className="absolute inset-0 overflow-hidden">
                    <ProjectImage project={project} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/50 to-transparent" />

                  <div className="relative z-10 flex min-h-[70vh] flex-col justify-end p-12 lg:p-16">
                    <ProjectDetails project={project} index={i} />
                  </div>
                </div>

                {/* Mobile: text block */}
                <div className="bg-bg p-6 sm:p-8 lg:hidden">
                  <ProjectDetails project={project} index={i} />
                </div>
              </article>
            ) : (
              <article
                key={project.title}
                className="creation-card grid gap-8 border-t border-line pt-12 sm:gap-10 sm:pt-16 lg:grid-cols-12"
              >
                <div className="lg:col-span-5">
                  <span className="section-label text-accent">Project 0{i + 1}</span>
                  <h3 className="display-title mt-3 text-3xl sm:mt-4 sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h3>
                </div>
                <div className="space-y-5 sm:space-y-6 lg:col-span-7">
                  <ProjectMeta project={project} />
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectDetails({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <>
      <div className="max-w-xl">
        <span className="section-label text-accent">Project 0{index + 1}</span>
        <h3 className="display-title mt-3 text-4xl sm:mt-4 sm:text-5xl lg:text-7xl">
          {project.title}
        </h3>
      </div>
      <div className="mt-8 grid gap-6 border-t border-text/10 pt-6 sm:mt-10 sm:gap-8 sm:pt-8 lg:grid-cols-3 lg:max-w-3xl">
        <ProjectMeta project={project} />
      </div>
    </>
  );
}

function ProjectMeta({ project }: { project: (typeof projects)[number] }) {
  return (
    <>
      <div>
        <span className="section-label">Challenge</span>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.challenge}</p>
      </div>
      <div>
        <span className="section-label">Materials</span>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.materials}</p>
      </div>
      <div>
        <span className="section-label">Result</span>
        <p className="mt-2 text-sm leading-relaxed text-text">{project.result}</p>
      </div>
    </>
  );
}
