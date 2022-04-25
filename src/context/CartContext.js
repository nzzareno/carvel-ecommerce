import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

export default function CartContext({ children }) {
  const [addToCarrito, setAddToCarrito] = useState([]);

  async function addItem(item, quantity) {
    const foundProdIndex = await addToCarrito.findIndex(
      (product) => product.item.id === item.id
    );

    if (foundProdIndex === -1) {
      setAddToCarrito([...addToCarrito, { item, quantity }]);
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
