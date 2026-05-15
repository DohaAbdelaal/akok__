import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartIcon() {
  const { cartItems } = useCart();

  return (
    <Link to="/cart" className="relative cursor-pointer">
      🛒
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cartItems.length}
        </span>
      )}
    </Link>
  );
}
