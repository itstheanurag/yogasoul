"use client";
import { motion } from "motion/react";
import { Heading } from "../internals/heading";
import { Paragraph } from "../internals/paragraph";

export const UniquenessSection = () => (
  <section className="mt-16 sm:mb-20">
    <div className="max-w-4xl mx-auto text-center">
      {/* Main Heading */}
      <motion.div
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Heading> Uniqueness of Our Yoga Services </Heading>
      </motion.div>

      {/* Reverse Aging Yoga Card */}
      <motion.div
        className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 mb-8 relative overflow-hidden group"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Card Content */}
        <div className="relative z-10">
          <motion.h3
            className="text-xl sm:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Reverse Aging Yoga
          </motion.h3>

          <motion.p
            className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            (A private practice to reverse our aging)
          </motion.p>

          <motion.p
            className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            As a first-of-its-kind research center in the world, we provide
            successful oxygen yoga classes that can help reverse aging. Our
            unique approach combines ancient wisdom with modern understanding of
            cellular rejuvenation.
          </motion.p>
        </div>

        {/* Decorative Element */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 bg-emerald-400/20 rounded-full"
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 360 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0, type: "spring" }}
        />
      </motion.div>

      <div className="text-left space-y-6">
        <Paragraph direction="right_to_left" delay={0.5}>
          Soul Sanctuary Yoga is the place to be for all yoga enthusiasts! Our
          10,000 multi-style yoga practice is the only one of its kind, and our
          experienced instructors cover everything from traditional asanas to
          modern techniques.
        </Paragraph>

        <Paragraph direction="right_to_left" delay={0.5}>
          Pick and choose from our extensive collection of yoga offerings
          including Ashtanga, Hatha, Vinyasa, Hot yoga, Reverse aging yoga, and
          many more to create the perfect practice for you. Start your journey
          to a healthier you today.
        </Paragraph>
      </div>
    </div>
  </section>
);
