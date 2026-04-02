"use client";

import Image from "next/image";

const topics = [
  {
    title: "Fiction",
    desc: "Immersive storytelling, unforgettable characters, and contemporary voices shaping modern literature.",
    img: "/topic3.png",
  },
  {
    title: "Publishing",
    desc: "Industry perspectives, editorial insights, and the evolving journey from manuscript to market.",
    img: "/tpic4.png",
  },
  {
    title: "Writing Craft",
    desc: "Refined guidance on storytelling, structure, voice, and the habits of exceptional authors.",
    img: "/topic1.png",
  },
  {
    title: "Author Spotlight",
    desc: "Conversations, profiles, and behind-the-scenes glimpses into the minds of remarkable writers.",
    img: "/topic2.png",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#f8f6f2] py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-16 border-b border-black/10 pb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500 mb-3">
              Editorial Categories
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-none text-neutral-900">
              Explore <span className="text-neutral-400">Topics</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm md:text-base leading-7 text-neutral-600">
            A curated guide to the ideas, genres, and conversations shaping our
            publishing world — from literary fiction to editorial insight.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10">
          {topics.map((item, i) => (
            <article key={i} className="group cursor-pointer">
              {/* Image */}
              <div className="relative h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded-2xl bg-neutral-200">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white">
                    Category
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="font-serif text-2xl md:text-[28px] leading-tight tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="pt-5">
                <p className="text-sm leading-7 text-neutral-600">
                  {item.desc}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
                    Read More
                  </span>

                  <span className="text-neutral-900 text-lg transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>

              <div className="mt-5 border-b border-black/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 