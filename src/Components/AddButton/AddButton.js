
import React from "react";

function AddButton({ productData, addProduct }) {
  const AddItemToLocalStorage = () => {
    productData.quantity=1;
    addProduct(productData);
  };
  return (
    
    <button className="btn btn-primary" onClick={AddItemToLocalStorage}>
      ADD TO CART
    </button>
  );
}

export default AddButton;