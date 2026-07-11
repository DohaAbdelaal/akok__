import { Link } from "react-router-dom";
import useLang from "../context/useLang";

export default function ProductCard({ product }) {
  const { t, lang } = useLang();

  if (!product) return null;

  const isAvailable = product.isAvailable !== false;

  return (
    <Link
      to={isAvailable ? `/Products/${product.id}` : "#"}
      className={`group flex flex-col h-full min-h-[450px] bg-white border border-green-50 p-4 transition-all duration-500 
                rounded-se-xl rounded-es-xl 
                ${isAvailable 
                  ? 'hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)] hover:-translate-y-2' 
                  : 'opacity-80 cursor-not-allowed'}`}
    >
      {/* Image Container - Fixed Height */}
      <div className="relative overflow-hidden rounded-ss-[50px] rounded-ee-[50px] rounded-se-lg rounded-es-lg mb-4 h-64 flex-shrink-0">
        <img
          src={product.image}
          alt={product.name[lang]}
          className={`h-full w-full object-cover transition-transform duration-700 
                      ${isAvailable ? 'group-hover:scale-110' : 'grayscale filter'}`}
        />
        
        {!isAvailable && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
            <span className="bg-white/90 text-red-700 px-4 py-1 rounded-full font-bold text-sm shadow-lg">
              {t.productsSection.soldOut || "نفذت الكمية"}
            </span>
          </div>
        )}
      </div>

      {/* Product Info - flex-grow ensures this part takes remaining space */}
      <div className="text-start px-2 flex flex-col flex-grow">
        <h3 className={`font-bold text-lg mb-1 line-clamp-2 h-14 transition-colors ${isAvailable ? 'text-gray-800 group-hover:text-green-800' : 'text-gray-400'}`}>
          {product.name[lang]}
        </h3>
        <p className={`text-md font-medium mb-4 ${isAvailable ? 'text-green-700' : 'text-gray-400'}`}>
          {product.price} <span className="text-xs font-normal text-gray-500">{t.productsSection.currency}</span>
        </p>
      </div>

      {/* Button - mt-auto pushes it to the bottom */}
      <div className={`mt-auto block text-center w-full py-2.5 text-sm font-semibold transition-all duration-300
                   rounded-ss-2xl rounded-ee-2xl rounded-se-sm rounded-es-sm 
                   ${isAvailable 
                     ? 'bg-green-900 text-white group-hover:bg-green-700' 
                     : 'bg-gray-200 text-gray-500'}`}
      >
        {isAvailable ? t.productsSection.viewDetails : (t.productsSection.soldOut || "غير متاح")}
      </div>
    </Link>
  );
}