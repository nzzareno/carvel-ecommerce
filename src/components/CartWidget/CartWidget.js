import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Carrito } from "../../assets/shopping-bag.svg";
import { CarritoContext } from "../../context/CartContext";
import "./CartWidget.scss";

const CartWidget = () => {
  let { addToCarrito } = useContext(CarritoContext);
  console.log(addToCarrito);
  return (
    <Link to={"/cart"}>
      <div className="cart-icon">
        <Carrito className="shopping-icon" />
        <span className="item-count">
          {[addToCarrito.length < 1 ? "" : addToCarrito.length]}
        </span>
      </div>
    </Link>
  );
};

export default CartWidget;
