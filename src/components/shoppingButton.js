const ShoppingButton = ({cartItems, setCartItems, product}) => {
  const onAdd = () =>{
    // console.log(product.id);
    // console.log(setCartItems([...cartItems, {...product, qty:1}]));
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map( x => x.id === product.id ? {...exist, qty: exist.qty+1}:x))
    } else {
      setCartItems([...cartItems, {...product, qty:1}])
    }
  }
    return(
    <>
      <button onClick={() => onAdd(product)} className="shoppingCard">Add to shopping card</button>
    </>)
  }
  export  default ShoppingButton;