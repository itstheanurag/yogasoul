import React from "react";
import { FlipWords } from "./ui/flip-words";
import { cn } from "@/lib/utils";

const texts = [
  "Meditation",
  "Balance",
  "Harmony",
  "Mindfulness",
  "Breathwork",
  "Asanas",
  "Flow",
  "Pranayama",
  "Stillness",
  "Inner Peace",
  "Flexibility",
  "Strength",
  "Energy",
  "Wellness",
  "Tranquility",
  "Focus",
  "Presence",
];

const HeroSection = () => {
  return (
    <>
      <div className="relative flex h-[50rem] w-full items-center justify-center">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:60px_60px]",
            "[background-image:linear-gradient(to_right,#d1fae5_1px,transparent_1px),linear-gradient(to_bottom,#d1fae5_1px,transparent_1px)]", // light emerald grid
            "dark:[background-image:linear-gradient(to_right,#166534_1px,transparent_1px),linear-gradient(to_bottom,#166534_1px,transparent_1px)]" // dark emerald grid
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="relative z-20 text-center leading-snug max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-600">
            Welcome to SoulYoga
          </h1>
          <div className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-700 dark:text-neutral-400 font-secondary">
            Explore the power of {""}
            <span className="font-semibold text-emerald-600">
              <FlipWords words={texts} />
            </span>
            {""}
            and experience how each practice bring focus, energy, and inner
            peace to your life.
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
