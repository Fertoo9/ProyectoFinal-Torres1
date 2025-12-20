import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetailContainer() {
  const { itemId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const docRef = doc(db, "items", itemId);

    getDoc(docRef)
      .then((docSnap) => {
        if (!docSnap.exists()) {
          setError(true);
          setLoading(false);
          return;
        }

        setProduct({
          id: docSnap.id,
          ...docSnap.data(),
        });

        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [itemId]);

  if (loading)
    return <p style={{ marginTop: "100px" }}>Cargando detalle...</p>;

  if (error)
    return (
      <div style={{ textAlign: "center", marginTop: "100px", color: "#ff5555" }}>
        <h2>❌ Producto no encontrado</h2>
        <Link to="/" style={{ color: "#00ff99" }}>
          ← Volver al catálogo
        </Link>
      </div>
    );

  const onAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        marginTop: "100px",
        color: "#fff",
        gap: "50px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "300px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,255,153,0.4)",
        }}
      />

      <div style={{ maxWidth: "400px", textAlign: "left" }}>
        <h2 style={{ color: "#00ff99" }}>{product.name}</h2>

        <p style={{ color: "#aaa" }}>{product.description}</p>

        <p style={{ fontSize: "1.5rem", color: "#00ff99" }}>
          ${product.price}
        </p>

        {!added ? (
          <ItemCount initial={1} stock={10} onAdd={onAdd} />
        ) : (
          <div style={{ marginTop: "20px" }}>
            <Link to="/cart" style={{ color: "#00ff99", fontWeight: "bold" }}>
              🛒 Ir al carrito
            </Link>
          </div>
        )}

        <div style={{ marginTop: "20px" }}>
          <Link to="/" style={{ color: "#00ff99" }}>
            ← Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;

