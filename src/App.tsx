// import { useState } from "react";
import "./App.css";
import FaqSection from "./components/FaqSection";
import HomeScreen from "./components/HomeScreen";
import NavBar from "./components/NavBar";
import ReviewSection from "./components/ReviewSection";
import ServicesSection from "./components/servicesSections";
function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <HomeScreen />
      <ServicesSection />
      {/* <AboutUs /> */}
      {/* <CallToAction /> */}
      <ReviewSection />
      <FaqSection />
    </div>
  );
}

export default App;
