import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartView from "./CartView";

function Cart() {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);

  return (
    <CartView
      cart={cart}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
      total={total}
    />
  );
}

export default Cart;