import React from "react";
import ItemList from "../../components/ItemList/ItemList";
import ItemCount from "../../components/ItemCount/ItemCount";
import "./ItemListContainer.scss";

const ItemListContainer = () => {
  return (
    <div className="homepage">
      <ItemList />
      <ItemCount initial={0} stock={5} />
    </div>
  );
};

export default ItemListContainer;
