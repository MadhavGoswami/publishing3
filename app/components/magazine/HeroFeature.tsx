"use client";

import Image from "next/image";

const sideArticlesLeft = [
  {
    category: "New Release",
    title: "The Silent Echo — A Journey Through Untold Stories",
    author: "By A. Mehra",
    image: "/Image2.3.png",
  },
  {
    category: "Bestseller",
    title: "Designing the Future: Modern Publishing Trends",
    author: "By Kavya Sharma",
    image: "/kavya.png",
  },
];

const sideArticlesRight = [
  {
    category: "Featured",
    title: "From Manuscript to Market: The Author’s Journey",
    author: "By Rohan Kapoor",
    image: "/manu.png",
  },
  {
    category: "New Arrival",
    title: "Ink & Imagination — Stories That Define Generations",
    author: "By Neha Verma",
    image: "/Neha4.png",
  },
];

export default function HeroFeature() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        {/* Top Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-6 border-b border-neutral-200 pb-5 sm:pb-6 lg:pb-7">
            <div className="max-w-3xl">
              <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-neutral-500">
                Editorial Selection
              </p>

              <h2 className="font-serif text-[2rem] leading-[1.04] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-900">
                Featured <span className="text-neutral-400">Releases</span>
              </h2>
            </div>

            <div className="max-w-md lg:pb-1">
              <p className="text-[14px] sm:text-[15px] leading-6 sm:leading-7 text-neutral-600">
                Discover our latest publications — thoughtfully curated titles,
                bold new voices, and beautifully crafted stories from emerging
                and established authors.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 xl:gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-3 flex flex-col gap-7 sm:gap-8 order-2 lg:order-1">
            {sideArticlesLeft.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>

          {/* CENTER FEATURE */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="group cursor-pointer">
              <div className="relative min-h-[320px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[560px] overflow-hidden rounded-[22px] sm:rounded-[28px]">
                <Image
                  src="/Image4.png"
                  alt="featured release"
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Stronger overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

                {/* Soft ambient layer */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Floating label */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-[9px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-white/95">
                    Editor’s Pick
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-10 lg:p-12 text-white">
                  <div className="max-w-3xl">
                    <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.3em] text-white/75">
                      Cover Story
                    </p>

                    <h3 className="font-serif text-[1.75rem] leading-[1.08] sm:text-3xl md:text-4xl lg:text-[2.7rem] tracking-tight text-white max-w-3xl">
                      Voices of Tomorrow — A Curated Collection of Contemporary
                      Writing
                    </h3>

                    <p className="mt-3 sm:mt-4 max-w-2xl text-[14px] sm:text-base leading-6 sm:leading-7 text-white/88">
                      An editorial spotlight on emerging perspectives, literary
                      innovation, and the stories shaping the next generation of
                      publishing.
                    </p>

                    <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                      <p className="text-white/85">By Editorial Team</p>
                      <span className="hidden sm:block h-1 w-1 rounded-full bg-white/50" />
                      <p className="text-white/75">Special Feature</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower editorial strip */}
              <div className="rounded-b-[22px] sm:rounded-b-[28px] border-x border-b border-neutral-200 bg-white px-4 sm:px-6 md:px-7 py-4 sm:py-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="max-w-2xl text-[14px] sm:text-sm leading-6 sm:leading-7 text-neutral-600">
                    A refined collection of modern voices, beautifully
                    presented with an editorial-first reading experience.
                  </p>

                  <button className="inline-flex w-fit items-center border-b border-neutral-900 pb-1 text-sm font-medium tracking-[0.02em] text-neutral-900 transition hover:opacity-70">
                    Explore Feature
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-3 flex flex-col gap-7 sm:gap-8 order-3">
            {sideArticlesRight.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
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
      <div className="relative h-[220px] sm:h-[240px] overflow-hidden rounded-[20px] sm:rounded-[24px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* subtle overlay for polish */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />

        {/* Category label */}
        {/* <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/12 backdrop-blur-md px-3 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-white/95">
            {category}
          </span>
        </div> */}
      </div>

      <div className="pt-4 sm:pt-5">
        <h4 className="font-serif text-[1.1rem] sm:text-lg md:text-[1.3rem] leading-[1.35] tracking-tight text-neutral-900 transition group-hover:text-neutral-600">
          {title}
        </h4>

        <div className="mt-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] text-neutral-500">
          <p className="normal-case tracking-normal text-[13px] text-neutral-500">
            {author}
          </p>
          <span className="group-hover:translate-x-1 transition duration-300">
            Read
          </span>
        </div>
      </div>

      <div className="mt-4 sm:mt-5 border-b border-neutral-200" />
    </article>
  );
}