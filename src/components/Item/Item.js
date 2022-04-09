import React from "react";
import "./Item.scss";
import { motion } from "framer-motion";

const Item = ({ title, items }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="collection-preview"
    >
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        className="title"
      >
        {title.toUpperCase()}
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="preview"
      >
        {items
          .filter((index) => index < 3)
          .map(({ id, name, price, imageUrl }) => (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="collection-item"
            >
              <motion.div
                className="image"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.5, 1, 1.5, 2],
                  repeat: 0,
                  repeatDelay: 1,
                }}
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                className="collection-footer"
                key={id}
              >
                <span className="name">{name}</span>
                <span className="price">${price}</span>
              </motion.div>
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default Item;
