import React from "react";
import { motion } from "framer-motion";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="homepage">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
        className="cartelerax"
      >
        <h5 className="cartelera">
          YOU SHOULD TAKE OUR 50% OFF DEALS!
        </h5>
      </motion.div>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
