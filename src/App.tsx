// import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import CallToAction from "./components/CallToAction";
import FaqSection from "./components/FaqSection";
import HomeScreen from "./components/HomeScreen";
import NavBar from "./components/NavBar";
import ServicesSection from "./components/servicesSections";
function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <HomeScreen />
      <ServicesSection />
      {/* <AboutUs /> */}
      {/* <CallToAction /> */}
      <FaqSection />
    </div>
  );
}

export default App;
