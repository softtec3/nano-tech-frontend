import React, { useEffect, useState } from "react";
import "./salesShop.css";
import useUser from "../../hooks/useUser";
import useLang from "../../hooks/useLang";
import ProductCard from "../../components/ProductCard/ProductCard";
const SalesShop = () => {
  const { user } = useUser();
  const { lang } = useLang();
  const [products, setProducts] = useState([]);
  //   getting all products from database
  useEffect(() => {
    try {
      try {
        fetch(
          `${
            import.meta.env.VITE_API
          }/all_products_of_sales_point.php?sales_point_id=${
            user.sales_point_id
          }&lang=${lang}`,
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
      } catch (error) {
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [lang, user]);
  console.log(products);
  return (
    <section id="salesShop">
      <h3>Sales Point Shop</h3>
      <div className="productsContainer">
        {products &&
          products?.length > 0 &&
          products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default SalesShop;
