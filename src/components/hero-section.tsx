import React from "react";
import { MorphingText } from "./magicui/morphing-text";

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
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <MorphingText className="italic font-cursive" texts={texts} />
    </div>
  );
};



export default HeroSection;
