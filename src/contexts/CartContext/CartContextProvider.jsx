import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext value={{ cartItems, setCartItems }}>{children}</CartContext>
  );
};

export default CartContextProvider;
