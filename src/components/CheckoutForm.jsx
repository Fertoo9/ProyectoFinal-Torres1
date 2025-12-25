import { Link } from "react-router-dom";

function CheckoutView({
  cart,
  total,
  buyer,
  handleChange,
  handleSubmit,
  orderId,
  loading,
}) {
  if (orderId) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px", color: "#fff" }}>
        <h2>🎉 ¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es:</p>
        <strong>{orderId}</strong>
        <br />
        <Link to="/" style={{ color: "#00ff99", marginTop: "20px", display: "inline-block" }}>
          Volver al inicio
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px", color: "#fff" }}>
        <h2>No hay productos en el carrito</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{ color: "#fff", padding: "40px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Finalizar compra</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <h3>Total: ${total}</h3>

        <button type="submit" disabled={loading}>
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
}

export default CheckoutView;