import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App/App";
import Contact from "./Components/Contact/Contact";
import reportWebVitals from "./reportWebVitals";
import Checkout from "./Components/Checkout/Checkout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from "./Components/AboutUs/AboutUs";
import Partnership from "./Components/Partnership/Partnership";
import Login from "./Components/Login/Login";
import Shops from './Components/Shops/Shops';
// import Contact from './Components/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/Shops' element={<Shops/>} />
      <Route path='/AboutUs' element={<AboutUs/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Partnership' element={<Partnership/>} />
      <Route path='/Checkout' element={<Checkout />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
