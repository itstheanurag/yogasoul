import React from "react";
import TeamSection from "@/components/teams";
import { Heading } from "@/components/internals/heading";
import { Subheading } from "@/components/internals/subheading";

const Page = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26">
      {/* ✅ Section Header */}
      <section className="mb-16 sm:mb-20">
        <Heading>Our Team</Heading>
        <Subheading>
          Meet our team of expert yoga teachers – fully certified, highly
          skilled, and dedicated to guiding you on your journey to holistic
          wellness. With years of professional experience and profound knowledge
          of yoga, our teachers ensure every session is safe, effective, and
          truly transformative.
        </Subheading>
      </section>

      {/* ✅ Team Cards */}
      <TeamSection />
    </main>
  );
};

export default Page;
