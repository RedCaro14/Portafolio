import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between md:px-20 bg-white dark:bg-gray-900">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Hola, soy <span className="text-pink-600">Carolina</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            Creadora multidisciplinar con interés en lo mutable y en los procesos que dan forma a lo cotidiano. Desarrollo proyectos que exploran la identidad, lo íntimo y los elementos invisibilizados, con el objetivo de generar soluciones creativas, funcionales y con sentido crítico.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-full text-center transition dark:bg-pink-700 dark:hover:bg-pink-800"
            >
              Ver portafolio
            </Link>
            
          <a
            href="https://wa.me/573024789848?text=Hola%Carolina%,%20quiero%20más%20información"
            className="border border-pink-600 text-pink-600 hover:bg-pink-50 font-medium py-3 px-6 rounded-full text-center transition dark:border-pink-400 dark:text-pink-400 dark:hover:bg-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contáctame
          </a>

          </div>
        </div>

        {/* Imagen */}
        <div className="mb-0 md:mb-0 md:ml-12 mt-20">
          <img
            src="../images/mi-foto.png"
            alt="Foto de Carolina"
          />
        </div>
      </div>
      {/* Líneas decorativas */}
      <div className="w-screen h-1 bg-pink-600"></div>
      <div className="w-screen h-1 bg-pink-600 mt-1"></div>
    </section>
  );
}
