import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    logo: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-10 gap-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-emerald-600 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.25 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            {/* Default state: Logo */}
            <div className="flex justify-center items-center h-80 w-80 transition-opacity duration-300 group-hover:opacity-0">
              <Image
                src={item.logo}
                alt={item.title}
                width={200}
                height={200}
                className="object-contain max-h-24"
              />
            </div>

            {/* Hover state: Title + Description */}
            <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2
                  className="text-2xl font-bold text-neutral-200 tracking-tighter"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  className="text-neutral-300 - leading-relaxed text-base"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl h-full w-full overflow-hidden bg-emerald-100/2  dark:border-white/[0.2] group-hover:border-slate-700",
        className
      )}
    >
      <div className="relative z-20 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
