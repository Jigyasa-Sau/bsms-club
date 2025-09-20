import React from "react";
import PageHero from "../components/PageHero";

export default function Events() {
  return (
    <>
      <PageHero
        title="ChemClub"
        subtitle="🌱✨ Explore your mom, share knowledge, and join amazing projects."
        bgPattern="bg-hero-waves"  // ✅ pattern background
      />

      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          At the BioClub, we dive into experiments, workshops, and biology-themed
          events that celebrate scientific curiosity.
        </p>
      </section>
    </>
  );
}
