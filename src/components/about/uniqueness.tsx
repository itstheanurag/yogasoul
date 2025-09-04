"use client";
import { motion } from "motion/react";

export const UniquenessSection = () => (
  <motion.section
    className="mb-16 sm:mb-20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.9 }}
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
        Uniqueness of Our Yoga Services
      </h2>

      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
          Reverse Aging Yoga
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 italic">
          (A private practice to reverse our aging)
        </p>
        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          As a first-of-its-kind research center in the world, we provide
          successful oxygen yoga classes that can help reverse aging. Our unique
          approach combines ancient wisdom with modern understanding of cellular
          rejuvenation.
        </p>
      </div>

      <div className="text-left">
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          Soul Sanctuary Yoga is the place to be for all yoga enthusiasts! Our
          10,000 multi-style yoga practice is the only one of its kind, and our
          experienced instructors cover everything from traditional asanas to
          modern techniques.
        </p>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Pick and choose from our extensive collection of yoga offerings
          including Ashtanga, Hatha, Vinyasa, Hot yoga, Reverse aging yoga, and
          many more to create the perfect practice for you. Start your journey
          to a healthier you today.
        </p>
      </div>
    </div>
  </motion.section>
);
