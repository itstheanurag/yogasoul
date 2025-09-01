"use client";
import { useState, useEffect, ReactNode } from "react";


interface TypewriterTextProps {
  children: string;
  speed?: number;
}

const TypewriterText = ({ children, speed = 50 }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(children.slice(0, i + 1));
      i++;
      if (i === children.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [children, speed]);

  return <span>{displayedText}</span>;
};

export default TypewriterText;
