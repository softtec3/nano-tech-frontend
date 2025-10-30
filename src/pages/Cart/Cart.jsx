import React, { useEffect } from "react";
import "./Cart.css";
import { Link, useNavigate } from "react-router";
import Container from "../../components/Container/Container";
import SalesPointCart from "./SalesPointCart/SalesPointCart";
import UserCart from "./UserCart/UserCart";
import useCart from "../../hooks/useCart";
import Navigation from "../../components/Navigation/Navigation";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import useLang from "../../hooks/useLang";
import useUser from "../../hooks/useUser";
const Cart = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { isBangla } = useLang();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <Container>
      <section id="cart">
        {cartItems?.length == 0 ? (
          <div className="emptyCartPlaceholder">
            <div className="emptyCartPlaceholderMain">
              <MdOutlineRemoveShoppingCart
                size={80}
                color="gray"
                opacity={0.5}
              />
              <h4>{isBangla ? "কার্ট খালি !" : "Cart is empty!"}</h4>
              <p>
                {isBangla
                  ? "আপনার পছন্দসই পণ্যগুলি কার্টে যোগ করুন এবং চেকআউট করতে এই পৃষ্ঠায় ফিরে আসুন।"
                  : "Add your desired products to cart and come back to this page to checkout."}
              </p>
              <Link to={"/"}>
                {isBangla ? "শপিং চালিয়ে যান" : "Continue Shopping"}
              </Link>
            </div>
          </div>
        ) : (
          <>
            {user?.role === "sales-representative" ? (
              <SalesPointCart />
            ) : (
              <UserCart />
            )}
          </>
        )}
      </section>
    </Container>
  );
};

export default Cart;
