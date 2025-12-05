import { useState } from "react";

function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginBottom: "10px",
        }}
      >
        <button
          onClick={decrement}
          style={{
            backgroundColor: "#111",
            color: "#00ff99",
            border: "2px solid #00ff99",
            borderRadius: "8px",
            padding: "6px 12px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          -
        </button>
        <span style={{ fontSize: "18px", fontWeight: "bold", color: "#fff" }}>
          {count}
        </span>
        <button
          onClick={increment}
          style={{
            backgroundColor: "#111",
            color: "#00ff99",
            border: "2px solid #00ff99",
            borderRadius: "8px",
            padding: "6px 12px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => onAdd(count)}
        style={{
          backgroundColor: "#00ff99",
          border: "none",
          borderRadius: "8px",
          padding: "10px 20px",
          cursor: "pointer",
          fontWeight: "bold",
          color: "#111",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;