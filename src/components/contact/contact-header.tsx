"use client";
import { Heading } from "@/components/internals/heading";
import { motion } from "motion/react";

export const ContactHeader = () => (
  <section className="text-center mb-16 sm:mb-20">
    <Heading>Contact Us</Heading>

    <motion.p
      className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto leading- tracking-tight text-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      Ready to begin your yoga journey? Have questions about our classes or want
      to book a private session? We&apos;d love to hear from you. Reach out to
      us and let&apos;s connect.
    </motion.p>
  </section>
);
