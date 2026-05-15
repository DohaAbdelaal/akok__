import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import OrderModal from "../components/OrderModal";
import { useNavigate } from "react-router-dom"; 
import useLang from "../context/useLang";
import { sendWhatsAppOrder } from "../utils/whatsappService";

export default function Cart() {
  const { t , lang } = useLang();
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

const handleWhatsAppOrder = (userData) => { 
  // 2. Security check: don't proceed if cart is empty
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // 3. Trigger the centralized WhatsApp service
  // We pass 'cartItems' as the first argument and 'isCart' as true (last argument)
  sendWhatsAppOrder(cartItems, userData, t, true);
  
  // 4. Close the modal after the WhatsApp tab opens
  setIsModalOpen(false);

   clearCart(); // If you want to wipe the cart after ordering
};

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-lg mx-auto lg:mt-20 bg-[#F8FAFC] min-h-screen sm:min-h-fit sm:rounded-[2.5rem] shadow-xl border border-white">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8 px-2">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
             {t.cart.myCart}
          </h2>
        </div>
        <span className="bg-green-700 text-white text-xs font-medium px-3 py-1 rounded-full">
          {cartItems.reduce((acc, item) => acc + item.quantity, 0)}  
        </span>
      </div>

      {/* Empty State */}
      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-slate-200">
          <p className="text-slate-400 font-medium text-lg">{t.cart.cartIsEmpty}</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-white rounded-4xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 group hover:border-green-100 transition-all duration-300"
              >
                {/* Quantity Controls */}
                <div className="flex flex-col items-center bg-slate-50 rounded-full p-1 border border-slate-100 shadow-inner">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-green-600 hover:bg-green-600 hover:text-white transition-all active:scale-90"
                  > + </button>
                  <span className="my-1 font-semibold text-slate-700 w-8 text-center text-sm">{item.quantity}</span>
                  <button
                    onClick={() => item.quantity > 1 ? updateQuantity(item.id, item.quantity - 1) : removeFromCart(item.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-400 hover:text-red-500 transition-all active:scale-90"
                  > − </button>
                </div>

                {/* Product Section */}
                <div 
                  className="flex flex-1 items-center gap-4 cursor-pointer" 
                  onClick={() => navigate(`/Products/${item.productId || item.id.split('-')[0]}`)} 
                >
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 shadow-sm transition-transform group-hover:scale-105">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-slate-800 text-base mb-0 group-hover:text-green-700 transition-colors">
                      {item.name}
                    </h3>
                    
                    {/* --- MODIFICATION 2: Display Variant Label in UI --- */}
                    {item.variantLabel && (
                      <p className="text-green-700 text-[10px] font-bold uppercase tracking-wider mb-1">
                        {item.variantLabel}
                      </p>
                    )}

                    <p className="text-slate-400 text-xs">{item.price} EGP</p>
                  </div>
                </div>

                {/* Price and Removal */}
                <div className="text-right flex flex-col items-end gap-2">
                  <p className="font-semibold text-lg text-slate-900">
                    {(item.price * item.quantity).toLocaleString()}
                    <span className="text-xs text-slate-400 ml-1">EGP</span>
                  </p>
                  <button onClick={() => removeFromCart(item.id)} className="p-1.5 text-slate-300 hover:text-red-500 transition-colors"> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /> 
                    </svg> 
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Summary */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="flex justify-between items-center mb-6 px-2">
              <span className="text-slate-400 font-medium text-xs tracking-widest uppercase">{t.cart.totalPrice}</span>
              <span className="text-2xl font-bold text-green-700">{totalPrice.toLocaleString()} EGP</span>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-green-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:bg-green-700 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              {t.cart.orderViaWhatsApp}
            </button>
            <button onClick={clearCart} className="w-full mt-4 py-2 text-slate-400 font-medium hover:text-red-400 transition-colors text-sm">
              {t.cart.clearCart}
            </button>
          </div>
          <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleWhatsAppOrder} />
        </>
      )}
    </div>
  );
}