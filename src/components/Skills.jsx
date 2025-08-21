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
    <div className="bg-gray-900 min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-white text-center">
        Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-4xl">
        {skillList.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 flex justify-center items-center hover:scale-105"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-20 h-20 md:w-28 md:h-28 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
