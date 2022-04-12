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
    </div>
  );
};

export default ItemCount;
