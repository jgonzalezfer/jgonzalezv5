import React from 'react';

const FilterPanel: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Ubicación */}
      <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-2">
        <input type="radio" checked className="w-3 h-3" />
        <span className="text-gray-700 dark:text-gray-300">Santiago, Cerro Navia</span>
        <button className="ml-1 w-4 h-4 rounded-full border border-gray-400 inline-flex items-center justify-center text-xs font-serif">
          i
        </button>
      </div>

      {/* Solo mostrar */}
      <div>
        <h3 className="text-lg text-gray-900 dark:text-gray-100 mb-2">
          Solo mostrar
        </h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <input 
              type="checkbox" 
              className="w-4 h-4 rounded border-gray-300"
            />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              <span>Ofertas</span>
            </div>
          </label>
        </div>
      </div>

      {/* Precio */}
      <div>
        <h3 className="text-lg text-gray-900 dark:text-gray-100 mb-2">
          Precio
        </h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <input 
              type="radio" 
              name="price" 
              className="w-4 h-4"
            />
            <span>Hasta $50.000</span>
          </label>
          <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <input 
              type="radio" 
              name="price" 
              className="w-4 h-4"
            />
            <span>$50.000 - $100.000</span>
          </label>
          <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <input 
              type="radio" 
              name="price" 
              className="w-4 h-4"
            />
            <span>$100.000 - $200.000</span>
          </label>
          <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <input 
              type="radio" 
              name="price" 
              className="w-4 h-4"
            />
            <span>Más de $200.000</span>
          </label>

          <div className="flex items-center gap-2 mt-3">
            <input
              type="text"
              placeholder="$ Min."
              className="w-24 px-3 py-1 text-sm border rounded-md bg-transparent"
            />
            <span className="text-gray-500">-</span>
            <input
              type="text"
              placeholder="$ Max."
              className="w-24 px-3 py-1 text-sm border rounded-md bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="text-lg text-gray-900 dark:text-gray-100 mb-2">
          Color
        </h3>
        <div className="flex flex-wrap gap-2">
          <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-orange-500 border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-pink-500 border-2 border-gray-300"></button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel; 