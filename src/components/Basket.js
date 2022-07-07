import React from 'react'

function basket(props) {
    const {cartItems} = props;
  return (
    <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>
            {cartItems.length===0 && <div>Cart is Empty</div>}
        </div>
    </aside>
  )
}

export default basket