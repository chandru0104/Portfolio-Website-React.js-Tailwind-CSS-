import React from "react";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 pt-32 gap-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="font-extrabold text-4xl md:text-6xl leading-snug">
            Hi...👋 <br />I am <span className="text-blue-500">Chandru</span>{" "}
            <br />
            <span className="text-gray-300">Full Stack Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            I develop modern and scalable web applications using the MERN stack,
            blending clean UI/UX design with secure backend development.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to={"/contact"}
              className=" px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow-lg"
            >
              Hire Me
            </Link>
            <a
              href="/resume.pdf" // file must be inside "public" folder
              download="resume.pdf" // file will be downloaded with this name
              className="px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end relative z-10">
          <div className="relative w-80 h-80">
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

      {/* About */}
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-20 gap-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="font-extrabold text-4xl md:text-6xl">About Me</h2>
          <p className="text-lg md:text-2xl text-gray-400">
            I am a passionate MERN Stack Developer with a strong interest in
            building modern, responsive, and scalable web applications. My
            expertise lies in working with MongoDB, Express.js, React.js, and
            Node.js to deliver full-stack solutions that combine clean and
            intuitive UI/UX with secure, efficient, and high-performance backend
            systems.
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

      {/* Skills, Education, Projects */}
      <section className="px-6 md:px-20 py-20 space-y-16">
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
