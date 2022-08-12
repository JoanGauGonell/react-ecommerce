import React from "react";
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import Shops from './Components/Shops/Shops';
import Partnership from './Components/Partnership/Partnership';
import Contact from './Components/Contact/Contact';
import Checkout from './Components/Checkout/Checkout';
import Home from "./Components/Home/Home";


const RouterPath = ({addWishList, addProduct, RemoveItem, setItems}) => {
  return (
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/" element={<Home addWishList={addWishList} addProduct={addProduct}/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
  );
};

export default RouterPath;