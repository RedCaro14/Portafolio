import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const { isDarkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = (path) =>
    `transition ${
      currentPath === path
        ? "border-b-2 border-pink-500 text-pink-500"
        : "text-gray-600 dark:text-gray-100 hover:text-pink-500"
    }`;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-4 md:px-20 py-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo y typewriter C-E-N-T-R-A-D-O-S */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <div className="flex items-center space-x-2">
            <span className="text-pink-600 font-bold text-xl">CaroRed</span>
            <span className="text-gray-600 dark:text-gray-300 text-base">
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
          {/* Íconos centrados debajo en móvil */}
          <div className="flex items-center justify-center gap-4 mt-4 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl text-pink-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Cambiar modo claro u oscuro"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-700 text-white transition"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
        {/* Navegación en desktop */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-base">
          <Link to="/" className={linkClass("/")}>Inicio</Link>
          <Link to="/portfolio" className={linkClass("/portfolio")}>Portafolio</Link>
          <Link to="/profile" className={linkClass("/profile")}>Perfil</Link>
          <button
            onClick={toggleTheme}
            aria-label="Cambiar modo claro u oscuro"
            className="ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-700 text-white transition"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        {/* Menú móvil desplegable centrado */}
        {mobileMenuOpen && (
          <div className="flex flex-col items-center space-y-4 mt-4 font-medium text-base md:hidden">
            <Link onClick={() => setMobileMenuOpen(false)} to="/" className={linkClass("/")}>Inicio</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/portfolio" className={linkClass("/portfolio")}>Portafolio</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/profile" className={linkClass("/profile")}>Perfil</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
