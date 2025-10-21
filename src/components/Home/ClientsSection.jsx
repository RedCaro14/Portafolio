import { useEffect, useRef } from "react";

export default function ClientsSection() {
  const scrollRef = useRef(null);

  const clients = [
    { name: "ACOLTEN", logo: "/images/Clients/ACOLTEN.png" },
    { name: "algoritmicas", logo: "/images/Clients/algoritmicas.png" },
    { name: "Aquatic EA", logo: "/images/Clients/AquaticEA.png" },
    { name: "Calle 14", logo: "/images/Clients/Calle14-RevistaInvestigacionCampoArte.png" },
    { name: "Congreso Cocinas", logo: "/images/Clients/CongresoCocinas-EncuentroCocineros.png" },
    { name: "Cuchau Studio", logo: "/images/Clients/CuchauStudio.png" },
    { name: "Fundación ECOPACIFICO FEPAF", logo: "/images/Clients/ECOPACIFICO-FEPAF.png" },
    { name: "Fosil", logo: "/images/Clients/Fosil.png" },
    { name: "Mapy accesorios", logo: "/images/Clients/mapy-accesorios.png" },
    { name: "MinCulturas", logo: "/images/Clients/MinCulturas.png" },
    { name: "PetSanar", logo: "/images/Clients/PetSanar.png" },
    { name: "SynergyGameStudios", logo: "/images/Clients/SynergyGameStudios.png" },
    { name: "TejeCulturas", logo: "/images/Clients/TejeCulturas.png" },
    { name: "USAID-ACDIVOCA", logo: "/images/Clients/USAID-ACDIVOCA.png" },
    { name: "XVII-EncuentroAquatic", logo: "/images/Clients/XVII-EncuentroAquatic.png" },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (container) {
        scrollAmount += 1; // velocidad
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clientes" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Colaboraciones y Clientes
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          He colaborado con instituciones, colectivos y empresas creativas en proyectos de arte digital, diseño, eventos, desarrollo interactivo y videojuegos.
        </p>

        <div
          ref={scrollRef}
          className="flex overflow-x-scroll space-x-8 no-scrollbar"
        >
          {clients.concat(clients).map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-6 bg-white dark:bg-gray-500 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-[180px] flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={`Logo de ${client.name}`}
                className="brightness-95 hover:brightness-100 transition-all duration-300 object-contain"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}