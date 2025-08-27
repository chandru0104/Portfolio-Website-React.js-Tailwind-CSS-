import React from "react";

const Education = () => {
  return (
    <div className="bg-gray-900 px-4 sm:px-6 md:px-10 lg:px-20 py-16 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-12 text-white text-center">
        Education
      </h1>

      {/* Education Cards */}
      <div className="grid grid-cols-1 gap-8 w-full max-w-5xl">
        {[
          {
            title: "Full Stack Developer Certification Course",
            place: "Kongu Institute of Computer Education, Tirupur",
            year: "May 2025 – Sep 2025",
          },
          {
            title: "B.E. Electronics and Communication Engineering",
            place: "Nandha Engineering College, Erode",
            year: "2022 – 2025",
          },
          {
            title: "Diploma in Instrumentation & Control Engineering",
            place: "Kongu Polytechnic College, Erode",
            year: "2018 – 2021",
          },
        ].map((edu, i) => (
          <div
            key={i}
            className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 
              p-5 sm:p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl 
              transition-all duration-500 text-center md:text-left text-white hover:scale-[1.02]"
          >
            <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2">
              {edu.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
              {edu.place}
            </p>
            <p className="text-blue-200/80 text-xs sm:text-sm md:text-base mt-1">
              {edu.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
