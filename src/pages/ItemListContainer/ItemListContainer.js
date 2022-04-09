import React from "react";
import ItemPreview from "../../components/ItemPreview/ItemPreview";
import "./ItemListContainer.scss";
import men from "./../../assets/men.jpg";
import pilcha from "./../../assets/333.png";
import yordan from "./../../assets/wwwww.jpg";
import woman from "./../../assets/der.jpg";
// import ItemList from "../../components/ItemList/ItemList";
// import ItemCount from "../../components/ItemCount/ItemCount";


const ItemListContainer = () => {
  const portada = [
    {
      title: "hats",
      imageUrl:
        "https://blog.thelonghairs.us/wp-content/uploads/2015/08/hairandhats-33.jpg",
      id: 1,
    },
    {
      title: "jackets",
      imageUrl: pilcha,
      id: 2,
    },
    {
      title: "sneakers",
      imageUrl: yordan,
      id: 3,
    },
    {
      title: "womens",
      imageUrl: woman,
      size: "large",
      id: 4,
    },
    {
      title: "mens",
      imageUrl: men,
      size: "large",
      id: 5,
    },
  ];

  return (
    <div className="homepage">
      <ItemPreview portada={portada} />
      {/* <ItemList /> */}
      {/* <ItemCount initial={0} stock={5} /> */}
    </div>
  );
};

export default ItemListContainer;
