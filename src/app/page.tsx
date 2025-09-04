import HeroSection from "@/components/hero-section";
import { Heading } from "@/components/internals/heading";
import { Subheading } from "@/components/internals/subheading";
import { Partners } from "@/components/partners";
import Services from "@/components/service";
import TeamSection from "@/components/teams";
import Yogas from "@/components/yogas";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      <HeroSection />
      <Services />

      <Partners />

      <Yogas />

      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16">
        <Heading>Our Team</Heading>
        <Subheading>
          A dedicated team of yoga masters and teachers guiding you toward
          balance, growth, and well-being.
        </Subheading>
        <div className="w-full max-w-7xl">
          <TeamSection />
        </div>
      </div>
    </main>
  );
}
