// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/10 backdrop-blur-md fixed w-full z-20 top-0 start-0 border-b border-white/20 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo / Name */}
        <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
          Chandru
        </span>

        {/* Right side: Profile + Menu Button */}
        <div className="flex md:order-2 items-center gap-3">
          {/* Profile Pic */}
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400 shadow-lg">
            <img
              src="/PROFILE PIC.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white/20 transition"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/20 rounded-lg bg-white/10 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent text-2xl">
            {["Home", "Projects", "Skills", "Education", "Contact"].map(
              (link, index) => (
                <li key={index}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="block py-2 px-3 text-white rounded-md hover:bg-white/20 md:hover:bg-transparent md:hover:text-blue-400 transition"
                  >
                    {link}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
