import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between md:px-20 px-4 w-full bg-white dark:bg-gray-900">
        <div className="text-center md:text-left max-w-xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Hola, soy <span className="text-pink-600">Carolina</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            Profesional multidisciplinaria especializada en el desarrollo de proyectos innovadores que exploran identidad, intimidad y realidades invisibilizadas. Comprometida con la generación de soluciones creativas, funcionales y con rigor crítico, orientadas a transformar procesos cotidianos a través de una mirada sensible y estratégica.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-6 md:gap-4 w-full">
            <Link
              to="/portfolio"
              className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-full text-center transition dark:bg-pink-700 dark:hover:bg-pink-800 w-full md:w-auto"
            >
              Ver portafolio
            </Link>
            <a
              href="https://wa.me/573024789848?text=Hola%20Carolina,%20quiero%20más%20información"
              className="border border-pink-600 text-pink-600 hover:bg-pink-50 font-medium py-3 px-6 rounded-full text-center transition dark:border-pink-400 dark:text-pink-400 dark:hover:bg-gray-800 w-full md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctame
            </a>
          </div>
        </div>
        {/* Imagen */}
        <div className="mb-0 md:mb-0 md:ml-12 mt-20 w-full md:w-auto flex flex-col items-center px-0">
          <img
            src="../images/mi-foto.png"
            alt="Foto de Carolina"
            className="block"
          />
          {/* Líneas SOLO en móvil, pegadas a la foto */}
          <div className="w-full h-1 bg-pink-600 mt-0 block md:hidden"></div>
          <div className="w-full h-1 bg-pink-600 mt-1 block md:hidden"></div>
        </div>
      </div>
      {/* Líneas SOLO en desktop, posición original */}
      <div className="w-screen h-1 bg-pink-600 mt-0 hidden md:block"></div>
      <div className="w-screen h-1 bg-pink-600 mt-1 hidden md:block"></div>
    </section>
  );
}
