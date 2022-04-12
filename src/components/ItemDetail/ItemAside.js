import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemAside = ({ jackets }) => {
  return (
    <div className="container-vertical">
      <aside style={{ width: "100%" }}>
        <div className="container-cuadrado">
          <div>
            <h3>${jackets.price}</h3>
          </div>
          <div>
            <p>and FREE Returns</p>
          </div>
          <div>
            <p>
              Delivery for <strong>$39.99</strong>
            </p>
            <p>
              between <strong>17 - 30 April</strong>
            </p>
          </div>
          <div>
            <small>
              {" "}
              <span className="ubicacion"></span> Deliver to Argentina
            </small>
          </div>
          <div>
            <h3 style={{ fontWeight: 500 }}>In stock.</h3>
          </div>
          <div>
            <ItemCount initial={0} stock={2} />
          </div>
          <div>
            <div className="celwidget">
              <div className="a-section a-spacing-small a-text-left celwidget">
                <span className="a-declarative">
                  <span className="aok-align-center">
                    <img
                      alt=""
                      src="https://images-na.ssl-images-amazon.com/images/G/30/x-locale/checkout/truespc/secured-ssl._CB485936936_.png"
                      height="15px"
                    />
                  </span>
                  <span className="a-letter-space"></span>
                  <span
                    className="dataspan"
                    style={{
                      cursor: "pointer",
                      color: "#0099C0",
                    }}
                    data-hover="We work hard to protect your security and privacy. Our payment security system encrypts your information during transmission. We don’t share your credit card details with third-party sellers, and we don’t sell your information to others."
                  >
                    Secure transaction
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="info-shipping">
            <div>
              <p>Shipping from</p>
              <p>Sold by</p>
            </div>
            <div>
              <p>Carvel</p>
              <p>Carvel</p>
            </div>
          </div>
          <div className="gift-container">
            <label className="control control--checkbox">
              <input type="checkbox" className="checkgift" />
              <small className="small-gift">
                 Add a gift ticket to facilitate returns
              </small>
            </label>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ItemAside;