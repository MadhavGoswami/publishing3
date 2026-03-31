"use client";

import Image from "next/image";
import { useState } from "react";

const data = [
  {
    id: 0,
    tag: "Featured Interview",
    title: "How Modern Authors Are Redefining Storytelling",
    desc: "A closer look at how contemporary writers are adapting to digital audiences, shifting reading habits, and the evolving expectations of literary culture.",
    meta: "With Emma Collins",
    img: "/interview1.jpg",
  },
  {
    id: 1,
    tag: "Inside the Process",
    title: "The Creative Process Behind Award-Winning Novels",
    desc: "Explore the discipline, rituals, and editorial refinement that shape unforgettable novels — from first draft to finished manuscript.",
    meta: "With Noah Bennett",
    img: "/interview2.jpg",
  },
  {
    id: 2,
    tag: "Author Spotlight",
    title: "Exclusive Conversations with Bestselling Voices",
    desc: "Thoughtful interviews uncovering the mindset, ambition, and personal journey behind books that resonate across generations.",
    meta: "With Olivia Hart",
    img: "/interview3.jpg",
  },
];

export default function AuthorInterviews() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative isolate min-h-[700px] md:min-h-[800px] overflow-hidden bg-[#f7f2eb]">

      {/* Background */}
      <Image
        src={data[active].img}
        alt={data[active].title}
        fill
        priority
        className="object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] scale-[1.04] opacity-95"
      />

      {/* Improved overlays (better readability) */}
      <div className="absolute inset-0 bg-[#120d0a]/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#120d0a]/85 via-[#120d0a]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120d0a]/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col justify-between min-h-[700px] md:min-h-[800px]">

        {/* HEADER */}
        <div className="max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-white/60 mb-5">
            Editorial Conversations
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 border-b border-white/15 pb-10">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-[#fffaf5]">
              Author <span className="text-[#e2c7ac]">Interviews</span>
            </h2>

            <p className="max-w-xl text-sm md:text-base leading-7 text-white/75">
              In-depth conversations with remarkable authors on craft,
              publishing, creative discipline, and the evolving world of books.
            </p>
          </div>
        </div>

        {/* ACTIVE CONTENT */}
        <div className="grid lg:grid-cols-12 gap-12 items-end pt-12 pb-10">
          <div className="lg:col-span-7 max-w-3xl">

            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[#fffaf5]">
              {data[active].tag}
            </span>

            <h3 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight text-[#fffaf5] transition-all duration-500">
              {data[active].title}
            </h3>

            <p className="mt-6 text-sm sm:text-base md:text-lg leading-8 text-white/80 max-w-2xl">
              {data[active].desc}
            </p>

            <div className="mt-8 flex items-center gap-4 text-[#f2ddd0]">
              <span className="text-sm">{data[active].meta}</span>
              <span className="h-1 w-1 rounded-full bg-[#e2c7ac]" />
              <span className="text-sm uppercase tracking-[0.25em]">
                Read Interview →
              </span>
            </div>
          </div>

          {/* MOBILE / TABLET CTA (IMPROVED AFFORDANCE) */}
          <div className="lg:hidden flex flex-col gap-4">

            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Tap to explore
            </p>

            <div className="flex flex-wrap gap-3">
              {data.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setActive(i)}
                  className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
                    active === i
                      ? "bg-[#fffaf5] text-[#1b120d] shadow-lg scale-[1.05]"
                      : "bg-white/10 text-white/85 hover:bg-white/20"
                  }`}
                >
                  {item.tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP CARDS */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 border-t border-white/10 pt-10">
          {data.map((item, i) => {
            const isActive = active === i;

            return (
              <article
                key={item.id}
                onMouseEnter={() => setActive(i)}
                className={`group cursor-pointer rounded-2xl p-6 transition-all duration-500 ${
                  isActive
                    ? "bg-white/10 backdrop-blur-md border border-white/20 scale-[1.02]"
                    : "hover:bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-[11px] uppercase tracking-[0.28em] ${
                      isActive ? "text-white" : "text-white/50"
                    }`}
                  >
                    {item.tag}
                  </span>

                  <span className="text-sm text-white/40 group-hover:text-white/80 transition">
                    →
                  </span>
                </div>

                <h4 className="mt-4 font-serif text-2xl leading-snug text-white/90">
                  {item.title}
                </h4>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isActive ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm leading-7 text-white/75">
                    {item.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}