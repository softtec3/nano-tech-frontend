import React from "react";
import "./Trending.css";
import SmallProductCard from "../../../components/SmallProductCard/SmallProductCard";
import Categories from "../../../components/Categories/Categories";
// These products details will come from database
const products = [
  {
    id: 1,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/98443f37-4b1a-4cb9-ad9b-f36d26b949c9.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 2,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/efaad78d-5e27-4c2a-9472-48258ae7c03b.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 3,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/c4c77c95-5a07-4085-ae37-8ad66740675f.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 4,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/bb1229b3-4f2d-4e2b-b298-ca04282579ab.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 5,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/ff71a261-8310-4733-8a81-6fb5abc58ea4.png",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 6,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/abe5a83f-48f0-4168-bebf-5412328d41f2.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 7,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/59c86501-7f4b-4e35-a060-c38185cc5da8.png",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 8,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/948fe135-e00f-4390-9f04-bf5043042d8e.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
];
const Trending = () => {
  return (
    <section id="trending">
      <Categories />
      {/* all trending products */}
      <div className="trendingProducts">
        {products?.map((product) => (
          <SmallProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
