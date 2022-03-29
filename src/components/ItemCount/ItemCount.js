import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [item, setItem] = useState(initial);

  const handlerChange = (e) => {
    setItem(() => e.target.value);
  };

  if (stock) {
    onAdd = item;
  }

  return (
    <div>
      <h5 style={{ marginTop: "-10px" }}>
        {item > stock ? (
          <span id="stock-small">
            <small style={{ textDecoration: "line-through" }}>
              Nike LEGACY91 TECH HAT
            </small>
            <small> (sin stock)</small>
          </span>
        ) : (
          <small>{item > 0 && ` Nike LEGACY91 TECH HAT (${item})`}</small>
        )}
      </h5>
      <div className="ctrl">
        <div
          className={
            item > stock ? "offline-ctrl" : "ctrl-button ctrl-button-decrement"
          }
          onClick={
            item > stock || stock === 0 || item <= 0
              ? isDisabled
              : () => setItem(item - 1)
          }
        >
          -
        </div>
        <div className="ctrl-counter">
          <input
            onChange={item > stock ? null : handlerChange}
            value={item > stock ? "sin stock" : item}
            className={
              item > stock ? "offline-counter-input" : "ctrl-counter-input"
            }
            type={item > stock ? "text" : "number"}
          />
        </div>
        <div
          className={
            item > stock ? "offline-ctrl" : "ctrl-button ctrl-button-increment"
          }
          onClick={item > stock ? isDisabled : () => setItem(item + 1)}
        >
          +
        </div>
      </div>

      <div>
        <button
          className={
            item > stock ? "offline-counter-btn-cart" : "counter-btn-cart"
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
