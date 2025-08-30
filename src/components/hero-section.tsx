import React from "react";
import { FlipWords } from "./ui/flip-words";
import { cn } from "@/lib/utils";

const texts = [
  "Namaste",
  "Meditation",
  "Balance",
  "Harmony",
  "Mindfulness",
  "Breathwork",
  "Asanas",
  "Flow",
  "Pranayama",
  "Stillness",
  "Zen",
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
            Discover a world of{" "}
            <span className="font-semibold text-emerald-600">
              <FlipWords words={texts} />
            </span>
            {""}
            where every practice brings balance, focus, and inner peace. From
            mindful breathwork to flowing asanas, our platform helps you
            cultivate strength, flexibility, and tranquility—all in one
            harmonious journey.
          </div>
        </div>
      </div>

      <div className="h-screen"></div>
    </>
  );
};

export default HeroSection;
