import React from "react";
import "./SmallProductCard.css";
import { Link } from "react-router";
import { BsCart } from "react-icons/bs";
import useLang from "../../hooks/useLang";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";
const SmallProductCard = ({ product = {} }) => {
  const { isBangla } = useLang();
  const { cartItems, setCartItems } = useCart();
  // add to cart
  const addToCart = (product) => {
    console.log(product);
    const check = cartItems.filter((item) => {
      return item?.product_id == product?.id;
    });
    if (check.length > 0) {
      toast.error("Already added");
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
    toast.success("Added to cart");
  };
  return (
    // Small Product card
    <div id="smallProductCard">
      <div id="productCard">
        <div className="discountContainer">
          <img src={"/discountImage.webp"} alt="discount" />
          {product?.discount && product?.discount > 0 && (
            <span style={{ textAlign: "center" }}>
              <b style={{ fontSize: "14px" }}>{product?.discount}</b>% <br />{" "}
              OFF
            </span>
          )}
        </div>
        <Link to={`/product/${product?.id}`}>
          <div className="proCardUpper">
            <img
              className="smallProCardImage"
              src={`${import.meta.env.VITE_API_MAIN}/${
                product?.product_main_img
              }`}
              alt={product?.product_name}
            />
            <div className="proDescription">
              <span className="proModel">{product?.product_model}</span>
              <span className="proTitle">
                {product?.product_name.slice(0, 30)}..
              </span>
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
              <span style={{ fontWeight: "bold" }}>
                {product?.current_price}
              </span>
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
              ({product?.discount}% {isBangla ? "ছাড়" : "OFF"})
            </span>
          </p>
          <p className="proLocation">
            {isBangla ? "উপলব্ধ: " : "Available: "}
            {product?.product_quantity} {isBangla ? "পিস" : "Pcs"}
          </p>{" "}
          <div className="proAction">
            <span
              onClick={() => {
                addToCart(product);
              }}
            >
              <BsCart />
            </span>
            <Link to={`/product/${product?.id}`}>
              <button className="proBtn">
                {isBangla ? "এখনই কিনুন" : "Buy Now"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallProductCard;
