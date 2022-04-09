import React, { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [item, setItem] = useState(initial);

  const handlerChange = (e) => {
    setItem(() => e.target.value);
  };

  if (item < 0) {
    setItem(0);
  }

  if (stock) {
    onAdd = item;
  }

  return (
    <div>
      <div className="ctrl">
        <div
          className="ctrl-button ctrl-button-decrement"
          onClick={() => setItem(item - 1)}
        >
          -
        </div>
        <div className="ctrl-counter">
          <input
            onChange={handlerChange}
            value={item}
            className="ctrl-counter-input"
            type={"number"}
            disabled
          />
        </div>
        <div
          className="ctrl-button ctrl-button-increment"
          onClick={() => setItem(item + 1)}
        >
          +
        </div>
      </div>

      <div className="a-button-stack">
        <span className="a-declarative">
          <span className="a-button a-spacing-small a-button-primary a-button-icon natc-enabled">
            <span className="a-button-inner">
              
              <input
                id="add-to-cart-button"
                name="submit.add-to-cart"
                title="Añadir a la cesta"
                className="a-button-input"
                type="submit"
                value="Añadir a la cesta"
              />
              <span className="a-button-text" aria-hidden="true">
                Add to cart
              </span>
            </span>
          </span>
        </span>

  
      </div>
      
    </div>
  );
};

export default ItemCount;
