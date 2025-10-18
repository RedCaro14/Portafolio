// pages/ProjectScreen.jsx
import React, { useState } from "react";
import FloatingButtons from "../components/FloatingButtons";
import GameProjectCard from "../components/GameProjectCard";

const content = {
  Principal: (
    <>
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mt-4 mb-6 text-gray-700">
          Explorando mis proyectos
        </h2>
        <p className="text-lg text-gray-600">
          Aquí encontrarás una muestra de los proyectos en los que he trabajado como desarrolladora, diseñadora y artista visual. Cada uno refleja procesos creativos, soluciones funcionales y una búsqueda constante por integrar estética, experiencia y tecnología.
        </p>
        {/* Imagen */}
        <div className="mt-8">
          
        </div>
      </div>

      {/* Líneas horizontales fuera del contenedor con padding */}
      <div className="w-screen">
          <img
            src="/images/proyectos.png"
            alt="Foto de Carolina"
          />
        <div className="h-1 bg-pink-600 w-screen"></div>
        <div className="h-1 bg-pink-600 w-screen mt-1"></div>
      </div>
    </>

    
  ),
  Videojuegos: (
    <section className="py-2 px-4 bg-gray-50 min-h-screen">
      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GameProjectCard
          image="/images/rocket-rabbit.png"
          title="Rocket Rabbit"
          year="2024"
          team="Cuchau Studios"
          role="Diseñadora UX/UI, programadora y artista"
          summary="Una aventura intergaláctica de lógica, trampas y conejos con actitud."
          details={`Me encargué del diseño UX/UI, programación principal y creación del arte 2D para Rocket Rabbit. También diseñé la interfaz de usuario para que fuera intuitiva y acorde con la estética cyberpunk del juego. 
          Este proyecto me permitió combinar habilidades técnicas y creativas para dar vida a una experiencia inmersiva y desafiante, donde cada nivel presenta nuevos retos con trampas, portales y sistemas a hackear para avanzar y sobrevivir.`}
          itchLink="https://dhako197.itch.io/rocket-rabbit"
        />

        <GameProjectCard
          image="/images/human-input.png"
          title="Human Input"
          year="2025"
          team="Override Studip"
          role="Artista desarrolladora de videojuego"
          summary="Animación, diseño y programación visual para un juego en Unity."
          details={`Realicé la animación de personajes y su implementación en Unity. Diseñé y programé la composición visual del menú de inicio con animaciones. Me encargué de la creación del video introductorio y narrativo, además de la selección, edición e integración de la música y efectos de sonido dentro del juego.`}
          itchLink="" 
        />

        <GameProjectCard
          image="/images/synergy.png"
          title="Synergy"
          year="2025"
          team="Synergy Game Studio"
          role="Artista de videojuego"
          summary="Diseño visual y desarrollo de identidad artística para un prototipo de videojuego experimental."
          details={`Diseñé y desarrollé la identidad visual del juego, estableciendo su estilo artístico y coherencia estética.
          Me encargué de crear y optimizar las interfaces de usuario (UI) para reforzar la experiencia inmersiva.
          Colaboré con el equipo de programación para integrar shaders personalizados, efectos de cámara y filtros visuales como blanco y negro e inversión de color, logrando un aspecto cinematográfico distintivo.`}
          itchLink="https://thingy25.itch.io/synergy" 
        />

 
      </div>
    </section>
  ),
  Arte: (
    <div>
      <h2 className="text-3xl font-bold mb-4">Proyectos de Arte</h2>
      <p>Aquí va tu contenido artístico: ilustraciones, cerámica, etc.</p>
    </div>
  ),
  Diseño: (
    <div>
      <h2 className="text-3xl font-bold mb-4">Proyectos de Diseño</h2>
      <p>Proyectos de diseño gráfico, UI/UX, branding.</p>
    </div>
  ),
  Desarrollo: (
    <div>
      <h2 className="text-3xl font-bold mb-4">Proyectos de Desarrollo</h2>
      <p>Aplicaciones, sitios web, lógica en React, etc.</p>
    </div>
  ),

};

const ProjectScreen = () => {
  const [selected, setSelected] = useState("Principal");
  const tags = ["Videojuegos", "Desarrollo", "Diseño", "Arte"];

  return (
    <div className="bg-gray-50 relative">
      <FloatingButtons tags={tags} selected={selected} setSelected={setSelected} />

      <div className=" pt-8">
        {content[selected]}
      </div>
    </div>
  );
};

export default ProjectScreen;
