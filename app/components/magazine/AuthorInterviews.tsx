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
    <section className="relative isolate min-h-[680px] md:min-h-[780px] overflow-hidden bg-[#f7f2eb]">
      {/* Background Image */}
      <Image
        src={data[active].img}
        alt={data[active].title}
        fill
        priority
        className="object-cover transition-all duration-700 ease-out scale-[1.02]"
      />

      {/* Softer premium overlays */}
      <div className="absolute inset-0 bg-[#20150f]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a120d]/70 via-[#1a120d]/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120d0a]/60 via-transparent to-[#f7efe6]/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,248,240,0.16),transparent_38%)]" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 min-h-[680px] md:min-h-[780px] flex flex-col justify-between">
        {/* Top */}
        <div className="max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/70 mb-4">
            Editorial Conversations
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-b border-white/20 pb-8">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-[#fffaf5]">
                Author <span className="text-[#e2c7ac]">Interviews</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm md:text-base leading-7 text-white/80">
              In-depth conversations with remarkable authors on craft,
              publishing, creative discipline, and the evolving world of books.
            </p>
          </div>
        </div>

        {/* Active content */}
        <div className="grid lg:grid-cols-12 gap-10 items-end pt-10 pb-8">
          <div className="lg:col-span-7 max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[#fffaf5]">
              {data[active].tag}
            </span>

            <h3 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.02] tracking-tight text-[#fffaf5]">
              {data[active].title}
            </h3>

            <p className="mt-5 text-sm sm:text-base md:text-lg leading-8 text-white/80 max-w-2xl">
              {data[active].desc}
            </p>

            <div className="mt-7 flex items-center gap-4 text-[#f2ddd0]">
              <span className="text-sm">{data[active].meta}</span>
              <span className="h-1 w-1 rounded-full bg-[#e2c7ac]" />
              <span className="text-sm uppercase tracking-[0.22em]">
                Read Interview
              </span>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="lg:hidden flex flex-wrap gap-3">
            {data.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active === i
                    ? "bg-[#fffaf5] text-[#1b120d] border-[#fffaf5]"
                    : "border-white/30 text-white/90 hover:border-white/60"
                }`}
              >
                {item.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 border-t border-white/15 pt-8">
          {data.map((item, i) => {
            const isActive = active === i;

            return (
              <article
                key={item.id}
                onMouseEnter={() => setActive(i)}
                className={`group cursor-pointer rounded-2xl p-5 transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 backdrop-blur-md border border-white/15"
                    : "bg-transparent border border-transparent hover:bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`text-[11px] uppercase tracking-[0.28em] transition ${
                      isActive ? "text-[#fff4ea]" : "text-white/55"
                    }`}
                  >
                    {item.tag}
                  </span>

                  <span
                    className={`text-sm transition ${
                      isActive
                        ? "text-[#fff4ea]"
                        : "text-white/35 group-hover:text-white/75"
                    }`}
                  >
                    →
                  </span>
                </div>

                <h4
                  className={`mt-4 font-serif text-2xl leading-snug tracking-tight transition ${
                    isActive ? "text-[#fffaf5]" : "text-white/80"
                  }`}
                >
                  {item.title}
                </h4>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isActive ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm leading-7 text-white/75 max-w-sm">
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