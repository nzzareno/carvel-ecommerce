import React from "react";
import StarRating from "./StarRating";

const ItemInfo = ({ sneakers, state, dispatch }) => {
  return (
    <div className="item__detail-single-pro-details">
      <h5>
        Brand:{" "}
        <a style={{ textDecoration: "none" }} href={sneakers.items[2].page}>
          {sneakers.items[2].brand}
        </a>
      </h5>
      <div className="title-container">
        <h2>{sneakers.items[2].name} </h2>
        <div className="star-container">
          <StarRating />
          <span className="a-choice">
            <span className="choice-ab">
              <span className="choice-ac"> Carvel </span>
              <span className="choice-ad">Choice</span>
            </span>
            <span className="choice-ae"></span>
          </span>
        </div>
      </div>

      <div className="precio-container">
        <small className="small-price">Price: </small>
        <h1>${sneakers.items[2].price}</h1>
      </div>

      <small className="small-price">Size: </small>
      <div className="product--size">
        <span
          className={state.tiny ? "active" : null}
          onClick={() => dispatch({ type: "TINY" })}
        >
          {sneakers.items[2].sizes.tiny}
        </span>
        <span
          className={state.smallest ? "active" : null}
          onClick={() => dispatch({ type: "SMALLEST" })}
        >
          {sneakers.items[2].sizes.smallest}
        </span>
        <span
          className={state.small ? "active" : null}
          onClick={() => dispatch({ type: "SMALL" })}
        >
          {sneakers.items[2].sizes.small}
        </span>
        <span
          className={state.medium ? "active" : null}
          onClick={() => dispatch({ type: "MEDIUM" })}
        >
          {sneakers.items[2].sizes.medium}
        </span>
        <span
          className={state.big ? "active" : null}
          onClick={() => dispatch({ type: "BIG" })}
        >
          {sneakers.items[2].sizes.big}
        </span>
        <span
          className={state.huge ? "active" : null}
          onClick={() => dispatch({ type: "HUGE" })}
        >
          {sneakers.items[2].sizes.huge}
        </span>
      </div>

      <div className="color-container">
        <small className="small-color" style={{ marginRight: "5px" }}>
          Color: {sneakers.items[2].color}
        </small>
      </div>

      <ul className="detalles-lista">
        <li>{sneakers.items[2].info.first}</li>
        <li>{sneakers.items[2].info.second}</li>
        <li>{sneakers.items[2].info.third}</li>
        <li>{sneakers.items[2].info.fourth}</li>
      </ul>
    </div>
  );
};

export default ItemInfo;
