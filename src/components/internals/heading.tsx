"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.h2
      className={cn(
        "text-4xl sm:text-5xl font-bold text-emerald-600 text-center tracking-tighter font-secondary",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h2>
  );
};
