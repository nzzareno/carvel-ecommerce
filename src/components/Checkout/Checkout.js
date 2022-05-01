import React, { useContext } from "react";
import { CarritoContext } from "../../context/CartContext";
import { ReactComponent as Like } from "../../assets/checklike.svg";
import { ReactComponent as Unlike } from "../../assets/unlike.svg";
import "./Checkout.scss";
const Checkout = () => {
  let { orderId, orderPrice } = useContext(CarritoContext);

  return (
    <>
      {orderId ? (
        <div className="checkout-container">
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
              For your peace of mind, we will send you a confirmation email, so
              you know you’re covered from your renewal date.
            </p>
            <p className="p-checkout">
              A further email with your policy documents will follow shortly so
              please keep an eye out for them.
            </p>
          </section>
        </div>
      ) : (
        <div className="checkout-container">
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
        </div>
      )}
    </>
  );
};

export default Checkout;
