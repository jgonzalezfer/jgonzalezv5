import React from 'react';

interface FilterPanelProps {
  onFilterChange?: (filters: any) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
  return (
    <div className="space-y-6">
      {/* Ubicación */}
      <div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <span className="h-2 w-2 rounded-full bg-gray-400"></span>
          <span>Santiago, Cerro Navia</span>
        </div>
      </div>

      {/* Solo mostrar */}
      <div>
        <h3 className="text-lg font-medium mb-3">Solo mostrar</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Ofertas
            </span>
          </label>
        </div>
      </div>

      {/* Precio */}
      <div>
        <h3 className="text-lg font-medium mb-3">Precio</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="price" className="text-blue-500" />
            <span>Hasta $50.000</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" className="text-blue-500" />
            <span>$50.000 – $100.000</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" className="text-blue-500" />
            <span>$100.000 – $200.000</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" className="text-blue-500" />
            <span>Más de $200.000</span>
          </label>
          <div className="flex gap-2 mt-3">
            <input type="text" placeholder="Min." className="w-24 px-3 py-1 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
            <span>-</span>
            <input type="text" placeholder="Max." className="w-24 px-3 py-1 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
          </div>
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="text-lg font-medium mb-3">Color</h3>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
          <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
          <button className="w-8 h-8 rounded-full bg-orange-500 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
          <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
          <button className="w-8 h-8 rounded-full bg-pink-500 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel; 