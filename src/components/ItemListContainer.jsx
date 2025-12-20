import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error404, setError404] = useState(false);

  useEffect(() => {
    // Limpia el estado al cambiar de categoría
    setProducts([]);
    setLoading(true);
    setError404(false);

    const itemsRef = collection(db, "items");
    let q;

    if (categoryId) {
      q = query(itemsRef, where("category", "==", categoryId));
    } else {
      q = query(itemsRef);
    }

    getDocs(q)
      .then((snapshot) => {
        if (snapshot.empty) {
          setProducts([]);
          setLoading(false);
          return;
        }

        const fetchedProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(fetchedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
        setError404(true);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <p style={{ marginTop: "100px", textAlign: "center" }}>
        Cargando productos...
      </p>
    );
  }

  if (error404) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px", color: "#ff5555" }}>
        <h2>⚠️ Error al cargar productos</h2>
        <Link to="/" style={{ color: "#00ff99" }}>
          Volver al catálogo principal
        </Link>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      {greeting && <h1 style={{ marginBottom: "15px" }}>{greeting}</h1>}

      <h2>
        {categoryId
          ? `Catálogo ${
              categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
            }`
          : "Catálogo General"}
      </h2>

      {products.length === 0 && (
        <p style={{ marginTop: "40px", color: "#aaa" }}>
          No hay productos en esta categoría por el momento.
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "25px",
          marginTop: "25px",
          padding: "0 20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#1a1a1a",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(255,255,255,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <h4 style={{ marginTop: "10px" }}>{product.name}</h4>

            <p style={{ fontWeight: "bold", color: "#00ff99" }}>
              ${product.price}
            </p>

            <Link
              to={`/item/${product.id}`}
              style={{
                display: "inline-block",
                marginTop: "10px",
                backgroundColor: "#00ff99",
                color: "#111",
                fontWeight: "bold",
                padding: "6px 12px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Ver Detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;