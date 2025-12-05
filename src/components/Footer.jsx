function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        marginTop: "60px",
        backgroundColor: "#111",
        color: "#ccc",
        textAlign: "center",
        padding: "30px 10px",
        borderTop: "2px solid #00ff99",
      }}
    >
      <p style={{ marginBottom: "10px" }}>
        © {new Date().getFullYear()} <strong>ZonaGaming</strong> — Todos los derechos reservados.
      </p>
      <button
        onClick={scrollToTop}
        style={{
          backgroundColor: "#00ff99",
          color: "#111",
          border: "none",
          borderRadius: "20px",
          padding: "8px 16px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        ↑ Volver arriba
      </button>
    </footer>
  );
}

export default Footer;