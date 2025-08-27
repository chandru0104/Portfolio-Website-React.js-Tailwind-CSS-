import React from "react";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white w-full">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center w-full pt-28 sm:pt-32 gap-10 px-4 md:px-10">
        {/* Left content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="font-extrabold text-4xl md:text-6xl leading-snug">
            Hi...👋 <br />I am <span className="text-blue-500">Chandru</span>{" "}
            <br />
            <span className="text-gray-300">Full Stack Developer (MERN)</span>
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto md:mx-0">
            Crafting scalable MERN stack applications that deliver both
            beautiful user experiences and reliable backend performance.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to={"/contact"}
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow-lg"
            >
              Hire Me
            </Link>
            <a
              href="/Chandru Resume.pdf"
              download="Chandru Resume.pdf"
              className="px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end relative z-10">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-110"></div>
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
      <section className="flex flex-col md:flex-row justify-between items-center w-full py-12 sm:py-16 gap-10 px-4 md:px-10">
        {/* About text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="font-extrabold text-3xl md:text-5xl">About Me</h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto md:mx-0">
            Certified Full Stack Developer with hands-on experience building
            e-commerce and portfolio websites using the MERN stack (MongoDB,
            Express.js, React.js, Node.js). Skilled in creating responsive,
            scalable, and user-friendly web applications, with expertise in JWT
            authentication, RESTful APIs, and role-based access control.
          </p>
        </div>

        {/* About image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl border-4 border-blue-400/30 overflow-hidden shadow-2xl bg-blue-900/20 backdrop-blur-lg">
            <img
              src="/coding.jpg"
              alt="Coding"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
