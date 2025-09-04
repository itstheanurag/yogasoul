import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const ButtonMain = ({
  link,
  children,
}: {
  link?: string;
  children: React.ReactNode;
}) => {
  if (link) {
    return (
      <Button
        asChild
        className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all duration-200 ease-in-out hover:scale-105"
      >
        <Link href={link}>
          <span className="text-sm font-medium font-mono tracking-tighter">
            {children}
          </span>
        </Link>
      </Button>
    );
  }

  return (
    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all duration-200 ease-in-out hover:scale-105">
      <span className="text-sm font-medium font-mono tracking-tighter">
        {children}
      </span>
    </Button>
  );
};

export default ButtonMain;
