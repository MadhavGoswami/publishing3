"use client";

import Image from "next/image";

const posts = [
  {
    title: "Pure V-12 Lamborghinis Sold Out Ahead Of Electrified Future",
    category: "Automotive",
    img: "/post1.jpg",
  },
  {
    title: "BMX Racing Shifts Into Controversy at Tokyo Games",
    category: "Automotive",
    img: "/post2.jpg",
  },
  {
    title: "Is Keto Diet Really Helping You Loosing Weight?",
    category: "Life Style",
    img: "/post3.jpg",
  },
];

const authors = [
  {
    name: "Adan Harris",
    role: "Managing Editor",
    img: "/author1.jpg",
  },
  {
    name: "Cathy Hills",
    role: "Marketing Associate",
    img: "/author2.jpg",
  },
];

export default function Recommendations() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        
        {/* LEFT: POSTS */}
        <div className="lg:col-span-2">
          
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Explore
            </h2>
            <p className="text-gray-400 text-xl mt-2">
              Latest posts
            </p>
          </div>

          {/* Posts */}
          <div className="space-y-10">
            {posts.map((post, i) => (
              <div
                key={i}
                className="grid md:grid-cols-[250px_1fr] gap-6 items-center group cursor-pointer"
              >
                
                {/* Image */}
                <div className="relative h-[180px] w-full overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* Content */}
                <div>
                  <span className="text-xs border px-2 py-1 rounded-full text-gray-600 uppercase">
                    {post.category}
                  </span>

                  <h3 className="text-lg md:text-xl mt-3 leading-snug group-hover:underline">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    Do you freelance or work at a digital agency? Are you planning out your NCC agenda? Here are 5 sessions that you need to check out.
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: AUTHORS */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Authors</h3>

          <div className="space-y-8">
            {authors.map((author, i) => (
              <div key={i} className="flex items-center gap-4">
                
                <div className="relative w-14 h-14">
                  <Image
                    src={author.img}
                    alt={author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-medium">{author.name}</p>
                  <p className="text-sm text-gray-500">{author.role}</p>

                  {/* Social icons (simple text for now) */}
                  <div className="flex gap-3 text-sm mt-1 text-gray-500">
                    <span>🐦</span>
                    <span>📘</span>
                    <span>📷</span>
                    <span>✉️</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}