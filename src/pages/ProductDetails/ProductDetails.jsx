import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import Container from "../../components/Container/Container";
import ProductDetailsMain from "./ProductDetailsMain/ProductDetailsMain";
import ProductInDetail from "./ProductInDetail/ProductInDetail";
import Navigation from "../../components/Navigation/Navigation";
import { useParams } from "react-router";
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
      "https://cdn.waltonplaza.com.bd/5a64a3ed-0b43-406c-a288-ae1883d4b200.jpeg",
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
      "https://cdn.waltonplaza.com.bd/abe5a83f-48f0-4168-bebf-5412328d41f2.jpeg",
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
      "https://cdn.waltonplaza.com.bd/e67a5eba-6949-4ea1-b523-4b426761b513.png",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },

  {
    id: 9,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/61001ad4-5adf-4820-9d9d-bd5e0c589104.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 10,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/3f89abf5-17c8-4537-8fd7-c138051f3016.png",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 11,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/f155ddbb-a08c-42ca-baee-17807826ccc7.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 12,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/95e48ba2-04c2-4e60-85d6-eff32863413b.png",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },

  {
    id: 13,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/9f7bc87f-3613-4818-9d8c-d482430d2ad0.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 14,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/8d17aa27-2438-4548-b651-a33a6516d6af.png",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 15,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/8ddb00d6-b898-4263-868e-2ddd2485ca73.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
  {
    id: 16,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/681541f7-f986-4d4b-bd8f-78b857341f0f.png",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },

  {
    id: 17,
    name: "Walton No-Frost Refrigerator 660L",
    bn_name: "ওয়ালটন নো-ফ্রস্ট রেফ্রিজারেটর ৬৬০ লিটার",
    model: "WNR-6F0-SCRC-CO",
    image:
      "https://cdn.waltonplaza.com.bd/a19c15a6-60a9-4b0a-956d-04d12761609e.jpeg",
    price: 18000,
    discountPrice: 16200,
    bn_price: "১৮০০০",
    bn_discount_price: "১৬২০০",
  },
];
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const filteredProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(filteredProduct);
  }, [id]);
  return (
    <Container>
      <section id="productDetails">
        {/* Nav */}
        <Navigation
          title={"Walton Inverter AC 1.5 Ton"}
          links={[
            { label: "Home", href: "/" },
            { label: "Air Conditioner", href: "/" },
            { label: "Split AC", href: "/" },
          ]}
        />
        {/* Product Details main/intro */}
        <ProductDetailsMain product={product} />
      </section>
    </Container>
  );
};

export default ProductDetails;
