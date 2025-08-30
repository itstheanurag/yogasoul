import HeroSection from "@/components/hero-section";
import Services from "@/components/service";
import Yogas from "@/components/yogas";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      <HeroSection />
      <Services />
      <Yogas />

    </main>
  );
}
