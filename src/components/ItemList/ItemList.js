import React, { useEffect, useState } from "react";
import PRODUCTS from "../Item/Products";
import Item from "../Item/Item";
import { motion } from "framer-motion";
import CollectionTitle from "../Item/CollectionTitle";
import "./ItemList.scss";

const ItemList = () => {
  const [collection, setCollection] = useState([]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (collection) {
          resolve(PRODUCTS);
        } else {
          reject(
            "Hubo un problema con la carga de elementos, intentalo mas tarde..."
          );
        }
      }, 2000);
    });
    promesa
      .then((rta) => {
        setCollection(rta);
      })
      .catch((err) => err);
  }, [collection]);

  return (
    <div className="shop-page">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 4 }}
        className="title-collection"
      >
        <CollectionTitle />
      </motion.h1>
      {collection.map(({ id, ...otherCollectionProps }) => (
        <Item key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ItemList;
