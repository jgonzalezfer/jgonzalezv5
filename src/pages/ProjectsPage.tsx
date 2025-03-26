import Layout from "../components/Layout";
import { FaCircle } from "react-icons/fa";
import { RiListCheck3 } from "react-icons/ri";
import { BsChatSquareDots } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Módulos para el ERP Odoo",
      icon: <FaCircle className="h-8 w-8 text-purple-800" />,
      technologies: ["Python", "XML"],
      name: "Odoo modules",
      description: "Con más de 10 años de experiencia en el ERP Odoo, tuve la oportunidad de haber trabajado mucho con este sistema y poder conocerlo a fondo para desarrollar mejoras y soluciones de todo tipo."
    },
    {
      id: 2,
      title: "Cuidado de personas mayores",
      icon: <AiOutlineUser className="h-8 w-8 text-blue-500" />,
      technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "React", "Python", "Flask", "SQL Alchemy"],
      name: "Carefy",
      description: "Carefy es una plataforma que tiene como objetivo conectar a cuidadores de personas adultas con familias que requieren profesionales para estas tareas. Para entrar al sitio web puede tardar unos minutos."
    },
    {
      id: 3,
      title: "Foro sobre Empleo",
      icon: <BsChatSquareDots className="h-8 w-8 text-orange-500" />,
      technologies: ["HTML", "CSS", "Bootstrap", "TypeScript", "React", "Python", "Flask", "SQL Alchemy"],
      name: "ForoJobs",
      description: "ForoJobs es un foro sobre temática Empleo. En esta plataforma los usuarios pueden registrarse, crear temas, buscar respuestas, obtener información y conectar con familias de interés."
    },
    {
      id: 4,
      title: "Cuidado de ancianos",
      icon: <AiOutlineUser className="h-8 w-8 text-pink-500" />,
      technologies: ["HTML", "CSS", "Bootstrap"],
      name: "QuienMeCuida",
      description: "Sitio web responsivo que simula una plataforma que ofrece el servicio de cuidados de ancianos, donde se pueden ofrecer tanto cuidadores como buscar uno de ellos. Presenta varios bloques, botones e imágenes."
    },
    {
      id: 5,
      title: "Tareas por hacer",
      icon: <RiListCheck3 className="h-8 w-8 text-green-500" />,
      technologies: ["HTML", "CSS", "Bootstrap", "Javascript"],
      name: "ToDo List",
      description: "Todo programador debe tener en su listado de proyectos un ToDo List, y yo no iba a ser la excepción. Con este podremos añadir tareas, marcarlas como hechos y eliminarlas. De esta manera, con Javascript jugamos con los cambios de estilos."
    }
  ];

  return (
    <Layout>
      <div className="mx-auto max-w-4xl p-3 sm:p-4 md:p-6">
        <h1 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Proyectos</h1>
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="rounded-lg border border-gray-200 bg-white p-3 sm:p-4 md:p-5 shadow-sm transition-colors hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="h-6 w-6 sm:h-8 sm:w-8">
                    {project.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">{project.title}</h2>
                    <button className="rounded-full p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                      <SlOptions className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {tech}{index < project.technologies.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 dark:text-blue-400">{project.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col items-center">
          <div className="text-center">
            <span className="text-3xl sm:text-5xl md:text-7xl">
              <span className="text-blue-500">J</span>
              <span className="text-red-500">a</span>
              <span className="text-yellow-500">a</span>
              <span className="text-yellow-500">a</span>
              <span className="text-yellow-500">a</span>
              <span className="text-yellow-500">a</span>
              <span className="text-yellow-500">a</span>
              <span className="text-yellow-500">a</span>
              <span className="text-blue-500">v</span>
              <span className="text-green-500">i</span>
              <span className="text-red-500">e</span>
              <span className="text-blue-500">r</span>
            </span>
          </div>
          <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 8, 10].map((num, index) => (
              <a key={index} href="#" className={`text-xs sm:text-sm ${index === 0 ? 'text-black dark:text-white' : 'text-blue-600 dark:text-blue-400'}`}>
                {num}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
