import { Link, useLocation } from "react-router-dom";
import { FiSettings, FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";
import { BsGrid3X3Gap } from "react-icons/bs";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const { darkMode } = useTheme();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getNavItems = () => {
    const baseItems = [
      { name: "Sobre Joel", path: "/sobremiCvJoelPage" },
      { name: "Proyectos", path: "/proyectos" },
    ];

    const fullItems = [
      { name: "Todo", path: "/sobremiCvJoelPage" },
      { name: "Imágenes", path: "/experiencia" },
      { name: "Vídeos", path: "/estudios" },
      { name: "Shopping", path: "/conocimientos" },
      { name: "Noticias", path: "/proyectos" },
    ];

    return isHomePage ? baseItems : fullItems;
  };

  const getDisplayText = (itemName: string) => {
    if (hoveredItem === itemName || isActive(getNavItems().find(item => item.name === itemName)?.path || '')) {
      switch (itemName) {
        case "Imágenes":
          return "Experiencia";
        case "Vídeos":
          return "Educación";
        case "Shopping":
          return "Conocimientos";
        case "Noticias":
          return "Proyectos";
        default:
          return itemName;
      }
    }
    return itemName;
  };

  const NavItems = ({ className = "" }) => (
    <div className={className}>
      {getNavItems().map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`block px-3 py-2 text-base font-medium transition-all duration-300 ease-in-out ${
            isActive(item.path)
              ? "text-blue-500 dark:text-blue-400"
              : "text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <span className="inline-block transition-all duration-300 ease-in-out">
            {getDisplayText(item.name)}
          </span>
        </Link>
      ))}
    </div>
  );

  const ExternalLinks = ({ className = "" }) => (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
      >
        <FiLinkedin className="h-5 w-5" />
        <span className="hidden md:inline">LinkedIn</span>
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
      >
        <FiGithub className="h-5 w-5" />
        <span className="hidden md:inline">GitHub</span>
      </a>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Nuevo diseño móvil */}
        <div className="flex flex-col md:hidden">
          {!isHomePage && (
            <>
              {/* Logo y Controles */}
              <div className="flex items-center justify-between mb-4">
                <Link to="/" className="text-3xl font-medium">
                  <span className="text-blue-500 dark:text-blue-400">J</span>
                  <span className="text-red-500 dark:text-red-400">G</span>
                  <span className="text-blue-500 dark:text-blue-400">o</span>
                  <span className="text-red-500 dark:text-red-400">n</span>
                  <span className="text-yellow-500 dark:text-yellow-300">z</span>
                  <span className="text-blue-500 dark:text-blue-400">á</span>
                  <span className="text-red-500 dark:text-red-400">l</span>
                  <span className="text-yellow-500 dark:text-yellow-300">e</span>
                  <span className="text-blue-500 dark:text-blue-400">z</span>
                  <span className="text-red-500 dark:text-red-400">F</span>
                </Link>
                <div className="flex items-center space-x-3">
                  <ThemeToggle />
                  <img
                    src="/avatar.jpg"
                    alt="Avatar de joel"
                    className="h-8 w-8 rounded-full border-2 border-gray-200 dark:border-gray-700"
                  />
                </div>
              </div>

              {/* Buscador */}
              <div className="w-full relative mb-6">
                <div className="relative rounded-full border border-gray-300 bg-gray-100 px-4 py-2.5 hover:shadow-md focus-within:shadow-md transition-shadow dark:border-gray-600 dark:bg-gray-800">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      className="ml-3 flex-grow bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500 dark:text-gray-200 dark:placeholder:text-gray-400"
                      placeholder="Buscar información sobre J..."
                    />
                  </div>
                </div>
              </div>

              {/* Navegación */}
              <div className="w-full">
                <div className="flex flex-wrap justify-center gap-4">
                  {getNavItems().map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-300 ease-in-out ${
                        isActive(item.path)
                          ? "bg-blue-500 text-white dark:bg-blue-400"
                          : "bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-900 dark:hover:text-blue-400"
                      }`}
                    >
                      {getDisplayText(item.name)}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Diseño PC (temporalmente oculto) */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between h-16">
            {/* Logo y Menú Móvil */}
            <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
              <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
                {!isHomePage && (
                  <div className="flex-1 flex flex-col items-center md:items-start">
                    <div className="w-full flex justify-center md:justify-start mb-3">
                      <Link to="/" className="text-3xl font-medium">
                        <span className="text-blue-500 dark:text-blue-400">J</span>
                        <span className="text-red-500 dark:text-red-400">G</span>
                        <span className="text-blue-500 dark:text-blue-400">o</span>
                        <span className="text-red-500 dark:text-red-400">n</span>
                        <span className="text-yellow-500 dark:text-yellow-300">z</span>
                        <span className="text-blue-500 dark:text-blue-400">á</span>
                        <span className="text-red-500 dark:text-red-400">l</span>
                        <span className="text-yellow-500 dark:text-yellow-300">e</span>
                        <span className="text-blue-500 dark:text-blue-400">z</span>
                        <span className="text-red-500 dark:text-red-400">F</span>
                      </Link>
                    </div>
                    {/* Buscador móvil */}
                    <div className="w-full max-w-sm relative mb-4 md:hidden">
                      <div className="relative rounded-full border border-gray-300 bg-gray-100 px-4 py-2.5 hover:shadow-md focus-within:shadow-md transition-shadow dark:border-gray-600 dark:bg-gray-800">
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <input
                            type="text"
                            className="ml-3 flex-grow bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500 dark:text-gray-200 dark:placeholder:text-gray-400"
                            placeholder="Buscar información sobre J..."
                          />
                        </div>
                      </div>
                    </div>
                    {/* Navegación móvil */}
                    <div className="w-full md:hidden">
                      <div className="flex flex-wrap justify-center gap-4">
                        {getNavItems().map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`text-sm font-medium transition-all duration-300 ease-in-out ${
                              isActive(item.path)
                                ? "text-blue-500 dark:text-blue-400"
                                : "text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            }`}
                          >
                            {getDisplayText(item.name)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Barra de búsqueda - Solo PC */}
            {!isHomePage && (
              <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                <div className="w-full relative">
                  <div className="relative rounded-full border border-gray-300 bg-gray-100 px-4 py-2 hover:shadow-md focus-within:shadow-md transition-shadow dark:border-gray-600 dark:bg-gray-800">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        className="ml-3 flex-grow bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500 dark:text-gray-200 dark:placeholder:text-gray-400"
                        placeholder="Buscar información sobre J..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Controles de la derecha */}
            <div className="flex items-center space-x-4">
              <ExternalLinks className="hidden md:flex" />
              <ThemeToggle />
              <button className="hidden md:block rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <BsGrid3X3Gap className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
              <img
                src="/avatar.jpg"
                alt="Avatar de joel"
                className="h-8 w-8 rounded-full border-2 border-gray-200 dark:border-gray-700"
              />
            </div>
          </div>

          {/* Navegación - Solo PC */}
          {!isHomePage && (
            <div className="hidden md:block dark:border-gray-700 mt-4">
              <nav className="flex space-x-8">
                {getNavItems().map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`py-4 text-sm font-medium border-b-2 transition-all duration-300 ease-in-out ${
                      isActive(item.path)
                        ? "text-blue-500 border-blue-500 dark:text-blue-400 dark:border-blue-400"
                        : "text-gray-600 border-transparent hover:text-blue-500 hover:border-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                    }`}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {getDisplayText(item.name)}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
