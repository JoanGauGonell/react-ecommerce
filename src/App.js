import './App.css';
import Products from './components/Products';
import Basket from './components/Basket';
import Header from './components/Header';
import { useState } from 'react';
// import Article from './components/Article';


function App(props) {
  const [cartItems, setCartItems]= useState([]);

  return (
      // <Article {...props}/>
      <>
    <Header  />
    <div className="App-style">
      <Products cartItems={cartItems} setCartItems={setCartItems}/>
      <Basket > cartItems={cartItems}</Basket>
    </div>
    </>
 
  );
}

export default App;