import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HomeScreen";
import ReviewSection from "./components/ReviewSection";
import HomeServiceSection from "./components/Services/HomeServiceSection";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import { services } from "./data/services";

// pages/Home.tsx
function getRandomServices<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
const randomServices = getRandomServices(services, 6);
export const Services = () => <HomeServiceSection services={randomServices} />;

export const Home = () => (
  <>
    <HeroSection />
    <Services />
    <ReviewSection />
    <FaqSection />
  </>
);

// pages/Services.tsx

// pages/Team.tsx
// const Team = () => (
//   <div className="p-8 text-center text-orange-600 text-3xl font-bold">
//     Our Team
//   </div>
// );
// export default Team;

// pages/About.tsx
export const About = () => <AboutUs />;

// pages/Contact.tsx
export const Contact = () => <ContactUs />;
