import React, { useEffect, useState } from "react";
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
import { Link, useLocation } from "react-router";
import useLang from "../../hooks/useLang";
import useCart from "../../hooks/useCart";
import useLoader from "../../hooks/useLoader";
// these data will come from database

const Shop = () => {
  const { isBangla, lang } = useLang();
  const { cartItems } = useCart();
  const { setIsLoading } = useLoader();
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [staticProducts, setStaticProducts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category_id = queryParams.get("category_id");
  const category = queryParams.get("category");
  const sub_category_id = queryParams.get("sub_category_id");
  const sub_category = queryParams.get("sub_category");
  // Fetch all products from database
  useEffect(() => {
    try {
      setIsLoading(true);
      fetch(`${import.meta.env.VITE_API}/all_products_by_lang.php?lang=${lang}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setAllProducts(data?.data);
            setStaticProducts(data?.data);
          } else {
            console.log(data?.message);
          }
        });
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [lang, setIsLoading]);
  console.log(staticProducts);

  // Products filter by price
  const handleFilterByPrice = (e) => {
    const value = e.target.value;
    const store = [...allProducts];
    console.log(value);
    // price high to low
    if (value === "price_hl") {
      const htl = store.sort((a, b) => b.current_price - a.current_price);
      setAllProducts(htl);
    }
    //price low to high
    if (value === "price_lh") {
      const htl = store.sort((a, b) => a.current_price - b.current_price);
      setAllProducts(htl);
    }
  };

  // navlink
  const navlink = category
    ? [
        { label: `${isBangla ? "হোম" : "Home"}`, href: "/" },
        {
          label: `${category}`,
          href: `/shop?category_id=${category_id}&category=${category}`,
        },
      ]
    : [{ label: `${isBangla ? "হোম" : "Home"}`, href: "/" }];
  // Default products by category or sub catgory
  useEffect(() => {
    // filter by sub category
    if (sub_category_id) {
      const filterBySubCat = staticProducts.filter(
        (pro) => pro.product_sub_category_id == sub_category_id
      );
      setAllProducts(filterBySubCat);
    }
    // filter by category
    if (!sub_category_id) {
      if (category_id) {
        const filterByCat = staticProducts.filter(
          (pro) => pro.product_category_id == category_id
        );
        setAllProducts(filterByCat);
      }
    }
  }, [sub_category_id, staticProducts, category_id]);
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
          <Navigation title={sub_category && sub_category} links={navlink} />
          {/* Result and Sort dropdown */}
          <div className="resultAndSort">
            <div className="filterResultCount">
              <img src="/icon-wish.webp" alt="result icon" />
              {isBangla ? (
                <>
                  <b>{allProducts && allProducts?.length}</b> টি পণ্য পাওয়া
                  গিয়েছে {sub_category || category}
                  {sub_category || category ? "-এ" : ""}
                </>
              ) : (
                <>
                  <b>{allProducts && allProducts?.length}</b> items found in
                  Split AC
                </>
              )}
            </div>
            <div className="sortContainer">
              <div className="filterInputSort">
                <FaSortAmountUp /> <b>Sort</b>
                <select
                  onChange={handleFilterByPrice}
                  className="filterSelect"
                  name="filter"
                  id=""
                >
                  <option value="" style={{ display: "none" }}>
                    {isBangla ? "ফিল্টার করুন" : "Sort by"}
                  </option>
                  <option value="price_hl">
                    {isBangla ? "বেশি থেকে কম মূল্যের" : "Price High to Low"}
                  </option>
                  <option value="price_lh">
                    {isBangla ? "কম থেকে বেশি মূল্যের" : "Price Low to High"}
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
            {allProducts &&
              allProducts.length > 0 &&
              allProducts?.map((product) => (
                <ProductCard key={product?.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
