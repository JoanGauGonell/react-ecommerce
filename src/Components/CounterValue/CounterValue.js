const CounterValue = ({myCart}) => {
    let TotalPrice = 0;
    myCart.map((element) => {
    TotalPrice = TotalPrice + element.price * element.quantity
})

return (
    <>
     <div className="d-flex col-6 justify-content-between m-2" >
        <p>TOTAL PRICE: </p>
        <div className="">{TotalPrice}€</div>
     </div>
    </>
    )
}

export default CounterValue