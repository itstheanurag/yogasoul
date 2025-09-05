import { Suspense, lazy } from "react";
import HeroSection from "@/components/hero-section";
import { Heading } from "@/components/internals/heading";
import { Subheading } from "@/components/internals/subheading";

const Services = lazy(() => import("@/components/service"));
const Partners = lazy(() =>
  import("@/components/partners").then((module) => ({
    default: module.Partners,
  }))
);
const Yogas = lazy(() => import("@/components/yogas"));
const TeamSection = lazy(() => import("@/components/teams"));
const FaqSection = lazy(() => import("@/components/faqs"));

const SectionSkeleton = () => (
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="animate-pulse">
      <div className="h-8 bg-neutral-200 dark:bg-neutral-700 rounded-lg w-64 mx-auto mb-4"></div>
      <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded-lg w-96 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-48 bg-neutral-200 dark:bg-neutral-700 rounded-2xl"
          ></div>
        ))}
      </div>
    </div>
  </div>
);

const CardSkeleton = () => (
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-20 bg-neutral-200 dark:bg-neutral-700 rounded-xl"
          ></div>
        ))}
      </div>
    </div>
  </div>
);

const FaqSkeleton = () => (
  <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-neutral-200 dark:bg-neutral-700 rounded-lg w-48 mx-auto mb-8"></div>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6"
        >
          <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-lg w-3/4 mb-4"></div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded-lg w-full mb-2"></div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded-lg w-5/6"></div>
        </div>
      ))}
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      <HeroSection />

      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>

      <Suspense fallback={<CardSkeleton />}>
        <Partners />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Yogas />
      </Suspense>

      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <Heading>Our Team</Heading>
        <Subheading>
          A dedicated team of yoga masters and teachers guiding you toward
          balance, growth, and well-being.
        </Subheading>
        <div className="w-full max-w-7xl">
          <Suspense fallback={<SectionSkeleton />}>
            <TeamSection />
          </Suspense>
        </div>
      </div>

      <div className="w-full max-w-7xl">
        <Suspense fallback={<FaqSkeleton />}>
          <FaqSection />
        </Suspense>
      </div>
    </main>
  );
}
