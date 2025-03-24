import { FiSearch } from "react-icons/fi";
import { MdKeyboardVoice } from "react-icons/md";
import { FaCamera } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="relative flex w-full items-center rounded-full border border-gray-200 bg-white px-4 py-3 shadow-sm transition-colors hover:shadow-md focus-within:shadow-md dark:border-gray-700 dark:bg-gray-800">
        <FiSearch className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          className="flex-grow bg-transparent text-base text-gray-800 outline-none placeholder:text-gray-500 dark:text-gray-200 dark:placeholder:text-gray-400"
          aria-label="Buscar"
          placeholder="Buscar información sobre joel"
        />
        <div className="flex space-x-2">
          <button
            aria-label="Búsqueda por voz"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <MdKeyboardVoice className="h-6 w-6 text-blue-500 dark:text-blue-400" />
          </button>
          <button
            aria-label="Búsqueda por imagen"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FaCamera className="h-5 w-5 text-blue-500 dark:text-blue-400" />
          </button>
        </div>
      </div>
      <div className="mt-6 flex justify-center space-x-3">
        <button className="rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
          Buscar con Google
        </button>
        <button className="rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
          Voy a tener suerte
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
