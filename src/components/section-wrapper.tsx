"use client";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={sectionVariants}
  >
    {children}
  </motion.section>
);
