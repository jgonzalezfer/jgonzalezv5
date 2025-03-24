import { Link, useLocation } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { BsGrid3X3Gap } from "react-icons/bs";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const location = useLocation();
  const { darkMode } = useTheme();
  const isHomePage = location.pathname === "/";

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getNavItems = () => {
    const baseItems = [
      { name: "Sobre Joel", path: "/" },
      { name: "Proyectos", path: "/proyectos" },
      { name: "Linkedin", path: "https://linkedin.com", external: true },
      { name: "Github", path: "https://github.com", external: true },
    ];

    const fullItems = [
      { name: "Todo", path: "/" },
      { name: "Experiencia", path: "/experiencia" },
      { name: "Educación", path: "/estudios" },
      { name: "Conocimientos", path: "/conocimientos" },
      { name: "Proyectos", path: "/proyectos" },
      { name: "Linkedin", path: "https://linkedin.com", external: true },
      { name: "Github", path: "https://github.com", external: true },
    ];

    return isHomePage ? baseItems : fullItems;
  };

  return (
    <header className="flex flex-col transition-colors dark:bg-gray-900">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center">
          {/* Solo mostrar el nombre si NO estamos en el home */}
          {!isHomePage && (
            <Link to="/" className="text-xl font-medium">
              <span className="text-blue-500 dark:text-blue-400">J</span>
              <span className="text-red-500 dark:text-red-400">o</span>
              <span className="text-yellow-500 dark:text-yellow-300">o</span>
              <span className="text-blue-500 dark:text-blue-400">e</span>
              <span className="text-green-500 dark:text-green-400">l</span>
              <span className="text-red-500 dark:text-red-400">G</span>
              <span className="text-blue-500 dark:text-blue-400">o</span>
              <span className="text-red-500 dark:text-red-400">n</span>
              <span className="text-yellow-500 dark:text-yellow-300">z</span>
              <span className="text-blue-500 dark:text-blue-400">á</span>
              <span className="text-red-500 dark:text-red-400">l</span>
              <span className="text-yellow-500 dark:text-yellow-300">e</span>
              <span className="text-blue-500 dark:text-blue-400">z</span>
            </Link>
          )}

          {/* Navegación en línea solo para el home */}
          {isHomePage && (
            <nav className="ml-12 flex items-center space-x-8">
              {getNavItems().map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-lg font-medium ${
                      isActive(item.path)
                        ? "text-blue-500 dark:text-blue-400"
                        : "text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
          )}

          {!isHomePage && (
            <div className="ml-6 relative flex w-80 items-center rounded-full border border-gray-300 bg-gray-100 px-4 py-2 dark:border-gray-600 dark:bg-gray-800">
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

        <div className="flex items-center space-x-2">
          {/* Light/Dark Toggle */}
          <ThemeToggle />

          {/* App Menu */}
          <button className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <BsGrid3X3Gap className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          {/* User Avatar */}
          <img
            src="/avatar.jpg"
            alt="Avatar de joel"
            className="h-8 w-8 rounded-full"
          />

          {/* Settings */}
          <button className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiSettings className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Navegación inferior solo para páginas que no son home */}
      {!isHomePage && (
        <nav className="border-b border-gray-200 dark:border-gray-700">
          <div className="mx-auto flex max-w-4xl items-center justify-start space-x-4 px-4">
            {getNavItems().map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-2 border-transparent px-3 py-3 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`border-b-2 px-3 py-3 text-sm font-medium ${
                    isActive(item.path)
                      ? "border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400"
                      : "border-transparent text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
