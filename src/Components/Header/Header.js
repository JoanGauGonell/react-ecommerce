import "./Header.css";
import Nav from "../Nav/Nav";
import CartModal from "../CartModal/CartModal";

function Header({ myCart, removeProduct, setItems }) {
  return (
    <>
      <header className="HeaderContainer">
        <h1>  </h1>
        <Nav />
        <CartModal myCart={myCart} removeProduct={removeProduct} setItems={setItems} />
      </header>
    </>
  );
}

export default Header;
