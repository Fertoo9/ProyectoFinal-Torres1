import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error404, setError404] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError404(false);

    if (categoryId) {
      fetch(`https://dummyjson.com/products/category/${categoryId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Categoría no encontrada");
          return res.json();
        })
        .then((data) => {
          setProducts(data.products || []);
          setLoading(false);
        })
        .catch(() => {
          setError404(true);
          setLoading(false);
        });
    } else {
      const categories = [
        "laptops",
        "smartphones",
        "mens-watches",
        "lighting",
        "furniture",
        "home-decoration",
      ];

      Promise.all(
        categories.map((cat) =>
          fetch(`https://dummyjson.com/products/category/${cat}`).then((res) =>
            res.json()
          )
        )
      )
        .then((data) => {
          const allProducts = data.flatMap((d) => d.products);
          setProducts(allProducts);
          setLoading(false);
        })
        .catch(() => {
          setError404(true);
          setLoading(false);
        });
    }
  }, [categoryId]);

  if (loading)
    return <p style={{ marginTop: "100px" }}> Cargando productos...</p>;

  if (error404)
    return (
      <div style={{ textAlign: "center", marginTop: "100px", color: "#ff5555" }}>
        <h2>⚠️ Categoría no encontrada</h2>
        <p>La categoría "{categoryId}" no existe o no tiene productos.</p>
        <Link to="/" style={{ color: "#00ff99" }}>
          Volver al catálogo principal
        </Link>
      </div>
    );

  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h2>
          {categoryId
            ? `Catálogo ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`
            : "Catálogo General"}
      </h2>
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
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h4 style={{ marginTop: "10px" }}>{product.title}</h4>
            <p style={{ color: "#aaa" }}>{product.brand}</p>
            <p style={{ fontWeight: "bold", color: "#00ff99" }}>
              ${product.price}
            </p>

            {/* 👇 Botón para ver detalle */}
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
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
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