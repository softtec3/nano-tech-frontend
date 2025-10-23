import React from "react";
import "./ProductsSectionOne.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductCard from "../../../components/ProductCard/ProductCard";
// const products = [
//   {
//     id: 1,
//     name: "Walton No-Frost Refrigerator 660L",
//     bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
//     model: "WNR-6F0-SCRC-CO",
//     image:
//       "https://cdn.waltonplaza.com.bd/98443f37-4b1a-4cb9-ad9b-f36d26b949c9.jpeg",
//     price: 18000,
//     discountPrice: 16200,
//     bn_price: "১৮০০০",
//     bn_discount_price: "১৬২০০",
//   },
//   {
//     id: 2,
//     name: "Walton No-Frost Refrigerator 660L",
//     bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
//     model: "WNR-6F0-SCRC-CO",
//     image:
//       "https://cdn.waltonplaza.com.bd/efaad78d-5e27-4c2a-9472-48258ae7c03b.jpeg",
//     price: 18000,
//     discountPrice: 16200,
//     bn_price: "১৮০০০",
//     bn_discount_price: "১৬২০০",
//   },
//   {
//     id: 3,
//     name: "Walton No-Frost Refrigerator 660L",
//     bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
//     model: "WNR-6F0-SCRC-CO",
//     image:
//       "https://cdn.waltonplaza.com.bd/c4c77c95-5a07-4085-ae37-8ad66740675f.jpeg",
//     price: 18000,
//     discountPrice: 16200,
//     bn_price: "১৮০০০",
//     bn_discount_price: "১৬২০০",
//   },

//   {
//     id: 5,
//     name: "Walton No-Frost Refrigerator 660L",
//     bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
//     model: "WNR-6F0-SCRC-CO",
//     image:
//       "https://cdn.waltonplaza.com.bd/ff71a261-8310-4733-8a81-6fb5abc58ea4.png",
//     price: 18000,
//     discountPrice: 16200,
//     bn_price: "১৮০০০",
//     bn_discount_price: "১৬২০০",
//   },
// ];
const ProductsSectionOne = ({ productSectionOneProducts }) => {
  return (
    <section id="productSectionOne">
      <SectionTitle title={"Delivery in 24 Hours"} />
      <div className="productsContainer">
        {productSectionOneProducts &&
          productSectionOneProducts?.length > 0 &&
          productSectionOneProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default ProductsSectionOne;
