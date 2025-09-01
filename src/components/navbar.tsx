"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Programs", href: "/programs" },
  { name: "Contact us", href: "/contact" },
  { name: "About us", href: "/about" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="fixed z-50 w-full px-2">
        <div
          className={cn(
            "mx-auto px-4 transition-all duration-300 lg:mt-3 lg:max-w-6xl lg:px-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg",
            isScrolled &&
              "bg-background/10 shadow-lg lg:max-w-4xl lg:rounded-2xl lg:border lg:border-emerald-100/20 lg:px-5"
          )}
        >
          <div className="relative flex items-center justify-between py-4">
            {/* Logo */}
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2 z-50"
            >
              <span className="text-xl md:text-2xl font-bold text-emerald-800 dark:text-emerald-300 font-secondary">
                SoulYoga
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex gap-8 text-neutral-500 tracking-tighter">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-emerald-600 duration-200 font-medium relative group"
                    >
                      <span>{item.name}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-shadow-md text-white transition-all duration-200 ease-in-out hover:scale-105 shadow-lg"
              >
                <Link href="/membership">
                  <span className="text-sm font-medium font-mono tracking-tighter text-shadow-md">
                    Start Your Journey
                  </span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              className="relative z-50 p-2 lg:hidden"
            >
              <Menu
                className={cn(
                  "h-6 w-6 text-emerald-700 transition-all duration-300",
                  isMenuOpen && "rotate-180 scale-0 opacity-0"
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 m-auto h-6 w-6 text-emerald-700 transition-all duration-300",
                  !isMenuOpen && "-rotate-180 scale-0 opacity-0",
                  isMenuOpen && "rotate-0 scale-100 opacity-100"
                )}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
              isMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
            )}
          >
            <div className="pt-4 border-t border-emerald-100/20">
              {/* Mobile Navigation Links */}
              <ul className="space-y-4 mb-6 text-neutral-500 tracking-tighter">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="block  hover:text-emerald-600 duration-200 font-medium py-2"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                <Button
                  asChild
                  className="bg-emerald-600 hover:bg-emerald-700 shadow-lg w-fit sm:w-auto"
                  onClick={closeMenu}
                >
                  <Link href="/membership">
                    <span className="text-sm font-medium font-mono tracking-tighter text-shadow-md">
                      Start Your Journey
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
