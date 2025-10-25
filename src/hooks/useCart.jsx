import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext/CartContext";

const useCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  console.log(cartItems);
  return { cartItems, setCartItems };
};

export default useCart;
