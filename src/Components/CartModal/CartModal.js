
import { Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CartList from "../CartList/CartList";
import CounterValue from "../CounterValue/CounterValue"

function CartModal({ myCart, removeProduct, setItems }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Shopping Cart
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartList myCart={myCart} removeProduct={removeProduct} setItems={setItems} />
        </Modal.Body>
        <Modal.Footer>
        <CounterValue myCart={myCart}/>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;