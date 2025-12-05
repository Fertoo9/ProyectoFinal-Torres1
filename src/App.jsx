import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart"; //  importamos el carrito
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="🎮 Bienvenido a ZonaGaming" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> {/*  nueva ruta */}
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center", marginTop: "100px" }}>
              404 - Página no encontrada
            </h2>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;