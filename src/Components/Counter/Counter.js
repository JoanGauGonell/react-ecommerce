
import React from 'react'
const Counter = ({myCart, product, setItems}) => {
const addItem = (product) => {
    let CartProduct = [...myCart]
    CartProduct.map((element) => {
        if(element.id === product.id){
            product.quantity = product.quantity + 1
        }
    })  
    setItems(CartProduct)
}
console.log(product.price);

const substract = (product) => {
  if(product.quantity > 1){
    let CartProduct = [...myCart];
    CartProduct.forEach((element) => {
      if(element.id === product.id){
        product.quantity = product.quantity -1
      }
    })
    setItems(CartProduct)
  }
}
  return (
    <>
    <button className='btn btn-primary' onClick={ () => substract(product)}>-</button>
    <p>{product.quantity}</p>
    <button className='btn btn-primary' onClick={ () => addItem(product)}>+</button>
    </>
  )
}

export default Counter