import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-8 sm:py-12 md:py-28">
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-normal" aria-label="joel">
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
          </h1>
        </div>

        <div className="relative mx-auto w-full max-w-2xl px-4 sm:px-0">
          <div className="flex items-center rounded-full border border-gray-200 bg-white px-3 sm:px-5 py-2 sm:py-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <FiSearch className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            <input
              type="text"
              className="ml-2 sm:ml-3 flex-1 bg-transparent text-sm sm:text-base text-gray-700 focus:outline-none dark:text-gray-300"
              placeholder="Buscar en mi portfolio"
            />
          </div>

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-2 sm:space-x-3">
            <button
              onClick={() => navigate("/sobremiCvJoelPage")}
              className="rounded-md bg-gray-100 px-3 sm:px-5 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              Buscar con Google
            </button>
            <button className="rounded-md bg-gray-100 px-3 sm:px-5 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              Voy a tener suerte
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
