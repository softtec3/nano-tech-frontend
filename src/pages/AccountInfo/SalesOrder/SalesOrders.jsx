import React, { useEffect, useState } from "react";
import "./myOrders.css";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import useUser from "../../../hooks/useUser";
import useLang from "../../../hooks/useLang";
import SalesOrderRow from "./SalesOrderRow";
const SalesOrders = () => {
  const { user } = useUser();
  const { isBangla } = useLang();
  const [orders, setOrders] = useState([]);

  // fetching orders from database
  useEffect(() => {
    try {
      fetch(
        `${
          import.meta.env.VITE_API
        }/get_orders_by_sales_point_id.php?sales_point_id=${
          user.sales_point_id
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
          {isBangla ? "সেলস অর্ডার সমূহ" : "Sales Orders"}
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
              <th>Paid Amount</th>
              <th>Due Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders?.length > 0 &&
              orders?.map((order) => (
                <SalesOrderRow key={order?.id} order={order} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesOrders;
