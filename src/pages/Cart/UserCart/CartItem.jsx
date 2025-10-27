import React, { useEffect, useState } from "react";
import useLang from "../../../hooks/useLang";
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart, FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
// import useCart from "../../../hooks/useCart";
const CartItem = ({ item = {}, deleteCartItem, handleCalculation }) => {
  const { isBangla } = useLang();
  //   const { cartItems } = useCart();
  const [numberOfProduct, setNumberOfProduct] = useState(item?.quantity);
  const [itemPrice, setItemPrice] = useState(item?.price * item?.quantity);
  // increment quantity and price
  const handleIncrement = () => {
    setNumberOfProduct((item.quantity += 1));
    handleCalculation();
  };
  // decrement quantity and price
  const handleDecrement = () => {
    setNumberOfProduct((item.quantity -= 1));
    handleCalculation();
  };
  //   update price
  useEffect(() => {
    setItemPrice(item?.price * numberOfProduct);
  }, [numberOfProduct, item?.price]);
  return (
    <div className="userCartItem">
      <div className="userCartItemTop">
        <div className="uciLeft">
          <IoLocationSharp size={20} />
          <b>{isBangla ? "ন্যানো-টেক" : "Nano-Tech"}</b>
          {isBangla ? "সফটওয়্যার পার্ক, যশোর" : "Software Park, Jashore"}
        </div>
        <div className="uciRight">
          {isBangla
            ? `ডেলিভারি চার্জ ৳${item?.delivery_charge}`
            : `Delivery Charge: ৳${item?.delivery_charge}`}
        </div>
      </div>
      <div className="userCartItemBottom">
        <div className="img-desc">
          <img
            src={`${import.meta.env.VITE_API_MAIN}/${item?.product_image}`}
            alt="product Image"
          />
          <p>{item?.product_name}</p>
        </div>
        <div className="pqaContainer">
          <div className="price-quantity">
            <div className="quantityContainer">
              <button
                disabled={item?.quantity == 1}
                className="increment"
                onClick={handleDecrement}
              >
                <FaMinus />
              </button>
              <span>{numberOfProduct}</span>
              <button
                disabled={item?.quantity == item?.available_quantity}
                className="decrement"
                onClick={handleIncrement}
              >
                <FaPlus />
              </button>
            </div>
            <span>৳{itemPrice}</span>
          </div>
          <div className="actions">
            <span onClick={() => deleteCartItem(item?.product_id)}>
              <FaTrash />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
