import Layout from "../components/Layout";
import { FiUser, FiCode, FiHeart, FiGlobe } from "react-icons/fi";

const WhoAmIPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="text-blue-500 dark:text-blue-400">Q</span>
            <span className="text-red-500 dark:text-red-400">u</span>
            <span className="text-yellow-500 dark:text-yellow-300">i</span>
            <span className="text-blue-500 dark:text-blue-400">é</span>
            <span className="text-green-500 dark:text-green-400">n</span>
            <span className="text-red-500 dark:text-red-400"> </span>
            <span className="text-blue-500 dark:text-blue-400">S</span>
            <span className="text-yellow-500 dark:text-yellow-300">o</span>
            <span className="text-red-500 dark:text-red-400">y</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <FiUser className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold">Sobre Mí</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Soy un desarrollador apasionado por crear soluciones innovadoras y experiencias digitales excepcionales. 
                Mi enfoque se centra en la calidad del código y la satisfacción del usuario final.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <FiCode className="h-6 w-6 text-green-500 mr-2" />
                <h2 className="text-xl font-semibold">Mi Enfoque</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Me especializo en desarrollo web moderno, utilizando las últimas tecnologías y mejores prácticas 
                para crear aplicaciones escalables y mantenibles.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <FiHeart className="h-6 w-6 text-red-500 mr-2" />
                <h2 className="text-xl font-semibold">Pasiones</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Me apasiona la tecnología, el aprendizaje continuo y la creación de soluciones que impacten 
                positivamente en la vida de las personas.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <FiGlobe className="h-6 w-6 text-yellow-500 mr-2" />
                <h2 className="text-xl font-semibold">Visión</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Aspiro a contribuir al desarrollo de tecnologías que hagan del mundo un lugar mejor, 
                promoviendo la innovación y la sostenibilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhoAmIPage; 