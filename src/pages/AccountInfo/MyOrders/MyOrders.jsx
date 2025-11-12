import React, { useEffect, useState } from "react";
import "./myOrders.css";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import MyOrderRow from "./MyOrderRow";
import useUser from "../../../hooks/useUser";
import useLang from "../../../hooks/useLang";
const MyOrders = () => {
  const { user } = useUser();
  const { isBangla } = useLang();
  const [orders, setOrders] = useState([]);

  // fetching orders from database
  useEffect(() => {
    try {
      fetch(
        `${import.meta.env.VITE_API}/get_orders_by_user_id.php?user_id=${
          user.user_id
        }`,
        {
          credentials: "include",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setOrders(data?.data);
          } else {
            console.log(data?.message);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [user]);
  console.log(orders);
  return (
    <div id="myOrders">
      <div className="accountInfoTopNav">
        <div>
          <Link to={-1} style={{ display: "flex", alignItems: "center" }}>
            <FaArrowLeft size={25} style={{ cursor: "pointer" }} />
          </Link>
          {isBangla ? "আমার অর্ডার সমূহ" : "My Orders"}
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
              <th>Date</th>
              <th>Order Status</th>
              <th>Payment Method</th>
              <th>Payment Status</th>
              <th>Total Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders?.length > 0 &&
              orders?.map((order) => (
                <MyOrderRow key={order?.id} order={order} />
              ))}
            {orders && orders?.length <= 0 && (
              <tr>
                <td colSpan={12}>No orders</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
