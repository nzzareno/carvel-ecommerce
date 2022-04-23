import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import "./ItemList.scss";
import { useParams } from "react-router-dom";
import Spinner from "../ItemListContainer/Spinner";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../index";
import yellowpast from "../../assets/yellowpast.jpg";
import HatImage from "../../assets/HatPicture.jpg";
import JacketImage from "../../assets/JacketImage.jpg";
import WomenImage from "../../assets/WomenImage.jpg";
import AccessoriesImage from "../../assets/HatImage.jpg";
import GlassesFinalPicture from "../../assets/GlassesUltimate.jpg";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let productosRef;
    if (!id) {
      productosRef = query(
        collection(db, "Products"),
        where("chosen", "==", true)
      );
    } else {
      productosRef = query(
        collection(db, "Products"),
        where("category", "==", id)
      );
    }
    getDocs(productosRef).then((res) => {
      setProductos(res.docs.map((item) => ({ ...item.data(), id: item.id })));
    });
  }, [id]);

  function imagePoster() {
    if (id === "Hats") {
      return HatImage;
    } else if (id === "Jackets") {
      return JacketImage;
    } else if (id === "Womens") {
      return WomenImage;
    } else if (id === "Glasses") {
      return GlassesFinalPicture;
    } else if (id === "Accessories") {
      return AccessoriesImage;
    }
    return yellowpast;
  }

  return (
    <>
      {productos.length > 0 && (
        <div className="container-image">
          <h1 className="title-collection">
            <CollectionTitle productos={productos} />
          </h1>
          <img
            className={id ? "poster-image" : "yellowpast"}
            src={imagePoster()}
            alt="99"
          />
          {!id && (
            <div style={{background: 'black'}} id="rotate-words">
              <div>
                NEW ARRIVALS
                <p>for you</p>
              </div>
              <div>
                BEST SELLERS
                <p>for you</p>
              </div>
              <div>
                PERFECT CHOICES
                <p>for you</p>
              </div>
              <div>
                YOU WILL FOLLOW AN INSTINCT
                <p>for you.</p>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="shop-page">
        {productos.length === 0 ? (
          <div>
            <Spinner />
          </div>
        ) : (
          productos.map(
            ({ id, name, imageUrl, price, category, color, brand, page }) => (
              <Item
                key={id}
                id={id}
                name={name}
                imageUrl={imageUrl}
                price={price}
                page={page}
                category={category}
                brand={brand}
                color={color}
              />
            )
          )
        )}
      </div>
    </>
  );
};

export default ItemList;
