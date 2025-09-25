import React from "react";
import PageHero from "../components/PageHero";

export default function BioClub() {
  return (
    <>
      <PageHero
        title="CSClub"
        subtitle="🌱✨ Explore CS, share knowledge, and join amazing projects."
        bgPattern="bg-hero-waves"  // ✅ pattern background
      />

      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          At the CsClub, we dive into experiments, workshops, and computer-themed
          events that celebrate scientific curiosity.
        </p>
      </section>
    </>
  );
}
