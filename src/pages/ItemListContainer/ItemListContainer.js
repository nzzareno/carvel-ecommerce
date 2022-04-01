import React from "react";
import ItemPreview from "../../components/ItemPreview/ItemPreview";
import ItemList from "../../components/ItemList/ItemList";

// import ItemCount from "../../components/ItemCount/ItemCount";
import "./ItemListContainer.scss";

const ItemListContainer = () => {
  return (
    <div className="homepage">
      <ItemPreview />
      <ItemList />
      {/* <ItemCount initial={0} stock={5} /> */}
    </div>
  );
};

export default ItemListContainer;
