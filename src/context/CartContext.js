import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

export default function CartContext({ children }) {
  const [addToCarrito, setAddToCarrito] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [orderName, setOrderName] = useState("");
  const [orderPrice, setOrderPrice] = useState("");
  const [footerOff, setFooterOff] = useState(false);
  const [isActive, setActive] = useState(true);
  
  async function addItem(item, quantity) {
    const foundProdIndex = addToCarrito.findIndex(
      (product) => product.item.id === item.id
    );

    if (foundProdIndex === -1) {
      setAddToCarrito([...addToCarrito, { item, quantity }]);
    }

    if (quantity === 0) {
      setAddToCarrito([...addToCarrito]);
    }
  }

  const totalPrice = addToCarrito
    .map((product) => {
      return product.item.price * product.quantity;
    })
    .reduce((item, qty) => item + qty, 0);

  const fundamentalDataProduct = addToCarrito.map((product) => {
    return {
      id: product.item.id,
      title: product.item.name,
      price: product.item.price,
      quantity: product.quantity,
    };
  });

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
          openModal,
          setOpenModal,
          totalPrice,
          fundamentalDataProduct,
          orderId,
          setOrderId,
          orderName,
          setOrderName,
          orderPrice,
          setOrderPrice,
          footerOff,
          setFooterOff,
          isActive,
          setActive
       
        }}
      >
        {children}
      </CarritoContext.Provider>
    </>
  );
}
