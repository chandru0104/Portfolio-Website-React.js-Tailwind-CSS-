import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Project = () => {
  const productList = [
    {
      id: 1,
      name: "PORTFOLIO WEBSITE",
      description: "React.js , Tailwind.css",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 2,
      name: "E-COMMERCE WEB APPLICATION",
      description: "React.js , Tailwind.css , Node.js , Express.js , MongoDB",
      image: "https://via.placeholder.com/400x250",
    },
      {
      id: 3,
      name: "GRAPHIC DESIGN",
      description: "Adobe Illustrartor , Photoshop",
      image: "behance.png",

    },
  ];

  return (
   
    <div className="bg-gray-900   sm:px-8 md:px-16 lg:px-24 py-12 flex flex-col items-center">

      {/* Heading */}
      <h1 className="text-3xl pt-9 sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-10">
        Projects Showcase
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-fit max-w-6xl">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 
                       p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                       transition-all duration-500 text-center text-white hover:scale-105"
          >
            {/* Project Image */}
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl mb-4 w-full h-40 object-cover shadow-md"
            />

            {/* Project Title */}
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
              {product.name}
            </h2>

            {/* Project Description */}
            <p className="text-sm sm:text-base md:text-lg">{product.description}</p>

            {/* Git Button */}
            <button 
              className="mt-3 bg-blue-600 px-4 py-2 rounded-lg text-white 
                         font-medium transition hover:scale-105 shadow-md"
            >
             <Link to={"https://www.behance.net/chandrus01"}>View</Link>
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
