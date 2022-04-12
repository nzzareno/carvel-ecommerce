import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { PRODUCTS } from "../ItemListContainer/Products";
import Spinner from "../ItemListContainer/Spinner";

const ItemDetailContainer = () => {
  const [jackets, setJackets] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    const promesha = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
          resolve(PRODUCTS.filter((product) => product.id === Number(id)));
        } else {
          reject(
            "Hubo un problema con la carga de nuestros elementos, por favor intentalo mas tarde..."
          );
        }
      }, 2000);
    });
    promesha.then((rta) => setJackets(rta)).catch((err) => console.log(err));
  }, [id, jackets]);

  console.log(jackets);

  return (
    <>
      {jackets.length === 0 ? (
        <div>
          <Spinner />
        </div>
      ) : (
        jackets.map((jacket) => {
          return <ItemDetail key={jacket.id} jackets={jacket} />;
        })
      )}
    </>
  );
};

export default ItemDetailContainer;
