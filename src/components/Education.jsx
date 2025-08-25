import React from "react";

const Education = () => {
  return (
    <div className="bg-gray-900 min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 py-16 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-white text-center">
        Education
      </h1>

      <div className="grid grid-cols-1 gap-6 w-full max-w-2xl">
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
            className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 text-center text-white hover:scale-105"
          >
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">{edu.title}</h2>
            <p className="text-sm sm:text-base md:text-lg">{edu.place}</p>
            <p className="text-blue-200/80 text-xs sm:text-sm md:text-base mt-1">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
