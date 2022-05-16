import React, { useContext } from "react";
import { CarritoContext } from "../../context/CartContext";
import { ReactComponent as Like } from "../../assets/checklike.svg";
import { ReactComponent as Unlike } from "../../assets/unlike.svg";
import "./Checkout.scss";
import { motion } from "framer-motion";
const Checkout = () => {
  let { orderId, orderPrice } = useContext(CarritoContext);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      {orderId ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
          className="checkout-container"
        >
          <section
            className="purchase-confirmation page-selector"
            id="purchase-confirmation"
          >
            <header className="question-header">
              <h1 className="questionheadertext">
                Thanks you for trusting us, we look forward to seeing you
                another time
              </h1>
              <Like />
            </header>
            <h2>We’ve successfully processed your payment of ${orderPrice}</h2>
            <p className="p-checkout">
              Your transaction identificator is 
              <strong style={{ textDecoration: "underline" }}>{orderId}</strong>
            </p>
            <h3>What happens next?</h3>
            <p className="p-checkout">
              For your peace of mind, we will garantize to you a good send, so
              you know you’are in good hands from your buy date to the date of
              the coming.
            </p>
            <p className="p-checkout">
              If you have additional charges attached, do not hesitate to
              contact us.
            </p>
          </section>
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
          className="checkout-container"
        >
          <section
            className="purchase-confirmation page-selector"
            id="purchase-confirmation"
          >
            <header className="question-header">
              <h1 className="questionheadertext">
                We are sorry, please go back to home and verify that everything
                is ok
              </h1>
              <Unlike />
            </header>
            <h2 style={{ textDecoration: "underline" }}>
              Your payment could not be processed
            </h2>
          </section>
        </motion.div>
      )}
    </>
  );
};

export default Checkout;
