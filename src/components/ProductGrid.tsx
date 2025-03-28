import React from 'react';
import ProductCard from './ProductCard';

// Datos de ejemplo
const sampleProducts = [
  {
    id: 1,
    title: "Reloj Casio G-Shock DW-6600-1V Digital Black Limited Edition",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_985947-CBT53879999753_022023-F.webp",
    rating: 4.9,
    reviews: 111,
    price: 647857,
    store: "Ubuy",
    shipping: "Envío por $8.564"
  },
  {
    id: 2,
    title: "Reloj Hombre G-SHOCK G-8900GB-1DR",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_833906-MLC31221203011_062019-F.webp",
    rating: 4.6,
    reviews: 671,
    price: 87990,
    originalPrice: 109990,
    store: "Paris.cl",
    isOffer: true
  },
  {
    id: 3,
    title: "Reloj G-shock G-7900-3dr Resina Hombre Negro Negro",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_744734-MLC54714149408_032023-F.webp",
    rating: 4.9,
    reviews: 3661,
    price: 163900,
    store: "Lider.cl",
    shipping: "Envío gratuito"
  },
  {
    id: 4,
    title: "GWG-2000-1A1 | G-SHOCK MASTER OF G - TIERRA Negro",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_656229-MLU69658945960_052023-F.webp",
    rating: 4.9,
    reviews: 517,
    price: 785866,
    store: "Ubuy",
    shipping: "Envío por $8.564"
  },
  {
    id: 5,
    title: "Reloj G-Shock GA-2100-1A1 Carbon Core Guard Negro",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_771649-MLC43315677436_082020-F.webp",
    rating: 4.8,
    reviews: 892,
    price: 129990,
    store: "Ripley",
    shipping: "Envío gratis"
  },
  {
    id: 6,
    title: "Reloj G-Shock GM-2100 Metal Covered Series Plateado",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_686179-MLC48067455919_102021-F.webp",
    rating: 4.7,
    reviews: 445,
    price: 199990,
    originalPrice: 249990,
    store: "Falabella",
    isOffer: true,
    shipping: "Envío gratis"
  },
  {
    id: 7,
    title: "Reloj G-Shock GA-B2100 Bluetooth Solar Negro",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_601558-MLC51033848799_082022-F.webp",
    rating: 4.9,
    reviews: 234,
    price: 179990,
    store: "Paris",
    shipping: "Retiro en tienda"
  },
  {
    id: 8,
    title: "Reloj G-Shock DW-5600BB Full Black Digital",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_787331-MLC43315675722_082020-F.webp",
    rating: 4.8,
    reviews: 1203,
    price: 89990,
    originalPrice: 119990,
    store: "Ripley",
    isOffer: true,
    shipping: "Envío gratis"
  }
];

const ProductGrid: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Línea de información */}
      <div className="flex items-center justify-end text-sm text-gray-600 dark:text-gray-400">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        <span className="flex items-center gap-1 ml-4">
          Acerca de estos resultados
          <button className="w-4 h-4 rounded-full border border-gray-400 inline-flex items-center justify-center text-xs font-serif">
            i
          </button>
        </span>
      </div>

      {/* Ordenamiento */}
      <div className="flex justify-end items-center">
        <label className="text-sm text-gray-600 dark:text-gray-400 mr-2">
          Ordenar por:
        </label>
        <select className="border rounded-md py-1 px-2 text-sm bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200">
          <option value="relevance">Relevancia</option>
          <option value="price_asc">Menor precio</option>
          <option value="price_desc">Mayor precio</option>
          <option value="rating">Mejor calificados</option>
        </select>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            rating={product.rating}
            reviews={product.reviews}
            price={product.price}
            originalPrice={product.originalPrice}
            store={product.store}
            shipping={product.shipping}
            isOffer={product.isOffer}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid; 