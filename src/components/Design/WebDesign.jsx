import { useState } from "react";

const projects = [
  {
    title: "SACC SOLUTION  - 2025",
    category: "UX/UI",
    description: "Proyecto académico diseño de Software para agendamiento de citas SENA.",
    image: "/images/Design/SACC-SOLUTION.png",
  },
  {
    title: "Tejiendo Futuro Digital Desde el Barrio  - 2025",
    category: "Gestión Cultural",
    description: "Proyecto ganador del estímulo económico para el fortalecimiento de organizaciones de mujeres.",
    image: "/images/Design/TFDB-Algoritmicas.jpg",
    link: "https://algoritmicas.tejedorasdigitales.com/tejiendo-futuro-digital-desde-el-barrio/",
  },
  {
    title: "Petsanar Web - 2024",
    category: "UX/UI",
    description: "Web para #Numéricas.",
    image: "/images/Design/PetSanar.png",
    link: "https://carored.tejedorasdigitales.com/inicio-petsanar/",
  },
  {
    title: "I Congreso Internacional de Cocinas Tradicionales / III Encuentro Nacional de Cocineras-os tradicionales. - 2024",
    category: "Identidad Visual",
    description: "Para: MinCulturas.",
    image: "/images/Design/CongresoInternacionalCocinas.webp",
    link: "https://carored.tejedorasdigitales.com/wp-content/uploads/2025/01/CongresoInternacionalCocinas.pdf",
  },
  {
    title: "Mes del Patrimonio - 2024",
    category: "Diseño Gráfico",
    description: "Dirección de Patrimonio y Memoria. Para: MinCulturas.",
    image: "/images/Design/MesPatrimonio2024.webp",
    link: "https://carored.tejedorasdigitales.com/wp-content/uploads/2025/01/MesPatrimonio2024.pdf",
  },
  {
    title: "Propuesta Servicio Social para la Paz - 2024",
    category: "Identidad Visual",
    description: "Por: Laura Ruiz, Joan Castillo y Carolina Rojas. Para: MinCulturas.",
    image: "/images/Design/Imagen-V9-Servicio-Social-para-la-paz.webp",
    link: "https://carored.tejedorasdigitales.com/wp-content/uploads/2025/01/Imagen-V9-Servicio-Social-para-la-paz.pdf",
  },
  {
    title: "Historia de los pueblos sin historia - 2024",
    category: "Identidad Visual",
    description: "Por: Carolina Salazar, Carolina Delgado y Carolina Rojas. Para: MinCulturas.",
    image: "/images/Design/HistoriaPueblosSinHistoria.png",
    link: "https://carored.tejedorasdigitales.com/wp-content/uploads/2025/01/HistoriaPueblosSinHistoria.pdf",
  },
  {
    title: "Rescatando nuestro origen Quimbaya - 2024",
    category: "Identidad Visual",
    description: "Para: MinCulturas.",
    image: "/images/Design/RescatandoNuestroOrigenquimbaya.webp",
    link: "https://carored.tejedorasdigitales.com/wp-content/uploads/2025/01/RescatandoNuestroOrigenquimbaya.pdf",
  },
  {
    title: "Proyecto Laboratorios - 2024",
    category: "Identidad Visual",
    description: "Para: MinCulturas.",
    image: "/images/Design/Laboratorios_IdentidadVisual.webp",
    link: "https://carored.tejedorasdigitales.com/wp-content/uploads/2025/01/Laboratorios_IdentidadVisual.pdf",
  },
  {
    title: "XVII Encuentro y Certificación Internacional de Educación Acuática - 2024",
    category: "Diseño Gráfico",
    description: "Para: Aquatic EA.",
    image: "/images/Design/LineaGraficaAquatic2024.webp",
    link: "https://carored.tejedorasdigitales.com/wp-content/uploads/2025/01/LineaGraficaAquatic2024.pdf",
  },
  { 
    title: "Emporium Landing - 2024",
    category: "UX/UI",
    description: "Landing page para #Numéricas.",
    image: "/images/Design/Emporium.png",
    link: "https://carored.tejedorasdigitales.com/emporium-landing-page/",
  },
  {
    title: "Propuesta Proyecto CHSJD",
    category: "Diseño Gráfico",
    description: "Para: MinCulturas.",
    image: "/images/Design/PRESENTACION_SANJUAN_GRAFICO.webp",
    link: "https://carored.tejedorasdigitales.com/wp-content/uploads/2025/01/PRESENTACION_SANJUAN_GRAFICO.pdf",
  },
  {
    title: "Cartilla Lineamientos para el Avalúo de Bienes Culturales Muebles - 2024",
    category: "Diseño Editorial",
    description: "Para: MinCulturas.",
    image: "/images/Design/LineamientosAvaluoBCM.webp",
    link: "https://carored.tejedorasdigitales.com/wp-content/uploads/2025/01/LineamientosAvaluoBCM-paginasmuestra.pdf",
  },
  {
    title: "Cartilla Inventarios de Patrimonio Cultural Inmaterial - 2023",
    category: "Diseño Editorial",
    description: "Por: Ana María Galvis Guerrero y Carolina Rojas. Para: MinCulturas.",
    image: "/images/Design/PortadaCartInventarios.png",
    link: "https://patrimonio.mincultura.gov.co/fortalecimientodecapacidades/Documents/CartillaInventariosWeb.pdf",
  },
  {
    title: "Guía Plan Especial de Salvaguardia PES - 2023",
    category: "Diseño Editorial",
    description: "Por: Ana María Galvis Guerrero y Carolina Rojas. Para: MinCulturas.",
    image: "/images/Design/PortadaCartPES.jpg",
    link: "https://patrimonio.mincultura.gov.co/fortalecimientodecapacidades/Documents/CartillaPESWeb.pdf",
  }
  // Puedes agregar más proyectos abajo...
];


export default function EditorialDesignList() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="w-full max-w-full min-h-[70vh] flex flex-row bg-inherit overflow-hidden" style={{height:'calc(100vh - 110px)'}}>
      {/* Panel imagen, ocupa la mitad izquierda en alto de la sección, NUNCA fixed */}
      <div className="w-1/2 h-full flex items-stretch justify-stretch">
        <img
          src={projects[activeIdx].image}
          alt={projects[activeIdx].title}
          className="h-full w-full object-contain select-none"
        />
      </div>
      {/* Lista con SCROLL solo aquí, y padding controlado */}
      <div className="w-1/2 h-full flex flex-col items-stretch justify-stretch px-8 py-12 relative">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <ul className="flex flex-col gap-10">
            {projects.map((p, idx) => (
              <li
                key={p.title}
                className="flex items-center justify-between group cursor-pointer"
                tabIndex={0}
                style={{
                  opacity: activeIdx === idx ? 1 : 0.74,
                  fontWeight: activeIdx === idx ? 700 : 400,
                  borderLeft: activeIdx === idx ? "3px solid #ec4899" : "3px solid transparent",
                  paddingLeft: 12,
                  transition: "opacity .15s, border .15s",
                }}
                onMouseEnter={() => setActiveIdx(idx)}
              >
                <div className="flex flex-col flex-1">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl text-gray-900 dark:text-white group-hover:underline"
                    style={{ textDecoration: activeIdx === idx ? "underline" : "none" }}
                  >
                    {p.title}
                  </a>
                  <span className="text-base text-gray-500 dark:text-gray-400 mt-1">{p.description}</span>
                </div>
                <span
                  className={`ml-6 text-base font-light uppercase tracking-widest text-right ${
                    p.category === "UX/UI" ? "text-pink-600" : "text-indigo-700"
                  }`}
                  style={{ minWidth: 70 }}
                >
                  {p.category}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Scrollbar minimalista solo para la lista */}
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `}</style>
    </section>
  );
}
