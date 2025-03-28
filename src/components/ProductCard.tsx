import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg 
    className={className}
    viewBox="0 0 20 20" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

interface ProductCardProps {
  title: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  store: string;
  shipping?: string;
  isOffer?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  rating,
  reviews,
  price,
  originalPrice,
  store,
  shipping,
  isOffer
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="relative">
        {isOffer && (
          <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs font-semibold rounded">
            OFERTA
          </div>
        )}
        <img src={image} alt={title} className="w-full h-64 object-contain bg-white" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 min-h-[3.5rem]">
          {title}
        </h3>
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {rating} ({reviews})
          </span>
        </div>
        <div className="mb-3">
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p className="font-medium">{store}</p>
          {shipping && (
            <p className="text-gray-500 mt-1">{shipping}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 