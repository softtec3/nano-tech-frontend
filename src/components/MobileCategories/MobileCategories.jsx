import React, { useState } from "react";
import "./MobileCategories.css";
import useLang from "../../hooks/useLang";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
const MobileCategories = ({ setIsShow }) => {
  const { isBangla } = useLang();
  // These categories will come from the database
  const categories = [
    {
      id: 1,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/9976c403-0341-47b6-a317-2e845f620825.png",
      name: isBangla ? "হোম এপ্লায়েন্স" : "Home Appliances",
      subCategories: ["sub cat 1", "sub cat 2", "sub cat 3"],
    },
    {
      id: 2,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/83210de3-616e-4512-9403-4af64f822429.png",
      name: isBangla ? "কিচেন ওয়্যার" : "Kitchen Wear",
      subCategories: ["sub cat 4", "sub cat 5", "sub cat 6"],
    },
    {
      id: 3,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/7bb9040f-8233-47d3-a531-ebf4300d7544.png",
      name: isBangla ? "ক্রোকারিজ" : "Crockeries",
      subCategories: ["sub cat 7", "sub cat 8", "sub cat 9"],
    },
    {
      id: 4,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/83210de3-616e-4512-9403-4af64f822429.png",
      name: isBangla ? "প্লাস্টিক পন্য" : "Plastic Items",
      subCategories: ["sub cat 11", "sub cat 12", "sub cat 13"],
    },
    {
      id: 5,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/29f37d46-6308-4daa-b43e-e50d1e1f537d.png",
      name: isBangla ? "কম্পিউটার" : "Computer",
      subCategories: ["sub cat 12", "sub cat 15", "sub cat 16"],
    },
    {
      id: 6,
      link: "/shop",
      image: "https://i.ibb.co.com/4R7Pt7jn/Keyboard-Wire.png",
      name: isBangla ? "কম্পিউটার এসসেসোরিস" : "Computer Accessories",
      subCategories: ["sub cat 1a", "sub cat 2d", "sub cat 3f"],
    },
    {
      id: 7,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/1736e5f5-9252-40b8-9c0d-09eb3da95853.png",
      name: isBangla ? "মোবাইল" : "Mobile",
      subCategories: [],
    },
    {
      id: 8,
      link: "/shop",
      image: "https://i.ibb.co.com/TDPq9Rzt/61-ZHv0-v-PRL-UF1000-1000-QL80.jpg",
      name: isBangla ? "মোবাইল এসসেসোরিস" : "Mobile Accessories",
      subCategories: ["sub cat 1k", "sub cat d2", "sub cat g3"],
    },
    {
      id: 9,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/83210de3-616e-4512-9403-4af64f822429.png",
      name: isBangla ? "গ্যাজেট" : "Gadgets",
      subCategories: ["sub cat b1", "sub cat h2", "sub cat j3"],
    },
  ];
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  console.log(selectedSubCategories);
  return (
    <div id="mobileCategories">
      <h5>{isBangla ? "ক্যাটেগরি" : "Categories"}</h5>
      <div className="mobileCategoryList">
        {categories?.map((category) => (
          <div
            // onMouseOver={() => setSelectedSubCategories(category.subCategories)}
            className="parent"
            key={category.id}
          >
            <span className="mcLink">
              <Link
                to={"/shop"}
                onClick={() => setIsShow(false)}
                className="mcInnerCat"
              >
                <img src={category.image} alt={category.name} />
                {category.name}
              </Link>
              <span
                onClick={() => setSelectedSubCategories(category.subCategories)}
                className="mcArrowForward"
              >
                <IoIosArrowForward />
              </span>
            </span>
            <div className="child">
              {selectedSubCategories?.map((cat, index) => (
                <Link onClick={() => setIsShow(false)} to={"/shop"} key={index}>
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileCategories;
