import { Link } from "react-router-dom";
import useLang from "../context/useLang";

export default function ProductCard({ product }) {
  const { t, lang } = useLang();

  if (!product) return null;

  // فحص هل المنتج متاح أم لا
  const isAvailable = product.isAvailable !== false;

  return (
    <Link
      // لو مش متاح بنخلي اللينك ميعملش حاجة (Pointer Events None)
      to={isAvailable ? `/Products/${product.id}` : "#"}
      className={`group block bg-white border border-green-50 p-4 transition-all duration-500 
                rounded-se-xl rounded-es-xl 
                ${isAvailable 
                  ? 'hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)] hover:-translate-y-2' 
                  : 'opacity-80 cursor-not-allowed'}`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-ss-[50px] rounded-ee-[50px] rounded-se-lg rounded-es-lg mb-4">
        <img
          src={product.image}
          alt={product.name[lang]}
          // لو مش متاح بنحول الصورة لـ grayscale (أبيض وأسود)
          className={`h-64 w-full object-cover transition-transform duration-700 
                    ${isAvailable ? 'group-hover:scale-110' : 'grayscale filter'}`}
        />
        
        {/* لو المنتج مش متاح بنظهر طبقة غامقة وكلمة Sold Out */}
        {!isAvailable && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
            <span className="bg-white/90 text-red-700 px-4 py-1 rounded-full font-bold text-sm shadow-lg">
              {t.productsSection.soldOut || "نفذت الكمية"}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/5 transition-colors duration-300" />
      </div>

      <div className="text-start px-2">
        <h3 className={`font-bold text-lg mb-1 transition-colors ${isAvailable ? 'text-gray-800 group-hover:text-green-800' : 'text-gray-400'}`}>
          {product.name[lang]}
        </h3>
        <p className={`text-md font-medium mb-4 ${isAvailable ? 'text-green-700' : 'text-gray-400'}`}>
          {product.price} <span className="text-xs font-normal text-gray-500">{t.productsSection.currency}</span>
        </p>
      </div>

      {/* Button */}
      <div
        className={`block text-center w-full py-2.5 text-sm font-semibold transition-all duration-300
                   rounded-ss-2xl rounded-ee-2xl rounded-se-sm rounded-es-sm 
                   ${isAvailable 
                     ? 'bg-green-900 text-white group-hover:bg-green-700 group-hover:shadow-md' 
                     : 'bg-gray-200 text-gray-500'}`}
      >
        {isAvailable ? t.productsSection.viewDetails : (t.productsSection.soldOut || "غير متاح")}
      </div>
    </Link>
  );
}