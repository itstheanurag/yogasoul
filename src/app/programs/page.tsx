"use client";

import { Program, programsData } from "@/lib/data/program";
import ProgramCard from "@/components/program";
import { Heading } from "@/components/internals/heading";
import { Subheading } from "@/components/internals/subheading";
const Page = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26">
      <section className="text-center mb-16 sm:mb-20">
        <Heading>Yoga Teacher Training Programs</Heading>
        <Subheading>
          {" "}
          Explore our internationally recognized Yoga Teacher Training courses,
          designed for aspiring teachers and practitioners seeking growth,
          balance, and deeper self-awareness.
        </Subheading>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
        {programsData.map((program: Program, index: number) => (
          <ProgramCard key={index} program={program} />
        ))}
      </section>
    </main>
  );
};

export default Page;
