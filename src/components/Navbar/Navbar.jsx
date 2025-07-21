import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-3">
        <div className="text-blue-600 text-2xl font-bold">ⓒ</div>
        <div className="text-pink-600 font-bold text-xl flex items-center space-x-2">
          <span>Carolina Rojas</span>
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

      {/* Botones de navegación corregidos */}
      <div className="flex items-center space-x-8 text-gray-400 font-medium text-base">
        <Link to="/" className="border-b-2 border-pink-500 text-pink-500">Inicio</Link>
        <Link to="/portfolio" className="hover:text-pink-500 transition">Portafolio</Link>
        <Link to="/profile" className="hover:text-pink-500 transition">Perfil</Link>
        <a href="https://github.com/RedCaro14" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl hover:text-pink-500 transition" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

