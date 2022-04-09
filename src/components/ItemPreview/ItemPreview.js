import React from "react";

import ShopItem from "../ShopItem/ShopItem";
import "./ItemPreview.scss";

const ItemPreview = ({ portada }) => {
  return (
    <>
      <div className="directory-menu">
        {portada.map(({ title, imageUrl, size, id }) => (
          <ShopItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
        {}
      </div>
    </>
  );
};

export default ItemPreview;
