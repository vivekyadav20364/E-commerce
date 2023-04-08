import React, { createContext, useState } from "react";
import data from "../Data";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < data.length; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartitems, setcarditems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setcarditems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const remove = (itemId) => {
    setcarditems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updatechange = (newAmt, itemId) => {
    setcarditems((prev) => ({ ...prev, [itemId]: newAmt }));
  };
  const total = () => {
    let totalamt = 0;
    for (let items in cartitems) {
      if (cartitems[items] > 0) {
        let addeditem = data.find((product) => product.id === Number(items));
        totalamt += cartitems[items] * addeditem.price;
      }
    }
    return totalamt;
  };
  const contextValue = { cartitems, addToCart, remove, updatechange, total };
  console.log(cartitems);
  return (
    <>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </>
  );
};
export { ShopContextProvider };
