export default function ProfileScreen() {
  return (
    <section
      className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex"
      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-6xl mx-auto w-full py-16 px-4 lg:px-12">
        <header className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Perfil Profesional</h2>
          <div className="h-2 w-36 bg-pink-600 dark:bg-pink-500 rounded mb-7" />
          <p className="text-lg md:text-xl max-w-3xl text-gray-700 dark:text-gray-300">
            Maestra en Artes Plásticas y Visuales con enfoque en medios digitales, fotografía y video.
            Experta en dirección de proyectos visuales y diseño editorial, con gestión de equipos multidisciplinares.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-14 mt-8">
          <div>
            <h3 className="text-lg font-bold tracking-wide text-pink-600 dark:text-pink-400 mb-2 uppercase">
              Experiencia
            </h3>
            <div className="h-1 w-14 bg-pink-300 dark:bg-pink-600 rounded mb-4" />
            <ul className="space-y-6 text-base text-gray-900 dark:text-gray-100">
              <li>
                <span className="font-bold">Creación de contenido gráfico en Aquatic Educación Acuática</span>
                <div className="text-xs mt-1 text-zinc-400 dark:text-zinc-400 italic">Dic 2024 – Actualmente</div>
                <div className="text-sm dark:text-gray-300">
                  Eventos deportivos, gestión web y diagramación editorial
                </div>
              </li>
              <li>
                <span className="font-bold">Producción y logística gráfica para ACOLTEN</span>
                <div className="text-xs mt-1 text-zinc-400 dark:text-zinc-400 italic">Ene 2022 – Sep 2023</div>
              </li>
              <li>
                <span className="font-bold">Diseñadora en Ministerio de las Culturas, las Artes y los Saberes</span>
                <div className="text-xs mt-1 text-zinc-400 dark:text-zinc-400 italic">Dic 2022 – Oct 2024</div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold tracking-wide text-pink-600 dark:text-pink-400 mb-2 uppercase">
              Conocimientos Técnicos
            </h3>
            <div className="h-1 w-14 bg-pink-300 dark:bg-pink-600 rounded mb-4" />
            <ul className="space-y-3 text-base text-gray-900 dark:text-gray-100">
              <li>Diseño web WordPress y SharePoint</li>
              <li>UX/UI y navegación intuitiva</li>
              <li>Contenidos digitales para redes sociales</li>
              <li>Adobe CC: Photoshop, Illustrator, InDesign</li>
              <li>Diagramación editorial y formatos editoriales</li>
              <li>Artes plásticas, técnicas mixtas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
