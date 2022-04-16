import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

export default function CartContext({ children }) {
  const [addToCarrito, setAddToCarrito] = useState([]);

  function addItem(item, quantity) {
    const foundProdIndex = addToCarrito.findIndex(
      (product) => product.item.id === item.id
    );
    if (foundProdIndex === -1) {
      setAddToCarrito([...addToCarrito, { item, quantity }]);
    } else {
      const newProducts = [...addToCarrito];
      newProducts[foundProdIndex].quantity += quantity;
      setAddToCarrito(newProducts);
    }

    if (quantity === 0) {
      setAddToCarrito([...addToCarrito]);
    }
  }

  function clear() {
    setAddToCarrito([]);
  }

  function removeItem(itemId) {
    const newItems = addToCarrito.filter((item) => item.item.id !== itemId);
    setAddToCarrito(newItems);
  }

  return (
    <>
      <CarritoContext.Provider
        value={{
          addToCarrito,
          setAddToCarrito,
          clear,
          addItem,
          removeItem,
        }}
      >
        {children}
      </CarritoContext.Provider>
    </>
  );
}
