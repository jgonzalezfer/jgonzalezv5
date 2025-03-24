import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Definir el orden de las rutas
  const routes = [
    '/quien-soy',
    '/experiencia',
    '/estudios',
    '/conocimientos',
    '/curriculum'
  ];

  // Función para obtener la siguiente ruta
  const getNextRoute = () => {
    const currentPath = location.pathname;
    const currentIndex = routes.indexOf(currentPath);
    if (currentIndex === -1 || currentIndex === routes.length - 1) {
      return routes[0]; // Volver al inicio si no se encuentra la ruta o es la última
    }
    return routes[currentIndex + 1];
  };

  // Simple footer for homepage
  if (isHomePage) {
    return (
      <footer className="mt-auto bg-[#f2f2f2] dark:bg-gray-900">
        <div className="py-3 border-b border-[#dadce0] dark:border-gray-700">
          <div className="mx-auto max-w-6xl px-5">
            <span className="text-[15px] text-[#70757a] dark:text-gray-400">Chile</span>
          </div>
        </div>
        <div className="py-3">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-5">
            <div className="flex items-center space-x-7">
              <Link to="/quien-soy" className="text-[15px] text-[#70757a] hover:text-[#202124] dark:text-gray-400 dark:hover:text-gray-300">
                Quién soy
              </Link>
              <Link to="/experiencia" className="text-[15px] text-[#70757a] hover:text-[#202124] dark:text-gray-400 dark:hover:text-gray-300">
                Experiencia
              </Link>
              <Link to="/estudios" className="text-[15px] text-[#70757a] hover:text-[#202124] dark:text-gray-400 dark:hover:text-gray-300">
                Estudios
              </Link>
            </div>
            <div className="flex items-center space-x-7">
              <Link to="/conocimientos" className="text-[15px] text-[#70757a] hover:text-[#202124] dark:text-gray-400 dark:hover:text-gray-300">
                Conocimientos
              </Link>
              <Link to="/curriculum" className="text-[15px] text-[#70757a] hover:text-[#202124] dark:text-gray-400 dark:hover:text-gray-300">
                Curriculum
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Detailed footer for other pages
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="text-4xl mb-4">
          <span className="text-[#4285f4]">J</span>
          <span className="text-[#ea4335]">o</span>
          <span className="text-[#fbbc05]">o</span>
          <span className="text-[#fbbc05]">o</span>
          <span className="text-[#fbbc05]">o</span>
          <span className="text-[#fbbc05]">o</span>
          <span className="text-[#fbbc05]">o</span>
          <span className="text-[#fbbc05]">o</span>
          <span className="text-[#4285f4]">o</span>
          <span className="text-[#ea4335]">o</span>
          <span className="text-[#34a853]">e</span>
          <span className="text-[#ea4335]">l</span>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex space-x-3 text-[#4285f4]">
            <Link to="/quien-soy" className={`hover:underline ${location.pathname === '/quien-soy' ? 'font-medium' : ''}`}>1</Link>
            <Link to="/experiencia" className={`hover:underline ${location.pathname === '/experiencia' ? 'font-medium' : ''}`}>2</Link>
            <Link to="/estudios" className={`hover:underline ${location.pathname === '/estudios' ? 'font-medium' : ''}`}>3</Link>
            <Link to="/conocimientos" className={`hover:underline ${location.pathname === '/conocimientos' ? 'font-medium' : ''}`}>4</Link>
            <Link to="/curriculum" className={`hover:underline ${location.pathname === '/curriculum' ? 'font-medium' : ''}`}>5</Link>
            <span className="hover:underline cursor-pointer">6</span>
            <span className="hover:underline cursor-pointer">7</span>
            <span className="hover:underline cursor-pointer">8</span>
            <span className="hover:underline cursor-pointer">8</span>
            <span className="hover:underline cursor-pointer">10</span>
          </div>
          <Link 
            to={getNextRoute()}
            className="flex items-center text-[#4285f4] hover:text-[#1a0dab] ml-8"
          >
            <span>Siguiente</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
      <footer className="mt-auto bg-[#f2f2f2] dark:bg-gray-900">
        <div className="py-3 border-b border-[#dadce0] dark:border-gray-700">
          <div className="mx-auto flex max-w-6xl items-center px-5">
            <span className="text-[15px] text-[#70757a] dark:text-gray-400">Chile</span>
            <span className="mx-2 text-[15px] text-[#70757a] dark:text-gray-400">|</span>
            <span className="text-[15px] text-[#70757a] dark:text-gray-400">La ubicación donde estás, Ciudad - </span>
            <a href="#" className="mx-1 text-[15px] text-[#1a73e8] hover:underline dark:text-blue-400">Según tus sitios (casa)</a>
            <span className="text-[15px] text-[#70757a] dark:text-gray-400">-</span>
            <a href="#" className="ml-1 text-[15px] text-[#1a73e8] hover:underline dark:text-blue-400">Actualizar ubicación</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
