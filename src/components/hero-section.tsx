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
      <div className="h-screen relative flex w-full items-center justify-center">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:60px_60px]",
            "[background-image:linear-gradient(to_right,#d1fae5_1px,transparent_1px),linear-gradient(to_bottom,#d1fae5_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#166534_1px,transparent_1px),linear-gradient(to_bottom,#166534_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="relative z-20 text-center leading-snug max-w-4xl mx-auto leading-tighter">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-secondary text-emerald-600 tracking-tighter">
            Welcome to SoulYoga
          </h1>

          <div className="sm:text-lg md:text-xl text-neutral-400 tracking-tighter leading-tighter font-light max-w-2xl mx-auto ">
            Explore the power of{""}
            <span className="font-semibold text-emerald-600">
              <FlipWords className="font-secondary" words={texts} />
            </span>
            {""}
            to experience how each practice brings focus, energy, and inner
            peace to your life.
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
