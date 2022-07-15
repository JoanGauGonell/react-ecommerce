import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Counter from "../Counter/Counter";

function CartProduct({ product, removeProduct, myCart, setItems}) {

    const removeCartProduct = () => {
        removeProduct(product);
    }
    console.log(product);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.url} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text> Price: {product.price * product.quantity} €<br/></Card.Text>
        <div className="d-flex justify-content-around">
            
          <Counter product={product} myCart={myCart} setItems={setItems}  />
          </div>
        <Button variant="danger" onClick={removeCartProduct}>
            REMOVE
            </Button>
      </Card.Body>
    </Card>
  );
}

export default CartProduct;