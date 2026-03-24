"use client";

import Image from "next/image";

export default function HeroFeature() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      
      {/* Heading */}
      <div className="flex items-end justify-between mb-10 border-b pb-4">
        <h2 className="text-3xl md:text-5xl font-serif tracking-tight">
          Featured <span className="text-gray-400">Releases</span>
        </h2>

        <p className="hidden md:block text-sm text-gray-500 max-w-md">
          Discover our latest publications — from thought-provoking books to 
          beautifully crafted stories by emerging and established authors.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          <ArticleCard 
            category="New Release"
            title="The Silent Echo — A Journey Through Untold Stories"
            author="By A. Mehra"
          />
          <ArticleCard 
            category="Bestseller"
            title="Designing the Future: Modern Publishing Trends"
            author="By Kavya Sharma"
          />
        </div>

        {/* CENTER FEATURE */}
        <div className="flex flex-col gap-4">
          
          <div className="relative h-[300px] md:h-[420px] w-full overflow-hidden rounded-xl">
            <Image
              src="/hero.jpg"
              alt="featured book"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <span className="text-xs border px-3 py-1 rounded-full text-gray-600">
              Editor’s Pick
            </span>

            <h3 className="text-xl md:text-3xl mt-3 leading-snug font-medium">
              Voices of Tomorrow — A Curated Collection of Contemporary Writing
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              By Editorial Team
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          <ArticleCard 
            category="Featured"
            title="From Manuscript to Market: The Author’s Journey"
            author="By Rohan Kapoor"
          />
          <ArticleCard 
            category="New Arrival"
            title="Ink & Imagination — Stories That Define Generations"
            author="By Neha Verma"
          />
        </div>

      </div>
    </section>
  );
}

function ArticleCard({
  category,
  title,
  author,
}: {
  category: string;
  title: string;
  author: string;
}) {
  return (
    <div className="group cursor-pointer">
      
      <div className="relative h-[170px] w-full overflow-hidden rounded-lg">
        <Image
          src="/book.jpg"
          alt="book"
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="mt-3">
        <span className="text-[10px] border px-2 py-1 rounded-full text-gray-500 tracking-wide">
          {category}
        </span>

        <h4 className="text-sm md:text-base mt-2 leading-snug group-hover:underline">
          {title}
        </h4>

        <p className="text-xs text-gray-400 mt-1">
          {author}
        </p>
      </div>

      <div className="border-b mt-4" />
    </div>
  );
}