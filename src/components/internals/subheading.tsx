import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";

export const Subheading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.p
      className={cn(
        "mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto leading- tracking-tight text-center",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {children}
    </motion.p>
  );
};
