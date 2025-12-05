import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { cart } = useContext(CartContext);

  // Calcular cantidad total de items
  const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  return (
    <Link
      to="/cart"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        color: "white",
      }}
    >
      <FaShoppingCart size={24} />
      {totalItems > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-10px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            fontSize: "12px",
            padding: "2px 6px",
            lineHeight: "1",
          }}
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;