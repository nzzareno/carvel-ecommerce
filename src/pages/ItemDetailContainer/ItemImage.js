import React from "react";

const ItemImage = ({ sneakers }) => {
  return (
    <div className="item__detail-single-img">
      <small className="captador">Home</small><span className="barra-captador">/</span>
      <small className="subcaptador">{sneakers.title}</small>
      <img src={sneakers.items[2].imageUrl} alt="" />
    </div>
  );
};

export default ItemImage;
