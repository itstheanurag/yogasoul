"use client";
import { motion } from "motion/react";
import { Heading } from "../internals/heading";
import { Subheading } from "../internals/subheading";

export const FounderSection = () => (
  <motion.section
    className="mb-16 sm:mb-20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    <div className="max-w-4xl mx-auto">
      <Heading>
        By Yogacharya Dr. Saurav Kumar
      </Heading>
      <Subheading>
        An initiative by Yoga Clinic, Soul Sanctuary Yoga brings decades of
        expertise in therapeutic and transformational yoga to Dubai. Our
        practice is rooted in ancient wisdom yet adapted for modern wellness
        needs.
      </Subheading>
    </div>
  </motion.section>
);
