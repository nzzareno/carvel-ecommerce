import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CartContext";
import "./Cart.scss";
import { BsTrash } from "react-icons/bs";
import { MdOutlineCleaningServices } from "react-icons/md";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as Womens } from "../../assets/women-coat-svgrepo-com.svg";
import { ReactComponent as Hats } from "../../assets/accesory-hats-svgrepo-com.svg";
import { ReactComponent as Glasses } from "../../assets/glasses-svgrepo-com.svg";
import { ReactComponent as Jackets } from "../../assets/jacket-svgrepo-com.svg";

const Cart = () => {
  let { addToCarrito } = useContext(CarritoContext);
  let { clear } = useContext(CarritoContext);
  let { removeItem } = useContext(CarritoContext);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const totalPrice = addToCarrito
    .map((product) => {
      return product.item.price * product.quantity;
    })
    .reduce((item, qty) => item + qty, 0);

  const pickData = addToCarrito.map((producto) => {
    return (
      <p key={uuidv4()}>
        <small>
          {producto.item.name}({producto.quantity}) :
          <strong> ${producto.item.price * producto.quantity}</strong>
        </small>
      </p>
    );
  });

  return (
    <>
      {addToCarrito.length > 0 ? (
        addToCarrito.map((producto) => {
          return (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              key={uuidv4()}
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
                        <span>
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
                        <strong>Qty: </strong> {producto.quantity}
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
      ) : (
        <>
          <h1
            style={{
              textAlign: "center",
              fontSize: "42px",
              borderBottom: "2px solid #ececec",
            }}
          >
            The cart is empty... Start enjoying our products and visit us again
          </h1>
          <Link to={`/carvel-ecommerce`} className="button-backhome">
            GO BACK TO HOME
          </Link>
          <div
            style={{
              display: "flex",
              textDecoration: "none",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Link
              to={"/carvel-ecommerce/category/Glasses"}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Glasses</span>{" "}
              <span>
                <Glasses className="iconpower" />
              </span>
            </Link>
            <Link
              to={"/carvel-ecommerce/category/Hats"}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Hats</span>{" "}
              <span>
                <Hats className="iconpower" />
              </span>
            </Link>
            <Link
              to={"/carvel-ecommerce/category/Jackets"}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Jackets</span>{" "}
              <span>
                <Jackets className="iconpower" />
              </span>
            </Link>
            <Link
              to={"/carvel-ecommerce/category/Womens"}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Womens</span>{" "}
              <span>
                <Womens className="iconpower" />
              </span>
            </Link>
            {/* <Link
              to={"/carvel-ecommerce/category/Mens"}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span>Mens</span>{" "}
              <span>
                <Mens className="iconpower" />
              </span>
            </Link> */}
          </div>
        </>
      )}

      {addToCarrito.length > 0 ? (
        <footer id="site-footer">
          <div className="container clearfix">
            <div className="right">
              {" "}
              {pickData}
              <h1 className="total">
                Total: <span>${totalPrice} </span>
              </h1>
              <Link to={"/checkout"} className="btn">
                Checkout
              </Link>
              <MdOutlineCleaningServices
                onClick={() => clear()}
                className="cleared"
              />
            </div>
          </div>
        </footer>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
