"use client";
import { motion } from "motion/react";
import React from "react";
import TeamSection from "@/components/teams";
import { Heading } from "@/components/internals/heading";
import { Paragraph } from "@/components/internals/paragraph";

const Page = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {/* Heading */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col items-center text-center mb-16 sm:mb-20"
        >
          <Heading>Our Team</Heading>
          <div className="w-full max-w-4xl">
            <Paragraph direction="left_to_right" delay={0.5}>
              Meet our team of expert yoga teachers – fully certified, highly
              skilled, and dedicated to guiding you on your journey to holistic
              wellness. With years of professional experience and profound
              knowledge of yoga, our teachers ensure every session is safe,
              effective, and truly transformative.
            </Paragraph>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <TeamSection />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Page;
