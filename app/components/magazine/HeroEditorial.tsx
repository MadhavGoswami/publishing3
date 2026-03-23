"use client";

import Container from "../layout/Container";
import FadeIn from "../animations/FadeIn";

export default function HeroEditorial() {
  return (
    <section className="py-24 md:py-32">
      <Container>

        <FadeIn>
          <p className="uppercase tracking-[0.3em] text-gray-400 text-sm mb-6">
            Publishing House
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Stories That Shape Perspectives & Inspire Generations
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mt-6 text-lg text-gray-500 max-w-xl">
            Discover powerful narratives and creative expression.
          </p>
        </FadeIn>

      </Container>
    </section>
  );
}