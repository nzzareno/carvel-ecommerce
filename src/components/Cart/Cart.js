import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CarritoContext } from "../../context/CartContext";
import "./Cart.scss";
import { BsTrash } from "react-icons/bs";
import { MdOutlineCleaningServices } from "react-icons/md";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const Cart = () => {
  let { addToCarrito } = useContext(CarritoContext);
  let { clear } = useContext(CarritoContext);
  let { removeItem } = useContext(CarritoContext);
  let { setOpenModal } = useContext(CarritoContext);
  let { setFooterOff } = useContext(CarritoContext);
  let { totalPrice } = useContext(CarritoContext);
  let navigate = useNavigate();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const pickData = addToCarrito.map((producto) => {
    return (
      <p key={uuidv4()}>
        <small style={{ fontSize: "17px" }}>
          {producto.item.name}({producto.quantity}) :
          <strong> ${producto.item.price * producto.quantity}</strong>
        </small>
      </p>
    );
  });

  function goToHome() {
    navigate("/carvel-ecommerce/");
  }

  return (
    <div style={{ zIndex: "-1" }}>
      <div className={addToCarrito.length > 0 ? "cart-wrapx" : "cart-wrap"}>
        {addToCarrito.length > 0
          ? addToCarrito.map((producto) => {
              return (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  key={uuidv4()}
                  style={{ minHeight: "100%" }}
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    className="container"
                  >
                    <motion.section
                      initial="hidden"
                      animate="visible"
                      variants={variants}
                      id="cart"
                    >
                      <motion.article
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        className="product"
                      >
                        <header>
                          <img
                            src={producto.item.imageUrl}
                            alt=""
                            style={{
                              backgroundColor: "white",
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </header>

                        <div className="content">
                          <h1>
                            {producto.item.name}
                            <BsTrash
                              onClick={() => removeItem(producto.item.id)}
                              className="basurita"
                            />
                          </h1>
                          {producto.item.category} | {producto.item.color}
                          <h5 style={{ marginTop: "10px" }}>
                            <span>
                              <small className="initial-price">
                                <span
                                  style={{
                                    backgroundColor: "#00640a",
                                    height: "120px",
                                  }}
                                >
                                       
                                </span>{" "}
                                Initial price{" "}
                              </small>
                            </span>
                          </h5>
                          <h5>
                            <span style={{ marginTop: "55px" }}>
                              <small className="final-price">
                                <span
                                  style={{
                                    height: "120px",
                                    backgroundColor: "yellow",
                                  }}
                                >
                                     
                                </span>
                                <span
                                  style={{
                                    height: "120px",
                                    backgroundColor: "black",
                                  }}
                                >
                                     
                                </span>{" "}
                                Final price{" "}
                              </small>
                            </span>
                          </h5>
                        </div>

                        <footer className="content">
                          <span className="qt">
                            <strong>Quantity: </strong> {producto.quantity}
                          </span>

                          <h2 className="full-price">
                            ${producto.item.price * producto.quantity}
                          </h2>
                          <h2 className="price">${producto.item.price}</h2>
                        </footer>
                      </motion.article>
                    </motion.section>
                  </motion.div>
                </motion.div>
              );
            })
          : goToHome()}

        {addToCarrito.length > 0 ? (
          <>
            <footer id="site-footer">
              <div className="container clearfix">
                <div className="right">
                  {" "}
                  {pickData}
                  <h1 className="total">
                    Total: <span>${totalPrice} </span>
                  </h1>
                  <button
                    onClick={() => {
                      navigate("/carvel-ecommerce/cart/form");
                      setOpenModal(true);
                      setFooterOff(true);
                    }}
                    className="btn"
                  >
                    Checkout
                  </button>
                  <MdOutlineCleaningServices
                    onClick={() => clear()}
                    className="cleared"
                  />
                </div>
              </div>
            </footer>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
