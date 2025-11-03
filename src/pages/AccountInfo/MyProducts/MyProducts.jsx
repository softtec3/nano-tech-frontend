import React, { useEffect, useState } from "react";
import "./myProducts.css";
import AccountInfoNavigation from "../../../components/AccountInfoNavigation/AccountInfoNavigation";
import MyProductRow from "./myProductRow";
import useUser from "../../../hooks/useUser";
const MyProducts = () => {
  const { user } = useUser();
  const [products, setProducts] = useState([]);
  //   fetching products summary
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_API
      }/all_products_summary_of_sales_point.php?sales_point_id=${
        user.sales_point_id
      }`,
      { credentials: "include" }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setProducts(data?.data);
        } else {
          console.log(data?.message);
        }
      })
      .catch((error) => console.log(error.message));
  }, [user]);
  return (
    <section id="myProducts">
      <AccountInfoNavigation
        banglaName={"আমার পণ্যসমূহ"}
        englishName={"My products"}
      />
      <div className="orderTable">
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Assign Quantity</th>
              <th>Current Quantity</th>
              <th>Available Ids</th>
              <th>Assign Date</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.length > 0 &&
              products.map((product) => (
                <MyProductRow
                  key={product?.id}
                  product={product}
                  salesPointId={user.sales_point_id}
                />
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyProducts;
