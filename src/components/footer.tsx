import Link from "next/link";
import { Youtube, Instagram, Music2 } from "lucide-react";

const socialLinks = [
  {
    title: "YouTube",
    href: "https://youtube.com",
    icon: Youtube,
  },
  {
    title: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    title: "TikTok",
    href: "https://tiktok.com",
    icon: Music2,
  },
];

export default function FooterSection() {
  return (
    <footer className="border-t-1 dark:bg-transparent w-full">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            <span className="text-emerald-800 font-bold">© {new Date().getFullYear()} Soulyoga</span>, All rights
            reserved
          </span>
          <div className="order-first flex justify-center gap-6 text-muted-foreground md:order-last">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-500 transition-colors duration-150 font-bold"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
