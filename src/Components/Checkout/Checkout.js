import React from 'react'
import Header from "../Header/Header"
import "./Checkout.css"
import CartList from "../CartList/CartList";
const Checkout = ({ myCart, setItems }) => {
  return (
    <>
        <Header />
        <h3> Checkout </h3>
        <div className='form'>
        <div className="row">
        <div className="col-md-6">
            <div className="form-group mb-3">
                <label>First Name</label>
                <input type="text" name="firstname" className="form-control" />
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group mb-3">
                <label>Last Name</label>
                <input type="text" name="lastname" className="form-control" />
            </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-6">
            <div className="form-group mb-3">
                <label>Phone</label>
                <input type="text" name="Phone" className="form-control" />
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group mb-3">
                <label>City</label>
                <input type="text" name="City" className="form-control" />
            </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-6">
            <div className="form-group mb-3">
                <label>State</label>
                <input type="text" name="State" className="form-control" />
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group mb-3">
                <label>Zip Code</label>
                <input type="text" name="zipcode" className="form-control" />
            </div>
        </div>
        <div className="col-md-12">
            <div className="form-group mb-3">
                <label>Full Adress</label>
                <input type="text" name="fulladress" className="form-control" />
            </div>
        </div>
        </div>
        <div className="col-md-12">
            <div className="form-group text-end">
                <button type="button" className="btn btn-primary">Place Order</button>
            </div>
        </div>
        </div>

        <div className="col-md-5">
            <table className='table table-bordered' >
                <thead>
                    <tr>
                        <th width="50%">Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Checkout