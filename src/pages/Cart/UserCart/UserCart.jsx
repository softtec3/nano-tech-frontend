import React, { useState } from "react";
import "./UserCart.css";
import Navigation from "../../../components/Navigation/Navigation";
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart, FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useLang from "../../../hooks/useLang";
import toast from "react-hot-toast";
const UserCart = () => {
  const { cartItems, setCartItems } = useCart();
  const [isShow, setIsShow] = useState(false);
  const { isBangla } = useLang();
  const deleteCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.error("Cart Item Deleted");
  };
  return (
    <div id="userCart">
      <div className="userCartLeft">
        <Navigation
          links={[{ label: `${isBangla ? "হোম" : "Home"}`, href: "/" }]}
          title={`${isBangla ? "কার্ট" : "Cart"}`}
        />
        {/* address details */}
        {isShow ? (
          <form className="customerAddressForm">
            {/* Address form */}
            <div className="flexInput">
              <div className="addFormElm">
                <label htmlFor="Name">{isBangla ? "নাম*" : "Name*"}</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={isBangla ? "আপনার নাম দিন" : "Input Your Name"}
                />
              </div>
              <div className="addFormElm">
                <label htmlFor="mobile">
                  {isBangla ? "মোবাইল নাম্বার" : "Mobile Number*"}
                </label>
                <input
                  type="text"
                  name="mobile"
                  required
                  placeholder={
                    isBangla ? "সঠিক নাম্বার দিন" : "Input Valid Number"
                  }
                />
              </div>
            </div>
            <div className="flexInput">
              <div className="addFormElm">
                <label htmlFor="addressLabel">
                  {isBangla ? "ঠিকানা লেবেল" : "Address Label*"}
                </label>
                <select name="addressLabel" id="">
                  <option value="home">{isBangla ? "হোম" : "Home"}</option>
                  <option value="office">{isBangla ? "অফিস" : "Office"}</option>
                  <option value="other">
                    {isBangla ? "অন্যান্য" : "Other"}
                  </option>
                </select>
              </div>
              <div className="addFormElm">
                <label htmlFor="area">{isBangla ? "এরিয়া*" : "Area*"}</label>
                <input
                  type="text"
                  name="area"
                  required
                  placeholder={isBangla ? "এরিয়া লিখুন" : "Input Your Area"}
                />
              </div>
            </div>
            <div className="flexInput">
              <div className="addFormElm">
                <label htmlFor="address">
                  {isBangla ? "ঠিকানা*" : "Address*"}
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder={
                    isBangla ? "আপনার ঠিকানা দিন" : "Input Your Address"
                  }
                />
              </div>
              <div className="addFormElm">
                <label htmlFor="Landmark">
                  {isBangla ? "ল্যান্ডমার্ক*" : "Landmark*"}
                </label>
                <input
                  type="text"
                  name="Landmark"
                  required
                  placeholder={
                    isBangla ? "আপনার ল্যান্ডমার্ক দিন" : "Input Your Landmark"
                  }
                />
              </div>
            </div>
            <div className="defaultAddress">
              <h6>{isBangla ? "ডিফল্ট ঠিকানা" : "Default Address"}</h6>
              <label>
                <input type="checkbox" />
                {isBangla ? "ডিফল্ট শিপিং ঠিকানা" : "Default Shipping Address"}
              </label>
              <label>
                <input type="checkbox" />
                {isBangla ? "ডিফল্ট বিলিং ঠিকানা" : "Default Billing Address"}
              </label>
            </div>
            <div className="formActionsButtons">
              <button type="button" onClick={() => setIsShow(false)}>
                {isBangla ? "বাতিল" : "Cancel"}
              </button>
              <button>{isBangla ? "ঠিকানা সেভ করুন" : "Save Address"}</button>
            </div>
          </form>
        ) : (
          <div className="addressButtons">
            <button onClick={() => setIsShow(true)}>
              {isBangla
                ? "ডেলিভারি ঠিকানা নির্বাচন করুন"
                : "Select Delivery Address"}
            </button>
            <button onClick={() => setIsShow(true)}>
              {isBangla
                ? "বিলিং ঠিকানা নির্বাচন করুন"
                : "Select Billing Address"}
            </button>
          </div>
        )}

        <div className="userCartItems">
          {cartItems?.map((item, index) => (
            <div className="userCartItem">
              <div className="userCartItemTop" key={index}>
                <div className="uciLeft">
                  <IoLocationSharp size={20} />{" "}
                  <b>{isBangla ? "ন্যানো-টেক" : "Nano-Tech"}</b>{" "}
                  {isBangla
                    ? "সফটওয়্যার পার্ক, যশোর"
                    : "Software Park, Jashore"}
                </div>
                <div className="uciRight">
                  {isBangla
                    ? "ডেলিভারি চার্জ ৳১২০০"
                    : "Delivery Charge: ৳1,200"}
                </div>
              </div>
              <div className="userCartItemBottom">
                <div className="img-desc">
                  <img src={item?.image} alt="product Image" />
                  <p>{isBangla ? item?.bn_name : item?.name}</p>
                </div>
                <div className="pqaContainer">
                  <div className="price-quantity">
                    <div className="quantityContainer">
                      <span className="increment">
                        <FaMinus />
                      </span>
                      <span>1</span>
                      <span className="decrement">
                        <FaPlus />
                      </span>
                    </div>
                    <span>৳{isBangla ? item?.bn_price : item?.price}</span>
                  </div>
                  <div className="actions">
                    <span onClick={() => deleteCartItem(item?.id)}>
                      <FaTrash />
                    </span>
                    <span>
                      <FaHeart />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="userCartRight">
        <div className="paymentMethods">
          <div className="paymentMethodsTop">
            <img src="/credit-card.gif" alt="credit card" />
            <h6>
              {isBangla
                ? "পেমেন্ট মেথড নির্বাচন করুন"
                : "Select a payment method"}
            </h6>
          </div>
          <div className="paymentMethodsImages">
            <div>
              <img src="/bkash.png" alt="" />
            </div>
            <div>
              <img src="/nagad.png" alt="" />
            </div>
            <div>
              <img src="/visa.png" alt="" />
            </div>
            <div>
              <img src="/mastercard.png" alt="" />
            </div>
          </div>
        </div>
        <div className="orderSummary">
          <h5 style={{ marginBottom: "10px" }}>
            {isBangla ? "অর্ডারের সারাংশ" : "Order Summary"}
          </h5>
          <div>
            <span>{isBangla ? "সাব-টোটাল" : "Subtotal"}</span>
            <span> ৳1,00,400</span>
          </div>

          <div>
            <span>{isBangla ? "ডেলিভারি চার্জ" : "Delivery Charge"} </span>{" "}
            <span>৳2,400</span>
          </div>

          <div>
            <span>{isBangla ? "ডিস্কাউন্ট" : "Discount"}</span>
            <span> ৳10,040</span>
          </div>

          <hr />
          <div style={{ fontWeight: "bold" }}>
            <span>{isBangla ? "প্রদেয়" : "Payable"}</span>
            <span> ৳92,760</span>
          </div>
          <div className="termsCheck">
            <input type="checkbox" name="check" />
            <span>
              {isBangla
                ? "আমি নিয়ম ও শর্তাবলী পড়েছি এবং তাতে সম্মত হয়েছি*"
                : "I have read and agreed to the Terms and Conditions*"}
            </span>
          </div>
          <button>
            {isBangla ? "চেকআউট করতে এগিয়ে যান" : "Proceed To Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
