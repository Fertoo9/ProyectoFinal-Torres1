import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

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
      <h2 style={{ color: "#00ff99" }}> Tu carrito</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #333",
            padding: "10px 0",
          }}
        >
          <div>
            <p style={{ fontWeight: "bold" }}>{item.title}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price * item.quantity}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ❌ Eliminar
          </button>
        </div>
      ))}

      <h3 style={{ marginTop: "20px" }}>Total: ${totalPrice}</h3>

      <button
        onClick={clearCart}
        style={{
          marginTop: "20px",
          background: "#00ff99",
          color: "#000",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Vaciar carrito
      </button>
    </div>
  );
}

export default Cart;