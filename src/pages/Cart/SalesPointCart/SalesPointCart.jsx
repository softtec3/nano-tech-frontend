import React, { useEffect, useState } from "react";
import "./SalesPointCart.css";
import { Link } from "react-router";
import useCart from "../../../hooks/useCart";
import SingleCartItem from "./SingleCartItem";
import Navigation from "../../../components/Navigation/Navigation";
import useLang from "../../../hooks/useLang";

const SalesPointCart = () => {
  const { isBangla } = useLang();
  const { cartItems } = useCart();
  const [rawTotalProducts, setRawTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [dueAmount, setDueAmount] = useState(0);
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + Number(item?.payableAmount),
      0
    );
    console.log(total);
    setTotalPrice(total);
  }, [cartItems]);
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    setRawTotalProducts(total);
  }, [cartItems]);
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item?.discountAmount,
      0
    );
    console.log("discount", total);
    setDiscountAmount(total);
  }, [cartItems]);
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item?.dueAmount, 0);
    console.log("discount", total);
    setDueAmount(total);
  }, [cartItems]);

  return (
    <div id="cart">
      <Navigation
        links={[{ label: `${isBangla ? "হোম" : "Home"}`, href: "/" }]}
        title={`${isBangla ? "কার্ট" : "Cart"}`}
      />
      <div className="cartTop">
        <h3>{isBangla ? "কার্ট" : "Cart"}</h3>
        <p>
          {cartItems?.length} {isBangla ? "টি পণ্য" : "Items"}
        </p>
      </div>

      <div className="cartMain marginBottom">
        <table className="cartTable">
          <thead>
            <tr
              style={{
                position: "sticky",
                top: "0",
                left: "0",
              }}
            >
              <th>{isBangla ? "ছবি" : "Image"}</th>
              <th>{isBangla ? "দাম (টাকা)" : "Price (BDT)"}</th>
              <th>{isBangla ? "পণ্যের আইডি" : "Product ID"}</th>
              <th>{isBangla ? "পেমেন্টের ধরণ" : "Payment Type"}</th>
              <th>{isBangla ? "ছাড়" : "Discount"}</th>
              <th>{isBangla ? "প্রদেয়" : "Payable"}</th>
              <th>{isBangla ? "বাকি" : "Due"}</th>
              <th>{isBangla ? "একশন" : "Actions"}</th>
            </tr>
          </thead>
          <tbody>
            {cartItems
              ?.sort((a, b) => a.product_name.localeCompare(b.product_name))
              .map((cartItem) => (
                <SingleCartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                  rawTotalProducts={rawTotalProducts}
                />
              ))}
          </tbody>
        </table>
      </div>
      <>
        <div className="cartSummary">
          <table className="summaryTable">
            <tbody>
              <tr
                className="upperRow"
                style={{
                  backgroundColor: "var(---primaryColor)",
                  color: "white",
                }}
              >
                <th rowSpan={2} style={{ borderRight: "1px solid white" }}>
                  {isBangla ? "মোট" : "Total"}:
                </th>
                <th>{isBangla ? "সাব-টোটাল" : "Subtotal"}</th>
                <th>{isBangla ? "ডিস্কাউন্ট" : "Discount"}</th>
                <th>{isBangla ? "প্রদেয়" : "Payable"}</th>
                <th>{isBangla ? "বাকি" : "Due"}</th>
              </tr>
              <tr>
                <td>{rawTotalProducts}</td>
                <td>{isNaN(discountAmount) ? 0 : discountAmount}</td>
                <td>{isNaN(totalPrice) ? 0 : totalPrice}</td>
                <td>{isNaN(dueAmount) ? 0 : dueAmount}</td>
              </tr>
            </tbody>
          </table>
          <Link
            to={`${cartItems.length > 0 ? "/checkout" : "/cart"}`}
            className="btn"
            style={{
              margin: "0 auto",
            }}
          >
            {isBangla ? "বিক্রি করুন" : "Sell Now"}
          </Link>
        </div>
      </>
    </div>
  );
};

export default SalesPointCart;
