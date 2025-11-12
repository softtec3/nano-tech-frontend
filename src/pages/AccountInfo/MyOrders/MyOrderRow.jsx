import React from "react";
import { Link } from "react-router";
import useUser from "../../../hooks/useUser";
import { handleBkashPayment } from "../../../utils/handleBkashPayment";

const MyOrderRow = ({ order = {} }) => {
  const { user } = useUser();
  const handlePayment = (order_id, total_amount, user_id) => {
    handleBkashPayment(order_id, total_amount, user_id);
  };
  return (
    <tr>
      <td>#{order?.id}</td>
      <td>{order?.created_at}</td>
      <td style={{ textTransform: "capitalize", fontWeight: "500" }}>
        {order?.order_status}
      </td>
      <td style={{ textTransform: "capitalize", fontWeight: "500" }}>
        {order?.payment_method}
      </td>
      <td style={{ textTransform: "capitalize", fontWeight: "500" }}>
        {order?.payment_status}
        {order?.payment_status === "pending" &&
          order?.payment_method !== "COD" && (
            <button
              className="payNowBtn"
              onClick={() =>
                handlePayment(order.id, order?.total_amount, user.user_id)
              }
            >
              Pay Now
            </button>
          )}
      </td>
      <td>{order?.total_amount} TK</td>
      <td>
        <Link to={`${order?.id}`} className="viewBtn">
          View
        </Link>
      </td>
    </tr>
  );
};

export default MyOrderRow;
