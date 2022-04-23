import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../ItemListContainer/Spinner";
import { db } from "../../index";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [jackets, setJackets] = useState([]);
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const singleItem = doc(db, "Products", id);

    getDoc(singleItem).then((rta) => {
      setProducto({ ...rta.data(), id: rta.id });
    });
  }, [id]);

  return (
    <>
      <div>
        {producto.id ? (
          <>
            <ItemDetail producto={producto} />
          </>
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
