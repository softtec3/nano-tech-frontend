import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";

import "./ProductDetailsMain.css";
import ProductImagesSlider from "./ProductImagesSlider/ProductImagesSlider";
import { IoIosArrowForward } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa";
import ProductInDetail from "../ProductInDetail/ProductInDetail";
import ProductQuestion from "../ProductQuestion/ProductQuestion";
import useLang from "../../../hooks/useLang";
import { Link, useNavigate } from "react-router";
import useCart from "../../../hooks/useCart";
import toast from "react-hot-toast";
import useUser from "../../../hooks/useUser";
const ProductDetailsMain = ({ product, productSpecification }) => {
  const { user } = useUser();
  const { isBangla } = useLang();
  const { cartItems, setCartItems } = useCart();
  const [mobileView, setMobileView] = useState(false);
  const [mainProImage, setMainProImage] = useState("");
  const navigate = useNavigate();
  const rawImages = [
    product?.product_main_img ?? null,
    product?.product_img_one ?? null,
    product?.product_img_two ?? null,
    product?.product_img_three ?? null,
    product?.product_img_four ?? null,
  ];
  const images = rawImages?.filter((img) => img != null);
  const handleImageChange = (url) => {
    setMainProImage(url);
  };
  useEffect(() => {
    if (window.innerWidth <= 600) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, []);
  useEffect(() => {
    setMainProImage(
      `${import.meta.env.VITE_API_MAIN}/${product?.product_main_img}`
    );
  }, [product]);
  // add to cart
  const addToCart = (product) => {
    if (user?.role === "sales-representative") {
      navigate("/salesShop");
      return;
    }
    const check = cartItems.filter((item) => {
      return item?.product_id == product?.id;
    });
    if (check.length > 0) {
      toast.error(isBangla ? "ইতোমধ্যে কার্টে রয়েছে" : "Already added");
      navigate("/cart");
      return;
    }
    const modifiedCartItem = {
      product_id: product?.id,
      product_name: product?.product_name,
      available_quantity: product?.product_quantity,
      quantity: 1,
      price: product?.current_price,
      delivery_charge: product?.delivery_charge,
      product_image: product?.product_main_img,
    };
    setCartItems((prev) => [...prev, modifiedCartItem]);
    toast.success(isBangla ? "কার্টে যোগ হয়েছে" : "Added to cart");
    navigate("/cart");
  };
  return (
    <div id="productDetailsMain">
      <div style={{ width: "100%" }}>
        <div className="pdLeft">
          {/* product image */}
          <div className="pdProductImage">
            <div className="pdProMainImage">
              {/* <img src={mainProImage} alt="main image" /> */}
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Walton Inverter AC 1.5 Ton",
                    isFluidWidth: true,
                    src: mainProImage,
                  },
                  largeImage: {
                    src: mainProImage,
                    width: 500,
                    height: 500,
                  },
                  enlargedImageContainerStyle: {
                    zIndex: 1500,
                    backgroundColor: "#fff", // clean white bg
                  },
                  enlargedImageStyle: {
                    objectFit: "contain", // keeps image proportion perfect
                    width: "100%",
                    height: "100%",
                    scale: "1.2",
                  },
                  enlargedImagePosition: mobileView ? "over" : "beside",
                }}
              />
            </div>
            <div className="pdImagesSlider">
              <ProductImagesSlider
                handleImageChange={handleImageChange}
                images={images}
              />
            </div>
          </div>
          {/* product details */}
          <div className="pdProductDetails proFlex">
            <div className="pdDetailsContainer">
              <div className="pdProNameModel">
                <p className="pdProName">{product?.product_name}</p>
                <p className="pdProModel">{product?.product_model}</p>
              </div>
              <div className="pdProPriceDiscount">
                <p className="pdProPrice">
                  <del style={{ color: "red" }}>
                    MSRP ৳{product?.regular_price}
                  </del>
                  <span className="pdActualPrice">
                    ৳{product?.current_price}
                  </span>
                </p>
                <p className="pdDiscount">
                  {isBangla ? "সঞ্চয়" : "Save:"} ৳
                  {(product?.regular_price * product?.discount) / 100}{" "}
                  <span style={{ color: "var(---primaryColor)" }}>
                    ({product?.discount}% {isBangla ? "ছাড়" : "OFF"})
                  </span>
                </p>
              </div>
              {/* EMI plan */}
              {/* <div className="emiPlan">
                <span className="pdViewPlanButton">
                  <span style={{ color: "var(---primaryColor)" }}>EMI</span>{" "}
                  available
                </span>
                <span className="pdViewPlanLink">
                  View Plans <IoIosArrowForward />
                </span>
              </div> */}
              {/* offers */}
              {/* <div className="pdProOfferSection">
                <h6>Available Offers</h6>
                <ul>
                  <li>
                    <img className="pdPin" src="/pin.webp" alt="pin" />
                    <b>Kisti Offer</b> Check Kisti Eligibility{" "}
                    <span className="pdModalLink">T&C</span>
                  </li>
                  <li>
                    <img className="pdPin" src="/pin.webp" alt="pin" />
                    <b>EMI</b> Valid For Cart Value Above ৳10,000
                    <span className="pdModalLink">T&C</span>
                  </li>
                  <li>
                    <img className="pdPin" src="/pin.webp" alt="pin" />
                    <b>EMI Discount</b>
                    Get 5% OFF,Starting ৳6,095/Month
                    <span className="pdModalLink">More</span>
                  </li>
                </ul>
              </div> */}
              {/* brand */}
              <div className="pdBrand">
                <span style={{ fontWeight: "bold" }}>
                  {isBangla ? "ব্রান্ড" : "Brand"}
                </span>
                <ul>
                  <li>Nano-Tech</li>
                  <li>
                    {isBangla ? "আরও পন্য দেখুন" : "See More Products From"}
                    <Link
                      to={`/shop?category_id=${product?.product_category_id}&category=${product?.product_category}`}
                    >
                      <span className="brandCat">
                        {product?.product_category}
                        <IoIosArrowForward />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pdBrand">
                <span style={{ fontWeight: "bold" }}>
                  {isBangla ? "বৈশিষ্ট্য" : "Features"}
                </span>
                <ul>
                  {productSpecification &&
                    productSpecification.slice(0, 5).map((spec) => (
                      <li key={spec?.id}>
                        {spec?.specification_name}:{" "}
                        {spec?.specification_description}
                      </li>
                    ))}
                </ul>
              </div>
              {/* Quantity and Buy */}
            </div>
            <div className="pdQuantityBuy">
              {/* <div className="pdQuantity">
                <span className="pdQuantityTitle">
                  {isBangla ? "পরিমাণ" : "Quantity"}
                </span>
                <div className="pdQuantityCount">
                  <span className="pdQuantityIcon">
                    <FaMinus />
                  </span>
                  <span className="pdQuantityValue">1</span>
                  <span className="pdQuantityIcon">
                    <FaPlus />
                  </span>
                </div>
              </div> */}
              <div className="buyNowBtnContainer">
                <button
                  onClick={() => addToCart(product)}
                  className="buyNowBtn"
                >
                  {isBangla ? "এখনই কিনুন" : "Buy Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* product specification*/}
        <ProductInDetail
          productSpecification={productSpecification}
          name={product?.product_name}
        />
        {/* product related question */}
        {/* <ProductQuestion /> */}
      </div>
      <div className="pdRight">
        <div className="deliveryOptions">
          <div className="doTop">
            <div className="doTime">
              <img src="/truck.webp" alt="delivery truck icon" />
              <span>
                {isBangla ? "হোম ডেলিভারী" : "Home Delivery"} <br />{" "}
                <span style={{ fontWeight: "400", fontSize: "14px" }}>
                  {isBangla ? "২ - ৩ দিন" : "2 - 3 Days"}
                </span>
              </span>
            </div>
            <div>{isBangla ? "৳৭০০" : "৳700"}</div>
          </div>
          <div className="doNotice">
            <b>{isBangla ? "নোটিশঃ" : "Notice:"}</b>{" "}
            {isBangla
              ? "ডেলিভারি নীতি অনুসারে, অনুগ্রহ করে আপনার অর্ডার করা পণ্যটি ৫ দিনের মধ্যে গ্রহণ করুন; অন্যথায়, এটি স্বয়ংক্রিয়ভাবে বাতিল হয়ে যাবে।"
              : "As per the delivery policy,please receive your ordered product within 5 days; otherwise, it will be automatically cancelled."}
          </div>
          <div className="cashOnDel">
            <img src="/dollar.webp" alt="dollar" />
            {isBangla
              ? "ক্যাশ অন ডেলিভারি উপলব্ধ"
              : "Cash on Delivery Available"}
          </div>
        </div>
        <div className="returnPolicy">
          <h5>{isBangla ? "রিটার্ণ ও ওয়ারেন্টি" : "Return & Warranty"}</h5>
          <hr className="pdHr" />
          <div>
            <img src="/returnBox.webp" alt="return box" />
            {isBangla
              ? "কোম্পানির নীতি অনুযায়ী রিটার্ন"
              : "Return as per company policy"}
          </div>
          <div>
            <img src="/warrantyBox.webp" alt="return box" />
            {isBangla
              ? "কোম্পানির নীতি অনুযায়ী ওয়ারেন্টি"
              : "Warranty as per company policy"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsMain;
