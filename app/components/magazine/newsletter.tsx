"use client";

export default function Newsletter() {
  return (
    <section className="relative bg-black text-white py-24 px-4 overflow-hidden">
      
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full 
          bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:80px_80px]" 
        />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-3xl mx-auto text-center">
        
        {/* Icon */}
        <div className="mb-6 text-white/80 text-2xl">
          ⛰️
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Subscribe to our <br /> newsletter!
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Do you freelance or work at a digital agency? Are you planning out your NCC agenda?
        </p>

        {/* FORM */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 rounded-full overflow-hidden border border-white/20 backdrop-blur-md bg-white/5 max-w-xl mx-auto">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full md:w-1/3 px-5 py-3 bg-transparent outline-none text-sm border-b md:border-b-0 md:border-r border-white/10"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full md:w-1/3 px-5 py-3 bg-transparent outline-none text-sm border-b md:border-b-0 md:border-r border-white/10"
          />

          <button className="w-full md:w-auto px-8 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition">
            Join!
          </button>

        </div>

      </div>
    </section>
  );
}