function CartItem({ item, removeFromCart }) {
  return (
    <div style={{ borderBottom: "1px solid #333" }}>
      <p><b>{item.title}</b></p>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio: ${item.price * item.quantity}</p>

      <button onClick={() => removeFromCart(item.id)}>
        ❌ Eliminar
      </button>
    </div>
  );
}

export default CartItem;