import React from 'react';
import ProductCard from '../components/ProductCard';

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
  }
];

const ProductGrid: React.FC = () => {
  return (
    <div className="space-y-6">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
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