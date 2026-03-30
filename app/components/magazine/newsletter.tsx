"use client";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ee] text-[#1b1714] py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Soft editorial grid */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="w-full h-full
        
          bg-[size:72px_72px]"
        />
      </div>

      {/* Warm glow accents */}
      <div className="absolute -top-24 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#e8d7c3]/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-[#eadfce]/40 blur-3xl" />
      <div className="absolute top-1/3 right-0 h-[220px] w-[220px] rounded-full bg-[#f2e7d8]/50 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="rounded-[2rem] border border-[#d9cbb9] bg-white/75 backdrop-blur-sm px-6 sm:px-8 md:px-12 py-14 md:py-20 shadow-[0_20px_60px_rgba(59,42,28,0.08)]">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <p className="text-[11px] uppercase tracking-[0.38em] text-[#8a735c] mb-5">
              Editorial Newsletter
            </p>

            {/* Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.96] tracking-tight max-w-4xl mx-auto text-[#181410]">
              Stay close to the
              <span className="block text-neutral-400">world of books.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 md:mt-8 text-sm sm:text-base md:text-lg leading-8 text-[#5f5246] max-w-2xl mx-auto">
              Receive curated literary features, author interviews, publishing
              insight, and thoughtful editorial updates delivered with clarity
              and intention.
            </p>
          </div>

          {/* Form */}
          <div className="mt-10 md:mt-12 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row rounded-2xl md:rounded-full overflow-hidden border border-[#d7c8b5] bg-[#fcfaf7] shadow-[0_10px_30px_rgba(59,42,28,0.06)]">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full md:w-[36%] px-5 md:px-6 py-4 bg-transparent text-sm text-[#1b1714] placeholder:text-[#9a8d80] outline-none border-b md:border-b-0 md:border-r border-[#e7ddd1]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-[44%] px-5 md:px-6 py-4 bg-transparent text-sm text-[#1b1714] placeholder:text-[#9a8d80] outline-none border-b md:border-b-0 md:border-r border-[#e7ddd1]"
              />

              <button className="w-full md:w-auto px-8 md:px-10 py-4 bg-[#1b1714] text-white text-sm font-medium tracking-[0.12em] uppercase hover:bg-[#2a241f] transition">
                Subscribe
              </button>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#8c7d70] text-center">
              Thoughtful emails only — no noise, no clutter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}