"use client";

import { motion } from "motion/react";
import { Program, programsData } from "@/lib/data/program";
import ProgramCard from "@/components/program";
import Heading from "@/components/internals/heading";
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
        {/* <motion.h1
          className="sm:pt-16 sm:text-4xl lg:text-5xl font-bold text-emerald-600 font-secondary tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Yoga Teacher Training Programs
        </motion.h1>
        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Explore our internationally recognized Yoga Teacher Training courses,
          designed for aspiring teachers and practitioners seeking growth,
          balance, and deeper self-awareness.
        </motion.p> */}
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
