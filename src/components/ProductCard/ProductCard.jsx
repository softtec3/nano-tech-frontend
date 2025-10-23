import React from "react";
import "./ProductCard.css";
import { Link } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import useLang from "../../hooks/useLang";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";
const ProductCard = ({ product = {} }) => {
  const { isBangla } = useLang();
  const { setCartItems } = useCart();
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    toast.success("Added to cart");
  };
  return (
    // Single Product card
    <div id="productCard">
      <div className="discountContainer">
        <img src="/discountImage.webp" alt="discount" />
        <span style={{ textAlign: "center" }}>
          <b style={{ fontSize: "14px" }}>{product?.discount}%</b>
          <br /> OFF
        </span>
      </div>
      <Link to={`/product/${product.id}`}>
        <div className="proCardUpper">
          <img
            src={`${import.meta.env.VITE_API_MAIN}/${
              product?.product_main_img
            }`}
            alt={product.name}
          />
          <div className="proDescription">
            <span className="proModel">{product?.product_model}</span>
            <span className="proTitle">{product?.product_name}</span>
          </div>
        </div>{" "}
      </Link>
      <div className="proCardBottom">
        <div className="proPrice">
          <p className="disMrp">
            {isBangla ? "টাকা" : "MRP"} ৳<span>{product?.regular_price}</span>
          </p>
          <p>
            ৳
            <span style={{ fontWeight: "bold" }}>{product?.current_price}</span>
          </p>
        </div>
        <p className="disCount">
          {isBangla ? `ডিস্কাউন্ট:` : "Save:"} ৳
          {(product?.regular_price * product?.discount) / 100}
          <span
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              color: "var(---primaryColor)",
              marginLeft: "2px",
            }}
          >
            ({product?.discount}% ছাড়)
          </span>
        </p>
        <p className="proLocation">
          {isBangla ? "উপলব্ধ: " : "Available: "}
          {product?.product_quantity} {isBangla ? "পিস" : "Pcs"}
        </p>
        <div className="proAction">
          <span
            onClick={() => {
              addToCart(product);
            }}
          >
            <BsCart />
          </span>
          <button className="proBtn">
            {isBangla ? "এখনই কিনুন" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
