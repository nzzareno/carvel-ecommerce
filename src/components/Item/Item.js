import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ id, name, imageUrl, price }) => {
  return (
    <>
      <div className="page-content" onClick={() => console.log("asdasd")}>
        <div className="cardx" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="contentx">
            <h2 className="titlex">{name}</h2>
            <h2 className="copyx">ONLY FOR ${price}</h2>
            <Link
              style={{ textDecoration: "none" }}
              className="btnx"
              to={`/item/${id}`}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/item/${id}`}
              >
                SHOP NOW
              </Link>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
