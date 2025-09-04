import { Program } from "@/lib/data/program";
import { motion } from "motion/react";
import ButtonMain from "./internals/button";

const ProgramCard = ({ program }: { program: Program }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -6 }}
    transition={{
      duration: 0.4,
      ease: [0.4, 0.0, 0.2, 1],
      type: "spring",
      stiffness: 300,
      damping: 30,
    }}
    className="group relative overflow-hidden bg-gradient-to-br from-white via-white to-emerald-50/20 dark:from-neutral-900 dark:via-neutral-900 dark:to-emerald-950/20 backdrop-blur-sm rounded-3xl border border-neutral-200/60 dark:border-neutral-700/60 hover:border-emerald-400/50 dark:hover:border-emerald-400/40 transition-all duration-500 flex flex-col h-full shadow-lg hover:shadow-xl hover:shadow-emerald-500/10"
  >
    {/* Header Section */}
    <div className="relative p-8 pb-6">
      <motion.h2
        className="text-2xl font-bold text-neutral-600 dark:text-neutral-200 mb-6 tracking-tighter"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        {program.title}
      </motion.h2>

      <motion.p
        className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-base flex-grow"
        initial={{ opacity: 0.8 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {program.description}
      </motion.p>
    </div>

    {/* Details Section */}
    <div className="relative px-8 flex-grow">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {program.price && (
          <motion.div
            className="bg-neutral-50/80 dark:bg-neutral-800/50 rounded-2xl p-4 border border-neutral-200/40 dark:border-neutral-700/40"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-emerald-500 text-lg">💰</span>
              <div>
                <p className="text-xs font-mono tracking-tight text-neutral-500 dark:text-neutral-400 uppercase">
                  Price
                </p>
                <p className="font-semibold font-mono text-neutral-800 dark:text-neutral-200">
                  {program.price}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {program.venue && (
          <motion.div
            className="bg-neutral-50/80 dark:bg-neutral-800/50 rounded-2xl p-4 border border-neutral-200/40 dark:border-neutral-700/40"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-emerald-500 text-lg">📍</span>
              <div>
                <p className="text-xs font-mono tracking-tight text-neutral-500 dark:text-neutral-400 uppercase">
                  Venue
                </p>
                <p className="font-semibold font-mono text-neutral-800 dark:text-neutral-200">
                  {program.venue}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {program.dates && (
          <motion.div
            className="bg-neutral-50/80 dark:bg-neutral-800/50 rounded-2xl p-4 border border-neutral-200/40 dark:border-neutral-700/40"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-emerald-500 text-lg">📅</span>
              <div>
                <p className="text-xs font-mono tracking-tight text-neutral-500 dark:text-neutral-400 uppercase">
                  Dates
                </p>
                <p className="font-semibold font-mono text-neutral-800 dark:text-neutral-200">
                  {program.dates}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {program.totalSeats && (
          <motion.div
            className="bg-neutral-50/80 dark:bg-neutral-800/50 rounded-2xl p-4 border border-neutral-200/40 dark:border-neutral-700/40"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-emerald-500 text-lg">👥</span>
              <div>
                <p className="text-xs font-mono tracking-tight text-neutral-500 dark:text-neutral-400 uppercase">
                  Seats
                </p>
                <p className="font-semibold font-mono text-neutral-800 dark:text-neutral-200">
                  {program.totalSeats}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>

    {/* Button Section */}
    <div className="relative p-8 pt-4">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full"
      >
        <ButtonMain>{program.buttonText}</ButtonMain>
      </motion.div>
    </div>
  </motion.div>
);

export default ProgramCard;
