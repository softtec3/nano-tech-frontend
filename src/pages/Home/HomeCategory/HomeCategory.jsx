import React from "react";
import "./HomeCategory.css";
import { Link } from "react-router";
import useLang from "../../../hooks/useLang";
const HomeCategory = () => {
  const { isBangla } = useLang();
  // These categories will come from the database
  const categories = [
    {
      id: 1,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/9976c403-0341-47b6-a317-2e845f620825.png",
      name: isBangla ? "হোম এপ্লায়েন্স" : "Home Appliances",
    },
    {
      id: 2,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/83210de3-616e-4512-9403-4af64f822429.png",
      name: isBangla ? "কিচেন ওয়্যার" : "Kitchen Wear",
    },
    {
      id: 3,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/7bb9040f-8233-47d3-a531-ebf4300d7544.png",
      name: isBangla ? "ক্রোকারিজ" : "Crockeries",
    },
    {
      id: 4,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/83210de3-616e-4512-9403-4af64f822429.png",
      name: isBangla ? "প্লাস্টিক পণ্য" : "Plastic Item",
    },
    {
      id: 5,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/29f37d46-6308-4daa-b43e-e50d1e1f537d.png",
      name: isBangla ? "কম্পিউটার" : "Computer",
    },
    {
      id: 6,
      link: "/shop",
      image: "https://i.ibb.co.com/4R7Pt7jn/Keyboard-Wire.png",
      name: isBangla ? "কম্পিউটার এসসেসোরিস" : "Computer Accessories",
    },
    {
      id: 7,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/1736e5f5-9252-40b8-9c0d-09eb3da95853.png",
      name: isBangla ? "মোবাইল" : "Mobile",
    },
    {
      id: 8,
      link: "/shop",
      image: "https://i.ibb.co.com/TDPq9Rzt/61-ZHv0-v-PRL-UF1000-1000-QL80.jpg",
      name: isBangla ? "মোবাইল এসসেসোরিস" : "Mobile Accessories",
    },
    {
      id: 9,
      link: "/shop",
      image:
        "https://cdn.waltonplaza.com.bd/83210de3-616e-4512-9403-4af64f822429.png",
      name: isBangla ? "গ্র্যাডজেটস" : "Gadgets",
    },
  ];
  // Home page category section
  return (
    <section id="homeCategory">
      {categories?.map((category) => (
        <Link to={category.link} className="singleCategory" key={category.id}>
          <div className="scImage">
            <img src={category.image} alt={category.name} />
          </div>
          <p>{category.name}</p>
        </Link>
      ))}
    </section>
  );
};

export default HomeCategory;
