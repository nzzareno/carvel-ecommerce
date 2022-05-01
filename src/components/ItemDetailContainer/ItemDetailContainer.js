import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../ItemListContainer/Spinner";
import { db } from "../../index";
import { getDoc, doc } from "firebase/firestore";
import "../ItemDetail/ItemDetail.scss";

const ItemDetailContainer = () => {
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
      <div className="ItemDetail-container">
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
