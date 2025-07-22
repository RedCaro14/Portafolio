import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkClass = (path) =>
    `transition ${
      currentPath === path
        ? "border-b-2 border-pink-500 text-pink-500"
        : "text-gray-600 hover:text-pink-500"
    }`;

  return (
    <nav className="flex justify-between items-center px-20 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-3">
        <div className="text-pink-600 font-bold text-xl flex items-center space-x-2">
          <span>CaroRed</span>
          <span className="text-gray-600 text-base">
            <Typewriter
              words={["Artista", "Desarrolladora", "Diseñadora"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-8 font-medium text-base">
        <Link to="/" className={linkClass("/")}>Inicio</Link>
        <Link to="/portfolio" className={linkClass("/portfolio")}>Portafolio</Link>
        <Link to="/profile" className={linkClass("/profile")}>Perfil</Link>
      </div>
    </nav>
  );
};

export default Navbar;

