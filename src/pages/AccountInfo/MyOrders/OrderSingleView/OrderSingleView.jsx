import React, { useEffect, useState } from "react";
import "../myOrders.css";
import { Link, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import useUser from "../../../../hooks/useUser";
import useLang from "../../../../hooks/useLang";
const OrderSingleView = () => {
  const { user } = useUser();
  const { orderId } = useParams();
  const [orderItems, setOrderItems] = useState([]);
  const { isBangla } = useLang();
  //   fetching order items
  useEffect(() => {
    try {
      fetch(
        `${
          import.meta.env.VITE_API
        }/get_orders_items_details.php?order_id=${orderId}&user_id=${
          user?.user_id
        }`,
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
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Delivery Charge</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orderItems &&
              orderItems?.length > 0 &&
              orderItems?.map((item) => (
                <tr key={item?.id}>
                  <td>#{item?.order_id}</td>
                  <td>
                    <img
                      src={`${import.meta.env.VITE_API_MAIN}/${
                        item?.product_img
                      }`}
                      style={{
                        width: "100px",
                        height: "50px",
                        objectFit: "contain",
                      }}
                      alt=""
                    />
                  </td>
                  <td>{item?.product_name}</td>
                  <td>{item?.quantity}</td>
                  <td>{item?.price} TK</td>
                  <td>{item?.delivery_charge} TK</td>
                  <td>
                    {item?.price * item?.quantity + item?.delivery_charge} TK
                  </td>
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
    </div>
  );
};

export default OrderSingleView;
