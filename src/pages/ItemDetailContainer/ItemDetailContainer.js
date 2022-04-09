/* eslint-disable react-hooks/exhaustive-deps */
 
import React, { useState, useEffect } from "react";
import PRODUCTS from "../../components/Item/Products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [sneakers, setSneakers] = useState({});

  useEffect(() => {
    const promesha = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (sneakers) {
          resolve(PRODUCTS[1]);
        } else {
          reject(
            "Hubo un problema con la carga de nuestros elementos, por favor intentalo mas tarde..."
          );
        }
      }, 2000);
    });
    promesha.then((rta) => setSneakers(rta)).catch((err) => console.log(err));
  }, []);

  console.log(sneakers);
  return <ItemDetail sneakers={sneakers} />;
};

export default ItemDetailContainer;
