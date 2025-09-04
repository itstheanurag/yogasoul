import HeroSection from "@/components/hero-section";
import Services from "@/components/service";
import TeamSection from "@/components/teams";
import Yogas from "@/components/yogas";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      <HeroSection />
      <Services />
      <Yogas />

      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-emerald-600 font-secondary tracking-tight mb-8">
          Our Team
        </h1>
        <div className="w-full max-w-7xl">
          <TeamSection />
        </div>
      </div>
    </main>
  );
}
