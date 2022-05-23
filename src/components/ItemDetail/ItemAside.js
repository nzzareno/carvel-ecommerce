import React, { useState, useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CarritoContext } from "../../context/CartContext";
import Select from "react-select";
import countryList from "react-select-country-list";

const ItemAside = ({ producto }) => {
  const [quantityCarro, setQuantityCarro] = useState(0);
  const [branded] = useState(producto.brand);
  const [countries, setCountries] = useState("");
  let { addToCarrito } = useContext(CarritoContext);
  let { setAddToCarrito } = useContext(CarritoContext);
  let { addItem } = useContext(CarritoContext);
  const options = useMemo(() => countryList().getData(), []);

  const onAdd = (cantidadCarro) => {
    setQuantityCarro(cantidadCarro);
    setAddToCarrito([
      ...addToCarrito,
      { item: producto, quantity: cantidadCarro },
    ]);
    addItem(producto, cantidadCarro);
  };

  const changeHandler = (countries) => {
    setCountries(countries);
  };

  return (
    <div className="container-vertical">
      <aside style={{ width: "100%" }}>
        <div className="container-cuadrado">
          <div>
            <h3>${producto.price}</h3>
          </div>
          <div>
            <p>
              and <strong>FREE</strong> Returns
            </p>
          </div>
          <div>
            <p>
              Delivery for <strong>$39.99</strong>
            </p>
            <p>
              between <strong>18 - 31 May</strong>
            </p>
          </div>
          <div>
            <Select
              options={options}
              value={countries}
              onChange={changeHandler}
              placeholder="Select a country"
              className="select-ubicacion"
            />
          </div>

          <div>
            {quantityCarro ? (
              <>
                <Link to="/carvel-ecommerce/cart">
                  <button className="close zbutton">Go to cart</button>
                </Link>
              </>
            ) : (
              <ItemCount
                stock={producto.stock}
                branded={branded}
                initial={0}
                onAdd={onAdd}
              />
            )}
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
