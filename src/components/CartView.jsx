import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function CartView({ cart, removeFromCart, clearCart, total }) {
  if (cart.length === 0) {
    return (
      <div style={{ color: "#fff", textAlign: "center", marginTop: "100px" }}>
        <h2>🛒 Tu carrito está vacío</h2>
        <Link to="/" style={{ color: "#00ff99" }}>
          ← Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div style={{ color: "#fff", padding: "40px" }}>
      <h2 style={{ color: "#00ff99" }}>Tu carrito</h2>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
        />
      ))}

      <h3 style={{ marginTop: "20px" }}>Total: ${total}</h3>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={clearCart}
          style={{
            background: "#555",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Vaciar carrito
        </button>

        <Link
          to="/checkout"
          style={{
            background: "#00ff99",
            color: "#000",
            padding: "10px 15px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Finalizar compra
        </Link>
      </div>
    </div>
  );
}

export default CartView;