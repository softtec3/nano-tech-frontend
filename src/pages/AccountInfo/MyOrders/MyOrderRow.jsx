import React from "react";
import { Link } from "react-router";

const MyOrderRow = ({ order = {} }) => {
  return (
    <tr>
      <td>#{order?.id}</td>
      <td>{order?.created_at}</td>
      <td style={{ textTransform: "capitalize", fontWeight: "500" }}>
        {order?.order_status}
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
