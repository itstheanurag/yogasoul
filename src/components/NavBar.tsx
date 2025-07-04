import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const textAnimationClass =
  "text-xl text-orange-600 font-semibold hover:text-orange-400 transition ease-in delay-150 duration-400 cursor-pointer leading-tight";

const backgroundAnimationClasses =
  "bg-orange-600 hover:bg-orange-400 transition ease-in delay-150 duration-400 leading-tight";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-amber-50 sticky top-0 shadow z-10">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <p
              className={`flex items-center text-white w-10 h-10 p-4 ${backgroundAnimationClasses} rounded-full`}
            >
              <span>S</span>
            </p>
          </Link>
          <h1 className={`cursor-pointer text-2xl ${textAnimationClass}`}>
            <Link to="/">
              <span>YogaSoul</span>
            </Link>
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-12 ">
          <li className={textAnimationClass}>
            <Link to="/services">Services</Link>
          </li>
          <li className={textAnimationClass}>
            <Link to="/team">Team</Link>
          </li>
          <li className={textAnimationClass}>
            <Link to="/about">About</Link>
          </li>
          <li className={textAnimationClass}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <button
            className={`px-4 py-2 text-white rounded ${backgroundAnimationClasses}`}
          >
            <Link to="/contact">Get a Quote</Link>
          </button>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col md:hidden px-4 pb-4 gap-4">
          <ul className="flex flex-col gap-3">
            <li className={textAnimationClass}>
              <Link onClick={() => setMenuOpen(false)} to="/services">
                Services
              </Link>
            </li>
            <li className={textAnimationClass}>
              <Link onClick={() => setMenuOpen(false)} to="/team">
                Team
              </Link>
            </li>
            <li className={textAnimationClass}>
              <Link onClick={() => setMenuOpen(false)} to="/about">
                About
              </Link>
            </li>
            <li className={textAnimationClass}>
              <Link onClick={() => setMenuOpen(false)} to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <button
            className={`mt-2 w-full py-2 text-white rounded ${backgroundAnimationClasses}`}
            onClick={() => setMenuOpen(false)}
          >
            <Link to="/contact">Get a Quote</Link>
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;
