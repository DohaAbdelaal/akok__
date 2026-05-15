import { createContext, useContext, useState, useEffect } from "react";

// Initialize the context for the shopping cart
const CartContext = createContext();

// Custom hook to allow components to easily access the cart data and functions
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Initialize state with a callback function to sync with localStorage on first load
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Automatically update localStorage whenever the cartItems state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  /**
   * Adds a product to the cart. 
   * If the product already exists, it updates the quantity.
   */
  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      // Check if the product is already in the cart
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        // If it exists, map through the cart and update the quantity of the matching item
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity } // Create a new object with updated quantity
            : item // Return the other items as they are
        );
      }

      // If it's a new product, append it to the cart array with its quantity
      return [...prev, { ...product, quantity }];
    });
  };

  /**
   * Removes a product from the cart by its ID using the filter method.
   */
  const removeFromCart = (productId) => {
    // Filter creates a new array excluding the item with the specified ID
    setCartItems(cartItems.filter(item => item.id !== productId));
  };
  // CartContext update
const updateQuantity = (id, newQuantity) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    )
  );
};

  /**
   * Clears all items from the cart.
   */
  const clearCart = () => setCartItems([]);

  return (
    // Provide the cart state and actions to the rest of the application
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};