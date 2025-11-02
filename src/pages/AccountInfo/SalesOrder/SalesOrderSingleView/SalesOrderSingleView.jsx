import React, { useEffect, useState } from "react";
import "../myOrders.css";
import { Link, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import useUser from "../../../../hooks/useUser";
import useLang from "../../../../hooks/useLang";
import toast from "react-hot-toast";
const SalesOrderSingleView = () => {
  const { user } = useUser();
  const { orderId } = useParams();
  const [orderItems, setOrderItems] = useState([]);
  const [customerDetails, setCustomerDetails] = useState([]);
  const { isBangla } = useLang();
  //   fetching order items
  useEffect(() => {
    try {
      fetch(
        `${
          import.meta.env.VITE_API
        }/get_sales_point_order_items_details.php?sales_point_id=${
          user.sales_point_id
        }&order_id=${orderId}`,
        { credentials: "include" }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setOrderItems(data?.data);
          } else {
            console.log(data?.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [orderId, user]);
  // fetching customer details
  useEffect(() => {
    try {
      fetch(
        `${
          import.meta.env.VITE_API
        }/get_customer_details_of_sales_point_order.php?order_id=${orderId}&sales_point_id=${
          user.sales_point_id
        }`,
        {
          credentials: "include",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setCustomerDetails(data?.data);
          } else {
            toast.error("Something went wrong");
            console.log(data?.message);
          }
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }, [user, orderId]);
  return (
    <div id="myOrders">
      <div className="accountInfoTopNav">
        <div>
          <Link to={-1} style={{ display: "flex", alignItems: "center" }}>
            <FaArrowLeft size={25} style={{ cursor: "pointer" }} />
          </Link>
          {isBangla
            ? `অর্ডারের বিবরণঃ #${orderId} `
            : `Order Details of #${orderId}`}
        </div>
        <Link to={"/"}>
          <FaHome size={25} />
        </Link>
      </div>
      <div className="orderTable">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product ID</th>
              <th>Barcode</th>
              <th>Payment Type</th>
              <th>Main Price</th>
              <th>Discount</th>
              <th>Paid Amount</th>
            </tr>
          </thead>
          <tbody>
            {orderItems &&
              orderItems?.length > 0 &&
              orderItems?.map((item) => (
                <tr key={item?.id}>
                  <td>#{item?.order_id}</td>
                  <td>{item?.product_id}</td>
                  <td>{item?.selected_id}</td>
                  <td style={{ textTransform: "capitalize" }}>
                    {item?.payment_type}
                  </td>
                  <td>{item?.price} TK</td>
                  <td>{item?.discount_amount} TK</td>
                  <td>{item?.payable_amount} TK</td>
                </tr>
              ))}
            {orderItems?.length <= 0 && (
              <tr>
                <td colSpan={12}>No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="orderTable">
        <h5>Customer Details</h5>
        <div className="customerDetailsContainer">
          <div className="customerDetailsLeft">
            <img
              className="cusImage"
              src={`${import.meta.env.VITE_API_MAIN}/${
                customerDetails?.customer_photo ?? ""
              }`}
              alt=""
            />
            <p>
              <b>Name:</b> {customerDetails?.customer_name ?? ""}
            </p>
            <p>
              <b>Mobile:</b> {customerDetails?.customer_mobile ?? ""}
            </p>
            <p>
              <b>Address:</b> {customerDetails?.customer_address ?? ""}
            </p>
            <p>
              <b>Check No:</b> {customerDetails?.customer_check_no ?? ""}
            </p>
            <div className="nidBox">
              <img
                className="checkImage"
                src={`${import.meta.env.VITE_API_MAIN}/${
                  customerDetails?.customer_filled_check_photo ?? ""
                }`}
                alt=""
              />
            </div>
            <div className="nidBox">
              <img
                src={`${import.meta.env.VITE_API_MAIN}/${
                  customerDetails?.customer_nid_front ?? ""
                }`}
                alt=""
              />

              <img
                src={`${import.meta.env.VITE_API_MAIN}/${
                  customerDetails?.customer_nid_back ?? ""
                }`}
                alt=""
              />
            </div>
          </div>
          <div className="customerDetailsRight">
            <img
              className="cusImage"
              src={`${import.meta.env.VITE_API_MAIN}/${
                customerDetails?.guarantor_photo ?? ""
              }`}
              alt=""
            />
            <p>
              <b>Name:</b> {customerDetails?.guarantor_name ?? ""}
            </p>
            <p>
              <b>Mobile:</b> {customerDetails?.guarantor_mobile ?? ""}
            </p>
            <div className="nidBox">
              <img
                src={`${import.meta.env.VITE_API_MAIN}/${
                  customerDetails?.guarantor_nid_front ?? ""
                }`}
                alt=""
              />

              <img
                src={`${import.meta.env.VITE_API_MAIN}/${
                  customerDetails?.guarantor_nid_back ?? ""
                }`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOrderSingleView;
