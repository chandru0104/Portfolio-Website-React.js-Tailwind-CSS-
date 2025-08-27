import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-full px-3 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 flex flex-col items-center mt-10">
      
      {/* Heading */}
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-10 text-white text-center w-full">
       Contact Me
      </h1>

      {/* Full Width Card */}
      <div className="w-full bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 
        p-4 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg hover:shadow-2xl 
        transition-shadow duration-300">
        
        {/* Subheading */}
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-center text-blue-300">
          Get in Touch
        </h2>

        {/* Contact Details */}
        <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg lg:text-xl text-white w-full">
          
          {/* Phone */}
          <a
            href="tel:+919025458809"
            className="flex items-center gap-2 sm:gap-3 hover:text-blue-400 transition-colors duration-200"
          >
            <FaPhoneAlt className="text-blue-400 text-base sm:text-xl md:text-2xl shrink-0" />
            <span className="break-all">+91 9025458809</span>
          </a>

          {/* Email */}
          <a
            href="mailto:chandrus0104@gmail.com"
            className="flex items-center gap-2 sm:gap-3 hover:text-blue-400 transition-colors duration-200"
          >
            <FaEnvelope className="text-blue-400 text-base sm:text-xl md:text-2xl shrink-0" />
            <span className="break-all">chandrus0104@gmail.com</span>
          </a>

          {/* Location */}
          <p className="flex items-center gap-2 sm:gap-3 hover:text-blue-400 transition-colors duration-200">
            <FaMapMarkerAlt className="text-blue-400 text-base sm:text-xl md:text-2xl shrink-0" />
            <span>Tirupur, Tamil Nadu, India</span>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 text-xl sm:text-2xl md:text-3xl">
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
