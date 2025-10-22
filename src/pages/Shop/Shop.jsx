import React, { useState } from "react";
import "./Shop.css";
import Container from "../../components/Container/Container";
import Navigation from "../../components/Navigation/Navigation";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import PriceRange from "./PriceRange/PriceRange";
import {
  FaArrowLeft,
  FaFilter,
  FaMagnifyingGlass,
  FaSliders,
  FaXmark,
} from "react-icons/fa6";
import { FaSortAmountUp } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { Link, useParams } from "react-router";
import useLang from "../../hooks/useLang";
import useCart from "../../hooks/useCart";
// these data will come from database
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
const Shop = () => {
  const { isBangla } = useLang();
  const { cartItems } = useCart();
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [isSearchShow, setIsSearchShow] = useState(false);
  // category id
  const { categoryId } = useParams();
  console.log(categoryId);
  return (
    <Container>
      <div id="shop">
        {/* Top bar of shop page */}
        <div className="shopTopBar">
          <div className="stbLeft">
            <span>
              <Link to={-1}>
                <FaArrowLeft size={18} />
              </Link>
            </span>
            <div className="stbSearchBox">
              {isSearchShow ? (
                <input
                  type="text"
                  placeholder={
                    isBangla ? "আপনার পণ্য খুঁজুন" : "Search Your Product Here"
                  }
                />
              ) : (
                <>{isBangla ? "ক্যাটাগরি নাম" : "Category Name"}</>
              )}
            </div>
          </div>
          <div className="stbRight">
            <span onClick={() => setIsSearchShow(!isSearchShow)}>
              {isSearchShow ? (
                <FaXmark size={20} />
              ) : (
                <FaMagnifyingGlass size={20} />
              )}
            </span>
            <span className="stbrCart">
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                to={"/cart"}
                className="mobileCart"
              >
                <BsCart size={20} />
                {cartItems?.length > 0 && (
                  <div className="cartCountS">{cartItems?.length}</div>
                )}
              </Link>
            </span>
          </div>
        </div>
        {/* Filter */}
        <div className="shopLeft">
          <div
            className="filterCheckboxContainer"
            style={{ display: isShowFilter ? "flex" : "" }}
          >
            {/* mobile done button */}
            <button
              onClick={() => setIsShowFilter(false)}
              className="mobileFilterDoneButton"
            >
              {isBangla ? "সম্পন্ন করুন" : "Done"}
            </button>
            {/* Mobile filter close btn */}
            <span
              onClick={() => setIsShowFilter(false)}
              className="mobileFilterCloseButton"
            >
              <FaXmark size={30} />
            </span>
            <FilterCheckbox
              title={isBangla ? "ব্রান্ড" : "BRAND"}
              inputs={[
                {
                  label: `${isBangla ? "ন্যানো-টেক" : "Nano-Tech"}`,
                  value: "nano-tech",
                },
                {
                  label: `${isBangla ? "এ সি সি" : "ACC"}`,
                  value: "acc",
                },
              ]}
            />
            {/* Price range slider */}
            <PriceRange />
            <FilterCheckbox
              title={
                isBangla ? "কুলিং সামর্থ্য (টন)" : "COOLING CAPACITY (TON)"
              }
              inputs={[
                {
                  label: `${isBangla ? "০.৭৫ টন" : "0.75 Ton"}`,
                  value: "0.75",
                },
                { label: `${isBangla ? "১ টন" : "1 Ton"}`, value: "1" },
                {
                  label: `${isBangla ? "১.২৫ টন" : "1.25 Ton"}`,
                  value: "1.25",
                },
                { label: `${isBangla ? "২ টন" : "2 Ton"}`, value: "2" },
              ]}
            />
            <FilterCheckbox
              title={isBangla ? "সিরিজ নাম" : "SERIES NAME"}
              inputs={[
                {
                  label: `${isBangla ? "ইনভার্না" : "Inverna"}`,
                  value: "inverna",
                },
                {
                  label: `${isBangla ? "ওশেনাস" : "Oceanus"}`,
                  value: "oceanus",
                },
                {
                  label: `${isBangla ? "ডায়মন্ড" : "Diamond"}`,
                  value: "Diamond",
                },
                { label: `${isBangla ? "এভিয়ান" : "Avian"}`, value: "avian" },
                {
                  label: `${isBangla ? "ভেনটুরি" : "Venturi"}`,
                  value: "Venturi",
                },
              ]}
            />
            <FilterCheckbox
              title={isBangla ? "প্রযুক্তি" : "TECHNOLOGY"}
              inputs={[
                {
                  label: `${
                    isBangla ? "প্রোজেন ইনভার্টার" : "ProGen Inverter"
                  }`,
                  value: "ProGen Inverter",
                },
                {
                  label: `${
                    isBangla ? "ইন্টেলিভেন্স ইনভার্টার" : "Intelligent Inverter"
                  }`,
                  value: "Intelligent Inverter",
                },
                {
                  label: `${isBangla ? "নন ইনভার্টার" : "Non-Inverter"}`,
                  value: "Non-Inverter",
                },
                {
                  label: `${
                    isBangla ? "টুইনফোল্ড ইনভার্টার" : "Twinfold Inverter"
                  }`,
                  value: "Twinfold Inverter",
                },
              ]}
            />
          </div>
        </div>
        {/* Products */}
        <div className="shopRight">
          {/* Navigation */}
          <Navigation
            title={"Split AC"}
            links={[
              { label: "Home", href: "/" },
              { label: "Air Conditioner", href: "/" },
            ]}
          />
          {/* Result and Sort dropdown */}
          <div className="resultAndSort">
            <div className="filterResultCount">
              <img src="/icon-wish.webp" alt="result icon" />
              {isBangla ? (
                <>
                  <b>১২৮</b> টি পণ্য পাওয়া গিয়েছে Split AC-এ
                </>
              ) : (
                <>
                  <b>128</b> items found in Split AC
                </>
              )}
            </div>
            <div className="sortContainer">
              <div className="filterInputSort">
                <FaSortAmountUp /> <b>Sort</b>
                <select className="filterSelect" name="filter" id="">
                  <option value="best_match">
                    {isBangla ? "সর্বাধিক প্রাসঙ্গিক" : "Best Match"}
                  </option>
                  <option value="price_hl">
                    {isBangla ? "কম থেকে বেশি মূল্যের" : "Price High to Low"}
                  </option>
                  <option value="price_lh">
                    {isBangla ? "বেশি থেকে কম মূল্যের" : "Price Low to High"}
                  </option>
                </select>
              </div>
              <div
                onClick={() => setIsShowFilter(true)}
                className="filterInputSort filterBtnMobile"
              >
                <FaSliders /> <b>Filter</b>
              </div>
            </div>
          </div>
          {/* Main Product Section */}
          <div className="shopProductsContainer">
            {products?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
