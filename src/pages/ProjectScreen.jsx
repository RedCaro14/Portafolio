// pages/ProjectScreen.jsx
import React, { useState } from "react";
import FloatingButtons from "../components/FloatingButtons";

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
    <div>
      <h2 className="text-3xl font-bold mb-4">Proyectos de Videojuegos</h2>
      <p>Proyectos hechos en Unity, Godot o similares.</p>
    </div>
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
