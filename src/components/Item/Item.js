import React  from "react";
import "./Item.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
 
const Item = ({ id, name, imageUrl, price }) => {
 
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 3 }}
        className="page-content"
   
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="cardx"
          transition={{ duration: 3 }}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="contentx">
            <h2 className="titlex">{name}</h2>
            <h2 className="copyx">ONLY FOR ${price}</h2>
            <Link
              style={{ textDecoration: "none" }}
              className="btnx"
              to={`/carvel-ecommerce/item/${id}`}
            >
              <span
                style={{ textDecoration: "none", color: "white" }}
                to={`/carvel-ecommerce/item/${id}`}
              >
                SHOP NOW
              </span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Item;
