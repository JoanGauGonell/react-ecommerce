import './App.css';
import Products from './components/Products';
import Basket from './components/Basket';
import Header from './components/Header';
import { useState } from 'react';
// import Article from './components/Article';


function App(props) {
  const [cartItems, setCartItems]= useState([]);
  const onAdd = (products) =>{
    const exist = cartItems.find(x => x.id === products.id);
    if(exist){
      setCartItems(cartItems.map( x => x.id === products.id ? {...exist, qty: exist.qty+1}:x))
    } else {
      setCartItems([...cartItems, {...products, qty:1}])
    }
  }
  return (
      // <Article {...props}/>
      <>
    <Header  />
    <div className="App-style">
      <Products onAdd={onAdd}  />
      <Basket onAdd={onAdd}>cartItems={cartItems}</Basket>
    </div>
    </>
 
  );
}

export default App;