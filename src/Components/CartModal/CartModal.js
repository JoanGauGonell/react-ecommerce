import { Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CartList from "../CartList/CartList";
import CounterValue from "../CounterValue/CounterValue";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import Login from "../Login/Login";
import "./CartModal.css";
import loged from "../Login/Login";
import Checkout from "../Checkout/Checkout"

function CartModal({ myCart, removeProduct, setItems }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [logged, setLoged] = useState(localStorage.getItem("logged") || false);
  return (
    <>
      <div className="buttonsDiv">
        <Button variant="primary" onClick={handleShow}>
          Shopping Cart
        </Button>
        <LoginButton />
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartList
            myCart={myCart}
            removeProduct={removeProduct}
            setItems={setItems}
          />
        </Modal.Body>
        <Modal.Footer>
          <CounterValue myCart={myCart} />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {logged === "true" ? (
            <Link to="/Checkout">
            <Button variant="primary" onClick={handleClose}>
              Pay
            </Button>
            </Link>
          ) : (
            <Link to="/Login">
              <Button variant="primary" onClick={handleClose}>
                Pay
              </Button>
            </Link>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;
