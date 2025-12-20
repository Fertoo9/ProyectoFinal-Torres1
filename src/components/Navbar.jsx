import { Link } from "react-router-dom";
import CartWidget from "./Cartwidget";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        backgroundColor: "#111",
        color: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#00ff99",
          fontSize: "1.6rem",
          fontWeight: "bold",
          letterSpacing: "1px",
          marginRight: "60px",
        }}
      >
        ZonaGaming
      </Link>

      {/* Categorías */}
      <div
        style={{
          display: "flex",
          gap: "35px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <NavLink to="/category/laptops">Laptops</NavLink>
        <NavLink to="/category/smartphones">Smartphones</NavLink>
        <NavLink to="/category/accesorios">Accesorios</NavLink>
        <NavLink to="/category/rgb">Iluminación RGB</NavLink>
        <NavLink to="/category/setup">Setup Gamer</NavLink>
        <NavLink to="/category/decoracion">Decoración</NavLink>
      </div>

      {/* Carrito */}
      <div style={{ marginLeft: "40px" }}>
        <CartWidget />
      </div>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        color: "#fff",
        fontWeight: "500",
        transition: "color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.color = "#00ff99")}
      onMouseLeave={(e) => (e.target.style.color = "#fff")}
    >
      {children}
    </Link>
  );
}

export default Navbar;