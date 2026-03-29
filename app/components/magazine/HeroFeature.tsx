"use client";

import Image from "next/image";

const sideArticlesLeft = [
  {
    category: "New Release",
    title: "The Silent Echo — A Journey Through Untold Stories",
    author: "By A. Mehra",
    image: "/Image2.png",
  },
  {
    category: "Bestseller",
    title: "Designing the Future: Modern Publishing Trends",
    author: "By Kavya Sharma",
    image: "/Image6.png",
  },
];

const sideArticlesRight = [
  {
    category: "Featured",
    title: "From Manuscript to Market: The Author’s Journey",
    author: "By Rohan Kapoor",
    image: "/Image8.png",
  },
  {
    category: "New Arrival",
    title: "Ink & Imagination — Stories That Define Generations",
    author: "By Neha Verma",
    image: "/Image10.png",
  },
];

export default function HeroFeature() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      {/* Top Header */}
      <div className="mb-12 md:mb-14">
        <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-5">
          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-neutral-500 mb-3">
              Editorial Selection
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-none text-neutral-900">
              Featured <span className="text-neutral-400">Releases</span>
            </h2>
          </div>

          <div className="hidden lg:block max-w-md">
            <p className="text-sm leading-7 text-neutral-500">
              Discover our latest publications — thoughtfully curated titles,
              bold new voices, and beautifully crafted stories from emerging and
              established authors.
            </p>
          </div>
        </div>
      </div>

      {/* Premium Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          {sideArticlesLeft.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        {/* CENTER FEATURE */}
        <div className="lg:col-span-6">
          <div className="group cursor-pointer">
            <div className="relative h-[340px] sm:h-[430px] md:h-[540px] overflow-hidden rounded-2xl">
              <Image
                src="/Image4.png"
                alt="featured release"
                fill
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Floating label */}
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-white">
                  Editor’s Pick
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/75 mb-3">
                  Cover Story
                </p>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem] leading-[1.05] tracking-tight max-w-3xl">
                  Voices of Tomorrow — A Curated Collection of Contemporary
                  Writing
                </h3>

                <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl leading-7">
                  An editorial spotlight on emerging perspectives, literary
                  innovation, and the stories shaping the next generation of
                  publishing.
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <p className="text-sm text-white/80">By Editorial Team</p>
                  <span className="h-1 w-1 rounded-full bg-white/50" />
                  <p className="text-sm text-white/70">Special Feature</p>
                </div>
              </div>
            </div>

            {/* Lower editorial strip */}
            <div className="border-x border-b border-neutral-200 rounded-b-2xl px-5 sm:px-6 py-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-sm text-neutral-500 leading-7 max-w-2xl">
                  A refined collection of modern voices, beautifully presented
                  with an editorial-first reading experience.
                </p>

                <button className="text-sm font-medium text-neutral-900 border-b border-neutral-900 w-fit pb-1 hover:opacity-70 transition">
                  Explore Feature
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          {sideArticlesRight.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({
  category,
  title,
  author,
  image,
}: {
  category: string;
  title: string;
  author: string;
  image: string;
}) {
  return (
    <article className="group cursor-pointer">
      <div className="relative h-[220px] sm:h-[240px] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        {/* <div className="absolute top-4 left-4">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white">
            {category}
          </span>
        </div> */}
      </div>

      <div className="pt-4">
        <h4 className="font-serif text-lg md:text-xl leading-snug tracking-tight text-neutral-900 group-hover:text-neutral-600 transition">
          {title}
        </h4>

        <div className="mt-3 flex items-center justify-between gap-3 text-xs text-neutral-500">
          <p>{author}</p>
          <span className="uppercase tracking-[0.2em] group-hover:translate-x-1 transition duration-300">
            Read
          </span>
        </div>
      </div>

      <div className="mt-5 border-b border-neutral-200" />
    </article>
  );
}