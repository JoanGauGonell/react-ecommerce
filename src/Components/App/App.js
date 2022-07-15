import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

import { useState, useEffect } from "react";

function App() {

  const [myCart, setItems] = useState(
    JSON.parse(localStorage.getItem("myCart")) || []
  );
//Añadimos el producto del coincida el id en el array de my cart
  function addProduct(item) {
    myCart.find((elem) => elem.id === item.id) ?? setItems([item, ...myCart]);
  }
//en el removeProduct si el item añadido con el add product no coincide con el element de my cart 
//que pillamos desde el remove button no se filtra hasta my cart
  const removeProduct = (item) =>{
    setItems(myCart.filter((element)=>element !== item));
  };

//aqui hacemos pasamos los elementos de local storage con stringify y lo mandamos a a my cart

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(myCart));
  }, [myCart]);

  

  return (
    <>
      <Header myCart={myCart} removeProduct={removeProduct} setItems={setItems}/>
      <Body addProduct={addProduct} />
      <Footer />
    </>
  );
}

export default App;