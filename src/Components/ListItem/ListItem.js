import CartProduct from "../CartProduct/CartProduct";

function ListItem({ product, removeProduct, myCart, setItems }) {
  return (
    <li className="list-group-item">
      <CartProduct product={product} removeProduct={removeProduct} myCart={myCart} setItems={setItems} />
    </li>
  );
}

export default ListItem;