// src/components/ClientsSection.jsx
export default function ClientsSection() {
  const clients = [
    { name: "Tejedoras Digitales", logo: "/images/client-tejedoras.png" },
    { name: "Cuchau Studios", logo: "/images/client-cuchau.png" },
    { name: "GenJam", logo: "/images/client-genjam.png" },
    { name: "Arte y Tecnología Lab", logo: "/images/client-artlab.png" },
    { name: "CreaLab Bogotá", logo: "/images/client-crealab.png" },
  ];

  return (
    <section id="clientes" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Colaboraciones y Clientes
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          He colaborado con estudios, colectivos y laboratorios creativos en proyectos de arte digital, desarrollo interactivo y videojuegos.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={client.logo}
                alt={`Logo de ${client.name}`}
                className="h-12 brightness-95 hover:brightness-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
