"use client";
import { motion } from "motion/react";
import React from "react";
import { Paragraph } from "../internals/paragraph";
import TeamSection from "../teams";
import { Heading } from "../internals/heading";

export const TeamPage = () => {
  return (
    <div>
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
        {/* Heading & Paragraph */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col items-center text-center mb-16 sm:mb-20"
        >
          <Heading>Our Team</Heading>
          <div className="w-full max-w-4xl">
            <Paragraph direction="left_to_right" delay={0}>
              Meet our team of expert yoga teachers – fully certified, highly
              skilled, and dedicated to guiding you on your journey to holistic
              wellness. With years of professional experience and profound
              knowledge of yoga, our teachers ensure every session is safe,
              effective, and truly transformative.
            </Paragraph>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <TeamSection />
        </motion.div>
      </motion.div>
    </div>
  );
};
