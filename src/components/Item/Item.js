import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ id, name, imageUrl, price }) => {
  return (
    <>
      <div className="page-content">
        <div className="cardx" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="contentx">
            <h2 className="titlex">{name}</h2>
            <h2 className="copyx">ONLY FOR ${price}</h2>
            <Link
              style={{ textDecoration: "none" }}
              className="btnx"
              to={`/carvel-ecommerce/item/${id}`}
            >
              <span
                style={{ textDecoration: "none", color: "white" }}
                to={`/carvel-ecommerce/item/${id}`}
              >
                SHOP NOW
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
