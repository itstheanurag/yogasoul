"use client";
import { motion } from "motion/react";
import { Heading } from "../internals/heading";

export const OfferingsSection = () => (
  <div className="max-w-6xl mx-auto">
    {/* Main Heading */}
      <Heading className="mb-8">Our Offerings</Heading>
    <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
      {/* Wellness & Therapeutic Yoga Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="group"
      >
        <motion.h3
          className="text-xl sm:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          Wellness & Therapeutic Yoga
        </motion.h3>

        <motion.p
          className="text-base text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Targeted sessions designed to help with:
        </motion.p>

        <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
          {[
            "Insomnia and fatigue",
            "Anxiety, restlessness, and depression",
            "Dissociation and low emotional energy",
            "Poor digestion and appetite",
            "Reverse aging and cellular rejuvenation",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start group/item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.7 + index * 0.1,
              }}
              whileHover={{ x: 6 }}
            >
              <motion.span
                className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-emerald-500 transition-colors duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.3 }}
              />
              <span className="group-hover/item:text-neutral-800 dark:group-hover/item:text-neutral-200 transition-colors duration-300">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Specialized Yoga Programs Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="group"
      >
        <motion.h3
          className="text-xl sm:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          Specialized Yoga Programs
        </motion.h3>

        <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
          {[
            {
              title: "Private Yoga for Beginners",
              description: "gentle, customized guidance to start your journey",
            },
            {
              title: "Kids' Sports Yoga",
              description:
                "professional training for international yoga championships, including in Bulgaria",
            },
            {
              title: "Meditation for Spiritual Growth",
              description:
                "deepen your awareness and connect with your higher self",
            },
            {
              title: "Certified Yoga Teacher Training Courses",
              description: "become a globally recognized yoga instructor",
            },
            {
              title: "Yoga Retreats & Workshops",
              description: "immersive experiences to reset, learn, and grow",
            },
          ].map((program, index) => (
            <motion.li
              key={index}
              className="flex items-start group/item relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.7 + index * 0.1,
              }}
              whileHover={{ x: 6 }}
            >
              <motion.span
                className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-emerald-500 transition-colors duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.3 }}
              />
              <motion.div
                className="group-hover/item:text-neutral-800 dark:group-hover/item:text-neutral-200 transition-colors duration-300"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.strong
                  className="text-neutral-700 dark:text-neutral-300 group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.1 }}
                >
                  {program.title}
                </motion.strong>
                <span> – {program.description}</span>
              </motion.div>

              {/* Clean hover background effect */}
              <motion.div
                className="absolute inset-0 bg-neutral-50/50 dark:bg-neutral-800/30 rounded-lg -z-10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
);
