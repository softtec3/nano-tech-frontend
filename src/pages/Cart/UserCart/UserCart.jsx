import React, { useCallback, useEffect, useState } from "react";
import "./UserCart.css";
import Navigation from "../../../components/Navigation/Navigation";

import useCart from "../../../hooks/useCart";
import useLang from "../../../hooks/useLang";
import toast from "react-hot-toast";
import useUser from "../../../hooks/useUser";
import { getFormData } from "../../../utils/getFormData";
import { FaEdit } from "react-icons/fa";
import CartItem from "./CartItem";
import { handleBkashPayment } from "../../../utils/handleBkashPayment";
// import { useNavigate } from "react-router";
const UserCart = () => {
  const { user } = useUser();
  // const navigate = useNavigate();
  // user info
  const [userInfo, setUserInfo] = useState({});
  const { cartItems, setCartItems } = useCart();
  const [isShow, setIsShow] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [termsAccept, setTermsAccept] = useState(false);
  const { isBangla } = useLang();
  const [subTotal, setSubTotal] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [payable, setPayable] = useState(0);
  const [paymentType, setPaymentType] = useState("");
  // const [pickupType, setPickupType] = useState("home_delivery");
  const deleteCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.product_id !== id));
    toast.error(isBangla ? "কার্ট থেকে সরানো হয়েছে" : "Cart Item Deleted");
    handleCalculation();
  };
  // handle save address
  const handleAddress = (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    try {
      fetch(
        `${
          import.meta.env.VITE_API
        }/update_user_address_information.php?user_id=${user?.user_id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            toast.success(data?.message);
            checkAvailability();
            getUserInfo();
            setIsShow(false);
          } else {
            toast.error(
              isBangla ? "কিছু সমস্যা হয়েছে" : "Something went wrong"
            );
            console.log(data?.message);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error.message);
    }
  };
  // get user info function
  const getUserInfo = useCallback(() => {
    try {
      fetch(
        `${import.meta.env.VITE_API}/get_user_information.php?user_id=${
          user?.user_id
        }`,
        { credentials: "include" }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setUserInfo(data?.data);
          } else {
            console.log(data?.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [user]);
  // fetching logged in user info from database
  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);
  // function for checking value
  const isEmpty = (value) => {
    if (value === null || value === undefined) return true;
    if (typeof value === "string" && value.trim().length === 0) return true;
    if (Array.isArray(value) && value.length === 0) return true;
    return false;
  };

  // Check all info available or not
  const checkAvailability = useCallback(() => {
    if (
      isEmpty(userInfo?.full_name) ||
      isEmpty(userInfo?.mobile_number) ||
      isEmpty(userInfo?.address_label) ||
      isEmpty(userInfo?.area) ||
      isEmpty(userInfo?.address) ||
      isEmpty(userInfo?.landmark)
    ) {
      setIsAvailable(false);
    } else {
      setIsAvailable(true);
    }
  }, [userInfo]);
  useEffect(() => {
    checkAvailability();
  }, [checkAvailability]);
  // handle checkout
  const handleCheckout = () => {
    if (isAvailable === false) {
      toast.error(isBangla ? "ঠিকানা পূরণ করুন" : "Please fill out address");
      return;
    }
    if (paymentType == "") {
      toast.error(
        isBangla ? "পেমেন্ট মেথড নির্বাচন করুন" : "Please select payment method"
      );
      return;
    }
    if (termsAccept === false) {
      toast.error(
        isBangla
          ? "টার্মস এন্ড কন্ডিশন একসেপ্ট করুন"
          : "Please accept terms and condition"
      );
      return;
    }

    const finalObject = {
      user_id: user?.user_id,
      user_name: user?.user_name,
      full_name: userInfo?.full_name,
      payment_method: paymentType,
      cart: cartItems,
    };
    try {
      fetch(`${import.meta.env.VITE_API}/create_customer_order.php`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalObject),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            toast.success(data?.message);
            console.log(data?.data);
            const orderId = data?.data?.insert_id;
            const totalAmount = data?.data?.total_amount;
            if (paymentType === "bkash") {
              handleBkashPayment(orderId, totalAmount, user.user_id);
            }
            setCartItems([]);
            // navigate to order page while successfully placed an order
            // navigate("/");
          } else {
            toast.error(
              isBangla ? "কিছু সমস্যা হয়েছে" : "Something went wrong"
            );
            console.log(data?.message);
          }
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
    // console.log(finalObject);
  };
  // handle Bkash payment

  // Count total
  const handleCalculation = useCallback(() => {
    const sub_total = cartItems.reduce((a, b) => {
      return a + b.price * b.quantity;
    }, 0);
    setSubTotal(sub_total);
    const total_delivery_charge = cartItems.reduce((a, b) => {
      return a + b.delivery_charge;
    }, 0);
    setDeliveryCharge(total_delivery_charge);
    setPayable(sub_total + total_delivery_charge);
  }, [cartItems]);
  useEffect(() => {
    handleCalculation();
  }, [handleCalculation]);
  return (
    <div id="userCart">
      <div className="userCartLeft">
        <Navigation
          links={[{ label: `${isBangla ? "হোম" : "Home"}`, href: "/" }]}
          title={`${isBangla ? "কার্ট" : "Cart"}`}
        />
        {/* address details */}
        {isAvailable ? (
          <div className="addressDetails">
            <div className="addressDetailsInner">
              <div className="addressDetailsInnerLeft">
                <p className="adilP1">Deliver to: {userInfo?.full_name}</p>
                <div className="adilP2">
                  <span className="addressLabel">
                    {userInfo?.address_label}
                  </span>
                  <p>
                    {userInfo?.mobile_number}, {userInfo?.address},{" "}
                    {userInfo?.area}, {userInfo?.landmark}
                  </p>
                </div>
              </div>
              <div className="addressDetailsInnerRight">
                <span
                  onClick={() => {
                    setIsAvailable(false);
                    setIsShow(true);
                  }}
                >
                  <FaEdit /> {isBangla ? "পরিবর্তন" : "Change"}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {isShow ? (
              <form onSubmit={handleAddress} className="customerAddressForm">
                {/* Address form */}
                <div className="flexInput">
                  <div className="addFormElm">
                    <label htmlFor="Name">{isBangla ? "নাম*" : "Name*"}</label>
                    <input
                      type="text"
                      name="full_name"
                      defaultValue={userInfo?.full_name}
                      required
                      placeholder={
                        isBangla ? "আপনার নাম দিন" : "Input Your Name"
                      }
                    />
                  </div>
                  <div className="addFormElm">
                    <label htmlFor="mobile">
                      {isBangla ? "মোবাইল নাম্বার" : "Mobile Number*"}
                    </label>
                    <input
                      type="text"
                      name="mobile_number"
                      defaultValue={userInfo?.mobile_number}
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
                    <select
                      name="address_label"
                      required
                      defaultValue={userInfo?.address_label}
                    >
                      <option value="home">{isBangla ? "হোম" : "Home"}</option>
                      <option value="office">
                        {isBangla ? "অফিস" : "Office"}
                      </option>
                      <option value="other">
                        {isBangla ? "অন্যান্য" : "Other"}
                      </option>
                    </select>
                  </div>
                  <div className="addFormElm">
                    <label htmlFor="area">
                      {isBangla ? "এরিয়া*" : "Area*"}
                    </label>
                    <input
                      type="text"
                      name="area"
                      defaultValue={userInfo?.area}
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
                      defaultValue={userInfo?.address}
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
                      name="landmark"
                      defaultValue={userInfo?.landmark}
                      required
                      placeholder={
                        isBangla
                          ? "আপনার ল্যান্ডমার্ক দিন"
                          : "Input Your Landmark"
                      }
                    />
                  </div>
                </div>
                {/* <div className="defaultAddress">
              <h6>{isBangla ? "ডিফল্ট ঠিকানা" : "Default Address"}</h6>
              <label>
                <input type="checkbox" />
                {isBangla ? "ডিফল্ট শিপিং ঠিকানা" : "Default Shipping Address"}
              </label>
              <label>
                <input type="checkbox" />
                {isBangla ? "ডিফল্ট বিলিং ঠিকানা" : "Default Billing Address"}
              </label>
            </div> */}
                <div className="formActionsButtons">
                  <button
                    type="button"
                    onClick={() => {
                      setIsShow(false);
                      checkAvailability();
                    }}
                  >
                    {isBangla ? "বাতিল" : "Cancel"}
                  </button>
                  <button type="submit">
                    {isBangla ? "ঠিকানা সেভ করুন" : "Save Address"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="addressButtons">
                <button onClick={() => setIsShow(true)}>
                  {isBangla
                    ? "ডেলিভারি ঠিকানা নির্বাচন করুন"
                    : "Select Delivery Address"}
                </button>
                {/* <button onClick={() => setIsShow(true)}>
              {isBangla
                ? "বিলিং ঠিকানা নির্বাচন করুন"
                : "Select Billing Address"}
            </button> */}
              </div>
            )}
          </div>
        )}

        <div className="userCartItems">
          {cartItems?.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              deleteCartItem={deleteCartItem}
              handleCalculation={handleCalculation}
            />
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
          <div></div>
          <div className="paymentMethodsImages">
            <div
              onClick={() => setPaymentType("COD")}
              className={`${paymentType === "COD" ? "selectedMethod" : ""}`}
            >
              <img src="/cod.png" alt="" />
            </div>
            <div
              onClick={() => setPaymentType("bkash")}
              className={`${paymentType === "bkash" ? "selectedMethod" : ""}`}
            >
              <img src="/bkash.png" alt="" />
            </div>

            {/* <div>
              <img src="/visa.png" alt="" />
            </div>
            <div>
              <img src="/mastercard.png" alt="" />
            </div> */}
          </div>
        </div>
        {/* pickup type */}
        {/* <div className="orderSummary pickupType">
          <label htmlFor="pickup_home">
            <input
              type="radio"
              id="pickup_home"
              name="pickup_type"
              value="home_delivery"
            />
            Home delivery
          </label>
          <label htmlFor="pickup_sales_point">
            <input
              type="radio"
              id="pickup_sales_point"
              name="pickup_type"
              value="sales_point"
            />
            Pickup from sales point
          </label>
        </div> */}
        <div className="orderSummary">
          <h5 style={{ marginBottom: "10px" }}>
            {isBangla ? "অর্ডারের সারাংশ" : "Order Summary"}
          </h5>
          <div>
            <span>{isBangla ? "সাব-টোটাল" : "Subtotal"}</span>
            <span> ৳{subTotal}</span>
          </div>

          <div>
            <span>{isBangla ? "ডেলিভারি চার্জ" : "Delivery Charge"} </span>{" "}
            <span>৳{deliveryCharge}</span>
          </div>

          {/* <div>
            <span>{isBangla ? "ডিস্কাউন্ট" : "Discount"}</span>
            <span> ৳10,040</span>
          </div> */}

          <hr />
          <div style={{ fontWeight: "bold" }}>
            <span>{isBangla ? "প্রদেয়" : "Payable"}</span>
            <span> ৳{payable}</span>
          </div>
          <div className="termsCheck">
            <input
              type="checkbox"
              name="check"
              required
              onChange={() => setTermsAccept(!termsAccept)}
            />
            <span>
              {isBangla
                ? "আমি নিয়ম ও শর্তাবলী পড়েছি এবং তাতে সম্মত হয়েছি*"
                : "I have read and agreed to the Terms and Conditions*"}
            </span>
          </div>
          <button
            disabled={cartItems?.length <= 0 ? true : false}
            onClick={handleCheckout}
          >
            {isBangla ? "চেকআউট করতে এগিয়ে যান" : "Proceed To Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
