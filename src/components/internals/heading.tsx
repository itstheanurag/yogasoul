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
        "text-4xl font-bold text-emerald-600 tracking-tighter font-secondary text-center",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {children}
    </motion.h2>
  );
};
