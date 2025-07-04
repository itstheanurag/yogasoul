import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { About, Contact, Home } from "./pages";
import ServicesPage from "./components/Services/Services";
import "./App.css";
function App() {
  return (
    <BrowserRouter basename="/">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/team" element={<Team />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="p-8 text-center text-red-500">Page Not Found</div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
