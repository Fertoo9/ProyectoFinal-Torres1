import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (item, quantity) => {
    const existing = cart.find((prod) => prod.id === item.id);
    if (existing) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce(
    (acc, prod) => acc + prod.price * prod.quantity,
    0
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};