import React, { useEffect, useState } from "react";

const MyProductRow = ({ product = {}, salesPointId = 0 }) => {
  const [assignIds, setAssignIds] = useState([]);
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_API
      }/all_products_ids_by_sales_point.php?sales_point_id=${salesPointId}&product_id=${
        product.product_id
      }`,
      { credentials: "include" }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setAssignIds(data?.data);
        } else {
          console.log(data?.message);
        }
      })
      .catch((error) => console.log(error));
  }, [salesPointId, product]);
  return (
    <tr>
      <td>#{product?.product_id}</td>
      <td>
        <img
          className="productImage"
          src={`${import.meta.env.VITE_API_MAIN}/${product?.product_image}`}
          alt=""
        />
      </td>
      <td>{product?.product_name}</td>
      <td>{product?.assign_products_quantity}</td>
      <td>{product?.current_quantity}</td>
      <td>
        <select name="ids" id="">
          {assignIds &&
            assignIds?.length > 0 &&
            assignIds.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
        </select>
      </td>
      <td>{product?.assign_date}</td>
    </tr>
  );
};

export default MyProductRow;
