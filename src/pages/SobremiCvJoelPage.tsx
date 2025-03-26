import Layout from "../components/Layout";
import { FiUser, FiCode, FiHeart, FiGlobe, FiBriefcase, FiBook, FiFolder } from "react-icons/fi";
import AboutSection from "../components/AboutSection";
import { aboutData } from "../data/aboutData";

const sobremiCvJoelPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 max-w-8xl mx-auto relative">
          {/* Panel izquierdo con AboutSection - Ahora más ancho */}
          <div className="lg:w-2/7 lg:sticky lg:top-8 lg:self-start">
            <div className="space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
              {aboutData.personalInfo.map((info, index) => (
                <div key={index} className="border-b last:border-b-0 border-gray-100 dark:border-gray-700 pb-6">
                  <AboutSection
                    title={info.title}
                    image={info.image}
                    languages={aboutData.skills.languages}
                    link={aboutData.experience.link}
                    linkText={aboutData.experience.linkText}
                    description={info.description}
                  />
                </div>
              ))}
            </div>
          </div>



          {/* Panel derecho estilo Google - Ahora más estrecho */}
          <div className="lg:w-3/5 lg:pl-8">
            {/* Línea vertical divisoria - Solo visible en desktop */}
            <div className="hidden lg:block absolute top-0 bottom-0 w-px bg-gray-100 dark:bg-gray-700 mr-2.5" />
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
              {/* Encabezado con nombre y título */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h1 className="text-3xl font-normal text-gray-900 dark:text-white mb-2">
                    {aboutData.personalInfo[0].name}
                  </h1>
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Programador FullStack
                    </span>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                      ⋮
                    </button>
                  </div>
                </div>
                <button className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full transition-colors">
                  <span className="text-xl">›</span>
                </button>
              </div>

              {/* Contenedor principal de imagen y descripción */}
              <div className="flex flex-col items-center">
                {/* Imagen principal con marco mejorado */}
                <div className="relative mb-8 w-full max-w-sm mx-auto">
                  <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/src/assets/img/jgonzalez.jpg"
                      alt={aboutData.personalInfo[0].name}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  {/* Overlay con gradiente sutil */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>

                {/* Descripción con texto justificado */}
                <div className="prose prose-lg dark:prose-invert max-w-2xl space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <span className="font-bold">Javier Diez</span> es un programador FullStack argentino que vive en Sevilla, España.
                    Desde hace 12 años que trabaja en el mundo IT pasando por distintos puestos
                    tal como <span className="font-semibold">Account Manager, Help Desk Analyst, Project Manager, Consultant Team Leader
                    y Service Manager</span>. Es apasionado de la programación, la tecnología y los deportes.
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="font-bold">Nacimiento:</span> 02 de abril de 1992 (32 años), Rosario, Santa Fe, Argentina
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="font-bold">Títulos:</span> Analista de Sistemas, Analista Programador, Programador FullStack
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="font-bold">Habilidades blandas:</span> Comunicación efectiva, trabajo en equipo, resolución de problemas, adaptabilidad y flexibilidad.
                    </p>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-700 dark:text-gray-300 italic text-lg">
                      "Hazlo, y si te da miedo, hazlo con miedo."
                    </p>
                  </div>
                </div>

                {/* Sección de Perfiles Sociales */}
                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Perfiles</h2>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="https://linkedin.com/in/tu-perfil" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.016-2.005-1.223-2.005-1.222 0-1.409.953-1.409 1.937v5.672h-3v-11h2.95v1.027h.042c.312-.594 1.072-1.223 2.207-1.223 2.36 0 2.9 1.554 2.9 3.575v6.621z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://github.com/tu-perfil" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com/tu-perfil" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Sección de Tecnologías */}
                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Tecnologías</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">React.js</span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">React Native</span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">MySQL</span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">WordPress</span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                          <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">Bootstrap</span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                          <svg className="w-6 h-6 text-orange-500 dark:text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">Figma</span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
                          <svg className="w-6 h-6 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">Python Scraping</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default sobremiCvJoelPage; 