import { useRef, useState, useEffect } from "react";
import noImage from "../assets/img/imagen_no_disponible.jpg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface NavigationItem {
  img: string;
  text: string;
}

interface NavigationBarProps {
  items: NavigationItem[];
}

const NavigationBar = ({ items }: NavigationBarProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const container = scrollContainerRef.current;
      container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <div className="relative mb-8">
      {/* Botón izquierdo */}
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all lg:hidden"
          aria-label="Desplazar a la izquierda"
        >
          <FiChevronLeft className="w-8 h-8 text-white" />
        </button>
      )}

      {/* Botón derecho */}
      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all lg:hidden"
          aria-label="Desplazar a la derecha"
        >
          <FiChevronRight className="w-8 h-8 text-white" />
        </button>
      )}

      {/* Contenedor de navegación con scroll */}
      <div 
        ref={scrollContainerRef}
        className="overflow-hidden lg:overflow-visible"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex space-x-4 min-w-max lg:min-w-0 p-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          {items.map((item, index) => (
            <button
              key={index}
              className="flex items-center space-x-3 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="w-10 h-10 flex-shrink-0">
                <img 
                  src={item.img} 
                  alt={item.text}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">{item.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar; 