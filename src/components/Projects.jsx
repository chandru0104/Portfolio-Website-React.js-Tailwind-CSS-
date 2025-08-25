import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const productList = [
    {
      id: 1,
      name: "PORTFOLIO WEBSITE",
      description: "React.js , Tailwind CSS",
      image: "Portfolio.png",
      link: "https://github.com/chandru0104/Portfolio-Website-React.js-Tailwind-CSS-", // no link for this
    },
    {
      id: 2,
      name: "E-COMMERCE WEB APPLICATION",
      description: "React.js , Tailwind CSS , Node.js , Express.js , MongoDB",
      image: "https://via.placeholder.com/400x250",
      link: "#", // no link for this
    },
    {
      id: 3,
      name: "GRAPHIC DESIGN",
      description: "Adobe Illustrator , Photoshop",
      image: "behance.png",
      link: "https://www.behance.net/chandrus01", // only last card has Behance
    },
  ];

  return (
    <div className="bg-gray-900 px-4 sm:px-8 md:px-16 lg:px-24 py-12 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-10 mt-3">
        Projects Showcase
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 
                       p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl 
                       transition-all duration-500 text-center text-white hover:scale-105"
          >
            {/* Project Image */}
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl mb-4 w-full h-40 sm:h-48 object-cover shadow-md"
            />

            {/* Project Title */}
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
              {product.name}
            </h2>

            {/* Project Description */}
            <p className="text-sm sm:text-base md:text-lg mb-3">
              {product.description}
            </p>

            {/* Git/Behance Button */}
            {product.link !== "#" && (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 px-4 py-2 rounded-lg text-white 
                           font-medium transition hover:scale-105 shadow-md"
              >
                View
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
