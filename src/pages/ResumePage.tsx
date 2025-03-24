import Layout from "../components/Layout";
import { FiDownload } from "react-icons/fi";

const ResumePage = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">Curriculum</h1>
          <a
            href="#"
            className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <FiDownload className="mr-2" />
            Descargar PDF
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-colors dark:border-gray-700 dark:bg-gray-800">
          {/* Información personal */}
          <div className="mb-6 border-b border-gray-200 pb-6 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-100">joel Desarrollador</h2>
            <div className="flex flex-wrap gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-medium text-gray-700 dark:text-gray-300">joel@example.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Teléfono</p>
                <p className="font-medium text-gray-700 dark:text-gray-300">+34 612 345 678</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Ubicación</p>
                <p className="font-medium text-gray-700 dark:text-gray-300">Madrid, España</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Web</p>
                <p className="font-medium text-blue-600 dark:text-blue-400">www.joel-dev.com</p>
              </div>
            </div>
          </div>

          {/* Resumen profesional */}
          <div className="mb-6 border-b border-gray-200 pb-6 dark:border-gray-700">
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">Resumen Profesional</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Desarrollador web con más de 5 años de experiencia en tecnologías frontend y backend. Especializado en la creación de soluciones web modernas, escalables y centradas en el usuario. Apasionado por la tecnología y el aprendizaje continuo.
            </p>
          </div>

          {/* Experiencia */}
          <div className="mb-6 border-b border-gray-200 pb-6 dark:border-gray-700">
            <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">Experiencia Profesional</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100">Senior Frontend Developer</h3>
                <div className="mb-1 text-sm">
                  <span className="font-medium text-blue-600 dark:text-blue-400">Tech Innovations S.L.</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-500 dark:text-gray-400">2020 - Presente</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Desarrollo de aplicaciones web escalables utilizando React y NextJS. Implementación de arquitecturas frontend modernas y optimización de rendimiento.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100">Web Developer</h3>
                <div className="mb-1 text-sm">
                  <span className="font-medium text-blue-600 dark:text-blue-400">Digital Solutions</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-500 dark:text-gray-400">2018 - 2020</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Desarrollo de sitios web responsivos y aplicaciones web para diversos clientes. Implementación de soluciones personalizadas utilizando JavaScript, HTML y CSS.
                </p>
              </div>
            </div>
          </div>

          {/* Educación */}
          <div className="mb-6 border-b border-gray-200 pb-6 dark:border-gray-700">
            <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">Educación</h2>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-100">Máster en Desarrollo Web Avanzado</h3>
              <div className="mb-1 text-sm">
                <span className="font-medium text-green-600 dark:text-green-400">Universidad Tecnológica de Madrid</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-500 dark:text-gray-400">2016 - 2017</span>
              </div>
            </div>
            <div className="mt-3">
              <h3 className="font-bold text-gray-800 dark:text-gray-100">Grado en Ingeniería Informática</h3>
              <div className="mb-1 text-sm">
                <span className="font-medium text-green-600 dark:text-green-400">Universidad de Barcelona</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-500 dark:text-gray-400">2012 - 2016</span>
              </div>
            </div>
          </div>

          {/* Habilidades */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-100">Habilidades Técnicas</h2>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Git", "Docker"].map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResumePage;
