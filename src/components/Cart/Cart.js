import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";

const Cart = () => {
  return (
    <div>
      <h2>Carrito power</h2>
      <Link style={{ textDecoration: "none", color: "blue" }} to={"/"}>
        <p> Go back to home</p>
      </Link>
    </div>
  );
};

export default Cart;
