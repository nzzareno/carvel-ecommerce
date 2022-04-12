import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../ItemListContainer/Products";
import Item from "../Item/Item";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import "./ItemList.scss";
import { useParams } from "react-router-dom";
import Spinner from "../ItemListContainer/Spinner";

const ItemList = () => {
  const [collection, setCollection] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
          resolve(PRODUCTS.filter((product) => product.category === id));
        } else {
          resolve(PRODUCTS.filter((product) => product.category === "Glasses"));
        }
      }, 2000);
    });
    promesa
      .then((rta) => {
        setCollection(rta);
      })
      .catch((err) => err);
  }, [id]);

  return (
    <>
      <h1 className="title-collection">
        <CollectionTitle collection={collection} />
      </h1>
      <div className="shop-page">
        {collection.length === 0 ? (
          <div>
            <Spinner />
          </div>
        ) : (
          collection.map(
            ({ id, name, imageUrl, price, categorie, color, brand, page }) => (
              <Item
                key={id}
                id={id}
                name={name}
                imageUrl={imageUrl}
                price={price}
                page={page}
                categorie={categorie}
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
