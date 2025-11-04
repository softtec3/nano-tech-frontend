import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import Container from "../../components/Container/Container";
import ProductDetailsMain from "./ProductDetailsMain/ProductDetailsMain";
import ProductInDetail from "./ProductInDetail/ProductInDetail";
import Navigation from "../../components/Navigation/Navigation";
import { useParams } from "react-router";
import useLang from "../../hooks/useLang";
const ProductDetails = () => {
  const { id } = useParams();
  const { lang } = useLang();
  const [product, setProduct] = useState({});
  const [productSpecification, setProductSpecification] = useState([]);

  // get specific product details
  useEffect(() => {
    try {
      fetch(
        `${
          import.meta.env.VITE_API
        }/get_product_by_id.php?product_id=${id}&lang=${lang}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setProduct(data?.data);
          } else {
            console.log(data?.message);
          }
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }, [id, lang]);
  // get specific product specification
  useEffect(() => {
    try {
      fetch(
        `${
          import.meta.env.VITE_API
        }/product_specification_by_id.php?product_id=${id}&lang=${lang}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setProductSpecification(data?.data);
          } else {
            console.log(data?.message);
          }
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }, [id, lang]);
  const navigate_links = product?.product_sub_category
    ? [
        { label: "Home", href: "/" },
        {
          label: `${product?.product_category}`,
          href: `/shop?category_id=${product?.product_category_id}&category=${product?.product_category}`,
        },

        {
          label: `${product?.product_sub_category}`,
          href: `/shop?category_id=${product?.product_category_id}&category=${product?.product_category}&sub_category_id=${product?.product_sub_category_id}&sub_category=${product?.product_sub_category}`,
        },
      ]
    : [
        { label: "Home", href: "/" },
        {
          label: `${product?.product_category}`,
          href: `/shop?category_id=${product?.product_category_id}&category=${product?.product_category}`,
        },
      ];
  return (
    <Container>
      <section id="productDetails">
        {/* Nav */}
        <Navigation title={product?.product_name} links={navigate_links} />
        {/* Product Details main/intro */}
        <ProductDetailsMain
          product={product}
          productSpecification={productSpecification}
        />
      </section>
    </Container>
  );
};

export default ProductDetails;
