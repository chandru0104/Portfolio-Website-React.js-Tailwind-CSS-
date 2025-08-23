import React from "react";
import Navbar from "./Navbar";
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
    <div className="flex flex-col items-center">
       
      <h1 className="text-3xl pt-20 sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-12">
        Skills
      </h1>

      {/* Grid: 2 on mobile, 3 on tablet, 4 on laptop/desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {skillList.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 
                       p-6 rounded-2xl shadow-lg flex flex-col items-center"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <p className="mt-3 text-white text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
