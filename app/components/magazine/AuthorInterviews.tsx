"use client";

import Image from "next/image";
import { useState } from "react";

const data = [
  {
    id: 0,
    tag: "Featured",
    title: "How Modern Authors Are Redefining Storytelling",
    desc: "Insights into how authors are adapting to digital platforms and evolving reader expectations.",
    img: "/interview1.jpg",
  },
  {
    id: 1,
    tag: "Insights",
    title: "The Creative Process Behind Award-Winning Novels",
    desc: "A deep dive into how great stories are crafted from imagination to publication.",
    img: "/interview2.jpg",
  },
  {
    id: 2,
    tag: "Spotlight",
    title: "Exclusive Talk with Bestselling Authors",
    desc: "Conversations that uncover the mindset and journey behind global literary success.",
    img: "/interview3.jpg",
  },
];

export default function AuthorInterviews() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full h-[550px] md:h-[650px] text-white overflow-hidden">
      
      {/* Background */}
      <Image
        src={data[active].img}
        alt="bg"
        fill
        className="object-cover transition duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
        
        <h2 className="text-2xl md:text-3xl mb-10">
          Author Interviews
        </h2>

        {/* MOBILE BUTTONS */}
        <div className="flex gap-3 mb-6 md:hidden">
          {data.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-sm border rounded-full transition ${
                active === i
                  ? "bg-white text-black"
                  : "border-white/40 text-white"
              }`}
            >
              {item.tag}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          
          {data.map((item, i) => {
            const isActive = active === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)} // desktop hover
                className={`cursor-pointer transition-all duration-300
                  ${i !== 2 ? "md:border-r border-white/20 pr-6" : ""}
                `}
              >
                
                {/* TAG */}
                <span className="text-xs border px-2 py-1 rounded-full border-white/40">
                  {item.tag}
                </span>

                {/* TITLE (ALWAYS VISIBLE) */}
                <h3 className="text-lg md:text-2xl mt-3 leading-snug">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <div
                  className={`
                    transition-all duration-500 overflow-hidden
                    ${isActive 
                      ? "max-h-40 opacity-100 mt-3" 
                      : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="text-sm text-gray-300">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}