"use client";

import React from "react";
import { motion } from "framer-motion";
import { TeamMember, teamMembers } from "@/lib/data/teams";

const cardVariants = {
  hover: { scale: 1.03, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)" },
};

const Page = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* ✅ Section Header */}
      <section className="text-center mb-16 sm:mb-20">
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-emerald-600 font-secondary tracking-tight pt-10 sm:pt-16"
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
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {teamMembers.map((member: TeamMember, index: number) => (
          <motion.div
            key={index}
            whileHover="hover"
            variants={cardVariants}
            className="group bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2 font-secondary transition-colors duration-300 group-hover:text-emerald-600">
              {member.name}
            </h2>
            <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm sm:text-base mb-4">
              {member.title}
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 text-base sm:text-lg leading-relaxed mb-4 transition-colors duration-300 group-hover:text-neutral-600">
              {member.description}
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 italic font-medium">
              🌿 {member.mantra}
            </p>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default Page;
