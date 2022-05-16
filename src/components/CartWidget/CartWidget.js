import alertify from "alertifyjs";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Carrito } from "../../assets/shopping-bag.svg";
import { CarritoContext } from "../../context/CartContext";
import "./CartWidget.scss";

const CartWidget = () => {
  let { addToCarrito } = useContext(CarritoContext);

  function alertx() {
    if (addToCarrito.length === 0) {
      alertify.warning("You must add a product");
    }
  }

  return (
    <Link to={addToCarrito.length > 0 && "/carvel-ecommerce/cart"}>
      <div onClick={alertx} style={{ zIndex: 9999 }} className="cart-icon">
        <Carrito className="shopping-icon" />
        <span className="item-count">
          {[addToCarrito.length < 1 ? "0" : addToCarrito.length]}
        </span>
      </div>
    </Link>
  );
};

export default CartWidget;
