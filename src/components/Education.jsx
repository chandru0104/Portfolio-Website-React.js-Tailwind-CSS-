import React from "react";
import Navbar from "./Navbar";
const Education = () => {
  return (
    <div className="bg-gray-900 min-h-screensm:px-8 md:px-16 lg:px-20  flex flex-col items-center ">
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 text-white text-center pt-20">
        Education
      </h1>

      {/* 1 column always */}
      <div className="grid grid-cols-1 gap-6 w-full max-w-2xl">
        {/* Card 1 */}
        <div className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 p-4  sm:p-6 md:p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 text-center text-white hover:scale-105">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
            Full Stack Developer Certification Course
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            Kongu Institute of Computer Education, Tirupur
          </p>
          <p className="text-blue-200/80 text-xs sm:text-sm md:text-base mt-1">
            May 2025 – Sep 2025
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 p-4 sm:p-6 md:p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 text-center text-white hover:scale-105">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
            B.E. Electronics and Communication Engineering
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            Nandha Engineering College, Erode
          </p>
          <p className="text-blue-200/80 text-xs sm:text-sm md:text-base mt-1">
            2022 – 2025
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 p-4 sm:p-6 md:p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 text-center text-white hover:scale-105">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
            Diploma in Instrumentation & Control Engineering
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            Kongu Polytechnic College, Erode
          </p>
          <p className="text-blue-200/80 text-xs sm:text-sm md:text-base mt-1">
            2018 – 2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
