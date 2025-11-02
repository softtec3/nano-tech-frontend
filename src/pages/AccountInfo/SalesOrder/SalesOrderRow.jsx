import React from "react";
import { Link } from "react-router";

const SalesOrderRow = ({ order = {} }) => {
  return (
    <tr>
      <td>#{order?.id}</td>
      <td>{order?.created_at}</td>

      <td>{order?.total_payable_amount} TK</td>
      <td>{order?.total_due_amount} TK</td>
      <td>
        <Link to={`${order?.id}`} className="viewBtn">
          View
        </Link>
      </td>
    </tr>
  );
};

export default SalesOrderRow;
