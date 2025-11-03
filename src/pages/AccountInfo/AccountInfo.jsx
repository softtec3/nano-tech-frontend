import React from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowLeft, FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router";
import useLang from "../../hooks/useLang";
import AccordionMui from "../../components/AccordionMui/AccordionMui";
import "./AccountInfo.css";
import useUser from "../../hooks/useUser";
const AccountInfo = ({ setIsAccountShow, setIsShow }) => {
  const { isBangla } = useLang();
  const { user } = useUser();
  const sections = [
    {
      title: isBangla ? "ন্যানোটেক সম্পর্কে" : "About Nano-Tech",
      items: [
        { label: isBangla ? "আমাদের সম্পর্কে" : "About Us", href: "#" },
        {
          label: isBangla ? "এমডির থেকে ম্যাসেজ" : "Message from MD",
          href: "#",
        },
        { label: isBangla ? "কেন আমরা" : "Why Us", href: "#" },
        { label: isBangla ? "যোগাযোগ" : "Contact Us", href: "#" },
        {
          label: isBangla ? "পণ্য সার্টিফিকেশন" : "Product Certification",
          href: "#",
        },
        { label: isBangla ? "পয়েন্ট লিস্ট" : "Point List", href: "#" },
      ],
    },
    {
      title: isBangla ? "হেল্প ও ইনফরমেশন" : "Help & Information",
      items: [
        { label: isBangla ? "এফএকিউ" : "FAQ", href: "#" },
        { label: isBangla ? "শিপিং নীতিমালা" : "Shipping Policy", href: "#" },
        {
          label: isBangla ? "রিটার্ণ ও রিফান্ড" : "Return & Refund",
          href: "#",
        },
      ],
    },
    {
      title: isBangla ? "শীর্ষস্থানীয় ক্যাটাগরীসমূহ" : "Top Categories",
      items: [
        { label: isBangla ? "রেফ্রিজারেটর" : "Refrigerators", href: "#" },
        { label: isBangla ? "টেলিভিশন" : "Television", href: "#" },
        { label: isBangla ? "এসি" : "Air Conditioner", href: "#" },
      ],
    },
    {
      title: isBangla ? "আমাদের ব্রান্ড" : "Our Brands",
      items: [
        { label: isBangla ? "ন্যানো-টেক" : "Nano-Tech", href: "#" },
        { label: isBangla ? "মার্সেল" : "Marcel", href: "#" },
        { label: isBangla ? "অন্যান্য ব্রান্ড" : "Other Brands", href: "#" },
      ],
    },
  ];
  return (
    <div>
      <div className="accountInfo">
        <div className="accountInfoTopNav">
          <div>
            <Link to={-1} style={{ display: "flex", alignItems: "center" }}>
              <FaArrowLeft
                onClick={() => setIsAccountShow(false)}
                size={25}
                style={{ cursor: "pointer" }}
              />
            </Link>
            {isBangla ? "আকাউন্ট" : "Account"}
          </div>
          <Link to={"/"}>
            <FaHome
              onClick={() => {
                setIsShow(false);
                setIsAccountShow(false);
              }}
              size={25}
            />
          </Link>
        </div>
        <div className="accountInfoDetails">
          {user && user?.user_name ? (
            ""
          ) : (
            <Link to={"/login"} className="logRegBtn">
              {isBangla ? "লগইন/রেজিস্টার" : "Login/Register"}
            </Link>
          )}

          <div className="accountInfoNavigation">
            <Link to={"/account/myProfile"}>
              <img
                src="https://waltonplaza.com.bd/_next/image?url=%2Fuser-profile-64.png&w=48&q=75"
                alt=""
              />
              {isBangla ? "আমার প্রোফাইল" : "My Profile"}
            </Link>
            <Link>
              <img
                src="https://waltonplaza.com.bd/_next/image?url=%2Fcontact-details-64.png&w=48&q=75"
                alt=""
              />
              {isBangla ? "ম্যানেজ প্রোফাইল" : "Manage Profile"}
            </Link>
            {user && user?.role == "sales-representative" ? (
              <Link to={"/account/salesOrders"}>
                <img
                  src="https://waltonplaza.com.bd/_next/image?url=%2Fmost-recent-50.png&w=48&q=75"
                  alt=""
                />{" "}
                {isBangla ? "আমার অর্ডার" : "My Order"}
              </Link>
            ) : (
              <Link to={"/account/myOrders"}>
                <img
                  src="https://waltonplaza.com.bd/_next/image?url=%2Fmost-recent-50.png&w=48&q=75"
                  alt=""
                />{" "}
                {isBangla ? "আমার অর্ডার" : "My Order"}
              </Link>
            )}
            {user && user?.role == "sales-representative" ? (
              <Link to={"/account/myProducts"}>
                <img
                  src="https://waltonplaza.com.bd/_next/image?url=%2Fuser-profile-64.png&w=48&q=75"
                  alt=""
                />
                {isBangla ? "আমার পণ্যসমূহ" : "My products"}
              </Link>
            ) : (
              ""
            )}
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
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
