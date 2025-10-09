import React, { useState } from "react";
import "./MobileNavbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import {
  FaArrowLeft,
  FaFacebook,
  FaPhone,
  FaRegUser,
  FaWhatsapp,
  FaXmark,
} from "react-icons/fa6";
import { Link, useLocation } from "react-router";
import useLang from "../../hooks/useLang";
import Categories from "../Categories/Categories";
import { FaHome } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import AccordionMui from "../AccordionMui/AccordionMui";
import MobileCategories from "../MobileCategories/MobileCategories";
import AccountInfo from "../../pages/AccountInfo/AccountInfo";
import useCart from "../../hooks/useCart";

const MobileNavbar = () => {
  const { isBangla } = useLang();
  const [isShow, setIsShow] = useState(false);
  const [isAccountShow, setIsAccountShow] = useState(false);
  const location = useLocation();
  const isLocation = location.pathname.split("/").includes("product");
  const { cartItems } = useCart();

  return (
    <div id="mobileNav" style={{ zIndex: isAccountShow ? "500" : "50" }}>
      {/* Product Page Top Navigation */}
      {isLocation && (
        <div className="proPageTopNav">
          <Link to={"/"}>
            <FaHome size={25} />
          </Link>
          <div className="proPTVRight">
            <Link to={"/cart"} className="mobileCart">
              <BsCart size={25} />
              {cartItems?.length > 0 && (
                <span className="cartCount cartCountD">
                  {cartItems?.length}
                </span>
              )}
            </Link>
            <Link to={"/account"}>
              <HiOutlineDotsVertical size={25} />
            </Link>
          </div>
        </div>
      )}
      {/* Account Info */}
      <div
        style={{ display: isAccountShow ? "block" : "none" }}
        className="accountInfo"
      >
        <AccountInfo
          setIsAccountShow={setIsAccountShow}
          setIsShow={setIsShow}
        />
        {/* <div className="accountInfoTopNav">
          <div>
            <FaArrowLeft
              onClick={() => setIsAccountShow(false)}
              size={25}
              style={{ cursor: "pointer" }}
            />
            Account
          </div>
          <Link
            to={"/"}
            onClick={() => {
              setIsShow(false);
              setIsAccountShow(false);
            }}
          >
            <FaHome size={25} />
          </Link>
        </div>
        <div className="accountInfoDetails">
          <Link className="logRegBtn">
            {isBangla ? "লগইন/রেজিস্টার" : "Login/Register"}
          </Link>
          <div className="accountInfoNavigation">
            <Link>
              <img
                src="https://waltonplaza.com.bd/_next/image?url=%2Fuser-profile-64.png&w=48&q=75"
                alt=""
              />{" "}
              {isBangla ? "আমার প্রোফাইল" : "My Profile"}
            </Link>
            <Link>
              <img
                src="https://waltonplaza.com.bd/_next/image?url=%2Fcontact-details-64.png&w=48&q=75"
                alt=""
              />
              {isBangla ? "ম্যানেজ প্রোফাইল" : "Manage Profile"}
            </Link>
            <Link>
              <img
                src="https://waltonplaza.com.bd/_next/image?url=%2Fmost-recent-50.png&w=48&q=75"
                alt=""
              />{" "}
              {isBangla ? "আমার অর্ডার" : "My Order"}
            </Link>
            <Link>
              <img
                src="https://waltonplaza.com.bd/_next/image?url=%2Faddress-book-50.png&w=48&q=75"
                alt=""
              />{" "}
              {isBangla ? "এড্রেস বুক" : "Address Book"}
            </Link>
            <Link>
              <img
                src="https://waltonplaza.com.bd/_next/image?url=%2Ficon-wish.png&w=48&q=75"
                alt=""
              />{" "}
              {isBangla ? "রিওয়ার্ড ও পয়েন্ট হিস্টোরি" : "Reward Point History"}
            </Link>
            <Link>
              <img
                src="https://waltonplaza.com.bd/_next/image?url=%2Ficon-wish.png&w=48&q=75"
                alt=""
              />{" "}
              {isBangla ? "আমার উইশলিস্ট" : "My Wishlist"}
            </Link>
            <Link>
              <img
                src="https://waltonplaza.com.bd/_next/image?url=%2Fuser-profile-64.png&w=48&q=75"
                alt=""
              />{" "}
              {isBangla ? "কিস্তি সুরক্ষা" : "Kisti Surokkha"}
            </Link>
            <AccordionMui sections={sections} />
          </div>
          <div className="accountDetailsFooter">
            <div className="tech">
              <h3 style={{ fontSize: "24px" }}>
                {isBangla
                  ? "ন্যানো-টেক প্রডাকশন টেকনোলজি"
                  : "Nano-Tech Production Technology"}
              </h3>
              <div className="customerService">
                <h6>
                  {isBangla
                    ? "গ্রাহক সেবা হেল্পলাইন"
                    : "Customer service helpline"}
                </h6>
                <div>
                  <p>
                    {isBangla
                      ? "যোগাযোগ করুনঃ ১৬২৬৭ নম্বরে (চার্জ প্রযোজ্য)"
                      : "Call us at 16267 (Charge Applicable)"}
                  </p>
                  <p>
                    {isBangla
                      ? "অথবা ০৮ ০০০১৬২৬৭ (টোল ফ্রি)"
                      : "or 08 000016267 (Toll Free)"}
                  </p>
                  <p>
                    {isBangla
                      ? "যোগাযোগের সময়ঃ ৭:০০ টা থেকে রাত ১১:০০ টা পর্যন্ত"
                      : "We are available from 07:00 am to 11:00 pm"}
                  </p>
                </div>
              </div>
              <div className="mediaContainer">
                <h6>
                  {isBangla
                    ? "আমাদের সাথে যুক্ত থাকুন"
                    : "Stay in touch with us"}
                </h6>
                <div className="socialMedias">
                  <a href="#" target="_blank">
                    <FaFacebook size={19} />
                  </a>
                  <a href="#" target="_blank">
                    <FaWhatsapp size={19} />
                  </a>
                  <a href="tel:+880 1329636890" target="_blank">
                    <FaPhone size={19} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* Mobile Category */}
      {isShow && (
        <div className="mobileCategory">
          <span className="closeMobileCategory">
            <FaXmark
              style={{ cursor: "pointer" }}
              onClick={() => setIsShow(false)}
              size={30}
            />
          </span>
          <MobileCategories setIsShow={setIsShow} />
        </div>
      )}
      <Link
        to={"/"}
        onClick={() => {
          setIsShow(false);
          setIsAccountShow(false);
        }}
      >
        <IoHomeOutline size={20} />
        {isBangla ? "হোম" : "Home"}
      </Link>
      <Link
        to={"#"}
        onClick={() => {
          setIsShow(!isShow);
          setIsAccountShow(false);
        }}
      >
        <RxDashboard size={20} />
        {isBangla ? "ক্যাটেগরি" : "Category"}
      </Link>
      <Link
        to={"/cart"}
        className="mobileCart"
        onClick={() => {
          setIsShow(false);
          setIsAccountShow(false);
        }}
      >
        <BsCart size={20} />
        {isBangla ? "কার্ট" : "Cart"}
        {cartItems?.length > 0 && (
          <span className="cartCount">{cartItems?.length}</span>
        )}
      </Link>
      <Link
        to={"/account"}
        onClick={() => {
          setIsShow(false);
        }}
      >
        <FaRegUser size={20} />
        {isBangla ? "একাউন্ট" : "Account"}
      </Link>
    </div>
  );
};

export default MobileNavbar;
