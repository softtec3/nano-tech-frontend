import React from "react";
import "./Navigation.css";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
const Navigation = ({ title, links }) => {
  return (
    <div id="productDetailsNav">
      {links?.map((link, index) => (
        <Link key={index} to={link?.href}>
          {link?.label} <IoIosArrowForward />
        </Link>
      ))}
      <p>{title}</p>
    </div>
  );
};

export default Navigation;
