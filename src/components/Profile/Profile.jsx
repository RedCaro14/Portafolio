import React from "react";

const Profile = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50">
      {/* Header background and introduction */}
      
      <div className="bg-gradient-to-r from-[#F00E8D] via-[#ff4da1] to-[#F00E8D]/90 py-40 ">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <p className="text-lg font-semibold leading-relaxed text-white">
            Maestra en Artes Plásticas y Visuales con profundización en medios digitales, fotografía y video,
            con experiencia en la ejecución de proyectos visuales, diseño gráfico y editorial, así como en la gestión de equipos de comunicación y diseño.
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <section className="bg-gray-50 py-12 px-6 md:px-16">
        <h2 className="text-2xl font-bold text-[#F00E8D] mb-6">Experiencia</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm">
          <li>Creación de contenido gráfico, para eventos deportivos nacionales (Aquatic Educación Acuática). Dic 2024 – Actualmente.</li>
          <li>Producción de piezas gráficas y visuales para medios digitales e impresos, manejo y actualización de página web, edición y diagramación editorial.</li>
          <li>Elaboración de material gráfico y visual para eventos deportivos nacionales e internacionales y gestión logística (ACOLTEN). Ene 2022 – Sep 2023.</li>
        </ul>

        <h3 className="text-xl font-bold text-[#F00E8D] mt-10">Diseñadora</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm mt-2">
          <li>Ministerio de las Culturas, las Artes y los Saberes. Dic 2022 – Oct 2024.</li>
        </ul>

        <h3 className="text-xl font-bold text-[#F00E8D] mt-10">Artista</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm mt-2">
          <li>Exposición Primavera 2021, Instituto Municipal de Cultura y Turismo de Cajicá. 2021</li>
          <li>Proyecto Ensamble de Creación, San Victorino ASOSANVICTORINO. 2019</li>
          <li>Exposición colectiva 3D Divergencias, Fundación Alzate Avendaño. 2018</li>
          <li>Exposición colectiva TRAYECTOS, Fundación Alzate Avendaño. 2018</li>
          <li>Exposición colectiva FotoEncuentro 6 "imagen, cuerpo y medicina", Universidad Jorge Tadeo Lozano. 2018</li>
          <li>Exposición Arte+Libro, Galería Neebex. 2016</li>
        </ul>
      </section>

      {/* Knowledge Section */}
      <section className="bg-white py-12 px-6 md:px-16">
        <h2 className="text-2xl font-bold text-[#F00E8D] mb-6">Conocimientos</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm">
          <li>Diseño web, desarrollo y mantenimiento de páginas WordPress, diseño para navegación intuitiva, y gestión de sitios SharePoint.</li>
          <li>Diseño gráfico, conceptualización y producción de contenido digital para plataformas y redes sociales.</li>
          <li>Manejo de Adobe Suite, incluyendo Photoshop, Illustrator e InDesign.</li>
          <li>Diseño editorial, diagramación en InDesign, armado tipográfico y adaptación a formatos editoriales.</li>
          <li>Artes plásticas, desarrollo de proyectos artísticos, instalaciones y técnicas tradicionales y digitales.</li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;
