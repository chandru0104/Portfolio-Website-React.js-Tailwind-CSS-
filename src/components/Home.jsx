import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Education from "./Education";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      
      {/* Navbar */}
      <nav className="bg-white/10 backdrop-blur-md fixed w-full z-20 top-0 start-0 border-b border-white/20 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
            Chandru
          </span>

          <div className="flex md:order-2 items-center gap-3">
            
 <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400 shadow-lg">
      <img
        src="/PROFILE PIC.jpg"
        alt="Profile"
        className="w-full h-full object-cover"
      />
      </div>

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

          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/20 rounded-lg bg-white/10 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent text-2xl">
              {["Home", "About", "Skills", "Education", "Contact"].map((link, index) => (
                <li key={index}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="block py-2 px-3 text-white rounded-md hover:bg-white/20 md:hover:bg-transparent md:hover:text-blue-400 transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

       {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 pt-32 gap-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="font-extrabold text-4xl md:text-6xl leading-snug">
            Hi...👋 <br />
            I am <span className="text-blue-500">Chandru</span> <br />
            <span className="text-gray-300">Full Stack Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            I develop modern and scalable web applications using the MERN stack,
            blending clean UI/UX design with secure backend development.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow-lg">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition">
              View Resume
            </button>
          </div>
        </div>
  <div className="flex-1 flex justify-center md:justify-end relative z-10">
    <div className="relative w-80 h-80">
      {/* Blue sun halo */}
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-110"></div>

      {/* Main profile pic with frosted glass */}
      <div className="relative w-full h-full rounded-full border-4 border-blue-400/30 overflow-hidden shadow-2xl bg-blue-900/20 backdrop-blur-lg">
        <img
          src="/PROFILE PIC.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-20 gap-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="font-extrabold text-4xl md:text-6xl">About Me</h2>
          <p className="text-lg md:text-2xl text-gray-400">
            I am a passionate MERN Stack Developer skilled in building modern,
            responsive, and scalable web applications. I specialize in MongoDB,
            Express.js, React.js, and Node.js to deliver full-stack solutions with
            clean UI/UX and secure backend systems. I enjoy transforming ideas into
            functional products, implementing robust authentication, and writing
            clean, maintainable code.
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-72 h-72 rounded-3xl border-4 border-blue-400/30 overflow-hidden shadow-2xl bg-blue-900/20 backdrop-blur-lg">
            <img
              src="/coding.jpg"
              alt="Coding"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Skills & Education Section */}
      <section className="px-6 md:px-20 py-20 space-y-16">
        <Skills />
        <Education />
      </section>
    </div>
  );
};
export default Home;
