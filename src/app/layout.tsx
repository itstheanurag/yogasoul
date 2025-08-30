import type { Metadata } from "next";
import { Caveat, Dancing_Script, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const caveat = Caveat({
  variable: "--font-primary",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-secondary",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoulYoga",
  description: "Your journey to wellness starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${caveat.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
