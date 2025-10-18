// src/components/SkillsSection.jsx
const skills = [
  { name: "React", level: 90, color: "bg-blue-600" },
  { name: "Unity", level: 85, color: "bg-green-600" },
  { name: "Tailwind CSS", level: 80, color: "bg-pink-600" },
  { name: "JavaScript", level: 85, color: "bg-yellow-400 text-black" },
  { name: "Photoshop", level: 70, color: "bg-purple-600" },
  { name: "Adobe After Effects", level: 65, color: "bg-indigo-600" }
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Habilidades y Tecnologías
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, level, color }) => (
            <div key={name} className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">{name}</h3>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{level}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                <div
                  className={`${color} h-4 rounded-full`}
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
