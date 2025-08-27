import React from "react";

const Project = () => {
  const productList = [
    {
      id: 1,
      name: "PORTFOLIO WEBSITE",
      description: "React.js , Tailwind CSS",
      image: "Portfolio.png",
      link: "https://github.com/chandru0104/Portfolio-Website-React.js-Tailwind-CSS-",
    },
    {
      id: 2,
      name: "E-COMMERCE WEB APPLICATION",
      description: "React.js , Tailwind CSS , Node.js , Express.js , MongoDB",
      image: "E-commerce.png",
      link: "https://github.com/chandru0104/Trendigo-E-commerce-website-project",
    },
    {
      id: 3,
      name: "GRAPHIC DESIGN",
      description: "Adobe Illustrator , Photoshop",
      image: "behance.png",
      link: "https://www.behance.net/chandrus01",
    },
  ];

  return (
    <div className="bg-gray-900 w-full py-16 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
        Projects Showcase
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-6 md:px-12">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-blue-900/20 backdrop-blur-lg border border-blue-400/30 
                       p-6 rounded-2xl shadow-lg hover:shadow-2xl 
                       transition-all duration-500 text-center text-white hover:scale-105"
          >
            {/* Project Image - Responsive 16:9 */}
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl mb-4 w-full aspect-video object-cover shadow-md"
            />

            {/* Project Title */}
            <h2 className="font-bold text-xl md:text-2xl mb-2">
              {product.name}
            </h2>

            {/* Project Description */}
            <p className="text-sm sm:text-base md:text-lg mb-4">
              {product.description}
            </p>

            {/* GitHub / Behance Button */}
            {product.link !== "#" && (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 px-5 py-2 rounded-lg text-white 
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
