import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const FBGetCollection = () => {
  //YPQGY4euFdaUcCoDm06C
  //productos
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const Products = collection(db, "Products");

    getDocs(Products).then((rta) => {

    setProductos(rta.docs.map((producto) => ({ ...producto.data(), id: producto.id })));
 
    });
  }, []);

  useEffect(() => {
    console.log(productos);
  }, [productos]);

  return (
    <div>
      {productos.id ? (
        <><h1>{productos.name}</h1></>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default FBGetCollection;
