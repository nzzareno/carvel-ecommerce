import React, { useContext } from "react";
import { Link } from "react-router-dom";
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

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const totalPrice = addToCarrito
    .map((product) => {
      return product.item.price * product.quantity;
    })
    .reduce((a, b) => a + b, 0);

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
                    
                    </div>

                    <footer className="content">
                      <span className="qt">
                        <strong>Qty:</strong> {producto.quantity}
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
        <h1
          style={{
            textAlign: "center",
            fontSize: "42px",
            borderBottom: "2px solid #ececec",
          }}
        >
          The cart is empty... Start enjoying our products and visit us again
        </h1>
      )}

      {addToCarrito.length > 0 ? (
        <footer id="site-footer">
          <div className="container clearfix">
            <div className="right">
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
