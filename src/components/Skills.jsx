import React from "react";

const Skills = () => {
  const skillList = [
    { name: "JavaScript", src: "/js.png" },
    { name: "React", src: "/react.png" },
    { name: "Node.js", src: "/node.png" },
    { name: "Express", src: "/express js.png" },
    { name: "MongoDB", src: "/mongodb.svg" },
    { name: "SQL", src: "/sql.png" },
    { name: "TailwindCSS", src: "/tailwind.jpg" },
    { name: "Figma", src: "/figma.png" },
  ];

  return (
    <div className="bg-gray-900 px-4 sm:px-8 md:px-16 lg:px-20 py-16 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
        Skills
      </h1>

      {/* Grid: 2 on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {skillList.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 
                       p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
            />
            <p className="mt-3 text-white text-base sm:text-lg font-medium">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
