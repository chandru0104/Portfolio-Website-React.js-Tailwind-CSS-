import React from "react";

const Education = () => {
  return (
    <div className="bg-gray-900 min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-white text-center">
        Education
      </h1>

      {/* 1 column always */}
      <div className="grid grid-cols-1 gap-8 w-full max-w-3xl">
        {/* Card 1 */}
        <div className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center text-white hover:scale-105">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-3">
            Full Stack Developer Certification Course
          </h2>
          <p className="text-base sm:text-lg md:text-xl">
            Kongu Institute of Computer Education, Tirupur
          </p>
          <p className="text-blue-200/80 text-sm sm:text-base md:text-lg mt-2">
            May 2025 – Sep 2025
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center text-white hover:scale-105">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-3">
            B.E. Electronics and Communication Engineering
          </h2>
          <p className="text-base sm:text-lg md:text-xl">Nandha Engineering College, Erode</p>
          <p className="text-blue-200/80 text-sm sm:text-base md:text-lg mt-2">
            2022 – 2025
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center text-white hover:scale-105">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-3">
            Diploma in Instrumentation & Control Engineering
          </h2>
          <p className="text-base sm:text-lg md:text-xl">Kongu Polytechnic College, Erode</p>
          <p className="text-blue-200/80 text-sm sm:text-base md:text-lg mt-2">
            2018 – 2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
