import React, { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ stock, initial, onAdd, branded }) => {
  const [item, setItem] = useState(initial);
  const [stockState, setStockState] = useState(stock);

  function handlerChange(e) {
    setItem(() => e.target.value);
    setStockState(() => e.target.value);
  }

  function handleClickedMore() {
    if (stockState === 0) {
      setItem(item);
    } else {
      setItem(item + 1);
      setStockState(stockState - 1);
    }
  }

  function handleClickedLess() {
    if (stockState < 0) {
      setItem(item);
    } else if (item === 0) {
      setStockState(stockState);
    } else {
      setItem(item - 1);
      setStockState(stockState + 1);
    }
  }

  return (
    <div>
      <div>
        <h4 className="stocked" style={{ fontWeight: 500 }}>
          {stockState === 0
            ? " Out of stock"
            : `(${stockState}) ${branded} in stock`}
        </h4>
      </div>
      <div className="ctrl">
        <div
          className={
            item === 0 ? "offline-ctrl" : "ctrl-button ctrl-button-decrement"
          }
          onClick={handleClickedLess}
        >
          -
        </div>
        <div className="ctrl-counter">
          <input
            onChange={handlerChange}
            value={item}
            className="ctrl-counter-input"
            type={"number"}
          />
        </div>
        <div
          className={
            stockState === 0
              ? "offline-ctrl"
              : "ctrl-button ctrl-button-increment"
          }
          onClick={handleClickedMore}
        >
          +
        </div>
      </div>

      <div id="container">
        <button onClick={() => onAdd(item)} className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
