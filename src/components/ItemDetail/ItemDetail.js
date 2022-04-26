import React from "react";
import { Link } from "react-router-dom";
import ItemAside from "./ItemAside";
import "./ItemDetail.scss";
import StarRating from "./StarRating";

const ItemDetail = ({ producto }) => {
  return (
    <section className="item__detail">
      <div className="item__detail-single-img">
        <small className="captador">
          <Link
            style={{ textDecoration: "none" }}
            className="captador"
            to={"/carvel-ecommerce"}
          >
            Home
          </Link>
        </small>
        <span className="barra-captador">/</span>
        <small className="subcaptador">
          <Link
            style={{ textDecoration: "none" }}
            className="subcaptador"
            to={`/carvel-ecommerce/category/${producto.category}`}
          >
            {producto.category}
          </Link>
        </small>
        <img src={producto.imageUrl} alt="" />
      </div>
      <div className="item__detail-single-pro-details">
        <h5>
          Brand:{" "}
          <a style={{ textDecoration: "none" }} href={producto.page}>
            {producto.brand}
          </a>
        </h5>
        <div className="title-container">
          <h2>{producto.name} </h2>
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
          <h1>${producto.price}</h1>
        </div>

        <div className="color-container">
          <small className="small-color" style={{ marginRight: "5px" }}>
            Color: {producto.color}
          </small>
        </div>
      </div>
      <ItemAside producto={producto} />
    </section>
  );
};

export default ItemDetail;
