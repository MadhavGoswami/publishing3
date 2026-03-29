"use client";

import Image from "next/image";

const posts = [
  {
    title: "How Debut Novelists Are Redefining Contemporary Fiction",
    category: "Fiction",
    img: "/fiction1.jpg",
    excerpt:
      "A closer look at emerging voices, narrative experimentation, and the stories reshaping today’s literary landscape.",
  },
  {
    title: "From Proposal to Print: What Modern Publishing Demands",
    category: "Publishing",
    img: "/publishing.png",
    excerpt:
      "An editorial perspective on submissions, positioning, and how authors can navigate an increasingly competitive market.",
  },
  {
    title: "Writing With Precision: Craft Lessons From Great Storytellers",
    category: "Writing Craft",
    img: "/craft1.webp",
    excerpt:
      "Explore the essentials of voice, structure, pacing, and character work through lessons drawn from exceptional writing.",
  },
];

const authors = [
  {
    name: "Emma Collins",
    role: "Senior Editor",
    img: "/author1.png",
  },
  {
    name: "Noah Bennett",
    role: "Literary Director",
    img: "/author2.jpg",
  },
];

export default function Recommendations() {
  return (
    <section className="bg-[#f8f6f2] py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-16 border-b border-black/10 pb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500 mb-3">
              Editorial Recommendations
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-none text-neutral-900">
              Reading <span className="text-neutral-400">Recommendations</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm md:text-base leading-7 text-neutral-600">
            Curated features, publishing insight, and thoughtful articles for
            readers, writers, and authors building their next chapter.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14">
          {/* LEFT: POSTS */}
          <div className="lg:col-span-8">
            <div className="space-y-10">
              {posts.map((post, i) => (
                <article
                  key={i}
                  className="group cursor-pointer border-b border-black/10 pb-10 last:border-b-0"
                >
                  <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-8 items-start">
                    {/* Image */}
                    <div className="relative h-[220px] sm:h-[260px] md:h-[200px] overflow-hidden rounded-2xl bg-neutral-200">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <span className="inline-flex items-center rounded-full border border-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-neutral-600">
                        {post.category}
                      </span>

                      <h3 className="mt-4 font-serif text-2xl md:text-[30px] leading-tight tracking-tight text-neutral-900 group-hover:text-neutral-600 transition">
                        {post.title}
                      </h3>

                      <p className="mt-4 text-sm md:text-base leading-7 text-neutral-600 max-w-2xl">
                        {post.excerpt}
                      </p>

                      <div className="mt-6 flex items-center gap-4">
                        <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                          Read Feature
                        </span>
                        <span className="text-neutral-900 transition duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT: AUTHORS / SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="border border-black/10 rounded-2xl bg-white/70 backdrop-blur-sm p-6 md:p-7">
                <div className="mb-8 border-b border-black/10 pb-5">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
                    Editorial Desk
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-neutral-900">
                    Meet Our Editors
                  </h3>
                </div>

                <div className="space-y-7">
                  {authors.map((author, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 group cursor-pointer"
                    >
                      <div className="relative w-16 h-16 rounded-full overflow-hidden ring-1 ring-black/10">
                        <Image
                          src={author.img}
                          alt={author.name}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex-1">
                        <p className="text-base font-medium text-neutral-900">
                          {author.name}
                        </p>
                        <p className="text-sm text-neutral-500 mt-1">
                          {author.role}
                        </p>

                        <div className="flex items-center gap-3 mt-3 text-neutral-500">
                          <span className="text-sm hover:text-neutral-900 transition">
                            𝕏
                          </span>
                          <span className="text-sm hover:text-neutral-900 transition">
                            in
                          </span>
                          <span className="text-sm hover:text-neutral-900 transition">
                            ig
                          </span>
                          <span className="text-sm hover:text-neutral-900 transition">
                            @
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-black/10">
                  <p className="text-sm leading-7 text-neutral-600">
                    Follow our editorial team for author features, publishing
                    advice, and carefully curated literary recommendations.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}