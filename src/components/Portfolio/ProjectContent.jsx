import React from "react";
import GameProjectCard from "../GameProjectCard";
import DesignSection from "../Design/WebDesign";
import { useTheme } from "../../context/ThemeContext"; 

const contentMap = {
  Principal: PrincipalContent,
  Videojuegos: VideojuegosContent,
  Diseño: DiseñoContent,
};

export default function ProjectContent({ selectedCategory }) {
  const Component = contentMap[selectedCategory] || PrincipalContent;
  return <Component />;
}

function PrincipalContent() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mt-4 mb-6 text-gray-700 dark:text-white">
          Explorando mis proyectos
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Aquí encontrarás una muestra de los proyectos en los que he trabajado como desarrolladora, diseñadora y artista visual. Cada uno refleja procesos creativos, soluciones funcionales y una búsqueda constante por integrar estética, experiencia y tecnología.
        </p>
      </div>
      <div className="w-screen">
        <img
          src={isDarkMode ? "/images/proyectosdark.png" : "/images/proyectos.png"}
          alt="Foto de Carolina"
        />
        <div className="h-1 bg-pink-600 w-screen" />
        <div className="h-1 bg-pink-600 w-screen mt-1" />
      </div>
    </>
  );
}

function VideojuegosContent() {
  return (
    <section className="py-2 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GameProjectCard
          image="/images/rocket-rabbit.png"
          title="Rocket Rabbit"
          year="2025"
          team="Cuchau Studios"
          role="Diseñadora UX/UI y artista"
          summary="Una aventura intergaláctica de lógica, trampas y conejos con actitud."
          details={`Me encargué del diseño UX/UI, y creación del arte 2D para Rocket Rabbit. También diseñé la interfaz de usuario para que fuera intuitiva y acorde con la estética cyberpunk del juego.`}
          itchLink="https://dhako197.itch.io/rocket-rabbit"
        />
        <GameProjectCard
          image="/images/human-input.png"
          title="Human Input"
          year="2025"
          team="Override Studio"
          role="Artista desarrolladora de videojuego"
          summary="Animación, diseño y programación visual para un juego en Unity."
          details={`Realicé la animación de personajes y su implementación en Unity. Diseñé y programé la composición visual del menú de inicio con animaciones.`}
          itchLink=""
        />
        <GameProjectCard
          image="/images/synergy.png"
          title="Synergy"
          year="2025"
          team="Synergy Game Studio"
          role="Artista de videojuego"
          summary="Diseño visual y desarrollo de identidad artística para un prototipo de videojuego experimental."
          details={`Diseñé y desarrollé la identidad visual del juego, interfaces y colaboré con integración de shaders y efectos visuales.`}
          itchLink="https://thingy25.itch.io/synergy"
        />
      </div>
    </section>
  );
}

function DiseñoContent() {
  return <DesignSection />;
}


