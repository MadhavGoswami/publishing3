"use client";

import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Books", href: "#categories" },
  { name: "Features", href: "#recommendations" },
  { name: "Authors", href: "#authors" },
  { name: "Journal", href: "#newsletter" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#faf8f3]/95 backdrop-blur-xl">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-4 md:py-5">
          {/* Left desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.28em] text-black/70 transition hover:text-black"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Left tablet spacer */}
          <div className="hidden md:block lg:hidden" />

          {/* Center logo */}
          <Link
            href="/"
            className="flex flex-col items-center justify-center text-center leading-none"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="h-px w-5 sm:w-8 bg-black/20" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.45em] text-black/50 whitespace-nowrap">
                Publishing House
              </span>
              <span className="h-px w-5 sm:w-8 bg-black/20" />
            </div>

            <h1 className="mt-1 font-serif text-xl sm:text-2xl md:text-3xl tracking-tight text-black">
              Ink & Edition
            </h1>

            <p className="mt-1 hidden sm:block text-[9px] sm:text-[10px] uppercase tracking-[0.28em] sm:tracking-[0.35em] text-black/45">
              Modern Magazine Publishing
            </p>
          </Link>

          {/* Right side */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.28em] text-black/70 transition hover:text-black"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Search icon desktop/tablet */}
            <button
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/75 transition hover:bg-black hover:text-white"
              aria-label="Search"
            >
              <Search size={16} />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:bg-black hover:text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Editorial info strip - desktop only */}
      <div className="hidden md:block border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 text-[10px] uppercase tracking-[0.3em] text-black/45">
            <span>Curated Stories</span>
            <span className="hidden lg:inline">Books • Authors • Essays</span>
            <span>Est. 2026</span>
          </div>
        </div>
      </div>

      {/* Tablet nav row */}
      <div className="hidden md:block lg:hidden border-t border-black/10">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6">
          <div className="flex min-w-max items-center justify-center gap-6 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="whitespace-nowrap text-[11px] uppercase tracking-[0.26em] text-black/70 transition hover:text-black"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-[420px] border-t border-black/10" : "max-h-0"
        }`}
      >
        <div className="bg-[#faf8f3] px-4 py-4 sm:px-6">
          <div className="mb-4 rounded-2xl border border-black/10 bg-white/70 p-3">
            <div className="flex items-center gap-2 text-black/50">
              <Search size={16} />
              <span className="text-sm">Search articles, books, authors</span>
            </div>
          </div>

          <nav className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-4 text-sm uppercase tracking-[0.22em] text-black/80 ${
                  index !== navLinks.length - 1 ? "border-b border-black/8" : ""
                }`}
              >
                <span>{link.name}</span>
                <span className="text-black/30">/</span>
              </Link>
            ))}
          </nav>

          <div className="mt-5 rounded-2xl border border-black/10 bg-white px-4 py-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">
              Ink & Edition
            </p>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              A premium publishing platform for books, essays, and author stories.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}