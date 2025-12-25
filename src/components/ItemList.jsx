import Item from "./Item";

function ItemList({ products }) {
  return (
    <div style={{ display: "grid", gap: "25px" }}>
      {products.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
}

export default ItemList;