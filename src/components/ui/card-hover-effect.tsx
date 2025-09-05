import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => !isMobile && setHoveredIndex(idx)}
          onMouseLeave={() => !isMobile && setHoveredIndex(null)}
        >
          {/* Desktop hover background */}
          {!isMobile && (
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
          )}

          <Card isMobile={isMobile}>
            {isMobile ? (
              // Mobile Layout: Always show both logo and text
              <div className="flex flex-col items-center justify-center h-full p-4 space-y-4">
                <div className="flex-shrink-0">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="object-contain max-h-16"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ) : (
              // Desktop Layout: Hover to reveal text
              <>
                {/* Default state: Logo */}
                <div className={cn(
                  "flex justify-center items-center h-80 w-80 transition-opacity duration-300",
                  hoveredIndex === idx ? "opacity-0" : "opacity-100"
                )}>
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-contain max-h-24"
                  />
                </div>

                {/* Hover state: Title + Description */}
                <div className={cn(
                  "absolute inset-0 flex items-center justify-center text-center transition-opacity duration-300 px-4",
                  hoveredIndex === idx ? "opacity-100" : "opacity-0"
                )}>
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
                      className="text-neutral-300 leading-relaxed text-base"
                      initial={{ opacity: 0.8 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </div>
              </>
            )}
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  isMobile = false,
}: {
  className?: string;
  children: React.ReactNode;
  isMobile?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl h-full w-full overflow-hidden group-hover:border-slate-700 transition-all duration-300",
        isMobile 
          ? "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 hover:shadow-xl hover:border-emerald-300 dark:hover:border-emerald-600 min-h-[280px] shadow-sm" 
          : "bg-emerald-100/2 dark:border-white/[0.2] h-80",
        className
      )}
    >
      <div className="relative z-20 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};