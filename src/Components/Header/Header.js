import "./Header.css";
import Nav from "../Nav/Nav";
import { Link, Outlet, useNavigate } from "react-router-dom";
import CartModal from "../CartModal/CartModal";
import WishModal from "../WishModal/WishModal"
function Header({ myCart, removeProduct, setItems }) {
  return (
    <>
      <header className="HeaderContainer">
      <Link  to={"/"}>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugm4Ke6RVEAC-M5szSkr3p038AP-46VG4LA&usqp=CAU" width="100rem"/>
        </Link>
        <Nav />
        <CartModal myCart={myCart} removeProduct={removeProduct} setItems={setItems} />
       
      </header>
    </>
  );
}

export default Header;
