import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Contact = () => {
  return (
    <div className="bg-gray-900 min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16 flex flex-col items-center">

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-white text-center">
        Contact Me
      </h1>

      <div className="w-full max-w-3xl bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center text-blue-300">
          Get in Touch
        </h2>

        <div className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg md:text-xl text-white">
          <p className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-200">
            <FaPhoneAlt className="text-blue-400" /> +91 9025458809
          </p>
          <p className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-200">
            <FaEnvelope className="text-blue-400" /> chandrus0104@gmail.com
          </p>
          <p className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-200">
            <FaMapMarkerAlt className="text-blue-400" /> Tirupur, Tamil Nadu, India
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 text-2xl sm:text-3xl md:text-4xl">
          <a
            href="https://github.com/chandru0104"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transform hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chandru-s-207082282/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transform hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
