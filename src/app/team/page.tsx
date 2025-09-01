"use client";

import React from "react";
import { motion } from "framer-motion";
import { Teams } from "@/components/teams";

const Page = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26">
      {/* ✅ Section Header */}
      <section className="text-center mb-16 sm:mb-20">
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-emerald-600 font-secondary tracking-tight sm:pt-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Team
        </motion.h1>
        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Meet our team of expert yoga teachers – fully certified, highly
          skilled, and dedicated to guiding you on your journey to holistic
          wellness. With years of professional experience and profound knowledge
          of yoga, our teachers ensure every session is safe, effective, and
          truly transformative.
        </motion.p>
      </section>

      {/* ✅ Team Cards */}
      <Teams />
    </main>
  );
};

export default Page;
