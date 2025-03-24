import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-12 md:py-28">
        <div className="mb-8 text-center">
          <h1 className="text-8xl font-normal" aria-label="joel">
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
          </h1>
        </div>
        <div className="w-full max-w-xl px-5">
          <div className="relative flex items-center rounded-full border border-gray-300 bg-white px-4 py-3 shadow-sm hover:shadow-md focus-within:shadow-md dark:border-gray-600 dark:bg-gray-800">
            <FiSearch className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              className="flex-grow bg-transparent text-base text-gray-800 outline-none placeholder:text-gray-500 dark:text-gray-200 dark:placeholder:text-gray-400"
              aria-label="Buscar"
              placeholder="Buscar información sobre joel"
            />
            <div className="flex space-x-1">
              <button
                aria-label="Búsqueda por voz"
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg className="h-6 w-6 text-blue-500 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"></path>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"></path>
                </svg>
              </button>
              <button
                aria-label="Búsqueda por imagen"
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg className="h-5 w-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6 flex justify-center space-x-3">
            <button 
              onClick={() => navigate("/sobremiCvJoelPage")}
              className="rounded-md bg-gray-100 px-5 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              Buscar con Google
            </button>
            <button className="rounded-md bg-gray-100 px-5 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              Voy a tener suerte
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
