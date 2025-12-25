import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>

      <Link to={`/item/${product.id}`}>
        Ver Detalle
      </Link>
    </div>
  );
}

export default Item;