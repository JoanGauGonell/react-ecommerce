
import React from "react";
import AddButton from "../AddButton/AddButton";
import "./ProductCard.css";
export default function ProductCard({ product, addProduct }) {
  return (
    //  aqui imprimos los elementos json en el body
    <div className="card">
      <img src={product.url} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.price} €</p>
        <AddButton
          productData={product}
          addProduct={addProduct}
          key={product.title}
        />
      </div>
    </div>
  );
}