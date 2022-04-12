import React from "react";
import { Link } from "react-router-dom";
import ItemAside from "./ItemAside";
import "./ItemDetail.scss";
import StarRating from "./StarRating";

const ItemDetail = ({ jackets }) => {
  return (
    <section className="item__detail">
      <div className="item__detail-single-img">
        <small className="captador">
          <Link
            style={{ textDecoration: "none" }}
            className="captador"
            to={"/"}
          >
            Home
          </Link>
        </small>
        <span className="barra-captador">/</span>
        <small className="subcaptador">
          <Link
            style={{ textDecoration: "none" }}
            className="subcaptador"
            to={`/category/${jackets.category}`}
          >
            {jackets.category}
          </Link>
        </small>
        <img src={jackets.imageUrl} alt="" />
      </div>
      <div className="item__detail-single-pro-details">
        <h5>
          Brand:{" "}
          <a style={{ textDecoration: "none" }} href={jackets.page}>
            {jackets.brand}
          </a>
        </h5>
        <div className="title-container">
          <h2>{jackets.name} </h2>
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
          <h1>${jackets.price}</h1>
        </div>

        <div className="color-container">
          <small className="small-color" style={{ marginRight: "5px" }}>
            Color: {jackets.color}
          </small>
        </div>
      </div>
      <ItemAside jackets={jackets} />
    </section>
  );
};

export default ItemDetail;
