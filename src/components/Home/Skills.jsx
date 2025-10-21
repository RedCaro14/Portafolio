// src/components/SkillsSection.jsx

function CircularProgress({ level, icon, color }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg className="absolute top-0 left-0" width="100" height="100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e5e7eb" // fondo gris claro
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={color} // color dinámico
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <img
        src={icon}
        alt=""
        className="w-10 h-10 dark:invert" // adapta ícono al tema oscuro
      />
    </div>
  );
}

const designSkills = [
  { name: "Illustrator", level: 80, icon: "/icons/illustrator.svg", color: "#f97316" }, // naranja
  { name: "Photoshop", level: 85, icon: "/icons/photoshop.svg", color: "#3b82f6" }, // azul
  { name: "InDesign", level: 85, icon: "/icons/indesign.svg", color: "#ec4899" }, // rosa
  { name: "Figma", level: 60, icon: "/icons/figma.svg", color: "#a855f7" }, // morado
  { name: "Canva", level: 90, icon: "/icons/canva.svg", color: "#43aaf0ff" } // azul
];

const devSkills = [
  { name: "WordPress", level: 85, icon: "/icons/wordpress.svg", color: "#6366f1" },
  { name: "HTML", level: 80, icon: "/icons/html5.svg", color: "#ef4444" }, // rojo
  { name: "CSS", level: 75, icon: "/icons/css.svg", color: "#3b82f6" }, // azul
  { name: "React", level: 30, icon: "/icons/react.svg", color: "#06b6d4" }, // cyan
  { name: "Unity", level: 30, icon: "/icons/unity.svg", color: "#10b981" }, // verde // indigo
  { name: ".NET#", level: 20, icon: "/icons/dotnet.svg", color: "#64748b" } // gris
];

const generalSkills = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2" },
  { name: "Portugés", level: "B1" }
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Habilidades y Tecnologías
        </h2>

        {/* Diseño y Desarrollo */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Diseño</h3>
            <div className="grid grid-cols-2 gap-8">
              {designSkills.map(({ name, level, icon, color }) => (
                <div key={name} className="flex flex-col items-center">
                  <CircularProgress level={level} icon={icon} color={color} />
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{name} {level}%</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Desarrollo</h3>
            <div className="grid grid-cols-2 gap-8">
              {devSkills.map(({ name, level, icon, color }) => (
                <div key={name} className="flex flex-col items-center">
                  <CircularProgress level={level} icon={icon} color={color} />
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{name} {level}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Generales */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Idiomas</h3>
          <div className="grid grid-cols-3 gap-6">
            {generalSkills.map(({ name, level }) => (
              <div key={name} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
                <p className="font-medium text-gray-700 dark:text-gray-300">{name}</p>
                <p className="text-lg font-bold dark:300-white dark:text-gray-300">{level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}