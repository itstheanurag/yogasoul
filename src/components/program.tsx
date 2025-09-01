import { Program } from "@/lib/data/program";
import { motion } from "motion/react";

const ProgramCard = ({ program }: { program: Program }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="group bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl shadow-md flex flex-col h-full transition-all duration-300"
  >
    <h2 className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2 font-secondary group-hover:text-emerald-600 transition-colors duration-300">
      {program.title}
    </h2>
    <p className="text-neutral-500 dark:text-neutral-400 text-base sm:text-lg leading-relaxed mb-4 group-hover:text-neutral-600 transition-colors duration-300">
      {program.description}
    </p>

    {program.price && (
      <p className="text-sm font-medium mb-1">Price: {program.price}</p>
    )}
    {program.venue && (
      <p className="text-sm font-medium mb-1">Venue: {program.venue}</p>
    )}
    {program.dates && (
      <p className="text-sm font-medium mb-1">Dates: {program.dates}</p>
    )}
    {program.totalSeats && (
      <p className="text-sm font-medium mb-3">
        Total Seats: {program.totalSeats}
      </p>
    )}

    <button className="mt-auto bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-mono font-medium tracking-tighter transition-colors text-shadow-md">
      {program.buttonText}
    </button>
  </motion.div>
);

export default ProgramCard;
