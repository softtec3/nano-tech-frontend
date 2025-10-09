import React from "react";
import "./SmallProductCard.css";
import { Link } from "react-router";
import { BsCart } from "react-icons/bs";
import useLang from "../../hooks/useLang";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";
const SmallProductCard = ({ product = {} }) => {
  const { isBangla } = useLang();
  const { setCartItems } = useCart();
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    toast.success("Added to cart");
  };
  return (
    // Small Product card
    <div id="smallProductCard">
      <div id="productCard">
        <div className="discountContainer">
          <img src="/discountImage.webp" alt="discount" />
          <span>
            <b style={{ fontSize: "14px" }}>10%</b> OFF
          </span>
        </div>
        <Link to={`/product/${product.id}`}>
          <div className="proCardUpper">
            <img
              className="smallProCardImage"
              src={product.image}
              alt={product.name}
            />
            <div className="proDescription">
              <span className="proModel">{product.model}</span>
              <span className="proTitle">
                {isBangla ? product.bn_name : product.name}
              </span>
            </div>
          </div>{" "}
        </Link>
        <div className="proCardBottom">
          <div className="proPrice">
            <p className="disMrp">
              {isBangla ? "টাকা" : "MRP"} ৳
              <span>{isBangla ? product.bn_price : product.price}</span>
            </p>
            <p>
              ৳
              <span style={{ fontWeight: "bold" }}>
                {isBangla ? product.bn_discount_price : product.discountPrice}
              </span>
            </p>
          </div>
          <p className="disCount">
            {isBangla ? `ডিস্কাউন্ট: ৳১৮০০` : "Save: ৳1800"}
            <span
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                color: "var(---primaryColor)",
                marginLeft: "2px",
              }}
            >
              ({isBangla ? "১০% ছাড়" : "10% OFF"})
            </span>
          </p>
          <p className="proLocation">
            {isBangla ? "উপলব্ধ: ২০০ পিস" : "Available: 200 Pcs"}
          </p>{" "}
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
    </div>
  );
};

export default SmallProductCard;
