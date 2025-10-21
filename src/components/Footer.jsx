import React from "react";
import ItchioIcon from "../assets/icons/ItchioIcon";
import UnityIcon from "../assets/icons/UnityIcon";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 py-12 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-2">
          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Carolina Rojas. Todos los derechos reservados.
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 items-center">
            <a
              href="https://github.com/RedCaro14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-[#F00E8D] transition duration-300 transform hover:scale-110"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/carolina-rojas-castro-artist-designer-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-[#F00E8D] transition duration-300 transform hover:scale-110"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="https://redcaro14.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-[#F00E8D] transition duration-300 transform hover:scale-110"
            >
              <ItchioIcon className="w-6 h-6" />
            </a>
            <a
              href="https://play.unity.com/en/user/c4aeda50-122a-4390-802c-c6dc0af38ba2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-[#F00E8D] transition duration-300 transform hover:scale-110"
            >
              <UnityIcon className="w-20 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

