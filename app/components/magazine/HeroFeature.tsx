"use client";

import Image from "next/image";

export default function HeroFeature() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Heading */}
      <div className="flex items-end justify-between mb-8 border-b pb-4">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Get <span className="text-gray-400">Inspired</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          
          <ArticleCard small />
          <ArticleCard small />

        </div>

        {/* CENTER FEATURE */}
        <div className="md:col-span-1 flex flex-col gap-4">
          
          <div className="relative h-[300px] md:h-[420px] w-full">
            <Image
              src="/hero.jpg"
              alt="feature"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <span className="text-xs border px-2 py-1 rounded-full text-gray-600">
              Architecture
            </span>

            <h3 className="text-xl md:text-2xl mt-3 leading-snug">
              Announcing Our First Magazine Blog Template on Webflow!
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              By Adan Harris
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          
          <ArticleCard small />
          <ArticleCard small />

        </div>

      </div>
    </section>
  );
}

function ArticleCard({ small }: { small?: boolean }) {
  return (
    <div className="group cursor-pointer">
      
      <div className="relative h-[160px] w-full">
        <Image
          src="/book.jpg"
          alt="article"
          fill
          className="object-cover rounded-md group-hover:scale-105 transition"
        />
      </div>

      <div className="mt-3">
        <span className="text-[10px] border px-2 py-1 rounded-full text-gray-500">
          Finance
        </span>

        <h4 className="text-sm mt-2 leading-snug group-hover:underline">
          8 Reasons To Become A Designer This Days
        </h4>
      </div>

      <div className="border-b mt-4" />
    </div>
  );
}