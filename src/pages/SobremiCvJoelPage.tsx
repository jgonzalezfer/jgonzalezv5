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
                <div className="prose prose-lg dark:prose-invert max-w-2xl">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Javier Diez es un programador FullStack argentino que vive en Sevilla, España.
                    Desde hace 12 años que trabaja en el mundo IT pasando por distintos puestos
                    tal como Account Manager, Help Desk Analyst, Project Manager, Consultant Team Leader
                    y Service Manager. Es apasionado de la programación, la tecnología y los deportes.
                  </p>
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