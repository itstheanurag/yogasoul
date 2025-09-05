"use client";
import { motion } from "framer-motion";
import React from "react";
import clsx from "clsx";

type Direction =
  | "bottom_to_top"
  | "top_to_bottom"
  | "left_to_right"
  | "right_to_left";

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
};

export const Paragraph = ({
  children,
  className,
  direction = "top_to_bottom",
  delay = 0.2, // 🔥 reduced default
}: ParagraphProps) => {
  const getInitial = (dir: Direction) => {
    switch (dir) {
      case "bottom_to_top":
        return { opacity: 0, y: 30 };
      case "top_to_bottom":
        return { opacity: 0, y: -30 };
      case "left_to_right":
        return { opacity: 0, x: -30 };
      case "right_to_left":
        return { opacity: 0, x: 30 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.p
      className={clsx(
        "mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed",
        className
      )}
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.01 }} // 🔥 quicker trigger
      transition={{ duration: 0.5, delay, ease: "easeOut" }} // 🔥 smoother mobile transition
    >
      {children}
    </motion.p>
  );
};
  