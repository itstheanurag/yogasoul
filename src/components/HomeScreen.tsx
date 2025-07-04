import banner from "../assets/banner.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { QUOTES } from "../data/quotes";

const textList = [
  "Achieve Health, Peace through Yoga",
  "Empower Your Body and Mind",
  "Start Your Journey Today",
  "Breathe Deeply, Live Fully",
  "Find Strength in Stillness",
  "Awaken Your Inner Energy",
  "Balance Body, Mind, and Soul",
  "Stretch Beyond Limits",
  "Create Space Within",
  "Flow with Purpose and Presence",
  "Reconnect with Your True Self",
  "Let Your Breath Guide You",
];

const HeroSection = () => {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const today = new Date().getDay();
  const quoteOfTheDay = QUOTES[today % QUOTES.length];

  useEffect(() => {
    let i = 0;
    const currentText = textList[textIndex];
    setDisplayed("");

    const interval = setInterval(() => {
      setDisplayed(currentText.slice(0, i + 1));
      i++;
      if (i === currentText.length) {
        clearInterval(interval);
        // Wait and show next message
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % textList.length);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <div className="relative h-screen w-full">
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Foreground content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.span
          className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold capitalize font-sans text-white drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
        >
          {displayed}
          <span className="animate-pulse">|</span>
        </motion.span>

        {/* Static quote */}
        <blockquote className="mt-6 text-sm sm:text-lg md:text-xl lg:text-2xl italic text-white font-serif border-l-4 border-orange-600 pl-4 max-w-2xl drop-shadow-sm">
          {quoteOfTheDay.text}
          <span className="block mt-2 text-base not-italic text-orange-400 font-medium">
            — {quoteOfTheDay.author}
          </span>
        </blockquote>
      </div>
    </div>
  );
};

export default HeroSection;
