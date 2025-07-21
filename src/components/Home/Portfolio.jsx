import React, { useState } from "react";

// Contenido por categoría
const content = {
  Arte: (
    <div>
      <h2 className="text-2xl font-bold mb-4">Proyectos de Arte</h2>
      <p>Aquí va tu contenido artístico: ilustraciones, cerámica, etc.</p>
    </div>
  ),
  Diseño: (
    <div>
      <h2 className="text-2xl font-bold mb-4">Proyectos de Diseño</h2>
      <p>Proyectos de diseño gráfico, UI/UX, branding.</p>
    </div>
  ),
  Desarrollo: (
    <div>
      <h2 className="text-2xl font-bold mb-4">Proyectos de Desarrollo</h2>
      <p>Aplicaciones, sitios web, lógica en React, etc.</p>
    </div>
  ),
  Videojuegos: (
    <div>
      <h2 className="text-2xl font-bold mb-4">Videojuegos</h2>
      <p>Proyectos hechos en Unity o similares.</p>
    </div>
  ),
};

const Portafolio = () => {
  const [selected, setSelected] = useState("Arte");
  const tags = ["Arte", "Diseño", "Desarrollo", "Videojuegos"];

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Botones flotantes */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelected(tag)}
            className={`bg-white shadow-xl rounded-xl px-3 py-2 w-fit h-auto transition duration-300 ${
              selected === tag
                ? "bg-[#F00E8D] text-white"
                : "text-gray-700 hover:bg-[#F00E8D] hover:text-white"
            }`}
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              textAlign: "center",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Contenido que cambia */}
      <div className="max-w-4xl mx-auto pt-16 px-8">
        {content[selected]}
      </div>
    </div>
  );
};

export default Portafolio;

