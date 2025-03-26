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
    <header className="flex flex-col transition-colors dark:bg-gray-900">
      <div className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center">
          {/* Logo/Nombre */}
          {!isHomePage && (
            <Link to="/" className="text-lg md:text-xl font-medium">
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

          {/* Navegación en línea solo para el home */}
          {isHomePage && (
            <nav className="hidden md:flex ml-8 items-center space-x-6">
              <NavItems />
            </nav>
          )}

          {!isHomePage && (
            <div className="hidden md:flex ml-6 relative w-80 items-center rounded-full border border-gray-300 bg-gray-100 px-4 py-2 dark:border-gray-600 dark:bg-gray-800">
              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                className="ml-2 flex-grow bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500 dark:text-gray-200 dark:placeholder:text-gray-400"
                placeholder="Buscar información sobre J..."
              />
              <div className="flex space-x-1">
                <button className="text-gray-500 dark:text-gray-300">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"></path>
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3">
          {/* Enlaces externos */}
          <ExternalLinks className="hidden md:flex" />

          {/* Light/Dark Toggle */}
          <ThemeToggle />

          {/* App Menu */}
          <button className="hidden md:block rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <BsGrid3X3Gap className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          {/* User Avatar */}
          <img
            src="/avatar.jpg"
            alt="Avatar de joel"
            className="h-8 w-8 rounded-full"
          />

          {/* Settings */}
          <button className="hidden md:block rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiSettings className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Mobile Menu Button */}
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
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavItems />
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <ExternalLinks className="flex-col space-y-2" />
            </div>
          </div>
        </div>
      )}

      {/* Navegación inferior solo para páginas que no son home */}
      {!isHomePage && (
        <nav className="hidden md:block border-b border-gray-200 dark:border-gray-700">
          <div className="mx-auto flex max-w-4xl items-center justify-start space-x-4 px-4">
            {getNavItems().map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`border-b-2 px-3 py-3 text-sm font-medium transition-all duration-300 ease-in-out ${
                  isActive(item.path)
                    ? "border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400"
                    : "border-transparent text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                }`}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="inline-block transition-all duration-300 ease-in-out">
                  {getDisplayText(item.name)}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
