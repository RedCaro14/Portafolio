import { motion } from 'framer-motion';

// src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-white min-h-screen">
      
      {/* Texto */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Hola, soy <span className="text-pink-600">Carolina</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Ayudo a empresas y emprendedores a transformar ideas en productos digitales
          funcionales y escalables que resuelven problemas reales y generan valor tangible.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#portafolio"
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-full text-center"
          >
            Ver portafolio
          </a>
          <a
            href="#contacto"
            className="border border-pink-600 text-pink-600 hover:bg-pink-50 font-medium py-3 px-6 rounded-full text-center"
          >
            Contáctame
          </a>
        </div>
      </div>


    </section>
  );
}
