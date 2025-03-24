import Layout from "../components/Layout";
import { FiUser, FiCode, FiHeart, FiGlobe } from "react-icons/fi";

const sobremiCvJoelPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Sobre Mí</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <FiUser className="h-6 w-6 text-blue-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Presentación</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              ¡Hola! Soy Joel González, un desarrollador de software apasionado por crear soluciones innovadoras 
              y experiencias digitales excepcionales. Con más de 5 años de experiencia en el desarrollo web, 
              me especializo en crear aplicaciones modernas y escalables.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <FiCode className="h-6 w-6 text-green-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Especialización</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Mi enfoque principal se centra en el desarrollo web moderno, utilizando tecnologías como React, 
              Node.js y bases de datos modernas. Me apasiona crear código limpio y mantenible que resuelva 
              problemas reales.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <FiHeart className="h-6 w-6 text-red-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Pasiones</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Me apasiona la tecnología y el aprendizaje continuo. Me encanta explorar nuevas tecnologías y 
              compartir conocimientos con la comunidad de desarrolladores. También disfruto de la resolución 
              de problemas complejos y la creación de experiencias de usuario intuitivas.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <FiGlobe className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Visión</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Mi objetivo es contribuir al desarrollo de tecnologías que hagan del mundo un lugar mejor. 
              Creo en la importancia de crear software que no solo sea funcional, sino también accesible, 
              sostenible y que tenga un impacto positivo en la sociedad.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default sobremiCvJoelPage; 