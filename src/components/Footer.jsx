import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-300 py-6 mt-12 w-full bg-gray-900/40 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Chandru. All Rights Reserved.
        </p>
        <Link
          to="https://github.com/chandru0104"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Visit My GitHub
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
