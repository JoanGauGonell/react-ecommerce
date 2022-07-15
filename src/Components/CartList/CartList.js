
import ListItem from "../ListItem/ListItem";

function CartList({ myCart, removeProduct, setItems }) {
  return (
    <ul className="list-group">
      {myCart.map((product) => (
        <ListItem 
        product={product} 
        key={product.id}
        removeProduct={removeProduct}
        myCart={myCart}
        setItems={setItems}
        />
      ))}
    </ul>
  );
}

export default CartList;