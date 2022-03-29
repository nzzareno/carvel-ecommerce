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
        Nike LEGACY91 TECH
        {item > stock ? (
          <small style={{ textDecoration: "line-through" }}>(sin stock)</small>
        ) : (
          <small>({item})</small>
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
            onChange={handlerChange}
            value={item > stock ? "sin stock" : item}
            className="ctrl-counter-input"
            type={item > stock ? "text" : "number"}
            pattern="0-9"
            min="0"
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
        <button className="counter-btn-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default ItemCount;
