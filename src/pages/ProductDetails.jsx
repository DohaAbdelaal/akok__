import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useLang from "../context/useLang";
import { useCart } from "../context/CartContext";
import products from "../data/AkokData";
import OrderModal from "../components/OrderModal";
import { sendWhatsAppOrder } from "../utils/whatsappService";

export default function ProductDetails() {
  const { id } = useParams();
  const { t, lang } = useLang();
  const { addToCart } = useCart();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  // 1. Find product and handle initialization
  const product = products.find((p) => p.id === parseInt(id));
  
  const [selectedVariant, setSelectedVariant] = useState(
    product?.hasVariants ? product.variants[0] : null
  );

  if (!product) return <div className="py-20 text-center">{t.productsSection.unavailable}</div>;

  // 2. Dynamic price: Takes variant price or product base price
  const currentPrice = selectedVariant?.price || product.price;

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => { if (quantity > 1) setQuantity((prev) => prev - 1); };

  // 3. WhatsApp Logic: Uses current selected variant and its specific price
  const handleFinalOrder = (userData) => {
    const variantLabel = selectedVariant 
      ? `(${selectedVariant.capacity?.ar || selectedVariant.label?.ar || ""})` 
      : "";
// Create a single product object and call the service
  // 'false' means this is a Direct Order (not a cart)
sendWhatsAppOrder(
    {
      name: `${product.name["ar"]} ${variantLabel}`,
      price: currentPrice, 
      quantity: quantity,
    },
    userData, 
    t,
    false 
  );
    setIsModalOpen(false);
  };

  // 4. Cart Logic: Using a Composite ID to separate sizes (e.g., 1-v1 vs 1-v2)
  const handleAddToCart = () => {
    // Generate a unique ID if variants exist, otherwise use base ID
    const uniqueId = product.hasVariants 
      ? `${product.id}-${selectedVariant?.id}` 
      : product.id;

    // Capture the current variant label for the cart display
    const currentVariantLabel = selectedVariant?.capacity?.[lang] || selectedVariant?.label?.[lang] || "";

    addToCart(
      {
        id: uniqueId, // The secret to keeping sizes separate!
        productId: product.id, // Reference to original product
        name: product.name[lang],
        arabicName: product.name["ar"],
        price: currentPrice, // The specific price for THIS selection
        image: product.image,
        selectedVariant: selectedVariant,
        variantLabel: currentVariantLabel // Useful for showing size in cart summary
      },
      quantity
    );

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="max-w-6xl mx-auto px-6 py-12 text-start">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* Product Image */}
        <div className="rounded-ss-[100px] rounded-ee-[100px] overflow-hidden shadow-lg border border-gray-100">
          <img src={product.image} alt={product.name[lang]} className="w-full h-125 object-cover" />
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name[lang]}</h1>
            <p className="text-3xl font-bold text-green-900">
              {currentPrice} {t.productsSection.currency}
            </p>
          </div>

          {/* Variant Selection UI */}
          {product.hasVariants && (
            <div className="space-y-3">
              <h3 className="font-bold text-gray-700">
                {product.variants[0].capacity ? (lang === 'ar' ? "اختر الحجم:" : "Select Size:") : (lang === 'ar' ? "اختر النوع:" : "Select Type:")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 rounded-xl border-2 transition-all font-medium
                      ${selectedVariant?.id === v.id 
                        ? "border-green-900 bg-green-900 text-white" 
                        : "border-gray-200 text-gray-600 hover:border-green-900"}`}
                  >
                    {v.capacity?.[lang] || v.label?.[lang]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Details Sections */}
          <div className="space-y-4 bg-gray-50 p-6 rounded-3xl">
            <DetailSection title={t.productDetails.details} content={product.details[lang]} />
            <DetailSection title={t.productDetails.howToUse} content={product.howToUse[lang]} />
            <DetailSection title={t.productDetails.ingredients} content={product.ingredients[lang]} />
            
            {/* Logic: Show variant-specific capacity OR product base capacity */}
            {(selectedVariant?.capacity || product.capacity) && (
              <DetailSection 
                title={t.productDetails.capacity} 
                content={selectedVariant?.capacity?.[lang] || product.capacity?.[lang]} 
              />
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4">
              <button onClick={decrease} className="w-10 h-10 rounded-full border-2 border-green-900 text-green-900 font-bold">-</button>
              <span className="text-xl font-bold">{quantity}</span>
              <button onClick={increase} className="w-10 h-10 rounded-full border-2 border-green-900 text-green-900 font-bold">+</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={handleAddToCart} className="border-2 border-green-900 text-green-900 py-4 rounded-2xl font-bold hover:bg-green-50 transition-all">
                {lang === 'ar' ? "أضف للسلة" : "Add To Cart"}
              </button>
              <button onClick={() => setIsModalOpen(true)} className="bg-green-900 text-white py-4 rounded-2xl font-bold hover:bg-green-800 transition-all shadow-lg">
                {t.productDetails.orderWhatsApp}
              </button>
            </div>
          </div>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleFinalOrder} />

      {/* Success Toast Notification */}
      <div className={`fixed top-6 right-6 z-50 px-6 py-3 rounded-2xl shadow-xl bg-green-900 text-white transition-all duration-300 ${showToast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        <span className="text-green-300 font-bold mr-2">✔</span> {lang === 'ar' ? "تمت الإضافة للسلة" : "Added to cart"}
      </div>
    </div>
  );
}

function DetailSection({ title, content }) {
  if (!content) return null;
  return (
    <div className="border-b border-gray-200 last:border-0 pb-3">
      <h3 className="font-bold text-green-900 mb-1">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{content}</p>
    </div>
  );
}