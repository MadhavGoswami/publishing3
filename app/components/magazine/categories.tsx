"use client";

import Image from "next/image";

const topics = [
  {
    title: "Automotive",
    desc: "The best place to learn about the latest news about cars.",
    img: "/cat1.jpg",
  },
  {
    title: "Finances",
    desc: "Stay updated with the best and latest news about finances.",
    img: "/cat2.jpg",
  },
  {
    title: "Architecture",
    desc: "View articles about the most recent trends on architecture.",
    img: "/cat3.jpg",
  },
  {
    title: "Life Style",
    desc: "A curation of interests and activities based on the designers life.",
    img: "/cat4.jpg",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Explore
          </h2>
          <p className="text-gray-400 text-xl mt-2">
            Trending topics
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {topics.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              
              {/* Image */}
              <div className="relative h-[260px] w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="mt-4 space-y-3">
                
                <span className="text-[10px] border px-2 py-1 rounded-full text-gray-600 uppercase tracking-wide">
                  {item.title}
                </span>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>

                <p className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View topic <span>›</span>
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}