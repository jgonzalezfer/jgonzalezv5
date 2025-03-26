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
    if (hoveredItem === itemName) {
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
        <div className="flex items-center justify-between h-16">
          {/* Logo y Menú Móvil */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <FiMenu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>

            {!isHomePage && (
              <Link to="/" className="ml-2 text-3xl font-medium">
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
            )}
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
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>

        {/* Navegación - Solo PC */}
        {!isHomePage && (
          <div className="hidden md:block   dark:border-gray-700 mt-4">
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

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="px-4 py-3 space-y-2">
            <NavItems className="flex flex-col space-y-2" />
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <ExternalLinks className="flex-col space-y-3" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
